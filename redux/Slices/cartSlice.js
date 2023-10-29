import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addToCart: [],
  favProduct: [],
  allProduct: [],
  userInfo: null,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.addToCart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.addToCart.push(action.payload);
      }
    },

    addToFavourite: (state, action) => {
      // state.favProduct.push(action.payload);
      const existingProduct = state.favProduct.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.favProduct.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const existingProduct = state.addToCart.find(
        (item) => item.id === action.payload.id
      );
      existingProduct && existingProduct.quantity++;
    },

    decrementQuantity: (state, action) => {
      const existingProduct = state.addToCart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct.quantity <= 1) {
        existingProduct.quantity = 1;
      } else {
        existingProduct.quantity--;
      }
    },

    deleteProduct: (state, action) => {
      state.addToCart = state.addToCart.filter(
        (item) => item.id !== action.payload
      );
    },

    resetCart: (state) => {
      state.addToCart = [];
    },

    adduser: (state, action) => {
      state.userInfo = action.payload;
    },

    removeUser: (state, action) => {
      state.userInfo = null;
    },

    setAllProduct: (state, action) => {
      state.allProduct = action.payload;
    },
  },
});

export const {
  addToCart,
  addToFavourite,
  deleteProduct,
  resetCart,
  incrementQuantity,
  setAllProduct,
  decrementQuantity,
  removeUser,
  adduser,
} = cartSlice.actions;
export default cartSlice.reducer;
