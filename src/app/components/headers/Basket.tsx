import React from "react";
import { Box, Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CardItem } from "../../../libs/types/search";
import { Messages, serverApi } from "../../../libs/config";
import { toast } from "react-toastify";
import { useGlobals } from "../../hooks/useGlobals";
import OrderService from "../../services/OrderService";
import { useHistory } from "react-router-dom";

interface BasketProps {
  cardItems: CardItem[];
  open: boolean;
  onClose: () => void;
  onAdd: (item: CardItem) => void;
  onRemove: (item: CardItem) => void;
  onDelete: (item: CardItem) => void;
  onDeleteAll: () => void;
}

export default function Basket(props: BasketProps) {
  const { cardItems, onAdd, onRemove, onDelete, onDeleteAll } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const history = useHistory();

  const itemsPrice = cardItems.reduce(
    (a: number, c: CardItem) => a + c.quantity * c.discount,
    0,
  );
  const shippingCost: number = itemsPrice < 100 ? 5 : 0;
  const totalPrice = (itemsPrice + shippingCost).toFixed(1);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /** HANDLERS **/
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const proceedOrderHandler = async () => {
    try {
      handleClose();
      if (!authMember) throw new Error(Messages.error2);

      const order = new OrderService();
      await order.createOrder(cardItems);

      onDeleteAll();

      setOrderBuilder(new Date());

      history.push("/orders");
    } catch (err) {
      console.log(err);
      toast.error("Signup failed. Please try again❗️");
    }
  };

  return (
    <Box className={"hover-line"}>
      <IconButton
        aria-label="cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={cardItems.length} color="secondary">
          <img src={"/icons/basket.svg"} />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack className={"basket-frame"}>
          <Box className={"all-check-box"}>
            {cardItems.length === 0 ? (
              <div>Cart is empty!</div>
            ) : (
              <Stack flexDirection={"row"}>
                <div>Cart Products:</div>
                <ShoppingCartIcon
                  sx={{ ml: "10px", cursor: "pointer" }}
                  color={"primary"}
                  onClick={() => onDeleteAll()}
                />
              </Stack>
            )}
          </Box>

          {cardItems.length > 0 && (
            <Box className={"orders-main-wrapper"}>
              <Box className={"orders-wrapper"}>
                {cardItems
                  .filter((item) => item && item._id && item.quantity > 0)
                  .map((item: CardItem) => {
                    const imagePath = `${serverApi}/${item.image}`;
                    return (
                      <Box className={"basket-info-box"} key={item._id}>
                        <div className={"cancel-btn"}>
                          <CancelIcon
                            color={"primary"}
                            onClick={() => onDelete(item)}
                          />
                        </div>
                        <Box className="info">
                          <img src={imagePath} className={"product-img"} />
                          <span className={"product-name"}>{item.name}</span>
                        </Box>
                        <Box className="product-variable">
                          <p className={"basket-product-price"}>
                            ${item.discount} x {item.quantity}
                          </p>
                          <Box sx={{ minWidth: 120 }}>
                            <div className="col-2">
                              <button
                                className="remove"
                                onClick={() => onRemove(item)}
                              >
                                -
                              </button>{" "}
                              <button
                                className="add"
                                onClick={() => onAdd(item)}
                              >
                                +
                              </button>
                            </div>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          )}
          {cardItems.length !== 0 ? (
            <Box className={"basket-order"}>
              <span className={"price"}>Total: ${totalPrice}</span>
              <Button
                startIcon={<ShoppingCartIcon />}
                variant={"contained"}
                onClick={proceedOrderHandler}
              >
                Order
              </Button>
            </Box>
          ) : (
            ""
          )}
        </Stack>
      </Menu>
    </Box>
  );
}
function setOrderBuilder(arg0: Date) {
  throw new Error("Function not implemented.");
}
