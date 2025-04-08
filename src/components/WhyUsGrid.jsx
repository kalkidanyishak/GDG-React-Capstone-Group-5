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
    <div className="-mt-16 sm:-mt-24 md:-mt-64 align-element flex flex-col items-center sm:flex-row sm:space-x-4 lg:space-x-8 space-y-4 sm:space-y-0">
      {cardData.map((item) => {
        const { id, icon, text, cardTitle } = item;
        return (
          <WhyUsCard key={id} text={text} cardTitle={cardTitle} icon={icon} />
        );
      })}
    </div>
  );
};
export default WhyUsGrid;
