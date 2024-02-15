import React from 'react'
import BtnLoader from '../global/BtnLoader'

const AuthButton = ({onClick, text, loading}) => {
  return (
    <button type='submit' onClick={onClick} className='bg-orange-500 text-white cursor-pointer font-bold mt-4 text-sm h-10 w-full flex items-center justify-center rounded-xl outline-none border-none hover:opacity-90'>
        {
          loading ? <BtnLoader /> : text
        }
        
        
    </button>
  )
}

export default AuthButton