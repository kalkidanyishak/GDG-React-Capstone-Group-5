import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ExploreCard from "./ExploreCard";

export const loader = async () => {
  const response = await axios.get(
    "https://67f8c4c62466325443edb74b.mockapi.io/destinations"
  );
  const destinations = response.data;
  return destinations;
};

const TravelCarousel = () => {
  const destinations = useLoaderData();
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
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-black font-semibold text-3xl min-w-sm max-w-2xl md:text-5xl lg:text-[60px] md:mb-8 mb-4">
            Explore new worlds with exotic natural scenery
          </h2>
          <p className="md:text-xl text-center max-w-xl font-medium text-gray-500">
            Explore the world with what you love beautiful natural beauty.
          </p>
        </div>

        <div className="relative mt-8 md:mt-0">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="bg-gray-50 px-4 py-2 rounded-md shadow-5xl absolute -top-4 -left-6 md:left-0 md:top-8 hover:cursor-pointer hover:bg-gray-200"
            aria-label="Previous slide"
          >
            ❮
          </button>

          <button
            onClick={goToNext}
            className="bg-gray-50 px-4 py-2 rounded-md shadow-5xl absolute -top-4 -right-6 md:right-0 md:top-8 hover:cursor-pointer hover:bg-gray-200"
            aria-label="Next slide"
          >
            ❯
          </button>

          {/* Carousel Items Container */}
          <div className="flex justify-center items-center h-[300px] md:h-[500px] overflow-hidden">
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
