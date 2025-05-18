import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, add, decrement } from '../Redux/Cartslice';

function Cart() {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart);

  const handleremove = (id) => {
    dispatch(remove(id));
  };

  const handleIncrement = (item) => {
    dispatch(add(item));
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  const totalQuantity = cartitems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartitems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='mx-1'>
      <h3 className='text-center text-3xl mt-39 mb-5'>Cart Page</h3>

      <div className='text-center mb-6'>
        <h4 className='text-xl font-semibold'>Total Items: {totalQuantity}</h4>
        <h4 className='text-xl font-semibold text-red-600'>Total Price: ${totalPrice.toFixed(2)}</h4>
      </div>

      <div className='mx-auto container'>
        {cartitems.length === 0 ? (
          <p className='text-center text-lg'>Your cart is empty.</p>
        ) : (
          cartitems.map((item) => (
            <div className='cartCard flex justify-between md:px-5 px-1 items-center gap-5 mb-5 border border-gray-200' key={item.id}>
              <div className='flex items-center gap-5 py-1'>
                <img src={item.image} className='p-2 w-20 h-25' alt="img" />
                <div>
                  <h5 className='md:text-lg text-sm font-semibold'>{item.title}</h5>
                  <h5 className='text-red-600'>${item.price} x {item.quantity}</h5>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <button className='btn px-2 py-1 bg-gray-200 rounded' onClick={() => handleDecrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button className='btn px-2 py-1 bg-gray-200 rounded' onClick={() => handleIncrement(item)}>+</button>
                <button className='btn px-3 py-2 rounded bg-gray-800 text-white cursor-pointer' onClick={() => handleremove(item.id)}>remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;