import { Product } from '../../infra/interfaces/Product'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { removeAmountAddStock, addAmountRemoveStock } from '../store/cartSlice'
import { selectHasStock } from '../../products/store/productsSlice'
import styles from './CartItem.module.css'

type CartItemProps = {
  item: Product
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch()
  const { image_url, stock, productName, productDescription, price, id } = item
  const hasStock = useAppSelector(selectHasStock(id))

  const handleRemove = () => dispatch(removeAmountAddStock(id))

  const handleAdd = () => dispatch(addAmountRemoveStock(id))

  return (
    <article className={styles.cardItem}>
      <img src={image_url} alt={productDescription} />
      <div className={styles.content}>
        <div className={styles.name}>{productName}</div>
        <div className={styles.actionStock}>
          <button onClick={handleRemove}>-</button>
          <div className={styles.stock}>{stock}</div>
          {hasStock && <button onClick={handleAdd}>+</button>}
        </div>
      </div>
      <div className={styles.price}>{price} $</div>
    </article>
  )
}
