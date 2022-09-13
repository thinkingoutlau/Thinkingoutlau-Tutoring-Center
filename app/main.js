import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./src/store/store";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
