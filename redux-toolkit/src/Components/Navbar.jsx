import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state)=>state.cart);
  return (
    <div>
      <h1>Welcome to the store</h1>
      <div className='bg-slate-200'>
      <div className='flex flex-row justify-between w-2/12 m-auto'>
        <Link className='bg-pink-500 h-6 w-16 rounded-md' to="/">Home</Link>
        <Link className='bg-blue-400 h-6 w-16 rounded-md' to="/cart">Cart</Link>
      </div>
      </div>
      <span>Cart Items:{items.length}</span>
    </div>
  )
}

export default Navbar
