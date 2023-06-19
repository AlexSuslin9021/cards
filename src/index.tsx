import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "app/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import GlobalError from "common/component/Global/GlobalError";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <GlobalError />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
