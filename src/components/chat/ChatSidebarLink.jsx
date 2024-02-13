import React from 'react'

const ChatSidebarLink = () => {
    return (
        <div className='w-full flex flex-col justify-start cursor-pointer items-center gap-[2px] py-1'>
            <div className='w-full h-14  hover:bg-orange-500/[0.07] rounded-lg px-2 flex justify-start items-center gap-2 relative'>
                <div className='w-10 h-10 rounded-full flex items-center justify-center relative'>
                    <img src='https://randomuser.me/api/portraits/men/36.jpg' className='w-full h-full rounded-full' />
                    <span className='w-3 h-3 rounded-full bg-green-500 absolute top-0 right-0' />
                </div>
                <div className='w-auto flex flex-col  justify-start items-start'>
                    <span className='text-sm font-semibold text-black'>
                        James Anderson
                    </span>
                    <span className='ml-[2px] text-xs text-gray-500 font-medium'>
                        Hello how are you?
                    </span>
                </div>

                <div className='w-auto h-auto flex flex-col gap-1 justify-start items-center absolute top-5 right-2'>
                    <span className='w-4 h-4 rounded-full bg-orange-500 text-[9px] flex justify-center items-center text-white font-bold'>
                        2
                    </span>
                    <span className='text-[9px] text-gray-500 font-normal'>
                        11 oct
                    </span>
                </div>
            </div>


        </div>
    )
}

export default ChatSidebarLink