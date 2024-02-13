import React, { useRef } from 'react'
import ChatSidebarLink from './ChatSidebarLink';

const ChatSidebar = ({ setIsOpen, isOpen }) => {
    const chatSidebarRef = useRef();

    const toggleModal = (e) => {
        if (!chatSidebarRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }
    return (
        <div onClick={toggleModal} className={`w-full lg:w-1/3 xl:w-1/4 z-10 bg-transparent  transition-all duration-200 ${isOpen ? "translate-x-0 flex " : "-translate-x-full lg:translate-x-0"} h-full lg:static absolute top-0 left-0`}>
            <div ref={chatSidebarRef} className='p-4 lg:border-2 shadow-md border-gray-200 bg-white lg:rounded-2xl w-3/4 md:w-[40%] lg:w-full  h-full flex flex-col gap-2'>
                <span className='ml-2.5 text-2xl font-bold text-gray-800'>
                    Messages
                </span>

                <div className='w-full h-[calc(100%-3rem)] overflow-y-auto flex flex-col gap-1 divide-y-2 justify-start items-start'>
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />
                    <ChatSidebarLink />



                </div>

            </div>
        </div>
    )
}

export default ChatSidebar