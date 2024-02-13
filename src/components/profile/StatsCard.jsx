import React from 'react'

const StatsCard = ({percent, title}) => {
  return (
    <div className='w-auto flex flex-col justify-center items-center h-auto gap-2'>
        <span className='text-2xl font-extrabold text-black'>
            {percent}%
        </span>
        <div className='w-28 h-[2px] rounded-full bg-gray-100 flex justify-start items-center'>
            <span className='w-1/2 bg-orange-500 h-full'/>
        </div>
        <span className='text-sm font-medium text-[#959595]'>
            {title}
        </span>
    </div>
  )
}

export default StatsCard