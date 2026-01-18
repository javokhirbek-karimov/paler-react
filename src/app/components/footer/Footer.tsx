import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Footers = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background: #000000;
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
    <Footers>
      <Container>
        <Stack flexDirection={"column"} sx={{ mt: "94px" }} className="footer">
          <NavLink to="/">
            <img className="brand-logo" src="/img/PALER-white.png" alt="" />
          </NavLink>
          <Box className="phone-number">010-7494-7510</Box>
          <Box className="email">kjavohir009@gmail.com</Box>
          <Box className="address">
            3891 Ranchview Dr.Richardson, California 62639
          </Box>
          <Box className="social-medias">
            <a href="https://facebook.com" className="facebook">
              <img src="/icons/facebook.png" alt="" />
            </a>
            <a href="https://t.me/javoxir_karimov" className="telegram">
              <img src="/icons/telegram.png" alt="" />
            </a>
            <a href="https://instagram.com" className="instagram">
              <img src="/icons/instagram.png" alt=""></img>
            </a>
          </Box>
          <Box className="categories">
            <Box className="categories1">
              <Box className="category-name">About Company</Box>
              <Box className="category">Our Story</Box>
              <Box className="category">Shop</Box>
              <Box className="category">Blog</Box>
              <Box className="category">FAQ</Box>
            </Box>
            <Box className="categories1">
              <Box className="category-name">Help Information</Box>
              <Box className="category">Shipping Information</Box>
              <Box className="category">Returns & Refunds</Box>
              <Box className="category">Payment Options</Box>
              <Box className="category">Contact Us</Box>
            </Box>
            <Box className="categories1">
              <Box className="category-name">TERMS OF SERVICE</Box>
              <Box className="category">Privacy Policy</Box>
              <Box className="category">Terms of Service</Box>
              <Box className="category">Cookie Policy</Box>
            </Box>
            <Box className="categories1">
              <Box className="category-name">ACCOUNT INFORMATION</Box>
              <Box className="category">Login/Create Account</Box>
              <Box className="category">Track Order</Box>
              <Box className="category">Wishlist</Box>
            </Box>
          </Box>
        </Stack>
        <Stack
          style={{ border: "1px solid #C5C8C9", width: "100%", opacity: "0.2" }}
          sx={{ mt: "80px" }}
        ></Stack>
        <Stack className={"copyright-txt"}>
          Copyright © 2026 Paler, All Rights Reserved.
        </Stack>
      </Container>
    </Footers>
  );
}
