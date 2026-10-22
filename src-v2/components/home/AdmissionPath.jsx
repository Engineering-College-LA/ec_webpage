import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";

const steps = [
  { key: "chooseProgram", dot: "bg-v2-navy-2" },
  { key: "applyOnline", dot: "bg-v2-step-2" },
  { key: "interview", dot: "bg-v2-step-3" },
  { key: "getAnswer", dot: "bg-v2-step-4" },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Transcribed from the Paper "EC Redesign" Home "Admission Path" artboard (1XG-0).
// Below lg it follows "Home — Mobile v3": a vertical timeline and a
// full-width apply button under the steps.
function AdmissionPath() {
  const { t } = useTranslation();

  return (
    <section className="bg-v2-mist">
      <div className="mx-auto flex max-w-[1440px] flex-col items-stretch gap-6 px-5 py-12 lg:flex-row lg:items-center lg:gap-20 lg:px-v2-gutter lg:py-24">
      <div className="flex w-full flex-col gap-6 lg:w-[440px] lg:shrink-0 lg:gap-[22px]">
        <Eyebrow className="text-[10px] leading-3 lg:text-[11px] lg:leading-[14px]">
          {t("v2.home.admissionPath.eyebrow")}
        </Eyebrow>
        <div className="flex flex-col font-v2-heading">
          <div className="font-v2-heading text-v2-h3 font-extrabold leading-[33px] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[46px]">
            {t("v2.home.admissionPath.titleLine1")}
          </div>
          <div className="font-v2-heading text-v2-h3 font-extrabold leading-[33px] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[46px]">
            {t("v2.home.admissionPath.titleLine2")}
          </div>
        </div>
        <p className="hidden font-v2-body text-[16px] leading-[25px] text-v2-slate lg:block">
          {t("v2.home.admissionPath.description")}
        </p>
        <div className="hidden items-center gap-6 pt-1.5 lg:flex">
          <Link
            to="/admissions"
            className="flex items-center gap-2.5 rounded-v2-sm bg-v2-crimson px-6 py-[15px] font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper"
          >
            {t("v2.nav.applyButton")}
            <ArrowIcon />
          </Link>
          <Link to="/admissions" className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson">
            {t("v2.home.admissionPath.aboutLink")} →
          </Link>
        </div>
      </div>

      <div className="relative flex w-full flex-col gap-[22px] lg:flex-row lg:grow lg:gap-0">
        {/* Mobile: vertical connector through the dot centres */}
        <div className="absolute left-[21px] top-[22px] bottom-[22px] w-0.5 bg-gradient-to-b from-v2-navy-2 to-v2-step-4 lg:hidden" />
        {/* Desktop: horizontal connector */}
        <div className="absolute left-[26px] top-[26px] hidden h-0.5 w-[620px] bg-gradient-to-r from-v2-navy-2 to-v2-step-4 lg:block" />
        {steps.map((step, i) => (
          <div key={step.key} className="relative flex gap-4 lg:w-[194px] lg:shrink-0 lg:flex-col lg:gap-3.5 lg:pr-6">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-v2-mist font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper lg:h-[54px] lg:w-[54px] lg:border-4 lg:text-[16px] lg:leading-5 ${step.dot}`}
            >
              {i + 1}
            </div>
            <div className="flex flex-col gap-[3px] pt-1 lg:contents">
              <div className="font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy lg:text-[16px] lg:leading-5">
                {t(`v2.home.admissionPath.steps.${step.key}.title`)}
              </div>
              <div className="font-v2-body text-v2-label leading-4 text-v2-slate lg:hidden">
                {t(`v2.home.admissionPath.steps.${step.key}.descriptionShort`)}
              </div>
              <div className="hidden font-v2-body text-[14px] leading-[21px] text-v2-slate lg:block">
                {t(`v2.home.admissionPath.steps.${step.key}.description`)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/admissions"
        className="flex items-center justify-center gap-2.5 rounded-v2-sm bg-v2-crimson p-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:hidden"
      >
        {t("v2.nav.applyButton")}
        <ArrowIcon />
      </Link>
      </div>
    </section>
  );
}

export default AdmissionPath;
