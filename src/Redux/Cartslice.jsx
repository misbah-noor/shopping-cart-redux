import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'Cart',
  initialState: [],
  reducers: {
    add(state, action) {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity:1});
      }
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    decrement(state, action) {
      const item = state.find(item => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter(i => i.id !== action.payload);
      }
    }
  }
});

export const { add, remove, decrement } = cartSlice.actions;
export default cartSlice.reducer;