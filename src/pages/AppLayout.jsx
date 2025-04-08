import { Outlet, useNavigation } from "react-router-dom";
import { Footer, Loading } from "../components";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      {isPageLoading ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
};
export default AppLayout;
