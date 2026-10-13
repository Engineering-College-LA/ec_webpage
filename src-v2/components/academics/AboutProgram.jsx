import { useTranslation } from "react-i18next";

// Transcribed from the Paper "EC Redesign" Program "About Program" artboard (2FH-0).
function AboutProgram({ program }) {
  const { t } = useTranslation();
  const bullets = t(`v2.academics.programs.${program.i18nKey}.aboutBullets`, { returnObjects: true });

  return (
    <section className="flex flex-col gap-10 px-6 py-14 lg:flex-row lg:gap-20 lg:px-v2-gutter lg:py-24">
      <div className="flex flex-col gap-4 lg:w-[480px] lg:shrink-0">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
          {t("v2.academics.programs.aboutEyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[38px] lg:leading-[44px]">
            {t(`v2.academics.programs.${program.i18nKey}.aboutTitleLine1`)}
          </div>
          <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[38px] lg:leading-[44px]">
            {t(`v2.academics.programs.${program.i18nKey}.aboutTitleLine2`)}
          </div>
        </div>
        <p className="font-v2-body text-[16px] leading-[26px] text-v2-slate">
          {t(`v2.academics.programs.${program.i18nKey}.aboutDescription`)}
        </p>
      </div>
      <div className="flex flex-1 flex-col border-t border-v2-hairline">
        {bullets.map((bullet) => (
          <div key={bullet.title} className="flex gap-[18px] border-b border-v2-hairline py-[22px]">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-v2-mist">
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2 6l3 3 5-6" fill="none" stroke="#9A1A3E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-v2-heading text-[16px] font-bold leading-5 text-v2-navy">{bullet.title}</div>
              <div className="font-v2-body text-[14px] leading-[21px] text-v2-slate">{bullet.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutProgram;
