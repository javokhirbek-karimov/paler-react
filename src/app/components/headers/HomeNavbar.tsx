import React from "react";
import { Box, Stack, Container, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../../css/navbar.css";
import { LanguageOutlined } from "@mui/icons-material";

export function HomeNavbar() {
  const authMember = true;

  return (
    <Box className="home-navbar-container">
      <video
        autoPlay
        loop
        muted
        className="navbar-video"
        src="/videos/Jacob-godfather.mp4"
      >
        Your browser does not support the video tag.
      </video>

      <Box className="navbar-content" sx={{ mt: "28px" }}>
        <Box className="layout-container">
          <Stack
            sx={{ height: "80px" }}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            className="menu"
          >
            <NavLink to="/">
              <img className="brand-logo" src="/img/PALER.png" alt="" />
            </NavLink>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              maxWidth={"948px"}
              alignItems={"center"}
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/products">Products</NavLink>
              {authMember ? (
                <Box>
                  <NavLink to="/orders">Orders</NavLink>
                </Box>
              ) : null}
              {authMember ? (
                <Box>
                  <NavLink to="/mypage">My Page</NavLink>
                </Box>
              ) : null}
              <NavLink to="/about">About Us</NavLink>
            </Stack>
            <Stack sx={{ display: "flex" }} flexDirection={"row"}>
              <IconButton>
                <LanguageOutlined />
              </IconButton>
              <IconButton>
                <img src="/icons/user.svg" alt="" />
              </IconButton>
              <IconButton>
                <img src="/icons/basket.svg" alt="" />
              </IconButton>
            </Stack>
          </Stack>
          <Stack className={"header-frame"}>
            <Stack className={"detail"}>
              <Stack spacing={1}>
                <Box className={"head-main-txt"}>Timeless Precision,</Box>
                <Box className={"head-main-txt"}>Unmatched Elegence</Box>
              </Stack>
              <Box className={"welcome-txt"}>
                Discover finely crafted timepieces that blend tradition,
                innovation, and sophistication.
              </Box>
              <NavLink className={"shop-txt"} to="/products">
                SHOP NOW
              </NavLink>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
