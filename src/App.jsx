import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AboutUs,
  AppLayout,
  Contact,
  Home,
  Package,
  SingleBlog,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
