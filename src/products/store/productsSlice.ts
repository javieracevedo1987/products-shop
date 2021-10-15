import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
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
  reducers: {
    addStock: (state, { payload }: PayloadAction<string>) => {
      const index = state.products.findIndex(
        (product) => product.id === payload
      )
      state.products[index].stock += 1
    },

    removeStock: (state, { payload }: PayloadAction<string>) => {
      const index = state.products.findIndex(
        (product) => product.id === payload
      )
      state.products[index].stock -= 1
    },
  },
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

export const { addStock, removeStock } = productsSlice.actions

// Getters State
export const selectProducts = (state: RootState) =>
  state.productsModule.products

export const selectHasStock = (id: string) => (state: RootState) => {
  const product = state.productsModule.products.find(
    (product) => product.id === id
  )
  return !!product?.stock
}

// Thunk side effect actions
export const getProducts = (): AppThunk => (dispatch, getState) => {
  const currentValue = selectProducts(getState())
  const hasProducts = currentValue.length
  if (!hasProducts) {
    dispatch(fetchProductsAsync())
  }
}

export default productsSlice.reducer
