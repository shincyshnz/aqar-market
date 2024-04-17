"use client"
import React from "react";
import Circle from "./Shared/Circle";
import Button from "./Shared/Button";

const Filter = () => {
  const handleClick = () => {};

  return (
    <div className="flex-col m-auto px-4 sm:px-6 lg:px-8 max-w-screen-md font-light">
      {/* Heading */}
      <div className="relative w-full p-5">
        <div className="absolute -top-14 -left-14">
          <Circle />
        </div>
        <div className="text-center h-[180px] text-white font-extrabold tracking-wider text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none">
          <h1>Find your dream</h1>
          <h1 className="ml-4 sm:ml-14">House here</h1>
        </div>
        <div className="mt-2 text-center font-openSans text-white text-base sm:text-lg font-extralight tracking-wide leading-loose">
          <p>
            Morbi eget pharetra felis. Nam pulvinar tincidunt purus eget
            convallis. Nulla eget arcu vitae velit suscipit mattis. Quisque at
            molestie odio.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="flex-col p-5 mx-auto mt-8 max-h-[335px] max-w-[723px] bg-primary-blue bg-opacity-[80%] rounded-[55px] border-4 border-white font-poppins tracking-wide">
        <div className="flex-center p-3 gap-4 md:gap-8 mb-4">
          <button className="btn text-white bg-secondary-blue">RENT</button>
          <button className="btn bg-white">BUY</button>
        </div>
        <input
          type="text"
          className="input w-full"
          placeholder="inter Location"
        />

        <div className="flex gap-3 mt-4 text-[14px]">
          <div className="flex-col items-center">
            <label>Residential</label>
            <select className="w-full p-3 rounded-md mt-2 focus:none text-gray-four">
              <option>Residential</option>
              <option>Residential</option>
              <option>Residential</option>
            </select>
          </div>

          <div className="flex-col items-center">
            <label>Beds/Bathrooms</label>
            <select className="w-full p-3 rounded-md mt-2 focus:none text-gray-four">
              <option>00 Bed / 00 Bathroom</option>
              <option>00 Bed / 00 Bathroom</option>
              <option>00 Bed / 00 Bathroom</option>
            </select>
          </div>

          <div className="flex-col items-center">
            <label>Price</label>
            <select className="w-full p-3 rounded-md mt-2 focus:none text-gray-four">
              <option>Price</option>
              <option>Price</option>
              <option>Price</option>
            </select>
          </div>
        </div>

        <div className="flex-center mt-4">
          <button className="btn text-white bg-secondary-blue">
            Search Home +
          </button>
        </div>
      </div>

      <div className="video-button flex-center mt-8">
        <Button
          classname="p-3 border-[1px] border-white rounded-lg text-white"
          text={"Experience The Journey"}
          icons={"play-icon.svg"}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Filter;
