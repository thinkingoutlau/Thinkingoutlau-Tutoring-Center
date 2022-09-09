import { Provider } from "react-redux";
import React from "react";
import { createRoot } from "react-dom/client";
import Routes from "./components/Routes";
import store from "./store";

const root = createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <Routes />
  </Provider>

  // make sure this is the same as the id of the div in your index.html
);
