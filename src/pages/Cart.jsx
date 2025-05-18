import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/Cartslice';

function Cart() {
    const  dispatch = useDispatch();
    const cartitems = useSelector((state) => state.cart);

    const handleremove = (id) => {
        dispatch(remove(id))
    }
  return (
    <div className='mx-1'>
        <h3 className='text-center text-3xl mt-39 mb-15 '>Cart Page</h3>
    <div className='mx-auto container'>
      {cartitems.map((item) => (
        <div className='cartCard flex justify-between md:px-5 px-1 items-center gap-5 mb-5 border border-gray-200'>
        <div className='flex items-center gap-5 py-1'>
        <img src={item.image} className='p-2 w-20 h-25' alt="img" />
        <h5 className='md:text-lg text-sm font-semibold'>{item.title}</h5>
        <h5 className='text-red-600'>${item.price}</h5>
        </div>
        <div>
            <button className='btn px-3 py-2 rounded bg-gray-800 text-white cursor-pointer' onClick={() => handleremove(item.id)}>remove</button>
        </div>
        
        </div>
      ))}
    </div>
    </div>
  )
}

export default Cart
