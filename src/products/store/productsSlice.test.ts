import productsReducer, {
  ProductState,
  addStock,
  removeStock,
} from './productsSlice'

const ID_PRODUCT = '41fd4fd9-95c7-4809-96db-a147d352fdbb'
const initialState: ProductState = {
  products: [
    {
      id: ID_PRODUCT,
      image_url:
        'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
      stock: 8,
      productName: 'Unbranded Metal Chair',
      price: 43,
      productDescription:
        'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
      favorite: 1,
    },
  ],
  status: 'idle',
}

describe('Products reducer', () => {
  beforeEach(() => productsReducer(initialState, { type: 'unknown' }))

  it('Add stock in product', () => {
    const actual = productsReducer(initialState, addStock(ID_PRODUCT))

    expect(actual.products[0].stock).toEqual(9)
  })

  it('Remove stock in product', () => {
    const actual = productsReducer(initialState, removeStock(ID_PRODUCT))

    expect(actual.products[0].stock).toEqual(7)
  })
})
