
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
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
}

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        ToggleOpen: (state) => {
            state.open = !state.open
        },
        AddItem: (state, action: PayloadAction<IProduct>) => {
            const item = action.payload
            const itemIndex = state.items.findIndex(({ id }) => id === item.id)
            if (itemIndex >= 0) {
                state.items[itemIndex].amount += 1
            } else {
                state.items = [...state.items, { ...item, amount: 1 }]
            }
            state.amount += 1
            state.totalPrice += Number(item.price)
        },
        RemoveItem: (state, action: PayloadAction<IProduct>) => {
            const item = action.payload
            const itemIndex = state.items.findIndex(({ id }) => id === item.id)
            const amount = state.amount - state.items[itemIndex].amount
            state.amount = amount
            state.items = state.items.filter(({ id }) => id !== item.id)

            state.totalPrice = state.totalPrice - (amount * Number(state.items[itemIndex].price))

        },
        SubtractItem: (state, action: PayloadAction<IProduct>) => {
            const item = action.payload
            const itemIndex = state.items.findIndex(({ id }) => id === item.id)
            const amount = state.amount - state.items[itemIndex].amount
            a
            if (state.items[itemIndex].amount > 1) {
                state.items[itemIndex].amount -= 1
                console.log(state.items[itemIndex].amount -= 1)
            } else {
                state.items = state.items.filter(({ id }) => id !== item.id)
            }
            state.amount -= 1
            state.totalPrice = state.totalPrice - (state.items[itemIndex].amount * Number(state.items[itemIndex].price))
            console.log(state.items[itemIndex].amount)


        },
    },
})

export const { AddItem, ToggleOpen, RemoveItem, SubtractItem } = checkoutSlice.actions

export default checkoutSlice.reducer