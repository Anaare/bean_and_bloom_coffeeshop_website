import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Welcome from "./pages/welcome__page/Welcome__page.jsx";
import Menu from "./pages/menu/Menu.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Order__online from "./pages/order__online/Order__online.jsx";
import Order__confirmation from "./pages/order__confirmation/order__confirmation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/order__online",
        element: <Order__online />,
      },
      {
        path: "/order__confirmation",
        element: <Order__confirmation />,
      },
    ],
  },
]);
export default router;
