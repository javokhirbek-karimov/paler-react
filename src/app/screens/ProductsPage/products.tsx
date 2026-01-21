import { Box, Container, Stack } from "@mui/material";
import React, { useMemo, useState } from "react";
import {
  ProductBrand,
  ProductMaterial,
  ProductStatus,
} from "../../../libs/enums/product.enum";

const products = [
  {
    _id: "1",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.ROLEX,
    productName: "Rolex Submariner",
    productPrice: 12500,
    productDiscount: 10000,
    productMaterial: ProductMaterial.STEEL,
    productImages: ["img/Day-1.png"],
    productViews: 1200,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "2",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.TISSOT,
    productName: "Tissot PRX",
    productPrice: 650,
    productDiscount: 600,
    productMaterial: ProductMaterial.STEEL,
    productImages: ["img/Seastar-1.png"],
    productViews: 980,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "3",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.BREITLING,
    productName: "Breitling Navitimer",
    productPrice: 8900,
    productDiscount: 8500,
    productMaterial: ProductMaterial.STEEL,
    productImages: ["img/Navitimer-1.png"],
    productViews: 760,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "4",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.IWC,
    productName: "IWC Portu Giesser",
    productPrice: 10200,
    productDiscount: 8000,
    productMaterial: ProductMaterial.LEATHER,
    productImages: ["img/PortuGieser-1.png"],
    productViews: 640,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "5",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.RADO,
    productName: "Rado Captain",
    productPrice: 2100,
    productDiscount: 1500,
    productMaterial: ProductMaterial.CERAMIC,
    productImages: ["img/Captain-1.png"],
    productViews: 540,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "6",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.PANERAI,
    productName: "Panerai Luminor",
    productPrice: 7800,
    productDiscount: 7000,
    productMaterial: ProductMaterial.LEATHER,
    productImages: ["img/Summersible.png"],
    productViews: 830,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "7",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.ARMANI,
    productName: "Armani Exchange",
    productPrice: 320,
    productDiscount: 285,
    productMaterial: ProductMaterial.STEEL,
    productImages: ["img/Armani-1.png"],
    productViews: 420,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "8",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.JACOB,
    productName: "Jacob & Co Astronomia",
    productPrice: 25000,
    productDiscount: 21000,
    productMaterial: ProductMaterial.STEEL,
    productImages: ["img/Godfather-1.png"],
    productViews: 310,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function Products() {
  const [brand, setBrand] = useState<ProductBrand | "ALL">("ALL");
  type SortType = "POPULARITY" | "PRICE" | "NEW";
  const [sort, setSort] = useState<SortType>("POPULARITY");

  const filteredProducts = useMemo(() => {
    if (brand === "ALL") return products;
    return products.filter((p) => p.productBrand === brand);
  }, [brand]);

  return (
    <div className="products">
      <Container>
        {/* FILTER */}
        <Stack className="products-filter">
          <Stack className="filtering">
            <Box className="brands-filter">
              <label htmlFor="brand-select">Brand</label>
              <select
                id="brand-select"
                value={brand}
                onChange={(e) =>
                  setBrand(e.target.value as ProductBrand | "ALL")
                }
                className="brand-select"
              >
                <option value="ALL">All</option>
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
                value={sort}
                onChange={(e) => setSort(e.target.value as SortType)}
              >
                <option value="Popularity">Sort by Popularity</option>
                <option value="Price">Sort by Price</option>
                <option value="New">Sort by Newest</option>
              </select>
            </Box>
          </Stack>
          <Box className="searching">
            <input
              type={"search"}
              className={"single-search-input"}
              name={"singleResearch"}
              placeholder={"Type here..."}
            />
          </Box>
        </Stack>

        {/* PRODUCTS */}
        <Stack direction="row" flexWrap="wrap" className="products-list">
          {filteredProducts.map((product) => (
            <Box key={product.productName} className="product-card">
              <Box className="product-img">
                <img src={product.productImages[0]} alt={product.productName} />
              </Box>
              <Box className="product-content">
                <p className="product-brand">{product.productBrand}</p>
                <p className="product-name">{product.productName}</p>
              </Box>
              <Box className="price">
                <div className="product-discount">
                  ${product.productDiscount}
                </div>
                <div className="product-price">${product.productPrice}</div>
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
    </div>
  );
}
