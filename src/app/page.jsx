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
              heading={"featured properties"}
              classname={`${TITLE_CSS.classname} uppercase`}
              classSubHeading={TITLE_CSS.classSubHeading}
              classHeading={`${TITLE_CSS.classHeading} font-[900]`}
            />
            <SwiperCards data={PROPERTY_CATEGORIES} />
            <hr/>
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
            <div className="mx-auto  w-full max-w-[1200px] flex flex-col items-center justify-center gap-4 2xl:gap-[30px]">
              <Title
                heading={"explore our cities"}
                subHeading={"find propeerties"}
                classname={TITLE_CSS.classname}
                classSubHeading={`${TITLE_CSS.classSubHeading} uppercase`}
                classHeading={`${TITLE_CSS.classHeading} capitalize font-[600]`}
              />

              <div className="flex flex-wrap flex-grow items-center justify-center gap-4 2xl:gap-[30px] px-2 2xl:px-[15px] mt-5 lg:mt-10">
                <div className="flex flex-col items-center gap-2 px-2  max-w-[370px] max-h-[512px]">
                  <Image
                    src='/explore-properties-1.png'
                    width={348}
                    height={398}
                    className="rounded-img aspect-square"
                  />

                  <div className="w-full flex justify-between items-center pt-4 px-8">
                    <Title
                      heading="Dubai"
                      subHeading="23 properties"
                      classname='font-[600] text-lg 2xl:text-[18px] text-left'
                      classSubHeading='text-gray-four font-[400] text-sm md:text-md mt-4'
                      classHeading='font-[600] text-md md:text-[18px] mt-3'
                    />

                    <button className="w-10 max-w-[60px]">
                      <img src="/icons/right-arrow.svg" alt="right-arrow" className="object-scale-down rounded-full bg-[#D4DCFF]" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 px-2">
                  <Image
                    src='/explore-properties-1.png'
                    width={350}
                    height={350}
                    className="rounded-img aspect-square"
                  />

                  <div className="w-full flex justify-between items-center pt-4 px-8">
                    <Title
                      heading="Dubai"
                      subHeading="23 properties"
                      classname='font-[600] text-lg 2xl:text-[18px] text-left'
                      classSubHeading='text-gray-four font-[400] text-sm md:text-md mt-4'
                      classHeading='font-[600] text-md md:text-[18px] mt-3'
                    />

                    <button className="w-10 max-w-[60px]">
                      <img src="/icons/right-arrow.svg" alt="right-arrow" className="object-scale-down rounded-full bg-[#D4DCFF]" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 px-2">
                  <Image
                    src='/explore-properties-1.png'
                    width={350}
                    height={350}
                    className="rounded-img aspect-square"
                  />

                  <div className="w-full flex justify-between items-center pt-4 px-8">
                    <Title
                      heading="Dubai"
                      subHeading="23 properties"
                      classname='font-[600] text-lg 2xl:text-[18px] text-left'
                      classSubHeading='text-gray-four font-[400] text-sm md:text-md mt-4'
                      classHeading='font-[600] text-md md:text-[18px] mt-3'
                    />

                    <button className="w-10 max-w-[60px]">
                      <img src="/icons/right-arrow.svg" alt="right-arrow" className="object-scale-down rounded-full bg-[#D4DCFF]" />
                    </button>
                  </div>
                </div>

              </div>
            </div >
          </div>
        </section>

        {/* section -3 */}
        <section id="about" >
          <Container className="w-full">
            <div className="flex flex-wrap">
              <div className="w-full min-h-[570px] relative left flex-1 bg-red-500">
                
                {/* <Image
                  src='/explore-properties-1.png'
                  width={350}
                  height={350}
                  className="rounded-img aspect-square absolute top-0 left-0"
                /> */}

                  {/* <!-- Image 1 --> */}
                  <div className="absolute max-w-[470px] max-h-[315px] right-0 top-[50%]">
                    <img src="/shape-1.png" className="w-full h-full object-cover" alt="shape-1" />
                  </div>
                  {/* <!-- Image 2 --> */}
                  <div className="absolute max-w-[470px] max-h-[315px] -top-10 -left-10 rounded-xl overflow-hidden">
                    <img src="about-img-box-top.png" className="w-full h-full object-cover" alt="about-style1-img-2" />
                  </div>
                  {/* <!-- Image 3 --> */}
                  <div className="absolute max-w-[470px] max-h-[315px] top-[40%] right-10 rounded-xl overflow-hidden">
                    <img src="about-img-box-bottom.png" className="w-full h-full object-cover" alt="image" />
                  </div>
                  {/* <!-- Image 4 --> */}
                  {/* <div className="absolute w-56 h-56 top-0 right-0 rounded-xl overflow-hidden">
                    <img src="/shape-1.png" className="w-full h-full object-cover" alt="image" />
                  </div> */}

              </div>
              <div className="right flex-1"></div>
            </div>
          </Container>
        </section>

      </main >
    </>
  );
}
