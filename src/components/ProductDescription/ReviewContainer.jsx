import React from 'react'
import ReviewCard from './ReviewCard'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const ReviewContainer = ({ reviews }) => {
    return (
        <div className='w-full flex flex-col justify-start items-start gap-2'>
            <h1 className='text-lg font-bold text-black'>
                Reviews ({reviews?.length})
            </h1>

            {
                reviews?.map((review, key) => {
                    return (
                        <ReviewCard key={key} review={review} />
                    )
                })
            }

            <div className='w-full h-auto flex justify-center items-center gap-3'>

                <button className='text-sm font-semibold text-orange-500'>
                    <MdOutlineKeyboardArrowLeft className='text-lg'/>
                </button>

                {
                    reviews?.map((item, key) => {
                        return (
                            <button key={key} className='text-sm font-semibold text-black hover:text-orange-500'>
                                {key + 1}
                            </button>
                        )
                    })
                }

                <button className='text-sm font-semibold text-orange-500'>
                    <MdOutlineKeyboardArrowRight className='text-lg'/>
                </button>


            </div>
        </div>
    )
}

export default ReviewContainer