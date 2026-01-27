import React, { useState } from "react";
import "../css/app.css";
import { Route, Switch } from "react-router-dom";
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
import useBasket from "./hooks/useBasket";
import AuthenticationModal from "./components/auth";
import AppToast from "./components/sonner/AppSonner";
import { toast } from "sonner";
import { Messages } from "../libs/config";
import MemberService from "./services/MemberService";
import { useGlobals } from "./hooks/useGlobals";

function App() {
  const location = useLocation();
  const { setAuthMember } = useGlobals();
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { cardItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();

  /* Handlers */

  const handleSignUpClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);

  const handleLogOutClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseLogOut = () => setAnchorEl(null);
  const handleLogOutRequest = async () => {
    try {
      const member = new MemberService();
      // await member.logout();

      toast.promise(member.logout(), {
        loading: "Logging out...",
        success: "You logged out successfully 🎉",
        error: "Logout failed ❌",
      });

      setAuthMember(null);
    } catch (err) {
      console.log(err);
      toast.error(Messages.error1);
    }
  };

  return (
    <div className="app-container">
      <AppToast />
      {location.pathname === "/" ? (
        <HomeNavbar
          cardItems={cardItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setSignupOpen={setSignupOpen}
          setLoginOpen={setLoginOpen}
          anchorEl={anchorEl}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
        />
      ) : (
        <OtherNavbar
          cardItems={cardItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setSignupOpen={setSignupOpen}
          setLoginOpen={setLoginOpen}
          anchorEl={anchorEl}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogOutRequest={handleLogOutRequest}
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

      <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleLoginClose={handleLoginClose}
        handleSignupClose={handleSignUpClose}
      />
    </div>
  );
}

export default App;
