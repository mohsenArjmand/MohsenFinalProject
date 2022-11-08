import React from "react";
import ReactDOM from "react-dom";
import AppTest from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

ReactDOM.render(
  <Provider store={store}>
          <AppTest></AppTest>
  </Provider>,
  document.getElementById("root")
);
