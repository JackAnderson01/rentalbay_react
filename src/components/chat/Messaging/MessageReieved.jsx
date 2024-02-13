import React from 'react'

const MessageReieved = () => {
  return (
    <div className='w-full flex justify-start items-center h-auto'>
        <div className='w-auto max-w-[40%] h-auto flex flex-col justify-start items-start gap-[2px]'>
            <span className='bg-gray-300 rounded-r-xl rounded-t-xl text-balck p-3 text-xs font-medium '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa temporibus corporis, eos placeat,
            </span>
            <span className='ml-1 text-[9px] font-medium text-gray-800'>
                02:30 PM
            </span>
        </div>
    </div>
  )
}

export default MessageReieved