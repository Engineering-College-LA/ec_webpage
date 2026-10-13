import { useTranslation } from "react-i18next";

// Transcribed from the Paper "EC Redesign" Program "Careers" artboard (2HG-0).
function Careers({ program }) {
  const { t } = useTranslation();
  const careers = t(`v2.academics.programs.${program.i18nKey}.careers`, { returnObjects: true });

  return (
    <section className="flex flex-col gap-8 px-6 py-14 lg:gap-10 lg:px-v2-gutter lg:py-24">
      <div className="flex flex-col gap-3.5">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
          {t("v2.academics.programs.careersEyebrow")}
        </div>
        <div className="flex flex-wrap gap-3 font-v2-heading">
          <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[48px]">
            {t("v2.academics.programs.careersTitleLine1")}
          </span>
          <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[48px]">
            {t("v2.academics.programs.careersTitleLine2")}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {careers.map((role, i) => {
          const last = i === careers.length - 1;
          return (
            <div
              key={role}
              className={`flex w-full items-center justify-between rounded-[6px] px-6 py-[22px] sm:w-[calc(50%-8px)] lg:w-[312px] ${
                last ? "bg-v2-navy" : "border border-v2-hairline"
              }`}
            >
              <div className={`font-v2-heading text-[16px] font-bold leading-5 ${last ? "text-v2-paper" : "text-v2-navy"}`}>{role}</div>
              <div className={`font-v2-heading text-[16px] font-bold leading-5 ${last ? "text-v2-paper" : "text-v2-crimson"}`}>→</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Careers;
