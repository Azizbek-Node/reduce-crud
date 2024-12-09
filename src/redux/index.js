import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import wishlistSlice from "./slices/wishlist-slice";
import productSlice from "./slices/product-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    wishlist: wishlistSlice,
    product: productSlice,
  },
});

export default store;
