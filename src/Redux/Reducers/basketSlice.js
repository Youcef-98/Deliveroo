import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = state.items.concat(action.payload);
    },
    removeFromBasket: (state, action) => {
      let newBasket = [...state.items];
      const index = state.items.findIndex(item => item.id == action.payload.id);
      if (index == -1) {
        console.warn('you dont have that item in the basket');
      } else {
        newBasket.splice(index, 1);
        state.items = newBasket;
      }
    },
    emptyBasket: state => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToBasket, removeFromBasket, emptyBasket} = basketSlice.actions;

export const selectBasketItems = state => state.basket.items;
export const selectBasketItemWithId = (state, id) =>
  state.basket.items.filter(item => item.id == id);
export const selectBasketTotal = state =>
  state.basket.items.reduce((total, item) => (total = total + item.price), 0);

export default basketSlice.reducer;
