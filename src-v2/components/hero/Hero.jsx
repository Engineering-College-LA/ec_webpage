import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HERO_IMAGE =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/0GQWB9TS6KQB0HH9RYRQP1PGN9.jpg";

// Transcribed from the Paper "EC Redesign" Home Hero artboard (1U1-0).
function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-v2-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[660px] lg:flex-row">
      <div className="relative order-first flex flex-col justify-center gap-6 px-6 py-10 lg:order-none lg:w-[640px] lg:shrink-0 lg:gap-[26px] lg:py-0 lg:pl-v2-gutter">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
          {t("v2.home.hero.eyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="font-v2-heading text-[36px] font-extrabold leading-[1.1] tracking-[-0.035em] text-v2-navy lg:text-[60px] lg:leading-[64px]">
            {t("v2.home.hero.titleLine1")}
          </div>
          <div className="font-v2-heading text-[36px] font-extrabold leading-[1.1] tracking-[-0.035em] text-v2-sky lg:text-[60px] lg:leading-[64px]">
            {t("v2.home.hero.titleLine2")}
          </div>
        </div>
        <div className="font-v2-body text-[16px] leading-[26px] text-v2-slate lg:w-[470px] lg:text-[17px] lg:leading-[27px]">
          {t("v2.home.hero.description")}
        </div>
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
          <Link
            to="/academics"
            className="flex items-center rounded-v2-sm border-[1.5px] border-v2-navy px-6 py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy"
          >
            {t("v2.home.hero.secondaryCta")}
          </Link>
        </div>
        <div className="flex items-center gap-4 pt-2 lg:pt-[18px]">
          <svg width="64" height="22" viewBox="0 0 64 22" aria-hidden="true" className="shrink-0">
            <path d="M1 21L14 6l7 7 9-12 11 13 6-5 16 12" fill="none" stroke="#0E1B33" strokeWidth="2" strokeLinejoin="round" />
            <path d="M26 7l4-6 4 5" fill="none" stroke="#3D6FD8" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <div className="whitespace-pre-wrap font-v2-heading text-[10px] font-semibold leading-4 tracking-[0.22em] text-v2-slate">
            {t("v2.home.hero.badgeLine1")}
            <br />
            {t("v2.home.hero.badgeLine2")}
          </div>
        </div>
      </div>

      <div className="relative h-[320px] shrink-0 lg:h-auto lg:w-[760px]">
        <div
          className="absolute inset-0 bg-cover bg-[50%_30%]"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-y-0 left-0 hidden w-[110px] bg-gradient-to-r from-white to-transparent lg:block" />
        <div className="absolute bottom-6 right-6 flex items-center gap-3.5 rounded-[6px] bg-v2-paper py-3.5 pl-3.5 pr-5 shadow-[0_12px_32px_#0E1B332E] lg:bottom-10 lg:right-v2-gutter">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-v2-crimson">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M4 2v10l8-5-8-5z" fill="#FFFFFF" />
            </svg>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-navy">
              {t("v2.home.hero.videoChipTitle")}
            </div>
            <div className="font-v2-body text-[12px] leading-4 text-v2-slate">
              {t("v2.home.hero.videoChipSubtitle")}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;
