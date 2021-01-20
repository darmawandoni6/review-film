import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.scss";
import AppRoute from "./AppRoute";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
