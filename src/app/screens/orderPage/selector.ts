import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrievePausedOrders = createSelector(
  selectOrdersPage,
  (HomePage) => HomePage.pausedOrders
);

export const retrieveProcessOrders = createSelector(
  selectOrdersPage,
  (HomePage) => HomePage.processOrders
);

export const retrieveFinishedOrders = createSelector(
  selectOrdersPage,
  (HomePage) => HomePage.finishedOrders
);
