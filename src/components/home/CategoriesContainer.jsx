import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import CategoryCard from "./CategoryCard";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CategorySkeleton from "./CategorySkeleton";

const CategoriesContainer = () => {
  const { baseUrl } = useContext(GlobalContext);

  const [categories, setCategories] = useState([]);
  const dummyArr = [1,2,3,4,5,6,7,8,9,0]
  const [categoriesLoading, setCategoriesLoading] = useState(false);

  const getCategories = () => {
    setCategoriesLoading(true);
    const headers = {
      "ngrok-skip-browser-warning": true,
    };
    axios.get(`${baseUrl}/categories/list`, { headers }).then(
      (response) => {
        setCategories(response?.data?.data?.categories);
        setCategoriesLoading(false);
      },
      (error) => {
        setCategoriesLoading(false);
      }
    );
  };

  useEffect(() => {
    getCategories();
  }, []);

  const [windowWidth, setWindowWidth] = useState(9);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 1000);

    return () => {
      // Clear the timeout when the component is unmounted
      clearTimeout(timeoutId);
    };
  }, []); // Run this effect only once on mount

  // Rest of your component...

  // Determine slidesPerView based on windowWidth
  const slidesPerView =
    windowWidth > 1500
      ? 9
      : windowWidth > 1100
      ? 8
      : windowWidth > 720
      ? 6
      : windowWidth > 320
      ? 4
      : 3;

  return (
    <div className="w-full h-auto my-4 flex flex-col px-4 lg:px-10 justify-start gap-4 items-start">
      <div className="w-full h-10 flex justify-between items-center">
        <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
          Top Categories
        </span>
      </div>

      <div className="w-full h-auto flex  items-center justify-center gap-4 ">
        <Swiper
          // install Swiper modules
          spaceBetween={50}
          slidesPerView={slidesPerView}
          className="relative w-full"
        >
          {categoriesLoading
            ? dummyArr?.map((item) => {
                return (
                  <SwiperSlide key={item}>
                    <CategorySkeleton />
                  </SwiperSlide>
                );
              })
            : categories.map((category, key) => {
                return (
                  <SwiperSlide key={key}>
                    <CategoryCard category={category} />
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoriesContainer;
