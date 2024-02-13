import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";

const WithdrawHistory = () => {
    return (
        <div className='w-full h-auto flex flex-col gap-8 justify-start items-start'>
            <div className='flex flex-col gap-1'>
                <Link href={"/get-paid"} className='text-xl'>
                    <FaArrowLeft />
                </Link>
                <span className='text-lg font-bold text-gray-900'>
                    Withdraw History
                </span>
            </div>
        </div>
    )
}

export default WithdrawHistory