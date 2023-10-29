import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/Slices/cartSlice";

export default configureStore({
  reducer: {
    cartSlice: cartReducer,
  },
});
