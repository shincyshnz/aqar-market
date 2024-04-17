import { IMAGES } from "@/Constants/constants";
import Carousel from "@/components/Carousel/Carousel";
import { Container } from "@/components/Shared/Container";
import Slider from "@/components/Shared/Slider";
import Title from "@/components/Shared/Title";

export default async function Page() {

  return (
    <>
      <main className="w-full max-w-[1920px] min-h-screen">
        <Carousel images={IMAGES} />

        <section id="trending">
          <Slider />
        </section>
      </main>
    </>
  );
}
