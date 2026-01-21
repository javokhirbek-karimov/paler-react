import React from "react";
import { NavLink } from "react-router-dom";

export default function Advertisement() {
  return (
    <div className="advertisement">
      <div className="ads-restaurant-frame">
        <div className="ads-info">
          <div className="ads-title">
            Discover Luxury Watches for Every Style & Occasion
          </div>
          <div className="ads-desc">
            Explore a curated collection of premium timepieces, crafted for
            sophistication, durability, and excellence.
          </div>
          <NavLink className={"shop-txt"} to="/products">
            SHOP NOW
          </NavLink>
        </div>
        <div className="ads-image">
          <img src="img/ads-image.png" alt="" />
        </div>
      </div>
    </div>
  );
}
