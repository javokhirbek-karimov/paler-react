import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

export default function ProcessOrders() {
  return (
    <TabPanel value={"2"}>
      <Stack className="orders">
        {[1, 2].map((_, index) => {
          return (
            <Box key={index} className="orders__card">
              <Box className="orders__items">
                {[1, 2].map((_, index2) => {
                  return (
                    <Box key={index2} className="orders__item">
                      <img
                        src="/img/Day-1.png"
                        className="orders__item-image"
                      />

                      <p className="orders__item-title">Day-Date</p>

                      <Box className="orders__item-price">
                        <p>$1200</p>
                        <img src="/icons/close.png" />
                        <p>2</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="orders__summary">
                <Box className="orders__summary-row">
                  <p>Product price</p>
                  <p>$22</p>

                  <img src="/icons/plus.svg" className="orders__operator" />

                  <p>Delivery cost</p>
                  <p>$2</p>

                  <img src="/icons/pause.svg" className="orders__operator" />

                  <p>Total</p>
                  <p>$24</p>
                </Box>

                <p className="orders__date">
                  {moment().format("YY-MM-DD HH:mm")}
                </p>

                <Button variant="contained" className="orders__verify-button">
                  Verify to Fulfil
                </Button>
              </Box>
            </Box>
          );
        })}

        {false && (
          <Box className="orders__empty">
            <img
              src="/icons/noimage-list.svg"
              className="orders__empty-image"
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
