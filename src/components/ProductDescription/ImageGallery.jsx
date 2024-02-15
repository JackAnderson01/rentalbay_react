import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

const ImageGallery = ({ images }) => {

    const [current, setCurrent] = useState(0)
    const {imageUrl} = useContext(GlobalContext)


    return (
        <>
            {/* Images Container */}
            <div className="w-full lg:w-[48%] h-auto flex justify-start gap-2 items-start">

                {/* Vertical Col */}
                <div className="w-[25%] lg:w-[20%] h-80 lg:h-[28rem] overflow-y-auto flex flex-col justify-start items-start gap-2 lg:px-2">

                    {
                        images?.map((image, key) => {
                            return (
                                <div key={key} onClick={() => setCurrent(key)} className='w-20 lg:w-full h-20 border border-gray-200 hover:border-orange-500 focus:border-orange-500 focus-within:border-orange-500 '>
                                    <img src={`${imageUrl}${image?.url}`} className='w-full h-full hover:opacity-90 cursor-pointer ' />
                                </div>
                            )
                        })
                    }




                </div>

                <div className="w-[70%] h-auto flex items-center justify-center">
                    {images && <img src={`${imageUrl}${images[current]?.url}`} className='w-full h-80 lg:h-[28rem] hover:opacity-90 cursor-zoom-in ' />}
                </div>

            </div>
        </>

    )
}

export default ImageGallery