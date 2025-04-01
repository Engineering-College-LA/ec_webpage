import { useContext } from "react";
import { HeaderContext } from "./Header";
import { useClickOutsideMouseDown } from "../../hooks/useClickOutside";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { navLinks } from "../../config/constants";
import { NavLink } from "react-router-dom";
import LanguageSelecter from "../langage-selector/LanguageSelecter";
import { useTranslation } from "react-i18next";

function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(HeaderContext);
  const mobileMenuRef = useClickOutsideMouseDown(() =>
    setMobileMenuOpen(false)
  );

  const { t } = useTranslation();

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    mobileMenuOpen && (
      <div
        className={twMerge(
          "lg:hidden",
          mobileMenuOpen ? "bg-black bg-opacity-40" : "hidden"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10 blur-sm backdrop-blur-sm backdrop-filter"></div>
        <div
          ref={mobileMenuRef}
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          {/* Mobile Header - START*/}
          <div className="flex items-end justify-end">
            {/* <div>LOGO</div> */}
            <div
              className="-m-2.5 rounded-md p-2.5 text-n-blue cursor-pointer"
              onClick={handleCloseMenu}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" />
            </div>
          </div>
          {/* Mobile Header - END*/}

          {/* Mobile Menu Content - START */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 text-red-400 ">
              {navLinks.map((link) => (
                <NavLink
                  to={link.to}
                  key={link.label}
                  onClick={handleCloseMenu}
                  className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t(link.label)}
                </NavLink>
              ))}
              <span className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                <LanguageSelecter />
              </span>
            </div>
          </div>
          {/* Mobile Menu Content - END */}
        </div>
      </div>
    )
  );
}

export default MobileMenu;
