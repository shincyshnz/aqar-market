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
            <div className="mx-auto mt-14 max-w-[1200px] flex flex-col items-center justify-center gap-4 2xl:gap-[30px] px-[1rem]">


              <div className="flex flex-wrap md:flex-no-wrap flex-grow items-center justify-center md:gap-[2.5rem] gap-0">
                {[1, 2, 3].map((index) => (
                  <div className="flex flex-col items-center gap-2 p-[0.7rem]" key={index}>
                    <img src='/explore-properties-1.png' className="rounded-img aspect-square w-[21.25rem]" />
                    <div className="w-full flex justify-between items-center py-[1.43rem] px-[1.93rem]">
                      <Title
                        heading="Dubai"
                        subHeading="23 properties"
                        classname='font-[600] text-left'
                        classSubHeading='text-gray-four font-[400] text-sm'
                        classHeading='font-[600] text-base mt-3'
                      />

                      <button className="w-10 max-w-[60px]">
                        <img src="/icons/right-arrow.svg" alt="right-arrow" className="object-scale-down rounded-full bg-primary-blue" />
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
          <div className="px-2 lg:px-[5rem] 2xl:px-[22.5rem]">

            <div className="flex flex-wrap flex-col md:flex-row">
              <div className="relative flex-1">
                <div className="relative text-gray-500 h-[28rem] lg:h-[42rem]">
                  <img src="about-img-box-top.png" className="z-20 relative top-[10%] w-2/4 lg:w-auto" alt="about-style1-img-2" />
                  <img src="/shape-1.png" className="z-10 w-1/6 lg:w-auto absolute top-[2rem] lg:top-[1.25rem] left-[1.75rem]" alt="shape-1" />

                  <div className="absolute w-[1rem] lg:w-[13.7rem] left-[4.9rem] top-[15rem] lg:top-[32rem]">
                    <svg className="object-contain w-32 h-32 lg:w-[220px] lg:h-[220px]" fill="none" viewBox="0 0 225 225" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="223" height="223" rx="111.5" stroke="#E7E7E7" stroke-width="2" stroke-dasharray="6 4" />
                    </svg>
                  </div>

                  <div class="z-40 relative w-40 h-40 lg:w-60 lg:h-60 left-[14rem] lg:left-[26rem] bottom-24 lg:bottom-48 bg-blue-300 rounded-full flex justify-center items-center">
                    <svg width="220" height="220" fill="none" viewBox="0 0 225 225" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="223" height="223" rx="111.5" stroke="#E7E7E7" stroke-width="2" stroke-dasharray="6 4" />
                    </svg>
                    <div className="absolute flex flex-col justify-center items-center text-white font-[300] text-[3rem] lg:text-[3.75rem] leading-none">
                      <p>80+</p>
                      <p className="text-[0.9rem] lg:text-[1.125rem] uppercase">over experience</p>
                    </div>
                  </div>


                  <img src="about-img-box-bottom.png" className="z-30 w-2/4 lg:w-auto absolute top-[35%] lg:top-[50%] left-[10rem] lg:left-[13rem] right-[13rem] object-contain" alt="image" />
                  <img src="/shape-1.png" className="z-10 absolute w-1/6 lg:w-auto bottom-[9rem] lg:bottom-[6.37rem] right-[3rem] lg:-right-[4.8rem]" alt="shape-1" />


                </div>




              </div>

              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="px-[6.25rem]">
                  asfdasfaf aklsjdlas lkasjdlkjasd klasjdlkjasd
                  asfdasfaf aklsjdlas lkasjdlkjasd klasjdlkjasd
                </div>
              </div>

            </div>
          </div>
        </section>

      </main >
    </>
  );
}
