import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import LogIn from "../pages/logIn/LogIn";
import Service from "../pages/Service/Service";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/service',
        Component: Service,
      },
      {
        path:'/login',
        Component: LogIn,
      },
      {
        path: '/register',
        Component: Register,
      }
    ]
  },
]);

export default router;