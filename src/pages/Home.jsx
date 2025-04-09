import { Button, Explore, Hero, WhyUs } from "../components";
import heroImg from "../assets/images/home-hero-bg.png";
import TourPartner from "../components/TourPartner";
import TravelCarousel from "../components/TravelCarousel";
import TestimonialCarousel from "../components/TestimonialCarousel";

const Home = () => {
  return (
    <>
      <Hero backgroundImage={heroImg} className="items-center lg:items-start">
        <div className="flex flex-col space-y-4 md:space-y-8 justify-center items-center lg:mt-30 lg:items-start lg:ml-24">
          <h1 className="text-white sm:text-6xl lg:text-[90px] text-5xl text-center md:text-left font-bold md:max-w-2xl">
            Make in your journey.
          </h1>
          <p className="text-white font-medium max-w-sm opacity-80 text-[18px] text-center lg:text-left md:max-w-sm">
            Explore the world with what you love beautiful natural beauty.
          </p>
          <div className="bg-white md:text-lg text-gray-500 font-medium md:tracking-wider space-x-2 md:space-x-6 lg:space-x-16 flex rounded-full md:px-6 px-4 py-2 justify-between items-center">
            <select className="px-2">
              <option>Location</option>
            </select>

            <select defaultValue="Pick a date" className="px-2">
              <option>Date</option>
            </select>
            <select defaultValue="Pick a color" className="px-2">
              <option>Date</option>
            </select>
            <Button>Explore now</Button>
          </div>
          <p className="text-white font-semibold">
            Popular Place :
            <span className="text-gray-500">Bali, Istanbul, Rome, Paris.</span>{" "}
          </p>
        </div>
      </Hero>
      <TravelCarousel />
      <WhyUs />
      <TourPartner />
      <TestimonialCarousel />
    </>
  );
};
// resolve merge error
export default Home;
