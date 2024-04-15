// import Image from "next/image";

import Carousel from "@/components/Carousel";

const images = [
  '/banner-image-1.jpeg',
  '/banner-image-1.jpeg',
  '/banner-image-1.jpeg',
];

export default async function Page() {
  return (
    <>
      <main>
        <Carousel images={images} />
      </main>
    </>
  );
}
