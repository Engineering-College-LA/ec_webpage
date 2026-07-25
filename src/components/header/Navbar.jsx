import { useContext, useState } from "react";
import { HeaderContext } from "./Header";
import { twMerge } from "tailwind-merge";
import { AlignJustify } from "lucide-react";
import { navLinks } from "../../config/constants";
import logoWhite from "../../assets/logo-white.svg";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import LanguageSelecter from "../langage-selector/LanguageSelecter";
import { useTranslation } from "react-i18next";
import { AppModal, AppButton } from "./AppModal";

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
    <div className="hidden lg:flex items-center gap-x-3 lg:gap-x-5 xl:gap-x-7 font-medium text-center">
      {navLinks.map((link) => (
        <NavLink
          key={link.label}
          to={link.to}
          className={({ isActive }) =>
            `whitespace-nowrap text-xs lg:text-sm xl:text-[15px] transition-colors ${
              isActive ? "text-n-bluish-60" : "text-white hover:text-n-bluish-50"
            }`
          }
        >
          {t(link.label)}
        </NavLink>
      ))}
    </div>
  );
};

function Navbar() {
  const [appModalOpen, setAppModalOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between py-2 px-3 lg:px-8">
        <Logo logoSrc={logoWhite} width={180} height={48} />
        <DesktopNav />
        <div className="hidden lg:flex justify-end items-center gap-2">
          <AppButton onClick={() => setAppModalOpen(true)} />
          <LanguageSelecter />
        </div>
        <MobileNavToggle />
      </nav>
      <AppModal isOpen={appModalOpen} onClose={() => setAppModalOpen(false)} />
    </>
  );
}

export default Navbar;
