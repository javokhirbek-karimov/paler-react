import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveTopProducts } from "./selector";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";

const topProductsRetriever = createSelector(
  retrieveTopProducts,
  (topProducts) => ({ topProducts }),
);
export default function BestSelling() {
  const { t } = useTranslation();
  const { topProducts } = useSelector(topProductsRetriever);
  return (
    <div className="bestSellling-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">{t("besttitle")}</Box>
          <Box className="category-desc">{t("bestdesc")}</Box>

          <Stack className="cards-frame">
            <CssVarsProvider>
              {topProducts.length ? (
                topProducts.map((ele: Product) => {
                  const imagePath = `${serverApi}/${ele.productImages[0]}`;

                  return (
                    <div className="product-card" key={ele._id}>
                      <div className="product-image">
                        <img src={imagePath} alt={ele.productName} />
                      </div>

                      <div className="product-content">
                        <p className="product-brand">{ele.productBrand}</p>

                        <h3 className="product-name">{ele.productName}</h3>

                        <div className="price">
                          <div className="product-discount">
                            ${ele.productDiscount}
                          </div>
                          <div className="product-price">
                            ${ele.productPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <Box className="no-data">{t("noData")}</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
