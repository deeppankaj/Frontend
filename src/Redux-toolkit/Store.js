import { configureStore } from '@reduxjs/toolkit';
import { cartSlicevalue } from './Slices/CartSlice';
import { userSlicevalue } from './Slices/UserSlice';
import { shopSlicevalue } from './Slices/ShopSlice';

export const store = configureStore({
  reducer: {
    Cart: cartSlicevalue,
    User: userSlicevalue,
    Shop: shopSlicevalue,
  },
});