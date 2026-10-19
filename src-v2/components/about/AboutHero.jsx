import { useTranslation } from "react-i18next";

const PHOTO =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/0S8AHJ9QC6TYC43JJB5J2TXFS0.jpg";

// Transcribed from the Paper "EC Redesign" About "About Hero" artboard (2V0-0).
function AboutHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-v2-navy">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[560px] lg:flex-row">
      <div className="relative flex flex-col justify-center gap-5 px-6 py-10 lg:w-[680px] lg:shrink-0 lg:gap-[22px] lg:py-0 lg:pl-v2-gutter">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-[#8FA3CC]">
          {t("v2.about.hero.eyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="text-[36px] font-extrabold leading-[1.1] tracking-[-0.035em] text-v2-paper lg:text-[60px] lg:leading-[64px]">
            {t("v2.about.hero.titleLine1")}
          </div>
          <div className="text-[36px] font-extrabold leading-[1.1] tracking-[-0.035em] text-v2-step-4 lg:text-[60px] lg:leading-[64px]">
            {t("v2.about.hero.titleLine2")}
          </div>
        </div>
        <p className="font-v2-body text-[16px] leading-[26px] text-[#C4CCDD] lg:w-[520px] lg:text-[17px] lg:leading-[27px]">
          {t("v2.about.hero.description")}
        </p>
        <div className="flex items-center gap-4 pt-1">
          <svg width="64" height="22" viewBox="0 0 64 22" aria-hidden="true" className="shrink-0">
            <path d="M1 21L14 6l7 7 9-12 11 13 6-5 16 12" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
            <path d="M26 7l4-6 4 5" fill="none" stroke="#88A4D8" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <div className="whitespace-pre-wrap font-v2-heading text-[10px] font-semibold leading-4 tracking-[0.22em] text-[#8FA3CC]">
            {t("v2.about.hero.badgeLine1")}
            <br />
            {t("v2.about.hero.badgeLine2")}
          </div>
        </div>
      </div>
      <div className="relative h-[260px] lg:h-auto lg:flex-1">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PHOTO})` }} />
        <div className="absolute inset-y-0 left-0 hidden w-[300px] bg-gradient-to-r from-v2-navy to-transparent lg:block" />
      </div>
      </div>
    </section>
  );
}

export default AboutHero;
