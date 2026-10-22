import { useTranslation } from "react-i18next";

const PHOTO =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/0S8AHJ9QC6TYC43JJB5J2TXFS0.jpg";

// Transcribed from the Paper "EC Redesign" About "About Hero" artboard (2V0-0).
// Below lg it follows "О колледже — Mobile v3": navy copy block with a small
// ridge, then the photo underneath at the artboard's 390×240 ratio.
function AboutHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-v2-navy">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[560px] lg:flex-row">
      <div className="relative flex flex-col justify-center gap-3.5 overflow-hidden px-5 pt-9 pb-[70px] lg:w-[680px] lg:shrink-0 lg:gap-[22px] lg:overflow-visible lg:px-6 lg:py-0 lg:pl-v2-gutter">
        {/* Mobile ridge */}
        <svg
          width="390"
          height="60"
          viewBox="0 0 390 60"
          aria-hidden="true"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 w-full lg:hidden"
        >
          <path d="M0 60L0 44 60 28 100 40 160 10 210 36 270 16 330 40 390 26V60Z" fill="#142541" />
          <path d="M160 10l-12 13 8-3 5 5 6-7zM270 16l-10 11 7-3 4 4 5-6z" fill="#FFFFFF59" />
        </svg>
        <div className="relative font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-[#8FA3CC] lg:text-[11px] lg:leading-[14px]">
          {t("v2.about.hero.eyebrow")}
        </div>
        <div className="relative flex flex-col font-v2-heading">
          <div className="text-[38px] font-extrabold leading-[42px] tracking-[-0.035em] text-v2-paper lg:text-[60px] lg:leading-[64px]">
            {t("v2.about.hero.titleLine1")}
          </div>
          <div className="text-[38px] font-extrabold leading-[42px] tracking-[-0.035em] text-v2-step-4 lg:text-[60px] lg:leading-[64px]">
            {t("v2.about.hero.titleLine2")}
          </div>
        </div>
        <p className="relative font-v2-body text-[14px] leading-[22px] text-[#C4CCDD] lg:w-[520px] lg:text-[17px] lg:leading-[27px]">
          <span className="lg:hidden">{t("v2.about.hero.descriptionShort")}</span>
          <span className="hidden lg:inline">{t("v2.about.hero.description")}</span>
        </p>
        <div className="hidden items-center gap-4 pt-1 lg:flex">
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
      <div className="relative aspect-[390/240] max-h-[480px] w-full lg:aspect-auto lg:max-h-none lg:h-auto lg:w-auto lg:flex-1">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PHOTO})` }} />
        <div className="absolute inset-y-0 left-0 hidden w-[300px] bg-gradient-to-r from-v2-navy to-transparent lg:block" />
      </div>
      </div>
    </section>
  );
}

export default AboutHero;
