import React from 'react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Cart = () => {
    return (
        <div className='w-full min-h-[70vh] h-auto flex flex-col gap-6 px-6 lg:px-14 py-6 lg:py-10  justify-start items-start'>
            <div className='w-full h-auto flex justify-center items-center gap-2 uppercase'>
                {/* Breadcrumb */}
                <div className='w-auto flex justify-start items-center gap-1'>
                    <span className='text-black flex justify-start items-center cursor-pointer text-sm font-semibold transition-all duration-150 '>
                        Shopping Cart
                        <MdOutlineKeyboardArrowRight className='text-sm lg:text-2xl' />
                    </span>

                    <span className='text-[#959595] flex justify-start items-center cursor-pointer text-sm font-semibold transition-all duration-150 '>
                        Checkout
                        <MdOutlineKeyboardArrowRight className='text-sm lg:text-2xl' />

                    </span>
                    <span className='text-[#959595] flex justify-start items-center cursor-pointer text-sm font-semibold transition-all duration-150 '>
                        Order Complete

                    </span>

                </div>
            </div>

            {/* Order Details */}

            <div className='w-full h-auto flex flex-col justify-start items-start gap-3'>
                <h1 className='text-lg font-bold text-black uppercase'>
                    Order Details
                </h1>
                <div class="relative w-full overflow-x-auto">
                    <table
                        id="appointment-table"
                        className={`w-full text-sm text-left  rtl:text-right text-gray-500  `}
                    >
                        <thead className=" lg:text-sm text-black  text-xs uppercase   ">
                            <tr>
                                <th scope="col" className="w-20 py-2">
                                    Product
                                </th>
                                <th scope="col" className="w-20 py-2">
                                    Days
                                </th>
                                <th scope="col" className="w-20 py-2">
                                    Rate
                                </th>
                                <th scope="col" className="w-20 py-2">
                                    Hours
                                </th>
                                <th scope="col" className="w-20 py-2">
                                    Sub Total
                                </th>

                                <th scope="col" className="w-20 py-2">

                                </th>
                            </tr>
                        </thead>
                        <tbody className="w-full h-auto">


                            <tr className="border-b  border-[#d7d5d5]">
                                <th
                                    scope="row"
                                    className=" w-auto py-3 text-xs lg:text-sm font-medium text-gray-900 whitespace-nowrap "
                                >
                                    <div className='w-auto flex justify-start items-center gap-2'>
                                        <div className='w-auto h-auto flex justify-center items-start'>

                                            <img src='https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D' className='w-10 h-10 rounded-md' />
                                        </div>
                                        <span className='w-32  h-auto text-wrap text-xs lg:text-sm font-medium text-gray-900'>
                                            Permium Quality Leather Shoes
                                        </span>

                                    </div>

                                </th>
                                <td className=" w-20  text-xs lg:text-sm">
                                    <div className='flex flex-col justify-start items-start gap-1'>
                                        <h1 className='text-md font-semibold text-orange-500'>
                                            17,18,19,20
                                        </h1>
                                        <span className='text-[#959595] text-sm font-medium'>
                                            January
                                        </span>

                                    </div>
                                </td>
                                <td className=" w-20  text-xs lg:text-sm capitalize">
                                    <div className='w-auto flex gap-1 justify-start items-center'>
                                        <span className='text-lg font-bold text-orange-500'>
                                            $30.00
                                        </span>
                                        <span className='text-md font-semibold text-[#959595]'>
                                            /4hr
                                        </span>
                                    </div>
                                </td>
                                <td className="px-2 lg:  text-xs lg:text-sm">
                                    <span className='text-md font-semibold text-orange-500'>
                                        12 hrs
                                    </span>
                                </td>
                                <td className=" py-4  flex flex-col text-xl text-[#8cd790]">
                                    <span className='text-sm font-bold text-black'>
                                        $100.00
                                    </span>

                                </td>

                                <td className="px-2 lg: ">
                                    <button
                                        className="text-md font-medium underline-offset-2 text-red-600 hover:underline"
                                    >
                                        Remove
                                    </button>

                                </td>
                            </tr>

                            <tr className="border-b  border-[#d7d5d5]">
                                <th
                                    scope="row"
                                    className=" w-auto py-3  text-xs lg:text-sm font-medium text-gray-900 whitespace-nowrap "
                                >
                                    <div className='w-auto flex justify-start items-center gap-2'>
                                        <div className='w-auto h-auto flex justify-center items-start'>

                                            <img src='https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D' className='w-10 h-10 rounded-md' />
                                        </div>
                                        <span className='w-32  h-auto text-wrap text-xs lg:text-sm font-medium text-gray-900'>
                                            Permium Quality Leather Shoes
                                        </span>

                                    </div>

                                </th>
                                <td className=" w-20  text-xs lg:text-sm">
                                    <div className='flex flex-col justify-start items-start gap-1'>
                                        <h1 className='text-md font-semibold text-orange-500'>
                                            17,18,19,20
                                        </h1>
                                        <span className='text-[#959595] text-sm font-medium'>
                                            January
                                        </span>

                                    </div>
                                </td>
                                <td className=" w-20  text-xs lg:text-sm capitalize">
                                    <div className='w-auto flex gap-1 justify-start items-center'>
                                        <span className='text-lg font-bold text-orange-500'>
                                            $30.00
                                        </span>
                                        <span className='text-md font-semibold text-[#959595]'>
                                            /4hr
                                        </span>
                                    </div>
                                </td>
                                <td className="px-2 lg:  text-xs lg:text-sm">
                                    <span className='text-md font-semibold text-orange-500'>
                                        12 hrs
                                    </span>
                                </td>
                                <td className=" py-4  flex flex-col text-xl text-[#8cd790]">
                                    <span className='text-sm font-bold text-black'>
                                        $100.00
                                    </span>

                                </td>

                                <td className="px-2 lg: ">
                                    <button
                                        className="text-md font-medium underline-offset-2 text-red-600 hover:underline"
                                    >
                                        Remove
                                    </button>

                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <div className='w-full flex mt-6 justify-between items-center h-auto'>
                        <span className='text-sm font-bold uppercase text-gray-900'>
                            Sub Total
                        </span>

                        <span className='text-sm font-semibold uppercase text-gray-700'>
                            $100.00
                        </span>
                    </div>

                    <button className='w-auto px-4 mt-8 flex items-center justify-center h-8 uppercase bg-[#F85E00] text-xs text-white font-medium hover:opacity-95'>
                        Proceed to checkout
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Cart