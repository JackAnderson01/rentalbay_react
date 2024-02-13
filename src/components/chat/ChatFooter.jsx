import React from 'react'
import { BiSolidPaperPlane } from "react-icons/bi";
import { LuImagePlus } from "react-icons/lu";

const ChatFooter = () => {
  return (
    <div className='absolute bottom-2 left-4 w-[calc(100%-2rem)] h-12 flex items-center justify-start gap-2'>
      <div className='w-full h-auto flex items-center justify-center relative'>
        <textarea className='w-full h-12 rounded-full bg-gray-100 py-3 px-6 outline-none border-none resize-none' placeholder='Text Message'></textarea>
        <button className='w-12 h-full rounded-full flex items-center justify-center absolute top-0 right-0 bg-orange-500 hover:opacity-90'>
            <BiSolidPaperPlane className='text-2xl text-white'/>
        </button>
        <button className='w-10 h-full absolute top-0 right-14 rounded-full flex items-center justify-center text-gray-700'>
          <LuImagePlus className='text-xl hover:text-black' />
        </button>
      </div>
    </div>
  )
}

export default ChatFooter