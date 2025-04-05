import { CiSearch } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import navLogo from "../assets/images/logo.png";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <div className="relative z-40">
        <nav className="glass fixed w-screen">
          <div className="navbar align-element">
            <div className="navbar-start">
              {/* LOGO */}
              <NavLink to="/" className="hidden lg:flex items-center">
                <img
                  src={navLogo}
                  alt="Logo"
                  className="w-40 h-auto transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </NavLink>
              {/* DROPDOWN */}
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <FaBarsStaggered className="h-6 w-6" />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52"
                >
                  <NavLinks />
                </ul>
              </div>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal">
                <NavLinks />
              </ul>
            </div>
            <div className="navbar-end">
              <Search />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
