import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";
import Home from "../pages/home/Home";
import BaseLayout from "../components/layouts/BaseLayout";
import Spinner from "../components/spinner/Spinner";
import Colors from "../pages/Colors";

// Lazy load the pages
const AboutPage = lazy(() => import("../pages/about/AboutPage"));
const Academics = lazy(() => import("../pages/academics/Academics"));
const Admission = lazy(() => import("../pages/admission/Admission"));
const ThankYou = lazy(() => import("../pages/thank-you/ThankYou"));
const CareerTestPage = lazy(() => import("../pages/careertest/CareerTest"));
const NotFound = lazy(() => import("../pages/not-found/NotFound"));

// Initialize Google Analytics
ReactGA.initialize("G-2M2GPPXSPW");

// Define the router configuration
const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
      {
        path: "/career-test",
        element: <CareerTestPage />,
      },
      {
        path: "/admissions",
        element: <Admission />,
      },
      {
        path: "/thank-you",
        element: <ThankYou />,
      },
      {
        path: "/colors",
        element: <Colors />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function GAListener() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
}

function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router}>
        <GAListener />
      </RouterProvider>
    </Suspense>
  );
}

export default Router;
