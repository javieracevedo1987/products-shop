import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { Product } from '../../infra/interfaces/Product'
import { AppThunk, RootState } from '../../store'
import { updateStock } from '../../products/store/productsSlice'

export interface CartState {
  cart: Product[]
}

const initialState: CartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, { payload }: PayloadAction<Product>) => {
      const itemIndex = current(state.cart).findIndex(
        (item) => item.id === payload.id
      )

      if (itemIndex >= 0) {
        state.cart[itemIndex].stock += 1
      } else {
        const item = { ...payload, stock: 1 }
        state.cart.push(item)
      }
    },
  },
})

// Actions
export const { addCart } = cartSlice.actions

// Getters State
export const selectCart = (state: RootState) => state.cartModule.cart

// Thunk side effect actions
export const addCartUpdateStock =
  (product: Product): AppThunk =>
  (dispatch, getState) => {
    dispatch(addCart(product))
    dispatch(updateStock(product.id))
  }

export default cartSlice.reducer
