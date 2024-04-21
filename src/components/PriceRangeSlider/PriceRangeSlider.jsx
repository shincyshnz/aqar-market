'use client';
import React, { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const PriceRangeSlider = () => {
  const [minMaxPrice, setMinMaxPrice] = useState([100, 1000]);
  const [priceRange, setPriceRange] = useState([100, 500]);

  const handlePriceChange = (value) => {
    // value is the new array with min and max values
    setPriceRange(prev => prev = value);
    console.log(priceRange)
  };

  return (
      <div className="relative mb-6">
    <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
    <RangeSlider id="range-slider-blue" min={minMaxPrice[0]} max={minMaxPrice[1]} step={1} value={priceRange} onInput={handlePriceChange} />
    
    <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">{`AED ${minMaxPrice[0]}`}</span>
    {/* <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{priceRange[0]}</span> */}
    {/* <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">{priceRange[1]}</span> */}
    <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">{`AED ${minMaxPrice[1]}`}</span>
</div>
  
  );
};

export default PriceRangeSlider;
