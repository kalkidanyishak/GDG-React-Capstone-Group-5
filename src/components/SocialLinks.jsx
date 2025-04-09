import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook className="text-2xl duration-200 hover:text-gray-600" />,
  },
  {
    id: 2,
    url: "https://x.com",
    icon: <FaTwitter className="text-2xl duration-200 hover:text-gray-600" />,
  },
  {
    id: 3,
    url: "https://youtube.com",
    icon: <FaYoutube className="text-2xl duration-200 hover:text-gray-600" />,
  },
  {
    id: 4,
    url: "https://www.instagram.com",
    icon: <FaInstagram className="text-2xl duration-200 hover:text-gray-600" />,
  },
];

const SocialLinks = () => {
  return (
    <ul className="flex flex-row space-x-4">
      {socialLinks.map((link) => {
        const { id, url, icon } = link;
        return (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
