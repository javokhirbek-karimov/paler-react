import { Box, Container, Stack, Tab, Tabs } from "@mui/material";
import { TabContext } from "@mui/lab";
import { SyntheticEvent, useState } from "react";
import FinishedOrders from "./FinishedOrdes";
import ProcessOrders from "./ProcessOrder";
import PausedOrders from "./PausedOrder";

export function OrderPage() {
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
