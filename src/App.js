import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//***COMPONENTS***//
import NavBar from './components/NavBar'

//***PAGES***//
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts()
      setProducts(products)
    }

    getProducts()
  }, [])

  //***FETCH PRODUCTS***//
  const fetchProducts = async () => {
    const res = await fetch('https://web-ge8buw2ff-bird-and-be.vercel.app/api/interview')
    const data = await res.json()

    return data.products
  }

  //***ADD/REMOVE CART ITEMS***//
  const addItem = (product) => {
    const exist = cart.find((item) => item.id === product.id)

    if (exist) {
      setCart(cart.map((item) => item.id === product.id ? {...exist, quantity: exist.quantity + 1, subtotal: exist.subtotal + exist.price} : item))
    } else {
      setCart([...cart, {...product, quantity: 1, subtotal: product.price}])
    }
  }

  const removeItem = (id) => {
    const exist = cart.find((item) => item.id === id)
    
    if (exist.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id))
    } else {
      setCart(cart.map((item) => item.id === id ? {...exist, quantity: exist.quantity - 1, subtotal: exist.subtotal - exist.price} : item))
    }
  }

  return (
    <Router>
      <div className='page-wrapper'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home products={products} />} />
          <Route path='/cart' element={<Cart removeItem={removeItem} cart={cart} total={total} />} />
          <Route path='/product' element={<Product addItem={addItem} />}>
            <Route path=':productId' element={<Product addItem={addItem} />} />
          </Route>
          <Route path='*' element={<h1>Nothing Here</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
