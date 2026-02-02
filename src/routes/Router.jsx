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
import AboutPage from "../pages/about/AboutPage";
import Academics from "../pages/academics/Academics";
import Admission from "../pages/admission/Admission";
import Affiliations from "../pages/affiliations/Affiliations";

const ThankYou = lazy(() => import("../pages/thank-you/ThankYou"));
const CareerTestPage = lazy(() => import("../pages/careertest/CareerTest"));
const NotFound = lazy(() => import("../pages/not-found/NotFound"));

const SoftwareEngineering = lazy(
  () => import("../pages/academics/SoftwareEngineering"),
);
const CyberSecurity = lazy(() => import("../pages/academics/CyberSecurity"));
const ManagementInIT = lazy(() => import("../pages/academics/ManagementInIT"));
const IndustrialDesign = lazy(
  () => import("../pages/academics/IndustrialDesign"),
);

// Initialize Google Analytics
ReactGA.initialize("G-2M2GPPXSPW");

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

        children: [
          { index: true, element: <Academics /> },

          {
            path: "software-engineering",
            element: <SoftwareEngineering />,
          },
          {
            path: "cyber-security",
            element: <CyberSecurity />,
          },
          {
            path: "management-in-it",
            element: <ManagementInIT />,
          },
          {
            path: "industrial-design",
            element: <IndustrialDesign />,
          },
        ],
      },
      {
        path: "/affiliations",
        element: <Affiliations />,
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
