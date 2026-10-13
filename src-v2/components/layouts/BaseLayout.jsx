import { useEffect } from "react";
import { Toaster } from "sonner";
import Header from "../header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
// import CallButton from "../contact/CallButton";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function BaseLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Header isHomePage={isHomePage} />
      <ScrollToTop />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      {/* <CallButton /> */}
      <Toaster richColors={true} />
    </>
  );
}

export default BaseLayout;
