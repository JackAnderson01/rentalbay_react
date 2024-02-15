import React from "react";
import { GoKebabHorizontal } from "react-icons/go";

const MyProductSkeleton = () => {
  return (
    <div className="group w-1/2 md:w-1/3  h-56 lg:w-1/4 lg:h-80 cursor-pointer transition-all relative duration-150   hover:bg-gray-100 p-2">
      
      <div className="w-full h-full flex flex-col">
        <span className="w-full h-[60%] object-cover bg-gray-300 animate-pulse" />

        <div className="w-full h-[40%]  flex flex-col gap-2 lg:gap-3 mt-2 lg:mt-4 justify-start items-start">
          <span className="w-1/2 lg:h-3 h-1.5 bg-gray-300 rounded-full animate-pulse" />

          <span className="w-1/3 h-1 lg:h-2 bg-gray-300 rounded-full animate-pulse" />
          <span className="w-1/4 h-1 lg:h-2 bg-gray-300 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default MyProductSkeleton;
