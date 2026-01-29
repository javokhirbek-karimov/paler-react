import { Box, Container, Stack } from "@mui/material";
import React, { useMemo, useState, useEffect, ChangeEvent } from "react";

import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setChosenProduct, setProducts } from "./slice";
import {
  Product,
  ProductInquiry,
  ProductOrder,
} from "../../../libs/types/product";
import { retrieveProducts } from "./selector";
import { createSelector } from "reselect";
import ProductService from "../../services/ProductService";
import { ProductBrand } from "../../../libs/enums/product.enum";
import { serverApi } from "../../../libs/config";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CardItem } from "../../../libs/types/search";

const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

interface ProductsProps {
  onAdd: (item: CardItem) => void;
}

export default function Products(props: ProductsProps) {
  const { onAdd } = props;
  const { setProducts } = actionDispatch(useDispatch());
  const dispatch = useDispatch();
  const { products } = useSelector(productsRetriever);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    order: "productViews",
    page: 1,
    limit: 1000,
    productBrand: ProductBrand.ALL,
    search: "",
  });

  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  const [brand, setBrand] = useState<ProductBrand>(ProductBrand.ALL);

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProductSearch({ ...productSearch, search: searchText, page: 1 });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  /* HANDLERS */

  const searchOrderHandler = (order: ProductOrder) => {
    setProductSearch((prev) => ({
      ...prev,
      order,
      page: 1,
    }));
  };
  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchBrand = brand === ProductBrand.ALL || p.productBrand === brand;

      const matchSearch =
        p.productName.toLowerCase().includes(search.toLowerCase()) ||
        p.productBrand.toLowerCase().includes(search.toLowerCase());

      return matchBrand && matchSearch;
    });
  }, [brand, search, products]);

  const chooseProductHandler = (id: string) => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="products">
      <Container>
        {/* FILTER */}
        <Stack className="products-filter">
          <Stack className="filtering">
            <Box className="brands-filter">
              <label htmlFor="brand-select">Brand:</label>
              <select
                id="brand-select"
                value={brand}
                onChange={(e) =>
                  setBrand(e.target.value as ProductBrand | ProductBrand.ALL)
                }
                className="brand-select"
              >
                {Object.values(ProductBrand).map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </Box>
            <Box className="type-filter">
              <select
                id="sort-select"
                value={productSearch.order}
                onChange={(e) =>
                  searchOrderHandler(e.target.value as ProductOrder)
                }
              >
                <option value="productViews"> Popularity</option>
                <option value="productPrice"> Price</option>
                <option value="createdAt"> Newest</option>
              </select>
            </Box>
          </Stack>
          <Box className="searching">
            <input
              type={"search"}
              className={"single-search-input"}
              name={"singleResearch"}
              placeholder={"Type here..."}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Box>
        </Stack>

        {/* PRODUCTS */}
        <Stack direction="row" flexWrap="wrap" className="products-list">
          {filteredProducts.map((product) => (
            <Box
              key={product._id}
              className="product-card"
              onClick={() => chooseProductHandler(product._id)}
            >
              <Box className="product-img">
                <img
                  src={`${serverApi}/${product.productImages[0]}`}
                  alt={product.productName}
                />
              </Box>

              <Box className="product-content">
                <p className="product-brand">{product.productBrand}</p>
                <p className="product-name">{product.productName}</p>
                <Box className="price">
                  <div className="product-discount">
                    ${product.productDiscount}
                  </div>
                  <div className="product-price">${product.productPrice}</div>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>

        <div className="address">
          <Container>
            <Stack className="address-area">
              <Box className="title">Our Address</Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3378.2813464921323!2d67.3118478671026!3d37.234685146794305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2skr!4v1769012845797!5m2!1suz!2skr"
                style={{ marginTop: "60px" }}
                width="1320"
                height={"500"}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Stack>
          </Container>
        </div>
      </Container>
      <div className={"static-frame"}>
        <Stack className="info">
          <Stack className="static-box">
            <img
              className="static-icon"
              src="/icons/shipping-icon.png"
              alt=""
            />
            <Box className="static-num">Free Shipping</Box>
            <Box className="static-text">You will love at great low prices</Box>
          </Stack>

          <Stack className="static-box">
            <img className="static-icon" src="/icons/15-days.png" alt="" />
            <Box className="static-num">15 Days Returns</Box>
            <Box className="static-text">Within 15 days for an exchange</Box>
          </Stack>

          <Stack className="static-box">
            <img className="static-icon" src="/icons/huge-time.png" alt="" />
            <Box className="static-num">Customer Support</Box>
            <Box className="static-text">24 hours a day, 7 days a week</Box>
          </Stack>

          <Stack className="static-box">
            <img className="static-icon" src="/icons/Flexible.png" alt="" />
            <Box className="static-num">Flexible Payment</Box>
            <Box className="static-text">Pay with multiple credit cards</Box>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}
