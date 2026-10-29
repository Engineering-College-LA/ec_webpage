import { useEffect } from "react";
import { Toaster } from "sonner";
import Header from "../header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
// import CallButton from "../contact/CallButton";
import ChatBot from "../chat-bot/ChatBot";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function BaseLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Header isHomePage={isHomePage} />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <ChatBot />
      {/* <CallButton /> */}
      <Toaster richColors={true} />
    </>
  );
}

export default BaseLayout;
