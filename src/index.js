import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import QuoteGenerator from "./QuoteComponent/QuoteGenerator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuoteGenerator />
  </React.StrictMode>
);
reportWebVitals();
