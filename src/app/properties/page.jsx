import PriceRangeSlider from "@/components/PriceRangeSlider/PriceRangeSlider";
import Dropdown from "@/components/Shared/DropDown";

export default function Page() {
  return (
    <section className="px-5 lg:px-56 flex justify-center items-center">
      <div className="font-openSans text-base flex-1 max-w-[25.3rem] min-h-screen shadow-md rounded-[26px] px-11 py-[1.375rem]">
        <p className="mb-6"><span>Filter</span></p>
        {/* Location filter */}
        <div className="flex flex-col gap-3 mb-[1.3125rem]">
          <p className="opacity-[50%]">Location</p>
          <Dropdown
            data={"Location"}
            icon={<img src="/icons/location.svg" alt="location icon" />}
          />
        </div>

        {/* All filter */}
        <div className="flex flex-col gap-3 mb-[1.3125rem]">
          <p className="opacity-[50%]">Property Type</p>
          <Dropdown
            data={"All"}
          />
        </div>

        {/* Price Range filter */}
        <div className="flex flex-col gap-3 mb-[1.3125rem]">
          <p className="opacity-[50%]">Price Range</p>
          <PriceRangeSlider />
        </div>


      </div>

      {/* Main content */}
      <div className="flex-2"></div>
    </section>
  )
}