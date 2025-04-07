import packageHero from "../assets/images/package-hero-bg.png";
import { Hero } from "../components";
import { Link } from "react-router-dom";

const Package = () => {
  return (
    <div>
      <Hero backgroundImage={packageHero} className="items-center">
        <h1 className="text-white text-5xl font-bold mb-4">Travel Packages</h1>
        <div className="text-lg text-white font-semibold breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/package">Package</Link>
            </li>
          </ul>
        </div>
      </Hero>

    </div>
  );
};

export default Package;
