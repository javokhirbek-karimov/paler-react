import React, { useEffect } from "react";
import BrandSwipe from "./brands";
import "../../../css/home.css";
import Services from "./services";
import BestSelling from "./bestSelling";
import Advertisement from "./advertisement";
import OurProduct from "./ourProduct";
export function HomePage() {
  useEffect(() => {}, []);

  return (
    <div className="homepage">
      <BrandSwipe />
      <BestSelling />
      <Advertisement />
      <OurProduct />
      <Services />
    </div>
  );
}
