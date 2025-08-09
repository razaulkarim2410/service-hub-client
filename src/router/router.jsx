import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import LogIn from "../pages/logIn/LogIn";
import Register from "../pages/register/Register";
import ServiceDetails from "../pages/Service/ServiceDetails";
import AllServicesPage from "../pages/allServicessPage/AllServicesPage";
import AddService from "../pages/addService/AddService";
import ManageServices from "../pages/manageService/ManageService";
import BookedServices from "../pages/bookedServices/BookedServices";
import ServiceToDo from "../pages/serviceToDo/ServiceToDo";
import PrivacyPolicy from "../pages/Shared/PrivacyPolicy";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Loading from "../pages/loading/Loading";
import ServicePlanDetails from "../pages/Shared/ServicePlanDetails";
import HelpDetail from "../pages/Shared/HelpDetail";
import DailyLifeServices from "../pages/Shared/DailyLifeServices";

import PrivateRoute from "../pages/Shared/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout"; // import your new DashboardLayout

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://service-hub-server.vercel.app/addServices"),
        Component: Home,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-services",
        Component: AllServicesPage,
        loader: () => fetch("https://service-hub-server.vercel.app/addServices"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/plan-details",
        Component: ServicePlanDetails,
      },
      {
        path: "/help-details",
        Component: HelpDetail,
      },
      {
        path: "/simplify-details",
        Component: DailyLifeServices,
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/privacyPolicy",
        Component: PrivacyPolicy,
      },
      // Dashboard parent route with nested children
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "add-service",
            Component: AddService,
          },
          {
            path: "manage-service",
            Component: ManageServices,
          },
          {
            path: "booked-services",
            Component: BookedServices,
          },
          {
            path: "service-to-do",
            Component: ServiceToDo,
          },
          // add more dashboard nested routes here if needed
        ],
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
