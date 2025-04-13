import packageHero from "../assets/package-hero-bg.png";
import { Hero } from "../components";
import { Link } from "react-router-dom";
import "./package.css";
import { useEffect, useState } from "react";

const img = [
  {
    image: "images/image2.png",
  },
  {
    image: "images/image3.png",
  },
  {
    image: "images/image4.png",
  },
  {
    image: "images/image5.png",
  },
  {
    image: "images/image6.png",
  },
  {
    image: "images/image7.png",
  },
];
const Package = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetched = async () => {
      try {
        const response = await fetch(
          "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations"
        );
        if (!response.ok) {
          throw new Error("network response was not ok");
        }
        const json = await response.json();
        setPackages(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetched();
  }, []);

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

          <button className="btn">Discover More</button>
        </div>
        <div className="container">
          <div className="packages__card">
            {packages.slice(0, 6).map((item, i) => (
              <Lists key={item.i || i} item={item} image={img[i].image} />
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
          <button className="tips_btn">View More</button>
        </div>
        <div className="box">
          <div className="perfect">
            <p
              style={{
                fontSize: "18px",
                marginLeft: "1rem",
                marginTop: "1rem",
                fontWeight: "400",
              }}
            >
              Perfect | Tips
            </p>
            <h3
              style={{
                fontSize: "25px",
                marginLeft: "1.2rem",
                width: "21.5ch",
                fontWeight: "600",
              }}
            >
              9 Popular Travel Destintion on Sale in 2022 -
            </h3>
            <p
              style={{
                fontSize: "14px",
                margin: "1.2rem",
                marginBottom: "4rem",
                fontWeight: "300",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <button className="tips_btn">Read more</button>
          </div>
          <div className=" stories">
            <img
              src="images/image9.png"
              alt=""
            />
            <p
              style={{
                fontSize: "18px",
                marginTop: "1rem",
                marginLeft: "1rem",
                fontWeight: "400",
              }}
            >
              Strories | Tips
            </p>
            <h3
              style={{
                fontSize: "20px",
                marginLeft: "1rem",
                width: "21.5ch",
                fontWeight: "600",
              }}
            >
              How Are We Going to Travel in 2022 -
            </h3>
            <p
              style={{
                fontSize: "14px",
                margin: "1.2rem",
                marginBottom: "2.5rem",
                fontWeight: "300",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <button className="tips_btn" style={{ marginBottom: "2.5rem" }}>
              Read more
            </button>
          </div>
          <div className="Tips">
            <p
              style={{
                fontSize: "18px",
                marginTop: "1rem",
                marginLeft: "1rem",
                fontWeight: "400",
              }}
            >
              Tips | Travel
            </p>
            <h3
              style={{
                fontSize: "25px",
                marginLeft: "1.2rem",
                width: "15.5rem",
                fontWeight: "600",
              }}
            >
              How Are We Going to Travel in 2022 -
            </h3>
            <p
              style={{
                fontSize: "14px",
                margin: "1.2rem",
                marginBottom: "4rem",
                fontWeight: "300",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <button className="tips_btn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Lists({ item, image }) {
  return (
    <div className="package__card">
      <div>
        <img src={image} alt={item.country} className="packages__image" />
      </div>

      <div>
        <div className="country__price">
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>{item.country}</p>
          <strong>
            <p>{item.price} </p>
          </strong>
        </div>

        <div className="message">{item.description}</div>
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

export default Package;
