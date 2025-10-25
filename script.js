// ---------- Плейсхолдер для изображений ----------
const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
     <rect width="100%" height="100%" fill="#1a1a1a"/>
     <text x="50%" y="50%" font-size="28" dominant-baseline="middle" text-anchor="middle" fill="#555">Фото</text>
   </svg>`
);

// ---------- ДАННЫЕ ТОВАРОВ ----------
// ВАЖНО:
// brand: "karma" | "odin" | "totem" | "sky" | "tiaga" | "gramm" | "embery"

// Karma (20 штук, твои)
const hookahsKarma = [
  { id: "karma-1",  brand: "karma", name: "KARMA MODEL 0.0 ЖОВТИЙ", price: 8029, image: PLACEHOLDER },
  { id: "karma-2",  brand: "karma", name: "KARMA MODEL 0.0 ЗЕЛЕНИЙ", price: 7979, image: PLACEHOLDER },
  { id: "karma-3",  brand: "karma", name: "KARMA MODEL 0.0 ЧЕРВОНИЙ", price: 8079, image: PLACEHOLDER },
  { id: "karma-4",  brand: "karma", name: "KARMA MODEL 0.0 ЧОРНИЙ", price: 7979, image: PLACEHOLDER },
  { id: "karma-5",  brand: "karma", name: "KARMA MODEL 0.1 WALNUT КОРИЧНЕВИЙ", price: 9629, image: PLACEHOLDER },
  { id: "karma-6",  brand: "karma", name: "KARMA MODEL 0.1 WALNUT БІЛИЙ", price: 9479, image: PLACEHOLDER },
  { id: "karma-7",  brand: "karma", name: "KARMA MODEL 0.1 WALNUT БІЛИЙ (2)", price: 9779, image: PLACEHOLDER },
  { id: "karma-8",  brand: "karma", name: "KARMA MODEL 0.1 WALNUT БЛАКИТНИЙ", price: 9479, image: PLACEHOLDER },
  { id: "karma-9",  brand: "karma", name: "KARMA MODEL 0.1 WALNUT КОРИЧНЕВИЙ", price: 9679, image: PLACEHOLDER },
  { id: "karma-10", brand: "karma", name: "KARMA MODEL 0.1 WALNUT СІРИЙ", price: 9479, image: PLACEHOLDER },
  { id: "karma-11", brand: "karma", name: "KARMA MODEL 0.1 WALNUT ФІСТАШКОВИЙ", price: 9479, image: PLACEHOLDER },
  { id: "karma-12", brand: "karma", name: "KARMA MODEL 0.1 WALNUT ЧОРНИЙ", price: 9479, image: PLACEHOLDER },
  { id: "karma-13", brand: "karma", name: "KARMA MODEL 0.1 ЖОВТА", price: 7829, image: PLACEHOLDER },
  { id: "karma-14", brand: "karma", name: "KARMA MODEL 0.1 ЧОРНИЙ", price: 7779, image: PLACEHOLDER },
  { id: "karma-15", brand: "karma", name: "KARMA MODEL 1.1 WALNUT АЙВОРІ", price: 7779, image: PLACEHOLDER },
  { id: "karma-16", brand: "karma", name: "KARMA MODEL 1.1 WALNUT ЖОВТА", price: 8029, image: PLACEHOLDER },
  { id: "karma-17", brand: "karma", name: "KARMA MODEL 1.1 WALNUT ЗЕЛЕНИЙ", price: 7779, image: PLACEHOLDER },
  { id: "karma-18", brand: "karma", name: "KARMA MODEL 1.1 WALNUT ПІНК", price: 7879, image: PLACEHOLDER },
  { id: "karma-19", brand: "karma", name: "KARMA MODEL 1.1 WALNUT ФІОЛЕТОВИЙ", price: 7779, image: PLACEHOLDER },
  { id: "karma-20", brand: "karma", name: "KARMA MODEL 1.1 WALNUT ЧЕРВОНИЙ", price: 7829, image: PLACEHOLDER }
];

// Odin (30 штук, твои)
const hookahsOdin = [
  { id: "odin-1",  brand: "odin", name: "Odin Classic Mini Cosmo", price: 7260, image: PLACEHOLDER },
  { id: "odin-2",  brand: "odin", name: "Odin Classic Mini Sky", price: 7260, image: PLACEHOLDER },
  { id: "odin-3",  brand: "odin", name: "Odin Classic Mini Saturn", price: 7260, image: PLACEHOLDER },
  { id: "odin-4",  brand: "odin", name: "Odin Classic Mini Mars", price: 7260, image: PLACEHOLDER },
  { id: "odin-5",  brand: "odin", name: "Odin Classic Mini Toxic", price: 7260, image: PLACEHOLDER },
  { id: "odin-6",  brand: "odin", name: "Odin Classic Mini Black", price: 6260, image: PLACEHOLDER },
  { id: "odin-7",  brand: "odin", name: "Odin Classic Mini Brown", price: 6260, image: PLACEHOLDER },
  { id: "odin-8",  brand: "odin", name: "Odin Classic Mini Crayon", price: 6260, image: PLACEHOLDER },
  { id: "odin-9",  brand: "odin", name: "Odin Classic Mini White", price: 6260, image: PLACEHOLDER },
  { id: "odin-10", brand: "odin", name: "Odin Classic Mini Green", price: 6260, image: PLACEHOLDER },
  { id: "odin-11", brand: "odin", name: "Odin Epoxy Royal Loki", price: 7570, image: PLACEHOLDER },
  { id: "odin-12", brand: "odin", name: "Odin Epoxy Royal Grey", price: 7570, image: PLACEHOLDER },
  { id: "odin-13", brand: "odin", name: "Odin Epoxy Royal Purple", price: 7570, image: PLACEHOLDER },
  { id: "odin-14", brand: "odin", name: "Odin Epoxy Royal Iris", price: 7570, image: PLACEHOLDER },
  { id: "odin-15", brand: "odin", name: "Odin Epoxy Royal Milkyway", price: 7570, image: PLACEHOLDER },
  { id: "odin-16", brand: "odin", name: "Odin Potal Black", price: 7270, image: PLACEHOLDER },
  { id: "odin-17", brand: "odin", name: "Odin Potal Green", price: 7270, image: PLACEHOLDER },
  { id: "odin-18", brand: "odin", name: "Odin Potal Pink", price: 7270, image: PLACEHOLDER },
  { id: "odin-19", brand: "odin", name: "Odin Classic Дуб", price: 6760, image: PLACEHOLDER },
  { id: "odin-20", brand: "odin", name: "Odin Classic Орех", price: 7270, image: PLACEHOLDER },
  { id: "odin-21", brand: "odin", name: "Odin Classic Black", price: 6760, image: PLACEHOLDER },
  { id: "odin-22", brand: "odin", name: "Odin Classic Royal Green", price: 6760, image: PLACEHOLDER },
  { id: "odin-23", brand: "odin", name: "Odin Classic Brown", price: 6760, image: PLACEHOLDER },
  { id: "odin-24", brand: "odin", name: "Odin Classic White", price: 6760, image: PLACEHOLDER },
  { id: "odin-25", brand: "odin", name: "Odin Classic Crayon", price: 6760, image: PLACEHOLDER },
  { id: "odin-26", brand: "odin", name: "Odin Epoxy Milkyway", price: 7570, image: PLACEHOLDER },
  { id: "odin-27", brand: "odin", name: "Odin Epoxy Marmur", price: 7570, image: PLACEHOLDER },
  { id: "odin-28", brand: "odin", name: "Odin Epoxy Lemon Pie", price: 7570, image: PLACEHOLDER },
  { id: "odin-29", brand: "odin", name: "Odin Epoxy Valerie", price: 7570, image: PLACEHOLDER },
  { id: "odin-30", brand: "odin", name: "Odin Classic Royal Green (дубль)", price: 6760, image: PLACEHOLDER }
];

// Заглушки для остальных брендов (30 штук каждая)
function genBrandSet(brandKey, brandLabel, basePrice) {
  const arr = [];
  for (let i = 1; i <= 30; i++) {
    arr.push({
      id: `${brandKey}-${i}`,
      brand: brandKey,
      name: `${brandLabel} Model ${i}`,
      price: basePrice + i * 10,
      image: PLACEHOLDER
    });
  }
  return arr;
}

const hookahsTotem  = genBrandSet("totem",  "Totem", 6990);
const hookahsSky    = genBrandSet("sky",    "Sky",   6350);
const hookahsTiaga  = genBrandSet("tiaga",  "Tiaga", 7450);
const hookahsGramm  = genBrandSet("gramm",  "Gramm", 5200);
const hookahsEmbery = genBrandSet("embery", "Embery",6800);

// теперь собираем всё в одну структуру products
const products = {
  hookahs: [
    ...hookahsKarma,
    ...hookahsTotem,
    ...hookahsOdin,
    ...hookahsSky,
    ...hookahsTiaga,
    ...hookahsGramm,
    ...hookahsEmbery
  ],
  heat: [],
  access: [],
  bowls: [],
  vases: []
};

// ---------- DOM элементы ----------
const productsContainer = document.getElementById('products');
const tabs = document.querySelectorAll('.tab');

const brandTabsContainer = document.getElementById('brand-tabs');
const brandTabs = document.querySelectorAll('.brand-tab');

const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const tgOrder = document.getElementById('tg-order');

// ---------- Рендер карточек ----------
function render(category, brandFilter = null) {
  productsContainer.innerHTML = '';

  let list = products[category] || [];

  if (category === 'hookahs' && brandFilter) {
    list = list.filter(p => p.brand === brandFilter);
  }

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price} грн</p>
      <button class="btn-buy" data-id="${p.id}">Додати в кошик</button>
    `;
    productsContainer.appendChild(card);
  });
}

// ---------- Логика верхних вкладок (категории) ----------
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const cat = tab.dataset.category;

    if (cat === 'hookahs') {
      // показать брендовые табы
      brandTabsContainer.classList.remove('hidden');

      // активируем первую бренд-вкладку (Karma)
      brandTabs.forEach(bt => bt.classList.remove('active'));
      const firstBrandTab = document.querySelector('.brand-tab[data-brand="karma"]');
      if (firstBrandTab) firstBrandTab.classList.add('active');

      render('hookahs', 'karma');
    } else {
      // скрыть брендовые табы
      brandTabsContainer.classList.add('hidden');
      render(cat);
    }
  });
});

// ---------- Логика бренд-вкладок внутри кальянов ----------
brandTabs.forEach(btab => {
  btab.addEventListener('click', () => {
    brandTabs.forEach(bt => bt.classList.remove('active'));
    btab.classList.add('active');
    const brandKey = btab.dataset.brand;
    render('hookahs', brandKey);
  });
});

// ---------- Корзина с сохранением ----------
let cart = loadCartFromStorage();

cartBtn.addEventListener('click', () => {
  cartModal.classList.remove('hidden');
  updateCart();
});

closeCart.addEventListener('click', () => {
  cartModal.classList.add('hidden');
});

// делегирование кликов
document.addEventListener('click', e => {
  // добавить в корзину
  if (e.target.classList.contains('btn-buy')) {
    const id = e.target.dataset.id;
    const item = products.hookahs.find(p => p.id === id)
      || products.heat.find(p => p.id === id)
      || products.access.find(p => p.id === id)
      || products.bowls.find(p => p.id === id)
      || products.vases.find(p => p.id === id);

    if (item) {
      const exist = cart.find(c => c.id === id);
      if (exist) {
        exist.qty++;
      } else {
        cart.push({ ...item, qty: 1 });
      }
      saveCartToStorage();
      updateCart();
    }
  }

  // удалить из корзины
  if (e.target.classList.contains('remove')) {
    const id = e.target.dataset.id;
    cart = cart.filter(c => c.id !== id);
    saveCartToStorage();
    updateCart();
  }
});

// ---------- Обновление корзины + Telegram ссылка ----------
function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const sum = item.price * item.qty;
    total += sum;

    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <div style="flex:1; min-width:140px;">
        ${item.name} × ${item.qty} — ${sum} грн
      </div>
      <button class="remove" data-id="${item.id}">✖</button>
    `;
    cartItems.appendChild(row);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;

  // Текст для Телеграма
  let message = `🛒 *Новий заказ з Oblako_Team*\n\n`;

  if (cart.length === 0) {
    message += "Кошик порожній 😔";
  } else {
    cart.forEach(item => {
      const sum = item.price * item.qty;
      message += `• ${item.name} × ${item.qty} = ${sum} грн\n`;
    });
    message += `\n💰 *Разом:* ${total} грн\n`;
    message += `📞 Залиште ваш контакт або номер телефону для підтвердження.`;
  }

  const encoded = encodeURIComponent(message);

  // Ссылка открытия чата с тобой и сразу заполненный текст
  tgOrder.href = `https://t.me/Market199?text=${encoded}`;
}

// ---------- localStorage helpers ----------
function saveCartToStorage() {
  localStorage.setItem('oblako_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem('oblako_cart');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(item => ({
      ...item,
      qty: item.qty || 1
    }));
  } catch(e) {
    return [];
  }
}

// ---------- год в футере ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- стартовый рендер ----------
(function init() {
  // при первой загрузке открыта категория кальяны + бренд Karma
  render('hookahs', 'karma');
  updateCart();
})();
