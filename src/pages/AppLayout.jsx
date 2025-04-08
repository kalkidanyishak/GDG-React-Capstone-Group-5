import { Outlet } from "react-router-dom";
import { Footer } from "../components";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};
export default AppLayout;
