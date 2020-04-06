import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";
import NameSpace from "../../reducer/name-space";
import {Router} from "react-router-dom";
import history from "../../history";
import {AuthorizationStatus} from "../../const/common";


const mockStore = configureStore([]);

jest.mock(`../header/header.jsx`, () => `Header`);
jest.mock(`../main/main.jsx`, () => `Main`);

it(`<App /> renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: [],
      promoMovie: {},
      comments: []
    },
    [NameSpace.STATE]: {
      genre: `All genres`,
      activeFilm: null,
      shownCardsStack: 8,
      isActivePlayer: false,
    }
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <Router history={history} >
          <App
            isPagePreloader={false}
            onFilmIdSet={() => {}}
            authorizationStatus={AuthorizationStatus.NO_AUTH} />
        </Router>
      </Provider>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
