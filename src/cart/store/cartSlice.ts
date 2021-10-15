import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { Product } from '../../infra/interfaces/Product'
import { AppThunk, RootState } from '../../store'
import {
  removeStock as productRemoveStock,
  addStock as productAddStock,
} from '../../products/store/productsSlice'

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
    removeItem: (state, { payload }: PayloadAction<string>) => {
      const itemIndex = state.cart.findIndex((item) => item.id === payload)

      state.cart.splice(itemIndex, 1)
    },
    addAmount: (state, { payload }: PayloadAction<string>) => {
      const itemIndex = current(state.cart).findIndex(
        (item) => item.id === payload
      )

      state.cart[itemIndex].stock += 1
    },
    removeAmount: (state, { payload }: PayloadAction<string>) => {
      const itemIndex = current(state.cart).findIndex(
        (item) => item.id === payload
      )

      state.cart[itemIndex].stock -= 1
    },
  },
})

// Actions
export const { addCart, addAmount, removeAmount, removeItem } =
  cartSlice.actions

// Getters State
export const selectCart = (state: RootState) => state.cartModule.cart
export const selectTotal = (state: RootState) => {
  const cart = state.cartModule.cart
  const total = cart.reduce((acc, val) => (acc += val.price * val.stock), 0)

  return total
}

// Thunk side effect actions
export const addCartRemoveStock =
  (product: Product): AppThunk =>
  (dispatch, getState) => {
    dispatch(addCart(product))
    dispatch(productRemoveStock(product.id))
  }

export const removeAmountAddStock =
  (id: string): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCart(getState())
    const item = currentValue.find((item) => item.id === id)
    const canRemoveItem = item?.stock === 1

    const removeAction = canRemoveItem ? removeItem : removeAmount

    dispatch(removeAction(id))
    dispatch(productAddStock(id))
  }

export const addAmountRemoveStock =
  (id: string): AppThunk =>
  (dispatch) => {
    dispatch(addAmount(id))
    dispatch(productRemoveStock(id))
  }

export default cartSlice.reducer
