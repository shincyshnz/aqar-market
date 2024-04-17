
import Carousel from "@/components/Carousel";

const images = [
  '/banner-image-1.jpeg',
  '/banner-image-1.jpeg',
  '/banner-image-1.jpeg',
];

export default async function Page() {
  return (
    <>
      <main className="min-h-screen">
        <Carousel images={images} />
      </main>
    </>
  );
}
