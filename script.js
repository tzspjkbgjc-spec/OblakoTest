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
  hookahs: [
  { id: 1, name: "KARMA MODEL 0.0 ЖОВТИЙ", price: 8029, image: "images/karma00_yellow.png" },
  { id: 2, name: "KARMA MODEL 0.0 ЗЕЛЕНИЙ", price: 7979, image: "images/karma00_green.png" },
  { id: 3, name: "KARMA MODEL 0.0 ЧЕРВОНИЙ", price: 8079, image: "images/karma00_red.png" },
  { id: 4, name: "KARMA MODEL 0.0 ЧОРНИЙ", price: 7979, image: "images/karma00_black.png" },
  { id: 5, name: "KARMA MODEL 0.1 WALNUT КОРИЧНЕВИЙ", price: 9629, image: "images/karma01_brown.png" },
  { id: 6, name: "KARMA MODEL 0.1 WALNUT БІЛИЙ", price: 9479, image: "images/karma01_white.png" },
  { id: 7, name: "KARMA MODEL 0.1 WALNUT БІЛИЙ (2)", price: 9779, image: "images/karma01_white2.png" },
  { id: 8, name: "KARMA MODEL 0.1 WALNUT БЛАКИТНИЙ", price: 9479, image: "images/karma01_blue.png" },
  { id: 9, name: "KARMA MODEL 0.1 WALNUT КОРИЧНЕВИЙ", price: 9679, image: "images/karma01_brown2.png" },
  { id: 10, name: "KARMA MODEL 0.1 WALNUT СІРИЙ", price: 9479, image: "images/karma01_gray.png" },
  { id: 11, name: "KARMA MODEL 0.1 WALNUT ФІСТАШКОВИЙ", price: 9479, image: "images/karma01_pistachio.png" },
  { id: 12, name: "KARMA MODEL 0.1 WALNUT ЧОРНИЙ", price: 9479, image: "images/karma01_black.png" },
  { id: 13, name: "KARMA MODEL 0.1 ЖОВТА", price: 7829, image: "images/karma01_yellow.png" },
  { id: 14, name: "KARMA MODEL 0.1 ЧОРНИЙ", price: 7779, image: "images/karma01_black2.png" },
  { id: 15, name: "KARMA MODEL 1.1 WALNUT АЙВОРІ", price: 7779, image: "images/karma11_ivory.png" },
  { id: 16, name: "KARMA MODEL 1.1 WALNUT ЖОВТА", price: 8029, image: "images/karma11_yellow.png" },
  { id: 17, name: "KARMA MODEL 1.1 WALNUT ЗЕЛЕНИЙ", price: 7779, image: "images/karma11_green.png" },
  { id: 18, name: "KARMA MODEL 1.1 WALNUT ПІНК", price: 7879, image: "images/karma11_pink.png" },
  { id: 19, name: "KARMA MODEL 1.1 WALNUT ФІОЛЕТОВИЙ", price: 7779, image: "images/karma11_purple.png" },
  { id: 20, name: "KARMA MODEL 1.1 WALNUT ЧЕРВОНИЙ", price: 7829, image: "images/karma11_red.png" }
],
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
