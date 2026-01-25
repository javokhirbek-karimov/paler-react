import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveTopProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topProducts,
);
