import React from 'react'
import ProfileSidebar from '../components/profile/ProfileSidebar';
import { HiMenuAlt2 } from "react-icons/hi";
import  { useContext } from "react";
import { GlobalContext } from '../context/GlobalContext';


const ProfileTemplate = ({page}) => {

    const { toggleFilter, filterRef } = useContext(GlobalContext)

  return (
    <div className="relative w-full h-auto min-h-screen px-6 lg:px-14 py-6 lg:py-10 flex justify-start items-start gap-6">

            <button ref={filterRef} onClick={toggleFilter} className=" lg:hidden bg-white rounded-full flex items-center justify-center shadow-lg w-8 h-8 fixed top-16 left-2">
                <HiMenuAlt2 />
            </button>
            <ProfileSidebar />
            <div className=" lg:w-4/5 w-full min-h-[80vh] h-auto ">
                {page}

            </div>
        </div>
  )
}

export default ProfileTemplate