import React from 'react'

const ContactSupport = () => {
    return (
        <div className='w-full h-auto flex flex-col gap-6 justify-start items-start'>

            <span className='text-xl font-bold text-gray-900'>
                Contact Support
            </span>


            <input type={"text"} placeholder={"Subject"} className='w-full h-12 border border-gray-200 text-gray-900 text-sm font-medium px-3 rounded-sm transition-all duration-100 outline-none hover:border-orange-500 focus:border-orange-500' />


            <textarea className='w-full p-3 text-sm h-40 resize-none border border-gray-200 rounded-sm transition-all duration-100 outline-none hover:border-orange-500 focus:border-orange-500' placeholder={"Message"}>
            </textarea>


            {/* Buttons container */}
            <diV className="w-auto flex gap-2 justify-start items-center">

                <button className='w-36 h-10 rounded-sm bg-orange-500 transition-all duration-150 hover:opacity-95 text-xs font-medium flex items-center justify-center text-white uppercase'>
                    Submit
                </button>

                <button className='w-auto px-2 h-10 bg-white text-xs  flex items-center justify-center font-medium text-orange-500 hover:underline underline-offset-2 uppercase'>
                    Cancel
                </button>

            </diV>
        </div>
    )
}

export default ContactSupport