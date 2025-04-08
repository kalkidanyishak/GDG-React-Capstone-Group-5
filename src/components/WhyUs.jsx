import Carousel from "./Carousel";
import WhyUsGrid from "./WhyUsGrid";

const WhyUs = () => {
  return (
    <section className="relative lg:h-screen -mt-4">
      <div className="absolute md:top-24 top-4 left-1/2 -translate-x-1/2  z-10 text-center">
        <h1 className="text-white text-2xl md:text-5xl font-bold">
          Why choose Us?
        </h1>
        <p className="text-lg md:text-2xl font-medium text-white mt-4 min-w-96">
          our services have been trusted by world travelers.
        </p>
      </div>
      <Carousel />
      <WhyUsGrid />
    </section>
  );
};
export default WhyUs;
