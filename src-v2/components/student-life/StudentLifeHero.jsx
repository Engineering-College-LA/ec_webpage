import { useTranslation } from "react-i18next";

const PHOTO =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/1NRT7HH082XEJ9V3NQM3MYM4XC.jpg";

// Transcribed from the Paper "EC Redesign" Student Life "Life Hero" artboard (2Q6-0).
function StudentLifeHero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex items-end overflow-hidden bg-v2-navy px-6 pb-10 lg:h-[600px] lg:px-v2-gutter lg:pb-[72px]">
      <div className="absolute inset-0 bg-cover bg-[65%_40%]" style={{ backgroundImage: `url(${PHOTO})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-v2-navy via-v2-navy/70 to-transparent" />
      <div className="relative flex flex-col gap-5 pt-[200px] lg:w-[620px] lg:gap-[22px] lg:pt-0">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-[#8FA3CC]">
          {t("v2.studentLifeIndex.hero.eyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="text-[36px] font-extrabold leading-[1.1] tracking-[-0.035em] text-v2-paper lg:text-[60px] lg:leading-[64px]">
            {t("v2.studentLifeIndex.hero.titleLine1")}
          </div>
          <div className="text-[36px] font-extrabold leading-[1.1] tracking-[-0.035em] text-v2-step-4 lg:text-[60px] lg:leading-[64px]">
            {t("v2.studentLifeIndex.hero.titleLine2")}
          </div>
        </div>
        <p className="font-v2-body text-[16px] leading-[26px] text-[#D6DCE8] lg:w-[500px] lg:text-[17px] lg:leading-[27px]">
          {t("v2.studentLifeIndex.hero.description")}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#life-split"
            className="flex items-center gap-2.5 rounded-v2-sm bg-v2-crimson px-6 py-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M4 2v10l8-5-8-5z" fill="#FFFFFF" />
            </svg>
            {t("v2.studentLifeIndex.hero.primaryCta")}
          </a>
          <a
            href="/admissions"
            className="flex items-center rounded-v2-sm border-[1.5px] border-white/70 px-6 py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper"
          >
            {t("v2.studentLifeIndex.hero.secondaryCta")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default StudentLifeHero;
