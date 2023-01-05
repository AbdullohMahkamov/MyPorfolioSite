import { createSlice } from "@reduxjs/toolkit";
import projectsData from "../data";

const initialState = {
  projectsData: projectsData,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
