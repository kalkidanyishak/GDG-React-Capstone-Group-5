import { Button, Hero } from "../components";
import heroImg from "../assets/images/home-hero-bg.png";
import ExploreCard from "../components/ExploreCard";
import WhyUsCard from "../components/WhyUsCard";

const Home = () => {
  return (
    <>
      <Hero backgroundImage={heroImg} className="items-center md:items-start">
        <div className="flex flex-col space-y-8 justify-center items-center md:mt-16 md:items-start md:ml-20 lg:mt-32">
          <h1 className="text-white md:text-8xl text-4xl font-bold md:max-w-2xl">
            Make in your journey
          </h1>
          <p className="text-white opacity-80 text-center md:text-left md:max-w-sm">
            Explore the world with what you love beautiful natural beauty.
          </p>
          <div className="bg-white space-x-6 flex rounded-full px-4 py-2 justify-between items-center">
            <select className="">
              <option>Location</option>
            </select>

            <select defaultValue="Pick a date" className="">
              <option>Date</option>
            </select>
            <select defaultValue="Pick a color" className="">
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
    </>
  );
};
export default Home;
