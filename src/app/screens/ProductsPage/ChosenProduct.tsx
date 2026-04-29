import React, { useEffect, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setChosenProduct } from "./slice";
import { retrieveChosenProduct } from "./selector";
import { createSelector } from "reselect";
import ProductService from "../../services/ProductService";
import { serverApi } from "../../../libs/config";
import { CardItem } from "../../../libs/types/search";
import OrderService from "../../services/OrderService";
import { useGlobals } from "../../hooks/useGlobals";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  }),
);

interface ChosenProductsProps {
  onAdd: (item: CardItem) => void;
}

export default function ChosenProduct(props: ChosenProductsProps) {
  const { onAdd } = props;
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams() as { id: string };
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const { authMember, setOrderBuilder } = useGlobals();

  useEffect(() => {
    const product = new ProductService();
    product
      .getProduct(id)
      .then((data) => {
        console.log("BAckend data:", data);
        dispatch(setChosenProduct(data));
      })
      .catch((err) => console.log(err));
  }, [id, dispatch]);

  if (!chosenProduct) return null;

  const handleBuyNow = async () => {
    if (!authMember) {
      toast.error("Iltimos ro'yxatdan o'ting");
      return;
    }

    try {
      const orderService = new OrderService();
      await orderService.createOrder([
        {
          _id: chosenProduct._id,
          quantity,
          name: chosenProduct.productName,
          discount: chosenProduct.productDiscount,
          image: chosenProduct.productImages[0],
        },
      ]);

      toast.success("Order created successfully!");
      setOrderBuilder(new Date());
      history.push("/orders");
    } catch (err) {
      console.error(err);
      toast.error("Order creation failed. Please try again.");
    }
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
            {chosenProduct.productImages.map((ele: string, index: number) => {
              const imagePath = `${serverApi}/${ele}`;

              return (
                <SwiperSlide key={index} className="swiper-slide">
                  <img src={imagePath} alt={chosenProduct.productName} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>

        <Stack className="chosen-product-info">
          <Box className="info-box">
            <p className="product-name">{chosenProduct.productName}</p>
            <Box className="price">
              <p className="product-discount">
                ${chosenProduct.productDiscount}
              </p>
              <p className="product-price">${chosenProduct.productPrice}</p>
            </Box>
            <div className="line"></div>
            <Box className="product-info">
              <Box className="product-viewing">
                <img src="/icons/product-view.png" alt="" />
                <p className="view-text">
                  Viewed by {chosenProduct.productViews} people
                </p>
              </Box>
              <p className="product-desc">{chosenProduct.productDesc}</p>
            </Box>
            <Box className="product-material">
              <p className="material-title">Material</p>
              <p className="material-type">{chosenProduct.productMaterial}</p>
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
                <Button
                  variant="contained"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    onAdd({
                      _id: chosenProduct._id,
                      quantity: quantity,
                      name: chosenProduct.productName,
                      discount: chosenProduct.productDiscount,
                      image: chosenProduct.productImages[0],
                    });
                    e.stopPropagation();
                  }}
                >
                  Add To Basket
                </Button>
              </Box>
              <Box className="buy-now" onClick={handleBuyNow}>
                Buy Now
              </Box>
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
