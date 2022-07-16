
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IProduct {
    brand: string;
    createdAt: string;
    description: string;
    id: number;
    name: string;
    photo: string;
    price: string;
    updatedAt: string;
}


export interface IProductsState {
    data: IProduct[];
}

const initialState: IProductsState = {
    data: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.data = action.payload
        },
    },
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer