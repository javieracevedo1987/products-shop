import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../store'
import { fetchProducts } from '../../infra/services/products'
import { Product } from '../../infra/interfaces/Product'

export interface ProductState {
  products: Product[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
}

// Requests Async
const fetchProductsAsync = createAsyncThunk(
  'counter/fetchCount',
  async () => await fetchProducts()
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.products = action.payload
      })
  },
})

// export const {  } = productsSlice.actions

// Getters State
export const selectProducts = (state: RootState) =>
  state.productsModule.products

export const getProducts = (): AppThunk => (dispatch, getState) => {
  const currentValue = selectProducts(getState())
  const hasProducts = currentValue.length
  if (!hasProducts) {
    dispatch(fetchProductsAsync())
  }
}

export default productsSlice.reducer
