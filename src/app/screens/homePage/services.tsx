import { Box, Stack } from "@mui/material";
import Divider from "../../components/divider";

import React from "react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  return (
    <div className={"static-frame"}>
      <Stack className="info">
        <Stack className="static-box">
          <img className="static-icon" src="/icons/shipping-icon.png" alt="" />
          <Box className="static-num">{t("freeShipping.title")}</Box>
          <Box className="static-text">{t("freeShipping.desc")}</Box>
        </Stack>

        <Stack className="static-box">
          <img className="static-icon" src="/icons/15-days.png" alt="" />
          <Box className="static-num">{t("serviceReturns.title")}</Box>
          <Box className="static-text">{t("serviceReturns.desc")}</Box>
        </Stack>

        <Stack className="static-box">
          <img className="static-icon" src="/icons/huge-time.png" alt="" />
          <Box className="static-num">{t("support.title")}</Box>
          <Box className="static-text">{t("support.desc")}</Box>
        </Stack>

        <Stack className="static-box">
          <img className="static-icon" src="/icons/Flexible.png" alt="" />
          <Box className="static-num">{t("payment.title")}</Box>
          <Box className="static-text">{t("payment.desc")}</Box>
        </Stack>
      </Stack>
    </div>
  );
}
