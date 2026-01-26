import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./products";

export function ProductsPage() {
  const products = useRouteMatch();

  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:id`}>
          <ChosenProduct />
        </Route>
        <Route path={`${products.path}`}>
          <Products />
        </Route>
      </Switch>
    </div>
  );
}
