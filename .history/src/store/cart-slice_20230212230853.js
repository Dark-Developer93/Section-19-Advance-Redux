import { createSlice } from "@reduxjs/toolkit";

const initalcartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalcartState,
  reducers: {
    addItemToCart(state, action) {
      //   console.log("Add working");
      const newItem = state.action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeItemFromCart(state, action) {
      console.log("ٌRemove working");
      //   state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
