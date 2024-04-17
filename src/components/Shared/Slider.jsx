'use client';
import React, { useState } from 'react'
import Title from './Title';
import { Container } from './Container';
import { IMAGES } from '@/Constants/constants';

const Slider = () => {
    // Array of image URLs (replace with your image URLs)
    const images = [
        'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/08/image-url-3.jpg',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        // Add more image URLs as needed
    ];
    const [startIndex, setStartIndex] = useState(0);

    const prevSlide = () => {
        setStartIndex(startIndex => Math.max(0, startIndex - 3));
    };

    const nextSlide = () => {
        setStartIndex(startIndex => Math.min(images.length - 3, startIndex + 3));
    };

    return (
        <Container className="max-w-[1140px]">
            <Title
                heading={"featured properties"}
                classname='justify-center items-center'
                classSubHeading='font-roboto text-ternary-blue font-[300] text-[11px] 2xl:text-[13px]'
                classHeading='font-roboto text-gray-five font-[900] text-[20px] 2xl:text-[24px]'
                subHeading={"trending"}
            />
            <div className="w-full flex justify-center gap-1 py-10 md:py-[80px] 2xl:py-[111px]">
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
                        <button className="w-10 max-w-[60px]" onClick={prevSlide} >
                            <img src="/icons/left-arrow.svg" alt="previous-arrow" className="object-scale-down rounded-full bg-[#D4DCFF]" />
                        </button>
                        <button className="w-10 max-w-[60px]" onClick={nextSlide}>
                            <img src="/icons/right-arrow.svg" alt="right-arrow" className="object-scale-down rounded-full bg-[#D4DCFF]" />
                        </button>
                    </div>
                </div>

                <div className="h-full mx-auto">
                    <div className="flex overflow-hidden gap-2">
                        {images.slice(startIndex, startIndex + 3).map((image, index) => (
                            // <div key={index} className="w-1/3 px-2">
                            //     <img src={image} alt={`slide-${startIndex + index}`} className="object-cover" />
                            // </div>

                            <div class="overflow-hidden rounded-2xl">
                                <div key={index} className="max-w-[250px] px-2">
                                    <img src={image} alt={`slide-${startIndex + index}`} className="aspect-square object-cover" />
                                </div>
                                <div>oiweuroiuwer</div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </Container>


    )
}

export default Slider


// 'use client';
// import { useState } from 'react';



// const Slider = () => {
//     const [startIndex, setStartIndex] = useState(0);

//     const prevSlide = () => {
//         setStartIndex(startIndex => Math.max(0, startIndex - 3));
//     };

//     const nextSlide = () => {
//         setStartIndex(startIndex => Math.min(images.length - 3, startIndex + 3));
//     };

//     return (
//         <div className="max-w-screen-md mx-auto">
//             <div className="flex overflow-hidden">
//                 {images.slice(startIndex, startIndex + 3).map((image, index) => (
//                     <div key={index} className="w-1/3 px-2">
//                         <img src={image} alt={`slide-${startIndex + index}`} className="w-full" />
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default Slider;
