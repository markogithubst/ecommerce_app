import { createSlice } from '@reduxjs/toolkit';

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    shoppingCartProductList: []
  },
  reducers: {
    addToShoppingCart: (state, action) => {
      state.shoppingCartProductList = [...state.shoppingCartProductList, action.payload];
    },
    removeFromShoppingCart: (state, action) => {
      state.shoppingCartProductList = state.shoppingCartProductList.filter((_, i) => i !== action.payload.id);
    }
  }
});

export const { addToShoppingCart, removeFromShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
