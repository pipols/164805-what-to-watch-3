import {reducer, initialState, ActionCreator} from "./data";


const film = {
  "id": 1,
  "name": `The Grand Budapest Hotel`,
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "preview_image": `img/the-grand-budapest-hotel.jpg`,
  "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  "rating": 8.9,
  "scores_count": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "run_time": 99,
  "genre": `Comedy`,
  "released": 2014,
  "is_favorite": false
};

const commentGet = {
  "id": 1,
  "user": {
    "id": 4,
    "name": `Kate Muir`
  },
  "rating": 8.9,
  "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  "date": `2019-05-08T14:13:56.569Z`
};

describe(`reducer data`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(initialState, {})).toBe(initialState);
  });

  it(`should handle LOAD_PROMO_MOVIE`, () => {
    expect(reducer({promoMovie: {}}, ActionCreator.loadPromoMovie(film))).toEqual({promoMovie: film});
  });

  it(`should handle LOAD_FILMS`, () => {
    expect(reducer({films: {}}, ActionCreator.loadFilms([film, film]))).toEqual({films: [film, film]});
  });

  it(`should handle LOAD_COMMENTS`, () => {
    expect(reducer({comments: {}}, ActionCreator.loadComments(commentGet))).toEqual({comments: commentGet});
  });

  it(`should handle RESET_COMMENTS`, () => {
    expect(reducer({comments: commentGet}, ActionCreator.resetComments())).toEqual({comments: []});
  });

  it(`should handle MERGE_FILM`, () => {
    expect(reducer({films: [film]}, ActionCreator.mergeFilm(film))).toEqual({films: [film]});
  });

  it(`should handle MERGE_PROMO_FILM`, () => {
    expect(reducer({promoMovie: {}}, ActionCreator.mergePromoFilm(film))).toEqual({promoMovie: film});
  });

  it(`should handle LOAD_FAVORITE_FILMS`, () => {
    expect(reducer({favoriteFilms: []}, ActionCreator.loadFavoriteFilms([film, film]))).toEqual({favoriteFilms: [film, film]});
  });

});
