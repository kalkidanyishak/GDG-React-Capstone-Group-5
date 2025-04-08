import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AboutUs,
  AppLayout,
  Contact,
  Error,
  Home,
  Package,
  SingleBlog,
  Destinations
} from "./pages";

import { loader as destinationsLoader } from "./pages/Destinations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
