import {configureStore} from '@reduxjs/toolkit';
import basketSlice from './src/Redux/Slices.js/basketSlice';

export const store = configureStore({
  reducer: {basket: basketSlice},
});
