import React, { use, useEffect, useState } from 'react'
import { add } from '../Redux/Cartslice';
import { useDispatch } from 'react-redux';
const Home = () => {
   const [products, setProducts] = useState([]);
   const dispatch = useDispatch();


   useEffect(() => {
     const fetchproduct = async() => {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
     }
    fetchproduct();
   }, []);

  const handleadd = (product) => {
   dispatch(add(product));
  }

  return (
    <div className='text-center py-12'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto container gap-20 px-6 mt-[82px]'>
      {
        products.map((product) => (
            <div className='card flex flex-col justify-center items-center rounded shadow-xl ' key={product.id}>
                <img src={product.image} className='w-34' alt="img" />
                <h2 className='text-lg w-75 my-3 font-bold'>{product.title}</h2>
                <h4 className='text-red-600 font-semibold text-lg mb-3'>${product.price}</h4>
                <button onClick={() => handleadd(product)} className='btn bg-gray-900 text-white px-3 py-2 text-lg cursor-pointer hover:bg-gray-950 rounded mb-6'>Add to cart +</button>
            </div>
        ))
      }
    </div>
    </div>
  )
}

export default Home;
