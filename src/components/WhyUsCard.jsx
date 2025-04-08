import { FaArrowRightLong } from "react-icons/fa6";

const WhyUsCard = ({ icon, cardTitle, text }) => {
  return (
    <div className="card card-border bg-base-100 max-w-[330px] lg:min-h-[432px] shadow-2xl">
      <div className="card-body space-y-4 lg:space-y-8">
        <div className="flex items-center space-x-4 sm:flex-col sm:space-x-0">
          <img
            src={icon}
            alt="best-service"
            className="w-16 h-16 lg:w-[97px] sm:h-[97px]  sm:self-start lg:mb-8"
          />
          <div className="space-y-2 sm:space-y-4">
            <h2 className="card-title font-bold">{cardTitle}</h2>
            <p className="text-md lg:text-xl text-gray-500">{text}</p>
          </div>
        </div>
        <div className="card-actions justify-start">
          <button className="btn text-black  lg:text-xl">
            Learn more
            <span>
              <FaArrowRightLong className="inline" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;
