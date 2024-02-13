import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#F9F9F9] shadow-sm w-full h-auto p-5 lg:p-0  flex flex-col lg:flex-row  justify-start items-start'>
            <div className='w-full lg:w-[25%] h-auto lg:h-48 flex gap-3 items-center justify-center '>
                <FaPhone className='text-md text-gray-700' />
                <span className='text-sm font-semibold text-gray-700'>
                    (123)-456-7890
                </span>
            </div>

            <div className='w-full lg:w-[50%] h-auto lg:h-48 py-8 flex flex-col gap-2 items-center justify-center '>
                <Link to="/">

                    <img src='/logo.svg' />
                </Link>

                <div className='flex my-auto justify-center gap-1 items-center'>
                    <IoMail className='text-md text-gray-700' />
                    <span className='text-sm font-semibold text-gray-700'>
                        contact@rentalbay.com
                    </span>
                </div>

                <div className='text-[#959595] text-center text-sm font-normal'>
                    Copyright &#174; 2023 All rights reserved | This is made by <Link to="https://dignitestudios.com/" className='text-sm font-semibold text-orange-500'>Dignite Studios</Link>
                </div>
            </div>

            <div className='w-full lg:w-[25%] h-auto lg:h-48 flex items-center justify-center gap-3 '>
                <Link to="/">
                    <img src='/facebook.svg' className='w-5' />
                </Link>

                <Link to="/">
                    <img src='/twitter.svg' className='w-5' />
                </Link>

                <Link to="/">
                    <img src='/instagram.svg' className='w-5' />
                </Link>

                <Link to="/">
                    <img src='/linkedin.svg' className='w-5' />
                </Link>

            </div>
        </div>
    )
}

export default Footer