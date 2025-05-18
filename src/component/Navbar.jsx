import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar() {

    const items = useSelector((state) => state.cart);
  return (
    <div>
      <nav className='flex justify-around items-center px-2 text-lg py-6 shadow-lg bg-gray-900 text-white fixed w-full top-0'>
        <div className='text-2xl font-bold'>
            Shopee
        </div>
        <div>
            <ul className='flex gap-3 items-center'>
                <li className=''><NavLink to='/' >Home</NavLink></li>
                <li><NavLink to='/cart'>Cart</NavLink></li>
                <span className='ml-4'>items: {items.length}</span>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
