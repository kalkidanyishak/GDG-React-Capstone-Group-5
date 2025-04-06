import packageHero from "../assets/package-hero-bg.png";
import { Hero } from "../components";
import { Link } from "react-router-dom";
import "./package.css";

const packages = [
  {
    image: "images/image2.png",
    country: "Paris",
    price: "$299.00/2days",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore,.",
  },
  {
    image: "images/image3.png",
    country: "Swiss",
    price: "$299.00/2days",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore,.",
  },
  {
    image: "images/image4.png",
    country: "Thailand",
    price: "$299.00/2days",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore,.",
  },
  {
    image: "images/image5.png",
    country: "Taiwan",
    price: "$299.00/2days",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore,.",
  },
  {
    image: "images/image6.png",
    country: "Indonesi",
    price: "$299.00/2days",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore,.",
  },
  {
    image: "images/image7.png",
    country: "Singapore",
    price: "$299.00/2day",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium repudiandae perspiciatis sequi sed? Voluptatum ab nulla dolor quibusdam modi. A enim velit voluptatem dolore,.",
  },
];

const Tips = [
  {
    discribe: "Perfect ",
    header: "9 Popular Travel Destintion on Sale in 2022 -",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  sit amet consectetur adipisicing elit",
  },
  {
    img: "images/image9.png",
    discribe: "Stories",
    header: "Travel Stories For Now and the Future  -",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  sit amet consectetur adipisicing elit",
  },
  {
    discribe: "Tips",
    header: "How Are We Going to Travel in 2022 -",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  sit amet consectetur adipisicing elit",
  },
];

const Package = () => {
  const firstColumnTips = Tips.filter(
    (tip) => tip.discribe.includes("Perfect") || tip.discribe.includes("Tips")
  );

  const secondColumnTips = Tips.filter(
    (tip) =>
      tip.discribe.includes("Stories") &&
      !tip.discribe.includes("Perfect") &&
      !tip.discribe.includes("Tips")
  );

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
            vero.{" "}
          </p>

          <button className="btn">Discover More</button>
        </div>
        <div className="container">
          <div className="packages__card">
            {packages.map((item, i) => (
              <Lists key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <img src="public/images/image8.png" alt="" />
      </div>
      <div>
        <h1 className="header">Tips & Article</h1>
        <div className="para__btn">
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vitae tempore iusto dolore corporis maxime vel quia aut laboriosam
            vero.
          </p>
          <button className="btn">View More</button>
        </div>
        <div className="box">
          <div className="tips__card">
            <div
              className="first_column"
              style={{ flex: 1, paddingRight: "20px" }}
            >
              {firstColumnTips.map((list, i) => (
                <TipsList key={i} list={list} />
              ))}
            </div>
            <div className="second_column">
              {secondColumnTips.map((list, i) => (
                <TipsList key={i} list={list} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Lists({ item }) {
  return (
    <div className="package__card">
      <div>
        <img src={item.image} alt="" className="packages__image" />
      </div>

      <div>
        <div className="country__price">
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            {item.country}
          </p>
          <strong>
            <p>{item.price} </p>
          </strong>
        </div>

        <div className="message">{item.discription}</div>
      </div>
      <div className="booking__rating">
        <div className="stars">
          {Array.from({ length: 5 }, ( _, i) => (
            <img className="star-icon" src="images/one-star-icon.svg" />
          ))}
        </div>
        <button className="booking__btn">Booking Now</button>
      </div>
    </div>
  );
}

function TipsList({ list }) {
  const isStory = list.discribe.includes("Stories");

  return (
    <div className={`tip__card ${isStory ? "story-card" : "gap"}`}>
      {isStory && list.img && (
        <img src={list.img} alt="Story Tip" className="tip__image" />
      )}
      <p className="topic">{list.discribe}</p>
      <h3 className="tip__description">{list.header}</h3>
      <p className="message">{list.message}</p>
      <button className="read_btn">Read More</button>
    </div>
  );
}

export default Package;
