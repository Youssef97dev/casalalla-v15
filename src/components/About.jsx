"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
//import { useTranslation } from "react-i18next";
//import { TypeAnimation } from "react-type-animation";

const About = () => {
  //const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll);
    const imageElement = document.querySelector("#about-image");

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);
  return (
    <div
      id="about"
      className="w-full h-full lg:h-screen flex md:flex-row-reverse flex-col p-3 gap-3"
    >
      <div className="relative w-full">
        <Image
          id="about-image"
          src="/images/about-large.jpg"
          height={1000}
          width={1000}
          alt="casa lalla takerkoust, agafay marrakech, agafay restaurant, lalla takerkoust restaurant"
          priority
          className={`object-cover w-full h-full rounded-md md:block hidden`}
        />
        <Image
          id="about-image"
          src="/images/about-small.jpg"
          height={1000}
          width={1000}
          alt="casa lalla takerkoust, agafay marrakech, agafay restaurant, lalla takerkoust restaurant"
          priority
          className={`object-cover w-full h-full rounded-md md:hidden block`}
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-1 lg:p-20 p-4 text-primary">
          <h1 className="text-[26px] leading-[40px] tracking-[2px] font-eiko font-thin mb-5 px-4 2xl:px-12">
            {/*<TypeAnimation
              sequence={[t("about.title"), 2000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />*/}
            {
              "Casa Lalla Takerkoust, exquisite cuisine and amazing panoramic view"
            }
          </h1>
          <p className="text-[19px] font-light lg:font-normal tracking-widest leading-[34px] px-4 2xl:px-12">
            {/* t("about.content_1") */}
            {
              "Casa Lalla welcomes its guests far from the sophistication and hustle and bustle of the city, this haven of peace is the ideal place to indulge in simple pleasures and savor the mild climate."
            }
          </p>
          <p className="text-[19px] font-light lg:font-normal tracking-widest leading-[34px] px-4 2xl:px-12 ">
            {/*t("about.content_2")*/}
            {
              "The decor blends memories and heritage in a simple, quirky atmosphere that exudes the sweet scent of formentera ibiza mykonos."
            }
          </p>
          <p className="text-[19px] font-light lg:font-normal tracking-widest leading-[34px] px-4 2xl:px-12 ">
            {/*t("about.content_3")*/}
            {
              "Much more than a restaurant, this lakeside spot is a veritable living space. Restaurant, bar, swimming pool, private cabanas - everything is designed for relaxing, sharing, celebrating and creating lasting memories."
            }
          </p>
          <p className="text-[19px] text-primary font-light lg:font-normal tracking-widest leading-[34px] px-4 2xl:px-12 ">
            {/*t("about.content_4")*/}
            {
              "At casa lalla, you'll experience extravagant moments where the joy of being together and gourmet pleasures suspend the course of time - under the banner of La Dolce Vita and festivities!"
            }
          </p>
          {/* <Link
            href="/booking"
            className="mt-5 ml-0 2xl:ml-11 py-2 px-8 uppercase tracking-widest border border-primary text-primary rounded-lg text-[12px] leading-[34px] hover:bg-primary hover:text-white duration-200 transition-all ease-out"
          >
            
            {"Book a table"}
          </Link>*/}
        </div>
      </div>
    </div>
  );
};

export default About;
