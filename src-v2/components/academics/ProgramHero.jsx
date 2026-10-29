import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Transcribed from the Paper "EC Redesign" Program "Program Hero" artboard (2EJ-0).
function ProgramHero({ program }) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[560px] lg:flex-row">
      <div className="flex flex-col justify-center gap-5 px-6 py-10 lg:w-[700px] lg:shrink-0 lg:gap-[22px] lg:py-0 lg:pl-v2-gutter">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
          {t("v2.academics.index.breadcrumb")} / {t(`v2.academics.programs.${program.i18nKey}.title`)}
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="text-[36px] font-extrabold leading-[1.1] tracking-[-0.035em] text-v2-navy lg:text-[60px] lg:leading-[64px]">
            {t(`v2.academics.programs.${program.i18nKey}.heroTitleLine1`)}
          </div>
          <div className="text-[36px] font-extrabold leading-[1.1] tracking-[-0.035em] text-v2-sky lg:text-[60px] lg:leading-[64px]">
            {t(`v2.academics.programs.${program.i18nKey}.heroTitleLine2`)}
          </div>
        </div>
        <p className="font-v2-body text-[16px] leading-[26px] text-v2-slate lg:w-[500px] lg:text-[17px] lg:leading-[27px]">
          {t(`v2.academics.programs.${program.i18nKey}.heroDescription`)}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/admissions"
            className="flex items-center gap-2.5 rounded-v2-sm bg-v2-crimson px-6 py-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper"
          >
            {t("v2.nav.applyButton")}
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="#curriculum"
            className="flex items-center gap-2.5 rounded-v2-sm border-[1.5px] border-v2-navy px-6 py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 2v9M4 7l4 4 4-4M3 14h10" fill="none" stroke="#0C1830" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t("v2.academics.index.curriculumLink")} (PDF)
          </a>
        </div>
      </div>
      <div className="relative h-[280px] lg:h-auto lg:flex-1">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${program.image})` }} />
        <div className="absolute inset-y-0 left-0 hidden w-[240px] bg-gradient-to-r from-white to-transparent lg:block" />
      </div>
      </div>
    </section>
  );
}

export default ProgramHero;
