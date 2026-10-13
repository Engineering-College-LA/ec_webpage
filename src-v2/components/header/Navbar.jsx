import { useContext, useState } from "react";
import { HeaderContext } from "./Header";
import { twMerge } from "tailwind-merge";
import { AlignJustify } from "lucide-react";
import { navLinks } from "../../config/constants";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavDropdown from "./NavDropdown";
import LanguageSelecter from "../langage-selector/LanguageSelecter";
import { useTranslation } from "react-i18next";

const MobileNavToggle = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(HeaderContext);
  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menu"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
      >
        <AlignJustify
          className={twMerge(
            "h-6 w-6 text-v2-navy transition-transform duration-300",
            mobileMenuOpen ? "rotate-180" : "",
          )}
        />
      </button>
    </div>
  );
};

const NavItem = ({ link }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

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
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="whitespace-nowrap font-v2-heading text-[14px] font-semibold leading-[18px] text-v2-ink-nav"
        aria-expanded={open}
      >
        {t(link.label)} ▾
      </button>
      <NavDropdown open={open} />
    </div>
  );
};

/* Decorative placeholder — no site search feature exists yet; matches the
   Paper header's search glyph for now, not wired up. */
const SearchGlyph = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
    <circle cx="8" cy="8" r="6" fill="none" stroke="#0E1B33" strokeWidth="1.6" />
    <path d="M12.5 12.5L16 16" fill="none" stroke="#0E1B33" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

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
        <SearchGlyph />
        <LanguageSelecter />
        <a
          href="/admissions"
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
        </a>
      </div>
      <MobileNavToggle />
    </nav>
  );
}

export default Navbar;
