import { Hero } from "../components";
import heroImg from "../assets/home-hero-bg.png";

const Home = () => {
  return (
    <Hero backgroundImage={heroImg} className="items-center">
      <h1 className="text-white text-4xl font-bold">Welcome to Our Site</h1>
      <p className="text-white text-lg mt-2">Discover amazing content</p>
      <h1 className="text-white text-4xl font-bold">Welcome to Our Site</h1>
      <p className="text-white text-lg mt-2">Discover amazing content</p>
      <h1 className="text-white text-4xl font-bold">Welcome to Our Site</h1>
      <p className="text-white text-lg mt-2">Discover amazing content</p>
      <h1 className="text-white text-4xl font-bold">Welcome to Our Site</h1>
      <p className="text-white text-lg mt-2">Discover amazing content</p>
    </Hero>
  );
};
export default Home;
