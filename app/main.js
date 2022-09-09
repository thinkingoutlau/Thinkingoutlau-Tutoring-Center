import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from "./store";
import Routes from "./components/Routes";

const root = createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <Routes />
  </Provider>

  // make sure this is the same as the id of the div in your index.html
);
