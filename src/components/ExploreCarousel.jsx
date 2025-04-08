import ExploreCard from "./ExploreCard";
import explore_1 from "../assets/images/explore-img-1.png";
import explore_2 from "../assets/images/explore-img-2.png";
import explore_3 from "../assets/images/explore-img-3.png";

const ExploreCarousel = () => {
  return (
    <>
      <div className="absolute top-1/2 -translate-y-1/2 transform z-10">
        <a href="#slide3" className="btn btn-circle">
          ❮
        </a>
      </div>
      <div className="carousel rounded-box space-x-4 w-full min-h-64">
        <div id="slide1" className="carousel-item relative w-1/3">
          <ExploreCard image={explore_1} />
        </div>
        <div id="slide2" className="carousel-item relative w-1/3">
          <ExploreCard image={explore_2} />
        </div>
        <div id="slide3" className="carousel-item relative w-1/3">
          <ExploreCard image={explore_3} />
        </div>
      </div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 transform">
        <a href="#slide1" className="btn btn-circle">
          ❯
        </a>
      </div>
    </>
  );
};
export default ExploreCarousel;
