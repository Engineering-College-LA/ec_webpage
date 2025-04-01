import { useContext } from "react";
import { HeaderContext } from "./Header";
import { twMerge } from "tailwind-merge";
import { AlignJustify } from "lucide-react";
import { navLinks } from "../../config/constants";
// import logo from "../../assets/la-yellow-logo.webp";
import logo1 from "../../assets/logo.svg";
import logoWhite from "../../assets/logo-white.svg";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import LanguageSelecter from "../langage-selector/LanguageSelecter";
import { useTranslation } from "react-i18next";
// import WhatsappButton from "../button/WhatsappButton";

/* Mobile Toggle component */
const MobileNavToggle = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(HeaderContext);
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menu"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
      >
        <AlignJustify
          className={twMerge(
            "h-6 w-6 transform transition-transform duration-300 text-white",
            mobileMenuOpen ? "rotate-180" : ""
          )}
        />
      </button>
    </div>
  );
};

/* Main navigation */
const DesktopNav = () => {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:flex lg:gap-x-10 font-medium items-center">
      {navLinks.map((link) => (
        <NavLink
          key={link.label}
          to={link.to}
          className={({ isActive }) =>
            isActive ? "text-n-bluish-60 transition-colors" : "text-white"
          }
        >
          {t(link.label)}
        </NavLink>
      ))}
    </div>
  );
};

function Navbar() {
  // const { t } = useTranslation();
  return (
    <nav className="w-full flex item-center justify-between p-3 lg:px-12">
      <Logo logoSrc={logoWhite} width={200} height={56} />
      <DesktopNav />
      {/* <div className="flex items-center lg:hidden">
        <WhatsappButton withAnimation={true}>
          {t("navbar.btnText")}
        </WhatsappButton>
      </div> */}
      <div className="hidden lg:flex justify-end items-center gap-2">
        <LanguageSelecter />
      </div>
      <MobileNavToggle />
    </nav>
  );
}

export default Navbar;
