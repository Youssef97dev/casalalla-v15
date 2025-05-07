"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
//import { useTranslation } from "react-i18next";
//import { TypeAnimation } from "react-type-animation";

const Events = () => {
  //const { t } = useTranslation();
  return (
    <div
      id="events"
      className="w-full h-full lg:h-screen flex md:flex-row-reverse flex-col-reverse p-3 gap-3"
    >
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-start gap-1 lg:p-20 p-4 text-primary">
          <h1 className="text-[26px] leading-[40px] tracking-[2px] font-eiko font-thin mb-5 px-4 2xl:px-12">
            {/*<TypeAnimation
              sequence={[t("about.title"), 2000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />*/}
            {"Casa Lalla is a space for members to eat, drink and celebrate"}
          </h1>
          <p className="text-[19px] font-light lg:font-normal tracking-widest leading-[34px] px-4 2xl:px-12">
            {/* t("about.content_1") */}
            {
              "the unmatched beauty of our natural landscape is the perfect backdrop for your event or celebration. From weddings, anniversaries and  birthdays to photo shoots and brand events, you can make Casa lalla your own for an unforgettable time. whether intimate or grand, our specially designed experience will ensure your vision comes to life seamlessly."
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
      <div className="relative w-full">
        <Image
          id="events-image"
          src="/images/events-large.jpg"
          height={1000}
          width={1000}
          alt="casa lalla takerkoust, agafay marrakech, agafay restaurant, lalla takerkoust restaurant"
          priority
          className={`object-cover w-full h-full rounded-md md:block hidden`}
        />
        <Image
          id="events-image"
          src="/images/events-small.jpg"
          height={1000}
          width={1000}
          alt="casa lalla takerkoust, agafay marrakech, agafay restaurant, lalla takerkoust restaurant"
          priority
          className={`object-cover w-full h-full rounded-md md:hidden block`}
        />
        {/* Filter */}
      </div>
    </div>
  );
};

export default Events;
