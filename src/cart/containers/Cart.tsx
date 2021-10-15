import { useAppSelector } from '../../hooks'
import { CartItem } from '../components/CartItem'
import { selectCart } from '../store/cartSlice'
import styles from './Cart.module.css'

export const Cart: React.FC = () => {
  const cart = useAppSelector(selectCart)
  return (
    <div className={styles.cart}>
      <h1>Cart Container!</h1>
      {cart.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  )
}
