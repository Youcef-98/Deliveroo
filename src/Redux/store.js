import {configureStore} from '@reduxjs/toolkit';
import basketSlice from './Reducers/basketSlice';
import restaurantSlice from './Reducers/restaurantSlice';

export const store = configureStore({
  reducer: {basket: basketSlice, restaurant: restaurantSlice},
});
