import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Settings from "./component/screens/settings";
import DocumentBox from "./component/documentBox";
import ReduxApp from "./component/redux/redux";
import store from "./component/redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
