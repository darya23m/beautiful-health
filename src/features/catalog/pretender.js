import config from '../../config/app';

const data = [
  {
    id: 'p1',
    category: 'female',
    price: 70,
    alt: 'HEAD & SHOULDERS women',
    src: '/img/shampoo.png',
    title: 'Шампунь HEAD & SHOULDERS 2в1 Свежесть ментола, 225мл',
  },
  {
    id: 'p2',
    category: 'children',
    price: 99,
    alt: 'Teethbrash Oral-B Kids',
    src: '/img/shchetka-oralb.png',
    title: 'Мануальная Зубная Щетка Oral-B Kids',
  },
  {
    id: 'p3',
    category: 'male',
    price: 84,
    alt: 'Head & Shoulders men',
    src: '/img/gel-shampun.png',
    title: 'Гель для душа и шампунь Head & Shoulders Заряд Энергии, 270 мл',
  },
  {
    id: 'p4',
    category: 'male',
    price: 64,
    alt: 'GARNIER Mineral',
    src: '/img/dezodorant-garnier.png',
    title: 'Дезодорант GARNIER Mineral Максимальная Эффективность Для мужчин, 50 мл',
  },
  {
    id: 'p5',
    category: 'children',
    price: 140,
    alt: 'HIPPO Shampoo',
    src: '/img/dityachiy-shampun.jpeg',
    title: 'Детский шампунь и гель для купания, 200 мл',
  },
  {
    id: 'p6',
    category: 'female',
    price: 60,
    alt: 'Maxi Color eyeshadow',
    src: '/img/tini-mineral.png',
    title: 'Тени для век Maxi Color eyeshadow Mineral Pure Макиато, 3 г',
  }
];

export default function () {
  this.get(`${config.API_BASE_URL}/catalog`, (req) => {
    const category = req.queryParams.category;
    const catalogData = category ? data.filter((item) => item.category === category) : data;

    return [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify({ data: catalogData })
    ];
  });
};
