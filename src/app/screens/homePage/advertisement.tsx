import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Advertisement() {
  const { t } = useTranslation();
  return (
    <div className="advertisement">
      <div className="ads-restaurant-frame">
        <div className="ads-info">
          <div className="ads-title">{t("title")}</div>
          <div className="ads-desc">{t("desc")}</div>
          <NavLink className={"shop-txt"} to="/products">
            {t("shoping")}
          </NavLink>
        </div>
        <div className="ads-image">
          <img src="img/ads-image.png" alt="" />
        </div>
      </div>
    </div>
  );
}
