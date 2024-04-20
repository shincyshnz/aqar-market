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
    <div className="xl:w-[1200px] flex flex-col md:flex-row items-center justify-between py-[4rem]">
      <div className="w-full md:w-[250px] h-1/2 px-6">
        <Title
          heading={"for rent"}
          classname='uppercase'
          classSubHeading='font-roboto text-ternary-blue font-[300] text-base 2xl:text-[1.125rem] leading-[8px]'
          classHeading='font-roboto text-gray-five font-[900] text-[1.5rem] 2xl:text-[2rem]'
          subHeading={"property"}
        />
        <p className="font-roboto text-gray-two text-xs 2xl:text-sm font-[300] uppercase">Our Latest listed properties
          and check out the facilities on
          them.
        </p>
        <div className="flex items-center gap-1 mt-4">
          <button className="w-10 max-w-[60px]" onClick={goPrev} >
            <img src="/icons/left-arrow.svg" alt="previous-arrow" className="object-scale-down rounded-full bg-primary-blue" />
          </button>
          <button className="w-10 max-w-[60px]" onClick={goNext}>
            <img src="/icons/right-arrow.svg" alt="right-arrow" className="object-scale-down rounded-full bg-primary-blue" />
          </button>
        </div>
      </div>

      <div className= "w-full md:w-2/3 h-full mx-0 my-4 md:my-0">
        <div className="flex overflow-hidden gap-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            loop={true}
            onSwiper={setSwiper}
            breakpoints={{
              768: {
                slidesPerView: 3 // Change to 3 slides per view for md and above devices
              }
            }}
          >
            {data.map((property, index) => (
              <SwiperSlide key={index}>
                <Link href="#">
                  <div className="w-full h-full rounded-[20px] border-2 border-gray-100 font-roboto font-[700] text-[#3C3C44] overflow-hidden">
                    <img className="w-full 2xl:max-w-[250px]" src={property.img} alt={`slide-${index}`} />
                    <div className="px-2 pt-4 flex flex-col items-center">
                      <div className="text-sm 2xl:text-base">{property.title}</div>
                    
                      <div className="px-2 pt-6 pb-3">
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
