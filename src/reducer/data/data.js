import {extend} from "../../utils/utils";
import {adapterFilms, adapterFilm} from "../../utils/adapter";
import {ActionCreator as ActionCreatorState} from "../state/state";
import history from "../../history";
import NameSpace from "../name-space";

const initialState = {
  films: [],
  promoMovie: {},
  comments: [],
  favoriteFilms: []
};

const ActionType = {
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  RESET_COMMENTS: `RESET_COMMENTS`,
  MERGE_FILM: `MERGE_FILM`,
  MERGE_PROMO_FILM: `MERGE_PROMO_FILM`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
};

const ActionCreator = {
  loadPromoMovie: (film) => ({
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: film
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  resetComments: () => ({
    type: ActionType.RESET_COMMENTS
  }),
  mergeFilm: (film) => ({
    type: ActionType.MERGE_FILM,
    payload: film
  }),
  mergePromoFilm: (film) => ({
    type: ActionType.MERGE_PROMO_FILM,
    payload: film
  }),
  loadFavoriteFilms: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films
  })
};

const DataOperation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        const films = adapterFilms(data);
        dispatch(ActionCreator.loadFilms(films));
      });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then(({data}) => {
        const film = adapterFilm(data);
        dispatch(ActionCreator.loadPromoMovie(film));
        dispatch(ActionCreatorState.pagePreloader(false));
      });
  },
  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then(({data}) => {
        dispatch(ActionCreator.loadComments(data));
      });
  },
  postComments: (id, comment) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, {
      rating: comment.rating,
      comment: comment.comment
    })
      .then(() => {
        dispatch(ActionCreatorState.setFormDisabledStatus(false));
        history.push(`/film/${id}`);
      })
      .catch(() => {
        dispatch(ActionCreatorState.setFormDisabledStatus(false));
      });
  },
  postFavorite: (id, status) => (dispatch, getState, api) => {
    return api.post(`favorite/${id}/${status}`)
      .then(({data}) => {
        const film = adapterFilm(data);
        const store = getState();
        if (store[NameSpace.DATA].promoMovie.id === id) {
          dispatch(ActionCreator.mergePromoFilm(film));
        }
        dispatch(ActionCreator.mergeFilm(film));
      });
  },
  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then(({data}) => {
        const films = adapterFilms(data);
        dispatch(ActionCreator.loadFavoriteFilms(films));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promoMovie: action.payload
      });
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload
      });
    case ActionType.RESET_COMMENTS:
      return extend(state, {
        comments: []
      });
    case ActionType.MERGE_FILM:
      return extend(state, {
        films: state.films.map((film) => film.id === action.payload.id ? action.payload : film)
      });
    case ActionType.MERGE_PROMO_FILM:
      return extend(state, {
        promoMovie: action.payload
      });
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState, DataOperation};
