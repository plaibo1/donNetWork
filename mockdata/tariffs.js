export const tariffs = [
  {
    slug: 'flat',
    tariffName: 'Квартира',
    title: 'Здесь будет описание какое-то описание',
    channelsCount: '136',
    speed: '50 Мбит/сек',
    price: '250',
    image: '/start3.png',
    categoryId: '1',
  },
  {
    slug: 'house',
    tariffName: 'Дом',
    title: 'Здесь будет описание какое-то описание',
    channelsCount: '202',
    speed: '100 Мбит/сек',
    price: '800',
    image: '/comfort.png',
    categoryId: '2',
  },
  {
    slug: 'office',
    tariffName: 'Офис',
    title: 'Здесь будет описание какое-то описание',
    channelsCount: '297',
    speed: '100 Мбит/сек',
    price: '900',
    image: '/test.png',
    categoryId: '3',
  },
]

export const flatTariffs = {
  "Социальный": {
    id: 1,
    title: 'Does drinking coffee make you smarter?',
    date: '5h ago',
    commentCount: 5,
    shareCount: 2,
  },
  "Универсальный": {
    id: 1,
    title: 'Is tech making coffee better or worse?',
    date: 'Jan 7',
    commentCount: 29,
    shareCount: 16,
  },
  "Максимальный": {
    id: 1,
    title: 'Ask Me Anything: 10 answers to your questions about coffee',
    date: '2d ago',
    commentCount: 9,
    shareCount: 5,
  },
}

export const houseTariffs = {
  "Старт": {
    id: 1,
    title: 'Does drinking coffee make you smarter?',
    date: '5h ago',
    commentCount: 5,
    shareCount: 2,
  },
  "Промо": {
    id: 1,
    title: 'Is tech making coffee better or worse?',
    date: 'Jan 7',
    commentCount: 29,
    shareCount: 16,
  },
  "Платинум": {
    id: 1,
    title: 'Ask Me Anything: 10 answers to your questions about coffee',
    date: '2d ago',
    commentCount: 9,
    shareCount: 5,
  },
  "Максимум": {
    id: 1,
    title: 'Ask Me Anything: 10 answers to your questions about coffee',
    date: '2d ago',
    commentCount: 9,
    shareCount: 5,
  },
}

export const officeTariffs = {
  "Офис": {
    content: `Все тарифы индивидуальны, без учета трафика, укажите желаемую скорость в заявке. ООО "Донтехсвязь" также предлагает услугу "Фиксированный IP-адрес"`
  }
}

export const tariffsData = {
  "flat": flatTariffs,
  "house": houseTariffs,
  "office": officeTariffs
}