import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about us" },
  { id: 3, url: "package", text: "package" },
  { id: 4, url: "destinations", text: "destination" },
  { id: 5, url: "blog", text: "blog" },
  { id: 6, url: "contact", text: "contact" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink
              to={url}
              className={({ isActive }) =>
                isActive
                  ? "capitalize text-white font-bold"
                  : "capitalize text-white font-medium tracking-wider"
              }
            >
              {text} {id !== 1 ? <FaAngleDown /> : ""}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
