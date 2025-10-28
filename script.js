// ===============================
// ХЕЛПЕР ДЛЯ ТОВАРОВ
// ===============================
function item(id, brand, category, name, price, image) {
  return { id, brand, category, name, price, image };
}

// ===============================
// КАТАЛОГ ТОВАРОВ
// ===============================
//
// Фото:
// клади свои фото в /images/... и просто меняй путь в поле image
// если фотки нет — поставь "images/placeholder.jpg"
//
// category:
//  - "hookahs"      кальяны
//  - "bowls"        чаши
//  - "heat"         регуляторы жара
//  - "accessories"  аксессуары
//
// brand:
//  - "karma", "odin", "totem", "sky", "moze", "alpha", "oblako",
//    "heatctrl", и т.д.

const karmaHookahs = [
  item("karma-1",  "karma", "hookahs", "KARMA MODEL 0.0 ЖОВТИЙ",        8029, "images/karma/karma0.0yellow.jpg"),
  item("karma-2",  "karma", "hookahs", "KARMA MODEL 0.0 ЗЕЛЕНИЙ",       7979, "images/karma/karma0.0green.jpg"),
  item("karma-3",  "karma", "hookahs", "KARMA MODEL 0.0 ЧЕРВОНИЙ",      8079, "images/karma/karma0.0red.jpg"),
  item("karma-4",  "karma", "hookahs", "KARMA MODEL 0.0 ЧОРНИЙ",        7979, "images/karma/karma0.0black.jpg"),
  item("karma-5",  "karma", "hookahs", "KARMA MODEL 0.1 WALNUT",        9629, "images/karma/karma0.1walnut.jpg"),
  item("karma-6",  "karma", "hookahs", "KARMA MODEL 0.1 BLACK",         9579, "images/karma/karma0.1black.jpg"),
  item("karma-7",  "karma", "hookahs", "KARMA MODEL 0.1 WHITE",         9629, "images/karma/karma0.1white.jpg"),
  item("karma-8",  "karma", "hookahs", "KARMA MODEL 0.1 GREY",          9579, "images/karma/karma0.1grey.jpg"),
  item("karma-9",  "karma", "hookahs", "KARMA MODEL 1.0 BLACK",        10079, "images/karma/karma1.0black.jpg"),
  item("karma-10", "karma", "hookahs", "KARMA MODEL 1.0 WALNUT",       10129, "images/karma/karma1.0walnut.jpg"),
  item("karma-11", "karma", "hookahs", "KARMA MODEL 1.1 BLACK",        10379, "images/karma/karma1.1black.jpg"),
  item("karma-12", "karma", "hookahs", "KARMA MODEL 1.1 WALNUT",       10429, "images/karma/karma1.1walnut.jpg"),
  item("karma-13", "karma", "hookahs", "KARMA MODEL 2.0 BLACK",        10979, "images/karma/karma2.0black.jpg"),
  item("karma-14", "karma", "hookahs", "KARMA MODEL 2.0 GREY",         11029, "images/karma/karma2.0grey.jpg"),
  item("karma-15", "karma", "hookahs", "KARMA MODEL 2.0 WALNUT",       11079, "images/karma/karma2.0walnut.jpg"),
  item("karma-16", "karma", "hookahs", "KARMA MODEL 3.0 BLACK",        11529, "images/karma/karma3.0black.jpg"),
  item("karma-17", "karma", "hookahs", "KARMA MODEL 3.0 WHITE",        11579, "images/karma/karma3.0white.jpg"),
  item("karma-18", "karma", "hookahs", "KARMA MODEL 3.0 GREY",         11629, "images/karma/karma3.0grey.jpg"),
  item("karma-19", "karma", "hookahs", "KARMA MODEL 3.0 WALNUT",       11679, "images/karma/karma3.0walnut.jpg"),
  item("karma-20", "karma", "hookahs", "KARMA MINI BLACK",              8529, "images/karma/karmaminiblack.jpg"),
];

const odinHookahs = [
  item("odin-1",  "odin", "hookahs", "ODIN HOOKAH CLASSIC BLACK",       8950, "images/odin/classic-black.jpg"),
  item("odin-2",  "odin", "hookahs", "ODIN HOOKAH DEEP GREY",           9050, "images/odin/deep-grey.jpg"),
  item("odin-3",  "odin", "hookahs", "ODIN HOOKAH BLUE STEEL",          9150, "images/odin/blue-steel.jpg"),
  item("odin-4",  "odin", "hookahs", "ODIN MINI TRAVEL SET",            7699, "images/odin/mini-travel.jpg"),
  item("odin-5",  "odin", "hookahs", "ODIN EPOXY ROYAL LOKI",           7570, "images/odin/epoxy-loki.jpg"),
  item("odin-6",  "odin", "hookahs", "ODIN EPOXY ROYAL GREY",           7570, "images/odin/epoxy-grey.jpg"),
  item("odin-7",  "odin", "hookahs", "ODIN EPOXY ROYAL PURPLE",         7570, "images/odin/epoxy-purple.jpg"),
  item("odin-8",  "odin", "hookahs", "ODIN EPOXY ROYAL IRIS",           7570, "images/odin/epoxy-iris.jpg"),
  item("odin-9",  "odin", "hookahs", "ODIN POTAL BLACK",                7270, "images/odin/potal-black.jpg"),
  item("odin-10", "odin", "hookahs", "ODIN POTAL GREEN",                7270, "images/odin/potal-green.jpg"),
  item("odin-11", "odin", "hookahs", "ODIN POTAL PINK",                 7270, "images/odin/potal-pink.jpg"),
  item("odin-12", "odin", "hookahs", "ODIN CLASSIC ДУБ",                6760, "images/odin/classic-oak.jpg"),
  item("odin-13", "odin", "hookahs", "ODIN CLASSIC OРЕХ",               7270, "images/odin/classic-nut.jpg"),
  item("odin-14", "odin", "hookahs", "ODIN CLASSIC BLACK",              6760, "images/odin/classic-black2.jpg"),
  item("odin-15", "odin", "hookahs", "ODIN CLASSIC ROYAL GREEN",        6760, "images/odin/classic-green.jpg"),
  item("odin-16", "odin", "hookahs", "ODIN CLASSIC BROWN",              6760, "images/odin/classic-brown.jpg"),
  item("odin-17", "odin", "hookahs", "ODIN CLASSIC WHITE",              6760, "images/odin/classic-white.jpg"),
  item("odin-18", "odin", "hookahs", "ODIN CLASSIC CRAYON",             6760, "images/odin/classic-crayon.jpg"),
  item("odin-19", "odin", "hookahs", "ODIN EPOXY MILKYWAY",             7570, "images/odin/epoxy-milkyway.jpg"),
  item("odin-20", "odin", "hookahs", "ODIN EPOXY LEMON PIE",            7570, "images/odin/epoxy-lemonpie.jpg"),
];

const totemHookahs = [
  item("totem-1",  "totem", "hookahs", "TOTEM MONOLIT MICRA RAW",        7800, "images/totem/micra-raw.jpg"),
  item("totem-2",  "totem", "hookahs", "TOTEM MONOLIT MICRA BLACK LTD",  7990, "images/totem/micra-black.jpg"),
  item("totem-3",  "totem", "hookahs", "TOTEM MONOLIT MICRA WOOD RING",  8120, "images/totem/micra-wood.jpg"),
  item("totem-4",  "totem", "hookahs", "TOTEM MONOLIT MICRA OCEAN BLUE", 4400, "images/totem/micra-ocean.jpg"),
  item("totem-5",  "totem", "hookahs", "TOTEM MONOLIT MICRA SANGRIA",    4100, "images/totem/micra-sangria.jpg"),
  item("totem-6",  "totem", "hookahs", "TOTEM EVO GREEN/WHITE",          6350, "images/totem/evo-greenwhite.jpg"),
  item("totem-7",  "totem", "hookahs", "TOTEM EVO BLACK/WHITE",          6350, "images/totem/evo-blackwhite.jpg"),
  item("totem-8",  "totem", "hookahs", "TOTEM EVO BRONZE/WHITE",         6350, "images/totem/evo-bronzewhite.jpg"),
  item("totem-9",  "totem", "hookahs", "TOTEM MONOLIT OPTIMA BRONZE",    5700, "images/totem/optima-bronze.jpg"),
  item("totem-10", "totem", "hookahs", "TOTEM MONOLIT OPTIMA CHOCOLATE", 5700, "images/totem/optima-choco.jpg"),
  item("totem-11", "totem", "hookahs", "TOTEM MONOLIT OPTIMA EMERALD",   5700, "images/totem/optima-emerald.jpg"),
  item("totem-12", "totem", "hookahs", "TOTEM MONOLIT OPTIMA OCEAN",     5700, "images/totem/optima-ocean.jpg"),
  item("totem-13", "totem", "hookahs", "TOTEM MONOLIT OPTIMA BLACK",     5700, "images/totem/optima-black.jpg"),
  item("totem-14", "totem", "hookahs", "TOTEM MONOLIT ULTRA STEEL",      6000, "images/totem/ultra-steel.jpg"),
  item("totem-15", "totem", "hookahs", "TOTEM MONOLIT ULTRA WOOD CHERRY",6700, "images/totem/ultra-cherry.jpg"),
  item("totem-16", "totem", "hookahs", "TOTEM MONOLIT ULTRA WOOD BLACK", 6700, "images/totem/ultra-blackwood.jpg"),
  item("totem-17", "totem", "hookahs", "TOTEM MONOLIT ULTRA WOOD PURE",  6700, "images/totem/ultra-purewood.jpg"),
  item("totem-18", "totem", "hookahs", "TOTEM MONOLIT MICRA VIOLET",     4100, "images/totem/micra-violet.jpg"),
  item("totem-19", "totem", "hookahs", "TOTEM MONOLIT MICRA ORANGE",     4400, "images/totem/micra-orange.jpg"),
  item("totem-20", "totem", "hookahs", "TOTEM MONOLIT MICRA EMERALD",    4100, "images/totem/micra-emerald.jpg"),
];

const skyHookahs = [
  item("sky-1",  "sky", "hookahs", "SKY HOOKAH SDM BLACK",               3600, "images/sky/sdm-black.jpg"),
  item("sky-2",  "sky", "hookahs", "SKY HOOKAH SDM PURPLE",              3600, "images/sky/sdm-purple.jpg"),
  item("sky-3",  "sky", "hookahs", "SKY HOOKAH SDM BLUE ICE",            3600, "images/sky/sdm-blueice.jpg"),
  item("sky-4",  "sky", "hookahs", "SKY HOOKAH SDM EMERALD",             3600, "images/sky/sdm-emerald.jpg"),
  item("sky-5",  "sky", "hookahs", "SKY HOOKAH SDM RED LAVA",            3600, "images/sky/sdm-redlava.jpg"),
  item("sky-6",  "sky", "hookahs", "SKY HOOKAH MINI BLACK",              3300, "images/sky/mini-black.jpg"),
  item("sky-7",  "sky", "hookahs", "SKY HOOKAH MINI CLEAR",              3300, "images/sky/mini-clear.jpg"),
  item("sky-8",  "sky", "hookahs", "SKY HOOKAH MINI BLUE",               3300, "images/sky/mini-blue.jpg"),
  item("sky-9",  "sky", "hookahs", "SKY HOOKAH MINI GREEN",              3300, "images/sky/mini-green.jpg"),
  item("sky-10", "sky", "hookahs", "SKY HOOKAH MINI PINK",               3300, "images/sky/mini-pink.jpg"),
  item("sky-11", "sky", "hookahs", "SKY HOOKAH DREAM BLACK EDITION",     4100, "images/sky/dream-black.jpg"),
  item("sky-12", "sky", "hookahs", "SKY HOOKAH DREAM WHITE FROST",       4100, "images/sky/dream-white.jpg"),
  item("sky-13", "sky", "hookahs", "SKY HOOKAH DREAM OCEAN",             4100, "images/sky/dream-ocean.jpg"),
  item("sky-14", "sky", "hookahs", "SKY HOOKAH DREAM FOREST",            4100, "images/sky/dream-forest.jpg"),
  item("sky-15", "sky", "hookahs", "SKY HOOKAH DREAM RUBY",              4100, "images/sky/dream-ruby.jpg"),
  item("sky-16", "sky", "hookahs", "SKY HOOKAH CLOUDS BLACK",            3900, "images/sky/clouds-black.jpg"),
  item("sky-17", "sky", "hookahs", "SKY HOOKAH CLOUDS WHITE",            3900, "images/sky/clouds-white.jpg"),
  item("sky-18", "sky", "hookahs", "SKY HOOKAH CLOUDS STEEL",            3900, "images/sky/clouds-steel.jpg"),
  item("sky-19", "sky", "hookahs", "SKY HOOKAH CLOUDS VIOLET",           3900, "images/sky/clouds-violet.jpg"),
  item("sky-20", "sky", "hookahs", "SKY HOOKAH ORIGIN GRAPHITE",         4000, "images/sky/origin-graphite.jpg"),
];

const mozeHookahs = [
  item("moze-1", "moze", "hookahs", "MOZE BREEZE TWO GRAPHITE",          6800, "images/moze/breeze-graphite.jpg"),
  item("moze-2", "moze", "hookahs", "MOZE BREEZE TWO WHITE PEARL",       6899, "images/moze/breeze-whitepearl.jpg"),
  item("moze-3", "moze", "hookahs", "MOZE BREEZE TWO GREEN PEARL",       6899, "images/moze/breeze-green.jpg"),
  item("moze-4", "moze", "hookahs", "MOZE BREEZE TWO PURPLE HAZE",       6899, "images/moze/breeze-purple.jpg"),
  item("moze-5", "moze", "hookahs", "MOZE VARITY BLACK",                 8200, "images/moze/varity-black.jpg"),
  item("moze-6", "moze", "hookahs", "MOZE VARITY STEEL",                 8300, "images/moze/varity-steel.jpg"),
  item("moze-7", "moze", "hookahs", "MOZE VARITY FROST",                 8300, "images/moze/varity-frost.jpg"),
  item("moze-8", "moze", "hookahs", "MOZE VARITY LAZURITE",              8350, "images/moze/varity-blue.jpg"),
  item("moze-9", "moze", "hookahs", "MOZE BREEZE CARBON BLACK",          7200, "images/moze/breeze-carbon.jpg"),
  item("moze-10","moze", "hookahs", "MOZE BREEZE CARBON RED",            7200, "images/moze/breeze-red.jpg"),
  item("moze-11","moze", "hookahs", "MOZE BREEZE CARBON YELLOW",         7200, "images/moze/breeze-yellow.jpg"),
  item("moze-12","moze", "hookahs", "MOZE BREEZE CARBON GREEN",          7200, "images/moze/breeze-green2.jpg"),
  item("moze-13","moze", "hookahs", "MOZE BREEZE CARBON BLUE",           7200, "images/moze/breeze-blue.jpg"),
  item("moze-14","moze", "hookahs", "MOZE BREEZE CARBON WHITE",          7200, "images/moze/breeze-white.jpg"),
  item("moze-15","moze", "hookahs", "MOZE BREEZE MINI BLACK",            6500, "images/moze/breeze-mini-black.jpg"),
  item("moze-16","moze", "hookahs", "MOZE BREEZE MINI PINK",             6500, "images/moze/breeze-mini-pink.jpg"),
  item("moze-17","moze", "hookahs", "MOZE BREEZE MINI SKY",              6500, "images/moze/breeze-mini-sky.jpg"),
  item("moze-18","moze", "hookahs", "MOZE BREEZE MINI FOREST",           6500, "images/moze/breeze-mini-forest.jpg"),
  item("moze-19","moze", "hookahs", "MOZE BREEZE MINI LEMON",            6500, "images/moze/breeze-mini-lemon.jpg"),
  item("moze-20","moze", "hookahs", "MOZE BREEZE MINI MILKY",            6500, "images/moze/breeze-mini-milky.jpg"),
];

const alphaHookahs = [
  item("alpha-1",  "alpha", "hookahs", "ALPHA HOOKAH MODEL X BLACK",     9300, "images/alpha/modelx-black.jpg"),
  item("alpha-2",  "alpha", "hookahs", "ALPHA HOOKAH MODEL X BLUE NEON", 9450, "images/alpha/modelx-blue.jpg"),
  item("alpha-3",  "alpha", "hookahs", "ALPHA HOOKAH MODEL X RED",       9400, "images/alpha/modelx-red.jpg"),
  item("alpha-4",  "alpha", "hookahs", "ALPHA HOOKAH MODEL X WHITE",     9400, "images/alpha/modelx-white.jpg"),
  item("alpha-5",  "alpha", "hookahs", "ALPHA HOOKAH MODEL X GREEN",     9400, "images/alpha/modelx-green.jpg"),
  item("alpha-6",  "alpha", "hookahs", "ALPHA HOOKAH MODEL X ORANGE",    9400, "images/alpha/modelx-orange.jpg"),
  item("alpha-7",  "alpha", "hookahs", "ALPHA HOOKAH BEAT BLACK",        8800, "images/alpha/beat-black.jpg"),
  item("alpha-8",  "alpha", "hookahs", "ALPHA HOOKAH BEAT PURPLE",       8800, "images/alpha/beat-purple.jpg"),
  item("alpha-9",  "alpha", "hookahs", "ALPHA HOOKAH BEAT YELLOW",       8800, "images/alpha/beat-yellow.jpg"),
  item("alpha-10", "alpha", "hookahs", "ALPHA HOOKAH BEAT PINK",         8800, "images/alpha/beat-pink.jpg"),
  item("alpha-11", "alpha", "hookahs", "ALPHA HOOKAH BEAT WHITE",        8800, "images/alpha/beat-white.jpg"),
  item("alpha-12", "alpha", "hookahs", "ALPHA HOOKAH MODEL S BLACK",     9700, "images/alpha/models-black.jpg"),
  item("alpha-13", "alpha", "hookahs", "ALPHA HOOKAH MODEL S WHITE",     9700, "images/alpha/models-white.jpg"),
  item("alpha-14", "alpha", "hookahs", "ALPHA HOOKAH MODEL S BLUE",      9700, "images/alpha/models-blue.jpg"),
  item("alpha-15", "alpha", "hookahs", "ALPHA HOOKAH MODEL S RED",       9700, "images/alpha/models-red.jpg"),
  item("alpha-16", "alpha", "hookahs", "ALPHA HOOKAH MODEL S GREEN",     9700, "images/alpha/models-green.jpg"),
  item("alpha-17", "alpha", "hookahs", "ALPHA HOOKAH X ART GRAFF",      11000, "images/alpha/art-graff.jpg"),
  item("alpha-18", "alpha", "hookahs", "ALPHA HOOKAH X ART NEBULA",     11000, "images/alpha/art-nebula.jpg"),
  item("alpha-19", "alpha", "hookahs", "ALPHA HOOKAH X ART TOXIC",      11000, "images/alpha/art-toxic.jpg"),
  item("alpha-20", "alpha", "hookahs", "ALPHA HOOKAH X ART PANTHER",    11000, "images/alpha/art-panther.jpg"),
];

const bowls = [
  item("oblako-b1", "oblako", "bowls", "OBLAKO PHUNNEL M MILK",          599, "images/bowls/oblako-m-milk.jpg"),
  item("oblako-b2", "oblako", "bowls", "OBLAKO PHUNNEL M GLAZE BLACK",   629, "images/bowls/oblako-m-black.jpg"),
  item("oblako-b3", "oblako", "bowls", "OBLAKO PHUNNEL M WHITE MATT",    599, "images/bowls/oblako-m-white.jpg"),
  item("oblako-b4", "oblako", "bowls", "OBLAKO PHUNNEL S ORANGE",        549, "images/bowls/oblako-s-orange.jpg"),
  item("oblako-b5", "oblako", "bowls", "OBLAKO PHUNNEL S YELLOW",        549, "images/bowls/oblako-s-yellow.jpg"),
  item("oblako-b6", "oblako", "bowls", "OBLAKO PHUNNEL S BLUE",          549, "images/bowls/oblako-s-blue.jpg"),
  item("oblako-b7", "oblako", "bowls", "OBLAKO PHUNNEL S BLACK MATT",    579, "images/bowls/oblako-s-black.jpg"),
  item("oblako-b8", "oblako", "bowls", "OBLAKO PHUNNEL S WHITE",         579, "images/bowls/oblako-s-white.jpg"),
  item("oblako-b9", "oblako", "bowls", "OBLAKO GLAZE MARBLE BLACK",      649, "images/bowls/oblako-marble-black.jpg"),
  item("oblako-b10","oblako", "bowls", "OBLAKO GLAZE MARBLE RED",        649, "images/bowls/oblako-marble-red.jpg"),
];

const heatControllers = [
  item("heat-1", "heatctrl", "heat", "УТРИМУВАЧ ЖАРУ CLASSIC STEEL",     449, "images/heat/classic-steel.jpg"),
  item("heat-2", "heatctrl", "heat", "КАЛЬЯННИЙ РЕГУЛЯТОР ЖАРУ PRO",     699, "images/heat/heat-pro.jpg"),
  item("heat-3", "heatctrl", "heat", "КАЛЛАУД ТИП V2 BLACK",             499, "images/heat/v2-black.jpg"),
  item("heat-4", "heatctrl", "heat", "КАЛЛАУД V2 GOLD EDITION",          549, "images/heat/v2-gold.jpg"),
  item("heat-5", "heatctrl", "heat", "КАЛЛАУД V3 AIRFLOW",               620, "images/heat/v3-airflow.jpg"),
];

const accessories = [
  item("acc-1", "heatctrl", "accessories", "ЩІТКА ДЛЯ КОЛБИ",            149, "images/acc/brush-bottle.jpg"),
  item("acc-2", "heatctrl", "accessories", "ЩИПЦІ ДЛЯ ВУГІЛЛЯ OBLΛKO",   199, "images/acc/tongs-oblako.jpg"),
  item("acc-3", "heatctrl", "accessories", "СИЛІКОНОВИЙ ШЛАНГ SOFT TOUCH",320, "images/acc/hose-softtouch.jpg"),
  item("acc-4", "heatctrl", "accessories", "МУНДШТУК З КЕЙСОМ",          270, "images/acc/mouthpiece-case.jpg"),
  item("acc-5", "heatctrl", "accessories", "ЩІТКА ДЛЯ ЧАШІ",             120, "images/acc/brush-bowl.jpg"),
  item("acc-6", "heatctrl", "accessories", "ПОДСТАВКА ПІД КАЛЬЯН",       350, "images/acc/stand-hookah.jpg"),
  item("acc-7", "heatctrl", "accessories", "ПОДДУВ ДЛЯ РОЗПАЛУ ВУГІЛЛЯ", 399, "images/acc/blower.jpg"),
];

// Финальный список всех товаров
const products = [
  ...karmaHookahs,
  ...odinHookahs,
  ...totemHookahs,
  ...skyHookahs,
  ...mozeHookahs,
  ...alphaHookahs,
  ...bowls,
  ...heatControllers,
  ...accessories,
];

// ===============================
// СОСТОЯНИЕ
// ===============================
let currentCategory = "hookahs"; // активная категория
let currentBrand = "all";        // активный бренд ("all" = всі бренди)

const cart = {}; // { productId: { ...item, qty } }

// ===============================
// DOM
// ===============================
const heroScreen     = document.getElementById("heroScreen");
const enterCatalogBtn = document.getElementById("enterCatalogBtn");

const categoryTabs   = document.getElementById("categoryTabs");
const brandBar       = document.getElementById("brandBar");
const productGrid    = document.getElementById("productGrid");

const openCartBtn    = document.getElementById("openCartBtn");
const closeCartBtn   = document.getElementById("closeCartBtn");
const cartOverlay    = document.getElementById("cartOverlay");
const cartItemsEl    = document.getElementById("cartItems");
const cartTotalEl    = document.getElementById("cartTotal");
const cartCountEl    = document.getElementById("cartCount");
const tgCheckout     = document.getElementById("tgCheckout");

// ===============================
// LOCAL STORAGE (КОРЗИНА)
// ===============================
function saveCart() {
  localStorage.setItem("oblako_cart", JSON.stringify(cart));
}
function loadCart() {
  const saved = localStorage.getItem("oblako_cart");
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    Object.assign(cart, parsed);
  } catch(e) {
    console.warn("cant load cart", e);
  }
}

// ===============================
// РЕНДЕР ТОВАРОВ
// ===============================
function renderProducts() {
  // фильтр по категории
  let list = products.filter(p => p.category === currentCategory);

  // фильтр по бренду (если не all)
  if (currentBrand !== "all") {
    list = list.filter(p => p.brand === currentBrand);
  }

  // рендер карточек
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
// ТАБЫ КАТЕГОРИЙ
// ===============================
function handleCategoryClick(e) {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;

  // активный таб
  [...categoryTabs.querySelectorAll(".tab-btn")].forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  currentCategory = btn.getAttribute("data-category");

  // при смене категории сбрасываем бренд
  currentBrand = "all";
  if (brandBar) {
    [...brandBar.querySelectorAll(".brand-btn")].forEach(b => b.classList.remove("active"));
    const allBrandBtn = brandBar.querySelector('[data-brand="all"]');
    if (allBrandBtn) allBrandBtn.classList.add("active");
  }

  // скрываем приветственный экран после клика
  if (heroScreen) heroScreen.style.display = "none";

  renderProducts();
}
if (categoryTabs) {
  categoryTabs.addEventListener("click", handleCategoryClick);
}

// ===============================
// ФИЛЬТР БРЕНДОВ
// ===============================
function handleBrandClick(e) {
  const btn = e.target.closest(".brand-btn");
  if (!btn) return;

  // подсветка активного бренда
  [...brandBar.querySelectorAll(".brand-btn")].forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  currentBrand = btn.getAttribute("data-brand");

  // если ещё были на hero -> убираем
  if (heroScreen) heroScreen.style.display = "none";

  renderProducts();
}
if (brandBar) {
  brandBar.addEventListener("click", handleBrandClick);
}

// ===============================
// HERO КНОПКА "Перейти в каталог"
// ===============================
if (enterCatalogBtn) {
  enterCatalogBtn.addEventListener("click", () => {
    if (heroScreen) heroScreen.style.display = "none";
    renderProducts();
  });
}

// ===============================
// ЛОГИКА КОРЗИНЫ
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
  // товары в корзине
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

  // тотал + количество
  const { sum, count } = calcTotal();
  cartTotalEl.textContent = `₴${sum}`;
  cartCountEl.textContent = count;

  // сообщение в телеграм
  let lines = ["🛒 *Новий заказ з OBLΛKO_TEAM*"];
  let i = 1;
  Object.values(cart).forEach(item => {
    const lineSum = item.price * item.qty;
    lines.push(`${i}) ${item.name} x${item.qty} = ₴${lineSum}`);
    i++;
  });
  lines.push(`\n💰 Разом: ₴${sum}`);
  lines.push(`\n📞 Залиш свій номер для підтвердження.`);

  const msg = encodeURIComponent(lines.join("\n"));

  tgCheckout.href = `https://t.me/Market199?text=${msg}`;

  // сохраняем корзину локально
  saveCart();
}

// клик "добавить в корзину" на карточке
if (productGrid) {
  productGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add]");
    if (!btn) return;
    const id = btn.getAttribute("data-add");
    addToCart(id);
  });
}

// клик +/- в корзине
if (cartItemsEl) {
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
}

// ===============================
// ОТКРЫТИЕ / ЗАКРЫТИЕ КОРЗИНЫ
// ===============================
if (openCartBtn) {
  openCartBtn.addEventListener("click", () => {
    cartOverlay.classList.add("active");
    updateCartUI();
  });
}
if (closeCartBtn) {
  closeCartBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("active");
  });
}
if (cartOverlay) {
  cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) {
      cartOverlay.classList.remove("active");
    }
  });
}

// ===============================
// СТАРТ ПРИ ЗАГРУЗКЕ
// ===============================
loadCart();       // подгружаем корзину с localStorage
renderProducts(); // сразу рендерим товары под дефолтной категорией
updateCartUI();   // и рисуем состояние корзины
// heroScreen остаётся сверху, пока юзер не нажмёт "Перейти в каталог"
