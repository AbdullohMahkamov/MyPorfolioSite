import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Cart/CartSlice";
import sliderSlice from "../Cart/sliderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    slider: sliderSlice,
  },
});
