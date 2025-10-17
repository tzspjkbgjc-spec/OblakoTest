// Placeholder SVG data URI (отображается, если нет реальной картинки)
const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
    <rect width="100%" height="100%" fill="#ddd"/>
    <text x="50%" y="50%" font-size="28" dominant-baseline="middle" text-anchor="middle" fill="#777">Фото отсутствует</text>
  </svg>`);

// Данные товаров (4 категории по 10 позиций). Пока изображения — плейсхолдер.
const products = {
  calyan: Array.from({length:10}, (_,i)=>({
    id:i+1,
    title:`Кальян модель ${i+1}`,
    price:`₴${2200 + i*50}`,
    image: PLACEHOLDER,
    desc: Стильный кальян модель ${i+1}. Отличное качество, надежная сборка.
  })),
  kolby: Array.from({length:10}, (_,i)=>({
    id:i+1,
    title:`Колба модель ${i+1}`,
    price:`₴${400 + i*30}`,
    image: PLACEHOLDER,
    desc: Колба из прочного стекла, модель ${i+1}. Подходит для большинства шахт.
  })),
  access: Array.from({length:10}, (_,i)=>({
    id:i+1,
    title:`Аксессуар ${i+1}`,
    price:`₴${80 + i*20}`,
    image: PLACEHOLDER,
    desc: Полезный аксессуар номер ${i+1}. Удобен в использовании.
  })),
  mixes: Array.from({length:10}, (_,i)=>({
    id:i+1,
    title:`Смесь ${i+1}`,
    price:`₴${120 + i*25}`,
    image: PLACEHOLDER,
    desc: Вкусная смесь номер ${i+1}. Разные ароматы и насыщенность.
  }))
};

const catalogEl = document.getElementById('catalog');
const tabs = document.querySelectorAll('.tab-btn');

function createCard(p, categoryKey){
  const card = document.createElement('article');
  card.className = 'card';
  const img = document.createElement('img');
  img.src = p.image;
  img.alt = p.title;
  const title = document.createElement('div');
  title.className = 'title';
  title.textContent = p.title;
  const price = document.createElement('div');
  price.className = 'price';
  price.textContent = p.price;
  const meta = document.createElement('div');
  meta.className = 'meta';
  const view = document.createElement('button');
  view.className = 'btn-buy';
  view.textContent = 'Посмотреть';
  view.addEventListener('click', ()=> openModal(p, categoryKey));
  meta.appendChild(view);
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(meta);
  return card;
}

function render(tabKey){
  const list = products[tabKey] || [];
  catalogEl.innerHTML = '';
  list.forEach(p=> catalogEl.appendChild(createCard(p, tabKey)));
}

// Tabs logic
tabs.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    tabs.forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-pressed','false')});
    btn.classList.add('active'); btn.setAttribute('aria-pressed','true');
    render(btn.dataset.tab);
    window.scrollTo({top: document.getElementById('catalog').offsetTop - 80, behavior:'smooth'});
  });
});

// Modal logic
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const buyBtn = document.getElementById('buyBtn');

function openModal(product, category){
  modalImg.src = product.image;
  modalImg.alt = product.title;
  modalTitle.textContent = product.title;
  modalPrice.textContent = product.price;
  modalDesc.textContent = product.desc || 'Описание отсутствует.';
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
  // focus trap simple
  buyBtn.focus();
}

function closeTheModal(){
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden','true');
}

closeModal.addEventListener('click', closeTheModal);
modal.querySelector('.modal-backdrop').addEventListener('click', closeTheModal);
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeTheModal() });

// start
render('calyan');