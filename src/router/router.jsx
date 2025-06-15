import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import LogIn from "../pages/logIn/LogIn";
import Service from "../pages/Service/ServiceDetails";
import Register from "../pages/register/Register";
import AddService from "../pages/addService/AddService";
import ManageService from "../pages/manageService/ManageService";
import BookedServices from "../pages/bookedServices/BookedServices";
import ServiceToDo from "../pages/serviceToDo/ServiceToDo";
import PrivacyPolicy from "../pages/Shared/PrivacyPolicy";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AllServicesPage from "../pages/allServicessPage/AllServicesPage";

import ServiceDetails from "../pages/Service/ServiceDetails";
import PrivateRoute from "../pages/Shared/PrivateRoute";
import ManageServices from "../pages/manageService/ManageService";
import Loading from "../pages/loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/addServices'),
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>,
        
      },
      {
        path: '/services/:id',
        element: <PrivateRoute>
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>
      },
      {
        path: "/all-services",
        Component: AllServicesPage,
        loader: () => fetch('http://localhost:3000/addServices'),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: '/dashboard/add-service',
        Component: AddService,
      },
      {
        path: '/dashboard/manage-service',
       element:<PrivateRoute>
        <ManageServices></ManageServices>
       </PrivateRoute>,
      },
      {
        path: '/dashboard/booked-services',
        element: <PrivateRoute>
          <BookedServices></BookedServices>
        </PrivateRoute>,
      },
      {
        path: '/dashboard/service-to-do',
        element: <PrivateRoute>
          <ServiceToDo></ServiceToDo>
        </PrivateRoute>,
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