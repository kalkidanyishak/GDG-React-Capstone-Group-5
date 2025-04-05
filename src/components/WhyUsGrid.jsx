import bestService from "../assets/svgs/best-service.svg";
import handpickedHotels from "../assets/svgs/handpicked-hotels.svg";
import priceGuarantee from "../assets/svgs/price-guarantee.svg";
import WhyUsCard from "./WhyUsCard";

const cardData = [
  {
    id: 1,
    cardTitle: "Best Service",
    text: "our service is reliable and convenient, our service is quality.",
    icon: bestService,
  },
  {
    id: 2,
    cardTitle: "Price Guarantee",
    text: "our service is reliable and convenient, our service is quality.",
    icon: priceGuarantee,
  },
  {
    id: 3,
    cardTitle: "Handpicked Hotels",
    text: "our service is reliable and convenient, our service is quality.",
    icon: handpickedHotels,
  },
];

const WhyUsGrid = () => {
  return (
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-screen flex justify-center">
      <div className="grid lg:grid-cols-3 grid-cols-1 space-y-4 lg:space-y-0 lg:space-x-8">
        {cardData.map((item) => {
          const { id, icon, text, cardTitle } = item;
          return (
            <WhyUsCard key={id} text={text} cardTitle={cardTitle} icon={icon} />
          );
        })}
      </div>
    </div>
  );
};
export default WhyUsGrid;
