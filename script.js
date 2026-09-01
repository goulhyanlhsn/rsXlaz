/* ============================================
   XLaz — Restaurant Ordering Website
   JavaScript — All functionality
   ============================================ */

// ---- WHATSAPP NUMBER (replace with real number) ----
const WHATSAPP_NUMBER = "212600000000";

// ---- DELIVERY FEE ----
const DELIVERY_FEE = 20;

// ---- PRODUCT DATA ----
const products = [
  // PIZZA
  {
    id: 1,
    name: "Pizza Margherita",
    category: "pizza",
    description: "Tomate fraîche, mozzarella di bufala, basilic frais",
    price: 49,
    image: "images/products/1.png",
    extras: [
      { name: "Extra fromage", price: 10 },
      { name: "Sauce piquante", price: 5 },
      { name: "Champignons", price: 8 }
    ]
  },
  {
    id: 2,
    name: "Pizza Four Fromages",
    category: "pizza",
    description: "Mozzarella, gorgonzola, parmesan, chèvre",
    price: 59,
    image: "images/products/2.png",
    extras: [
      { name: "Extra fromage", price: 10 },
      { name: "Olives noires", price: 5 }
    ]
  },
  {
    id: 3,
    name: "Pizza Poulet Tandoori",
    category: "pizza",
    description: "Poulet mariné tandoori, oignons, poivrons, mozzarella",
    price: 55,
    image: "images/products/3.png",
    extras: [
      { name: "Extra poulet", price: 12 },
      { name: "Sauce piquante", price: 5 }
    ]
  },
  {
    id: 4,
    name: "Pizza Végétarienne",
    category: "pizza",
    description: "Légumes grillés, aubergines, courgettes, poivrons",
    price: 47,
    image: "images/products/4.png",
    extras: [
      { name: "Extra fromage", price: 10 },
      { name: "Avocat", price: 10 }
    ]
  },
  // PATES
  {
    id: 5,
    name: "Pasta Alfredo",
    category: "pasta",
    description: "Tagliatelles, sauce crémeuse à la parmesan",
    price: 55,
    image: "images/products/5.png",
    extras: [
      { name: "Poulet grillé", price: 12 },
      { name: "Extra parmesan", price: 8 }
    ]
  },
  {
    id: 6,
    name: "Penne Bolognese",
    category: "pasta",
    description: "Penne, sauce tomate boeuf mijoté, parmesan",
    price: 52,
    image: "images/products/6.png",
    extras: [
      { name: "Extra parmesan", price: 8 },
      { name: "Pain de mie", price: 5 }
    ]
  },
  {
    id: 7,
    name: "Spaghetti Carbonara",
    category: "pasta",
    description: "Spaghetti, lardons, oeuf, parmesan, poivre noir",
    price: 54,
    image: "images/products/7.png",
    extras: [
      { name: "Extra lardons", price: 10 },
      { name: "Pain de mie", price: 5 }
    ]
  },
  // SALADES
  {
    id: 8,
    name: "Salade César",
    category: "salades",
    description: "Laitue romaine, poulet grillé, croûtons, parmesan, sauce César",
    price: 42,
    image: "images/products/8.png",
    extras: [
      { name: "Extra poulet", price: 12 },
      { name: "Avocat", price: 10 }
    ]
  },
  {
    id: 9,
    name: "Salade Marocaine",
    category: "salades",
    description: "Tomates, concombres, oignons, olives, huile d'olive, cumin",
    price: 30,
    image: "images/products/9.png",
    extras: [
      { name: "Avocat", price: 10 },
      { name: "Thon grillé", price: 12 }
    ]
  },
  {
    id: 10,
    name: "Salade verte aux noix",
    category: "salades",
    description: "Mesclun, noix, figues séchées, vinaigrette balsamique",
    price: 38,
    image: "images/products/10.png",
    extras: [
      { name: "Extra noix", price: 8 },
      { name: "Chèvre chaud", price: 12 }
    ]
  },
  // BURGERS
  {
    id: 11,
    name: "Classic Burger",
    category: "burgers",
    description: "Boeuf Angus, cheddar, laitue, tomate, sauce maison",
    price: 55,
    image: "images/products/11.png",
    extras: [
      { name: "Bacon", price: 8 },
      { name: "Extra fromage", price: 6 },
      { name: "Oeuf", price: 5 }
    ]
  },
  {
    id: 12,
    name: "Chicken Burger",
    category: "burgers",
    description: "Poulet pané croustillant, salade, mayo, cornichons",
    price: 49,
    image: "images/products/12.png",
    extras: [
      { name: "Bacon", price: 8 },
      { name: "Extra fromage", price: 6 }
    ]
  },
  {
    id: 13,
    name: "Double Cheese Burger",
    category: "burgers",
    description: "Double steak boeuf, double cheddar, oignons caramélisés",
    price: 72,
    image: "images/products/13.png",
    extras: [
      { name: "Bacon", price: 8 },
      { name: "Sauce piquante", price: 5 }
    ]
  },
  // GRILLADES
  {
    id: 14,
    name: "Poulet Rôti",
    category: "grillades",
    description: "Poulet entier rôti aux épices, légumes, frites",
    price: 75,
    image: "images/products/14.png",
    extras: [
      { name: "Sauce barbecue", price: 5 },
      { name: "Frites supplémentaires", price: 8 }
    ]
  },
  {
    id: 15,
    name: "Brochettes de Boeuf",
    category: "grillades",
    description: "Brochettes de boeuf mariné, riz, salade, coriandre",
    price: 68,
    image: "images/products/15.png",
    extras: [
      { name: "Sauce marinara", price: 5 },
      { name: "Riz supplémentaire", price: 6 }
    ]
  },
  {
    id: 16,
    name: "Poisson Grillé",
    category: "grillades",
    description: "Filet de dorade grillé, citron, légumes vapeur",
    price: 85,
    image: "images/products/16.png",
    extras: [
      { name: "Sauce citronnée", price: 5 },
      { name: "Riz", price: 6 }
    ]
  },
  // DESSERTS
  {
    id: 17,
    name: "Pastilla au lait",
    category: "desserts",
    description: "Feuilleté croustillant, crème pâtissière, cannelle, sucre glace",
    price: 35,
    image: "images/products/17.png",
    extras: []
  },
  {
    id: 18,
    name: "Mousse au chocolat",
    category: "desserts",
    description: "Mousse chocolat noir intense, crème fouettée",
    price: 30,
    image: "images/products/18.png",
    extras: [
      { name: "Crème supplémentaire", price: 5 }
    ]
  },
  {
    id: 19,
    name: "Cheesecake",
    category: "desserts",
    description: "Cheesecake crémeux, coulis de fruits rouges",
    price: 38,
    image: "images/products/19.png",
    extras: [
      { name: "Coulis supplémentaire", price: 5 }
    ]
  },
  {
    id: 20,
    name: "Crème Brûlée",
    category: "desserts",
    description: "Crème vanille caramélisée, biscuit sec",
    price: 32,
    image: "images/products/20.png",
    extras: []
  },
  // JUS
  {
    id: 21,
    name: "Jus d'orange pressé",
    category: "jus",
    description: "Orange fraîchement pressée, naturelle",
    price: 18,
    image: "images/products/21.png",
    extras: []
  },
  {
    id: 22,
    name: "Smoothie Fraise-Banane",
    category: "jus",
    description: "Fraises, banane, yaourt, miel",
    price: 25,
    image: "images/products/22.png",
    extras: [
      { name: "Protéine", price: 8 }
    ]
  },
  // THE
  {
    id: 23,
    name: "Thé à la menthe",
    category: "boissons",
    description: "Thé vert marocain à la menthe fraîche, traditionnel",
    price: 15,
    image: "images/products/23.png",
    extras: [
      { name: "Avec pâtisserie", price: 10 }
    ]
  },
  // CAFE
  {
    id: 24,
    name: "Café Latte",
    category: "cafe",
    description: "Espresso, lait mousseux, touche de vanille",
    price: 20,
    image: "images/products/24.png",
    extras: [
      { name: "Sirup de vanille", price: 5 }
    ]
  }
];

// ---- STATE ----
let cart = [];
let activeCategory = null;
let currentView = "home";
let searchQuery = "";
let modalProduct = null;
let modalQuantity = 1;
let modalExtras = [];

// ---- DOM HELPERS ----
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ---- VIEWPORT HELPER ----
function isDesktop() {
  return window.innerWidth >= 960;
}

// ---- DOM ELEMENTS ----
const productsGrid = $("#productsGrid");
const productsEmpty = $("#productsEmpty");
const searchInput = $("#searchInput");
const searchClear = $("#searchClear");
const productsSearchInput = $("#productsSearchInput");
const productsSearchClear = $("#productsSearchClear");
const categoriesSidebar = $("#categoriesSidebar");
const cartToggle = $("#cartToggle");
const cartCount = $("#cartCount");
const header = $("#header");

// Desktop sidebar cart
const cartSidebar = $("#cartSidebar");
const cartSidebarEmpty = $("#cartSidebarEmpty");
const cartSidebarItems = $("#cartSidebarItems");
const cartSidebarFooter = $("#cartSidebarFooter");
const cartSidebarSubtotal = $("#cartSidebarSubtotal");
const cartSidebarDelivery = $("#cartSidebarDelivery");
const cartSidebarTotal = $("#cartSidebarTotal");
const sidebarCheckoutBtn = $("#sidebarCheckoutBtn");

// Mobile drawer cart
const cartOverlay = $("#cartOverlay");
const cartDrawer = $("#cartDrawer");
const cartClose = $("#cartClose");
const cartEmpty = $("#cartEmpty");
const cartItems = $("#cartItems");
const cartFooter = $("#cartFooter");
const cartSubtotal = $("#cartSubtotal");
const cartDelivery = $("#cartDelivery");
const cartTotal = $("#cartTotal");
const checkoutBtn = $("#checkoutBtn");

// FAB
const fabCart = $("#fabCart");
const fabCartCount = $("#fabCartCount");

// Checkout
const checkoutOverlay = $("#checkoutOverlay");
const checkoutBack = $("#checkoutBack");
const checkoutItems = $("#checkoutItems");
const checkoutSubtotal = $("#checkoutSubtotal");
const checkoutDelivery = $("#checkoutDelivery");
const checkoutTotal = $("#checkoutTotal");
const checkoutForm = $("#checkoutForm");

// Modal
// Views
const homeView = $("#homeView");
const homeCategories = $("#homeCategories");
const categoryView = $("#categoryView");
const backToMenu = $("#backToMenu");

// Home desktop sidebar cart
const homeCartSidebar = $("#homeCartSidebar");
const homeCartSidebarEmpty = $("#homeCartSidebarEmpty");
const homeCartSidebarItems = $("#homeCartSidebarItems");
const homeCartSidebarFooter = $("#homeCartSidebarFooter");
const homeCartSidebarSubtotal = $("#homeCartSidebarSubtotal");
const homeCartSidebarDelivery = $("#homeCartSidebarDelivery");
const homeCartSidebarTotal = $("#homeCartSidebarTotal");
const homeCartCheckoutBtn = $("#homeCartCheckoutBtn");

// Product modal
const productModal = $("#productModal");
const modalClose = $("#modalClose");
const modalImage = $("#modalImage");
const modalCategory = $("#modalCategory");
const modalTitle = $("#modalTitle");
const modalDesc = $("#modalDesc");
const modalPrice = $("#modalPrice");
const modalExtrasWrap = $("#modalExtras");
const modalQtyValue = $("#modalQtyValue");
const modalQtyMinus = $("#modalQtyMinus");
const modalQtyPlus = $("#modalQtyPlus");
const modalAddToCart = $("#modalAddToCart");
const modalTotalPrice = $("#modalTotalPrice");

// Toast
const toast = $("#toast");
const toastText = $("#toastText");

// ---- CATEGORY LABELS ----
const categoryLabels = {
  pizza: "Pizza",
  pasta: "Pâtes",
  salades: "Salades",
  burgers: "Burgers",
  grillades: "Grillades",
  desserts: "Desserts",
  jus: "Jus",
  boissons: "Boissons",
  cafe: "Café"
};

// ---- CATEGORY LIST ----
const categoryList = [
  { id: "pizza", label: "Pizza" },
  { id: "pasta", label: "Pâtes" },
  { id: "salades", label: "Salades" },
  { id: "burgers", label: "Burgers" },
  { id: "grillades", label: "Grillades" },
  { id: "desserts", label: "Desserts" },
  { id: "jus", label: "Jus" },
  { id: "boissons", label: "Boissons" },
  { id: "cafe", label: "Café" }
];

// ---- CATEGORY REPRESENTATIVE IMAGE (first product's image) ----
const categoryImages = {};
categoryList.forEach((c) => {
  const first = products.find((p) => p.category === c.id);
  categoryImages[c.id] = first ? first.image : "";
});

// ---- CATEGORY EMOJI (decorative) ----
const categoryEmojis = {
  pizza: "🍕",
  pasta: "🍝",
  salades: "🥗",
  burgers: "🍔",
  grillades: "🍢",
  desserts: "🍰",
  jus: "🥤",
  boissons: "🍹",
  cafe: "☕"
};

// ============================================
// INIT
// ============================================
function init() {
  loadCart();

  const footerYear = document.getElementById("footerYear");
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  // URL routing: ?familyName= opens that category, otherwise home
  const params = new URLSearchParams(window.location.search);
  const familyName = params.get("familyName");
  if (familyName && categoryLabels[familyName.toLowerCase()]) {
    showCategoryView(familyName.toLowerCase());
  } else {
    showHomeView();
  }

  updateCartUI();
  bindEvents();
  checkScrollFab();
}

// ============================================
// LOCALSTORAGE
// ============================================
function loadCart() {
  try {
    const saved = localStorage.getItem("daratlas_cart");
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem("daratlas_cart", JSON.stringify(cart));
}

// ============================================
// CATEGORY COUNT
// ============================================
function categoryCount(cat) {
  if (cat === "all") return products.length;
  return products.filter((p) => p.category === cat).length;
}

// ============================================
// RENDER CATEGORY SIDEBAR
// ============================================
function renderCategories() {
  categoriesSidebar.innerHTML = categoryList.map((c) => `
    <button class="categories-btn${activeCategory === c.id ? " active" : ""}" data-category="${c.id}">
      <span class="categories-btn__name">${c.label}</span>
      <span class="categories-btn__count">${categoryCount(c.id)}</span>
    </button>
  `).join("");
}

// ============================================
// RENDER HOME CATEGORY CARDS
// ============================================
function renderHomeCategories() {
  homeCategories.innerHTML = categoryList.map((c) => `
    <button class="home-cat-card" data-category="${c.id}">
      <span class="home-cat-card__name">${c.label}</span>
      <img class="home-cat-card__image" src="${categoryImages[c.id]}" alt="${c.label}" loading="lazy">
    </button>
  `).join("");
}

// ============================================
// VIEW SWITCHING (home <-> category)
// ============================================
function showHomeView() {
  currentView = "home";
  activeCategory = null;
  homeView.style.display = "";
  categoryView.style.display = "none";
  renderHomeCategories();
  // Keep URL clean on home (base URL)
  if (window.location.search) {
    history.replaceState(null, "", window.location.pathname);
  }
}

function showCategoryView(cat) {
  currentView = "category";
  activeCategory = cat || null;
  homeView.style.display = "none";
  categoryView.style.display = "";
  searchQuery = "";
  searchInput.value = "";
  searchClear.style.display = "none";
  productsSearchInput.value = "";
  productsSearchClear.style.display = "none";
  renderCategories();
  renderProducts();
  // Reflect category in URL
  const label = activeCategory ? categoryLabels[activeCategory] : null;
  if (label) {
    history.replaceState(null, "", `?familyName=${encodeURIComponent(label)}`);
  } else {
    history.replaceState(null, "", window.location.pathname);
  }
}
// ============================================
// RENDER PRODUCTS
// ============================================
function renderProducts() {
  renderCategories();

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === null || p.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    productsGrid.style.display = "none";
    productsEmpty.style.display = "block";
    return;
  }

  productsGrid.style.display = "";
  productsEmpty.style.display = "none";

  productsGrid.innerHTML = filtered.map((p) => `
    <article class="product-card" data-id="${p.id}">
      <div class="product-card__image-wrap">
        <img class="product-card__image" src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.description}</p>
        <div class="product-card__footer">
          <span class="product-card__price">${p.price.toFixed(2)} Dhs</span>
          <button class="product-card__add" data-id="${p.id}" aria-label="Ajouter ${p.name} au panier">+</button>
        </div>
      </div>
    </article>
  `).join("");
}

// ============================================
// BIND EVENTS
// ============================================
function bindEvents() {
  // Categories (sidebar)
  categoriesSidebar.addEventListener("click", (e) => {
    const btn = e.target.closest(".categories-btn");
    if (!btn) return;
    const cat = btn.dataset.category;
    if (activeCategory === cat) return;
    activeCategory = cat;
    renderCategories();
    renderProducts();
    const label = categoryLabels[activeCategory];
    if (label) {
      history.replaceState(null, "", `?familyName=${encodeURIComponent(label)}`);
    }
  });

  // Home category cards -> switch to category view
  homeCategories.addEventListener("click", (e) => {
    const card = e.target.closest(".home-cat-card");
    if (!card) return;
    showCategoryView(card.dataset.category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Back to home
  backToMenu.addEventListener("click", () => {
    showHomeView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Search (header)
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    searchClear.style.display = searchQuery ? "flex" : "none";
    if (productsSearchInput) productsSearchInput.value = searchQuery;
    if (productsSearchClear) productsSearchClear.style.display = searchQuery ? "flex" : "none";
    // If searching from home, jump into the category view (all products)
    if (currentView === "home" && searchQuery) {
      showCategoryView(null);
    }
    renderProducts();
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClear.style.display = "none";
    if (productsSearchInput) { productsSearchInput.value = ""; }
    if (productsSearchClear) { productsSearchClear.style.display = "none"; }
    // If no category was selected (search opened the view), return home
    if (activeCategory === null) { showHomeView(); }
    renderProducts();
    searchInput.focus();
  });

  // Search (products toolbar)
  productsSearchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    productsSearchClear.style.display = searchQuery ? "flex" : "none";
    searchInput.value = searchQuery;
    searchClear.style.display = searchQuery ? "flex" : "none";
    renderProducts();
  });

  productsSearchClear.addEventListener("click", () => {
    productsSearchInput.value = "";
    searchQuery = "";
    productsSearchClear.style.display = "none";
    searchInput.value = "";
    searchClear.style.display = "none";
    if (activeCategory === null) { showHomeView(); }
    renderProducts();
    productsSearchInput.focus();
  });

  // Product click — open modal or quick add
  productsGrid.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".product-card__add");
    const card = e.target.closest(".product-card");

    if (addBtn) {
      e.stopPropagation();
      const id = parseInt(addBtn.dataset.id);
      quickAddToCart(id);
      addBtn.classList.add("bounce");
      setTimeout(() => addBtn.classList.remove("bounce"), 400);
      return;
    }

    if (card) {
      const id = parseInt(card.dataset.id);
      openProductModal(id);
    }
  });

  // Cart toggle (header)
  cartToggle.addEventListener("click", openCart);

  // FAB cart (mobile)
  fabCart.addEventListener("click", openCart);

  // Mobile drawer close
  cartClose.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);

  // Checkout buttons (both sidebar and drawer)
  sidebarCheckoutBtn.addEventListener("click", openCheckout);
  checkoutBtn.addEventListener("click", openCheckout);
  homeCartCheckoutBtn.addEventListener("click", openCheckout);


  // Modal
  modalClose.addEventListener("click", closeProductModal);
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) closeProductModal();
  });

  modalQtyMinus.addEventListener("click", () => {
    if (modalQuantity > 1) {
      modalQuantity--;
      modalQtyValue.textContent = modalQuantity;
      updateModalTotal();
    }
  });

  modalQtyPlus.addEventListener("click", () => {
    if (modalQuantity < 20) {
      modalQuantity++;
      modalQtyValue.textContent = modalQuantity;
      updateModalTotal();
    }
  });

  modalAddToCart.addEventListener("click", addFromModal);

  // Checkout
  checkoutBack.addEventListener("click", closeCheckout);
  checkoutForm.addEventListener("submit", sendWhatsAppOrder);

  // Scroll effects
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
    checkScrollFab();
  });
}

// ============================================
// FAB VISIBILITY
// ============================================
function checkScrollFab() {
  if (isDesktop()) {
    fabCart.style.display = "none";
    return;
  }
  // Mobile: navbar is hidden, always show the floating cart button
  fabCart.style.display = "flex";
}

// ============================================
// QUICK ADD (from card + button)
// ============================================
function quickAddToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId && item.extras.length === 0);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      extras: []
    });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} ajouté au panier`);
}

// ============================================
// PRODUCT MODAL
// ============================================
function openProductModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  modalProduct = product;
  modalQuantity = 1;
  modalExtras = [];

  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalCategory.textContent = categoryLabels[product.category] || product.category;
  modalTitle.textContent = product.name;
  modalDesc.textContent = product.description;
  modalPrice.textContent = `${product.price} DH`;
  modalQtyValue.textContent = "1";

  // Render extras
  if (product.extras && product.extras.length > 0) {
    modalExtrasWrap.innerHTML = `
      <h4 class="modal__extras-title">Extras</h4>
      ${product.extras.map((ex, i) => `
        <label class="modal__extra" data-index="${i}">
          <span class="modal__extra-check"></span>
          <span class="modal__extra-label">${ex.name}</span>
          <span class="modal__extra-price">+${ex.price} DH</span>
        </label>
      `).join("")}
    `;
    modalExtrasWrap.style.display = "";
  } else {
    modalExtrasWrap.innerHTML = "";
    modalExtrasWrap.style.display = "none";
  }

  // Bind extra toggles (simplified rebuild approach)
  modalExtrasWrap.querySelectorAll(".modal__extra").forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("selected");
      modalExtras = [];
      modalExtrasWrap.querySelectorAll(".modal__extra.selected").forEach((sel) => {
        modalExtras.push(product.extras[parseInt(sel.dataset.index)]);
      });
      updateModalTotal();
    });
  });

  updateModalTotal();
  productModal.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  productModal.classList.remove("active");
  document.body.classList.remove("modal-open");
  modalProduct = null;
}

function updateModalTotal() {
  if (!modalProduct) return;
  let extrasTotal = modalExtras.reduce((sum, ex) => sum + ex.price, 0);
  let total = (modalProduct.price + extrasTotal) * modalQuantity;
  modalTotalPrice.textContent = `${total} DH`;
}

function addFromModal() {
  if (!modalProduct) return;

  const item = {
    id: modalProduct.id,
    name: modalProduct.name,
    price: modalProduct.price,
    image: modalProduct.image,
    quantity: modalQuantity,
    extras: [...modalExtras]
  };

  cart.push(item);
  saveCart();
  updateCartUI();
  closeProductModal();
  showToast(`${item.name} ajouté au panier`);
}

// ============================================
// CART RENDERING HELPER
// Renders cart content into a given container set
// ============================================
function renderCartTo(emptyEl, itemsEl, footerEl, subtotalEl, deliveryEl, totalEl) {
  if (cart.length === 0) {
    emptyEl.style.display = "flex";
    itemsEl.style.display = "none";
    footerEl.style.display = "none";
    return;
  }

  emptyEl.style.display = "none";
  itemsEl.style.display = "";
  footerEl.style.display = "";

  itemsEl.innerHTML = cart.map((item, idx) => {
    const extrasLabel = item.extras.length > 0
      ? item.extras.map((e) => e.name).join(", ")
      : "";
    const extrasTotal = item.extras.reduce((s, e) => s + e.price, 0);
    const lineTotal = (item.price + extrasTotal) * item.quantity;
    const originalPrice = item.price + extrasTotal;

    return `
      <div class="cart-item" data-index="${idx}">
        <img class="cart-item__image" src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="cart-item__info">
          <div class="cart-item__top">
            <span class="cart-item__name">${item.name}</span>
            <span class="cart-item__original">${originalPrice} DH</span>
          </div>
          <div class="cart-item__details">
            <div class="cart-item__name-price">
              <span class="cart-item__name-price-name">${item.name}</span>
              <span class="cart-item__name-price-price">${originalPrice} DH</span>
            </div>
            ${extrasLabel ? `<p class="cart-item__remark">+ ${extrasLabel}</p>` : ""}
            <p class="cart-item__unit">Prix unitaire : ${originalPrice} DH</p>
          </div>
          <div class="cart-item__bottom">
            <span class="cart-item__price">${lineTotal} DH</span>
            <div class="cart-item__controls">
              <button class="cart-item__delete" data-index="${idx}" aria-label="Supprimer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
              <button class="cart-item__qty-btn" data-action="minus" data-index="${idx}" aria-label="Diminuer">&minus;</button>
              <span class="cart-item__qty-val">${item.quantity}</span>
              <button class="cart-item__qty-btn" data-action="plus" data-index="${idx}" aria-label="Augmenter">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Bind quantity controls
  itemsEl.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index);
      const action = btn.dataset.action;
      if (action === "plus") {
        cart[idx].quantity = Math.min(cart[idx].quantity + 1, 20);
      } else if (action === "minus") {
        if (cart[idx].quantity > 1) {
          cart[idx].quantity--;
        } else {
          cart.splice(idx, 1);
        }
      }
      saveCart();
      updateCartUI();
    });
  });

  // Bind delete buttons
  itemsEl.querySelectorAll(".cart-item__delete").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index);
      cart.splice(idx, 1);
      saveCart();
      updateCartUI();
    });
  });

  // Calculate and update summary
  const subtotal = cart.reduce((sum, item) => {
    const extrasPrice = item.extras.reduce((s, e) => s + e.price, 0);
    return sum + (item.price + extrasPrice) * item.quantity;
  }, 0);

  subtotalEl.textContent = `${subtotal} DH`;
  deliveryEl.textContent = `${DELIVERY_FEE} DH`;
  totalEl.textContent = `${subtotal + DELIVERY_FEE} DH`;
}

// ============================================
// UPDATE CART UI (renders to both containers)
// ============================================
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update counter badges
  cartCount.textContent = totalItems;
  cartCount.classList.toggle("visible", totalItems > 0);
  fabCartCount.textContent = totalItems;

  // FAB visibility
  checkScrollFab();

  // Render to desktop sidebar (category view)
  renderCartTo(
    cartSidebarEmpty, cartSidebarItems, cartSidebarFooter,
    cartSidebarSubtotal, cartSidebarDelivery, cartSidebarTotal
  );

  // Render to home desktop sidebar
  renderCartTo(
    homeCartSidebarEmpty, homeCartSidebarItems, homeCartSidebarFooter,
    homeCartSidebarSubtotal, homeCartSidebarDelivery, homeCartSidebarTotal
  );

  // Render to mobile drawer
  renderCartTo(
    cartEmpty, cartItems, cartFooter,
    cartSubtotal, cartDelivery, cartTotal
  );
}

// ============================================
// CART OPEN/CLOSE
// ============================================
function openCart() {
  if (isDesktop()) {
    // Scroll to the visible sticky sidebar cart
    const target = currentView === "home" ? homeCartSidebar : cartSidebar;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    // Mobile: reveal the hidden cart (toggle) and scroll to it
    const target = currentView === "home" ? homeCartSidebar : cartSidebar;
    const willShow = !target.classList.contains("show");
    target.classList.toggle("show", willShow);
    if (willShow) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function closeCart() {
  cartDrawer.classList.remove("active");
  cartOverlay.classList.remove("active");
  document.body.classList.remove("cart-open");
}

// ============================================
// CHECKOUT
// ============================================
function openCheckout() {
  if (cart.length === 0) return;

  closeCart();

  const subtotal = cart.reduce((sum, item) => {
    const extrasPrice = item.extras.reduce((s, e) => s + e.price, 0);
    return sum + (item.price + extrasPrice) * item.quantity;
  }, 0);

  // Render checkout items
  checkoutItems.innerHTML = cart.map((item) => {
    const extrasLabel = item.extras.length > 0
      ? ` (${item.extras.map((e) => e.name).join(", ")})`
      : "";
    const lineTotal = (item.price + item.extras.reduce((s, e) => s + e.price, 0)) * item.quantity;
    return `
      <div class="checkout__summary-item">
        <div>
          <span class="checkout__summary-item-name">${item.name}${extrasLabel}</span>
          <span class="checkout__summary-item-qty"> × ${item.quantity}</span>
        </div>
        <span class="checkout__summary-item-price">${lineTotal} DH</span>
      </div>
    `;
  }).join("");

  checkoutSubtotal.textContent = `${subtotal} DH`;
  checkoutDelivery.textContent = `${DELIVERY_FEE} DH`;
  checkoutTotal.textContent = `${subtotal + DELIVERY_FEE} DH`;

  checkoutOverlay.classList.add("active");
  document.body.classList.add("modal-open");

  // Pre-fill from saved info
  try {
    const info = JSON.parse(localStorage.getItem("daratlas_info"));
    if (info) {
      $("#custName").value = info.name || "";
      $("#custPhone").value = info.phone || "";
    }
  } catch (e) { /* ignore */ }
}

function closeCheckout() {
  checkoutOverlay.classList.remove("active");
  document.body.classList.remove("modal-open");
}

// ============================================
// SEND WHATSAPP ORDER
// ============================================
function sendWhatsAppOrder(e) {
  e.preventDefault();

  const name = $("#custName").value.trim();
  const phone = $("#custPhone").value.trim();

  // Validate required fields
  let valid = true;
  const fields = [
    { el: $("#custName"), val: name },
    { el: $("#custPhone"), val: phone }
  ];

  fields.forEach((f) => {
    f.el.classList.remove("error");
    if (!f.val) {
      f.el.classList.add("error");
      valid = false;
    }
  });

  if (!valid) {
    showToast("Veuillez remplir tous les champs obligatoires");
    return;
  }

  // Save customer info for next time
  localStorage.setItem("daratlas_info", JSON.stringify({ name, phone }));

  // Build WhatsApp message
  const subtotal = cart.reduce((sum, item) => {
    const extrasPrice = item.extras.reduce((s, e) => s + e.price, 0);
    return sum + (item.price + extrasPrice) * item.quantity;
  }, 0);
  const total = subtotal + DELIVERY_FEE;

  const lines = [];
  lines.push("Bonjour 👋");
  lines.push("");
  lines.push("Je souhaite passer une commande :");
  lines.push("");

  cart.forEach((item) => {
    const extrasPrice = item.extras.reduce((s, e) => s + e.price, 0);
    const lineTotal = (item.price + extrasPrice) * item.quantity;
    const extrasLabel = item.extras.length > 0 ? ` (+${item.extras.map((e) => e.name).join(", ")})` : "";
    lines.push(`• ${item.name}${extrasLabel} × ${item.quantity} — ${lineTotal} DH`);
  });

  lines.push("");
  lines.push(`Sous-total : ${subtotal} DH`);
  lines.push(`Livraison : ${DELIVERY_FEE} DH`);
  lines.push(`💰 Total : ${total} DH`);
  lines.push("");
  lines.push(`👤 Nom : ${name}`);
  lines.push(`📞 Téléphone : ${phone}`);
  lines.push("");
  lines.push("Merci !");

  const message = encodeURIComponent(lines.join("\n"));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank");
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(text) {
  toastText.textContent = text;
  toast.classList.add("visible");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}

// ============================================
// INIT ON DOM READY
// ============================================
document.addEventListener("DOMContentLoaded", init);
