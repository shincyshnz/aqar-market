'use client';

import { useState } from 'react';
// import SwiperCore, { Navigation } from 'swiper/core';
// import SwiperCore from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Title from '../Shared/Title';
import Link from 'next/link';

// Initialize Swiper Navigation
// SwiperCore.use([Navigation]);


const SwiperCards = ({ data }) => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="w-full h-full md:max-w-[1140px] flex flex-col md:flex-row justify-center gap-1 py-10 md:py-[80px] 2xl:py-[111px]">
      <div className="w-full md:w-1/3 h-1/2 px-6">
        <Title
          heading={"for rent"}
          classname=''
          classSubHeading='font-roboto text-ternary-blue font-[300] text-[11px] 2xl:text-[13px]'
          classHeading='font-roboto text-gray-five font-[900] text-[20px] 2xl:text-[24px]'
          subHeading={"property"}
        />
        <p className="font-roboto text-gray-two text-xs 2xl:text-sm font-[300]">Our Latest listed properties
          and check out the facilities on
          them.
        </p>
        <div className="flex items-center gap-1 mt-4">
          <button className="w-10 max-w-[60px]" onClick={goPrev} >
            <img src="/icons/left-arrow.svg" alt="previous-arrow" className="object-scale-down rounded-full bg-[#D4DCFF]" />
          </button>
          <button className="w-10 max-w-[60px]" onClick={goNext}>
            <img src="/icons/right-arrow.svg" alt="right-arrow" className="object-scale-down rounded-full bg-[#D4DCFF]" />
          </button>
        </div>
      </div>

      <div className="w-full md:w-2/3 h-full md:mx-auto">
        <div className="flex overflow-hidden gap-2 max-w-[1140px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={5}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            loop={true}
            onSwiper={setSwiper}
          >
            {data.map((property, index) => (
              <SwiperSlide key={index}>
                <Link href="#">
                  <div className="h-full rounded-[20px] border-2 border-gray-100 font-roboto font-[700] text-[#3C3C44] overflow-hidden">
                    <img className="w-full h-[158px] max-w-[250px]" src={property.img} alt={`slide-${index}`} />
                    <div className="px-6 py-4">
                      <div className="text-sm 2xl:text-base mb-3">{property.title}</div>
                    </div>
                    <div className="px-6 pt-2 pb-4">
                      <div className="flex justify-center items-center gap-2">
                        <img src="/icons/area-icon.svg" className='w-[12px] h-[12px]' alt="area" />
                        <span className="inline-block text-xs">{`${property.area} sq`}
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full p-1">
                        </span>

                        <img src="/icons/bed-icon.svg" className='w-[12px] h-[12px]' alt="beds" />
                        <span className="inline-block text-xs">{`${property.beds}`}
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full p-1">
                        </span>

                        <img src="/icons/bath-icon.svg" className='w-[12px] h-[12px]' alt="baths" />
                        <span className="inline-block text-xs">{`${property.baths}`}
                        </span>
                      </div>

                    </div>
                  </div>
                </Link>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default SwiperCards;
