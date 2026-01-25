import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../libs/types/screen";

const initialState: HomePageState = {
  topProducts: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopProducts: (state, action) => {
      state.topProducts = action.payload;
    },
  },
});

export const { setTopProducts } = homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
