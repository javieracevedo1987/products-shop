import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
  cart: Array<any>
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
