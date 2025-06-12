import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import LogIn from "../pages/logIn/LogIn";
import Service from "../pages/Service/Services";
import Register from "../pages/register/Register";
import AddService from "../pages/addService/AddService";
import ManageService from "../pages/manageService/ManageService";
import BookedServices from "../pages/bookedServices/BookedServices";
import ServiceToDo from "../pages/serviceToDo/ServiceToDo";
import PrivacyPolicy from "../pages/Shared/PrivacyPolicy";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AllServicesPage from "../pages/allServicessPage/AllServicesPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/addServices'),
        Component: Home,
      },
      {
        path: '/service',
        Component: Service,
      },
      {
        path: "/all-services",
        Component: AllServicesPage,
        loader: () => fetch('http://localhost:3000/addServices'),
      },
      {
        path: '/dashboard/add-service',
        Component: AddService,
      },
      {
        path: '/dashboard/manage-service',
        Component: ManageService,
      },
      {
        path: '/dashboard/booked-services',
        Component: BookedServices,
      },
      {
        path: '/dashboard/service-to-do',
        Component: ServiceToDo,
      },
      {
        path: '/login',
        Component: LogIn,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/privacyPolicy',
        Component: PrivacyPolicy
      }

    ]

  },
  {
    path: '/*',
    Component: ErrorPage
  }
]);

export default router;