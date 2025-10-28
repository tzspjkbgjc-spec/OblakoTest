// ===============================
// ДАНІ ТОВАРІВ
// ===============================

// helper: створюємо товар швидко
function item(id, brand, category, name, price, image) {
  return { id, brand, category, name, price, image };
}

// !!! ВАЖЛИВО:
// image: кидаєш свою фотку в папку /images/ і тут пишеш "images/назвафайлу.jpg"
// поки ставлю "images/placeholder.jpg"

const hookahsKarma = [
  { id: "karma-1",  name: "KARMA MODEL 0.0 ЖОВТИЙ",    price: 8029, image: "images/karma/karma0.0yellow.jpg" },
  { id: "karma-2",  name: "KARMA MODEL 0.0 ЗЕЛЕНИЙ",   price: 7979, image: "images/karma/karma0.0green.jpg" },
  { id: "karma-3",  name: "KARMA MODEL 0.0 ЧЕРВОНИЙ",  price: 8079, image: "images/karma/karma0.0red.jpg" },
  { id: "karma-4",  name: "KARMA MODEL 0.0 ЧОРНИЙ",    price: 7979, image: "images/karma/karma0.0black.jpg" },
  { id: "karma-5",  name: "KARMA MODEL 0.1 WALNUT",    price: 9629, image: "images/karma/karma0.1walnut.jpg" },
  { id: "karma-6",  name: "KARMA MODEL 0.1 BLACK",     price: 9579, image: "images/karma/karma0.1black.jpg" },
  { id: "karma-7",  name: "KARMA MODEL 0.1 WHITE",     price: 9629, image: "images/karma/karma0.1white.jpg" },
  { id: "karma-8",  name: "KARMA MODEL 0.1 GREY",      price: 9579, image: "images/karma/karma0.1grey.jpg" },
  { id: "karma-9",  name: "KARMA MODEL 1.0 BLACK",     price: 10079, image: "images/karma/karma1.0black.jpg" },
  { id: "karma-10", name: "KARMA MODEL 1.0 WALNUT",    price: 10129, image: "images/karma/karma1.0walnut.jpg" },
  { id: "karma-11", name: "KARMA MODEL 1.1 BLACK",     price: 10379, image: "images/karma/karma1.1black.jpg" },
  { id: "karma-12", name: "KARMA MODEL 1.1 WALNUT",    price: 10429, image: "images/karma/karma1.1walnut.jpg" },
  { id: "karma-13", name: "KARMA MODEL 2.0 BLACK",     price: 10979, image: "images/karma/karma2.0black.jpg" },
  { id: "karma-14", name: "KARMA MODEL 2.0 GREY",      price: 11029, image: "images/karma/karma2.0grey.jpg" },
  { id: "karma-15", name: "KARMA MODEL 2.0 WALNUT",    price: 11079, image: "images/karma/karma2.0walnut.jpg" },
  { id: "karma-16", name: "KARMA MODEL 3.0 BLACK",     price: 11529, image: "images/karma/karma3.0black.jpg" },
  { id: "karma-17", name: "KARMA MODEL 3.0 WHITE",     price: 11579, image: "images/karma/karma3.0white.jpg" },
  { id: "karma-18", name: "KARMA MODEL 3.0 GREY",      price: 11629, image: "images/karma/karma3.0grey.jpg" },
  { id: "karma-19", name: "KARMA MODEL 3.0 WALNUT",    price: 11679, image: "images/karma/karma3.0walnut.jpg" },
  { id: "karma-20", name: "KARMA MINI BLACK",          price: 8529, image: "images/karma/karmaminiblack.jpg" },
];

  // --- КАЛЬЯНИ ODIN ---
  item("odin-1", "odin", "hookahs", "ODIN HOOKAH CLASSIC BLACK", 8950, "images/placeholder.jpg"),
  item("odin-2", "odin", "hookahs", "ODIN HOOKAH DEEP GREY", 9050, "images/placeholder.jpg"),
  item("odin-3", "odin", "hookahs", "ODIN HOOKAH BLUE STEEL", 9150, "images/placeholder.jpg"),
  item("odin-4", "odin", "hookahs", "ODIN MINI TRAVEL SET", 7699, "images/placeholder.jpg"),

  // --- КАЛЬЯНИ TOTEM ---
  item("totem-1", "totem", "hookahs", "TOTEM MIKRA RAW", 7800, "images/placeholder.jpg"),
  item("totem-2", "totem", "hookahs", "TOTEM MIKRA BLACK LIMITED", 7990, "images/placeholder.jpg"),
  item("totem-3", "totem", "hookahs", "TOTEM MIKRA WOOD RING", 8120, "images/placeholder.jpg"),

  // --- SKY HOOKAH (SDM / MINI STYLE) ---
  item("sky-1", "sky", "hookahs", "SKY HOOKAH SDM MINI BLACK", 7550, "images/placeholder.jpg"),
  item("sky-2", "sky", "hookahs", "SKY HOOKAH SDM MINI STEEL", 7599, "images/placeholder.jpg"),
  item("sky-3", "sky", "hookahs", "SKY HOOKAH SDM MINI GUNMETAL", 7699, "images/placeholder.jpg"),

  // --- MOZE ---
  item("moze-1", "moze", "hookahs", "MOZE BREEZE TWO GRAPHITE", 6800, "images/placeholder.jpg"),
  item("moze-2", "moze", "hookahs", "MOZE BREEZE TWO WHITE PEARL", 6899, "images/placeholder.jpg"),

  // --- ALPHA ---
  item("alpha-1", "alpha", "hookahs", "ALPHA HOOKAH MODEL X BLACK", 9300, "images/placeholder.jpg"),
  item("alpha-2", "alpha", "hookahs", "ALPHA HOOKAH MODEL X BLUE NEON", 9450, "images/placeholder.jpg"),

  // --- ЧАШІ (OBLAKO / інші) ---
  item("oblako-b1", "oblako", "bowls", "OBLAKO PHUNNEL M MILK", 599, "images/placeholder.jpg"),
  item("oblako-b2", "oblako", "bowls", "OBLAKO PHUNNEL M GLAZE BLACK", 629, "images/placeholder.jpg"),
  item("oblako-b3", "oblako", "bowls", "OBLAKO PHUNNEL M WHITE MATT", 599, "images/placeholder.jpg"),
  item("oblako-b4", "oblako", "bowls", "OBLAKO PHUNNEL S ORANGE", 549, "images/placeholder.jpg"),

  // --- РЕГУЛЯТОРИ ЖАРУ ---
  item("heat-1", "heatctrl", "heat", "УТРИМУВАЧ ЖАРУ CLASSIC STEEL", 449, "images/placeholder.jpg"),
  item("heat-2", "heatctrl", "heat", "КАЛЬЯННИЙ РЕГУЛЯТОР ЖАРУ PRO", 699, "images/placeholder.jpg"),
  item("heat-3", "heatctrl", "heat", "КАЛЛАУД ТИП V2 BLACK", 499, "images/placeholder.jpg"),

  // --- АКСЕСУАРИ ---
  item("acc-1", "heatctrl", "accessories", "ЩІТКА ДЛЯ КОЛБИ", 149, "images/placeholder.jpg"),
  item("acc-2", "heatctrl", "accessories", "ЩИПЦІ ДЛЯ ВУГІЛЛЯ 'OBLΛKO_TEAM'", 199, "images/placeholder.jpg"),
  item("acc-3", "heatctrl", "accessories", "СИЛІКОНОВИЙ ШЛАНГ SOFT TOUCH BLACK", 320, "images/placeholder.jpg"),
  item("acc-4", "heatctrl", "accessories", "МУНДШТУК ІНДИВІДУАЛЬНИЙ З КЕЙСОМ", 270, "images/placeholder.jpg"),
];


// ===============================
// СТАН ДОДАТКА
// ===============================
let currentCategory = "hookahs"; // за замовчуванням
let currentBrand = "all";        // "all" = без фільтра бренду

const cart = {}; // { productId: { ...item, qty } }


// ===============================
// DOM ЕЛЕМЕНТИ
// ===============================
const heroScreen = document.getElementById("heroScreen");
const enterCatalogBtn = document.getElementById("enterCatalogBtn");

const categoryTabs = document.getElementById("categoryTabs");
const brandBar = document.getElementById("brandBar");
const productGrid = document.getElementById("productGrid");

const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");
const tgCheckout = document.getElementById("tgCheckout");


// ===============================
// РЕНДЕР КАТАЛОГА
// ===============================
function renderProducts() {
  // фільтруємо по категорії
  let list = products.filter(p => p.category === currentCategory);

  // додатково по бренду, якщо треба
  if (currentBrand !== "all") {
    list = list.filter(p => p.brand === currentBrand);
  }

  // генеруємо картки
  productGrid.innerHTML = list.map(prod => {
    return `
      <div class="product-card">
        <div class="product-img-wrap">
          <img
            src="${prod.image}"
            alt="${prod.name}"
            class="product-img"
            onerror="this.onerror=null;this.src='images/placeholder.jpg';"
          />
        </div>
        <div class="product-name">${prod.name}</div>
        <div class="product-bottom-row">
          <div class="product-price">₴${prod.price}</div>
          <button class="add-btn" data-add="${prod.id}">в кошик</button>
        </div>
      </div>
    `;
  }).join("");
}


// ===============================
// КАТЕГОРІЇ / ТАБИ
// ===============================
function handleCategoryClick(e) {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;

  // оновити active
  [...categoryTabs.querySelectorAll(".tab-btn")].forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  currentCategory = btn.getAttribute("data-category");
  // коли міняємо категорію, бренд скидаємо на "all"
  currentBrand = "all";
  [...brandBar.querySelectorAll(".brand-btn")].forEach(b => b.classList.remove("active"));
  brandBar.querySelector('[data-brand="all"]').classList.add("active");

  // показати каталог, якщо были на геро
  heroScreen.style.display = "none";

  renderProducts();
}

categoryTabs.addEventListener("click", handleCategoryClick);


// ===============================
// БРЕНДИ
// ===============================
function handleBrandClick(e) {
  const btn = e.target.closest(".brand-btn");
  if (!btn) return;

  [...brandBar.querySelectorAll(".brand-btn")].forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  currentBrand = btn.getAttribute("data-brand");

  // якщо ми ще на геро екрані — прибираємо його і грузимо категорію за замовчуванням
  heroScreen.style.display = "none";

  renderProducts();
}

brandBar.addEventListener("click", handleBrandClick);


// ===============================
// HERO CTA
// ===============================
enterCatalogBtn.addEventListener("click", () => {
  heroScreen.style.display = "none";
  // після натиску просто рендер того, що вже вибрано (hookahs / all)
  renderProducts();
});


// ===============================
// КОРЗИНА (ЛОГІКА)
// ===============================
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  if (!cart[id]) {
    cart[id] = { ...product, qty: 1 };
  } else {
    cart[id].qty += 1;
  }

  updateCartUI();
}

function removeOne(id) {
  if (!cart[id]) return;
  cart[id].qty -= 1;
  if (cart[id].qty <= 0) {
    delete cart[id];
  }
  updateCartUI();
}

function addOne(id) {
  if (!cart[id]) return;
  cart[id].qty += 1;
  updateCartUI();
}

function calcTotal() {
  let sum = 0;
  let count = 0;
  Object.values(cart).forEach(item => {
    sum += item.price * item.qty;
    count += item.qty;
  });

  return { sum, count };
}

function updateCartUI() {
  // рендер строк корзины
  cartItemsEl.innerHTML = Object.values(cart).map(item => {
    const lineSum = item.price * item.qty;
    return `
      <div class="cart-row">
        <div class="cart-info">
          <div class="cart-name">${item.name}</div>
          <div class="cart-meta">
            ${item.brand.toUpperCase()} • ₴${item.price} / шт
          </div>
        </div>

        <div class="cart-qty-wrap">
          <div class="qty-controls">
            <button class="qty-btn" data-minus="${item.id}">-</button>
            <div class="qty-num">${item.qty}</div>
            <button class="qty-btn" data-plus="${item.id}">+</button>
          </div>
          <div class="cart-line-sum">₴${lineSum}</div>
        </div>
      </div>
    `;
  }).join("");

  // тотал + лічильник
  const { sum, count } = calcTotal();
  cartTotalEl.textContent = `₴${sum}`;
  cartCountEl.textContent = count;

  // оновити лінк телеги
  // текст, який піде в тг:
  // "Замовлення:\n1) NAME xQTY = SUM ...\nРазом = SUM"
  let lines = ["Замовлення OBLΛKO_TEAM:"];
  let i = 1;
  Object.values(cart).forEach(item => {
    const lineSum = item.price * item.qty;
    lines.push(
      `${i}) ${item.name} x${item.qty} = ₴${lineSum}`
    );
    i++;
  });
  lines.push(`Разом: ₴${sum}`);

  const msg = encodeURIComponent(lines.join("\n"));
  // !! Тут постав свій @username або пряме посилання на чат
  tgCheckout.href = `https://t.me/Market199?text=${msg}`;
}

// делегируем клики "добавить в корзину" на карточках
productGrid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add]");
  if (!btn) return;
  const id = btn.getAttribute("data-add");
  addToCart(id);
});

// делегируем +/-
cartItemsEl.addEventListener("click", (e) => {
  const minus = e.target.closest("[data-minus]");
  const plus = e.target.closest("[data-plus]");

  if (minus) {
    const id = minus.getAttribute("data-minus");
    removeOne(id);
  }
  if (plus) {
    const id = plus.getAttribute("data-plus");
    addOne(id);
  }
});


// ===============================
// ВІДКРИТТЯ / ЗАКРИТТЯ КОРЗИНИ
// ===============================
openCartBtn.addEventListener("click", () => {
  cartOverlay.classList.add("active");
  updateCartUI();
});
closeCartBtn.addEventListener("click", () => {
  cartOverlay.classList.remove("active");
});
cartOverlay.addEventListener("click", (e) => {
  if (e.target === cartOverlay) {
    cartOverlay.classList.remove("active");
  }
});


// ===============================
// СТАРТ
// ===============================

// 1. показуємо спочатку hero, без товарів
//    productGrid пустой до клика "Перейти в каталог"
//    но на десктопе оно может выглядеть странно пустым.
//    Можем сразу отрендерить, просто hero всё равно сверху.
//    Это выглядит богаче. Сделаю так:
renderProducts();
updateCartUI();
