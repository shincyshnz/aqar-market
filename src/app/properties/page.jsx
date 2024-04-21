import PriceRangeSlider from "@/components/PriceRangeSlider/PriceRangeSlider";
import Dropdown from "@/components/Shared/DropDown";

export default function Page() {
  return (
    <section className="px-5 lg:px-56 flex justify-center items-center">
      <div className="font-openSans text-base flex-1 max-w-[25.3rem] min-h-screen shadow-md rounded-[26px] px-11 py-[1.375rem]">
        <p className="mb-6"><span>Filter</span></p>
        {/* Location filter */}
        <div className="flex flex-col gap-3 mb-21">
          <p className="opacity-[50%]">Location</p>
          <Dropdown
            data={"Location"}
            icon={<img src="/icons/location.svg" alt="location icon" />}
          />
        </div>

        {/* All filter */}
        <div className="flex flex-col gap-3 mb-21">
          <p className="opacity-[50%]">Property Type</p>
          <Dropdown
            data={"All"}
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
            <div className=" w-1/2 flex justify-between items-center border-[1px] border-drop-down-gray rounded-lg py-2 focus:ring-gray-300">
              <input
                type="number"
                class="w-full px-4 py-2 focus:outline-none remove-arrow"
                aria-controls="none"
                placeholder="Min"
                id="sqftInput"
              />
              <label className="opacity-[50%] px-4">sqft</label>
            </div>
            <div className="w-1/2 text-black flex justify-between items-center border-[1px] border-drop-down-gray rounded-lg py-2 focus:ring-gray-300">
              <input
                type="number"
                class="w-full px-4 py-2 focus:outline-none remove-arrow"
                aria-controls="none"
                placeholder="Max"
                id="sqftInput"
              />
              <label className="opacity-[50%] px-4">sqft</label>
            </div>
          </div>
        </div>

      </div>

      {/* Main content */}
      <div className="flex-2"></div>
    </section>
  )
}