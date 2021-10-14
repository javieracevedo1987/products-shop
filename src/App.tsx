import { Products } from './products/containers/Products'
import { Menu } from './shared/layout/menu/Menu'
import './App.css'

function App() {
  return (
    <div className="App">
      <Menu />
      <Products />
    </div>
  )
}

export default App
