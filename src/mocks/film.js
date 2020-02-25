const film = {
  poster: `bg-the-grand-budapest-hotel.jpg`,
  cover: `the-grand-budapest-hotel-poster.jpg`,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
  actors: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`,
    `Saoirse Ronan`,
    `Tony Revoloru`,
    `Tilda Swinton`,
    `Tom Wilkinson`,
    `Owen Wilkinson`,
    `Adrien Brody`,
    `Ralph Fiennes`,
    `Jeff Goldblum`
  ],
  producer: `Wes Andreson`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.\n
    Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  rating: `8,9`,
  ratingDescription: `Very good`,
  votes: 240,
  duration: `1h 39m`,
  reviews: [
    {
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      votes: `8,9`,
      userName: `Kate Muir`,
      reviewDate: `December 24, 2016`
    }
  ]
};

export default film;
// В шапке страницы приведён следующий набор информации:
// Большой постер.
// Обложка фильма.
// Название фильма.
// Жанр.
// Год выхода на экраны.
// Кнопка запуска просмотра.
// Кнопка добавления в список «К просмотру».
//
// Overview. Общая информация о фильме:
// Описание фильма.
// Оценка. Например, 8.9 (всегда один знак после запятой).
// Описание оценки (Bad, Normal, Good, Very good, Awesome).
// Количество голосов.
// Режиссёр.
// Список актёров.
// Details. Расширенная информация:
// Режиссёр.
// Актёрский состав.
// Продолжительность (часы, минуты).
// Жанр.
// Год выхода на экраны.
//
// Reviews. Список отзывов пользователей.
//
// Каждый отзыв содержит:
// Текст отзыва.
// Оценка пользователя.
// Имя пользователя.
// Дата отзыва в формате: Месяц (полное название) день, год. Например: December 24, 2018.
