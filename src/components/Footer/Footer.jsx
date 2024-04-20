'use client';
import React from "react";
import { Container } from "../Shared/Container";
import Button from "../Shared/Button";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* <div className="w-full">
        <div className="flex justify-end mr-4 my-5 lg:mr-[50px]">
          <Button
            className={"w-[25px] 2xl:w-[55px]"}
            text=""
            icons={<img src="/icons/scroll-top.svg" alt="scroll-top" />}
            onClick={handleScrollTop}
          />
        </div>
        <div className="flex items-center h-110 bg-secondary-blue text-white py-2 px-[30px] 2xl:px-[125px]">
          <h6 className="flex-1 text-center font-[500] text-xl 2xl:text-[32px]"><span className="text-primary-blue">Hi!</span> Let’s Download Our App</h6>
          <div className="flex-1 flex justify-center items-center gap-1 max-h-[70px]">
            <Button
              classname="flex justify-center items-center p-2 border-[1px] border-gray-400 rounded-md font-semibold text-[10px] 2xl:text-[20px]"
              icons={<img src="/icons/apple-icon.svg" alt="apple-icon" className="w-10 max-w-[40px]" />}
              text={<div className="flex flex-col items-start">
                <span>Available on the </span>
                <span className="text-[8px] 2xl:text-base font-sans font-[400]">Google play</span>
              </div>} />
            <Button
              classname="flex justify-center items-center p-2 border-[1px] border-gray-400 rounded-md font-semibold text-[10px] 2xl:text-[20px]"
              icons={<img src="/icons/play-store-icon.svg" alt="play-store-icon" className="w-10 max-w-[40px]" />}
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
              <p className="text-black text-base font-semibold upp">Programs</p>
            </div>
          </div>
        </Container>
      </div> */}

      <footer
        className="text-center text-surface/75 lg:text-left">
        {/* Scroll top button */}
        <div
          className="flex items-center justify-end border-b-2 border-neutral-200 p-6">
          <Button
            className={"w-[25px] 2xl:w-[55px]"}
            text=""
            icons={<img src="/icons/scroll-top.svg" alt="scroll-top" />}
            onClick={handleScrollTop}
          />
        </div>

        {/* download from playstore or apps store  */}
        <div className="bg-secondary-blue text-white w-full min-h-[6.875rem]">
          <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between h-110 py-2 px-7">
            <h6 className="flex-1 py-8 font-[500] text-xl lg:text-[2rem]"><span className="text-primary-blue">Hi!</span> Let’s Download Our App</h6>
            <div className="flex-1 flex justify-end items-center gap-1 py-5">
              <Button
                classname="flex h-full justify-center items-center p-2 border-[1px] border-gray-400 rounded-md font-semibold text-md md:text-xl"
                icons={<img src="/icons/play-store-icon.svg" alt="apple-icon" className="w-10" />}
                text={
                  <div className="flex flex-col items-start">
                    <span>Available on the </span>
                    <span className="text-base font-openSans font-[400]">Google play</span>
                  </div>
                }
              />

              <Button
                classname="flex h-full justify-center items-center p-2 border-[1px] border-gray-400 rounded-md font-semibold text-md md:text-xl"
                icons={<img src="/icons/apple-icon.svg" alt="apple-icon" className="w-10" />}
                text={
                  <div className="flex flex-col items-start">
                    <span>Available on the </span>
                    <span className="text-base font-openSans font-[400]">App Store</span>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* main footer container */}
        <div className="mx-auto px-6 max-w-[1200px] py-20 xl:py-24 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="font-poppins font-semibold text-sm leading-7">
              <p className="font-openSans font-normal text-gray-four">Etiam placerat lacinia nisi eget ultri. Aenean et mollis sapien gravida tem ante Morbi id fermentum.</p>
              <p className="mt-5 uppercase"><span className="text-secondary-blue uppercase mr-2">8am - 6pm:</span> Monday - Friday</p>
              <p className="uppercase"><span className="text-secondary-blue uppercase mr-2">8am - 6pm:</span> Monday - Friday</p>
            </div>
            {/* <!-- Programs section --> */}
            <div className="font-openSans text-gray-four text-sm">
              <h6
                className="text-black font-poppins mb-5 flex justify-center font-semibold uppercase md:justify-start">
                Programs
              </h6>
              <p className="mb-5">
                <a href="#!">+ Buy A Property</a>
              </p>
              <p className="mb-5">
                <a href="#!">+ Сalculate your property</a>
              </p>
              <p className="mb-5">
                <a href="#!">+ Rent a property</a>
              </p>
              <p className="mb-5">
                <a href="#!">+ Our Terms and Condition</a>
              </p>
            </div>
            {/* <!-- Support section --> */}
            <div className="font-openSans text-gray-four text-sm">
              <h6
                className="text-black font-poppins mb-5 flex justify-center font-semibold uppercase md:justify-start">
                Support
              </h6>
              <p className="mb-5">
                <a href="#!">+ About us</a>
              </p>
              <p className="mb-5">
                <a href="#!">+ Documentation</a>
              </p>
              <p className="mb-5">
                <a href="#!">+ Forums</a>
              </p>
              <p className="mb-5">
                <a href="#!">+ Become an Agent</a>
              </p>
            </div>
            {/* <!-- Contact section --> */}
            <div className="font-openSans text-gray-four text-sm">
              <h6
                className="mb-5 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-5 uppercase text-gray-300 font-semibold"><span className="text-secondary-blue uppercase mr-2">North west,</span> England</p>
              <p className="mb-5">
                <span className="text-black">Email : </span><a href="#">prolan@gmail.com</a>
              </p>
              <p className="mb-5">
                <span className="text-black">Phone : </span>+66 555 999 222 00
              </p>
              <div className="mb-5 flex gap-4 text-black font-semibold">
                <span>Follow us:</span>
                <img src="/icons/facebook-icon.svg" alt="facebook" />
                <img src="/icons/twitter-icon.svg" alt="facebook" />
                <img src="/icons/v-icon.svg" alt="facebook" />
              </div>

            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="bg-[#F0F1F6] text-gray-four text-sm min-h-[5.6rem] flex justify-between">
          <div className="max-w-[1200px] px-6 m-auto flex items-center justify-between w-full">
          <div className="text-center font-openSans">
            <span>Copyright © 2022 </span>
            <a className="font-semibold" href="https://tw-elements.com/"
            >Proplan.</a> All Rights Reserved
          </div>
          <div className="flex gap-2">
            <a href="#">Pivacy policy</a>
            <a href="#">Terms of use</a>
            <a href="#">Suppost</a>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
