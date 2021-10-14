import { Product } from '../../../infra/interfaces/Product'
import styles from './CardProduct.module.css'

type CardProps = {
  product: Product
}

export const CardProduct: React.FC<CardProps> = ({ product }) => {
  const { image_url, stock, productName, price, productDescription, favorite } =
    product

  const totalStock = stock === 0 ? 'Out of stock' : `${stock} left`

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
        <button>+ Add</button>
      </div>
    </article>
  )
}
