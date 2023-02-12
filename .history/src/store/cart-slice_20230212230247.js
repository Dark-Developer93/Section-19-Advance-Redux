import { createSlice } from "@reduxjs/toolkit";

const initalcartState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalcartState,
  reducers: {
    add(state) {
      console.log("Add working");
    },
    remove(state) {
      console.log("ٌRemove working");
      //   state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
