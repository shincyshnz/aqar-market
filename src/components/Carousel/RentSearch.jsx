"use client";
import React, { useState } from "react";
import Input from "../Input/Input";
import { FaLocationDot } from "react-icons/fa6";

const RentSearch = () => {
  const [filterData, setFilterData] = useState({
    location: "",
  });

  const handleLocationInputChange = (e) => {
    const { value } = e.target;
    setFilterData((prev) => ({
      ...prev,
      location: value,
    }));
  };

  return (
    <form name="filter">
      <Input
        type="text"
        name="location"
        id="location"
        icons={<FaLocationDot className="text-secondary-blue" />}
        placeholder="Inter Location"
        value={filterData.location}
        onChange={handleLocationInputChange}
        inputClass="w-full focus:outline-0 font-semibold font-base placeholder:text-black"
      />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-4 mb-7 text-sm font-openSans">
        <div className="flex flex-col justify-center">
          <label className="font-semibold">Residential</label>
          <select
            placeholder="asdds"
            className="select text-gray-four mt-2 w-full rounded-md p-2 focus:outline-0"
          >
            <option>Residential</option>
            <option>Residential</option>
            <option>Residential</option>
          </select>
        </div>

        <div className="flex flex-col justify-center">
        <label className="font-semibold">Beds/Bathrooms</label>
          <select className="text-gray-four select mt-2 w-full rounded-md p-2 focus:outline-0">
            <option>00 Bed / 00 Bathroom</option>
            <option>00 Bed / 00 Bathroom</option>
            <option>00 Bed / 00 Bathroom</option>
          </select>
        </div>

        <div className="flex flex-col justify-center">
        <label className="font-semibold">Price</label>
          <select className="text-gray-four select mt-2 w-full rounded-md p-2 focus:outline-0">
            <option>Price</option>
            <option>Price</option>
            <option>Price</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center mb-7">
        <button className="btn w-1/3 text-white text-xs lg:text-base bg-secondary-blue">
          Search Home +
        </button>
      </div>
    </form>
  );
};

export default RentSearch;
