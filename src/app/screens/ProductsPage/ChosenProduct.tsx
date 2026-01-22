import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"; // FreeMode va Thumbs keraksiz bo'lsa olib tashlandi
import "swiper/css";
import "swiper/css/navigation";

import {
  ProductBrand,
  ProductMaterial,
  ProductStatus,
} from "../../../libs/enums/product.enum";

export default function ChosenProduct() {
  const [quantity, setQuantity] = useState(1);

  const product = {
    _id: "1",
    productStatus: ProductStatus.ACTIVE,
    productBrand: ProductBrand.ROLEX,
    productName: "Rolex Submariner",
    productPrice: 12500,
    productDiscount: 10000,
    productMaterial: ProductMaterial.STEEL,
    productDesc: "aaaa",
    productImages: ["/img/Day-1.png"],
    productViews: 1200,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return (
    <div className="chosen-product">
      <Box className="introduction">THE INTRODUCTION</Box>

      <Container className="product-container">
        <Stack className="chosen-product-images">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            style={{
              width: "100%",
              height: "100%",
              ["--swiper-navigation-color" as any]: "#ffffff",
              ["--swiper-navigation-size" as any]: "30px",
            }}
          >
            {product.productImages.map((image, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <img
                  src={image} // Public folderdan
                  alt={product.productName}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>

        <Stack className="chosen-product-info">
          <Box className="info-box">
            <p className="product-name">{product.productName}</p>
            <Box className="price">
              <p className="product-discount">${product.productDiscount}</p>
              <p className="product-price">${product.productPrice}</p>
            </Box>
            <div className="line"></div>
            <Box className="product-info">
              <Box className="product-viewing">
                <img src="/icons/product-view.png" alt="" />
                <p className="view-text">
                  Viewed by {product.productViews} people
                </p>
              </Box>
              <p className="product-desc">{product.productDesc}</p>
            </Box>
            <Box className="product-material">
              <p className="material-title">Material</p>
              <p className="material-type">{product.productMaterial}</p>
            </Box>
            <Box className="buying-buttons">
              <Box className="for-carts">
                <Box className="for-quantity">
                  <button
                    className="remove"
                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                  >
                    -
                  </button>
                  <p className="quantity">{quantity}</p>
                  <button
                    className="add"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </Box>
                <button>Add to Cart</button>
              </Box>
              <Box className="buy-now">Buy Now</Box>
            </Box>
            <div className="line"></div>
            <Box className="service-infos">
              <Box className="free-shipping">
                <img src="/icons/free-shipping.png" alt="" />
                <p className="shipping-info">
                  Free worldwide shipping on all order over $1,000.00
                </p>
              </Box>
              <Box className="free-shipping">
                <img src="/icons/deliver-date.png" alt="" />
                <p className="shipping-info">Delivers in 2-4 working days</p>
              </Box>
            </Box>
          </Box>
        </Stack>
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
