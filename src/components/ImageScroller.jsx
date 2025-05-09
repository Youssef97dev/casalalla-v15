import React from "react";
import Image from "next/image";

const Images = [
  "/gallery/gallery-14.jpg",
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-6.jpg",
  "/gallery/gallery-7.jpg",
  "/gallery/gallery-1.jpg",
];

const ImageScroller = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="w-full flex justify-between items-center gap-10 animate-scroll">
        {Images.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt="casalalla"
            width={1000}
            height={1000}
            className="object-cover w-96 h-96 pb-2"
          />
        ))}
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default ImageScroller;
