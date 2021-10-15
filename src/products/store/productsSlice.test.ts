import productsReducer, { ProductState } from './productsSlice'

const initialState: ProductState = {
  products: [],
  status: 'idle',
}

describe('Products reducer', () => {
  it('Check initial state', () => {
    expect(productsReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    )
  })
})
