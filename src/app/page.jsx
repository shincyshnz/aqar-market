import { IMAGES, PROPERTY_CATEGORIES } from "@/Constants/constants";
import Carousel from "@/components/Carousel/Carousel";
import SwiperCards from "@/components/Carousel/SwiperCards";
import { Container } from "@/components/Shared/Container";
import Title from "@/components/Shared/Title";

export default async function Page() {

  return (
    <>
      <main className="w-full max-w-[1920px] min-h-screen">
        <Carousel images={IMAGES} />

        <section id="trending">
          <Container className="w-full">
            <Title
              heading={"featured properties"}
              classname='justify-center items-center'
              classSubHeading='font-roboto text-ternary-blue font-[300] text-[11px] 2xl:text-[13px]'
              classHeading='font-roboto text-gray-five font-[900] text-[20px] 2xl:text-[24px]'
              subHeading={"trending"}
            />
            <SwiperCards data={PROPERTY_CATEGORIES} />
            <hr />
            <SwiperCards data={PROPERTY_CATEGORIES} />
          </Container >

        </section>
      </main>
    </>
  );
}
