import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Transcribed from the Paper "EC Redesign" Academics "Career Test" artboard (2CC-0).
function CareerTestCallout() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-v2-gutter lg:py-12">
      <div className="flex flex-col gap-6 rounded-[6px] border-l-4 border-v2-crimson bg-v2-mist px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-10">
        <div className="flex items-center gap-5 lg:gap-7">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-v2-paper">
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="none" stroke="#0C1830" strokeWidth="1.8" />
              <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" fill="none" stroke="#9A1A3E" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="font-v2-heading text-[22px] font-extrabold leading-8 tracking-[-0.02em] text-v2-navy lg:text-[26px]">
              {t("v2.academics.index.careerTest.title")}
            </div>
            <div className="font-v2-body text-[15px] leading-[18px] text-v2-slate">
              {t("v2.academics.index.careerTest.description")}
            </div>
          </div>
        </div>
        <Link
          to="/career-test"
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-v2-sm bg-v2-navy px-6 py-[15px] font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper"
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
