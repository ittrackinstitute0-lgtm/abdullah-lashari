/**
 * HAFEEZ TOY STORE — SUPABASE & LOCAL DATA LAYER
 * Modern, colorful, professional toy store e-commerce engine
 * Credentials:
 *   URL: https://mlvtisgkahbkffjcwkam.supabase.co
 *   Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sdnRpc2drYWhia2ZmamN3a2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3NjQwNzAsImV4cCI6MjEwNjM0MDA3MH0.AdXTdSHEeQQnHGSMsjo8pQsVlNlV1MDU4xPES2o9zII
 *   Admin Password: ABDULLAH
 */

const SUPABASE_CONFIG = {
  url: 'https://mlvtisgkahbkffjcwkam.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sdnRpc2drYWhia2ZmamN3a2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3NjQwNzAsImV4cCI6MjEwNjM0MDA3MH0.AdXTdSHEeQQnHGSMsjo8pQsVlNlV1MDU4xPES2o9zII',
  publishableKey: 'sb_publishable_xjjiL_KBKhtVHk2VooFG6g_Gy7k1s2k',
  adminPassword: 'ABDULLAH',
  storePhone: '+92 300 8765432',
  whatsappNumber: '923008765432',
  storeAddress: 'Shop # 14-B, Ground Floor, Hafeez Centre, Main Boulevard, Gulberg III, Lahore, Pakistan'
};

// ==========================================
// 1. INITIAL TOY SEED DATA (PKR CURRENCY)
// ==========================================
const INITIAL_TOYS = [
  {
    id: 'toy-001',
    sku: 'HTS-RC-01',
    name: 'High-Speed RC Monster Truck 4WD',
    category: 'Remote Control Toys',
    price: 4999,
    discount_price: 3499,
    stock: 28,
    image_url: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80',
    rating: 4.9,
    reviews_count: 84,
    badge: 'BESTSELLER',
    age_range: '6-14 Years',
    featured: true,
    description: 'Heavy duty 1:16 scale all-terrain monster truck with 2.4GHz remote control, rechargeable lithium battery, shock absorbers, and 30 km/h top speed. Perfect for indoor and outdoor racing.'
  },
  {
    id: 'toy-002',
    sku: 'HTS-CAR-02',
    name: 'Die-Cast Luxury Supercar Fleet (Pack of 5)',
    category: 'Cars & Vehicles',
    price: 2800,
    discount_price: 2199,
    stock: 45,
    image_url: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80',
    rating: 4.8,
    reviews_count: 62,
    badge: 'HOT DEAL',
    age_range: '3-10 Years',
    featured: true,
    description: 'Premium metal die-cast 1:32 scale model cars with opening doors, pull-back action, realistic engine sounds, and LED headlights. Highly durable and safe.'
  },
  {
    id: 'toy-003',
    sku: 'HTS-DOL-03',
    name: 'Princess Dream Villa Wooden Dollhouse',
    category: 'Dolls',
    price: 8500,
    discount_price: 6499,
    stock: 12,
    image_url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80',
    rating: 5.0,
    reviews_count: 39,
    badge: 'PREMIUM',
    age_range: '3-9 Years',
    featured: true,
    description: '3-story fully furnished wooden princess dollhouse with 14 miniature furniture accessories, elevator, balcony, and LED light strip. Made with non-toxic, child-safe paint.'
  },
  {
    id: 'toy-004',
    sku: 'HTS-ACT-04',
    name: 'Ultimate Superhero Avengers Action Figure Set',
    category: 'Action Figures',
    price: 3800,
    discount_price: 2999,
    stock: 35,
    image_url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=700&q=80',
    rating: 4.9,
    reviews_count: 110,
    badge: 'POPULAR',
    age_range: '4-12 Years',
    featured: true,
    description: 'Set of 6 articulated 7-inch superhero figures featuring light-up chest repulsors, interchangeable weapon accessories, and sound effects. High-grade ABS plastic.'
  },
  {
    id: 'toy-005',
    sku: 'HTS-EDU-05',
    name: 'Smart Robotic STEM Building & Coding Kit',
    category: 'Educational Toys',
    price: 6200,
    discount_price: 4899,
    stock: 20,
    image_url: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=700&q=80',
    rating: 4.9,
    reviews_count: 53,
    badge: 'STEM CHOICE',
    age_range: '8-15 Years',
    featured: true,
    description: 'Educational 12-in-1 solar and battery powered robotic engineering kit. Teaches children mechanical assembly, robotics logic, and green energy fundamentals.'
  },
  {
    id: 'toy-006',
    sku: 'HTS-BRD-06',
    name: 'Master Business & Strategy Board Game',
    category: 'Board Games',
    price: 1800,
    discount_price: 1399,
    stock: 50,
    image_url: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=700&q=80',
    rating: 4.7,
    reviews_count: 75,
    badge: 'FAMILY FUN',
    age_range: '6+ All Ages',
    featured: true,
    description: 'Exciting property trading board game for 2 to 6 players. Features Pakistani cities and currency, gold tokens, property cards, and dice for memorable family game nights.'
  },
  {
    id: 'toy-007',
    sku: 'HTS-SFT-07',
    name: 'Giant 3-Foot Jumbo Fluffy Teddy Bear',
    category: 'Soft Toys',
    price: 4500,
    discount_price: 3299,
    stock: 25,
    image_url: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=700&q=80',
    rating: 4.9,
    reviews_count: 98,
    badge: 'CUDDLE BEST',
    age_range: '0+ All Ages',
    featured: true,
    description: 'Ultra-soft, huggable giant 3-foot teddy bear made from premium hypoallergenic velvet plush and PP cotton filling. Safe for infants and toddlers.'
  },
  {
    id: 'toy-008',
    sku: 'HTS-OUT-08',
    name: '3-Wheel Foldable Light-Up Kids Kick Scooter',
    category: 'Outdoor Toys',
    price: 5500,
    discount_price: 4199,
    stock: 30,
    image_url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=700&q=80',
    rating: 4.8,
    reviews_count: 47,
    badge: 'TOP OUTDOOR',
    age_range: '3-8 Years',
    featured: true,
    description: 'Stable 3-wheel design with lean-to-steer technology, LED flashing wheels that light up during motion, 4-level adjustable handlebar, and rear fender safety brake.'
  },
  {
    id: 'toy-009',
    sku: 'HTS-RC-09',
    name: 'Mini Aero Stunt Drone with HD Camera',
    category: 'Remote Control Toys',
    price: 7999,
    discount_price: 5999,
    stock: 18,
    image_url: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=700&q=80',
    rating: 4.8,
    reviews_count: 41,
    badge: 'NEW 2026',
    age_range: '10+ Years',
    featured: false,
    description: 'Altitude hold, one-key takeoff/landing, 360-degree aerial flips, Wi-Fi FPV live video stream to smartphone. Dual modular batteries provide 25+ minutes of flight.'
  },
  {
    id: 'toy-0010',
    sku: 'HTS-DOL-10',
    name: 'Fashion Doll Glamour Boutique & Wardrobe',
    category: 'Dolls',
    price: 3200,
    discount_price: 2499,
    stock: 40,
    image_url: 'https://images.unsplash.com/photo-1582845512747-e42001c95638?auto=format&fit=crop&w=700&q=80',
    rating: 4.7,
    reviews_count: 55,
    badge: 'TRENDING',
    age_range: '4-10 Years',
    featured: false,
    description: 'Includes 12-inch poseable fashion doll with 6 designer party dresses, matching shoes, handbags, dressing mirror, and jewelry box. Inspires endless styling creativity.'
  },
  {
    id: 'toy-0011',
    sku: 'HTS-EDU-11',
    name: 'Magnetic 3D Building Blocks Architecture Set (100 Pcs)',
    category: 'Educational Toys',
    price: 4200,
    discount_price: 3199,
    stock: 32,
    image_url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=700&q=80',
    rating: 5.0,
    reviews_count: 88,
    badge: 'BESTSELLER',
    age_range: '3-12 Years',
    featured: false,
    description: 'Vibrant translucent magnetic tiles with strong neodymium magnets. Build castles, vehicles, geometric shapes, and 3D architectural towers.'
  },
  {
    id: 'toy-0012',
    sku: 'HTS-SFT-12',
    name: 'Cute Glow-in-the-Dark Unicorn Plushie',
    category: 'Soft Toys',
    price: 2200,
    discount_price: 1699,
    stock: 50,
    image_url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80',
    rating: 4.9,
    reviews_count: 67,
    badge: 'SWEET GIFT',
    age_range: '1-8 Years',
    featured: false,
    description: 'Magical unicorn stuffed toy with silky rainbow mane, glitter horn, and soft glowing LED night-light mode with soothing lullaby melodies.'
  }
];

// ==========================================
// 2. SUPABASE CLIENT INITIALIZATION
// ==========================================
let supabaseClient = null;

function initSupabase() {
  if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      console.log('🧸 Hafeez Toy Store Supabase connected to:', SUPABASE_CONFIG.url);
      return supabaseClient;
    } catch (e) {
      console.warn('Supabase client initialization warning:', e);
    }
  }
  return null;
}

// Ensure localStorage has our product list
function getLocalProducts() {
  const data = localStorage.getItem('hafeez_toys_products');
  if (!data) {
    localStorage.setItem('hafeez_toys_products', JSON.stringify(INITIAL_TOYS));
    return INITIAL_TOYS;
  }
  try {
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_TOYS;
  } catch (e) {
    return INITIAL_TOYS;
  }
}

function saveLocalProducts(products) {
  localStorage.setItem('hafeez_toys_products', JSON.stringify(products));
}

// ==========================================
// 3. TOAST NOTIFICATIONS HELPER
// ==========================================
function showToast(message, type = 'success', iconEmoji = null) {
  let toastContainer = document.getElementById('hts-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'hts-toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      pointer-events: none;
      max-width: 90vw;
    `;
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const isSuccess = type === 'success';
  const isError = type === 'error';
  
  let bg = '#1E293B';
  let border = '#FF477E';
  let emoji = iconEmoji || (isSuccess ? '🎉' : isError ? '⚠️' : 'ℹ️');

  if (isSuccess) {
    bg = 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)';
    border = '#06D6A0';
  } else if (isError) {
    bg = '#7F1D1D';
    border = '#EF4444';
  }

  toast.style.cssText = `
    padding: 14px 20px;
    border-radius: 16px;
    background: ${bg};
    border: 2px solid ${border};
    color: #FFFFFF;
    font-family: 'Fredoka', 'Quicksand', 'Plus Jakarta Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
    display: flex;
    align-items: center;
    gap: 12px;
    animation: toastBounceIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    pointer-events: auto;
  `;

  toast.innerHTML = `
    <span style="font-size: 1.4rem; line-height: 1;">${emoji}</span>
    <span style="flex: 1;">${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px) scale(0.95)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Add animation keyframe to head if not present
if (!document.getElementById('hts-toast-style')) {
  const styleTag = document.createElement('style');
  styleTag.id = 'hts-toast-style';
  styleTag.innerHTML = `
    @keyframes toastBounceIn {
      0% { opacity: 0; transform: translateY(30px) scale(0.85); }
      70% { transform: translateY(-4px) scale(1.02); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
  `;
  document.head.appendChild(styleTag);
}

// ==========================================
// 4. CART & WISHLIST STORE HELPERS
// ==========================================
window.HTSCart = {
  getCart() {
    try {
      return JSON.parse(localStorage.getItem('hafeez_cart') || '[]');
    } catch (e) {
      return [];
    }
  },
  
  saveCart(cart) {
    localStorage.setItem('hafeez_cart', JSON.stringify(cart));
    this.updateCounters();
  },

  addItem(productId, qty = 1) {
    const products = window.HTSSupabase.getProductsSync();
    const product = products.find(p => String(p.id) === String(productId) || String(p.sku) === String(productId));
    if (!product) {
      showToast('Product not found', 'error');
      return;
    }

    const cart = this.getCart();
    const existing = cart.find(item => String(item.id) === String(product.id));

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        id: product.id,
        sku: product.sku || product.id,
        name: product.name,
        price: product.discount_price || product.price,
        original_price: product.price,
        image_url: product.image_url,
        category: product.category,
        qty: qty
      });
    }

    this.saveCart(cart);
    showToast(`"${product.name}" added to your Cart!`, 'success', '🛒');
    this.renderCartDrawer();
  },

  updateQty(productId, newQty) {
    let cart = this.getCart();
    if (newQty <= 0) {
      cart = cart.filter(item => String(item.id) !== String(productId));
      showToast('Item removed from cart', 'info', '🗑️');
    } else {
      const item = cart.find(i => String(i.id) === String(productId));
      if (item) item.qty = newQty;
    }
    this.saveCart(cart);
    this.renderCartDrawer();
  },

  removeItem(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => String(item.id) !== String(productId));
    this.saveCart(cart);
    showToast('Item removed from cart', 'info', '🗑️');
    this.renderCartDrawer();
  },

  clearCart() {
    localStorage.setItem('hafeez_cart', '[]');
    this.updateCounters();
    this.renderCartDrawer();
  },

  getTotalCount() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  },

  getSubtotal() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + ((item.price || 0) * (item.qty || 1)), 0);
  },

  updateCounters() {
    const count = this.getTotalCount();
    document.querySelectorAll('.cart-counter-badge').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'inline-flex' : 'none';
    });
    
    // Wishlist count
    const wishCount = window.HTSWishlist ? window.HTSWishlist.getCount() : 0;
    document.querySelectorAll('.wishlist-counter-badge').forEach(el => {
      el.textContent = wishCount;
      el.style.display = wishCount > 0 ? 'inline-flex' : 'none';
    });
  },

  renderCartDrawer() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal-price');
    const deliveryEl = document.getElementById('cart-delivery-price');
    const totalEl = document.getElementById('cart-final-total-price');
    const emptyMsg = document.getElementById('cart-empty-message');
    const cartBody = document.getElementById('cart-filled-body');

    if (!container) return;

    const cart = this.getCart();
    const subtotal = this.getSubtotal();
    const deliveryFee = subtotal === 0 ? 0 : (subtotal >= 3000 ? 0 : 250);
    const finalTotal = subtotal + deliveryFee;

    if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
    if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? (subtotal === 0 ? 'Rs. 0' : 'FREE') : `Rs. ${deliveryFee}`;
    if (totalEl) totalEl.textContent = `Rs. ${finalTotal.toLocaleString()}`;

    if (cart.length === 0) {
      if (emptyMsg) emptyMsg.style.display = 'block';
      if (cartBody) cartBody.style.display = 'none';
      container.innerHTML = '';
      return;
    }

    if (emptyMsg) emptyMsg.style.display = 'none';
    if (cartBody) cartBody.style.display = 'block';

    container.innerHTML = cart.map(item => `
      <div class="cart-drawer-item">
        <img src="${item.image_url}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <span class="cart-item-cat">${item.category || 'Toy'}</span>
          <div class="cart-item-price-row">
            <span class="cart-item-price">Rs. ${(item.price).toLocaleString()}</span>
            <div class="cart-qty-ctrl">
              <button onclick="window.HTSCart.updateQty('${item.id}', ${item.qty - 1})" class="qty-btn" title="Decrease">−</button>
              <span class="qty-number">${item.qty}</span>
              <button onclick="window.HTSCart.updateQty('${item.id}', ${item.qty + 1})" class="qty-btn" title="Increase">+</button>
            </div>
          </div>
        </div>
        <button onclick="window.HTSCart.removeItem('${item.id}')" class="cart-remove-btn" title="Remove">✕</button>
      </div>
    `).join('');
  },

  openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    if (drawer && overlay) {
      drawer.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.renderCartDrawer();
    }
  },

  closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-drawer-overlay');
    if (drawer && overlay) {
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  },

  generateWhatsAppOrderUrl(customerName = '', customerCity = '', customerAddress = '') {
    const cart = this.getCart();
    if (cart.length === 0) {
      showToast('Your shopping cart is empty!', 'error');
      return null;
    }

    const subtotal = this.getSubtotal();
    const deliveryFee = subtotal >= 3000 ? 0 : 250;
    const finalTotal = subtotal + deliveryFee;

    let text = `🧸 *NEW ORDER — HAFEEZ TOY STORE*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    if (customerName) text += `👤 *Customer:* ${customerName}\n`;
    if (customerCity) text += `📍 *City:* ${customerCity}\n`;
    if (customerAddress) text += `🏠 *Address:* ${customerAddress}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `🛍️ *ORDERED ITEMS:*\n\n`;

    cart.forEach((item, index) => {
      text += `${index + 1}. *${item.name}*\n`;
      text += `   Qty: ${item.qty} × Rs. ${(item.price).toLocaleString()} = Rs. ${(item.price * item.qty).toLocaleString()}\n`;
    });

    text += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `💵 *Subtotal:* Rs. ${subtotal.toLocaleString()}\n`;
    text += `🚚 *Delivery:* ${deliveryFee === 0 ? 'FREE (Special Offer)' : 'Rs. ' + deliveryFee}\n`;
    text += `⭐ *TOTAL PAYABLE (COD):* Rs. ${finalTotal.toLocaleString()}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `_Please confirm my toy order for fast Cash on Delivery! Thank you!_`;

    const encoded = encodeURIComponent(text);
    return `https://wa.me/${SUPABASE_CONFIG.whatsappNumber}?text=${encoded}`;
  }
};

// ==========================================
// 5. WISHLIST MANAGEMENT
// ==========================================
window.HTSWishlist = {
  getWishlist() {
    try {
      return JSON.parse(localStorage.getItem('hafeez_wishlist') || '[]');
    } catch (e) {
      return [];
    }
  },

  saveWishlist(list) {
    localStorage.setItem('hafeez_wishlist', JSON.stringify(list));
    window.HTSCart.updateCounters();
  },

  toggle(productId) {
    const products = window.HTSSupabase.getProductsSync();
    const product = products.find(p => String(p.id) === String(productId) || String(p.sku) === String(productId));
    if (!product) return;

    let list = this.getWishlist();
    const existsIndex = list.findIndex(id => String(id) === String(product.id));

    if (existsIndex >= 0) {
      list.splice(existsIndex, 1);
      this.saveWishlist(list);
      showToast(`Removed "${product.name}" from Wishlist`, 'info', '💔');
    } else {
      list.push(product.id);
      this.saveWishlist(list);
      showToast(`Added "${product.name}" to Wishlist!`, 'success', '💖');
    }
    this.updateHeartIcons();
  },

  isWishlisted(productId) {
    const list = this.getWishlist();
    return list.some(id => String(id) === String(productId));
  },

  getCount() {
    return this.getWishlist().length;
  },

  updateHeartIcons() {
    const list = this.getWishlist();
    document.querySelectorAll('[data-wishlist-btn]').forEach(btn => {
      const id = btn.getAttribute('data-product-id');
      if (id && list.includes(id)) {
        btn.classList.add('active');
        btn.innerHTML = '❤️';
      } else if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        btn.innerHTML = '🤍';
      }
    });
  }
};

// ==========================================
// 6. GLOBAL SUPABASE & STORE OPERATIONS
// ==========================================
window.HTSSupabase = {
  config: SUPABASE_CONFIG,

  getClient() {
    if (!supabaseClient) {
      initSupabase();
    }
    return supabaseClient;
  },

  getProductsSync() {
    return getLocalProducts();
  },

  async fetchProducts() {
    const client = this.getClient();
    if (!client) {
      return getLocalProducts();
    }
    try {
      const { data, error } = await client
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error || !data || data.length === 0) {
        console.log('Supabase returned empty or error, using local seed products.');
        return getLocalProducts();
      }

      // Map Supabase rows to consistent schema
      const mapped = data.map(item => ({
        id: item.id || item.sku,
        sku: item.sku || `HTS-${item.id}`,
        name: item.name,
        category: item.category || 'Toys',
        price: Number(item.price),
        discount_price: item.discount_price ? Number(item.discount_price) : null,
        stock: item.stock !== undefined ? item.stock : 20,
        image_url: item.image_url || 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80',
        rating: Number(item.rating || 5.0),
        reviews_count: item.reviews_count || 12,
        badge: item.badge || '',
        age_range: item.age_range || '3+ Years',
        featured: item.featured !== false,
        description: item.description || 'Premium, child-safe toy from Hafeez Toy Store.'
      }));

      saveLocalProducts(mapped);
      return mapped;
    } catch (err) {
      console.warn('Error fetching from Supabase, using local fallback:', err);
      return getLocalProducts();
    }
  },

  async addProduct(product) {
    const local = getLocalProducts();
    const newProduct = {
      id: product.id || `toy-${Date.now()}`,
      sku: product.sku || `HTS-TOY-${Math.floor(1000 + Math.random() * 9000)}`,
      name: product.name,
      category: product.category || 'Toys',
      price: Number(product.price),
      discount_price: product.discount_price ? Number(product.discount_price) : null,
      stock: Number(product.stock || 25),
      image_url: product.image_url || 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=80',
      rating: Number(product.rating || 5.0),
      reviews_count: Number(product.reviews_count || 10),
      badge: product.badge || 'NEW',
      age_range: product.age_range || '3+ Years',
      featured: Boolean(product.featured),
      description: product.description || 'Safe and exciting toy from Hafeez Toy Store.'
    };

    local.unshift(newProduct);
    saveLocalProducts(local);

    const client = this.getClient();
    if (client) {
      try {
        const { error } = await client.from('products').insert([{
          name: newProduct.name,
          sku: newProduct.sku,
          category: newProduct.category,
          price: newProduct.price,
          discount_price: newProduct.discount_price,
          stock: newProduct.stock,
          image_url: newProduct.image_url,
          description: newProduct.description,
          rating: newProduct.rating,
          reviews_count: newProduct.reviews_count,
          badge: newProduct.badge
        }]);
        if (error) console.warn('Supabase product insert note:', error.message);
      } catch (err) {
        console.warn('Supabase sync note:', err);
      }
    }

    showToast(`Toy "${newProduct.name}" added successfully!`, 'success', '🧸');
    return newProduct;
  },

  async updateProduct(id, updatedFields) {
    let local = getLocalProducts();
    const index = local.findIndex(p => String(p.id) === String(id) || String(p.sku) === String(id));
    if (index === -1) {
      showToast('Product not found for update', 'error');
      return false;
    }

    local[index] = { ...local[index], ...updatedFields };
    saveLocalProducts(local);

    const client = this.getClient();
    if (client) {
      try {
        await client.from('products').update(updatedFields).eq('id', id);
      } catch (err) {
        console.warn('Supabase update note:', err);
      }
    }

    showToast(`Toy "${local[index].name}" updated!`, 'success', '✏️');
    return local[index];
  },

  async deleteProduct(id) {
    let local = getLocalProducts();
    const item = local.find(p => String(p.id) === String(id) || String(p.sku) === String(id));
    local = local.filter(p => String(p.id) !== String(id) && String(p.sku) !== String(id));
    saveLocalProducts(local);

    const client = this.getClient();
    if (client) {
      try {
        await client.from('products').delete().eq('id', id);
      } catch (err) {
        console.warn('Supabase delete note:', err);
      }
    }

    showToast(`Product "${item ? item.name : id}" deleted`, 'info', '🗑️');
    return true;
  },

  // Save new checkout order to Supabase
  async submitOrder(orderData) {
    const client = this.getClient();
    const orderRef = `#HTS-${Math.floor(10000 + Math.random() * 90000)}`;

    const fullOrder = {
      order_ref: orderRef,
      customer_name: orderData.customerName,
      customer_email: orderData.customerEmail || 'no-email@hafeeztoys.pk',
      customer_phone: orderData.customerPhone,
      customer_location: `${orderData.customerCity}, Pakistan - ${orderData.customerAddress}`,
      product_name: orderData.itemsSummary || 'Multiple Toys Order',
      amount: orderData.totalAmount,
      payment_method: orderData.paymentMethod || 'Cash on Delivery (COD)',
      status: 'Pending',
      created_at: new Date().toISOString()
    };

    // Save locally
    const existingOrders = JSON.parse(localStorage.getItem('hafeez_orders') || '[]');
    existingOrders.unshift(fullOrder);
    localStorage.setItem('hafeez_orders', JSON.stringify(existingOrders));

    if (client) {
      try {
        const { error } = await client.from('orders').insert([fullOrder]);
        if (error) console.warn('Supabase order insert warning:', error.message);
      } catch (err) {
        console.warn('Supabase order error:', err);
      }
    }

    return fullOrder;
  },

  // Submit Contact Form Inquiry
  async submitInquiry(inquiry) {
    const client = this.getClient();
    const localInquiries = JSON.parse(localStorage.getItem('hafeez_inquiries') || '[]');
    localInquiries.unshift({ ...inquiry, created_at: new Date().toISOString() });
    localStorage.setItem('hafeez_inquiries', JSON.stringify(localInquiries));

    if (client) {
      try {
        await client.from('inquiries').insert([{
          full_name: inquiry.fullName,
          email: inquiry.email,
          subject: inquiry.phone ? `Phone: ${inquiry.phone} | ${inquiry.subject}` : inquiry.subject,
          message: inquiry.message
        }]);
      } catch (err) {
        console.warn('Supabase inquiry note:', err);
      }
    }

    showToast('Shukriya! Your message has been sent to Hafeez Toy Store team.', 'success', '💌');
    return { ok: true };
  },

  // Subscribe Newsletter
  async subscribeNewsletter(email) {
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return false;
    }
    const client = this.getClient();
    if (client) {
      try {
        await client.from('subscribers').insert([{ email: email.trim() }]);
      } catch (err) {
        console.warn('Newsletter sub note:', err);
      }
    }
    showToast(`🎉 You're subscribed! Use code "TOYMAGIC10" for 10% off!`, 'success');
    return true;
  },

  // Verify Admin Password (ABDULLAH)
  verifyAdminPassword(inputPass) {
    return String(inputPass).trim() === SUPABASE_CONFIG.adminPassword;
  },

  isAdminAuthenticated() {
    return sessionStorage.getItem('hafeez_admin_auth') === 'true';
  },

  setAdminAuthenticated(status) {
    if (status) {
      sessionStorage.setItem('hafeez_admin_auth', 'true');
    } else {
      sessionStorage.removeItem('hafeez_admin_auth');
    }
  }
};

// Initialize Supabase & update cart counters on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
  window.HTSCart.updateCounters();
});
