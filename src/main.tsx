import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LocalizationContextProvider from "./contexts/localization/LocalizationContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocalizationContextProvider>
      <App />
    </LocalizationContextProvider>
  </React.StrictMode>,
);
