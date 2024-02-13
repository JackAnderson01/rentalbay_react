import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { MdEdit } from 'react-icons/md'
import StatsCard from '../components/profile/StatsCard'

const Profile = () => {
    return (
        <div className='w-full h-auto flex flex-col gap-8 justify-start items-start'>

            <span className='text-lg font-bold text-gray-900'>
                My Profile
            </span>

            <div className='w-auto flex justify-start items-center gap-3'>

                <div className='w-20 h-20 rounded-full bg-gray-100 border border-orange-500 border-dashed flex items-center justify-center'>
                    <FaPlus className='text-orange-500' />
                    <img src='' className='hidden' />
                    <input type='file' className='hidden' />
                </div>

                <span className='text-lg font-medium text-gray-900'>
                    Olivia James
                </span>

            </div>

            <div className='w-auto flex justify-start items-start gap-2'>
                <StatsCard title={"Positive Seller Rating"} percent={90} />
                <StatsCard title={"Chat Response Rate"} percent={90} />
            </div>

            <div className='w-auto flex flex-col justify-start items-start gap-1'>
                <span className='text-gray-900 flex gap-2 justify-start items-center uppercase text-sm font-bold'>
                    Name
                    <MdEdit className='text-md cursor-pointer'/>
                </span>
                <span className='text-[#959595]  text-sm font-semibold'>
                    Olivia James
                </span>
            </div>

            <div className='w-auto flex flex-col justify-start items-start gap-1'>
                <span className='text-gray-900 uppercase text-sm font-bold'>
                    Email
                </span>
                <span className='text-[#959595]  text-sm font-semibold'>
                    oliviajames@gmail.com
                </span>
            </div>



        </div>
    )
}

export default Profile