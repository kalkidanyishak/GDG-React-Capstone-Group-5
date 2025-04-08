import { CgQuote } from "react-icons/cg";

const ExploreCard = ({ isCenter, isLeft, isRight, item }) => {
  return (
    <div
      className={`
      absolute transition-all duration-500 ease-in-out 
      ${isCenter ? "z-20 scale-100" : "z-10 scale-85"}
      ${
        isLeft
          ? "-translate-x-[calc(100%-4rem)] md:-translate-x-[calc(100%-0.5rem)]"
          : ""
      }
      ${
        isRight
          ? " translate-x-[calc(100%-4rem)] md:translate-x-[calc(100%-0.5rem)]"
          : ""
      }
    `}
    >
      <div
        className={`
          w-72 md:w-96 rounded-lg overflow-hidden shadow-2xl
          ${isCenter ? "md:w-16" : "md:w-80 md:-translate-y-7.5"}
          transition-all duration-300
        `}
      >
        <div className="relative h-64 md:h-80">
          <img
            src={item.image}
            alt={item.location}
            className="w-full h-full object-cover"
          />

          {isCenter && (
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-left md:text-xl font-bold text-gray-800">
                    {item.location}
                  </h3>
                  <p className="text-left  text-xs md:text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="absolute -top-6 right-8 bg-white text-5xl px-2 py-2 rounded-full shadow-2xl">
                  <CgQuote />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ExploreCard;
