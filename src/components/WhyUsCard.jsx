import { FaArrowRightLong } from "react-icons/fa6";

const WhyUsCard = ({ icon, cardTitle, text }) => {
  return (
    <div className="card card-border bg-base-100 md:w-xs shadow-2xl">
      <div className="card-body space-y-4">
        <img src={icon} alt="best-service" className="w-16 h-16" />
        <h2 className="card-title font-bold">{cardTitle}</h2>
        <p className="text-xl text-gray-500">{text}</p>
        <div className="card-actions justify-start">
          <button className="btn text-black">
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
