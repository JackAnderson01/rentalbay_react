
import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";

const CartSidebarItem = ({item}) => {

    const [quantity, setQuantity] = useState(1);

    return (
        <div className='w-full h-[5.5rem] p-2  mt-2 flex justify-start relative items-start gap-3 group'>
            <img src={item?.image} className='w-[28%] h-full rounded-md' />

            <div className='flex w-[70%] h-auto flex-col gap-[2px] justify-start items-start'>
                <h1 className='text-sm font-bold text-gray-900'>
                    {item?.name}
                </h1>

                <div className='flex justify-start items-center gap-1'>
                    <span className='text-md  font-bold text-orange-500'>
                        $100
                    </span>
                    <span className='text-md  font-medium text-[#959595]'>
                        /4hr
                    </span>
                </div>

                <button className='text-xs text-red-600 hover:underline'>
                    Remove
                </button>

                <div className='absolute bottom-3 flex  right-3 w-20 h-6 text-sm rounded-full bg-white  justify-start items-center border border-orange-500'>
                    <button onClick={() => setQuantity((prev) => prev > 1 ? prev-1 : 1)}  className='w-1/3 h-full transition-all duration-150 hover:bg-orange-500 hover:text-white flex items-center justify-center rounded-l-full text-orange-500'>
                        <FaMinus className='text-sm'/>
                    </button>
                    <span className='w-1/3 h-full flex border-l border-r border-orange-500 items-center justify-center  text-orange-500'>
                        {quantity}
                    </span>
                    <button onClick={() => setQuantity((prev) => prev < 10 ? prev+1 : 10)} className='w-1/3 h-full transition-all duration-150 hover:bg-orange-500 hover:text-white flex items-center justify-center rounded-r-full text-orange-500'>
                        <FaPlus className='text-sm' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CartSidebarItem