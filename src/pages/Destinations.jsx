import { Link, useLoaderData } from "react-router-dom";
import { Hero, PopularDestinations } from "../components";
import dubai from "../assets/images/dubai.png";

export const loader = async () => {
  const response = await fetch(
    "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations"
  );
  if (!response.ok) {
    throw new Error("network response was not ok");
  }
  const destinations = await response.json();

  return destinations;
};

const Destinations = () => {
  const destinations = useLoaderData();

  return (
    <div className="min-h-screen">
      <Hero backgroundImage={dubai} className="items-center">
        <h1 className="text-white text-5xl font-bold mb-4 text-center">
          Popular Destinations
        </h1>
        <div className="text-lg text-white font-semibold breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="./pages/Destinations" className="hover:text-blue-600 transition">
      Destination
    </Link>
            </li>
          </ul>
        </div>
      </Hero>
      <PopularDestinations destinations={destinations} />
    </div>
  );
};
export default Destinations;
