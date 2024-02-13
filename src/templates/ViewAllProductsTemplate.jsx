import React from 'react'
import { useContext } from "react";
import { CiFilter } from "react-icons/ci";
import FilterSidebar from '../components/AllProducts/FilterSidebar';
import { GlobalContext } from '../context/GlobalContext';

const ViewAllProductsTemplate = ({page}) => {

    const {toggleFilter, filterRef} = useContext(GlobalContext)

  return (
    <div className="relative w-full h-auto min-h-screen px-6 lg:px-14 py-6 lg:py-10 flex justify-start items-start gap-6">
            <button ref={filterRef} onClick={toggleFilter} className=" lg:hidden bg-white rounded-full flex items-center justify-center shadow-lg w-8 h-8 fixed top-16 left-2">
                <CiFilter />
            </button>
            <FilterSidebar />
            {page}
        </div>
  )
}

export default ViewAllProductsTemplate