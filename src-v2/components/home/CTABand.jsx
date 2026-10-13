import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Transcribed from the Paper "EC Redesign" Home "CTA Band" artboard (1ZW-0).
function CTABand() {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex flex-col items-center gap-5 overflow-hidden px-6 pt-16 pb-20 text-center lg:gap-[22px] lg:px-v2-gutter lg:pt-24 lg:pb-[170px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #152235 0%, #223759 62%, #2E4A52 100%)",
      }}
    >
      <svg
        width="1440"
        height="200"
        viewBox="0 0 1440 200"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden w-full lg:block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 200L0 150 90 110 160 135 260 60 330 100 420 40 510 105 600 70 700 120 790 55 880 95 980 30 1080 100 1170 65 1260 110 1350 80 1440 115V200Z"
          fill="#1C3154"
        />
        <path
          d="M260 60l-26 26 16-5 10 10 12-14zM420 40l-30 34 18-7 12 12 14-18zM790 55l-24 26 14-5 10 10 12-14zM980 30l-32 36 20-8 12 12 16-20z"
          fill="#FFFFFF73"
        />
        <path
          d="M0 200L0 175 120 150 240 168 380 132 520 160 660 138 820 165 960 128 1120 158 1280 140 1440 160V200Z"
          fill="#08121F"
        />
      </svg>
      <div className="relative font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.28em] text-[#8FA3CC]">
        {t("v2.home.cta.eyebrow")}
      </div>
      <h2 className="relative font-v2-heading text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-v2-paper lg:text-[48px] lg:leading-[58px]">
        {t("v2.home.cta.title")}
      </h2>
      <p className="relative max-w-[560px] font-v2-body text-[16px] leading-7 text-[#B9C3D9] lg:text-[17px]">
        {t("v2.home.cta.description")}
      </p>
      <div className="relative flex flex-wrap justify-center gap-3 pt-2">
        <Link
          to="/admissions"
          className="flex items-center gap-2.5 rounded-v2-sm bg-v2-crimson px-7 py-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper"
        >
          {t("v2.nav.applyButton")}
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link
          to="/academics"
          className="flex items-center rounded-v2-sm border-[1.5px] border-white/70 px-7 py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper"
        >
          {t("v2.home.cta.secondaryCta")}
        </Link>
      </div>
    </section>
  );
}

export default CTABand;
