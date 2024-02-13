"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const PasswordUpdateNotifier = () => {

    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push("/login")
        },1000)
    },[])

    return (
        <div className='w-full h-[20rem] flex flex-col gap-4 items-center justify-center'>
            <IoIosCheckmarkCircleOutline className='text-7xl lg:text-9xl text-orange-500 font-bold' />
            <h1 className='text-2xl lg:text-4xl font-bold text-gray-900'>
                Password Updated!
            </h1>
            <p className='text-md lg:text-lg font-semibold text-[#959595] text-center'>
                Your password has been updated successfully!
            </p>

        </div>
    )
}

export default PasswordUpdateNotifier