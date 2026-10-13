import { useTranslation } from "react-i18next";

const PHOTO =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/4VGGRY57SRGNK37Z69ZBBS0ZBY.jpg";

const facts = ["factDuration", "factPractice", "factEntry"];

// Transcribed from the Paper "EC Redesign" Academics "Page Hero" artboard (276-0).
function AcademicsHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-v2-navy">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[440px] lg:flex-row">
      <div className="relative order-2 h-[220px] shrink-0 lg:order-none lg:h-auto lg:w-[720px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PHOTO})` }} />
        <div className="absolute inset-y-0 left-0 hidden w-[320px] bg-gradient-to-r from-v2-navy to-transparent lg:block" />
      </div>
      <div className="flex flex-col justify-center gap-5 px-6 py-10 lg:w-[700px] lg:shrink-0 lg:gap-[22px] lg:py-0 lg:pl-v2-gutter">
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
      </div>
    </section>
  );
}

export default AcademicsHero;
