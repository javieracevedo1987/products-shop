import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import cartReducer from './cart/store/cartSlice'
import productsReducer from './products/store/productsSlice'

export const store = configureStore({
  reducer: {
    cartModule: cartReducer,
    productsModule: productsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
