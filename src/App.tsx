import { Products } from './products/containers/Products'
import { Cart } from './cart/containers/Cart'
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <div className={styles.container}>
        <Products />
        <Cart />
      </div>
    </div>
  )
}

export default App
