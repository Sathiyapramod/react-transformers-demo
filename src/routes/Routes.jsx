import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
// Please import all the four components here
import Home from "../components/Home";
import Skill from "../components/Skill";
import Contact from "../components/Contact";
import About from "../components/About";
import Customers from "../components/Customers";
import CustomerDetail from "../components/CustomerDetail";
// please import error page here
import ErrorPage from "../components/ErrorPage";

/**
 * /home - Home
 * /skill - Skill
 * /contact - Contact
 * /about -About
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/customers/:id",
        element: <CustomerDetail />,
      },
      {
        path: "/theme",
        element: <div></div>,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
