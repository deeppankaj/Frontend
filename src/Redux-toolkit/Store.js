import { configureStore } from '@reduxjs/toolkit';
import { cartSlicevalue } from './Slices/CartSlice';
import { userSlicevalue } from './Slices/UserSlice';
import { shopSlicevalue } from './Slices/ShopSlice';
import { appointmentSlicevalue } from './Slices/AppointmentSlice';
import { loading } from '../components/loading/loadingSlice';
import { SignUpSlicevalue } from '../features/signup/SignUpSlice';

export const store = configureStore({
  reducer: {
    Cart: cartSlicevalue,
    User: userSlicevalue,
    Shop: shopSlicevalue,
    Signup:SignUpSlicevalue,
    Loader:loading,
    Appointment: appointmentSlicevalue,
  },
});