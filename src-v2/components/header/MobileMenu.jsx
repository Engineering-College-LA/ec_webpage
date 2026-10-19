import { useContext, useState } from "react";
import { HeaderContext } from "./Header";
import { useClickOutsideMouseDown } from "../../hooks/useClickOutside";
import { twMerge } from "tailwind-merge";
import { navLinks } from "../../config/constants";
import { Link } from "react-router-dom";
import LanguageSelecter from "../langage-selector/LanguageSelecter";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import {
  academicActivities,
  extracurricularActivities,
} from "../../config/studentLifeActivities";

function ActivityGroup({ heading, activities, tone, onNavigate, t }) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2.5 rounded-[6px] p-4",
        tone === "crimson" ? "bg-v2-blush" : "bg-v2-mist",
      )}
    >
      <div
        className={twMerge(
          "font-v2-heading text-[9px] font-semibold leading-3 tracking-[0.22em]",
          tone === "crimson" ? "text-v2-crimson" : "text-v2-slate",
        )}
      >
        {heading}
      </div>
      {activities.map((activity) => (
        <Link
          key={activity.slug}
          to={`/student-life/${activity.slug}`}
          onClick={onNavigate}
          className="font-v2-body text-[15px] font-semibold leading-[18px] text-v2-navy"
        >
          {t(`v2.studentLife.activities.${activity.i18nKey}.navLabel`)}
        </Link>
      ))}
    </div>
  );
}

function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen } = useContext(HeaderContext);
  const mobileMenuRef = useClickOutsideMouseDown(() =>
    setMobileMenuOpen(false),
  );
  const [studentLifeOpen, setStudentLifeOpen] = useState(false);
  const { t } = useTranslation();

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
    setStudentLifeOpen(false);
  };

  return (
    mobileMenuOpen && (
      <div
        className={twMerge(
          "lg:hidden",
          mobileMenuOpen ? "bg-black bg-opacity-40" : "hidden",
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-[60] blur-sm backdrop-blur-sm backdrop-filter" />
        <div
          ref={mobileMenuRef}
          className="fixed inset-y-0 right-0 z-[60] flex w-full flex-col overflow-y-auto bg-v2-paper sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between border-b border-v2-hairline pt-2 pb-3.5 px-5">
            <Logo />
            <button
              type="button"
              onClick={handleCloseMenu}
              aria-label="Close menu"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-v2-mist"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M3 3l10 10M13 3L3 13"
                  fill="none"
                  stroke="#0C1830"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-0 px-5 pt-2">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    className="flex flex-col gap-4 border-b border-v2-hairline py-[18px]"
                  >
                    {/* Label opens the section page; the +/− button only expands the list. */}
                    <div
                      className={twMerge(
                        "flex items-center justify-between font-v2-heading text-[17px] font-bold leading-[22px]",
                        studentLifeOpen ? "text-v2-crimson" : "text-v2-navy",
                      )}
                    >
                      <Link to={link.to} onClick={handleCloseMenu}>
                        {t(link.label)}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setStudentLifeOpen((v) => !v)}
                        aria-expanded={studentLifeOpen}
                        aria-label={t("v2.nav.dropdown.toggleLabel")}
                        className="-my-2 -mr-2 flex h-10 w-10 items-center justify-center"
                      >
                        <span aria-hidden="true">{studentLifeOpen ? "−" : "+"}</span>
                      </button>
                    </div>
                    {studentLifeOpen && (
                      <div className="flex flex-col gap-4">
                        <ActivityGroup
                          heading={t("v2.nav.dropdown.academicHeading")}
                          activities={academicActivities}
                          tone="mist"
                          onNavigate={handleCloseMenu}
                          t={t}
                        />
                        <ActivityGroup
                          heading={t("v2.nav.dropdown.extracurricularHeading")}
                          activities={extracurricularActivities}
                          tone="crimson"
                          onNavigate={handleCloseMenu}
                          t={t}
                        />
                      </div>
                    )}
                  </div>
                );
              }

              const content = (
                <>
                  <span className="font-v2-heading text-[17px] font-bold leading-[22px] text-v2-navy">
                    {t(link.label)}
                  </span>
                  <span className="font-v2-heading text-[16px] leading-5 text-v2-slate">
                    →
                  </span>
                </>
              );

              return link.to.includes("#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={handleCloseMenu}
                  className="flex items-center justify-between border-b border-v2-hairline py-[18px]"
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={handleCloseMenu}
                  className="flex items-center justify-between border-b border-v2-hairline py-[18px]"
                >
                  {content}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 px-5 pt-6 pb-8">
            <Link
              to="/admissions"
              onClick={handleCloseMenu}
              className="flex items-center justify-center rounded-v2-sm bg-v2-crimson p-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper"
            >
              {t("v2.nav.applyButton")} →
            </Link>
            <div className="flex items-center justify-between font-v2-heading text-v2-label font-semibold leading-4 text-v2-slate">
              <a href="tel:+996312882424">+996 (312) 88-24-24</a>
              <LanguageSelecter />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default MobileMenu;
