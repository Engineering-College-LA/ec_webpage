import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";

const steps = [
  { key: "chooseProgram", dot: "bg-v2-navy-2" },
  { key: "applyOnline", dot: "bg-v2-step-2" },
  { key: "interview", dot: "bg-v2-step-3" },
  { key: "getAnswer", dot: "bg-v2-step-4" },
];

// Transcribed from the Paper "EC Redesign" Home "Admission Path" artboard (1XG-0).
function AdmissionPath() {
  const { t } = useTranslation();

  return (
    <section className="bg-v2-mist">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-12 px-6 py-14 lg:flex-row lg:items-center lg:gap-20 lg:px-v2-gutter lg:py-24">
      <div className="flex w-full flex-col gap-5 lg:w-[440px] lg:shrink-0 lg:gap-[22px]">
        <Eyebrow>{t("v2.home.admissionPath.eyebrow")}</Eyebrow>
        <div className="flex flex-col font-v2-heading">
          <div className="font-v2-heading text-[30px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[46px]">
            {t("v2.home.admissionPath.titleLine1")}
          </div>
          <div className="font-v2-heading text-[30px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[46px]">
            {t("v2.home.admissionPath.titleLine2")}
          </div>
        </div>
        <p className="font-v2-body text-[16px] leading-[25px] text-v2-slate">
          {t("v2.home.admissionPath.description")}
        </p>
        <div className="flex items-center gap-6 pt-1.5">
          <Link
            to="/admissions"
            className="flex items-center gap-2.5 rounded-v2-sm bg-v2-crimson px-6 py-[15px] font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper"
          >
            {t("v2.nav.applyButton")}
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link to="/admissions" className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson">
            {t("v2.home.admissionPath.aboutLink")} →
          </Link>
        </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 lg:relative lg:flex lg:grow lg:grid-cols-none lg:gap-0">
        <div className="absolute left-[26px] top-[26px] hidden h-0.5 w-[620px] bg-gradient-to-r from-v2-navy-2 to-v2-step-4 lg:block" />
        {steps.map((step, i) => (
          <div key={step.key} className="relative flex flex-col gap-3.5 lg:w-[194px] lg:shrink-0 lg:pr-6">
            <div
              className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border-4 border-v2-mist font-v2-heading text-[16px] font-bold leading-5 text-v2-paper ${step.dot}`}
            >
              {i + 1}
            </div>
            <div className="font-v2-heading text-[16px] font-bold leading-5 text-v2-navy">
              {t(`v2.home.admissionPath.steps.${step.key}.title`)}
            </div>
            <div className="font-v2-body text-[14px] leading-[21px] text-v2-slate">
              {t(`v2.home.admissionPath.steps.${step.key}.description`)}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default AdmissionPath;
