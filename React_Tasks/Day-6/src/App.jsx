import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cart, WishList } from './AppTools'

function App() {
  const [cart, setCart]=useState([])
  const [total, setTotal]=useState(0)
  return (
    <>
    <WishList setCart={setCart} setTotal={setTotal}  />
    <Cart cart={cart} setCart={setCart} setTotal={setTotal} total={total}/>
    </>
  )
}

export default App
