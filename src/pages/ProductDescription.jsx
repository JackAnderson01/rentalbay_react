import React, { useRef, useState, useEffect, useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Link, useNavigate, useParams } from 'react-router-dom';
import ImageGallery from '../components/ProductDescription/ImageGallery';
import DescriptionContainer from '../components/ProductDescription/DescriptionContainer';
import ReviewContainer from '../components/ProductDescription/ReviewContainer';
import MayLike from '../components/ProductDescription/MayLike';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import axios from "axios"
import { GlobalContext } from '../context/GlobalContext';
// import { differenceInDays, addDays, format } from 'date-fns';


export default function ProductDescription() {

    const params = useParams();
    const navigate = useNavigate()
    const { baseUrl, setError } = useContext(GlobalContext)

    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState({})


    const getIndividualProduct = () => {
        const token = localStorage.getItem("token");


        if (token) {
            const headers = {
                'ngrok-skip-browser-warning': true,
            };

            axios
                .get(`${baseUrl}/products/${params?.id}`, { headers })
                .then((res) => {
                    console.log(res)
                    setResponse(res?.data?.data?.product)
                })
                .catch((error) => {
                    setError(error?.response?.data?.error)
                });
        } else {
            navigate("/login/");
        }
    }

    useEffect(() => {
        getIndividualProduct()
    }, [])

    // const generateDateRange = (from, till) => {
    //     const dates = [];
    //     let currentDate = new Date(from);

    //     while (currentDate <= till) {
    //         dates.push(format(currentDate, 'dd'));
    //         currentDate = addDays(currentDate, 1);
    //     }

    //     return dates;
    // };


    const [dates, setDates] = useState([]);

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

    // useEffect(() => {
    //     setDates(generateDateRange(new Date(response?.available_from), new Date(response?.available_till)))
    // }, [response])



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

                <span className='text-[#959595] capitalize flex justify-start items-center text-sm font-semibold transition-all duration-150 hover:text-black'>
                    {response?.sub_category?.category?.name}
                    <MdOutlineKeyboardArrowRight />

                </span>
                <span className='text-[#959595] capitalize flex justify-start items-center text-sm font-semibold transition-all duration-150 hover:text-black'>
                    {response?.sub_category?.name}

                    <MdOutlineKeyboardArrowRight />

                </span>
                <span className='capitalize text-sm font-semibold transition-all duration-150 text-black'>
                    {response?.name}
                </span>
            </div>

            <div className="w-full h-auto flex flex-col lg:flex-row justify-start items-start gap-6">
                <ImageGallery images={response?.images} />

                <div className='w-full lg:w-[48%] h-auto flex flex-col justify-start gap-4 items-start'>

                    <div className='w-auto h-auto flex flex-col  justify-start items-start'>

                        <h1 className='text-2xl lg:text-3xl font-bold text-gray-900'>
                            {response?.name}
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
                            {response?.address},{response?.city},{response?.state},USA
                        </span>
                    </div>


                    <div className='w-auto h-auto flex flex-col gap-1 justify-start items-start'>
                        <h1 className='text-sm lg:text-lg font-bold text-[#181919]'>
                            Hourly Rate
                        </h1>

                        <div className='w-auto h-auto flex justify-start items-center gap-6'>
                            <div className='flex justify-start items-center gap-1'>
                                <span className='text-sm lg:text-xl font-bold text-orange-500'>
                                    ${response?.four_hours_rate}
                                </span>
                                <span className='text-sm lg:text-xl font-medium text-[#959595]'>
                                    /4hr
                                </span>
                            </div>

                            <div className='flex justify-start items-center gap-1'>
                                <span className='text-sm lg:text-xl font-bold text-orange-500'>
                                    ${response?.twelve_hours_rate}

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
                                    dates.map((item, key) => {
                                        console.log(item)
                                        return (
                                            <SwiperSlide key={key}>

                                                <button className='lg:w-16 lg:h-20 w-16 h-20 rounded-lg bg-gray-50 border border-gray-100 hover:border-orange-500 focus:order-orange-500 focus:bg-orange-500/[0.23] hover:bg-orange-500/[0.24] cursor-pointer flex justify-center flex-col items-center '>
                                                    <span className='text-orange-500 font-bold text-md lg:text-lg'>
                                                        {item}
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
                                ${response?.four_hours_rate}
                                </span>
                                <span className='text-[#959595] font-medium text-xs lg:text-sm'>
                                    4hr
                                </span>

                            </button>

                            <button className='lg:w-16 lg:h-20 w-16 h-20 rounded-lg bg-gray-50 border border-gray-100 hover:border-orange-500 focus:order-orange-500 focus:bg-orange-500/[0.23] hover:bg-orange-500/[0.24] cursor-pointer flex justify-center flex-col items-center '>
                                <span className='text-orange-500 font-bold text-sm lg:text-lg'>
                                ${response?.twelve_hours_rate}
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
                                    {response?.owner?.name}
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
            <DescriptionContainer description={response?.description} />

            <span className='w-full h-[1px] bg-[#959595] rounded-full ' />

            {/* Reviews */}
            {/* <ReviewContainer reviews={reviews} /> */}

            <span className='w-full h-[1px] bg-[#959595] rounded-full ' />

            {/* You may also like */}
            {/* <MayLike products={dummyArr} /> */}

            <div>

            </div>
        </div>
    )
}