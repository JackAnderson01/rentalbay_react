import React from 'react'

const Hero = () => {
    return (
        <div className='bg-[#F9F9F9] w-full h-auto flex flex-col py-8 gap-8 justify-start items-center'>
            <div className='w-[80%] flex flex-col gap-4 justify-center items-center'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-center font-extrabold text-gray-900'>
                    Make your room,<br/>
                    Comfortable & Useful
                </h1>
                <p className='text-xs lg:text-md text-center font-medium text-[#959595]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut auctor magna.<br/>
                Nam laoreet turpis a maximus fermentum. Proin sagittis fringilla blandit.
                </p>
            </div>
            <img src='/hero.png' className='w-[80%] lg:w-[45%]' />
        </div>
    )
}

export default Hero