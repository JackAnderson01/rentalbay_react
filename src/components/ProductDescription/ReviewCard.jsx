import React from 'react'
import { IoStar } from 'react-icons/io5'

const ReviewCard = ({review}) => {
    return (
        <div className='w-full h-auto rounded-xl p-6 flex flex-col gap-4 justify-start items-start bg-gray-100'>
            <div className='w-auto flex justify-start items-center gap-1'>
                <IoStar

                    className={`text-yellow-500
                        } text-lg cursor-pointer`}
                />

                <IoStar

                    className={`text-yellow-500
                        } text-lg cursor-pointer`}
                />

                <IoStar

                    className={`text-yellow-500
                        } text-lg cursor-pointer`}
                />

                <IoStar

                    className={`text-yellow-500
                        } text-lg cursor-pointer`}
                />

                <IoStar

                    className={`text-yellow-500
                        } text-lg cursor-pointer`}
                />

            </div>

            <span className='text-sm font-normal text-gray-800'>
                {review?.description}
            </span>

            <div className='w-auto flex justify-start items-center gap-2'>
                <img src={review?.image} className=' w-9 h-9  rounded-full' />
                <span className='text-md font-semibold text-gray-900'>
                    {review?.name}
                </span>
            </div>

        </div>
    )
}

export default ReviewCard