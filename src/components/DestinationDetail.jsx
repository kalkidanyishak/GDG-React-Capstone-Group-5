import React, { useState } from "react";
import { Link } from "react-router-dom";

const DestinationDetail = ({ destination }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 ">
      {/* Header with destination name */}
      <div className="mb-8 text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {destination.name}
        </h1>
        <p className="text-xl text-gray-600">{destination.shortDescription}</p>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image gallery */}
        <div>
          <div className="rounded-xl overflow-hidden shadow-lg mb-4">
            <img
              src={destination.gallery[activeImage] || destination.imageUrl}
              alt={destination.name}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="flex space-x-2">
            {destination.gallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-24 h-20 rounded-md overflow-hidden shadow-sm transition-all ${
                  activeImage === index ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`${destination.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details section */}
        <div className="space-y-6">
          {/* Price and duration */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-blue-700">
                {destination.price}
              </span>
              <span className="text-lg font-medium text-gray-700">
                {destination.duration}
              </span>
            </div>
          </div>

          {/* Description with read more */}
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-2">
              About this destination
            </h3>
            <p className="text-gray-700">
              {showFullDescription
                ? destination.longDescription
                : destination.shortDescription}
            </p>
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-blue-600 hover:text-blue-800 mt-2 text-sm font-medium"
            >
              {showFullDescription ? "Read less" : "Read more"}
            </button>
          </div>

          {/* Included/Not included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">
                What's included
              </h4>
              <ul className="space-y-1">
                {destination.included.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">
                What's not included
              </h4>
              <ul className="space-y-1">
                {destination.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Book button */}
          <div className="pt-4">
            <Link
              to={`/booking/${destination.id}`}
              className="inline-block w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Book Now for {destination.price}
            </Link>
          </div>
        </div>
      </div>

      {/* Location map */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Location</h3>
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src={destination.locationMap}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
