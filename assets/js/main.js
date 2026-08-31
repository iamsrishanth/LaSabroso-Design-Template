/* ==========================================================================
   La Sabroso — shared JS (v2, verified 2026-08-31)
   Hooks: nav toggle, scroll reveal (IntersectionObserver), menu page
   (fetch menu-data.json -> tabs + search + veg filter + skeleton + empty),
   home menu preview (6 category pills), testimonial carousel, lightbox,
   newsletter, marquee auto-duplicate. Vanilla, no dependencies, no
   window scroll listeners.

   CONTRACT FILE — Wave agents: READ-ONLY. Pages only add data-* attributes.
   ========================================================================== */
(function () {
  'use strict';

  /* Chef's picks — 19 names, each matches EXACTLY one item in
     menu-data.json (verified 2026-08-31), so DOM badge count == 19. */
  window.CHEF_PICKS = [
    'Honey Lemon Pepper Chicken Tenders', 'Chipotle Veg Burger',
    'Roasted Tomato Soup With Cheese Toast', 'Chilli Basil Paneer',
    'Parmesan Crumb Fried Chicken', 'Veg Fried Momos', 'Veg Arrabbiata Pasta',
    'Peppy Paneer Pizza', 'Mutton Kheema Pizza', 'Pesto Chicken Sandwich',
    'Spicy Mozzarella Rissoto', 'Marry Me Chicken', 'Tuscan Chicken',
    'Cappuccino', 'Classic Cold Coffee', 'Lotus Biscoff Cold Coffee',
    'Cheese Cake', 'Lava Mud Cheese Cake', 'Chocolate Khoma'
  ];
  var CHEF_SET = {};
  window.CHEF_PICKS.forEach(function (n) { CHEF_SET[n.toLowerCase()] = true; });

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };

  /* Display names for upstream category typos (raw value stays in JSON). */
  var CAT_DISPLAY = {
    "pizza's ( Thin-Crust )": 'Pizzas',
    'iced cofffee': 'Iced Coffee'
  };
  var catLabel = function (c) { return CAT_DISPLAY[c] || c; };

  /* ---------- nav toggle ---------- */
  var navToggle = document.querySelector('[data-nav-toggle]');
  var navLinks = document.querySelector('[data-nav-links]');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- reveal on scroll (progressive enhancement) ----------
     CSS keeps content visible by default. JS hides ONLY below-fold
     elements inline, then IntersectionObserver fades them up. */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    revealEls.forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.85) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
      }
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- shared dish renderer ---------- */
  var itemHTML = function (item) {
    var isChef = !!CHEF_SET[item.name.toLowerCase()];
    var img;
    if (item.img) {
      img = '<img class="menu-item__img" src="' + esc(item.img) + '" alt="' + esc(item.name) +
        '" loading="lazy" data-menu-img>';
    } else {
      img = '<div class="menu-item__img menu-item__img--placeholder" aria-hidden="true">&#9749;</div>';
    }
    return '<article class="menu-item" data-name="' + esc(item.name.toLowerCase()) +
      '" data-desc="' + esc((item.desc || '').toLowerCase()) + '">' +
      img +
      '<div class="menu-item__body">' +
      '<div class="menu-item__top">' +
      '<h3 class="menu-item__name">' +
      '<span class="' + (item.veg ? 'tag-veg' : 'tag-nonveg') + '" title="' + (item.veg ? 'Veg' : 'Non-veg') + '" aria-label="' + (item.veg ? 'Veg' : 'Non-veg') + '"></span>' +
      esc(item.name) +
      (isChef ? '<span class="badge-chef">&#9733; Chef&rsquo;s Pick</span>' : '') +
      '</h3>' +
      '<span class="menu-item__dots" aria-hidden="true"></span>' +
      '<span class="menu-item__price">&#8377;' + item.price + '</span>' +
      '</div>' +
      (item.desc ? '<p class="menu-item__desc">' + esc(item.desc) + '</p>' : '') +
      '</div></article>';
  };

  var skeletonHTML = function () {
    var out = '';
    for (var i = 0; i < 3; i++) {
      out += '<div class="skeleton skeleton--item"><div class="skeleton skeleton--thumb"></div>' +
        '<div><div class="skeleton skeleton--line" style="width:64%"></div>' +
        '<div class="skeleton skeleton--line" style="width:88%"></div>' +
        '<div class="skeleton skeleton--line" style="width:40%"></div></div></div>';
    }
    return out;
  };

  /* Image error capture: swap any broken photo for the placeholder box. */
  var bindImgErrors = function (root) {
    root.addEventListener('error', function (e) {
      var t = e.target;
      if (t && t.tagName === 'IMG' && t.hasAttribute('data-menu-img')) {
        var ph = document.createElement('div');
        ph.className = 'menu-item__img menu-item__img--placeholder';
        ph.setAttribute('aria-hidden', 'true');
        ph.textContent = '\u2615';
        if (t.parentNode) t.parentNode.replaceChild(ph, t);
      }
    }, true);
  };

  /* ---------- full menu page (menu.html) ---------- */
  var menuRoot = document.querySelector('[data-menu-root]');
  var menuTabs = document.querySelector('[data-menu-tabs]');
  var menuSearch = document.querySelector('[data-menu-search]');
  var menuVeg = document.querySelector('[data-menu-veg]');

  if (menuRoot || menuTabs) {
    fetch('assets/js/menu-data.json')
      .then(function (r) { return r.json(); })
      .then(function (payload) {
        var items = payload.items;
        var cats = payload.categories;

        if (menuRoot) {
          menuRoot.innerHTML = skeletonHTML();
          bindImgErrors(menuRoot);
        }
        if (menuTabs) {
          menuTabs.innerHTML = '<button class="menu-tab active" data-cat="__all">All</button>' +
            cats.map(function (c) {
              return '<button class="menu-tab" data-cat="' + esc(c) + '">' + esc(catLabel(c)) + '</button>';
            }).join('');
        }

        if (!menuRoot) return;
        var activeCat = '__all';
        var vegOnly = false;

        var render = function () {
          var q = (menuSearch ? menuSearch.value : '').trim().toLowerCase();
          var html = '';
          cats.forEach(function (cat) {
            var inCat = activeCat === '__all' || cat === activeCat;
            var catItems = items.filter(function (i) { return i.category === cat; });
            var visible = 0;
            var rows = '';
            catItems.forEach(function (i) {
              var matchQ = !q || i.name.toLowerCase().includes(q) || (i.desc || '').toLowerCase().includes(q);
              var matchV = !vegOnly || i.veg;
              if (inCat && matchQ && matchV) { visible += 1; rows += itemHTML(i); }
            });
            if (visible) {
              html += '<section class="menu-cat" data-section="' + esc(cat) + '">' +
                '<h2>' + esc(catLabel(cat)) + '</h2>' +
                '<div class="menu-grid">' + rows + '</div></section>';
            }
          });
          menuRoot.innerHTML = html || '<div class="menu-empty"><strong>No dishes match</strong><p>Try a different search or category.</p></div>';
        };

        if (menuTabs) {
          menuTabs.addEventListener('click', function (e) {
            var btn = e.target.closest('.menu-tab');
            if (!btn) return;
            activeCat = btn.getAttribute('data-cat');
            menuTabs.querySelectorAll('.menu-tab').forEach(function (b) {
              b.classList.toggle('active', b === btn);
            });
            render();
          });
        }
        if (menuSearch) menuSearch.addEventListener('input', render);
        if (menuVeg) {
          menuVeg.addEventListener('click', function () {
            vegOnly = !vegOnly;
            menuVeg.classList.toggle('active', vegOnly);
            menuVeg.setAttribute('aria-pressed', vegOnly ? 'true' : 'false');
            render();
          });
        }
        render();
      })
      .catch(function () {
        if (menuRoot) {
          menuRoot.innerHTML = '<div class="menu-empty"><strong>Menu could not load</strong>' +
            '<p>Please refresh. Live ordering is on Zomato District and Swiggy Dineout.</p></div>';
        }
      });
  }

  /* ---------- home menu preview (index.html) ---------- */
  var previewTabs = document.querySelector('[data-preview-tabs]');
  var previewGrid = document.querySelector('[data-preview-grid]');
  if (previewTabs && previewGrid) {
    var PREVIEW_GROUPS = {
      'Signature': ['La Sabroso Favourites', 'Signature Cold Coffee'],
      'Momos': ['Momos'],
      'Pasta': ['Veg Pasta', 'Non Veg Pasta'],
      'Pizza': ["pizza's ( Thin-Crust )"],
      'Desserts': ['Desserts'],
      'Coffee': ['Hot Coffee', 'iced cofffee', 'Cold Beverages', 'Milkshakes']
    };
    fetch('assets/js/menu-data.json')
      .then(function (r) { return r.json(); })
      .then(function (payload) {
        var items = payload.items;
        previewTabs.innerHTML = Object.keys(PREVIEW_GROUPS).map(function (label) {
          return '<button class="menu-tab' + (label === 'Signature' ? ' active' : '') + '" data-preview="' + label + '">' + label + '</button>';
        }).join('');
        bindImgErrors(previewGrid);

        var renderPreview = function (label) {
          var cats = PREVIEW_GROUPS[label];
          var picks = [];
          items.forEach(function (i) {
            if (cats.indexOf(i.category) !== -1) picks.push(i);
          });
          if (label === 'Signature') {
            var ranked = [];
            window.CHEF_PICKS.forEach(function (n) {
              items.forEach(function (i) {
                if (i.name.toLowerCase() === n.toLowerCase() && cats.indexOf(i.category) !== -1) ranked.push(i);
              });
            });
            items.forEach(function (i) {
              if (cats.indexOf(i.category) !== -1 && ranked.indexOf(i) === -1) ranked.push(i);
            });
            picks = ranked;
          }
          picks = picks.slice(0, 8);
          previewGrid.innerHTML = picks.map(itemHTML).join('') ||
            '<div class="menu-empty">Dishes landing soon. Check the full menu.</div>';
        };

        previewTabs.addEventListener('click', function (e) {
          var btn = e.target.closest('.menu-tab');
          if (!btn) return;
          previewTabs.querySelectorAll('.menu-tab').forEach(function (b) {
            b.classList.toggle('active', b === btn);
          });
          renderPreview(btn.getAttribute('data-preview'));
        });

        renderPreview('Signature');
      })
      .catch(function () {
        previewGrid.innerHTML = '<div class="menu-empty">Menu preview unavailable right now.</div>';
      });
  }

  /* ---------- testimonial carousel ---------- */
  var carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    var slides = carousel.querySelector('.carousel__slides');
    var dotsWrap = carousel.querySelector('.carousel__dots');
    var total = slides ? slides.children.length : 0;
    var idx = 0;
    if (total > 1 && dotsWrap) {
      for (var i = 0; i < total; i++) {
        (function (n) {
          var b = document.createElement('button');
          b.setAttribute('aria-label', 'Go to review ' + (n + 1));
          if (n === 0) b.classList.add('active');
          b.addEventListener('click', function () { go(n); });
          dotsWrap.appendChild(b);
        })(i);
      }
    }
    var go = function (n) {
      if (!slides || total < 2) return;
      idx = (n + total) % total;
      slides.style.transform = 'translateX(-' + idx * 100 + '%)';
      if (dotsWrap) {
        Array.prototype.forEach.call(dotsWrap.children, function (d, j) {
          d.classList.toggle('active', j === idx);
        });
      }
    };
    var prev = carousel.querySelector('[data-carousel-prev]');
    var next = carousel.querySelector('[data-carousel-next]');
    if (prev) prev.addEventListener('click', function () { go(idx - 1); });
    if (next) next.addEventListener('click', function () { go(idx + 1); });
    if (!reduced) {
      setInterval(function () { go(idx + 1); }, 6000);
    }
  }

  /* ---------- lightbox ---------- */
  var lb = document.querySelector('.lightbox');
  if (lb) {
    var lbImg = lb.querySelector('[data-lightbox-img]');
    var lbCap = lb.querySelector('[data-lightbox-caption]');
    document.querySelectorAll('[data-lightbox]').forEach(function (el) {
      el.addEventListener('click', function () {
        if (lbImg) {
          lbImg.src = el.getAttribute('data-full') || el.src;
          lbImg.alt = el.alt || '';
        }
        if (lbCap) lbCap.textContent = el.getAttribute('data-caption') || '';
        lb.classList.add('open');
        lb.setAttribute('aria-hidden', 'false');
      });
    });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.closest('.lightbox__close')) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLb();
    });
    var closeLb = function () {
      lb.classList.remove('open');
      lb.setAttribute('aria-hidden', 'true');
    };
  }

  /* ---------- contact / booking form (progressive enhancement) ---------- */
  var contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      var fields = contactForm.querySelectorAll('[required]');
      Array.prototype.forEach.call(fields, function (f) {
        var wrap = f.closest('.form-field');
        var ok = f.value && f.value.trim().length > 0;
        if (wrap) wrap.classList.toggle('has-error', !ok);
        if (!ok) valid = false;
      });
      if (!valid) return;
      var done = contactForm.querySelector('[data-form-done]');
      if (done) {
        done.hidden = false;
        done.textContent = 'Thanks! We will reply on Instagram DM within the day.';
      }
      contactForm.reset();
    });
  }

  /* ---------- newsletter ---------- */
  var nlForm = document.querySelector('[data-newsletter]');
  if (nlForm) {
    nlForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = nlForm.querySelector('button');
      var input = nlForm.querySelector('input');
      var msg = nlForm.querySelector('[data-newsletter-msg]');
      if (btn) { btn.textContent = 'Subscribed'; btn.disabled = true; }
      if (input) input.value = '';
      if (msg) msg.textContent = 'Thanks for signing up. See you at the cafe!';
    });
  }

  /* ---------- marquee: duplicate content for a seamless CSS loop ---------- */
  var track = document.querySelector('.marquee__track');
  if (track) {
    var parent = track.parentElement;
    if (parent && track.scrollWidth < parent.clientWidth * 2) {
      var copy = track.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      track.appendChild(copy);
    }
  }
})();