import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./products";
import { CardItem } from "../../../libs/types/search";

interface ProductsPageProps {
  onAdd: (item: CardItem) => void;
}

export function ProductsPage(props: ProductsPageProps) {
  const { onAdd } = props;
  const products = useRouteMatch();

  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:id`}>
          <ChosenProduct onAdd={onAdd} />
        </Route>
        <Route path={`${products.path}`}>
          <Products onAdd={onAdd} />
        </Route>
      </Switch>
    </div>
  );
}
