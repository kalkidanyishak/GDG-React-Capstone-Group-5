import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";

const AppLayout = () => {
  return (
    <>
      <nav className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="about">About Us</Link>
        <Link to="blog">Blog</Link>
        <Link to="contact">Contact</Link>
        <Link to="package">Package</Link>
      </nav>
      <Button>Subscribe</Button>
      <Outlet />
    </>
  );
};
export default AppLayout;
