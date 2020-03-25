import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "./styles.css";
import "./styles.scss";
import Cart from "./Cart";

ReactDOM.render(
  <Cart>
    <Router />
  </Cart>,
  document.getElementById("app")
);
