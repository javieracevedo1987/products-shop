import { useAppSelector } from '../../hooks'
import { CartItem } from '../components/CartItem'
import { selectCart, selectTotal } from '../store/cartSlice'
import styles from './Cart.module.css'

export const Cart: React.FC = () => {
  const cart = useAppSelector(selectCart)
  const totalAmount = useAppSelector(selectTotal)
  const handleCheckout = () =>
    console.log('REQUEST CHECKOUT ', { cart, totalAmount })

  return (
    <div className={styles.cart}>
      <h1>Cart</h1>
      <div className={styles.cartItems}>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className={styles.checkout}>
        <button onClick={handleCheckout}>Checkout</button>
        <div className={styles.total}>{totalAmount} $</div>
      </div>
    </div>
  )
}
