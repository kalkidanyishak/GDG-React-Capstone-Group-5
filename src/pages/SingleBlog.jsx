import blogHero from "../assets/images/blog-hero-bg.png";
import { Hero } from "../components";
import { Link } from "react-router-dom";
import image1blog from "../assets/images/image1blog.png"; 
import coupletravelers from "../assets/images/coupletravelers.png"; 
import post1 from "../assets/images/post1.png"; 
import post2 from "../assets/images/post2.png";
import post3 from "../assets/images/post3.png";
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"; 
import { toast } from "react-toastify";


const SingleBlog = () => {
  const [comments, setComments] = React.useState([]);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    website: "",
    comment: ""
  });
  const [commentsVisible, setCommentsVisible] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([
      ...comments,
      { ...formData, id: comments.length + 1 }
    ]);
    setFormData({ name: "", email: "", website: "", comment: "" });
  };

  const toggleCommentsVisibility = () => {
    setCommentsVisible(!commentsVisible);
  };

  return (
    <div className="pt-12">
      <Hero backgroundImage={blogHero} className="items-center">
        <h1 className="text-white text-5xl font-bold mb-4 text-center max-w-lg">
          Travel Stories For Now and the Future
        </h1>
      </Hero>

      <main className="flex flex-col lg:flex-row gap-10 px-6 py-10 max-w-7xl mx-auto">
        <div className="lg:w-2/3 space-y-12">
          <div>
            <img src={image1blog} alt="Explore Destination" className="rounded-lg mb-4 object-cover w-[600px] h-[400px]" />
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet...</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Rice Terraces, Tegallalang</h2>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet...</p>
            <img src={coupletravelers} alt="Couple Travelers" className="rounded-lg mb-4 object-cover w-[600px] h-[400px]" />
            <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
            <div className="text-sm text-gray-500 mt-6 flex justify-between items-center">
              <span>Tags: Destination, Travel</span>
              <span className="flex items-center space-x-3">
                <span>Share This</span>
                <Link to="/contact"><FaFacebookF className="text-blue-600 cursor-pointer hover:text-blue-800" /></Link>
                <Link to="/contact"><FaLinkedinIn className="text-blue-600 cursor-pointer hover:text-blue-800" /></Link>
                <Link to="/contact"><FaTwitter className="text-blue-500 cursor-pointer hover:text-blue-700" /></Link>
              </span>
            </div>
          </div>

          {/* 💬 Comment Form Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Leave a Reply</h2>
            <p className="text-sm text-gray-600 mb-6">Your email address will not be published. Required fields are marked *</p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                <textarea id="comment" rows="5" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })} required></textarea>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input id="name" type="text" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input id="email" type="email" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <input id="website" type="url" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center">
                  <input id="save-info" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="save-info" className="ml-2">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>
                <div><p className="text-xs">User Info Below</p></div>
              </div>
              <button type="submit" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">Post Comment</button>
            </form>
          </div>

          {/* Button to toggle comments visibility */}
          <button onClick={toggleCommentsVisibility} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
            {commentsVisible ? "Hide Comments" : "Show Comments"}
          </button>

          {/* Display Submitted Comments */}
          {commentsVisible && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Comments</h3>
              <div className="space-y-4 mt-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-t pt-4">
                    <p className="font-semibold">{comment.name}</p>
                    <p className="text-sm text-gray-500">{comment.email}</p>
                    <p>{comment.comment}</p>
                    {comment.website && (
                      <a href={comment.website} className="text-blue-600 hover:underline">{comment.website}</a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3 space-y-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Post</h3>
            <ul className="space-y-3">
              {[ { img: post1, title: "Exploring the Mountains", date: "14 Dec 2022" }, { img: post2, title: "A Journey Through Time", date: "21 Jan 2023" }, { img: post3, title: "Sunsets & Ocean Breeze", date: "03 Mar 2023" }].map((post, idx) => (
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
              {["Travel", "Tips", "Stories", "Destination"].map((cat, idx) => {
                let path = `/category/${cat.toLowerCase()}`;
                if (cat.toLowerCase() === "destination") path = "/destinations";
                if (cat.toLowerCase() === "stories") path = "/about";
                if (cat.toLowerCase() === "tips") path = "/Package";
                if (cat.toLowerCase() === "travel") path = "/destinations";
                return (
                  <li key={idx}>
                    <Link to={path} className="text-blue-600 hover:underline">{cat}</Link>
                  </li>
                );
              })}
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
