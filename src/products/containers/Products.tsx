import { useEffect } from 'react'
import { getProducts, selectProducts } from '../store/productsSlicer'
import { CardProduct } from '../components/CardProduct/CardProduct'
import { useAppDispatch, useAppSelector } from '../../hooks'
import styles from './Products.module.css'

export const Products: React.FC = () => {
  const products = useAppSelector(selectProducts)
  const dispatch = useAppDispatch()
  useEffect(() => dispatch(getProducts()))

  return (
    <div className={styles.products}>
      <h1 className={styles.title}>Products List!!</h1>
      <div className={styles.productsList}>
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
