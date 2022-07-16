import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../products/productsSlice';

export interface IItem extends IProduct {
  amount: number;
}

export interface ICheckoutState {
  items: IItem[];
  amount: number;
  open: boolean;
  totalPrice: number;
}

const initialState: ICheckoutState = {
  items: [],
  amount: 0,
  open: false,
  totalPrice: 0,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    ToggleOpen: (state) => {
      state.open = !state.open;
    },
    AddItem: (state, action: PayloadAction<IProduct>) => {
      const item = action.payload;
      const itemIndex = state.items.findIndex(({ id }) => id === item.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].amount += 1;
      } else {
        state.items = [...state.items, { ...item, amount: 1 }];
      }
      state.amount += 1;
      state.totalPrice += Number(item.price);
    },
    RemoveItem: (state, action: PayloadAction<IProduct>) => {
      const item = action.payload;
      const itemIndex = state.items.findIndex(({ id }) => id === item.id);
      state.totalPrice =
        state.totalPrice -
        (state.items[itemIndex].amount || 1) * Number(state.items[itemIndex].price);
      state.amount = state.amount - state.items[itemIndex].amount;
      state.items = state.items.filter(({ id }) => id !== item.id);
    },
    SubtractItem: (state, action: PayloadAction<IProduct>) => {
      const item = action.payload;
      const itemIndex = state.items.findIndex(({ id }) => id === item.id);
      if (state.items[itemIndex].amount > 1) {
        state.items[itemIndex].amount -= 1;
      } else {
        state.items = state.items.filter(({ id }) => id !== item.id);
      }
      state.amount -= 1;
      state.totalPrice = state.totalPrice - Number(state.items[itemIndex]?.price) || 0;
    },
  },
});

export const { AddItem, ToggleOpen, RemoveItem, SubtractItem } = checkoutSlice.actions;

export default checkoutSlice.reducer;
