import React from 'react'

const DescriptionContainer = ({description}) => {
    return (
        <div className='w-full flex flex-col justify-start items-start gap-1'>
            <h1 className='text-lg font-bold text-black'>
                Description
            </h1>

            <p className='text-[#959595] text-sm font-normal'>
                {description}
            </p>
        </div>
    )
}

export default DescriptionContainer