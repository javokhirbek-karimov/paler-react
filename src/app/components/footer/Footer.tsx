import React from "react";
import { Box, Container, Stack } from "@mui/material";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footers = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background: #000000;
  background-size: cover;
`;

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Footers>
      <Container disableGutters>
        <Stack flexDirection={"column"} className="footer">
          <NavLink to="/">
            <img className="brand-logo" src="/img/PALER-white.png" alt="" />
          </NavLink>
          <Box className="phone-number">+8210-7494-7510</Box>
          <Box className="email">kjavohir009@gmail.com</Box>
          <Box className="address">
            3891 Ranchview Dr.Richardson, California 62639
          </Box>
          <Box className="social-medias">
            <a href="https://youtube.com/Karimov_Javokhir" className="facebook">
              <img src="/icons/facebook.png" alt="" />
            </a>
            <a href="https://t.me/javoxir_karimov" className="telegram">
              <img src="/icons/telegram.png" alt="" />
            </a>
            <a
              href="https://instagram.com/javoxir__karimov"
              className="instagram"
            >
              <img src="/icons/instagram.png" alt=""></img>
            </a>
          </Box>
          <Box className="categories">
            <Box className="categories1">
              <Box className="category-name">{t("aboutCompany")}</Box>
              <Box className="category">{t("ourStory")}</Box>
              <Box className="category">{t("shop")}</Box>
              <Box className="category">{t("blog")}</Box>
              <Box className="category">{t("faq")}</Box>
            </Box>
            <Box className="categories1">
              <Box className="category-name">{t("helpInfo")}</Box>
              <Box className="category">{t("shippingInfo")}</Box>
              <Box className="category">{t("returns")}</Box>
              <Box className="category">{t("paymentOptions")}</Box>
              <Box className="category">{t("contactUs")}</Box>
            </Box>
            <Box className="categories1">
              <Box className="category-name">{t("terms")}</Box>
              <Box className="category">{t("privacyPolicy")}</Box>
              <Box className="category">{t("termsOfService")}</Box>
              <Box className="category">{t("cookiePolicy")}</Box>
            </Box>
            <Box className="categories1">
              <Box className="category-name">{t("accountInfo")}</Box>
              <Box className="category">{t("login")}</Box>
              <Box className="category">{t("trackOrder")}</Box>
              <Box className="category">{t("wishlist")}</Box>
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
