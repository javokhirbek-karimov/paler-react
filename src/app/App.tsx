import React from "react";
import "../css/app.css";
import { Stack, Box, Typography, Container, Button, Link } from "@mui/material";
import { NavLink, Route, Switch } from "react-router-dom";
import { AboutUsPage } from "./screens/aboutUsPage";
import { ProductsPage } from "./screens/ProductsPage";
import { UserPage } from "./screens/userPage";
import { OrderPage } from "./screens/orderPage";
import { HomePage } from "./screens/homePage";
import { useLocation } from "react-router-dom";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import Footer from "./components/footer/Footer";
import "../css/app.css";
import "../css/footer.css";
import "../css/home.css";

function App() {
  const location = useLocation();

  console.log("Location=>", location);

  return (
    <div className="app-container">
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <main className="main-content">
        <Switch>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/products">
            <ProductsPage />
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
