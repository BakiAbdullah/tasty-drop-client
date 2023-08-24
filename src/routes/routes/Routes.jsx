import { createBrowserRouter } from "react-router-dom";
import Main from "./../../layout/Main";
import Home from "../../pages/home/Home";
import Rider from "../../pages/rider/Rider";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUp from "../../pages/signup/SignUp";
import ScrollToTop from "../../components/ScrollToTop";
import Partner from "../../pages/partner/Partner";
import Worker from "../../pages/Worker/Worker";
import ErrorPage from "../../components/shared/ErrorPage/ErrorPage";
import Restaurant from "../../pages/home/Restaurant/Restaurant";
import AllRestaurant from "../../pages/AllRestaurant/AllRestaurant";
import PartnerRegistration from "../../pages/partner/PartnerRegistration";
import PrivateRoute from "../privateRoute/PrivateRoute";
import DashboardLayout from "../../layout/DashboardLayout";
import Admin from "../../pages/Dashboard/Admin/Admin";
import Business from "../../pages/Dashboard/Business/Business";
import Partners from "../../pages/Dashboard/Partner/Partners";
import Riders from "../../pages/Dashboard/Rider/Riders";
import Login from "../../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main />
        <ScrollToTop></ScrollToTop>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "riders",
        element: <Rider></Rider>,
      },
      {
        path: "partners",
        element: <Partner></Partner>,
      },
      {
        path: "teams",
        element: <Worker></Worker>,
      },
      {
        path: "city/:cityName",
        element: <AllRestaurant></AllRestaurant>,
      },
      {
        path: "restaurant/:id",
        element: <Restaurant></Restaurant>,
        loader: ({params}) => fetch(`http://localhost:5000/singleRestaurant/${params.id}`)
      },

      {
        path: "/partners/register",
        element: (
          <PrivateRoute>
            <PartnerRegistration></PartnerRegistration>
          </PrivateRoute>
        ),
        // element:<PartnerRegistration />
      },

      // Login & Signup Routes
      {
        path: "/loginpage",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },

  // Dashboard Routes ==========>
  {
    path: "/dashboard",
    element: (
      <>
        <DashboardLayout></DashboardLayout>
        <ScrollToTop></ScrollToTop>
      </>
    ),
    children: [
      {
        path: "/dashboard/admin",
        element: <Admin></Admin>,
      },
      {
        path: "/dashboard/business",
        element: <Business></Business>,
      },
      {
        path: "/dashboard/partners",
        element: <Partners></Partners>
      },
      {
        path: "/dashboard/rider",
        element: <Riders></Riders>
      },
    ],
  },
]);
export default router;
