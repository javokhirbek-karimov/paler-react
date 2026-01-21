import React from "react";
import { Box, Avatar } from "@mui/material";

const brands = [
  { id: 1, name: "ROLEX", img: "/img/Rolex.png" },
  { id: 2, name: "Panerai", img: "/img/panerai.png" },
  { id: 3, name: "RADO", img: "/img/rado.png" },
  { id: 4, name: "ARMANI EXCHANGE", img: "/img/armani.png" },
  { id: 5, name: "TISSOT", img: "/img/fossil.png" },
  { id: 6, name: "TITAN", img: "/img/titan.png" },
  { id: 7, name: "BREITLING", img: "/img/breitling.png" },
  { id: 8, name: "IWC SCHAFFHAUSEN", img: "/img/iwc.jpg" },
];

const BrandSwipe = () => {
  return (
    <Box className="brand-swipe">
      <Box className="layout-container">
        <Box className="brands-title">OUR BRANDS</Box>
        <Box className="brands">
          {brands.map((brand) => (
            <Avatar
              key={brand.id}
              src={brand.img}
              alt={brand.name}
              sx={{ width: 60, height: 60, flexShrink: 0 }}
              className="brand"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BrandSwipe;
