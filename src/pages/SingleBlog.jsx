import blogHero from "../assets/images/blog-hero-bg.png";
import { Hero } from "../components";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <div>
      <Hero backgroundImage={blogHero} className="items-center">
        <h1 className="text-white text-5xl font-bold mb-4 text-center max-w-lg">
          Travel Stories For Now and the Future
        </h1>
        <div className="flex">{/* CODE HERE */}</div>
      </Hero>
    </div>
  );
};
export default SingleBlog;

// Travel Stories For Now and the Future
