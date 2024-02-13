import React from 'react'
import ChatHeader from './ChatHeader'
import ChatFooter from './ChatFooter'
import MessageSend from './Messaging/MessageSend'
import MessageReieved from './Messaging/MessageReieved'
import ImageSend from './Messaging/ImageSend'
import ImageRecieved from './Messaging/ImageRecieved'

const ChatMain = ({ setIsOpen }) => {
  return (
    <div className='p-3 border-2 border-gray-200 rounded-2xl w-full bg-white lg:w-2/3 xl:w-3/4  h-full relative '>
      <ChatHeader setIsOpen={setIsOpen} />
      <div className='w-full h-[calc(100%-7rem)] absolute top-14 overflow-y-auto left-0 flex flex-col justify-start items-start px-4 py-2'>
        <MessageSend />
        <MessageReieved />
        <ImageSend />
        <ImageRecieved />

      </div>
      <ChatFooter />
    </div>

  )
}

export default ChatMain