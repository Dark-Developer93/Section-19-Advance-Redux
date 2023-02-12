import { createSlice } from "@reduxjs/toolkit";

const initalcartState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalcartState,
  reducers: {
    addItemToCart(state, action) {
      //   console.log("Add working");
      const newIten = state.action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newIten.id
      );
    },
    removeItemFromCart(state, action) {
      console.log("ٌRemove working");
      //   state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
