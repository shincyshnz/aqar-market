"use client"
import React from "react";
import Button from "../Shared/Button";

const Filter = () => {
  const handleClick = () => { };

  return (
    <div className="flex h-full flex-col justify-center items-center mx-auto px-1 py-12 lg:px-8 max-w-screen-md font-light">
      {/* Heading */}
      <div className="w-full relative mt-10 lg:mt-20">

        <div className="relative max-w-[900px] px-3 font-poppins text-center text-white">
          <div className="absolute max-w-[225px] p-3 xl:left-3 lg:-left-14 lg:-top-20 -top-5">
            <img src="/icons/circle.svg" alt="dotted-circle" className="object-contain w-1/3 md:w-[150px] 2xl:w-full lg:max-w-[225px]" />
          </div>
          <h1 className="text-4xl lg:text-[62px] 2xl:text-[82px] font-[800] tracking-wide ">Find your dream</h1>
          <h1 className="ml-9 text-4xl lg:text-[62px] 2xl:text-[82px] font-[800] lg:mt-10 leading-0">House here</h1>
        </div>
        <div className="my-8 xl:px-8 text-center font-openSans text-white text-sm 2xl:text-[18px] font-light tracking-wide leading-0">
          <p>
            Morbi eget pharetra felis. Nam pulvinar tincidunt purus eget
            convallis. Nulla eget arcu vitae velit suscipit mattis. Quisque at
            molestie odio.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="flex-1 mt-6 w-full max-w-[600px]">
         <div className="flex flex-col justify-center px-5 py-2 h-auto lg:max-h-[335px] max-w-[723px] bg-primary-blue bg-opacity-80 rounded-[55px] border-2 border-white font-poppins tracking-wide">
         {/* Rent-buy */}
         <div className="flex justify-center  gap-4 md:gap-8 md:p-3 mb-4 text-xs lg:text-[16px]">
            <button className="btn text-white bg-secondary-blue ">RENT</button>
            <button className="btn bg-white">BUY</button>
          </div>
           <input
            type="text"
            className="input w-full"
            placeholder="Inter Location"
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4 text-sm">
            <div className="flex flex-col justify-center">
              <label>Residential</label>
              <select className="select mt-2 w-full rounded-md p-2">
                <option>Residential</option>
                <option>Residential</option>
                <option>Residential</option>
              </select>
            </div>

            <div className="flex flex-col justify-center">
              <label>Beds/Bathrooms</label>
              <select className="select mt-2 w-full rounded-md p-2">
                <option>00 Bed / 00 Bathroom</option>
                <option>00 Bed / 00 Bathroom</option>
                <option>00 Bed / 00 Bathroom</option>
              </select>
            </div>

            <div className="flex flex-col justify-center">
              <label>Price</label>
              <select className="select mt-2 w-full rounded-md p-2">
                <option>Price</option>
                <option>Price</option>
                <option>Price</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-4 mb-2">
            <button className="btn w-1/3 text-white text-xs lg:text-base bg-secondary-blue">
              Search Home +
            </button>
          </div>
        </div> 

        <div className="flex justify-center mt-8">
          <Button
            classname="p-3 border-2 border-white rounded-lg text-white"
            text={"Experience The Journey"}
            icons={<img src="/icons/play-icon.svg" alt="play-icon"/>}
            onClick={handleClick} // Make sure handleClick is defined
          />
        </div>

      </div>
    </div>
  );
};

export default Filter;
