import { render } from '../../../utils/test-utils'
import { CardProduct } from './CardProduct'

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

describe('Card product', () => {
  it('Check product rendered', () => {
    const { getByText } = render(<CardProduct product={PRODUCT} />)

    getByText(PRODUCT.productName)
    getByText(PRODUCT.productDescription)
    getByText(`${PRODUCT.price} $`)
    getByText(`${PRODUCT.stock} left`)
  })
})
