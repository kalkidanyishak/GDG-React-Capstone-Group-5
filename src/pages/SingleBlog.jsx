import blogHero from "../assets/images/blog-hero-bg.png";
import { Hero } from "../components";
import { Link } from "react-router-dom";
import image1blog from "../assets/images/image1blog.png"; 
import coupletravelers from "../assets/images/coupletravelers.png"; 
import post1 from "../assets/images/post1.png"; 
import post2 from "../assets/images/post2.png";
import post3 from "../assets/images/post3.png";

// Import icons (replace with actual paths to icons or use a library like react-icons)
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"; 

const SingleBlog = () => {
  return (
    <div className="pt-12"> {/* Adjusted padding here */}
      <Hero backgroundImage={blogHero} className="items-center">
        <h1 className="text-white text-5xl font-bold mb-4 text-center max-w-lg">
          Travel Stories For Now and the Future
        </h1>
      </Hero>

      <main className="flex flex-col lg:flex-row gap-10 px-6 py-10 max-w-7xl mx-auto">
        {/* Left Blog Content */}
        <div className="lg:w-2/3 space-y-12">
          <div>
            <img
              src={image1blog}
              alt="Explore Destination"
              className="rounded-lg mb-4 object-cover w-[600px] h-[400px]"
            />

            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Rice Terraces, Tegallalang</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <img
              src={coupletravelers}
              alt="Couple Travelers"
              className="rounded-lg mb-4 object-cover w-[600px] h-[400px]"
            />

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <div className="text-sm text-gray-500 mt-6 flex justify-between items-center">
              <span>Tags: Destination, Travel</span>
              <span className="flex items-center space-x-3">
                <span>Share This</span>
                <FaFacebookF className="text-blue-600 cursor-pointer hover:text-blue-800" />
                <FaLinkedinIn className="text-blue-600 cursor-pointer hover:text-blue-800" />
                <FaTwitter className="text-blue-500 cursor-pointer hover:text-blue-700" />
              </span>
            </div>
          </div>

          {/* 💬 Comment Form Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Leave a Reply</h2>
            <p className="text-sm text-gray-600 mb-6">
              Your email address will not be published. Required fields are marked *
            </p>

            <form className="space-y-6">
              {/* Comment */}
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                  Comment
                </label>
                <textarea
                  id="comment"
                  rows="5"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <input
                  id="website"
                  type="url"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center">
                <input
                  id="save-info"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="save-info" className="ml-2 block text-sm text-gray-600">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3 space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Post</h3>
            <ul className="space-y-3">
              {[ 
                { img: post1, title: "Exploring the Mountains", date: "14 Dec 2022" },
                { img: post2, title: "A Journey Through Time", date: "21 Jan 2023" },
                { img: post3, title: "Sunsets & Ocean Breeze", date: "03 Mar 2023" }
              ].map((post, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <img src={post.img} alt={`Post ${idx + 1}`} className="w-20 h-20 rounded object-cover" />
                  <div>
                    <p className="text-sm font-semibold">{post.title}</p>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Travel</li>
              <li>Tips</li>
              <li>Stories</li>
              <li>Destination</li>
            </ul>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Have Any Question?</h3>
            <p className="text-sm mb-4">Do not hesitate to give us a call. We are happy to talk to you.</p>
            <p className="text-sm"><strong>📞</strong> +61 4343 9208</p>
            <p className="text-sm"><strong>✉️</strong> contact@domain.com</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleBlog;
