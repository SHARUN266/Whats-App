import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AccountProvider from "./components/Contextapi/account";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <AccountProvider>
      <App />
  </AccountProvider>
  </React.StrictMode>
);
