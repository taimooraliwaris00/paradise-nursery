import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // { id, name, price, quantity, leafType, leafColor, potColor, variant }
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existing = state.items.find((item) => item.id === plant.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && quantity > 0) item.quantity = quantity;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity, updateQuantity, clearCart } = CartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectTotalAmount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default CartSlice.reducer;
