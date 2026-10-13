import { useTranslation } from "react-i18next";

// Transcribed from the Paper "EC Redesign" About "Mission Vision" artboard (2W8-0).
function MissionVision() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-5 px-6 pb-14 lg:flex-row lg:gap-5 lg:px-v2-gutter lg:pb-[104px]">
      <div className="flex flex-1 flex-col gap-5 rounded-lg bg-v2-navy p-8 lg:p-12">
        <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[6px] bg-v2-crimson">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="8" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-[#8FA3CC]">
          {t("v2.about.mission.eyebrow")}
        </div>
        <div className="font-v2-heading text-v2-h3 font-extrabold leading-[35px] tracking-[-0.02em] text-v2-paper">
          {t("v2.about.mission.title")}
        </div>
        <p className="font-v2-body text-[15px] leading-[25px] text-[#C4CCDD]">{t("v2.about.mission.description")}</p>
      </div>
      <div className="flex flex-1 flex-col gap-5 rounded-lg bg-v2-mist p-8 lg:p-12">
        <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[6px] bg-v2-sky">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
          {t("v2.about.vision.eyebrow")}
        </div>
        <div className="font-v2-heading text-v2-h3 font-extrabold leading-[35px] tracking-[-0.02em] text-v2-navy">
          {t("v2.about.vision.title")}
        </div>
        <p className="font-v2-body text-[15px] leading-[25px] text-v2-slate">{t("v2.about.vision.description")}</p>
      </div>
    </section>
  );
}

export default MissionVision;
