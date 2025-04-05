import React, { useState, useEffect } from "react";
import { CgQuote } from "react-icons/cg";

import explore_1 from "../assets/images/explore-img-1.png";
import explore_2 from "../assets/images/explore-img-2.png";
import explore_3 from "../assets/images/explore-img-3.png";
import ExploreCard from "./ExploreCard";

const TravelCarousel = () => {
  // Example destinations - you can add as many as needed
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const destinations = [
    {
      id: 1,
      location: "Bali, Indonesia",
      description:
        "Bali is a beautiful tourist spot and is visited by many travelers.",
      image: explore_1, // Image source to be added later
    },
    {
      id: 2,
      location: "New York City, USA",
      description:
        "The Big Apple offers iconic landmarks, diverse culture, and endless entertainment.",
      image: explore_2, // Image source to be added later
    },
    {
      id: 3,
      location: "Santorini, Greece",
      description:
        "Famous for stunning white architecture and breathtaking Mediterranean views.",
      image: explore_3, // Image source to be added later
    },
    {
      id: 4,
      location: "Tokyo, Japan",
      description:
        "Ultra-modern city with a perfect blend of traditional culture and futuristic technology.",
      image: explore_1, // Image source to be added later
    },
    {
      id: 5,
      location: "Paris, France",
      description:
        "The city of love known for its art, cuisine, and iconic architecture.",
      image: explore_2, // Image source to be added later
    },
    // Add more destinations as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Calculate which items should be visible
    const totalItems = destinations.length;
    let items = [];

    // Previous item
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    items.push({ ...destinations[prevIndex], position: "left" });

    // Current item
    items.push({ ...destinations[currentIndex], position: "center" });

    // Next item
    const nextIndex = (currentIndex + 1) % totalItems;
    items.push({ ...destinations[nextIndex], position: "right" });

    setVisibleItems(items);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  return (
    <div className="relative w-full bg-white py-16 px-4 overflow-hidden">
      <div className="align-element text-center">
        <h2 className="text-black font-semibold text-3xl md:text-7xl mb-8">
          Explore new worlds with exotic natural scenery
        </h2>
        <p className="md:text-2xl font-semibold text-gray-500">
          Explore the world with what you love beautiful natural beauty.
        </p>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="slide-btn absolute left-0 top-8"
            aria-label="Previous slide"
          >
            ❮
          </button>

          <button
            onClick={goToNext}
            className="slide-btn absolute right-0 top-8"
            aria-label="Next slide"
          >
            ❯
          </button>

          {/* Carousel Items Container */}
          <div className="flex justify-center items-center h-[500px] overflow-hidden">
            <div className="relative w-full max-w-6xl flex justify-center items-center">
              {visibleItems.map((item, index) => {
                const isCenter = item.position === "center";
                const isLeft = item.position === "left";
                const isRight = item.position === "right";

                return (
                  <ExploreCard
                    key={`${item.id}-${index}`}
                    item={item}
                    isCenter={isCenter}
                    isLeft={isLeft}
                    isRight={isRight}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCarousel;
