import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../infra/interfaces/Product'

export interface CartState {
  cart: Product[]
}

const initialState: CartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})

export default cartSlice.reducer
