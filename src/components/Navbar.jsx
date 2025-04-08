import { CiSearch } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import navLogo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="relative z-40">
        <nav className="glass bg-black opacity-80 fixed w-screen">
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

            <div className="navbar-center hidden lg:flex lg:items-center lg:mr-8">
              <ul className="menu menu-horizontal">
                <NavLinks />
                <div className="translate-y-1.5  px-2">
                  <CiSearch className="text-2xl text-white" />
                </div>
              </ul>
            </div>
            <div className="lg:hidden navbar-end">
              {/* LOGO */}
              <NavLink to="/" className="mr-8">
                <img
                  src={navLogo}
                  alt="Logo"
                  className="w-40 h-auto transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
