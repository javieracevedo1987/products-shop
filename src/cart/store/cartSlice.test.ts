import cartReducer, {
  CartState,
  addCart,
  removeItem,
  addAmount,
  removeAmount,
} from './cartSlice'

const PRODUCT = {
  id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
  image_url:
    'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
  stock: 8,
  productName: 'Unbranded Metal Chair',
  price: 43,
  productDescription:
    'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
  favorite: 1,
}

const initialState: CartState = {
  cart: [],
}

describe('Cart reducer', () => {
  beforeEach(() => cartReducer(initialState, { type: 'unknown' }))

  it('Add item in cart', () => {
    const actual = cartReducer(initialState, addCart(PRODUCT))

    expect(actual.cart.length).toEqual(1)
    expect(actual.cart[0]).toEqual({ ...PRODUCT, stock: 1 })
  })

  it('Remove item from cart', () => {
    const actualState: CartState = {
      cart: [PRODUCT],
    }
    const actual = cartReducer(actualState, removeItem(PRODUCT.id))

    expect(actual.cart.length).toEqual(0)
  })

  it('Add amount item from cart', () => {
    const actualState: CartState = {
      cart: [PRODUCT],
    }
    const actual = cartReducer(actualState, addAmount(PRODUCT.id))

    expect(actual.cart[0].stock).toEqual(9)
  })

  it('Remove amount item from cart', () => {
    const actualState: CartState = {
      cart: [PRODUCT],
    }
    const actual = cartReducer(actualState, removeAmount(PRODUCT.id))

    expect(actual.cart[0].stock).toEqual(7)
  })
})
