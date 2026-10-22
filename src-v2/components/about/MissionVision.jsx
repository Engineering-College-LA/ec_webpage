import { useTranslation } from "react-i18next";

// Transcribed from the Paper "EC Redesign" About "Mission Vision" artboard (2W8-0).
// Below lg ("О колледже — Mobile v3"): smaller cards, title only.
function MissionVision() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-3.5 px-5 pb-3.5 lg:flex-row lg:gap-5 lg:px-v2-gutter lg:pb-[104px]">
      <div className="flex flex-1 flex-col gap-3.5 rounded-lg bg-v2-navy px-[22px] py-7 lg:gap-5 lg:p-12">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] lg:h-[52px] lg:w-[52px] bg-v2-crimson">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="8" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] lg:text-[11px] lg:leading-[14px] text-[#8FA3CC]">
          {t("v2.about.mission.eyebrow")}
        </div>
        <div className="font-v2-heading text-[20px] font-extrabold leading-[26px] lg:text-v2-h3 lg:leading-[35px] lg:tracking-[-0.02em] text-v2-paper">
          {t("v2.about.mission.title")}
        </div>
        <p className="hidden font-v2-body text-[15px] leading-[25px] text-[#C4CCDD] lg:block">{t("v2.about.mission.description")}</p>
      </div>
      <div className="flex flex-1 flex-col gap-3.5 rounded-lg bg-v2-mist px-[22px] py-7 lg:gap-5 lg:p-12">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] lg:h-[52px] lg:w-[52px] bg-v2-sky">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] lg:text-[11px] lg:leading-[14px] text-v2-slate">
          {t("v2.about.vision.eyebrow")}
        </div>
        <div className="font-v2-heading text-[20px] font-extrabold leading-[26px] lg:text-v2-h3 lg:leading-[35px] lg:tracking-[-0.02em] text-v2-navy">
          {t("v2.about.vision.title")}
        </div>
        <p className="hidden font-v2-body text-[15px] leading-[25px] text-v2-slate lg:block">{t("v2.about.vision.description")}</p>
      </div>
    </section>
  );
}

export default MissionVision;
