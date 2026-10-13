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
import AboutPage from "../pages/about/AboutPage";
import Academics from "../pages/academics/Academics";
import ProgramPage from "../pages/academics/ProgramPage";
import Admission from "../pages/admission/Admission";
import Affiliations from "../pages/affiliations/Affiliations";
import StudentLifeIndex from "../pages/student-life/StudentLifeIndex";
import StudentLifeActivity from "../pages/student-life/StudentLifeActivity";
import { programs } from "../config/programs";

const ThankYou = lazy(() => import("../pages/thank-you/ThankYou"));
const CareerTestPage = lazy(() => import("../pages/careertest/CareerTest"));
const NotFound = lazy(() => import("../pages/not-found/NotFound"));
const AppLanding = lazy(() => import("../pages/app-landing/AppLanding"));
const YoungInnovatorsOlympiad = lazy(
  () => import("../pages/events/YoungInnovatorsOlympiad"),
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
          ...programs.map((program) => ({
            path: program.slug,
            element: <ProgramPage program={program} />,
          })),
        ],
      },
      {
        path: "/affiliations",
        element: <Affiliations />,
      },
      {
        path: "/student-life",
        children: [
          { index: true, element: <StudentLifeIndex /> },
          { path: ":activitySlug", element: <StudentLifeActivity /> },
        ],
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
        path: "/events/young-innovators-olympiad",
        element: <YoungInnovatorsOlympiad />,
      },
      {
        path: "/thank-you",
        element: <ThankYou />,
      },
    ],
  },
  {
    path: "/ec_app",
    element: <AppLanding />,
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
