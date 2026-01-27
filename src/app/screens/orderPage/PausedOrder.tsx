import { TabPanel } from "@mui/lab";
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { Product } from "../../../libs/types/product";
import {
  ProductBrand,
  ProductMaterial,
  ProductStatus,
} from "../../../libs/enums/product.enum";

export default function PausedOrders() {
  const products: Product[] = [
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
  ];

  const [quantities, setQuantities] = useState(() => products.map(() => 1));
  const [checkedItems, setCheckedItems] = useState(() =>
    products.map(() => false),
  );
  const subtotal = products.reduce((total, product, index) => {
    if (!checkedItems[index]) return total;
    return total + product.productDiscount * quantities[index];
  }, 0);
  const deliveryFee = subtotal === 0 ? 0 : subtotal > 1000 ? 0 : 50;
  const taxAmount = subtotal * 0.02;
  const grandTotal = subtotal + deliveryFee + taxAmount;

  return (
    <TabPanel value={"1"}>
      <Box className="container">
        <Stack spacing={4} className="order-chap">
          {products.map((product, index) => (
            <Box
              className="product-info"
              key={product._id}
              sx={{ display: "flex", gap: 2 }}
            >
              <Box className="product-img">
                <img
                  src={product.productImages?.[0]}
                  alt={product.productName}
                  className="image"
                />
              </Box>

              <Box className="product-details" sx={{ flex: 1 }}>
                <p
                  className="product-name"
                  style={{ margin: 0, fontWeight: 600 }}
                >
                  {product.productName}
                </p>

                <Box className="price" sx={{ display: "flex", gap: 2, mt: 1 }}>
                  <p className="product-discount" style={{ fontWeight: 600 }}>
                    ${product.productDiscount}
                  </p>
                  <p
                    className="product-price"
                    style={{ textDecoration: "line-through", opacity: 0.6 }}
                  >
                    ${product.productPrice}
                  </p>
                </Box>

                <Box
                  className="for-quantity"
                  sx={{ display: "flex", gap: 1, mt: 2, alignItems: "center" }}
                >
                  <button
                    onClick={() => {
                      const newQuantities = [...quantities];
                      newQuantities[index] = Math.max(
                        newQuantities[index] - 1,
                        1,
                      );
                      setQuantities(newQuantities);
                    }}
                  >
                    -
                  </button>
                  <p className="quantity" style={{ margin: "0 8px" }}>
                    {quantities[index]}
                  </p>
                  <button
                    onClick={() => {
                      const newQuantities = [...quantities];
                      newQuantities[index] = newQuantities[index] + 1;
                      setQuantities(newQuantities);
                    }}
                  >
                    +
                  </button>
                </Box>

                <Box
                  className="return-info"
                  sx={{ display: "flex", gap: 1, mt: 1 }}
                >
                  <img
                    src="/icons/return.png"
                    alt="return"
                    style={{ width: "20px" }}
                  />
                  <p className="return-text" style={{ margin: 0 }}>
                    15 Days return available
                  </p>
                </Box>
              </Box>

              <Box className="product-icons">
                <img
                  src="/icons/close.png"
                  alt="close"
                  style={{ cursor: "pointer" }}
                />
                <label
                  className="checkbox"
                  style={{ display: "flex", alignItems: "center", gap: 4 }}
                >
                  <input
                    type="checkbox"
                    checked={checkedItems[index]}
                    onChange={(e) =>
                      setCheckedItems((prev) =>
                        prev.map((c, i) =>
                          i === index ? e.target.checked : c,
                        ),
                      )
                    }
                  />
                  Select
                </label>
              </Box>
            </Box>
          ))}
        </Stack>

        <Stack className="order-right">
          <Box className="orders-total">
            <Box className="orders-subtotal">
              <p className="orders-title">Subtotal</p>
              <p className="orders-total">${subtotal}</p>
            </Box>
            <div className="line"></div>
            <Box className="additional-payments">
              <Box className="Taxes">
                <p className="taxes-title">Taxes</p>
                <p className="taxes-total">${taxAmount}</p>
              </Box>
              <Box className="taxes-payments">
                <p className="taxes-title">Delivery Fee</p>
                <p className="taxes-total">
                  {deliveryFee === 0 ? "FREE" : `$${deliveryFee}`}
                </p>
              </Box>
              <div className="line"></div>
            </Box>
            <Box className="grandTotal-payment">
              <p className="grandTotal-title">Grand Total</p>
              <p className="grandTotal-total">{grandTotal}</p>
            </Box>
            <Box className="payment-box">
              <button className="payment-button">Pay</button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </TabPanel>
  );
}
