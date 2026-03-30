import { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { twMerge } from "tailwind-merge";
import MobileMenu from "./MobileMenu";
import useScroll from "../../hooks/useScroll";

export const HeaderContext = createContext(false);

const HeaderProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <HeaderContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};

function Header({ isHomePage }) {
  const { scrollY } = useScroll();
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const opacity = Math.min(scrollY / 0, 0.9);
    setBgOpacity(opacity);
  }, [scrollY]);

  return (
    <HeaderProvider>
      <header
        className={twMerge(
          "w-full fixed top-0 z-50 shadow-sm transition-opacity duration-300 ease-in-out  bg-[#1C3C71] bg-opacity-90 select-none",
          `${bgOpacity > 0 ? "shadow-sm" : ""}`
          // isHomePage ? "bg-black" : "bg-opacity-0"
        )}
        // style={{
        //   backgroundColor: isHomePage ? `rgba(0, 0, 0, ${bgOpacity})` : "black",
        // }}
      >
        <div className="max-container">
          <Navbar />
        </div>
        <MobileMenu />
      </header>
    </HeaderProvider>
  );
}

export default Header;
