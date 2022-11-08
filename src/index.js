import React from "react";
import ReactDOM from "react-dom";
import AppReactReduxNew from "./reactReduxNew/components/App";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reactReduxNew/reducers";

const store = createStore(rootReducer);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

ReactDOM.render(
  <Provider store={store}>
          <AppReactReduxNew></AppReactReduxNew>
          <App></App>
  </Provider>,
  document.getElementById("root")
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {  Provider } from "react-redux";
// import { createStore } from 'redux';
// import Reducer from "./components/redux/todoReducer";

// const store = createStore(Reducer);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log({store})
// root.render(
//   // <React.StrictMode>
//   <Provider store={store}>
//     <App />
//     </Provider>

//   // </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
