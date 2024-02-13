import React from 'react'

const PriceInput = ({ type, value, onChange, text }) => {
    return (
        <input type={type} value={value} onChange={onChange} placeholder={text} className='w-1/2 h-10 border border-gray-200 text-gray-900 text-sm font-medium px-3 rounded-sm transition-all duration-100 outline-none hover:border-orange-500 focus:border-orange-500' />

    )
}

export default PriceInput