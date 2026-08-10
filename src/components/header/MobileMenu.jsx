import { useContext, useState } from "react";
import { HeaderContext } from "./Header";
import { useClickOutsideMouseDown } from "../../hooks/useClickOutside";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { navLinks } from "../../config/constants";
import { NavLink } from "react-router-dom";
import LanguageSelecter from "../langage-selector/LanguageSelecter";
import { useTranslation } from "react-i18next";
import { AppButton, AppModal } from "./AppModal";

function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(HeaderContext);
  const [appModalOpen, setAppModalOpen] = useState(false);
  const mobileMenuRef = useClickOutsideMouseDown(() =>
    setMobileMenuOpen(false)
  );

  const { t } = useTranslation();

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    mobileMenuOpen && (
      <>
        {/* Semi-transparent Backdrop */}
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity lg:hidden"
          onClick={handleCloseMenu}
        />

        {/* Compact Floating Mobile Menu Window */}
        <div
          ref={mobileMenuRef}
          className="fixed top-[56px] sm:top-16 right-3 left-3 sm:left-auto sm:right-6 sm:w-80 z-50 rounded-2xl bg-white p-4 shadow-2xl border border-slate-100 lg:hidden overflow-hidden transition-all"
        >
          {/* Header row: AppButton + Close button */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <AppButton onClick={() => { handleCloseMenu(); setAppModalOpen(true); }} />
            <button
              type="button"
              className="p-1.5 rounded-full text-slate-500 hover:bg-slate-100 transition-colors"
              onClick={handleCloseMenu}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                to={link.to}
                key={link.label}
                onClick={handleCloseMenu}
                className={({ isActive }) =>
                  twMerge(
                    "block rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-n-blue/10 text-n-blue"
                      : "text-slate-700 hover:bg-slate-100"
                  )
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>

          {/* Language Selector Footer */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Язык</span>
            <LanguageSelecter />
          </div>
        </div>

        <AppModal isOpen={appModalOpen} onClose={() => setAppModalOpen(false)} />
      </>
    )
  );
}

export default MobileMenu;
