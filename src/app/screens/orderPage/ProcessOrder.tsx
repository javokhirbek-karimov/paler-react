import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { retrieveProcessOrders } from "./selector";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { Order, OrderItem, OrderUpdateInput } from "../../../libs/types/order";
import { Product } from "../../../libs/types/product";
import { Messages, serverApi } from "../../../libs/config";
import { useGlobals } from "../../hooks/useGlobals";
import { confirmToast } from "../../components/sonner/AppSonner";
import { OrderStatus } from "../../../libs/enums/order.enum";
import OrderService from "../../services/OrderService";
import { toast } from "sonner";
import { T } from "../../../libs/types/command";

/* REDUX SLICE & SELECTOR */
const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders }),
);

interface ProcessOrderProps {
  setValue: (input: string) => void;
}

export default function ProcessOrders(props: ProcessOrderProps) {
  const { setValue } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const { processOrders } = useSelector(processOrdersRetriever);

  /* HANDLERS */

  const finishOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      const orderId = e.target.value;

      const order = processOrders.find((o) => o._id === orderId);
      if (!order) throw new Error("Order not found");

      if (order.orderStatus !== OrderStatus.DELIVERY) {
        toast.error("Your order has not delivered yet");
        return;
      }

      confirmToast("Have you recieved your order?", async () => {
        const input: OrderUpdateInput = {
          orderId: orderId,
          orderStatus: OrderStatus.RECIEVED,
        };

        const order = new OrderService();
        await order.receiveOrder(input);
        setValue("3");
        setOrderBuilder(new Date());
      });
    } catch (err) {
      console.log(err);
      toast.error(Messages.error1);
    }
  };

  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {order?.orderItems?.map((item: OrderItem) => {
                  const product = order.productData.find(
                    (ele: Product) => item.productId === ele._id,
                  );

                  if (!product) return null;

                  const imagePath = product.productImages?.length
                    ? `${serverApi}/${product.productImages[0]}`
                    : "/img/Armani-1.png";

                  return (
                    <Box key={item._id} className={"orders-name-price"}>
                      <img
                        src={imagePath}
                        className={"order-dish-img"}
                        alt={product.productName}
                      />
                      <p className={"title-dish"}>{product.productName}</p>
                      <Box className={"price-box"}>
                        <p>${item.itemDiscount}</p>
                        <img
                          src={"/icons/close.svg"}
                          alt={product.productName}
                        />
                        <p>{item.itemQuantity}</p>
                        <img
                          src={"/icons/pause.svg"}
                          alt={product.productName}
                        />
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
                  <img
                    src={"/icons/plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img
                    src={"/icons/pause.svg"}
                    alt=""
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
                <Button
                  value={order._id}
                  variant="contained"
                  className={"pay-button"}
                  onClick={finishOrderHandler}
                >
                  Finish
                </Button>
              </Box>
            </Box>
          );
        })}

        {!processOrders ||
          (processOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <img
                src={"/icons/noimg-list.svg"}
                alt=""
                style={{ width: 300, height: 300 }}
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
