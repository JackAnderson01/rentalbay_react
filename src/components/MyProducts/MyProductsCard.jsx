import React, { useRef, useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import { GoKebabHorizontal } from "react-icons/go";
import ProductCrudModal from './ProductCrudModal';
import { Link } from 'react-router-dom';

const MyProductsCard = ({ product }) => {

    const { imageUrl } = useContext(GlobalContext)

    const [isCrudOpen, setIsCrudOpen] = useState(false)
    const [image, setImage] = useState(`${imageUrl}${product?.images[0]?.url}`)

    const toggleModal = () => {
        setIsCrudOpen((prev) => !prev)
    }

    return (
        <div className='group w-1/2 md:w-1/3  h-56 lg:w-1/4 lg:h-80 cursor-pointer transition-all relative duration-150  hover:bg-gray-100 p-2'>
            <button onClick={toggleModal} className='absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center bg-white shadow-md shadow-black/[0.4]'>
                <GoKebabHorizontal className='text-black' />
            </button>
            <ProductCrudModal isOpen={isCrudOpen} setIsCrudOpen={setIsCrudOpen} product={product} />
            <Link to={`/products/${product?.id}`} className='w-full h-full flex flex-col'>
                <img src={image} className='w-full h-[60%] object-cover mix-blend-multiply' />

                <div className='w-auto h-[40%]  flex flex-col gap-1 mt-2 justify-start items-start'>
                    <h1 className='text-md lg:text-xl font-bold lg:font-semibold text-gray-900'>
                        {product?.name?.length > 25 ? product?.name.slice(0, 25) + "..." : product?.name}

                    </h1>
                    <div className='flex justify-start items-center gap-1'>
                        <span className='text-sm lg:text-2xl font-bold text-gray-900'>
                            $100
                        </span>
                        <span className='text-sm lg:text-2xl font-medium text-[#959595]'>
                            /4hr
                        </span>
                    </div>
                    <div className='flex lg:mt-1 justify-start items-center text-yellow-500 gap-1'>
                        <svg
                            class="w-3 h-3 lg:w-4 lg:h-4 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>

                        <span className='text-sm lg:text-md font-medium text-[#959595]'>
                            4.8
                        </span>
                    </div>

                </div>
            </Link>
        </div>
    )
}

export default MyProductsCard