import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Transcribed from the Paper "EC Redesign" Home "CTA Band" artboard (1ZW-0).
// Below lg it follows "Home — Mobile v3": dusk gradient, a small ridge and a
// single full-width apply button.
function CTABand() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0C1830_0%,#243F66_62%,#5A4A6A_100%)] lg:bg-[linear-gradient(180deg,#152235_0%,#223759_62%,#2E4A52_100%)]">
      {/* Mobile ridge */}
      <svg
        width="390"
        height="90"
        viewBox="0 0 390 90"
        aria-hidden="true"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 w-full lg:hidden"
      >
        <path d="M0 90L0 60 60 35 100 52 160 12 210 45 270 20 330 50 390 30V90Z" fill="#1C3154" />
        <path d="M160 12l-14 15 9-4 6 6 7-8zM270 20l-12 13 8-3 5 5 6-7z" fill="#FFFFFF73" />
        <path d="M0 90L0 76 90 66 190 75 290 62 390 72V90Z" fill="#08121F" />
      </svg>
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
        {/* Snow caps hugging the actual slope of the four tallest peaks, with the ridge fill itself showing through as an exposed-rock notch — not a floating shape sitting above the tip. */}
        <path
          d="M260 60 L288 76 L266 73 L244 70 L232 80 L220 90 ZM420 40 L456 66 L438 58 L420 50 L402 57 L384 64 ZM790 55 L826 71 L808 68 L790 66 L772 74 L754 81 ZM980 30 L1020 58 L1000 51 L980 44 L960 50 L940 56 Z"
          fill="#E9EDFF"
        />
        <path
          d="M0 200L0 175 120 150 240 168 380 132 520 160 660 138 820 165 960 128 1120 158 1280 140 1440 160V200Z"
          fill="#08121F"
        />
      </svg>
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-5 pt-14 pb-24 text-center lg:gap-[22px] lg:px-v2-gutter lg:pt-24 lg:pb-[170px]">
      <div className="relative font-v2-heading text-[9px] font-semibold leading-3 tracking-[0.26em] text-[#8FA3CC] lg:text-[11px] lg:leading-[14px] lg:tracking-[0.28em]">
        {t("v2.home.cta.eyebrow")}
      </div>
      <h2 className="relative font-v2-heading text-v2-h3 font-extrabold leading-[33px] tracking-[-0.03em] text-v2-paper lg:text-[48px] lg:leading-[58px]">
        {t("v2.home.cta.title")}
      </h2>
      <p className="relative max-w-[560px] font-v2-body text-[14px] leading-[22px] text-[#B9C3D9] lg:text-[17px] lg:leading-7">
        <span className="lg:hidden">{t("v2.home.cta.descriptionShort")}</span>
        <span className="hidden lg:inline">{t("v2.home.cta.description")}</span>
      </p>
      <div className="relative flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:flex-wrap lg:justify-center lg:pt-2">
        <Link
          to="/admissions"
          className="flex items-center justify-center gap-2.5 rounded-v2-sm bg-v2-crimson p-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:px-7"
        >
          {t("v2.nav.applyButton")}
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link
          to="/academics"
          className="hidden items-center rounded-v2-sm border-[1.5px] border-white/70 px-7 py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:flex"
        >
          {t("v2.home.cta.secondaryCta")}
        </Link>
      </div>
      </div>
    </section>
  );
}

export default CTABand;
