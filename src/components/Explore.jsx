import ExploreCarousel from "./ExploreCarousel";
import SectionTitle from "./SectionTitle";

const Explore = () => {
  return (
    <section className="">
      <SectionTitle text="" />
      <p className="text-2xl text-gray-500">
        Explore the world with what you love beautiful natural beauty.
      </p>
      <div className="relative align-element">
        <ExploreCarousel />
      </div>
    </section>
  );
};
export default Explore;
