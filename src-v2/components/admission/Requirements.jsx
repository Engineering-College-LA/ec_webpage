import { useTranslation } from "react-i18next";

// Transcribed from the Paper "EC Redesign" Admission "Requirements Docs" artboard (48E-0).
function Requirements() {
  const { t } = useTranslation();
  const requirementsList = t("v2.admission.requirements.requirementsList", { returnObjects: true });
  const documentsList = t("v2.admission.requirements.documentsList", { returnObjects: true });

  return (
    <section id="requirements" className="flex flex-col gap-10 px-6 py-14 lg:gap-12 lg:px-v2-gutter lg:py-24">
      <div className="flex flex-col gap-4">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
          {t("v2.admission.requirements.eyebrow")}
        </div>
        <div className="flex flex-wrap gap-3 font-v2-heading">
          <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[48px]">
            {t("v2.admission.requirements.titleLine1")}
          </span>
          <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[48px]">
            {t("v2.admission.requirements.titleLine2")}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6 rounded-xl bg-v2-mist px-6 py-8 lg:px-10 lg:py-9">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-v2-paper">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="4" fill="none" stroke="#0C1830" strokeWidth="1.8" />
                <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="none" stroke="#0C1830" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="font-v2-heading text-[20px] font-extrabold leading-7 text-v2-navy lg:text-[22px] lg:leading-[28px]">
              {t("v2.admission.requirements.requirementsTitle")}
            </div>
          </div>
          <div className="flex flex-col border-t border-v2-hairline">
            {requirementsList.map((item, i) => (
              <div key={item} className="flex items-center gap-4 border-b border-v2-hairline py-[18px]">
                <div className="w-7 shrink-0 font-v2-heading text-[15px] font-extrabold leading-5 text-v2-crimson">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-v2-body text-[15px] leading-[22px] text-v2-navy">{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 rounded-xl bg-v2-mist px-6 py-8 lg:px-10 lg:py-9">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-v2-paper">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 3h8l4 4v14H6V3z" fill="none" stroke="#0C1830" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M9 12h6M9 16h6" fill="none" stroke="#0C1830" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="font-v2-heading text-[20px] font-extrabold leading-7 text-v2-navy lg:text-[22px] lg:leading-[28px]">
              {t("v2.admission.requirements.documentsTitle")}
            </div>
          </div>
          <div className="flex flex-col border-t border-v2-hairline">
            {documentsList.map((item) => (
              <div key={item} className="flex items-center gap-4 border-b border-v2-hairline py-2.5">
                <svg width="16" height="16" viewBox="0 0 12 12" aria-hidden="true" className="shrink-0">
                  <path d="M2 6l3 3 5-6" fill="none" stroke="#9A1A3E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="font-v2-body text-[14px] leading-5 text-v2-navy">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Requirements;
