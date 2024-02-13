import React, { useContext, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { GlobalContext } from "../../context/GlobalContext";


const FilterSidebar = () => {
    const {toggleFilter, filterRef} = useContext(GlobalContext)


    const [rating, setRating] = useState("1");
    const handleStarClick = (newRating) => {
        setRating(newRating);
    };

  return (
    <div ref={filterRef} className="w-72 h-screen fixed top-14 left-0 -translate-x-full lg:translate-x-0 transition-all duration-200 lg:static lg:w-1/4 lg:h-auto flex flex-col justify-start items-start p-4 gap-12 bg-white lg:border-2 border-gray-200 overflow-y-auto">

                <button ref={filterRef} onClick={toggleFilter} className="w-8 h-8 lg:hidden rounded-full flex justify-center items-center bg-white shadow-md absolute top-2 right-2">
                    <MdKeyboardArrowLeft />
                </button>

                {/* Categories */}
                <div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-lg uppercase font-bold text-gray-900">
                        Categories
                    </h1>
                    <ul className="w-full h-auto flex flex-col gap-2 justify-start items-start">
                        <li className="w-full pr-4">
                            <button type="button" onClick={() => { document.getElementById('category-dropdown-1').classList.toggle('hidden'); document.getElementById('arrow').classList.toggle('rotate-180') }} className="flex items-center w-full p-2 text-[#959595] font-medium text-md transition duration-75  rounded-lg group " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                {/* <FaCarAlt className='text-xl'/> */}
                                <span className="flex-1 ms-3 text-left rtl:text-right  whitespace-nowrap">Category 1</span>
                                <MdOutlineKeyboardArrowDown id='arrow' className='transition-all duration-100 text-lg' />
                            </button>
                            <ul id="category-dropdown-1" className="hidden transition-all duration-100 space-y-1">
                                <li>
                                    <button id='Corporate Ride' style={{ textDecoration: 'none' }} className="flex items-center w-full  text-[#959595] font-medium p-1 text-md transition duration-75 rounded-lg pl-11  ">Sub-Category 1</button>
                                </li>
                                <li>
                                    <button id='Medical Ride' style={{ textDecoration: 'none' }} className="flex items-center w-full p-1 text-[#959595] font-medium text-md transition duration-75 rounded-lg pl-11  ">Sub-Category 2</button>
                                </li>

                            </ul>
                        </li>

                        <li className="w-full pr-4">
                            <div className="flex items-center w-full p-2 text-[#959595] font-medium text-md transition duration-75  rounded-lg group">
                                <span className="flex-1 ms-3 text-left rtl:text-right  whitespace-nowrap">Category 2</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Price */}
                <div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-lg uppercase font-bold text-gray-900">
                        Price
                    </h1>

                    <input type="range" className="accent-orange-500 w-full bg-gray-50" min={10} max={10000} />
                    <div className="w-full flex justify-between items-center">
                        <span className="text-xs font-bold text-orange-500">
                            $10
                        </span>

                        <span className="text-xs font-bold text-orange-500">
                            $10000
                        </span>

                    </div>
                </div>


                {/* Location */}
                <div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-lg uppercase font-bold text-gray-900">
                        Location
                    </h1>

                    <div className="w-full h-auto flex justify-center items-center gap-2">
                        <input type="text" className="w-[48%] h-12 rounded-md  px-3 outline-none border border-gray-300 transition-all duration-150 focus:ring-2 focus:ring-gray-300" placeholder="City" />
                        <input type="text" className="w-[48%] h-12 rounded-md  px-3 outline-none border border-gray-300 transition-all duration-150 focus:ring-2 focus:ring-gray-300" placeholder="State" />

                    </div>
                </div>


                {/* Ratings */}
                <div className="w-full h-auto flex flex-col gap-2 justify-start items-start">
                    <h1 className="text-lg uppercase font-bold text-gray-900">
                        Ratings
                    </h1>

                    <div className="w-full h-auto flex justify-start items-center gap-1 ">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <IoStar
                                key={star}
                                onClick={() => handleStarClick(star)}
                                className={`hover:text-yellow-500 ${rating >= star ? "text-yellow-500" : "text-gray-200"
                                    } text-xl cursor-pointer`}
                            />
                        ))}
                    </div>
                </div>
            </div>
  )
}

export default FilterSidebar