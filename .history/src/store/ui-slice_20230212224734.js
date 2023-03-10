import { createSlice } from "@reduxjs/toolkit";

const initalUiState = {
  cartIsVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initalUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
