"use client";
import { useEffect } from "react";
import Image from "next/image";
//import { TypeAnimation } from "react-type-animation";
//import { useTranslation } from "react-i18next";

const Hero = () => {
  //const { t } = useTranslation();
  return (
    <div id="hero" className="relative w-full h-full lg:h-screen">
      <div className="w-full h-full block lg:hidden">
        <video className="object-cover h-[95vh] w-full" autoPlay loop muted>
          <source src="/hero_video-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full h-full hidden lg:block lead">
        <Image
          src="/images/hero-casalalla-large.jpg"
          alt="jet ski lalla takerkoust, casa lalla takerkoust menu, quad lalla takerkoust, lalla takerkoust agafay"
          height={2000}
          width={2000}
          className="object-cover h-full w-full rounded-md"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 hidden lg:block"></div>

      {/* Content 
      <div className="absolute top-56 left-5 pr-28 text-white text-[14.5px] font-azahra tracking-[3px] block lg:hidden">
        <TypeAnimation
          sequence={[t("hero.text_1"), 3000, t("hero.text_2"), 3000]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
        />
      </div>*/}

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white">
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7 7 7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
