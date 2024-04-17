"use client";

import React from "react";
import { Container } from "./Shared/Container";
import Button from "./Shared/Button";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full">
        <div className="flex justify-end mr-4 my-5 lg:mr-[50px]">
          <Button
            className={"w-[25px] 2xl:w-[55px]"}
            text=""
            icons={<img src="scroll-top.svg" alt="scroll-top" />}
            onClick={handleScrollTop}
          />
        </div>
        <div class="flex items-center h-110 bg-secondary-blue text-white py-2 px-[30px] 2xl:px-[125px]">
          <h6 className="flex-1 text-center font-[500] text-xl 2xl:text-[32px]"><span className="text-primary-blue">Hi!</span> Let’s Download Our App</h6>
          <div className="flex-1 flex justify-center items-center gap-1 max-h-[70px]">
            <Button
              classname="flex justify-center items-center p-2 border-[1px] border-gray-400 rounded-md font-[600] text-[10px] 2xl:text-[20px]"
              icons={<img src="apple-icon.svg" alt="apple-icon" className="w-10 max-w-[40px]" />}
              text={<div className="flex flex-col items-start">
                <span>Available on the </span>
                <span className="text-[8px] 2xl:text-base font-sans font-[400]">Google play</span>
              </div>} />
            <Button
              classname="flex justify-center items-center p-2 border-[1px] border-gray-400 rounded-md font-[600] text-[10px] 2xl:text-[20px]"
              icons={<img src="play-store-icon.svg" alt="play-store-icon" className="w-10 max-w-[40px]" />}
              text={<div className="flex flex-col items-start">
                <span>Available on the </span>
                <span className="text-[8px] 2xl:text-base font-sans font-[400]">AppStore</span>
              </div>} />

          </div>
        </div>

        <Container className="font-sans text-xs text-justify 2xl:text-sm text-gray-four flex lg:flex-wrap justify-between items-center gap-3 px-2 2xl:px-5">
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <p></p>
              <p>Etiam placerat lacinia nisi eget ultri. Aenean et mollis sapien gravida tem ante Morbi id fermentum.</p>
              <p><span className="text-secondary-blue uppercase mr-2">8am - 6pm:</span> Monday - Friday</p>
              <p><span className="text-secondary-blue uppercase mr-2">8am - 6pm:</span> Monday - Friday</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <p className="text-black text-base font-[600] upp">Programs</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
