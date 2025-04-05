import SectionTitle from "./SectionTitle";
import bigui from "../assets/svgs/bigui.svg";
import booking from "../assets/svgs/booking.svg";
import katana from "../assets/svgs/katana.svg";
import travava from "../assets/svgs/travava.svg";
import jakmaen from "../assets/svgs/jakmaen.svg";

const TourPartner = () => {
  return (
    <section className="flex flex-col space-y-4 items-center py-16">
      <SectionTitle className="text-center" text="Our tour partner" />
      <p className="text-center text-2xl font-medium text-gray-500 max-w-2xl">
        There are many variation of passage of lorem ipsum available but the
        majority have suffered alteration
      </p>
      <div className="flex space-x-24">
        <img src={katana} className="w-24" alt="" />
        <img src={travava} className="w-24" alt="" />
        <img src={bigui} className="w-24" alt="" />
        <img src={booking} className="w-24" alt="" />
        <img src={jakmaen} className="w-24" alt="" />
      </div>
    </section>
  );
};
export default TourPartner;
