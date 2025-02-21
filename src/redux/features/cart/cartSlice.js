import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalCartPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalCartPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i._id !== action.payload._id
      );
      state.totalQuantity -= action.payload.quantity;
      state.totalCartPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i._id === action.payload._id);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
      state.totalCartPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i._id === action.payload._id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      }
      state.totalCartPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
