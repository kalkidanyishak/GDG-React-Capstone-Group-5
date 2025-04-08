import React, { useState, useEffect } from "react";

// Sample testimonial data based on the image
const testimonials = [
  {
    id: 1,
    name: "Sara Jay",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 4,
    text: "Before we define any approach, we need to define the brands overall goal. We then need to dive.",
  },
  {
    id: 2,
    name: "Cristian Daniel",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
    text: "Before we define any approach, we need to define the brands overall goal. We then need to dive.",
  },
  {
    id: 3,
    name: "Kausar Hasan",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "Before we define any approach, we need to define the brands overall goal. We then need to dive.",
  },
  {
    id: 4,
    name: "John Doe",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=4",
    rating: 5,
    text: "Before we define any approach, we need to define the brands overall goal. We then need to dive.",
  },
  {
    id: 5,
    name: "Emma Watson",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    text: "Creating a strong visual identity helped our business stand out in a crowded market. The approach was methodical and effective.",
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Traveller",
    image: "https://i.pravatar.cc/150?img=6",
    rating: 3,
    text: "The branding strategy developed for our startup was instrumental in our early success. Highly recommended for any new business.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrevious = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
  };

  const getVisibleTestimonials = () => {
    let visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleItems.push(testimonials[index]);
    }
    return visibleItems;
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <div className="py-12 px-4 md:px-8 relative">
      <div className="align-element">
        <h3 className="text-center md:text-left text-2xl md:text-4xl text-gray-500 font-semibold mb-2">
          TESTIMONIAL
        </h3>
        <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold mb-4">
          What our client say
        </h2>
        <p className="text-center md:text-left text-md md:text-lg mb-12 max-w-sm text-gray-500">
          Create a visual identity for your company and a overall brand
        </p>

        <div className="relative mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white py-16 text-black rounded-lg shadow-lg p-6"
              >
                <div className="relative flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="absolute -top-16 w-24 h-24 rounded-full mb-4 object-cover border-4 border-gray-200"
                  />
                  <h3 className="text-xl font-bold mt-16">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 mb-4 text-lg">
                    {testimonial.role}
                  </p>

                  <div className="flex mb-2 mt-8 self-start">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="text-left text-lg text-gray-500">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -top-16 right-0 flex space-x-4">
            <button
              onClick={goToPrevious}
              className="btn btn-square text-black flex items-center justify-center shadow-lg hover:bg-gray-200 focus:outline-none transition-colors duration-300"
              aria-label="Previous testimonials"
            >
              ❮
            </button>
            <button
              onClick={goToNext}
              className="btn btn-square text-black flex items-center justify-center shadow-lg hover:bg-gray-200 focus:outline-none transition-colors duration-300"
              aria-label="Next testimonials"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;