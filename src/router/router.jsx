import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import LogIn from "../pages/logIn/LogIn";
import Service from "../pages/Service/Service";
import Register from "../pages/register/Register";
import AddService from "../pages/addService/AddService";
import ManageService from "../pages/manageService/ManageService";
import BookedServices from "../pages/bookedServices/BookedServices";
import ServiceToDo from "../pages/serviceToDo/ServiceToDo";

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
        path: '/dashboard/add-service',
        Component: AddService,
      },
      {
        path:'/dashboard/manage-service',
        Component: ManageService,
      },
      {
        path: '/dashboard/booked-services',
        Component: BookedServices,
      },
      {
        path:'/dashboard/service-to-do',
        Component: ServiceToDo,
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