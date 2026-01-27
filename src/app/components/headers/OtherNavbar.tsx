import React from "react";
import { Box, Stack, IconButton, MenuItem, Menu } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../../css/othernavbar.css";
import { LanguageOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { CardItem } from "../../../libs/types/search";
import Basket from "./Basket";
import { toast } from "sonner";
import { useGlobals } from "../../hooks/useGlobals";

interface OtherNavbarProps {
  cardItems: CardItem[];
  onAdd: (item: CardItem) => void;
  onRemove: (item: CardItem) => void;
  onDelete: (item: CardItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (Open: boolean) => void;
  handleLogOutClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogOut: () => void;
  handleLogOutRequest: () => void;
}

export function OtherNavbar(props: OtherNavbarProps) {
  const [isBasketOpen, setIsBasketOpen] = React.useState(false);
  const {
    cardItems,
    onRemove,
    onAdd,
    onDelete,
    onDeleteAll,
    setLoginOpen,
    setSignupOpen,
    handleLogOutRequest,
  } = props;
  const { t, i18n } = useTranslation();

  const { authMember } = useGlobals();

  const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  const [authAnchorEl, setAuthAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  const openLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const closeLangMenu = () => {
    setLangAnchorEl(null);
  };

  const openAuthMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAuthAnchorEl(event.currentTarget);
  };

  const closeAuthMenu = () => {
    setAuthAnchorEl(null);
  };

  return (
    <Box className="other-navbar-container">
      <Box className="navbar-content" sx={{ mt: "28px" }}>
        <Box className="layout-container">
          <Stack
            sx={{ height: "80px" }}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            className="menu"
          >
            <NavLink to="/">
              <img className="brand-logo" src="/img/PALER-white.png" alt="" />
            </NavLink>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              maxWidth={"948px"}
              alignItems={"center"}
            >
              <NavLink to="/">{t("home")}</NavLink>
              <NavLink to="/products">{t("products")}</NavLink>
              {authMember ? (
                <Box>
                  <NavLink to="/orders">{t("orders")}</NavLink>
                </Box>
              ) : null}
              {authMember ? (
                <Box>
                  <NavLink to="/mypage">{t("mypage")}</NavLink>
                </Box>
              ) : null}
              <NavLink to="/about">{t("about")}</NavLink>
            </Stack>
            <Stack sx={{ display: "flex" }} flexDirection={"row"}>
              <IconButton onClick={openLangMenu}>
                <LanguageOutlined />
              </IconButton>
              <Menu
                anchorEl={langAnchorEl}
                open={Boolean(langAnchorEl)}
                onClose={closeLangMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <MenuItem
                  onClick={async () => {
                    const newLang = "en";
                    await i18n.changeLanguage(newLang);

                    const tNew = i18n.getFixedT(newLang);
                    toast.success(tNew("languageChanged"));
                    closeLangMenu();
                  }}
                >
                  English
                </MenuItem>
                <MenuItem
                  onClick={async () => {
                    const newLang = "ko";
                    await i18n.changeLanguage(newLang);

                    const tNew = i18n.getFixedT(newLang);
                    toast.success(tNew("languageChanged"));
                    closeLangMenu();
                  }}
                >
                  한국어
                </MenuItem>
                <MenuItem
                  onClick={async () => {
                    const newLang = "uz";
                    await i18n.changeLanguage(newLang);

                    const tNew = i18n.getFixedT(newLang);
                    toast.success(tNew("languageChanged"));
                    closeLangMenu();
                  }}
                >
                  O‘zbek
                </MenuItem>
              </Menu>
              <IconButton onClick={openAuthMenu}>
                <img src="/icons/user.svg" alt="user" />
              </IconButton>
              <Menu
                anchorEl={authAnchorEl}
                open={Boolean(authAnchorEl)}
                onClose={closeAuthMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                {!authMember ? (
                  <>
                    <MenuItem onClick={() => setLoginOpen(true)}>
                      Login
                    </MenuItem>
                    <MenuItem onClick={() => setSignupOpen(true)}>
                      SignUp
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem
                    onClick={() => {
                      handleLogOutRequest();
                      closeAuthMenu();
                    }}
                  >
                    Logout
                  </MenuItem>
                )}
              </Menu>
              <Basket
                open={isBasketOpen}
                onClose={() => setIsBasketOpen(false)}
                cardItems={cardItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
                onDeleteAll={onDeleteAll}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
