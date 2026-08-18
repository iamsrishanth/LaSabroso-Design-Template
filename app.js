/* ==========================================================================
   La Sabroso Café — Core Application Logic & State Engine
   ========================================================================== */

// --- STATE MANAGEMENT ---
let appState = {
  theme: 'light',
  currentView: 'dashboard',
  selectedBranch: 'main',
  
  // Menu Catalog
  menu: [
    { id: 1, name: 'Spanish Latte', category: 'Coffee', price: 5.75, desc: 'Rich espresso blended with sweet condensed milk & velvety microfoam.', available: true, ordersCount: 142, img: './specialty_latte_1786967372186.jpg' },
    { id: 2, name: 'Cappuccino', category: 'Coffee', price: 4.50, desc: 'Double espresso topped with a smooth layer of dense milk foam.', available: true, ordersCount: 118, img: './hero_cafe_1786967045964.jpg' },
    { id: 3, name: 'Cold Coffee', category: 'Cold Beverages', price: 5.25, desc: 'Slow-steeped cold brew poured over ice with Madagascar vanilla.', available: true, ordersCount: 96, img: './specialty_latte_1786967372186.jpg' },
    { id: 4, name: 'Masala Chai', category: 'Tea', price: 4.25, desc: 'Spiced black tea brewed with fresh ginger, cardamom & cinnamon.', available: true, ordersCount: 75, img: './hero_cafe_1786967045964.jpg' },
    { id: 5, name: 'Veg Sandwich', category: 'Snacks', price: 8.50, desc: 'Artisanal sourdough stuffed with grilled zucchini, pesto & avocado.', available: true, ordersCount: 64, img: './artisan_brunch_1786967396580.jpg' },
    { id: 6, name: 'Truffle Cream Pasta', category: 'Main Course', price: 14.50, desc: 'Fresh fettuccine tossed in white truffle sauce with wild mushrooms.', available: true, ordersCount: 52, img: './artisan_brunch_1786967396580.jpg' },
    { id: 7, name: 'Chocolate Brownie', category: 'Desserts', price: 4.75, desc: 'Fudgy dark chocolate brownie topped with roasted hazelnuts.', available: true, ordersCount: 88, img: './bakery_pastries_1786967443955.jpg' },
    { id: 8, name: 'Dulce Cheesecake', category: 'Desserts', price: 6.25, desc: 'Creamy Latin style cheesecake with homemade dulce de leche swirl.', available: true, ordersCount: 91, img: './bakery_pastries_1786967443955.jpg' }
  ],

  // Orders State
  orders: [
    { id: 'ORD-1089', customer: 'Mateo Silva', items: [{ name: 'Spanish Latte', qty: 2, price: 5.75 }, { name: 'Dulce Cheesecake', qty: 1, price: 6.25 }], total: 17.75, payment: 'Card', status: 'Completed', time: '12:04 PM' },
    { id: 'ORD-1090', customer: 'Sofia Ramirez', items: [{ name: 'Veg Sandwich', qty: 1, price: 8.50 }, { name: 'Cold Coffee', qty: 1, price: 5.25 }], total: 13.75, payment: 'UPI', status: 'Ready', time: '12:09 PM' },
    { id: 'ORD-1091', customer: 'Lucas Gomez', items: [{ name: 'Cappuccino', qty: 1, price: 4.50 }, { name: 'Chocolate Brownie', qty: 2, price: 4.75 }], total: 14.00, payment: 'Cash', status: 'Preparing', time: '12:12 PM' },
    { id: 'ORD-1092', customer: 'Elena Torres', items: [{ name: 'Truffle Cream Pasta', qty: 2, price: 14.50 }], total: 29.00, payment: 'Card', status: 'New', time: '12:14 PM' },
    { id: 'ORD-1093', customer: 'Gabriel Vega', items: [{ name: 'Masala Chai', qty: 2, price: 4.25 }], total: 8.50, payment: 'UPI', status: 'New', time: '12:15 PM' }
  ],

  // Ingredient Inventory
  inventory: [
    { id: 1, item: 'Arabica Coffee Beans', category: 'Beans & Coffee', stock: 4.2, unit: 'kg', min: 10.0, status: 'Low Stock', updated: 'Today 10:30 AM' },
    { id: 2, item: 'Whole Milk', category: 'Dairy', stock: 28, unit: 'liters', min: 15, status: 'In Stock', updated: 'Today 08:00 AM' },
    { id: 3, item: 'Oat Milk', category: 'Dairy Alternatives', stock: 3.5, unit: 'liters', min: 8, status: 'Low Stock', updated: 'Today 09:15 AM' },
    { id: 4, item: 'Brown Sugar', category: 'Sweeteners', stock: 18.0, unit: 'kg', min: 5.0, status: 'In Stock', updated: 'Yesterday' },
    { id: 5, item: 'Matcha Powder', category: 'Tea Supplies', stock: 1.2, unit: 'kg', min: 1.0, status: 'In Stock', updated: '2 days ago' },
    { id: 6, item: 'Dark Chocolate Sauce', category: 'Syrups & Cocoa', stock: 0.0, unit: 'liters', min: 4.0, status: 'Out of Stock', updated: 'Today 11:00 AM' },
    { id: 7, item: 'Sourdough Bread', category: 'Bakery', stock: 15, unit: 'loaves', min: 6, status: 'In Stock', updated: 'Today 06:30 AM' },
    { id: 8, item: 'Cheddar Cheese', category: 'Dairy', stock: 6.5, unit: 'kg', min: 3.0, status: 'In Stock', updated: 'Yesterday' },
    { id: 9, item: 'Avocados', category: 'Fresh Produce', stock: 24, unit: 'units', min: 10, status: 'In Stock', updated: 'Today 07:00 AM' },
    { id: 10, item: 'Vanilla Syrup', category: 'Syrups & Cocoa', stock: 8.0, unit: 'bottles', min: 3.0, status: 'In Stock', updated: '3 days ago' },
    { id: 11, item: 'Takeaway Espresso Cups', category: 'Packaging', stock: 350, unit: 'units', min: 100, status: 'In Stock', updated: 'Today 08:30 AM' }
  ],

  // Customers Directory
  customers: [
    { id: 1, name: 'Sofia Ramirez', phone: '+1 (555) 234-5678', email: 'sofia@example.com', orders: 24, totalSpent: 342.50, lastOrder: 'Today, 12:09 PM', status: 'VIP Gold' },
    { id: 2, name: 'Mateo Silva', phone: '+1 (555) 876-5432', email: 'mateo@example.com', orders: 18, totalSpent: 215.00, lastOrder: 'Today, 12:04 PM', status: 'Regular' },
    { id: 3, name: 'Lucas Gomez', phone: '+1 (555) 456-7890', email: 'lucas@example.com', orders: 9, totalSpent: 112.75, lastOrder: 'Today, 12:12 PM', status: 'Regular' },
    { id: 4, name: 'Elena Torres', phone: '+1 (555) 987-6543', email: 'elena@example.com', orders: 31, totalSpent: 489.20, lastOrder: 'Today, 12:14 PM', status: 'VIP Platinum' }
  ],

  // Staff
  staff: [
    { id: 1, name: 'Carlos Mendez', role: 'Head Barista', shift: 'Morning (06:00 - 14:00)', status: 'Active', phone: '+1 (555) 111-2233' },
    { id: 2, name: 'Isabella Cruz', role: 'Senior Cashier', shift: 'Morning (07:00 - 15:00)', status: 'Active', phone: '+1 (555) 222-3344' },
    { id: 3, name: 'Diego Morales', role: 'Shift Manager', shift: 'Full Day', status: 'Active', phone: '+1 (555) 333-4455' },
    { id: 4, name: 'Valeria Reyes', role: 'Junior Barista', shift: 'Evening (14:00 - 22:00)', status: 'Scheduled', phone: '+1 (555) 444-5566' }
  ],

  // Active POS Cart
  posCart: []
};

// Chart instances
let salesChartInstance = null;
let categoryChartInstance = null;
let peakHoursChartInstance = null;
let paymentChartInstance = null;

// --- INITIALIZATION ON LOAD ---
document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  setInterval(updateClock, 1000);
  
  renderDashboard();
  renderOrdersKanban();
  renderMenuGrid();
  renderCategoriesGrid();
  renderInventoryTable();
  renderCustomersTable();
  renderStaffGrid();
  initAnalyticsCharts();
});

// --- CLOCK & HEADER ---
function updateClock() {
  const now = new Date();
  const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const el = document.getElementById('live-datetime');
  if (el) el.textContent = now.toLocaleDateString('en-US', options);
}

function toggleTheme() {
  appState.theme = appState.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', appState.theme);
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.className = appState.theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
  showToast(`Switched to ${appState.theme === 'dark' ? 'Dark Roast' : 'Warm Cream'} mode`, 'info');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.toggle('open');
}

// --- VIEW NAVIGATION ---
function switchView(viewId, navEl) {
  appState.currentView = viewId;

  // Update Nav Active State
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(el => el.classList.remove('active'));
  if (navEl) navEl.classList.add('active');

  // Hide all view sections
  document.querySelectorAll('.app-view').forEach(el => el.style.display = 'none');

  // Show target view
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) targetView.style.display = 'block';

  // Re-render view specific charts if needed
  if (viewId === 'reports') {
    setTimeout(initAnalyticsCharts, 100);
  }

  // Close sidebar on mobile
  if (window.innerWidth <= 1024) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');
  }
}

// --- LOGIN / LOGOUT ---
function handleLogin(e) {
  e.preventDefault();
  const overlay = document.getElementById('login-overlay');
  if (overlay) overlay.style.display = 'none';
  showToast('Welcome back, Admin! La Sabroso POS loaded.', 'success');
}

function quickDemoLogin() {
  const overlay = document.getElementById('login-overlay');
  if (overlay) overlay.style.display = 'none';
  showToast('Signed in as Admin Staff', 'success');
}

function logout() {
  const overlay = document.getElementById('login-overlay');
  if (overlay) overlay.style.display = 'flex';
  showToast('Logged out successfully', 'info');
}

// --- DASHBOARD RENDERERS ---
function renderDashboard() {
  renderPopularToday();
  renderRecentOrders();
  initSalesChart();
}

function renderPopularToday() {
  const container = document.getElementById('popular-today-list');
  if (!container) return;

  const topItems = [...appState.menu].sort((a, b) => b.ordersCount - a.ordersCount).slice(0, 4);

  container.innerHTML = topItems.map(item => `
    <div style="display: flex; align-items: center; gap: 12px; padding: 10px; border-radius: var(--radius-md); background: var(--cream-light); border: 1px solid var(--border);">
      <img src="${item.img}" alt="${item.name}" style="width: 44px; height: 44px; border-radius: var(--radius-sm); object-fit: cover;">
      <div style="flex: 1;">
        <div style="font-weight: 700; font-size: 13.5px; color: var(--text-primary);">${item.name}</div>
        <div style="font-size: 11.5px; color: var(--text-muted);">${item.category} • ${item.ordersCount} orders</div>
      </div>
      <div style="font-weight: 700; color: var(--primary); font-size: 14px;">$${item.price.toFixed(2)}</div>
    </div>
  `).join('');
}

function renderRecentOrders() {
  const tbody = document.getElementById('recent-orders-tbody');
  if (!tbody) return;

  tbody.innerHTML = appState.orders.map(ord => {
    const itemsSummary = ord.items.map(i => `${i.qty}x ${i.name}`).join(', ');
    const statusClass = ord.status === 'Completed' ? 'badge-success' :
                        ord.status === 'Ready' ? 'badge-info' :
                        ord.status === 'Preparing' ? 'badge-warning' : 'badge-danger';
    return `
      <tr>
        <td style="font-weight: 700; color: var(--primary);">${ord.id}</td>
        <td style="font-weight: 600;">${ord.customer}</td>
        <td style="max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${itemsSummary}</td>
        <td style="font-weight: 700; color: var(--text-primary);">$${ord.total.toFixed(2)}</td>
        <td><span class="badge" style="background: var(--background); color: var(--text-secondary);">${ord.payment}</span></td>
        <td><span class="badge ${statusClass}"><span class="badge-dot"></span>${ord.status}</span></td>
        <td style="color: var(--text-muted); font-size: 12px;">${ord.time}</td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="advanceOrderStatus('${ord.id}')">Advance</button>
        </td>
      </tr>
    `;
  }).join('');
}

function initSalesChart() {
  const ctx = document.getElementById('salesChart');
  if (!ctx) return;

  if (salesChartInstance) salesChartInstance.destroy();

  salesChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['08 AM', '09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM'],
      datasets: [{
        label: 'Sales Revenue ($)',
        data: [120, 240, 480, 790, 1150, 1340, 1482, 1600, 1750],
        borderColor: '#5A3825',
        backgroundColor: 'rgba(197, 139, 82, 0.15)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointBackgroundColor: '#C58B52',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: '#EFE8DE' }, ticks: { callback: v => '$' + v } }
      }
    }
  });
}

function updateSalesChart(type) {
  showToast(`Sales view updated to ${type}`, 'info');
}

// --- ORDERS KANBAN ---
function renderOrdersKanban() {
  const cols = {
    new: document.getElementById('col-new'),
    preparing: document.getElementById('col-preparing'),
    ready: document.getElementById('col-ready'),
    completed: document.getElementById('col-completed')
  };

  if (!cols.new) return;

  Object.values(cols).forEach(c => c.innerHTML = '');

  const counts = { new: 0, preparing: 0, ready: 0, completed: 0 };

  appState.orders.forEach(ord => {
    const key = ord.status.toLowerCase();
    if (counts[key] !== undefined) counts[key]++;

    const card = document.createElement('div');
    card.className = 'order-card';
    card.innerHTML = `
      <div class="order-header">
        <span class="order-num">${ord.id}</span>
        <span class="order-time"><i class="fa-regular fa-clock"></i> ${ord.time}</span>
      </div>
      <div class="order-customer">${ord.customer}</div>
      <ul class="order-items-list">
        ${ord.items.map(i => `<li>${i.qty}x ${i.name}</li>`).join('')}
      </ul>
      <div class="order-footer">
        <span class="order-total">$${ord.total.toFixed(2)}</span>
        <button class="btn btn-secondary btn-sm" onclick="advanceOrderStatus('${ord.id}')">
          ${ord.status === 'Completed' ? 'Done ✓' : 'Next Stage →'}
        </button>
      </div>
    `;

    if (cols[key]) cols[key].appendChild(card);
  });

  document.getElementById('count-new').textContent = counts.new;
  document.getElementById('count-preparing').textContent = counts.preparing;
  document.getElementById('count-ready').textContent = counts.ready;
  document.getElementById('count-completed').textContent = counts.completed;
  document.getElementById('new-orders-badge').textContent = counts.new;
}

function advanceOrderStatus(orderId) {
  const ord = appState.orders.find(o => o.id === orderId);
  if (!ord) return;

  const flow = { 'New': 'Preparing', 'Preparing': 'Ready', 'Ready': 'Completed', 'Completed': 'Completed' };
  const next = flow[ord.status];
  ord.status = next;

  showToast(`Order ${orderId} moved to ${next}`, 'success');
  renderDashboard();
  renderOrdersKanban();
}

function filterOrdersKanban(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('.order-card').forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(q) ? 'block' : 'none';
  });
}

// --- MENU MANAGEMENT ---
function renderMenuGrid(itemsToRender = appState.menu) {
  const container = document.getElementById('product-cards-container');
  if (!container) return;

  if (itemsToRender.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-mug-hot empty-icon"></i>
        <div class="empty-title">No menu items found</div>
        <p>Try searching for a different item or category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = itemsToRender.map(item => `
    <div class="product-card">
      <div class="product-img-container">
        <img src="${item.img}" alt="${item.name}" class="product-img">
        <span class="product-category-tag">${item.category}</span>
      </div>
      <div class="product-body">
        <div class="product-title">${item.name}</div>
        <div class="product-desc">${item.desc}</div>
        <div class="product-footer">
          <span class="product-price">$${item.price.toFixed(2)}</span>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-secondary btn-sm btn-icon-only" title="Toggle Availability" onclick="toggleMenuItemAvailability(${item.id})">
              <i class="fa-solid ${item.available ? 'fa-eye' : 'fa-eye-slash'}" style="color: ${item.available ? 'var(--success)' : 'var(--danger)'};"></i>
            </button>
            <button class="btn btn-danger btn-sm btn-icon-only" title="Delete Item" onclick="deleteMenuItem(${item.id})">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function filterMenuCategory(cat, btnEl) {
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  if (cat === 'All') {
    renderMenuGrid(appState.menu);
  } else {
    const filtered = appState.menu.filter(i => i.category === cat);
    renderMenuGrid(filtered);
  }
}

function filterMenuGrid(query) {
  const q = query.toLowerCase();
  const filtered = appState.menu.filter(i => i.name.toLowerCase().includes(q) || i.category.toLowerCase().includes(q));
  renderMenuGrid(filtered);
}

function toggleMenuItemAvailability(id) {
  const item = appState.menu.find(i => i.id === id);
  if (item) {
    item.available = !item.available;
    showToast(`${item.name} is now ${item.available ? 'Available' : 'Out of Stock'}`, 'info');
    renderMenuGrid();
  }
}

function deleteMenuItem(id) {
  appState.menu = appState.menu.filter(i => i.id !== id);
  showToast('Item deleted from menu', 'warning');
  renderMenuGrid();
}

function openAddMenuModal() {
  document.getElementById('modal-add-item').classList.add('active');
}

function handleCreateMenuItem(e) {
  e.preventDefault();
  const name = document.getElementById('new-item-name').value;
  const cat = document.getElementById('new-item-cat').value;
  const price = parseFloat(document.getElementById('new-item-price').value);
  const desc = document.getElementById('new-item-desc').value || 'Delicious artisanal café item freshly prepared.';

  const newItem = {
    id: Date.now(),
    name,
    category: cat,
    price,
    desc,
    available: true,
    ordersCount: 0,
    img: './specialty_latte_1786967372186.jpg'
  };

  appState.menu.unshift(newItem);
  showToast(`Created menu item: ${name}`, 'success');
  closeModal('modal-add-item');
  renderMenuGrid();
}

// --- CATEGORIES VIEW ---
function renderCategoriesGrid() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  const categories = [
    { name: 'Coffee', count: 4, icon: 'fa-mug-hot' },
    { name: 'Tea', count: 2, icon: 'fa-glass-water' },
    { name: 'Cold Beverages', count: 3, icon: 'fa-whiskey-glass' },
    { name: 'Snacks', count: 5, icon: 'fa-bread-slice' },
    { name: 'Main Course', count: 4, icon: 'fa-bowl-food' },
    { name: 'Desserts', count: 6, icon: 'fa-cookie-bite' }
  ];

  container.innerHTML = categories.map(cat => `
    <div class="card" style="margin-bottom: 0; display: flex; align-items: center; justify-content: space-between;">
      <div style="display: flex; align-items: center; gap: 14px;">
        <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--cream); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 20px;">
          <i class="fa-solid ${cat.icon}"></i>
        </div>
        <div>
          <h4 style="font-weight: 700; font-size: 15px; color: var(--text-primary);">${cat.name}</h4>
          <span style="font-size: 12px; color: var(--text-muted);">${cat.count} items active</span>
        </div>
      </div>
      <button class="btn btn-secondary btn-sm" onclick="switchView('menu'); filterMenuCategory('${cat.name}')">View</button>
    </div>
  `).join('');
}

// --- INVENTORY MANAGEMENT ---
function renderInventoryTable() {
  const tbody = document.getElementById('inventory-tbody');
  if (!tbody) return;

  tbody.innerHTML = appState.inventory.map(inv => {
    const badgeClass = inv.status === 'In Stock' ? 'badge-success' :
                       inv.status === 'Low Stock' ? 'badge-warning' : 'badge-danger';
    return `
      <tr>
        <td style="font-weight: 700; color: var(--text-primary);">${inv.item}</td>
        <td>${inv.category}</td>
        <td style="font-weight: 700; font-size: 14px; color: ${inv.status === 'Out of Stock' ? 'var(--danger)' : 'var(--text-primary)'};">${inv.stock}</td>
        <td>${inv.unit}</td>
        <td style="color: var(--text-muted);">${inv.min} ${inv.unit}</td>
        <td><span class="badge ${badgeClass}"><span class="badge-dot"></span>${inv.status}</span></td>
        <td style="font-size: 12px; color: var(--text-muted);">${inv.updated}</td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="quickRestockItem(${inv.id})"><i class="fa-solid fa-plus"></i> Restock</button>
        </td>
      </tr>
    `;
  }).join('');
}

function filterInventoryStatus(statusType) {
  const tbody = document.getElementById('inventory-tbody');
  if (!tbody) return;

  const filtered = appState.inventory.filter(i => i.status !== 'In Stock');
  tbody.innerHTML = filtered.map(inv => {
    return `
      <tr>
        <td style="font-weight: 700; color: var(--text-primary);">${inv.item}</td>
        <td>${inv.category}</td>
        <td style="font-weight: 700; color: var(--danger);">${inv.stock}</td>
        <td>${inv.unit}</td>
        <td>${inv.min} ${inv.unit}</td>
        <td><span class="badge badge-warning"><span class="badge-dot"></span>${inv.status}</span></td>
        <td style="font-size: 12px;">${inv.updated}</td>
        <td><button class="btn btn-primary btn-sm" onclick="quickRestockItem(${inv.id})">Restock</button></td>
      </tr>
    `;
  }).join('');
  showToast('Filtering for Low Stock and Out of Stock items', 'warning');
}

function openRestockModal() {
  const select = document.getElementById('restock-item-select');
  if (select) {
    select.innerHTML = appState.inventory.map(i => `<option value="${i.id}">${i.item} (Current: ${i.stock} ${i.unit})</option>`).join('');
  }
  document.getElementById('modal-restock').classList.add('active');
}

function quickRestockItem(id) {
  const item = appState.inventory.find(i => i.id === id);
  if (item) {
    item.stock += 10;
    item.status = item.stock >= item.min ? 'In Stock' : 'Low Stock';
    item.updated = 'Just now';
    showToast(`Restocked 10 ${item.unit} of ${item.item}`, 'success');
    renderInventoryTable();
  }
}

function submitRestock() {
  const select = document.getElementById('restock-item-select');
  const qty = parseFloat(document.getElementById('restock-qty').value);
  if (select && qty) {
    const id = parseInt(select.value);
    const item = appState.inventory.find(i => i.id === id);
    if (item) {
      item.stock += qty;
      item.status = item.stock >= item.min ? 'In Stock' : 'Low Stock';
      item.updated = 'Just now';
      showToast(`Added ${qty} ${item.unit} to ${item.item}`, 'success');
      closeModal('modal-restock');
      renderInventoryTable();
    }
  }
}

// --- CUSTOMERS ---
function renderCustomersTable() {
  const tbody = document.getElementById('customers-tbody');
  if (!tbody) return;

  tbody.innerHTML = appState.customers.map(c => `
    <tr>
      <td style="font-weight: 700; color: var(--text-primary);">${c.name}</td>
      <td>${c.phone}<br><span style="font-size: 11px; color: var(--text-muted);">${c.email}</span></td>
      <td style="font-weight: 600;">${c.orders} orders</td>
      <td style="font-weight: 700; color: var(--primary);">$${c.totalSpent.toFixed(2)}</td>
      <td style="font-size: 12px; color: var(--text-muted);">${c.lastOrder}</td>
      <td><span class="badge" style="background: var(--cream); color: var(--primary);">${c.status}</span></td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="openCustomerDrawer(${c.id})">Profile</button>
      </td>
    </tr>
  `).join('');
}

function filterCustomersTable(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('#customers-tbody tr').forEach(tr => {
    tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}

function openCustomerDrawer(id) {
  const c = appState.customers.find(cust => cust.id === id);
  if (!c) return;

  document.getElementById('customer-modal-name').textContent = c.name;
  const body = document.getElementById('customer-modal-body');
  if (body) {
    body.innerHTML = `
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="width: 64px; height: 64px; border-radius: var(--radius-full); background: var(--primary); color: #FFF; display: inline-flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 700; margin-bottom: 8px;">
          ${c.name.split(' ').map(n=>n[0]).join('')}
        </div>
        <h4 style="font-size: 16px; font-weight: 700;">${c.name}</h4>
        <span class="badge" style="background: var(--cream); color: var(--primary);">${c.status}</span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; background: var(--cream-light); padding: 12px; border-radius: var(--radius-md);">
        <div>
          <div style="font-size: 11px; color: var(--text-muted);">Total Spent</div>
          <div style="font-size: 18px; font-weight: 700; color: var(--primary);">$${c.totalSpent.toFixed(2)}</div>
        </div>
        <div>
          <div style="font-size: 11px; color: var(--text-muted);">Total Visits</div>
          <div style="font-size: 18px; font-weight: 700; color: var(--text-primary);">${c.orders}</div>
        </div>
      </div>

      <h5 style="font-size: 13px; font-weight: 700; margin-bottom: 8px;">Recent Favorites</h5>
      <div style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.6;">
        • Spanish Latte (x14)<br>
        • Dulce Cheesecake (x8)<br>
        • Veg Sandwich (x4)
      </div>
    `;
  }
  document.getElementById('modal-customer').classList.add('active');
}

// --- STAFF ---
function renderStaffGrid() {
  const container = document.getElementById('staff-grid');
  if (!container) return;

  container.innerHTML = appState.staff.map(s => `
    <div class="card" style="margin-bottom: 0;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <div style="width: 44px; height: 44px; border-radius: var(--radius-full); background: var(--cream); color: var(--primary); display: flex; align-items: center; justify-content: center; font-weight: 700;">
          ${s.name.split(' ').map(n=>n[0]).join('')}
        </div>
        <div>
          <h4 style="font-weight: 700; font-size: 14px;">${s.name}</h4>
          <span style="font-size: 12px; color: var(--accent); font-weight: 600;">${s.role}</span>
        </div>
      </div>
      <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 12px;">
        <i class="fa-regular fa-clock"></i> ${s.shift}<br>
        <i class="fa-solid fa-phone" style="margin-top: 4px;"></i> ${s.phone}
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--divider); padding-top: 10px;">
        <span class="badge badge-success"><span class="badge-dot"></span>${s.status}</span>
        <button class="btn btn-secondary btn-sm" onclick="showToast('Editing ${s.name}', 'info')">Edit Shift</button>
      </div>
    </div>
  `).join('');
}

// --- POS MODAL & SALE BUILDER ---
function openPosModal() {
  appState.posCart = [];
  renderPosItemsSelector();
  renderPosCart();
  document.getElementById('modal-pos').classList.add('active');
}

function renderPosItemsSelector() {
  const container = document.getElementById('pos-items-selector');
  if (!container) return;

  container.innerHTML = appState.menu.map(item => `
    <div onclick="addToPosCart(${item.id})" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md); cursor: pointer; transition: all var(--transition-fast);" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
      <div>
        <div style="font-weight: 700; font-size: 13px; color: var(--text-primary);">${item.name}</div>
        <div style="font-size: 11px; color: var(--text-muted);">${item.category}</div>
      </div>
      <div style="font-weight: 700; color: var(--primary);">$${item.price.toFixed(2)}</div>
    </div>
  `).join('');
}

function addToPosCart(itemId) {
  const item = appState.menu.find(i => i.id === itemId);
  if (!item) return;

  const existing = appState.posCart.find(c => c.id === itemId);
  if (existing) {
    existing.qty++;
  } else {
    appState.posCart.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
  }
  renderPosCart();
}

function renderPosCart() {
  const container = document.getElementById('pos-cart-items');
  if (!container) return;

  if (appState.posCart.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="padding: 24px 0;">
        <i class="fa-solid fa-mug-saucer empty-icon" style="font-size: 28px;"></i>
        <p style="font-size: 12px;">Click items on the left to add to order</p>
      </div>
    `;
    updatePosTotals(0);
    return;
  }

  let subtotal = 0;
  container.innerHTML = appState.posCart.map(c => {
    const lineTotal = c.price * c.qty;
    subtotal += lineTotal;
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 12.5px; background: var(--surface); padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border);">
        <div style="flex: 1;">
          <div style="font-weight: 600;">${c.name}</div>
          <div style="color: var(--text-muted); font-size: 11px;">$${c.price.toFixed(2)} x ${c.qty}</div>
        </div>
        <div style="font-weight: 700; color: var(--primary); margin-right: 10px;">$${lineTotal.toFixed(2)}</div>
        <button class="btn btn-danger btn-sm btn-icon-only" style="padding: 2px 6px; height: 24px;" onclick="removeFromPosCart(${c.id})"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `;
  }).join('');

  updatePosTotals(subtotal);
}

function removeFromPosCart(id) {
  appState.posCart = appState.posCart.filter(c => c.id !== id);
  renderPosCart();
}

function updatePosTotals(subtotal) {
  const tax = subtotal * 0.085;
  const total = subtotal + tax;

  document.getElementById('pos-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('pos-tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('pos-total').textContent = `$${total.toFixed(2)}`;
}

function submitPosOrder() {
  if (appState.posCart.length === 0) {
    showToast('Please add items to cart before completing sale', 'warning');
    return;
  }

  const subtotal = appState.posCart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotal * 1.085;
  const newId = `ORD-${1094 + appState.orders.length}`;

  const newOrd = {
    id: newId,
    customer: 'Walk-in Guest',
    items: appState.posCart.map(c => ({ name: c.name, qty: c.qty, price: c.price })),
    total: total,
    payment: 'Card',
    status: 'New',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  appState.orders.unshift(newOrd);
  showToast(`Receipt printed! Order ${newId} placed successfully.`, 'success');
  closeModal('modal-pos');
  renderDashboard();
  renderOrdersKanban();
}

// --- ANALYTICS CHARTS ---
function initAnalyticsCharts() {
  // 1. Category Chart
  const ctxCat = document.getElementById('categoryChart');
  if (ctxCat) {
    if (categoryChartInstance) categoryChartInstance.destroy();
    categoryChartInstance = new Chart(ctxCat, {
      type: 'doughnut',
      data: {
        labels: ['Coffee', 'Cold Beverages', 'Desserts', 'Snacks', 'Main Course', 'Tea'],
        datasets: [{
          data: [45, 20, 15, 10, 6, 4],
          backgroundColor: ['#5A3825', '#C58B52', '#F3E6D0', '#4B6B8A', '#3F7D58', '#C48632']
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }

  // 2. Peak Hours Chart
  const ctxPeak = document.getElementById('peakHoursChart');
  if (ctxPeak) {
    if (peakHoursChartInstance) peakHoursChartInstance.destroy();
    peakHoursChartInstance = new Chart(ctxPeak, {
      type: 'bar',
      data: {
        labels: ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'],
        datasets: [{
          label: 'Customer Volume',
          data: [15, 42, 88, 95, 60, 110, 92, 45, 55, 30],
          backgroundColor: '#5A3825',
          borderRadius: 6
        }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });
  }

  // 3. Payment Chart
  const ctxPay = document.getElementById('paymentChart');
  if (ctxPay) {
    if (paymentChartInstance) paymentChartInstance.destroy();
    paymentChartInstance = new Chart(ctxPay, {
      type: 'pie',
      data: {
        labels: ['Card Payment', 'UPI / Mobile', 'Cash'],
        datasets: [{
          data: [58, 28, 14],
          backgroundColor: ['#5A3825', '#C58B52', '#3F7D58']
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }

  // Best sellers ranking list
  const bestList = document.getElementById('bestsellers-list');
  if (bestList) {
    bestList.innerHTML = appState.menu.slice(0, 4).map((item, idx) => `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: var(--cream-light); border-radius: var(--radius-md); font-size: 13px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-weight: 700; color: var(--accent); width: 18px;">#${idx + 1}</span>
          <span style="font-weight: 600; color: var(--text-primary);">${item.name}</span>
        </div>
        <span style="font-weight: 700; color: var(--primary);">${item.ordersCount} sold</span>
      </div>
    `).join('');
  }
}

// --- UTILS & MODALS ---
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'success' ? 'fa-circle-check' :
               type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-info';
  const color = type === 'success' ? 'var(--success)' :
                type === 'warning' ? 'var(--warning)' : 'var(--accent)';

  toast.style.borderLeftColor = color;
  toast.innerHTML = `
    <i class="fa-solid ${icon}" style="color: ${color}; font-size: 16px;"></i>
    <span style="font-size: 13px; font-weight: 500; color: var(--text-primary);">${msg}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 200ms ease';
    setTimeout(() => toast.remove(), 200);
  }, 3500);
}

function exportDailyReport() {
  showToast('Daily sales summary PDF generated and sent to printer.', 'success');
}
