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

const api = createAPI();

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
      <App />,
    </Provider>,
    container
);
