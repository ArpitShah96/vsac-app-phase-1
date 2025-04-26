import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import { ROUTES } from "./routerConfig";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Services from "../pages/public/Services";
import Contact from "../pages/public/Contact";
import NotFound from "../pages/public/NotFound";

// Create the router instance
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTES.HOME.path,
        element: <Home />
      },
      {
        path: ROUTES.ABOUT.path,
        element: <About />
      },
      {
        path: ROUTES.SERVICES.path,
        element: <Services />
      },
      {
        path: ROUTES.CONTACT.path,
        element: <Contact />
      }
    ]
  }
]);