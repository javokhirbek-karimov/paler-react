import { Box, Container, Stack, Tab, Tabs } from "@mui/material";
import { TabContext } from "@mui/lab";
import { SyntheticEvent, useState } from "react";
import FinishedOrders from "./FinishedOrdes";
import ProcessOrders from "./ProcessOrder";
import PausedOrders from "./PausedOrder";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Order } from "../../../libs/types/order";
import { setFinishedOrders, setPausedOrders, setProcessOrders } from "./slice";

const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export function OrderPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  const [value, setValue] = useState("1");
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
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
                <PausedOrders />
                <ProcessOrders />
                <FinishedOrders />
              </Stack>
            </TabContext>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}
