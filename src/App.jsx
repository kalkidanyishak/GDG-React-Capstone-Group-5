import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AboutUs,
  AppLayout,
  Booking,
  Contact,
  Destinations,
  Error,
  Home,
  Package,
  SingleBlog,
  SingleDestination,
} from "./pages";

// loaders
import { loader as travelCarouselLoader } from "./components/TravelCarousel";
import { loader as destinationsLoader } from "./pages/Destinations";
import { loader as singleDestinationLoader } from "./pages/SingleDestination";
import { loader as bookingLoader } from "./pages/Booking";

// actions
import { action as subscribeAction } from "./components/Subscribe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    action: subscribeAction,
    children: [
      {
        index: true,
        loader: travelCarouselLoader,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "package",
        element: <Package />,
      },
      {
        path: "blog",
        element: <SingleBlog />,
      },
      {
        path: "destinations",
        element: <Destinations />,
        loader: destinationsLoader,
      },
      {
        path: "destinations/:id",
        element: <SingleDestination />,
        loader: singleDestinationLoader,
      },
      {
        path: "booking/:id",
        element: <Booking />,
        loader: bookingLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
