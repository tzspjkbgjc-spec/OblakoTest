const products = {
  calyan: [
    {id:1, title:"Aroma Hookah Bravo Blue", price:"₴2,600", image:"loki-min.800x600.jpg"},
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
