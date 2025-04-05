import packageHero from "../assets/images/package-hero-bg.png";
import { Hero } from "../components";
import { Link } from "react-router-dom";
import "./package.css";

const packages = [
  {
    image: "images/image2.png",
    country: "Paris",
    price: "$299.00/2day",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore, hic mollitia nam amet labore iure.",
  },
  {
    image: "images/image3.png",
    country: "Swiss",
    price: "$299.00/2day",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore, hic mollitia nam amet labore iure.",
  },
  {
    image: "images/image4.png",
    country: "Thailand",
    price: "$299.00/2day",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore, hic mollitia nam amet labore iure.",
  },
  {
    image: "images/image5.png",
    country: "Taiwan",
    price: "$299.00/2day",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore, hic mollitia nam amet labore iure.",
  },
  {
    image: "images/image6.png",
    country: "Indonesi",
    price: "$299.00/2day",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore, hic mollitia nam amet labore iure.",
  },
  {
    image: "images/image7.png",
    country: "Singapore",
    price: "$299.00/2day",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore, hic mollitia nam amet labore iure.",
  },
];

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
      <div>
        <h1 className="header">Popular Destination</h1>

        <div className="para__btn">
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vitae tempore iusto dolore corporis maxime vel quia aut laboriosam
            vero.
          </p>

          <button>Discover More</button>
        </div>

        <div className="packages__card">
          {packages.map((item, i) => (
            <Lists key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Package;

function Lists({ item, children }) {
  return (
    <div className="package__card">
      <div>
        <img src={item.image} alt="" className="packages__image" />
      </div>

      <div>
        <div className="country__price">
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            {" "}
            {item.country}{" "}
          </p>
          <p>{item.price} </p>
        </div>

        <div>{item.discription}</div>
      </div>
      <div className="booking__rating">
        <div className="stars">
          {Array.from({ length: 5 }, (_, i) => (
            <img className="star-icon" src="images/one-star-icon.svg" />
          ))}
        </div>
        <button className="booking__btn">Booking Now</button>
      </div>
    </div>
  );
}
