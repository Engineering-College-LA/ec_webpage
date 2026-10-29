import { useTranslation } from "react-i18next";

const stats = ["placements", "programs", "partners", "seats"];

// Below lg the four stats sit in a 2×2 grid split by hairlines
// ("Home — Mobile v3" artboard): left column has a right border, top row a
// bottom border.
const mobileCell = [
  "border-r border-b border-white/[0.15] pb-[18px]",
  "border-b border-white/[0.15] pb-[18px] pl-5",
  "border-r border-white/[0.15] pt-[18px]",
  "pt-[18px] pl-5",
];

// Transcribed from the Paper "EC Redesign" Home "Stats Band" artboard (1V1-0).
function StatsBand() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-v2-navy">
      <div className="relative mx-auto max-w-[1440px] px-5 pt-7 pb-[72px] lg:px-v2-gutter lg:py-10">
        {/* Mobile ridge */}
        <svg
          width="390"
          height="80"
          viewBox="0 0 390 80"
          aria-hidden="true"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 w-full lg:hidden"
        >
          <path d="M0 80L0 60 50 40 90 55 140 20 180 45 230 10 280 42 330 25 390 50V80Z" fill="#1C3154" />
          <path d="M140 20l-12 13 8-3 5 5 6-7zM230 10l-14 15 9-4 6 6 7-9z" fill="#FFFFFF80" />
          <path d="M0 80L0 70 80 60 160 68 240 55 320 66 390 58V80Z" fill="#142541" />
        </svg>
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
        <div className="relative z-10 grid grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:items-center">
          {stats.map((key, i) => (
            <div
              key={key}
              className={`flex flex-col gap-1 lg:w-[220px] lg:shrink-0 lg:gap-1.5 lg:border-0 lg:py-0 ${mobileCell[i]} ${
                i > 0 ? "lg:border-l lg:border-white/[0.18] lg:px-8" : "lg:pl-0 lg:pr-8"
              }`}
            >
              <div className="font-v2-heading text-[32px] font-extrabold leading-10 text-v2-paper lg:text-[44px] lg:leading-[54px] lg:tracking-[-0.03em]">
                {t(`v2.home.stats.${key}.value`)}
              </div>
              <div className="font-v2-body text-[12px] leading-[17px] text-[#B9C3D9] lg:hidden">
                {t(`v2.home.stats.${key}.labelShort`)}
              </div>
              <div className="hidden whitespace-pre-wrap font-v2-body text-[14px] leading-5 text-[#B9C3D9] lg:block">
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
