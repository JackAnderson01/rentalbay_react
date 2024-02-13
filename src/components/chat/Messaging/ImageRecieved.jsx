import React from 'react'

const ImageRecieved = () => {
    return (
        <div className='w-full flex justify-start items-center h-auto'>
            <div className='w-auto max-w-[40%] h-auto flex flex-col justify-start items-start gap-[2px]'>
                <div className='w-full h-auto max-h-60 bg-gray-300 rounded-r-xl rounded-t-xl text-white p-3 text-xs font-medium '>
                    <img src='https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww' className='w-full h-full max-h-52 rounded-lg' />
                </div>
                <span className='ml-1 text-[9px] font-medium text-gray-800'>
                    02:30 PM
                </span>
            </div>
        </div>
    )
}

export default ImageRecieved