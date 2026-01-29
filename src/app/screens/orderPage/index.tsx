import { Box, Container, Stack, Tab, Tabs } from "@mui/material";
import { TabContext } from "@mui/lab";
import { SyntheticEvent, useState, useEffect } from "react";
import FinishedOrders from "./FinishedOrdes";
import ProcessOrders from "./ProcessOrder";
import PausedOrders from "./PausedOrder";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Order, OrderInquiry } from "../../../libs/types/order";
import { setFinishedOrders, setPausedOrders, setProcessOrders } from "./slice";
import { OrderStatus } from "../../../libs/enums/order.enum";
import OrderService from "../../services/OrderService";
import { useHistory } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";

const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export function OrderPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());

  const history = useHistory();
  const { orderBuilder, authMember } = useGlobals();
  const [value, setValue] = useState("1");
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 5,
    orderStatus: OrderStatus.UNPAID,
  });

  useEffect(() => {
    const order = new OrderService();

    order
      .getMyOrders({
        ...orderInquiry,
        orderStatus: OrderStatus.UNPAID,
      })
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({
        ...orderInquiry,
        orderStatus: [OrderStatus.PAID, OrderStatus.DELIVERY],
      })
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.RECIEVED })
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [orderInquiry, orderBuilder]);

  if (!authMember) history.push("/");

  return (
    <div className="order-page">
      <Box className="layout-container">
        <Container className="order-container">
          <Stack className="order-left">
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className={"table_list"}
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
              <Stack className={"order-main-content"}>
                <PausedOrders setValue={setValue} />
                <ProcessOrders setValue={setValue} />
                <FinishedOrders />
              </Stack>
            </TabContext>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
