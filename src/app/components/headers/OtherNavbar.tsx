import React from "react";
import { Box, Stack, Container, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../../css/othernavbar.css";
import { LanguageOutlined } from "@mui/icons-material";

export function OtherNavbar() {
  const authMember = true;

  return (
    <Box className="other-navbar-container">
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
              <img className="brand-logo" src="/img/PALER-white.png" alt="" />
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
        </Box>
      </Box>
    </Box>
  );
}
