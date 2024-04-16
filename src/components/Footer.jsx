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
        <div className="absolute right-24 my-5">
          <Button
            className={""}
            text=""
            icons={"scroll-top.svg"}
            onClick={handleScrollTop}
          />
        </div>

        <div className="w-full bg-primary">
            
        </div>
      </div>
    </>
  );
};

export default Footer;
