import { createSlice } from "@reduxjs/toolkit";
import sliderData from "../sliderApi";

const initialState = {
  sliderData: sliderData,
  amount: 0,
  total: 0,
  isLoading: true,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
});

export default sliderSlice.reducer;
