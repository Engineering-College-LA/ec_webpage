import { createContext, useState } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

export const HeaderContext = createContext(false);

const HeaderProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <HeaderContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};

function Header() {
  return (
    <HeaderProvider>
      <header className="fixed top-0 z-50 flex h-[60px] w-full items-center border-b border-v2-hairline bg-v2-paper lg:h-20">
        <Navbar />
      </header>
      <MobileMenu />
    </HeaderProvider>
  );
}

export default Header;
