import React from "react";
import "../css/app.css";
import { Stack, Box, Typography, Container, Button, Link } from "@mui/material";
import { NavLink, Route, Switch } from "react-router-dom";
import { AboutUsPage } from "./screens/aboutUsPage";
import { ProductsPage } from "./screens/ProductsPage";
import { UserPage } from "./screens/userPage";
import { OrderPage } from "./screens/orderPage";
import { HomePage } from "./screens/homePage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/mypage">My Page</NavLink>
          </li>
          <li>
            <NavLink to="/orders">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </nav>

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
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
