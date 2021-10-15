import { Product } from '../../../infra/interfaces/Product'
import styles from './CardProduct.module.css'
import { useAppDispatch } from '../../../hooks'
import { addCartRemoveStock } from '../../../cart/store/cartSlice'

type CardProps = {
  product: Product
}

export const CardProduct: React.FC<CardProps> = ({ product }) => {
  const { image_url, stock, productName, price, productDescription } = product

  const dispatch = useAppDispatch()

  const totalStock = stock === 0 ? 'Out of stock' : `${stock} left`
  const canAddProduct = stock > 0

  return (
    <article className={styles.cardProduct}>
      <img src={image_url} alt={productDescription} />
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.name}>{productName}</div>
          <div className={styles.price}>{price} $</div>
        </div>
        <div className={styles.description}>{productDescription}</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.stock}>{totalStock}</div>
        {canAddProduct && (
          <button onClick={() => dispatch(addCartRemoveStock(product))}>
            + Add
          </button>
        )}
      </div>
    </article>
  )
}
