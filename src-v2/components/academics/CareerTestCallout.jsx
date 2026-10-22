import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Transcribed from the Paper "EC Redesign" Academics "Career Test" artboard (2CC-0);
// below lg it follows "Направления — Mobile v3" (no icon, full-width button).
function CareerTestCallout() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-7 pb-10 lg:px-v2-gutter lg:py-12">
      <div className="flex flex-col gap-3 rounded-[6px] border-l-4 border-v2-crimson bg-v2-mist px-5 py-6 lg:flex-row lg:gap-6 lg:items-center lg:justify-between lg:px-12 lg:py-10">
        <div className="flex items-center gap-5 lg:gap-7">
          <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-v2-paper lg:flex">
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="none" stroke="#0C1830" strokeWidth="1.8" />
              <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" fill="none" stroke="#9A1A3E" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-3 lg:gap-1.5">
            <div className="font-v2-heading text-[20px] font-extrabold leading-6 text-v2-navy lg:text-[26px] lg:leading-8 lg:tracking-[-0.02em]">
              {t("v2.academics.index.careerTest.title")}
            </div>
            <div className="font-v2-body text-[14px] leading-[21px] text-v2-slate lg:text-[15px] lg:leading-[18px]">
              <span className="lg:hidden">{t("v2.academics.index.careerTest.descriptionShort")}</span>
              <span className="hidden lg:inline">{t("v2.academics.index.careerTest.description")}</span>
            </div>
          </div>
        </div>
        <Link
          to="/career-test"
          className="flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-v2-sm bg-v2-navy p-3.5 lg:px-6 lg:py-[15px] font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper"
        >
          {t("v2.academics.index.careerTest.cta")}
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default CareerTestCallout;
