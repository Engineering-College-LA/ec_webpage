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
        width="700"
        height="60"
        viewBox="0 0 700 60"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 hidden lg:block"
        style={{
          maskImage: "linear-gradient(to right, #000 75%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, #000 75%, transparent)",
        }}
      >
        {/* Low back ridge with two peaks */}
        <path
          d="M0 60V45L60 38 120 44 180 30 243 3 290 28 340 22 398 2 450 26 520 20 580 32 640 26 700 34V60Z"
          fill="#1C3154"
        />
        {/* Snow caps, drawn on the peak slopes */}
        <path
          d="M243 3L254 9 248 8 243 11 237 8 229 9ZM398 2L411 8 404 7 398 10 391 7 381 8Z"
          fill="#E9EDFF"
          fillOpacity="0.85"
        />
        {/* Front ridge */}
        <path
          d="M0 60V52L80 46 160 52 240 42 320 50 400 40 480 50 560 44 640 50 700 46V60Z"
          fill="#142541"
        />
      </svg>
      {/* Mobile ridge ("Направления — Mobile v3") */}
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
      <div className="relative z-10 flex flex-col justify-center gap-4 px-5 pt-9 pb-v2-gutter lg:w-[700px] lg:shrink-0 lg:gap-[22px] lg:px-6 lg:py-0 lg:pl-v2-gutter">
        <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-[#8FA3CC] lg:text-[11px] lg:leading-[14px]">
          {t("v2.academics.index.eyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="text-[32px] font-extrabold leading-[37px] tracking-[-0.035em] text-v2-paper lg:text-[40px] lg:leading-[48px]">
            {t("v2.academics.index.titleLine1")}
          </div>
          <div className="text-[32px] font-extrabold leading-[37px] tracking-[-0.035em] text-v2-step-4 lg:text-[40px] lg:leading-[48px]">
            {t("v2.academics.index.titleLine2")}
          </div>
        </div>
        <p className="font-v2-body text-[14px] leading-[22px] text-[#C4CCDD] lg:w-[520px] lg:text-[17px] lg:leading-[27px]">
          <span className="lg:hidden">{t("v2.academics.index.descriptionShort")}</span>
          <span className="hidden lg:inline">{t("v2.academics.index.description")}</span>
        </p>
        <div className="hidden flex-wrap gap-5 pt-1 lg:flex">
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
      <div className="relative hidden lg:block lg:flex-1">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PHOTO})` }} />
        <div className="absolute inset-y-0 left-0 hidden w-[320px] bg-gradient-to-r from-v2-navy to-transparent lg:block" />
      </div>
      </div>
    </section>
  );
}

export default AcademicsHero;
