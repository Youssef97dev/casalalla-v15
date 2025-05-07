"use client";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import Hero from "./Hero";
import About from "./About";
import Events from "./Events";
import Activities from "./Activities";
//import Contact from "./Contact";
//import Footer from "./Footer";

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
        <div className="">
          <Hero />
          <About />
          <Events />
          <Activities />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <CircleLoader color="#000000" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
