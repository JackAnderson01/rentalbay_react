import React, { useState, useEffect } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import NormalProductCard from '../home/NormalProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MayLike = ({ products }) => {


    const [windowWidth, setWindowWidth] = useState(9);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setWindowWidth(window.innerWidth);
        }, 1000);

        return () => {
            // Clear the timeout when the component is unmounted
            clearTimeout(timeoutId);
        };
    }, []); // Run this effect only once on mount

    // Rest of your component...

    // Determine slidesPerView based on windowWidth
    const slidesPerView = windowWidth > 1500 ? 5 : windowWidth > 720 ? 4 : windowWidth > 320 ? 2 : 1


    return (
        <div className='w-full flex flex-col justify-start items-start gap-1'>
            <h1 className='text-lg font-bold text-black capitalize'>
                You may also like
            </h1>

            <div className='w-full h-auto flex flex-wrap items-center justify-center gap-4 '>
                {/* <Swiper
                    // install Swiper modules
                    // modules={[Navigation, A11y]}
                    spaceBetween={50}
                    slidesPerView={slidesPerView}
                    // navigation
                    className='relative'
                >
                    {
                        products?.map((product, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <NormalProductCard product={product} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper> */}

            </div>
        </div>
    )
}

export default MayLike