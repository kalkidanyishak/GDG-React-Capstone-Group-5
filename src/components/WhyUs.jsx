import Carousel from "./Carousel";
import WhyUsGrid from "./WhyUsGrid";

const WhyUs = () => {
  return (
    <section className="relative w-screen min-h-screen">
      <div className="absolute top-4 text-2xl left-1/2 -translate-x-1/2  z-10 text-center">
        <h1 className="text-white lg:text-5xl font-bold">Why choose Us?</h1>
        <p className="text-gray-500 mt-4 lg:text-lg min-w-96">
          our services have been trusted by world travelers.
        </p>
      </div>
      <Carousel />
      <WhyUsGrid />
    </section>
  );
};
export default WhyUs;
