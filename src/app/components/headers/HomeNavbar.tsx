import React from "react";
import { Box, Stack, IconButton, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../../css/navbar.css";
import { LanguageOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export function HomeNavbar() {
  const { t, i18n } = useTranslation(); // navbar namespace
  const authMember = true;

  const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  const openLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const closeLangMenu = () => {
    setLangAnchorEl(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    closeLangMenu();
  };

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
              <img
                className="brand-logo"
                src="/img/PALER.png"
                alt="PALER Logo"
              />
            </NavLink>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              maxWidth={"948px"}
              alignItems={"center"}
            >
              <NavLink to="/">{t("home")}</NavLink>
              <NavLink to="/products">{t("products")}</NavLink>
              {authMember && <NavLink to="/orders">{t("orders")}</NavLink>}
              {authMember && <NavLink to="/mypage">{t("mypage")}</NavLink>}
              <NavLink to="/about">{t("about")}</NavLink>
            </Stack>

            <Stack sx={{ display: "flex" }} flexDirection={"row"}>
              <IconButton onClick={openLangMenu}>
                <LanguageOutlined />
              </IconButton>
              <Menu
                anchorEl={langAnchorEl}
                open={Boolean(langAnchorEl)}
                onClose={closeLangMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem onClick={() => changeLanguage("en")}>
                  English
                </MenuItem>
                <MenuItem onClick={() => changeLanguage("ko")}>한국어</MenuItem>
                <MenuItem onClick={() => changeLanguage("uz")}>O‘zbek</MenuItem>
              </Menu>

              <IconButton>
                <img src="/icons/user.svg" alt="user" />
              </IconButton>
              <IconButton>
                <img src="/icons/basket.svg" alt="basket" />
              </IconButton>
            </Stack>
          </Stack>

          <Stack className={"header-frame"}>
            <Stack className={"detail"}>
              <Stack spacing={1}>
                <Box className={"head-main-txt"}>{t("tagline1")}</Box>
                <Box className={"head-main-txt"}>{t("tagline2")}</Box>
              </Stack>
              <Box className={"welcome-txt"}>{t("welcome")}</Box>
              <NavLink className={"shop-txt"} to="/products">
                {t("shoping")}
              </NavLink>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
