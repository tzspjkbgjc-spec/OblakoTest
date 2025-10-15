const products = {
  calyan: [
    {id:1, title:"Aroma Hookah Bravo Blue", price:"₴2,600", image:"data:image/jpeg;base64,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},
    {id:2, title:"Aroma Hookah Bravo Original", price:"₴2,600", image:"calyan2.jpg"},
    {id:3, title:"Aroma Hookah Delta Black", price:"₴2,500", image:"calyan3.jpg"},
    {id:4, title:"Aroma Hookah Delta White", price:"₴2,500", image:"calyan4.jpg"},
    {id:5, title:"Aroma Hookah Golf White", price:"₴2,300", image:"calyan5.jpg"},
    {id:6, title:"Aroma Hookah Kilo Black", price:"₴2,200", image:"calyan6.jpg"},
    {id:7, title:"Aroma Hookah Kilo White", price:"₴2,200", image:"calyan7.jpg"},
    {id:8, title:"Aroma Hookah Lima Black", price:"₴2,600", image:"calyan8.jpg"},
    {id:9, title:"Aroma Hookah Lima White", price:"₴2,500", image:"calyan9.jpg"},
    {id:10, title:"Aroma Hookah Oscar Blue", price:"₴3,000", image:"calyan10.jpg"}
  ],
  kolby:[
    {id:1,title:"Колба Craft (прозрачная)",price:"₴550",image:"kolba1.jpg"},
    {id:2,title:"Колба Yahya Pear",price:"₴440",image:"kolba2.jpg"},
    {id:3,title:"Колба Light (стекло)",price:"₴600",image:"kolba3.jpg"},
    {id:4,title:"Колба Khalil Mamoon style",price:"₴700",image:"kolba4.jpg"},
    {id:5,title:"Колба AMY Deluxe",price:"₴650",image:"kolba5.jpg"},
    {id:6,title:"Колба Tradicional (цветная)",price:"₴520",image:"kolba6.jpg"},
    {id:7,title:"Колба Stabilized Wood",price:"₴1,200",image:"kolba7.jpg"},
    {id:8,title:"Колба Mini (прозрачная)",price:"₴420",image:"kolba8.jpg"},
    {id:9,title:"Колба Vase (эмаль)",price:"₴560",image:"kolba9.jpg"},
    {id:10,title:"Набор уплотнителей",price:"₴120",image:"kolba10.jpg"}
  ],
  access:[
    {id:1,title:"Калауд Lotus",price:"₴300",image:"acc1.jpg"},
    {id:2,title:"Щипцы для угля 23см",price:"₴250",image:"acc2.jpg"},
    {id:3,title:"Чаша Samsaris VITRA",price:"₴700",image:"acc3.jpg"},
    {id:4,title:"Шланг силиконовый",price:"₴350",image:"acc4.jpg"},
    {id:5,title:"Калауд универсальный",price:"₴300",image:"acc5.jpg"},
    {id:6,title:"Набор для чистки",price:"₴150",image:"acc6.jpg"},
    {id:7,title:"Фольга / кольца",price:"₴80",image:"acc7.jpg"},
    {id:8,title:"Подставка для чаши",price:"₴180",image:"acc8.jpg"},
    {id:9,title:"Кейс для кальяна",price:"₴800",image:"acc9.jpg"},
    {id:10,title:"Ремкомплект уплотнителей",price:"₴120",image:"acc10.jpg"}
  ],
  mixes:[
    {id:1,title:"Shisha Mate (ассорти)",price:"₴120",image:"mix1.jpg"},
    {id:2,title:"ADALYA (популярные вкусы)",price:"₴180",image:"mix2.jpg"},
    {id:3,title:"AL FAKHER (разные)",price:"₴140",image:"mix3.jpg"},
    {id:4,title:"BUTA (вкусы)",price:"₴160",image:"mix4.jpg"},
    {id:5,title:"FUMARI (премиум)",price:"₴350",image:"mix5.jpg"},
    {id:6,title:"SWIPE (безникотин)",price:"₴100",image:"mix6.jpg"},
    {id:7,title:"Serbetli (разумная цена)",price:"₴150",image:"mix7.jpg"},
    {id:8,title:"Nakhla (традиции)",price:"₴130",image:"mix8.jpg"},
    {id:9,title:"Tangiers (премиум)",price:"₴450",image:"mix9.jpg"},
    {id:10,title:"King Smoke / местные",price:"₴140",image:"mix10.jpg"}
  ]
};

const catalogEl = document.getElementById('catalog');
const tabs = document.querySelectorAll('.tab-btn');

function render(tabKey){
  const list = products[tabKey] || [];
  catalogEl.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = `images/${p.image}`;
    img.alt = p.title;
    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = p.title;
    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = p.price;
    const meta = document.createElement('div');
    meta.className = 'meta';
    const buy = document.createElement('button');
    buy.className = 'btn-buy';
    buy.textContent = 'Купить';
    buy.addEventListener('click', ()=> alert(`Добавлено в корзину: ${p.title}`));
    meta.appendChild(buy);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(meta);
    catalogEl.appendChild(card);
  });
}

// табы
tabs.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    tabs.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.tab);
    // scroll to top of catalog for mobile users
    window.scrollTo({top: document.getElementById('catalog').offsetTop - 80, behavior: 'smooth'});
  });
});

// стартовая вкладка
render('calyan');
