import React, { lazy, Suspense, useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import ReactGA from "react-ga4";
import Home from "../pages/home/Home";
import BaseLayout from "../components/layouts/BaseLayout";
import Spinner from "../components/spinner/Spinner";
import AboutPage from "../pages/about/AboutPage";
import Academics from "../pages/academics/Academics";
import Admission from "../pages/admission/Admission";
import Affiliations from "../pages/affiliations/Affiliations";

// Helper for lazy imports to auto-reload if an outdated deployment chunk error occurs
const safeLazy = (importFn) =>
  lazy(async () => {
    const isRefreshed = sessionStorage.getItem("chunk_reload_done");
    try {
      const component = await importFn();
      sessionStorage.removeItem("chunk_reload_done");
      return component;
    } catch (error) {
      if (!isRefreshed) {
        sessionStorage.setItem("chunk_reload_done", "true");
        window.location.reload();
        return new Promise(() => {});
      }
      throw error;
    }
  });

const ThankYou = safeLazy(() => import("../pages/thank-you/ThankYou"));
const CareerTestPage = safeLazy(() => import("../pages/careertest/CareerTest"));
const NotFound = safeLazy(() => import("../pages/not-found/NotFound"));
const AppLanding = safeLazy(() => import("../pages/app-landing/AppLanding"));
const YoungInnovatorsOlympiad = safeLazy(
  () => import("../pages/events/YoungInnovatorsOlympiad"),
);

const SoftwareEngineering = safeLazy(
  () => import("../pages/academics/SoftwareEngineering"),
);
const CyberSecurity = safeLazy(() => import("../pages/academics/CyberSecurity"));
const ManagementInIT = safeLazy(() => import("../pages/academics/ManagementInIT"));
const IndustrialDesign = safeLazy(
  () => import("../pages/academics/IndustrialDesign"),
);
const Marketing = safeLazy(() => import("../pages/academics/Marketing"));

const StudentLife = safeLazy(() => import("../pages/student-life/StudentLife"));

// Initialize Google Analytics
ReactGA.initialize("G-2M2GPPXSPW");

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    if (!sessionStorage.getItem("error_reload_done")) {
      sessionStorage.setItem("error_reload_done", "true");
      window.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
          <h2>Страница обновляется... / Updating page...</h2>
          <p style={{ color: "#888", marginTop: "8px" }}>
            Загрузка свежей версии сайта
          </p>
          <button
            onClick={() => {
              sessionStorage.clear();
              window.location.reload();
            }}
            style={{
              padding: "10px 20px",
              background: "#1C3C71",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "16px",
            }}
          >
            Обновить вручную
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    try {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    } catch (err) {
      console.warn("Analytics hit skipped:", err);
    }
  }, [location]);

  return <Outlet />;
}

const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
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
                { path: ":programId", element: <Academics /> },
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
                {
                  path: "marketing",
                  element: <Marketing />,
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
              path: "/events/young-innovators-olympiad",
              element: <YoungInnovatorsOlympiad />,
            },
            {
              path: "/student-life",
              children: [
                { index: true, element: <StudentLife /> },
                { path: ":clubId", element: <StudentLife /> },
              ],
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
      ],
    },
  ],
  { basename: "/ec_webpage" }
);

function Router() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Router;
