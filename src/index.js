import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import {DataOperation} from "./reducer/data/data";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import createAPI from "./api";
import {ActionCreator, AuthorizationStatus} from "./reducer/user/user";
import {Error} from "./const/common";
import Swal from "sweetalert2";

const onResponse = (response) => {
  switch (response.status) {
    case Error.UNAUTHORIZED:
      return store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    // case Error.BAD_REQUEST:
    //   return store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.BAD_REQUEST));
  }

  return Swal.fire({
    icon: `error`,
    title: `Oops... ${response.status}`,
    text: response.data.error
  });
};

const api = createAPI(onResponse);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadPromoMovie());
store.dispatch(DataOperation.loadFilms());

const container = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container
);
