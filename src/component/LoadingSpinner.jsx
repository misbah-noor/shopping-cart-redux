import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";
function LoadingSpinner() {
  return (
    <div className='fixed flex justify-center items-center inset-0 z-50 bg-white'>
      <h2 className='text-red-600 font-bold animate-spin'><AiOutlineLoading size={60}/></h2>
    </div>
  )
}

export default LoadingSpinner
