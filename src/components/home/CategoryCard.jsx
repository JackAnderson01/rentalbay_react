import React from 'react'

const CategoryCard = ({name, image}) => {
  return (
    <div className='group w-20 h-32 lg:w-40 lg:h-40 flex flex-col gap-2 items-center justify-center'>
        <div className='w-16 h-16 lg:w-28 lg:h-28 rounded-full border-2 border-gray-300 group-hover:scale-110'>
            <img src={image} className='w-full h-full object-cover rounded-full '/>
        </div>

        <span className='text-sm lg:text-lg font-semibold text-gray-500 group-hover:text-gray-900'>
            {name}
        </span>

    </div>
  )
}

export default CategoryCard