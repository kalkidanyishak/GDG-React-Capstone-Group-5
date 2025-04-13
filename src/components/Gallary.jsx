import React from "react";
import bali from "../assets/images/GallerBali.png";
import dubai from "../assets/images/GallerDubai.png";
import italy from "../assets/images/GallerItaly.png";
import paris from "../assets/images/GallerParis.png";

const GallaryImage = ({ src, label, className = "" }) => (
  <div className={`relative rounded-xl overflow-hidden shadow-lg ${className}`}>
    <img
      src={src}
      alt={label}
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

    <h3 className="absolute bottom-4 left-4 text-white text-xl lg:text-2xl font-semibold">
      {label}
    </h3>
  </div>
);
function Gallary() {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* in gallery text section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-500  font-semibold tracking-wide">
            Gallery
          </p>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Unforgettale moment
          </h2>
        </div>

        {/* in gallery image section */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <GallaryImage
            src={bali}
            label="Bali"
            className="aspect-[3/4] md:aspect-auto"
          />
          <div className="flex flex-col gap-4 lg:gap-6">
            <GallaryImage src={dubai} label="Dubai" className="aspect-video" />
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <GallaryImage
                src={paris}
                label="Paris"
                className="aspect-video"
              />
              <GallaryImage
                src={italy}
                label="Italy"
                className="aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallary;
