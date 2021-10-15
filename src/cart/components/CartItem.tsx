import { Product } from '../../infra/interfaces/Product'

type CartItemProps = {
  item: Product
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { stock } = item

  return (
    <>
      <div className="stock">{stock}</div>
    </>
  )
}
