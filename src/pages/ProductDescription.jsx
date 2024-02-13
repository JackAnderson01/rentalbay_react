import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Link, useParams } from 'react-router-dom';
import ImageGallery from '../components/ProductDescription/ImageGallery';
import DescriptionContainer from '../components/ProductDescription/DescriptionContainer';
import ReviewContainer from '../components/ProductDescription/ReviewContainer';
import MayLike from '../components/ProductDescription/MayLike';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function ProductDescription() {

    const params = useParams()
    const [id, setId] = useState(null)
    useEffect(()=>{
        setId(params?.id)
    },[])

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
            "image": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
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
    }, []);

    const reviews = [
        {
            "name": "Joshua Arther",
            "image": 'https://randomuser.me/api/portraits/men/54.jpg',
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id augue aliquam, venenatis mi in, dictum nisl. Nam ligula mi, varius sit amet nisi ut, viverra sollicitudin augue."
        },
        {
            "name": "Jack Anderson",
            "image": 'https://randomuser.me/api/portraits/men/33.jpg',
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id augue aliquam, venenatis mi in, dictum nisl. Nam ligula mi, varius sit amet nisi ut, viverra sollicitudin augue."
        },
        {
            "name": "Jane Doe",
            "image": 'https://randomuser.me/api/portraits/women/31.jpg',
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id augue aliquam, venenatis mi in, dictum nisl. Nam ligula mi, varius sit amet nisi ut, viverra sollicitudin augue."
        },
    ]

    const slidesPerView = windowWidth > 1400 ? 9 : windowWidth > 720 ? 7 : 6


    return (
        <div className=" w-full h-auto flex flex-col gap-6 justify-start items-start px-6 lg:px-14 py-6 lg:py-10">
            {/* {params?.id} */}

            {/* Breadcrumb */}
            <div className='w-full flex justify-start items-center gap-1'>
                <Link to="/home" className='text-[#959595] flex justify-start items-center text-sm font-semibold transition-all duration-150 hover:text-black'>
                    Home
                    <MdOutlineKeyboardArrowRight />
                </Link>

                <span className='text-[#959595] flex justify-start items-center text-sm font-semibold transition-all duration-150 hover:text-black'>
                    Category
                    <MdOutlineKeyboardArrowRight />

                </span>
                <span className='text-[#959595] flex justify-start items-center text-sm font-semibold transition-all duration-150 hover:text-black'>
                    Sub Category
                    <MdOutlineKeyboardArrowRight />

                </span>
                <span className=' text-sm font-semibold transition-all duration-150 text-black'>
                    {dummyArr[0]?.name}
                </span>
            </div>

            <div className="w-full h-auto flex flex-col lg:flex-row justify-start items-start gap-6">
                <ImageGallery images={dummyArr} />

                <div className='w-full lg:w-[48%] h-auto flex flex-col justify-start gap-4 items-start'>

                    <div className='w-auto h-auto flex flex-col  justify-start items-start'>

                        <h1 className='text-2xl lg:text-3xl font-bold text-gray-900'>
                            Decent Modern Chair - Single Seater
                        </h1>

                        <div className='w-auto flex gap-4 justify-between items-center'>
                            <div className='flex mt-1 justify-start items-center text-yellow-500 gap-1'>
                                <svg
                                    class="w-4 h-4 me-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>

                                <span className='text-md font-medium text-[#959595]'>
                                    4.8
                                </span>
                            </div>

                            <span draggable className='w-24 h-6 rounded-full flex items-center justify-center bg-[#CCEEFD]/[0.24] text-[#5AC8FA] cursor-pointer text-xs font-medium'>
                                8 Miles Away
                            </span>
                        </div>
                    </div>

                    <div className='w-auto h-auto flex flex-col gap-1 justify-start items-start'>
                        <h1 className='text-sm lg:text-lg font-bold text-[#181919]'>
                            Pickup Location
                        </h1>
                        <span className='text-xs lg:text-md text-[#959595] font-medium'>
                            Star City Mall, USA
                        </span>
                    </div>


                    <div className='w-auto h-auto flex flex-col gap-1 justify-start items-start'>
                        <h1 className='text-sm lg:text-lg font-bold text-[#181919]'>
                            Hourly Rate
                        </h1>

                        <div className='w-auto h-auto flex justify-start items-center gap-6'>
                            <div className='flex justify-start items-center gap-1'>
                                <span className='text-sm lg:text-xl font-bold text-orange-500'>
                                    $25
                                </span>
                                <span className='text-sm lg:text-xl font-medium text-[#959595]'>
                                    /4hr
                                </span>
                            </div>

                            <div className='flex justify-start items-center gap-1'>
                                <span className='text-sm lg:text-xl font-bold text-orange-500'>
                                    $100
                                </span>
                                <span className='text-sm lg:text-xl font-medium text-[#959595]'>
                                    /12hr
                                </span>
                            </div>
                        </div>

                    </div>


                    <div className='w-full h-auto flex flex-col gap-3 justify-start items-start overflow-x-auto'>
                        <h1 className='text-sm lg:text-lg font-bold text-[#181919]'>
                            Available Days/Hours
                        </h1>

                        <div className='w-full h-auto  overflow-x-auto'>
                            <Swiper className="mySwiper" slidesPerView={slidesPerView} spaceBetween={50}>
                                {
                                    dummyArr.map((item, key) => {
                                        return (
                                            <SwiperSlide key={key}>

                                                <button className='lg:w-16 lg:h-20 w-16 h-20 rounded-lg bg-gray-50 border border-gray-100 hover:border-orange-500 focus:order-orange-500 focus:bg-orange-500/[0.23] hover:bg-orange-500/[0.24] cursor-pointer flex justify-center flex-col items-center '>
                                                    <span className='text-orange-500 font-bold text-md lg:text-lg'>
                                                        01
                                                    </span>
                                                    <span className='text-[#959595] font-medium text-xs lg:text-sm'>
                                                        Mon
                                                    </span>

                                                </button>

                                            </SwiperSlide>

                                        )
                                    })
                                }

                            </Swiper>



                        </div>

                        <div className='w-full h-auto flex justify-start gap-2 items-center overflow-x-auto'>
                            <button className='lg:w-16 lg:h-20 w-16 h-20 rounded-lg bg-gray-50 border border-gray-100 hover:border-orange-500 focus:order-orange-500 focus:bg-orange-500/[0.23] hover:bg-orange-500/[0.24] cursor-pointer flex justify-center flex-col items-center '>
                                <span className='text-orange-500 font-bold text-sm lg:text-lg'>
                                    $25
                                </span>
                                <span className='text-[#959595] font-medium text-xs lg:text-sm'>
                                    4hr
                                </span>

                            </button>

                            <button className='lg:w-16 lg:h-20 w-16 h-20 rounded-lg bg-gray-50 border border-gray-100 hover:border-orange-500 focus:order-orange-500 focus:bg-orange-500/[0.23] hover:bg-orange-500/[0.24] cursor-pointer flex justify-center flex-col items-center '>
                                <span className='text-orange-500 font-bold text-sm lg:text-lg'>
                                    $100
                                </span>
                                <span className='text-[#959595] font-medium text-xs lg:text-sm'>
                                    12hr
                                </span>

                            </button>
                        </div>
                    </div>


                    <div className='w-auto h-auto flex flex-col gap-1 justify-start items-start'>
                        <h2 className='text-sm lg:text-md font-semibold text-black'>
                            Posted By
                        </h2>
                        <div className='w-auto h-auto flex justify-start items-start gap-2'>
                            <img src='https://randomuser.me/api/portraits/men/54.jpg' className='lg:w-12 lg:h-12 w-8 h-8  rounded-full' />
                            <div className='w-auto flex flex-col justify-start items-start'>
                                <h1 className='text-gray-900 font-semibold text-xs lg:text-sm'>
                                    Jack Anderson
                                </h1>
                                <Link to="/product-owner/profile" className='text-[10px] lg:text-xs font-medium hover:underline text-orange-500'>
                                    View Profile
                                </Link>

                            </div>
                        </div>
                    </div>

                    <button className='w-full h-8 lg:h-10 bg-orange-500 text-sm lg:text-md flex items-center justify-center font-medium lg:font-semibold text-white transition-all duration-150 hover:opacity-85'>
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Product Description */}
            <DescriptionContainer />

            <span className='w-full h-[1px] bg-[#959595] rounded-full ' />

            {/* Reviews */}
            <ReviewContainer reviews={reviews} />

            <span className='w-full h-[1px] bg-[#959595] rounded-full ' />

            {/* You may also like */}
            <MayLike products={dummyArr} />

            <div>

            </div>
        </div>
    )
}