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
          {/* Snow caps on the three tallest peaks only, not every peak — reads as a real ridge, not a repeated decorative flourish. */}
          <path
            d="M165 85 L172 76 L177 80 L180 70 L186 77 L195 85 ZM275 56 L282 46 L287 50 L290 40 L296 48 L305 56 ZM384 48 L392 37 L397 41 L400 30 L407 39 L416 48 Z"
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
