"use client";

import { useState } from "react";
import Search from "./Search";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="px-2 lg:mx-[30px] xl:mx-50 min-h-screen">
      <div className="relative overflow-hidden max-w-[1820px] min-h-screen md:h-auto rounded-[40px]">
        <div className="flex justify-center transition duration-300 transform min-h-screen" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide-${index}`}
              className="object-cover w-full"
            />
          ))}
        </div>

        <div className="absolute w-full h-full top-0 right-0 rounded-[40px] bg-gradient-to-t from-[#000000e5] to-transparent"></div>
        <div className="absolute px-2 flex justify-center w-full top-0 h-full rounded-[40px] bg-gradient-to-t from-[#22577b4a] to-transparent">
          <Search />
        </div>

        <div className="absolute z-10 top-[45%] right-0 flex flex-col">
          <button className="mb-2 w-10 max-w-[60px]" onClick={prevSlide}>
            <img src="/icons/left-arrow.svg" alt="previous-arrow" className="object-scale-down" />
          </button>
          <button className="w-10 max-w-[60px]" onClick={nextSlide}>
            <img src="/icons/right-arrow.svg" alt="right-arrow" className="object-scale-down" />
          </button>
        </div>
      </div>
    </div>



  );
};

export default Carousel;
