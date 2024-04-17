
import Carousel from "@/components/Carousel";
import { IMAGES } from "@/components/Constants/constants";

export default async function Page() {
  return (
    <>
      <main className="w-full max-w-[1920px] min-h-screen">
        <Carousel images={IMAGES} />
      </main>
    </>
  );
}
