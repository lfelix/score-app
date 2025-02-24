import React from "react";
import ReactDOM from "react-dom/client"; // Correto para React 18
import "./index.css";
import App from "./App"; // O `App.tsx` contém a estrutura principal

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
