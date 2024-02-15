import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';

const StoreProductCard = ({ product }) => {

    const { imageUrl } = useContext(GlobalContext)

    const [image, setImage] = useState(`${imageUrl}${product?.images[0]?.url}`)


    return (
        <div className='group w-1/2 md:w-1/3  h-56 lg:w-1/4 lg:h-80  cursor-pointer transition-all duration-150 bg-gray-50 hover:bg-gray-100 p-2'>
            <Link to={`/products/${product?.id}`} className='w-full h-full flex flex-col relative'>
                {/* Verified Icon */}
                <div className='group absolute z-20 top-2 right-2 flex items-center justify-start  w-auto h-6 p-[2px] rounded-full bg-orange-500 '>
                    <span className='w-5 h-5 rounded-full bg-orange-500 text-white group-hover:bg-white group-hover:text-orange-500 flex items-center justify-center '>
                        <FaCheck className='text-lg ' />
                    </span>
                    <span className='hidden group-hover:flex items-center justify-center text-xs font-semibold h-5 px-1 rounded-r-full bg-orange-500 text-white'>
                        Verified
                    </span>
                </div>
                <img src={image} className='w-full h-[60%] object-cover mix-blend-multiply' />


                <div className='w-auto h-[40%]  flex flex-col gap-1 mt-2 justify-start items-start relative'>



                    {/* Others */}
                    <h1 className='text-sm lg:text-xl  font-semibold text-gray-900'>
                        {product?.name?.length > 25 ? product?.name.slice(0, 25) + "..." : product?.name}

                    </h1>
                    <div className='flex justify-start items-center gap-1'>
                        <span className='text-md lg:text-2xl font-bold text-gray-900'>
                            ${product?.four_hours_rate}
                        </span>
                        <span className='text-md lg:text-2xl font-medium text-[#959595]'>
                            /4hr
                        </span>
                    </div>
                    <div className='flex mt-1 justify-start items-center text-yellow-500 gap-1'>
                        <svg
                            class="w-4 h-4 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>

                        <span className='text-md font-medium text-[#959595]'>
                            {product?.ratings[0]?.rating}
                        </span>
                    </div>

                </div>
            </Link>
        </div>
    )
}

export default StoreProductCard