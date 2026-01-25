import React, { useEffect } from "react";
import BrandSwipe from "./brands";
import "../../../css/home.css";
import Services from "./services";
import BestSelling from "./bestSelling";
import Advertisement from "./advertisement";
import OurProduct from "./ourProduct";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../libs/types/product";
import { createSelector } from "reselect";
import { setTopProducts } from "./slice";
import { retrieveTopProducts } from "./selector";

const actionDispatch = (dispatch: Dispatch) => ({
  setTopProducts: (data: Product[]) => dispatch(setTopProducts(data)),
});

const topProductsRetriever = createSelector(
  retrieveTopProducts,
  (topProducts) => ({ topProducts }),
);

export function HomePage() {
  const { setTopProducts } = actionDispatch(useDispatch());

  useEffect(() => {}, []);

  return (
    <div className="homepage">
      <BrandSwipe />
      <BestSelling />
      <Advertisement />
      <OurProduct />
      <Services />
    </div>
  );
}
