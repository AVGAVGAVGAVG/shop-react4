import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, BrowserRouter,Routes } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import Home from './pages/Home'

export default function App() {
  const [cartItems,setCartItems]=useState([])

  const addToCart = (product) =>{
    setCartItems(prev=>[...prev,product])
  }
  const removeFromCart =(id)=>{
    setCartItems(prev=>prev.filter(item=>item.id !==id))
  }
  
return (
  <BrowserRouter>
      <Header/>
      <main className='min-h-screen'>
        <Routes>
          <Route path="/" element={<Home addToCart=
          {addToCart}/>}/>
          <Route path="/product/:id"element={<ProductDetail addToCart=
          {addToCart}/>} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} 
          removeFromCart={removeFromCart} /> } />
        </Routes>
        </main>
      <Footer/>
    </BrowserRouter>
  )
}


