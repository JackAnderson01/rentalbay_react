import React from 'react'
import { Link } from 'react-router-dom'

const AuthenticatoinRequired = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
    <div className="w-full h-auto lg:gap-4 flex md:flex-row flex-col p-10 justify-center items-center">
      <div
        className="w-full md:w-1/2 h-auto flex flex-col items-center justify-center md:py-24 lg:py-32"
      >
        <h1 className="font-bold text-orange-500 text-3xl lg:text-6xl animate-pulse">AUTHENTICATION</h1>
        
          <span className="text-orange-500 text-2xl lg:text-5xl font-bold">Required!</span>
          <p
          className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
        >
            Login to continue...
        </p>
        <p className="mb-8 text-center text-gray-500 md:text-lg">
          You cannot access this page without authentication!
        </p>
        <Link
          to="/login"
          className="px-6 py-2 text-sm font-semibold text-orange-500 bg-orange-200/[0.2] transition-all duration-150 hover:bg-orange-500 hover:text-white"
          >Login</Link>
      </div>
      <div className="mt-4 w-full md:w-1/2 h-auto">
        <img
          src="/authentication.png"
          alt="img"
          className="object-cover w-full h-full"
        />
      </div>
      </div>
      </div>
  )
}

export default AuthenticatoinRequired