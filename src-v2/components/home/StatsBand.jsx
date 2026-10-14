import { useTranslation } from "react-i18next";

const stats = ["placements", "programs", "partners", "seats"];

// Transcribed from the Paper "EC Redesign" Home "Stats Band" artboard (1V1-0).
function StatsBand() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-v2-navy">
      <div className="relative mx-auto max-w-[1440px] px-6 py-10 lg:px-v2-gutter">
        <svg
          width="620"
          height="180"
          viewBox="0 0 620 180"
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 hidden lg:block"
        >
          <path
            d="M0 180L70 120 110 140 180 70 230 110 290 40 340 90 400 30 460 95 520 60 580 100 620 80V180Z"
            fill="#1C3154"
          />
          {/* Snow caps hugging the actual slope of the three tallest peaks, with the ridge fill itself showing through as an exposed-rock notch — not a floating shape sitting above the tip. */}
          <path
            d="M180 70 L203 88 L185 97 L174 88 L163 99 L145 105 ZM290 40 L310 60 L298 54 L287 48 L275 60 L263 72 ZM400 30 L427 59 L417 51 L406 46 L396 52 L373 57 Z"
            fill="#E9EDFF"
          />
          <path
            d="M0 180L60 150 130 160 210 118 280 150 350 105 430 145 500 120 560 150 620 132V180Z"
            fill="#142541"
          />
        </svg>
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:items-center lg:gap-0">
          {stats.map((key, i) => (
            <div
              key={key}
              className={`flex flex-col gap-1.5 lg:w-[220px] lg:shrink-0 ${
                i > 0 ? "lg:border-l lg:border-white/[0.18] lg:px-8" : "lg:pr-8"
              }`}
            >
              <div className="font-v2-heading text-[36px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-paper lg:text-[44px] lg:leading-[54px]">
                {t(`v2.home.stats.${key}.value`)}
              </div>
              <div className="whitespace-pre-wrap font-v2-body text-[14px] leading-5 text-[#B9C3D9]">
                {t(`v2.home.stats.${key}.label`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBand;
