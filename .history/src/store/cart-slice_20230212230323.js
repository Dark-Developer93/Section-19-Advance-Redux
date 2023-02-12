import { createSlice } from "@reduxjs/toolkit";

const initalcartState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalcartState,
  reducers: {
    addItemToCart(state) {
      console.log("Add working");
    },
    removeItemFromCart(state) {
      console.log("ٌRemove working");
      //   state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
