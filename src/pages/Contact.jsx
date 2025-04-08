import contactHero from "../assets/images/contact-hero-bg.png";
import { Hero } from "../components";
import { Link } from "react-router-dom";
import ContactUs from "../components/ContactUs";

const Contact = () => {
  return (
    <div className="bg-green-300 min-h-screen">
      <Hero backgroundImage={contactHero} className="items-center">
        <h1 className="text-white text-5xl font-bold mb-4">Contact</h1>
        <div className="text-lg text-white font-semibold breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </Hero>
        <ContactUs/>
    </div>
  );
};
export default Contact;
