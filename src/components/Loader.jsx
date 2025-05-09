"use client";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import Hero from "./Hero";
import About from "./About";
import Events from "./Events";
import Activities from "./Activities";
import ImageScroller from "./ImageScroller";
import Buttons from "./Buttons";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative">
          <Hero />
          <About />
          <Events />
          <Activities />
          <ImageScroller />
          <div className="fixed bottom-5 left-0 w-full block lg:hidden z-10">
            <Buttons />
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <CircleLoader color="#c20022" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
