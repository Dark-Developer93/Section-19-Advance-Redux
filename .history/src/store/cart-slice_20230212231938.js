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
      const newItem = state.action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
        const id = action.payload
        const existingItem = state.items.find((item) => item.id === id);
        if (existingItem.quantity === 1) {


    } else{
        existingItem.quantity--
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
