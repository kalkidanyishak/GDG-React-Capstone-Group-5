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
      <div className="flex  mt-10 justfiy-center m-20">
              <div  className="flex mt-10  justify-center flex-col">
                <img src="images/icon1.png" alt="" className="w-15 "/>
                <h3>Great team work</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus vero provident modi blanditiis quis nemo? Voluptate
                  alias maiores exercitationem deserunt?
                </p>
              </div>
              <div className="flex mt-10 justify-center flex-col">
                <img src="images/icon2.png" alt=""  className="w-15 "/>
                <h3>Our vision </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus vero provident modi blanditiis quis nemo? Voluptate
                  alias maiores exercitationem deserunt?
                </p>
              </div>
              <div className="flex mt-10 justify-center flex-col">
                <img src="images/iccon3.png" alt="" className="flex w-15  justify-center "/>
                <h3>Our mission</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Natus vero provident modi blanditiis quis nemo? Voluptate
                  alias maiores exercitationem deserunt?
                </p>
              </div>
            </div>

    </div>
  );
};
export default AboutUs;
