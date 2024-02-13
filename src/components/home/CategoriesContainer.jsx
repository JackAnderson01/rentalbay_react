import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const CategoriesContainer = () => {


    const dummyArr = [
        {
            "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
            "name": "Shoes",
            "link": "/"
        },
        {
            "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
            "name": "Glasses",
            "link": "/"
        },
        {
            "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
            "name": "Lipsticks",
            "link": "/"
        },
        {
            "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
            "name": "Headphones",
            "link": "/"
        },
        {
            "image": "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "name": "Watches",
            "link": "/"
        },
        {
            "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
            "name": "Coffee",
            "link": "/"
        },
        {
            "image": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
            "name": "Camera",
            "link": "/"
        },
        {
            "image": "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
            "name": "Bags",
            "link": "/"
        },
        {
            "image": "https://c06e-103-138-50-154.ngrok-free.app/storage/products-images/tfAeq9H2oHNmt6k.webp",
            "name": "Camera",
            "link": "/"
        },
        {
            "image": "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
            "name": "Bags",
            "link": "/"
        },
    ]

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
    const slidesPerView = windowWidth > 1500 ? 9 : windowWidth > 1100 ? 8 : windowWidth > 720 ? 6 : windowWidth > 320 ? 4 : 3


    return (
        <div className='w-full h-auto my-4 flex flex-col px-4 lg:px-10 justify-start gap-4 items-start'>
            <div className='w-full h-10 flex justify-between items-center'>
                <span className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-900'>
                    Top Categories
                </span>

                
            </div>

            <div className='w-full h-auto flex  items-center justify-center gap-4 '>
                <Swiper
                    // install Swiper modules
                    spaceBetween={50}
                    slidesPerView={slidesPerView}
                    className='relative '
                >
                    {
                        dummyArr.map((category, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <CategoryCard key={key} image={category?.image} name={category?.name}  />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>



        </div>
    )
}

export default CategoriesContainer