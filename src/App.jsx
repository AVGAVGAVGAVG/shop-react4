import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/Cart.Page'

export default function App() {
  const [cartItems,setCartItems]=useState([])

  const addToCart = (product) =>{
    setCartItems(prev=>[...prev,product])
  }
  const removeFromCart =(id)=>{
    setCartItems(prev=>prev.filter(item=>item.id !==id))
  }
  
return (
    <Router>
      <Header/>
      <main className='min-h-screen'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="product/:id"element={<ProductDetail addToCart={addToCart}/>}/>
          <Route path="/cartt" element={CartPage cartItems={cartItem} removeFromCart={removeFromCart}/>} />
        </Routes>
   
    </Router>
  )
}


