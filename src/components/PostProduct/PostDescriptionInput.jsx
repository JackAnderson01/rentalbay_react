import React from 'react'

const PostDescriptionInput = ({ value, onChange, text }) => {
    return (
        <textarea className='w-full p-2 text-sm h-28 resize-none border border-gray-200 rounded-sm transition-all duration-100 outline-none hover:border-orange-500 focus:border-orange-500' onChange={onChange} value={value} placeholder={text}>
        </textarea>
    )
}

export default PostDescriptionInput