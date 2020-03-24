import {extend} from "../../utils/utils";
import {adapterFilms, adapterPromo} from "../../utils/adapter";

const initialState = {
  films: [],
  promoMovie: {},
  comments: []
};

const ActionType = {
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  RESET_COMMENTS: `RESET_COMMENTS`
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
  })
};

const DataOperation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        console.log(data);
        const films = adapterFilms(data);
        dispatch(ActionCreator.loadFilms(films));
      });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then(({data}) => {
        const film = adapterPromo(data);
        dispatch(ActionCreator.loadPromoMovie(film));
      });
  },
  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then(({data}) => {
        dispatch(ActionCreator.loadComments(data));
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
  }

  return state;
};

export {reducer, ActionType, ActionCreator, initialState, DataOperation};
