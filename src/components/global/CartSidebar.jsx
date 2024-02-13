
import React, { useContext } from 'react'
import { MdClose } from 'react-icons/md';
import CartSidebarItem from './CartSidebarItem';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';


const CartSidebar = () => {

  const { cartRef, toggleCart } = useContext(GlobalContext);

  const dummyArr = [
    {
      "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Shoes",
      "link": "/"
    },
    {
      "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      "name": "Glasses",
      "link": "/"
    },
    {
      "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      "name": "Lipsticks",
      "link": "/"
    },
    {
      "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      "name": "Headphones",
      "link": "/"
    },
    {
      "image": "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "name": "Watches",
      "link": "/"
    },
    {
      "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      "name": "Coffee",
      "link": "/"
    },
    {
      "image": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      "name": "Camera",
      "link": "/"
    },
    {
      "image": "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      "name": "Bags",
      "link": "/"
    },
    {
      "image": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      "name": "Camera",
      "link": "/"
    },
    {
      "image": "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      "name": "Bags",
      "link": "/"
    },
  ]




  return (
    <div ref={cartRef} className='w-[21rem] h-screen transition-all p-3 translate-x-96 duration-150 bg-white fixed top-0 right-0 z-[60] shadow-md flex flex-col justify-start items-start gap-3'>
      <button ref={cartRef} onClick={toggleCart} className='absolute top-6 -left-4 w-8 h-8 bg-white rounded-full shadow-md shadow-black/[0.4] transition-all duration-150 hover:scale-105 flex items-center justify-center'>
        <MdClose className='text-xl font-bold text-gray-900' />
      </button>

      <span className='text-xl self-center font-bold text-gray-900'>
        Shopping Cart
      </span>

      <div className='w-full  h-auto max-h-[80%] overflow-y-auto'>

        {
            dummyArr.map((item, key)=>(
              <CartSidebarItem item={item} key={key}/>
            ))
        }

      </div>

      <div className='w-full h-auto flex flex-col gap-2 p-2 justify-start items-start'>

        <div className='w-full h-10 flex items-center justify-between'>
          <span className='text-sm font-bold text-gray-900 uppercase'>
            Sub Total
          </span>

          <span className='text-orange-500 text-md font-extrabold'>
            $500.00
          </span>
        </div>

        <Link to="/cart" className='w-full h-10 bg-[#f9f9f9] text-sm font-semibold transition-all duration-150 hover:bg-[#eeeded] text-gray-900 flex items-center justify-center'>
          View Cart
        </Link>

        <button className='w-full h-10 bg-orange-500 text-sm font-semibold transition-all duration-150 hover:bg-orange-600 text-white flex items-center justify-center'>
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartSidebar