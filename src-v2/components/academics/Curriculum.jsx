import { useTranslation } from "react-i18next";

const borderColors = ["border-t-v2-navy-2", "border-t-v2-step-2", "border-t-v2-step-3", "border-t-v2-step-4"];

// Transcribed from the Paper "EC Redesign" Program "Curriculum" artboard (2GB-0).
function Curriculum({ program }) {
  const { t } = useTranslation();
  const semesters = t(`v2.academics.programs.${program.i18nKey}.semesters`, { returnObjects: true });

  return (
    <section id="curriculum" className="flex flex-col gap-10 bg-v2-mist px-6 py-14 lg:gap-11 lg:px-v2-gutter lg:py-24">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-3.5">
          <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
            {t("v2.academics.programs.curriculumEyebrow")}
          </div>
          <div className="flex flex-wrap gap-3 font-v2-heading">
            <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[48px]">
              {t("v2.academics.programs.curriculumTitleLine1")}
            </span>
            <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[48px]">
              {t("v2.academics.programs.curriculumTitleLine2")}
            </span>
          </div>
        </div>
        <div className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson">
          {t("v2.academics.programs.curriculumDownload")} →
        </div>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-2 lg:overflow-visible">
        {semesters.map((semester, i) => (
          <div
            key={semester.label}
            className={`flex w-[260px] shrink-0 flex-col gap-4 rounded-[6px] border-t-4 bg-v2-paper px-5 py-6 lg:w-[309px] lg:px-6 lg:py-7 ${borderColors[i]}`}
          >
            <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.22em] text-v2-slate">
              {semester.label}
            </div>
            <div className="font-v2-heading text-[20px] font-extrabold leading-7 text-v2-navy lg:text-[22px]">{semester.title}</div>
            <div className="flex flex-col gap-2.5">
              {semester.topics.map((topic) => (
                <div key={topic} className="font-v2-body text-[14px] leading-[18px] text-v2-slate">
                  {topic}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Curriculum;
