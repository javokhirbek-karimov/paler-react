import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

export default function FinishedOrders() {
  return (
    <TabPanel value={"3"}>
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className={"watch-main-box"}>
              <Box className={"watch-box-scroll"}>
                {[1, 2, 3].map((ele2, index2) => {
                  return (
                    <Box key={index2} className={"watch-item-box"}>
                      <img
                        src={"/img/Armani-1.png"}
                        className={"watch-dish-img"}
                      />

                      <p className={"watch-title"}>Day-Date</p>

                      <Box className={"watch-price-box"}>
                        <p>$1200</p>
                        <img src={"/icons/close.svg"} />
                        <p>2</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "15px" }}>$2400</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"watch-total-box"}>
                <Box className={"watch-box-total"}>
                  <p>Product price</p>
                  <p>$2400</p>

                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />

                  <p>Delivery cost</p>
                  <p>$50</p>

                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />

                  <p>Total</p>
                  <p>$2450</p>
                </Box>
              </Box>
            </Box>
          );
        })}

        {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
