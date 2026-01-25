import React, { useEffect } from "react";
import BrandSwipe from "./brands";
import "../../../css/home.css";
import Services from "./services";
import BestSelling from "./bestSelling";
import Advertisement from "./advertisement";
import OurProduct from "./ourProduct";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../../libs/types/product";
import { setTopProducts } from "./slice";
import { ProductBrand } from "../../../libs/enums/product.enum";
import ProductService from "../../services/ProductService";

const actionDispatch = (dispatch: Dispatch) => ({
  setTopProducts: (data: Product[]) => dispatch(setTopProducts(data)),
});

export function HomePage() {
  const { setTopProducts } = actionDispatch(useDispatch());

  useEffect(() => {
    const product = new ProductService();
    product
      .getTopProducts()
      .then((data) => {
        setTopProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
