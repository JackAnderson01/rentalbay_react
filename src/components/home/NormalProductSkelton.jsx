import React from "react";

const NormalProductSkelton = () => {
  return (
    <div className="group w-auto h-56  lg:h-80 cursor-pointer transition-all duration-150 bg-gray-50  hover:bg-gray-100 p-2">
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

export default NormalProductSkelton;
