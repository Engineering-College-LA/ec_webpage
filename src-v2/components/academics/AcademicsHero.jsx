import { useTranslation } from "react-i18next";

const PHOTO =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/4VGGRY57SRGNK37Z69ZBBS0ZBY.jpg";

const facts = ["factDuration", "factPractice", "factEntry"];

// Transcribed from the Paper "EC Redesign" Academics "Page Hero" artboard (276-0).
function AcademicsHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-v2-navy">
      <div className="relative mx-auto flex max-w-[1440px] flex-col lg:h-[440px] lg:flex-row">
      <svg
        width="620"
        height="120"
        viewBox="0 0 620 180"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden lg:block"
      >
        <path
          d="M0 180L70 120 110 140 180 70 230 110 290 40 340 90 400 30 460 95 520 60 580 100 620 80V180Z"
          fill="#1C3154"
        />
        <path
          d="M180 70 L203 88 L185 97 L174 88 L163 99 L145 105 ZM290 40 L310 60 L298 54 L287 48 L275 60 L263 72 ZM400 30 L427 59 L417 51 L406 46 L396 52 L373 57 Z"
          fill="#E9EDFF"
        />
        <path
          d="M0 180L60 150 130 160 210 118 280 150 350 105 430 145 500 120 560 150 620 132V180Z"
          fill="#142541"
        />
      </svg>
      <div className="relative z-10 flex flex-col justify-center gap-5 px-6 py-10 lg:w-[700px] lg:shrink-0 lg:gap-[22px] lg:py-0 lg:pl-v2-gutter">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-[#8FA3CC]">
          {t("v2.academics.index.eyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.035em] text-v2-paper lg:text-[40px] lg:leading-[48px]">
            {t("v2.academics.index.titleLine1")}
          </div>
          <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.035em] text-v2-step-4 lg:text-[40px] lg:leading-[48px]">
            {t("v2.academics.index.titleLine2")}
          </div>
        </div>
        <p className="font-v2-body text-[16px] leading-[26px] text-[#C4CCDD] lg:w-[520px] lg:text-[17px] lg:leading-[27px]">
          {t("v2.academics.index.description")}
        </p>
        <div className="flex flex-wrap gap-5 pt-1">
          {facts.map((key) => (
            <div key={key} className="flex items-center gap-2.5">
              <div className="h-2 w-2 shrink-0 rounded-full bg-v2-crimson" />
              <div className="font-v2-heading text-v2-label font-semibold leading-4 text-v2-paper">
                {t(`v2.academics.index.${key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-[220px] lg:h-auto lg:flex-1">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PHOTO})` }} />
        <div className="absolute inset-y-0 left-0 hidden w-[320px] bg-gradient-to-r from-v2-navy to-transparent lg:block" />
      </div>
      </div>
    </section>
  );
}

export default AcademicsHero;
