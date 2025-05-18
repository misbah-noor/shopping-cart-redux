import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './component/Navbar';
import LoadingSpinner from './component/LoadingSpinner';

const App =  () => {
 const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false)
  }, 3000);
  return () => clearTimeout(timer);
}, []);

if(isLoading){
  return <LoadingSpinner/>
}
  return(
  <>
  <Navbar />
  <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/cart' element={<Cart />}/>
  </Routes>
  </>


  )
};

export default App;