import { useTranslation } from "react-i18next";

const milestones = [
  { key: "founded", badge: "2018", dot: "bg-v2-navy-2" },
  { key: "schools", badge: "5", dot: "bg-v2-step-3" },
  { key: "opening", badge: "2026", dot: "bg-v2-crimson" },
];

// Transcribed from the Paper "EC Redesign" About "Story" artboard (2VH-0).
function Story() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-14 px-6 py-14 lg:gap-v2-gutter lg:px-v2-gutter lg:py-[104px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-4 lg:w-[440px] lg:shrink-0">
          <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
            {t("v2.about.story.eyebrow")}
          </div>
          <div className="flex flex-col font-v2-heading">
            <div className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[46px]">
              {t("v2.about.story.titleLine1")}
            </div>
            <div className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[46px]">
              {t("v2.about.story.titleLine2")}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:pt-[30px] lg:gap-[18px]">
          <p className="font-v2-body text-[18px] leading-8 text-v2-navy">{t("v2.about.story.paragraph1")}</p>
          <p className="font-v2-body text-[16px] leading-[27px] text-v2-slate">{t("v2.about.story.paragraph2")}</p>
        </div>
      </div>

      <div className="relative flex flex-col gap-10 lg:flex-row">
        <div className="absolute left-10 top-10 hidden h-0.5 w-[880px] bg-gradient-to-r from-v2-navy-2 to-v2-step-4 lg:block" />
        {milestones.map((m) => (
          <div key={m.key} className="relative flex flex-col gap-4 lg:w-[440px] lg:shrink-0">
            <div
              className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[6px] border-v2-paper font-v2-heading text-[18px] font-extrabold leading-[18px] text-v2-paper ${m.dot}`}
            >
              {t(`v2.about.story.milestones.${m.key}.badge`)}
            </div>
            <div className="font-v2-heading text-[20px] font-extrabold leading-6 text-v2-navy">
              {t(`v2.about.story.milestones.${m.key}.title`)}
            </div>
            <div className="max-w-[340px] font-v2-body text-[14px] leading-[22px] text-v2-slate">
              {t(`v2.about.story.milestones.${m.key}.description`)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Story;
