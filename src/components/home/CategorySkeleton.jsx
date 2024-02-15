import React from "react";

const CategorySkeleton = () => {
  return (
    <div className="group w-20 h-32 lg:w-40 lg:h-40 flex flex-col gap-2 items-center justify-center">
      <span className="w-16 h-16 lg:w-28 lg:h-28 bg-gray-300 rounded-full animate-pulse" />

      <span className="text-sm capitalize lg:text-lg font-semibold h-2 w-1/2 bg-gray-300 rounded-full animate-pulse text-gray-500 group-hover:text-gray-900" />
    </div>
  );
};

export default CategorySkeleton;
