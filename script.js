// SVG-заглушка для фото товара
const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
     <rect width="100%" height="100%" fill="#1a1a1a"/>
     <text x="50%" y="50%" font-size="28" dominant-baseline="middle" text-anchor="middle" fill="#555">Фото</text>
   </svg>`
);

// Генерируем по 20 товаров для каждой категории.
// Ты потом просто заменишь name / price / image.
function createProducts(categoryLabel, categoryKey) {
  return Array.from({ length: 20 }, (_, i) => ({
    id: `${categoryKey}-${i + 1}`,          // уникальный ID
    name: `${categoryLabel} Product ${i+1}`,// текст-заглушка
    price: 1000 + i * 50,                   // цена-заглушка
    image: PLACEHOLDER                      // картинка-заглушка
  }));
}

const products = {
  hookahs: createProducts("Hookah", "hookah"),
  heat:    createProducts("Heat",   "heat"),
  access:  createProducts("Access", "access"),
  bowls:   createProducts("Bowl",   "bowl"),
  vases:   createProducts("Vase",   "vase")
};

// DOM-элементы
const productsContainer = document.getElementById('products');
const tabs = document.querySelectorAll('.tab');

const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const tgOrder = document.getElementById('tg-order');

// ---------- Рендер товаров под выбранной вкладкой ----------
function render(category) {
  const list = products[category] || [];
  productsContainer.innerHTML = '';

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

// ---------- Логика вкладок ----------
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    render(tab.dataset.category);
  });
});

// ---------- Корзина (сохранение в localStorage) ----------
let cart = loadCartFromStorage();

// открытие модалки корзины
cartBtn.addEventListener('click', () => {
  cartModal.classList.remove('hidden');
  updateCart();
});

// закрытие модалки
closeCart.addEventListener('click', () => {
  cartModal.classList.add('hidden');
});

// глобальный делегат кликов
document.addEventListener('click', e => {
  // добавить в корзину
  if (e.target.classList.contains('btn-buy')) {
    const id = e.target.dataset.id;
    const item = Object.values(products).flat().find(p => p.id === id);
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

// ---------- Обновление корзины в DOM + Telegram ссылка ----------
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

  // генерим ссылку для кнопки оформления
  // она открывает Telegram с текстом заказа, адресат — твой аккаунт @Market199
  tgOrder.href = `https://t.me/share/url?url=https://t.me/Market199&text=${encoded}`;
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
    // лёгкая валидация
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
render('hookahs');
updateCart();
