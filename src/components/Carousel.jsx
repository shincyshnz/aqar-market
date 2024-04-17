"use client";

import { useState } from "react";
import Filter from "./Filter";

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
    // <div className="w-full">
    //   <div className="relative max-w-[1920px] lg:mx-[50px] max-h-[974px]">
    //   <div className="overflow-hidden w-full">
    //     <div
    //       className="flex transition duration-300 transform max-w-[1920px]"
    //       style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    //     >
    //       {images.map((image, index) => (
    //         <img
    //           key={index}
    //           src={image}
    //           alt={`slide-${index}`}
    //           className="w-full object-fill rounded-[40px] z-0"
    //         />
    //       ))}
    //     </div>
    //   </div>

    //   <div className="absolute w-full top-0 h-full rounded-[40px] bg-gradient-to-t from-[#0F0F0F] to-transparent"></div>
    //   <div className="absolute flex justify-center w-full top-0 h-full rounded-[40px] bg-gradient-to-t from-[#22577b81] to-transparent">
    //     <Filter />
    //   </div>

    //   <button
    //     className="absolute bottom-1/2 right-0 transform -translate-y-1/2"
    //     onClick={prevSlide}
    //   >
    //     <svg
    //       width="60"
    //       height="61"
    //       viewBox="0 0 60 61"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M0 10.6899C0 5.1671 4.47715 0.689941 10 0.689941H60V60.6899H10C4.47715 60.6899 0 56.2128 0 50.6899V10.6899Z"
    //         fill="white"
    //         fillOpacity="0.7"
    //       />
    //       <path
    //         d="M47 29.4499H16.2041L23.1426 22.789L21.6045 21.2796L12 30.4999L21.6045 39.7202L23.1426 38.2108L16.2041 31.5499H47V29.4499Z"
    //         fill="#22577B"
    //       />
    //     </svg>
    //   </button>
    //   <button
    //     className="absolute top-1/2 right-0 transform -translate-y-1/2"
    //     onClick={nextSlide}
    //   >
    //     <svg
    //       width="60"
    //       height="61"
    //       viewBox="0 0 60 61"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M0 10.6899C0 5.1671 4.47715 0.689941 10 0.689941H60V60.6899H10C4.47715 60.6899 0 56.2128 0 50.6899V10.6899Z"
    //         fill="white"
    //         fillOpacity="0.7"
    //       />
    //       <path
    //         d="M37.3955 21.2796L35.8574 22.789L42.7959 29.4499H12V31.5499H42.7959L35.8574 38.2108L37.3955 39.7202L47 30.4999L37.3955 21.2796Z"
    //         fill="#22577B"
    //       />
    //     </svg>
    //   </button>
    // </div>
    // </div>

    <div className="w-full relative max-w-[1920px] lg:mx-[50px]">
      <div className="overflow-hidden w-full rounded-[40px]">
        <div
          className="flex transition duration-300 transform max-w-[1920px]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide-${index}`}
              className="w-full object-fill rounded-[40px] z-0"
            />
          ))}
        </div>
        <div className="absolute w-full top-0 h-full rounded-[40px] bg-gradient-to-t from-[#0F0F0F] to-transparent"></div>
        <div className="absolute flex justify-center w-full top-0 h-full rounded-[40px] bg-gradient-to-t from-[#22577b81] to-transparent">
          {/* You can place your Filter component here */}
        </div>
      </div>

      <button
        className="absolute bottom-1/2 right-0 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        {/* Your previous slide button SVG */}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        {/* Your next slide button SVG */}
      </button>
    </div>
    
  );
};

export default Carousel;
