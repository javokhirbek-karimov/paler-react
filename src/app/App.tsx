import React, { useState } from "react";
import "../css/app.css";
import { Stack, Box, Typography, Container, Button, Link } from "@mui/material";
import { NavLink, Route, Switch } from "react-router-dom";
import { AboutUsPage } from "./screens/aboutUsPage";
import { ProductsPage } from "./screens/ProductsPage";
import UserPage from "./screens/userPage";
import { OrderPage } from "./screens/orderPage";
import { HomePage } from "./screens/homePage";
import { useLocation } from "react-router-dom";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import Footer from "./components/footer/Footer";
import "../css/app.css";
import "../css/footer.css";
import "../css/home.css";
import "../css/products.css";
import "../css/orders.css";
import "../css/basket.css";
import { useTranslation } from "react-i18next";
import useBasket from "./hooks/useBasket";

function App() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const { cardItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();

  return (
    <div className="app-container">
      {location.pathname === "/" ? (
        <HomeNavbar
          cardItems={cardItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      ) : (
        <OtherNavbar
          cardItems={cardItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      )}
      <main className="main-content">
        <Switch>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/products">
            <ProductsPage onAdd={onAdd} />
          </Route>
          <Route path="/mypage">
            <UserPage />
          </Route>
          <Route path="/orders">
            <OrderPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
