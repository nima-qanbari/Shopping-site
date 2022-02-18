import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//font awesome
import "@fortawesome/fontawesome-free/css/all.min.css";


//react router
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
