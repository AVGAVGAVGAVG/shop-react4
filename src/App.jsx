import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, BrowserRouter,Routes } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import Home from './pages/Home'
import CheckoutPage from "./pages/CheckoutPage"
import PurchareHistory from "./pages/PurchareHistory"

export default function App() {
  const [cartItems,setCartItems]=useState([])

  const addToCart = (product) =>{
    setCartItems((prev)=>{
      const existing= prev.find((item)=>item.id===product.id)
      if (existing){
        return prev.map((item)=>
        item.id===product.id ? {  ...item,quantity:item.quantity + 1} :
        item
         )
        }
        return [...prev,{...product,quantity: 1 }]
      })
  }
  const handleUpdateQuantity = (id,newQuantity) =>{
    setCartItems((prev)=>{
      prev.map((item)=>{
        item.id=== id ? {...item,quantity:newQuantity}:item
      })
    })
  }

  const handleRemoveItem =(id)=>{
    setCartItems((prev)=>prev.filter((item)=>item.id !==id))
  }
  const clearCart = ()=>{
    setCartItems([])
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
         onUpdateQuantity={handleUpdateQuantity}onRemoveUtem={handleRemoveItem} /> } />
          <Route path='/checkout' element={<CheckoutPage cartItems={cartItems}
          clearCart={clearCart}/>}/>
          <Route path='/orders' element={<PurchareHistory />}/>

        </Routes>
        </main>
      <Footer/>
    </BrowserRouter>
  )
}


