import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { retrievePausedOrders } from "./selector";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { Order, OrderItem, OrderUpdateInput } from "../../../libs/types/order";
import { Product } from "../../../libs/types/product";
import { toast } from "sonner";
import { Messages, serverApi } from "../../../libs/config";
import { T } from "../../../libs/types/command";
import { OrderStatus } from "../../../libs/enums/order.enum";
import { useGlobals } from "../../hooks/useGlobals";
import OrderService from "../../services/OrderService";
import { confirmToast1, confirmToast } from "../../components/sonner/AppSonner";

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders }),
);

interface PausedOrderProps {
  setValue: (input: string) => void;
}

export default function PausedOrders(props: PausedOrderProps) {
  const { setValue } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  /* HANDLERS */

  const deleteOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      const orderId = e.target.value;

      confirmToast1("Do you want to delete the order?", async () => {
        const input: OrderUpdateInput = {
          orderId: orderId,
          orderStatus: OrderStatus.CANCELLED,
        };

        const order = new OrderService();
        await order.cancelOrder(input);

        setOrderBuilder(new Date());
      });
    } catch (err) {
      console.log(err);
      toast.error(Messages.error1);
    }
  };

  const processOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);

      // PAYMENT PROCESS
      const orderId = e.target.value;

      confirmToast("Do you want to proceed with payment?", async () => {
        const input: OrderUpdateInput = {
          orderId: orderId,
          orderStatus: OrderStatus.PAID,
        };

        const order = new OrderService();
        await order.payOrder(input);
        setValue("2");
        setOrderBuilder(new Date());
      });
    } catch (err) {
      console.log(err);
      toast.error(Messages.error1);
    }
  };

  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {order.orderItems.map((item: OrderItem) => {
                  const product = order.productData.find(
                    (ele: Product) => item.productId === ele._id,
                  );

                  if (!product) return null;

                  const imagePath = product.productImages?.length
                    ? `${serverApi}/${product.productImages[0]}`
                    : "/img/Armani-1.png";
                  return (
                    <Box key={item._id} className={"orders-name-price"}>
                      <img src={imagePath} className={"order-dish-img"} />
                      <p className={"title-dish"}>{product.productName}</p>
                      <Box className={"price-box"}>
                        <p>${item.itemDiscount}</p>
                        <img src={"/icons/close.svg"} />
                        <p>{item.itemQuantity}</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemQuantity * item.itemDiscount}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
                <Button
                  value={order._id}
                  variant="contained"
                  className={"cancel-button"}
                  onClick={deleteOrderHandler}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  className={"pay-button"}
                  value={order._id}
                  onClick={processOrderHandler}
                >
                  Payment
                </Button>
              </Box>
            </Box>
          );
        })}

        {!pausedOrders ||
          (pausedOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <img
                src={"/icons/noimg-list.svg"}
                style={{ width: 300, height: 300 }}
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
