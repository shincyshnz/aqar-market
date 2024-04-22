"use client";
import { useState } from "react";
import { FEATURES_FILTER, STYLE_FILTER } from "@/Constants/constants";
import Input from "@/components/Input/Input";
import PriceRangeSlider from "@/components/PriceRangeSlider/PriceRangeSlider";
import Dropdown from "@/components/Shared/DropDown";
import Button from "@/components/Shared/Button";

export default function Page() {
  const [selectedFeatures, setSelectedFeatures] = useState(
    FEATURES_FILTER.map((item) => ({ ...item, isChecked: false }))
  );
  const [selectedStyles, setSelectedtyles] = useState(
    STYLE_FILTER.map((item) => ({ ...item, isChecked: false }))
  );

  // Initial filter data object
  const INITIAL_FILTER_DATA = {
    location: "",
    propertyType: "",
    priceRange: [],
    minSqft: "",
    maxSqft: "",
    propertyStatus: "",
    features: [],
    styles: [],
  };
  const [filterData, setFilterData] = useState(INITIAL_FILTER_DATA);

  const updateFilterData = (data) => {
    setFilterData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleCheckBoxChange = (id) => {
    const updatedFeatures = selectedFeatures.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setSelectedFeatures(updatedFeatures);
    updateFilterData({
      features: updatedFeatures.filter((item) => item.isChecked),
    });
  };

  const handleStyleCheckBoxChange = (id) => {
    const updatedStyles = selectedStyles.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setSelectedtyles(updatedStyles);
    updateFilterData({
      styles: updatedStyles.filter((item) => item.isChecked),
    });
  };

  console.log(filterData);

  return (
    <section className="px-5 lg:px-56 flex justify-center items-center">
      <div className="font-openSans font-normal text-base flex-1 max-w-[25.3rem] min-h-screen shadow-md rounded-[26px] px-11 py-[1.375rem]">
        <p className="mb-6">
          <span>Filter</span>
        </p>

        {/* Location filter */}
        <div className="flex flex-col gap-3 mb-21">
          <p className="opacity-[50%]">Location</p>
          <Dropdown
            buttonText={"Location"}
            icon={<img src="/icons/location.svg" alt="location icon" />}
            options = {["Dubai", "Abudhabi", "Sharjah", "Rak"]}
          />
        </div>

        {/* All filter */}
        <div className="flex flex-col gap-3 mb-21">
          <p className="opacity-[50%]">Property Type</p>
          <Dropdown
            buttonText={"All"}
            options = {["all", "town house", "villa"]}
          />
        </div>

        {/* Price Range filter */}
        <div className="flex flex-col gap-3 mb-21">
          <p className="opacity-[50%]">Price Range</p>
          <PriceRangeSlider />
        </div>

        <hr className="mb-21" />

        {/* Size filter */}
        <div className="flex flex-col gap-3 mb-21">
          <p className="opacity-[50%]">Size</p>
          <div className="flex items-center justify-center gap-5">
            {/* <input type="text" placeholder="Min" /> */}
            <div className="w-1/2 flex justify-between items-center border-[1px] border-drop-down-gray rounded-lg py-2 focus:ring-gray-300">
              <Input
                type="number"
                className="w-full px-4 py-2 focus:outline-none remove-arrow"
                aria-controls="none"
                placeholder="Min"
                id="sqftInputMin"
              />
              <label className="opacity-[50%] px-4">sqft</label>
            </div>
            <div className="w-1/2 text-black flex justify-between items-center border-[1px] border-drop-down-gray rounded-lg py-2 focus:ring-gray-300">
              <Input
                type="number"
                className="w-full px-4 py-2 focus:outline-none remove-arrow"
                aria-controls="none"
                placeholder="Max"
                id="sqftInputMax"
              />
              <label className="opacity-[50%] px-4">sqft</label>
            </div>
          </div>
        </div>

        <hr className="mb-21" />

        {/* Status of property filter */}
        <div className="flex flex-col gap-3 mb-21">
          <p className="opacity-[50%]">Status of Property</p>
          <div className="w-full flex flex-col items-between">
            <div className="flex items-center mb-4">
              <Input
                id="default-radio-1"
                type="radio"
                value="rent"
                name="default-radio"
                className="w-4 h-4 text-secondary-blue focus:outline-none accent-secondary-blue"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm w-full flex items-center justify-between font-medium dark:text-gray-300"
              >
                <p>For Rent</p>
                <p className="opacity-50">(200)</p>
              </label>
            </div>
            <div className="flex items-center mb-4">
              <Input
                id="default-radio-1"
                type="radio"
                value="sale"
                name="default-radio"
                className="w-4 h-4 text-secondary-blue focus:outline-none accent-secondary-blue"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm w-full flex items-center justify-between font-medium dark:text-gray-300"
              >
                <p>For Sale</p>
                <p className="opacity-50">(800)</p>
              </label>
            </div>
          </div>
        </div>

        <hr className="mb-21" />

        {/* Features filter */}
        <div className="flex flex-col gap-3 mb-21">
          <p className="opacity-[50%]">Features</p>
          <div className="flex flex-wrap w-full">
            {selectedFeatures.map((item, index) => (
              <div key={index} className="w-1/2 flex items-center mb-5">
                <Input
                  id="default-checkbox"
                  type="checkbox"
                  value={item.featureName}
                  className="w-6 h-6 accent-secondary-blue"
                  checked={item.isChecked}
                  onChange={() => handleCheckBoxChange(item.id)}
                />
                <label
                  htmlFor="default-checkbox"
                  className={`ms-4 text-base font-normal ${
                    item.isChecked ? "text-secondary-blue" : ""
                  }`}
                >
                  {item.featureName}
                </label>
              </div>
            ))}
          </div>
        </div>

        <hr className="mb-21" />

        {/* Style filter */}
        <div className="flex flex-col gap-3 mb-21">
          <p className="opacity-[50%]">Style</p>
          <div className="flex flex-wrap w-full px-[1.125rem]">
            {selectedStyles.map((item, index) => (
              <div key={index} className="w-1/2 flex items-center mb-5">
                <Input
                  id="default-checkbox"
                  type="checkbox"
                  value={item.styleName}
                  className="w-6 h-6 accent-secondary-blue"
                  checked={item.isChecked}
                  onChange={() => handleStyleCheckBoxChange(item.id)}
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 text-base font-normal dark:text-gray-300"
                >
                  {item.styleName}
                </label>
              </div>
            ))}
          </div>
        </div>
        <hr className="mb-21" />

        {/* Filter Button */}
        <Button 
          classname="bg-secondary-blue rounded-[4px] w-full h-[50px] font-semibold text-white" 
          text="Filter" 
        />
      </div>

      {/* Main content */}
      <div className="flex-2"></div>
    </section>
  );
}
