import { IMAGES, PROPERTY_CATEGORIES, TITLE_CSS } from "@/Constants/constants";
import Carousel from "@/components/Carousel/Carousel";
import SwiperCards from "@/components/Carousel/SwiperCards";
import { Container } from "@/components/Shared/Container";
import Title from "@/components/Shared/Title";
import Image from "next/image";

export default async function Page() {

  return (
    <>
      <main className="w-full max-w-[1920px] min-h-screen">
        <Carousel images={IMAGES} />

        {/* section -1 */}
        <section id="trending">
          <Container className="w-full">
            <Title
              subHeading={"trending"}
              heading={"featured property"}
              classname={`${TITLE_CSS.classname} uppercase`}
              classSubHeading={TITLE_CSS.classSubHeading}
              classHeading={`${TITLE_CSS.classHeading} font-[900]`}
            />
            <SwiperCards data={PROPERTY_CATEGORIES} />
            <hr />
            <SwiperCards data={PROPERTY_CATEGORIES} />
          </Container >
        </section>

        {/* section -2 */}
        <section id="cities">
          <div
            className="h-full 2xl:h-[860px] relative overflow-hidden rounded-lg py-12 text-center"
            style={{
              backgroundImage: "url('/featured-section.png')",
              backgroundSize: '100% 50%',
              backgroundRepeat: 'no-repeat',
            }}
          >

            <Title
              heading={"explore our cities"}
              subHeading={"find properties"}
              classname={TITLE_CSS.classname}
              classSubHeading={`${TITLE_CSS.classSubHeading} uppercase`}
              classHeading={`${TITLE_CSS.classHeading} capitalize font-[600]`}
            />
            <div className="mx-auto mt-16 max-w-[1200px]">
              <div className="flex flex-wrap md:flex-no-wrap items-center justify-center gap-5 2xl:gap-[3.25rem]">
                {[1, 2, 3].map((index) => (
                  <div className="max-w-[23.125rem] max flex flex-col items-center gap-2 p-[0.68rem] border-[1px] border-gray-border rounded-[4px]" key={index}>
                    <img src='/explore-properties-1.png' className="rounded-img object-cover w-[21.25rem]" />
                    <div className="w-full min-h-[6.43rem] flex justify-between items-center px-5">
                      <Title
                        heading="Dubai"
                        subHeading="23 properties"
                        classname='font-[600] text-left'
                        classSubHeading='text-gray-four font-[400] text-sm'
                        classHeading='font-[600] text-base mt-3'
                      />

                      <button className="w-10 max-w-[60px]">
                        <img src="/icons/right-arrow.svg" alt="right-arrow" className="object-scale-down rounded-full bg-[#D4DCFF]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div >
          </div>
        </section>

        {/* section -3 */}
        <section id="about" >
          <div className="px-3 md:px-20 2xl:px-[18.5rem]">

            <div className="flex flex-wrap flex-col md:flex-row">
              <div className="relative flex-1">
                <div className="relative text-gray-500 md:h-[28rem] xl:h-[42rem]">
                  <img src="about-img-box-top.png" className="z-20 relative top-[10%] w-[50%] md:w-2/4 xl:w-auto" alt="about-style1-img-2" />
                  <img src="/shape-1.png" className="z-10 w-1/6 xl:w-auto absolute top-[2rem] xl:top-[1.25rem] left-[1.75rem]" alt="shape-1" />

                  <div className="absolute w-[1rem] xl:w-[13.7rem] left-[4.9rem] top-[15rem] xl:top-[32rem]">
                    <svg className="object-contain w-32 h-32 xl:w-[220px] xl:h-[220px]" fill="none" viewBox="0 0 225 225" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="223" height="223" rx="111.5" stroke="#E7E7E7" stroke-width="2" stroke-dasharray="6 4" />
                    </svg>
                  </div>

                  <div class="z-40 relative w-40 h-40 xl:w-60 xl:h-60 left-[50%] md:left-[14rem] xl:left-[26rem] bottom-36 md:bottom-24 xl:bottom-48 bg-blue-300 rounded-full flex justify-center items-center">
                    <svg width="220" height="220" fill="none" viewBox="0 0 225 225" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="223" height="223" rx="111.5" stroke="#E7E7E7" stroke-width="2" stroke-dasharray="6 4" />
                    </svg>
                    <div className="absolute flex flex-col justify-center items-center text-white font-[300] text-[3rem] xl:text-[3.75rem] leading-none">
                      <p>80+</p>
                      <p className="text-[0.9rem] xl:text-[1.125rem] uppercase">over experience</p>
                    </div>
                  </div>

                  <img src="about-img-box-bottom.png" className="z-30 w-[50%] md:w-2/4 xl:w-auto absolute top-[35%] xl:top-[50%] left-[10rem] xl:left-[13rem] right-[13rem] object-contain" alt="image" />
                  <img src="/shape-1.png" className="z-10 absolute w-1/6 xl:w-auto bottom-[9rem] xl:bottom-[6.37rem] right-[3rem] xl:-right-[4.8rem]" alt="shape-1" />

                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="px-3 md:pl-[6.25rem] xl:pr-[3rem]">
                  <div className="w-24 uppercase text-center font-poppins font-[500] text-[0.8rem] text-ternary-blue bg-[#3554D1] bg-opacity-25 px-4 py-2 rounded-[4px]">
                    <span>about us</span>
                  </div>
                  <h1 className="w-full mt-[0.9rem] font-[400] text-3xl leading-[3.5rem] xl:text-5xl xl:leading-[4.5rem]">Our mission is to
                    redefine real estate
                    in the customer
                    favor.
                  </h1>
                  <p className="font-openSans font-sm xl:font-base leading-[1.875rem] text-gray-four mt-[1.4rem] pr-[2rem] text-justify">Pellentesque viverra ex eget nunc bibendum, at porta velit fringilla. Etiam at aliquet neque, consequat feugiat augue. Integer commodo tellus eu est porta imperdiet.</p>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* section-4 */}

      </main >
    </>
  );
}
