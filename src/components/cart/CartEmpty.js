import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { toggleCart } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';

const CartEmpty = () => {
  const dispatch = useDispatch()
  const closeCart = () =>{
    dispatch(toggleCart())
  }
  return (
   <>
      <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
        <img
          src='/images/assets/emptybag.png'
          alt="emptybag"
          className='w-28 lg:w-40 sm:w-36 h-auto object-fill transition-all duration-300 hover:scale-110'
        />
        <button type='button' className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'>
            <ArrowLeftIcon className='w-4 h-4 text-slate-900' />
            <span onClick={closeCart}>Back To Nike Store</span>
        </button>
      </div>
   </>
  )
}

export default CartEmpty