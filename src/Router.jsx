import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/catalog/:categoryKey?">
        <CatalogPage />
      </Route>
      <Route path="/product/:productId">
        <ProductPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default hot(Router);
