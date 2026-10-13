import { useTranslation } from "react-i18next";

const steps = [
  { key: "meet", dot: "bg-v2-navy-2" },
  { key: "exams", dot: "bg-v2-step-2" },
  { key: "documents", dot: "bg-v2-step-3" },
  { key: "enrollment", dot: "bg-v2-step-4" },
];

// Transcribed from the Paper "EC Redesign" Admission "Route" artboard (2KY-0).
// Simplified from Paper's decorative wavy path to a straight responsive
// stepper (same pattern as Home's AdmissionPath) — the curved route map
// doesn't hold up across viewport widths without fixed absolute positions.
function Route() {
  const { t } = useTranslation();

  return (
    <section id="route" className="bg-v2-mist">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-14 lg:gap-12 lg:px-v2-gutter lg:py-24">
      <div className="flex flex-col gap-3.5">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
          {t("v2.admission.route.eyebrow")}
        </div>
        <div className="flex flex-wrap gap-3 font-v2-heading">
          <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[48px]">
            {t("v2.admission.route.titleLine1")}
          </span>
          <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[48px]">
            {t("v2.admission.route.titleLine2")}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-10 rounded-2xl border border-v2-hairline bg-v2-paper p-8 lg:flex-row lg:items-start lg:gap-0 lg:p-12">
        <div className="relative flex flex-1 flex-col gap-10 lg:flex-row">
          <div className="absolute left-7 top-7 hidden h-0.5 w-[calc(100%-56px)] bg-gradient-to-r from-v2-navy-2 via-v2-step-3 to-v2-step-4 lg:block" />
          {steps.map((step, i) => (
            <div key={step.key} className="relative flex flex-col gap-3.5 lg:flex-1 lg:pr-6">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[5px] border-v2-paper font-v2-heading text-[20px] font-extrabold leading-6 text-v2-paper shadow-[0_6px_18px_#0C183038] ${step.dot}`}
              >
                {i + 1}
              </div>
              <div className="font-v2-heading text-[17px] font-bold leading-[22px] text-v2-navy">
                {t(`v2.admission.route.steps.${step.key}.title`)}
              </div>
              <div className="font-v2-body text-[14px] leading-[21px] text-v2-slate">
                {t(`v2.admission.route.steps.${step.key}.description`)}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 border-t border-v2-hairline pt-8 lg:ml-8 lg:flex-col lg:items-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="flex flex-col items-start gap-0.5 lg:items-end">
            <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-crimson">
              {t("v2.admission.route.finishEyebrow")}
            </div>
            <div className="font-v2-heading text-[16px] font-extrabold leading-5 text-v2-navy">
              {t("v2.admission.route.finishTitle")}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Route;
