import { Hero } from "../components";
import aboutHero from "../assets/about-hero-bg.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <Hero backgroundImage={aboutHero} className="items-center">
        <h1 className="text-white text-5xl font-bold mb-4">About Us</h1>
        <div className="text-lg text-white font-semibold breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </Hero>
    </div>
  );
};
export default AboutUs;
