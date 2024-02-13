import React, { useState } from 'react'
import ChatMain from '../components/chat/ChatMain'
import ChatSidebar from '../components/chat/ChatSidebar'


const Chat = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='w-full h-[95vh] flex  gap-6 px-4 lg:px-14 py-4 relative  lg:py-10  justify-start items-start'>
        <ChatSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <ChatMain setIsOpen={setIsOpen}/>
        
    </div>
  )
}

export default Chat