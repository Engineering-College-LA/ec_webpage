import { useContext, useEffect, useRef, useState } from "react";
import { HeaderContext } from "./Header";
import { twMerge } from "tailwind-merge";
import { navLinks } from "../../config/constants";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";
import LanguageSelecter from "../langage-selector/LanguageSelecter";
import LanguageSwitch from "../langage-selector/LanguageSwitch";
import { useTranslation } from "react-i18next";

// Mobile header right side, per "Home — Mobile v3": a compact apply button
// next to the menu toggle.
const MobileNavToggle = () => {
  const { t } = useTranslation();
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(HeaderContext);
  return (
    <div className="flex items-center gap-2.5 lg:hidden">
      <LanguageSwitch className="hidden sm:inline-flex" />
      <Link
        to="/admissions"
        className="flex items-center rounded-v2-sm bg-v2-crimson px-3.5 py-2.5 font-v2-heading text-v2-label font-bold leading-4 text-v2-paper"
      >
        {t("v2.nav.applyShort")}
      </Link>
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menu"
        className="-mr-2.5 inline-flex items-center justify-center rounded-md p-2.5"
      >
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          aria-hidden="true"
          className={twMerge(
            "shrink-0 transition-transform duration-300",
            mobileMenuOpen ? "rotate-180" : "",
          )}
        >
          <path d="M1 1h20M1 8h20M1 15h13" fill="none" stroke="#0E1B33" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
};

const NavItem = ({ link }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  // Short grace period before closing, so brushing past the panel's edge on
  // the way into it doesn't snap it shut.
  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = (delay = 120) => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), delay);
  };
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Hash-anchor links (e.g. "/#contact") aren't routes — NavLink's isActive
  // would otherwise match their "/" pathname against the current page.
  if (link.to.includes("#")) {
    return (
      <a
        href={link.to}
        className="whitespace-nowrap font-v2-heading text-[14px] font-semibold leading-[18px] text-v2-ink-nav"
      >
        {t(link.label)}
      </a>
    );
  }

  if (!link.dropdown) {
    return (
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          `whitespace-nowrap font-v2-heading text-[14px] font-semibold leading-[18px] ${
            isActive ? "text-v2-crimson" : "text-v2-ink-nav"
          }`
        }
      >
        {t(link.label)}
      </NavLink>
    );
  }

  return (
    // The label navigates to the section's index page; hovering (or tabbing
    // into it) reveals the dropdown with the individual activity pages.
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={() => hide()}
      onFocus={show}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) hide(0);
      }}
      // Any link click inside (label or dropdown row) is a navigation, so
      // close the dropdown instead of leaving it hanging over the new page.
      onClick={(e) => {
        if (e.target.closest("a")) hide(0);
      }}
    >
      <NavLink
        to={link.to}
        aria-haspopup="true"
        aria-expanded={open}
        className={({ isActive }) =>
          `whitespace-nowrap font-v2-heading text-[14px] font-semibold leading-[18px] ${
            isActive ? "text-v2-crimson" : "text-v2-ink-nav"
          }`
        }
      >
        {t(link.label)}{" "}
        <span
          aria-hidden="true"
          className={`inline-block transition-transform duration-200 motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </NavLink>
      <NavDropdown open={open} />
    </div>
  );
};

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="flex w-full items-center justify-between px-6 lg:px-[72px]">
      <Logo />
      <div className="hidden items-center gap-5 xl:gap-[34px] lg:flex">
        {navLinks.map((link) => (
          <NavItem key={link.label} link={link} />
        ))}
      </div>
      <div className="hidden items-center gap-5 lg:flex">
        <LanguageSelecter />
        <Link
          to="/admissions"
          className="flex items-center gap-2 rounded-v2-sm bg-v2-crimson py-3 px-5 font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper"
        >
          {t("v2.nav.applyButton")}
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <MobileNavToggle />
    </nav>
  );
}

export default Navbar;
