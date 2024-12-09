import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    updateProduct: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct } =
  productSlice.actions;
export default productSlice.reducer;
