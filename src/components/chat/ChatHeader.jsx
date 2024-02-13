import React from 'react'
import { GoKebabHorizontal } from "react-icons/go";

const ChatHeader = ({setIsOpen}) => {
  return (
    <div className='absolute top-0 left-0 w-full h-14 rounded-t-[0.98rem] border-b-2 flex items-center justify-between px-4 border-gray-200'>
      <div className='w-auto flex justify-start items-center gap-2'>
        <div className='w-10 h-10 rounded-full flex items-center justify-center relative'>
          <img src='https://randomuser.me/api/portraits/men/36.jpg' className='w-full h-full rounded-full' />
          <span className='w-3 h-3 rounded-full bg-green-500 absolute top-0 right-0'/>
        </div>
        <div className='w-auto flex flex-col  justify-start items-start'>
          <span className='text-md font-semibold text-black'>
              James Anderson
          </span>
          <span className='text-xs text-gray-500 font-medium'>
            Online
          </span>
        </div>
      </div>
      <button onClick={() => setIsOpen(true)} className=' lg:hidden flex items-center justify-center w-4 h-4'>
        <GoKebabHorizontal />
      </button>
    </div>
  )
}

export default ChatHeader