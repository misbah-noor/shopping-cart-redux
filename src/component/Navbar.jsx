import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const items = useSelector((state) => state.cart);


  return (
    <nav className='flex justify-around items-center px-2 text-lg py-6 shadow-lg bg-gray-900 text-white fixed w-full top-0'>
      <div className='text-2xl font-bold'>Shopee</div>
      <div>
        <ul className='flex gap-5 items-center'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li className='relative'>
            <NavLink to='/cart'>
              <FaShoppingCart size={24} />
              <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full'>
                {items.length}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;