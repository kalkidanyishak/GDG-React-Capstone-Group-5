import { Hero } from "../components";
import aboutHero from "../assets/images/about-hero-bg.png";
import { Link } from "react-router-dom";
import { BiSolidQuoteLeft, BiRocket } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import Statistics from "../components/Statistics";
import Gallary from "../components/Gallary";
import travelerMan from "../assets/images/traveler-man.png";

const AboutUs = () => {
  return (
    <>
      {/* section 1 banner  */}
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
      {/* section 2 vision and mision   */}

      <div className="container mx-auto px-1 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-34 ">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-6xl font-bold">
              <RiTeamLine />
            </h2>
            <h2 className="text-3xl font-bold">Great team work</h2>
            <p className="text-gray-500 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus deserunt recusandae, cumque distinctio nulla aut culpa
              itaque corporis deleniti facere et.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-6xl font-bold">
              <BiRocket />
            </h2>
            <h2 className="text-3xl font-bold">Vision</h2>
            <p className="text-gray-500 px-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus deserunt recusandae, cumque distinctio nulla aut culpa
              itaque corporis deleniti facere et.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="text-6xl font-bold">
              <BsGraphUp />
            </h2>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-500 px-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus deserunt recusandae, cumque distinctio nulla aut culpa
              itaque corporis deleniti facere et.
            </p>
          </div>
        </div>
      </div>

      {/* section 3 founder message  */}

      <div className="container mx-auto px-1 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-34">
          <div>
            <img
              className="rounded-tl-[100px] rounded-br-[100px]"
              src={travelerMan}
              alt="traveler-man"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold">
              <BiSolidQuoteLeft />
            </h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, culpa nulla deserunt sunt magnam praesentium minus
              consequuntur? Est distinctio omnis eligendi non.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              reprehenderit culpa sit fuga iure, placeat omnis veniam enim
              temporibus eos adipisci tenetur rem optio quos quis obcaecati
              maxime dignissimos molestias.
            </p>
            <h3 className="text-2xl font-bold mt-3">Siti Sarah</h3>
            <h6>Founder Travasca</h6>
          </div>
        </div>
      </div>
      {/* section 4 statistics  */}
      <div>
        <Statistics />
      </div>
      <div>
        <Gallary />
      </div>
    </>
  );
};
export default AboutUs;
