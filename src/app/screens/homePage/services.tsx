import { Box, Stack } from "@mui/material";
import Divider from "../../components/divider";

import React from "react";

export default function Services() {
  return (
    <div className={"static-frame"}>
      <Stack className="info">
        <Stack className="static-box">
          <img className="static-icon" src="/icons/shipping-icon.png" alt="" />
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
  );
}
