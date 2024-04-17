'use client';

import { useState } from "react";
import { IMAGES } from "@/Constants/constants";
import Carousel from "@/components/Carousel";
import { Container } from "@/components/Shared/Container";
import Title from "@/components/Shared/Title";

export default async function Page() {
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
    <>
      <main className="w-full max-w-[1920px] min-h-screen">
        <Carousel images={IMAGES} />

        <section id="trending">
          <Container className="max-w-[1140px]">
            <Title
              heading={"featured properties"}
              classname='justify-center items-center'
              classSubHeading='font-roboto text-ternary-blue font-[300] text-[11px] 2xl:text-[13px]'
              classHeading='font-roboto text-gray-five font-[900] text-[20px] 2xl:text-[24px]'
              subHeading={"trending"}
            />
            <div className="flex justify-center items-center gap-1 py-10 md:py-[80px] 2xl:py-[111px]">
              <div className="w-1/3 h-1/2 px-3">
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
                    <button className="w-10 max-w-[60px]" onClick={prevSlide}>
                      <img src="/left-arrow.svg" alt="previous-arrow" className="object-scale-down rounded-full bg-[#D4DCFF]" />
                    </button>
                    <button className="w-10 max-w-[60px]" onClick={nextSlide}>
                      <img src="/right-arrow.svg" alt="right-arrow" className="object-scale-down rounded-full bg-[#D4DCFF]" />
                    </button>
                </div>
              </div>
              <div className="w-full"></div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
