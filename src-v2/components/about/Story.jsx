import { useTranslation } from "react-i18next";

const milestones = [
  { key: "founded", badge: "2018", dot: "bg-v2-navy-2" },
  { key: "schools", badge: "5", dot: "bg-v2-step-3" },
  { key: "opening", badge: "2026", dot: "bg-v2-crimson" },
];

// Transcribed from the Paper "EC Redesign" About "Story" artboard (2VH-0).
// Below lg ("О колледже — Mobile v3"): one short summary paragraph and a
// compact vertical timeline (badge + title per row).
function Story() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-11 lg:gap-v2-gutter lg:px-v2-gutter lg:py-[104px]">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-4 lg:w-[440px] lg:shrink-0">
          <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate lg:text-[11px] lg:leading-[14px]">
            {t("v2.about.story.eyebrow")}
          </div>
          <div className="flex flex-col font-v2-heading">
            <div className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[46px]">
              {t("v2.about.story.titleLine1")}
            </div>
            <div className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[46px]">
              {t("v2.about.story.titleLine2")}
            </div>
          </div>
        </div>
        <p className="font-v2-body text-[14px] leading-[23px] text-v2-slate lg:hidden">{t("v2.about.story.summaryShort")}</p>
        <div className="hidden flex-col gap-4 lg:flex lg:pt-[30px] lg:gap-[18px]">
          <p className="font-v2-body text-[18px] leading-8 text-v2-navy">{t("v2.about.story.paragraph1")}</p>
          <p className="font-v2-body text-[16px] leading-[27px] text-v2-slate">{t("v2.about.story.paragraph2")}</p>
        </div>
      </div>

      <div className="relative flex flex-col gap-5 lg:flex-row lg:gap-10">
        {/* Mobile: vertical connector through the badges */}
        <div className="absolute left-[23px] top-[30px] bottom-[30px] w-0.5 bg-gradient-to-b from-v2-navy-2 to-v2-crimson lg:hidden" />
        <div className="absolute left-10 top-10 hidden h-0.5 w-[880px] bg-gradient-to-r from-v2-navy-2 to-v2-step-4 lg:block" />
        {milestones.map((m) => (
          <div key={m.key} className="relative flex items-center gap-4 lg:w-[440px] lg:shrink-0 lg:flex-col lg:items-start">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[3px] border-v2-paper font-v2-heading font-extrabold text-v2-paper lg:h-20 lg:w-20 lg:border-[6px] lg:text-[18px] lg:leading-[18px] ${m.badge.length > 2 ? "text-[11px] leading-[14px]" : "text-[15px] leading-[18px]"} ${m.dot}`}
            >
              {t(`v2.about.story.milestones.${m.key}.badge`)}
            </div>
            <div className="font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy lg:text-[20px] lg:font-extrabold lg:leading-6">
              {t(`v2.about.story.milestones.${m.key}.title`)}
            </div>
            <div className="hidden max-w-[340px] font-v2-body text-[14px] leading-[22px] text-v2-slate lg:block">
              {t(`v2.about.story.milestones.${m.key}.description`)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Story;
