import { createSlice } from "@reduxjs/toolkit";

const initalUiState = {
  cartIsVisible: false,
};

createSlice({
  name: "ui",
  initialState: initalUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export default uiSlice;
