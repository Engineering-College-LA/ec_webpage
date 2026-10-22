import { useTranslation } from "react-i18next";

const PHOTO =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/1NRT7HH082XEJ9V3NQM3MYM4XC.jpg";

// Transcribed from the Paper "EC Redesign" Student Life "Life Hero" artboard (2Q6-0).
// Below lg it follows "Студенческая жизнь — Mobile v3": photo on top fading
// into navy, copy underneath and a single full-width video button.
function StudentLifeHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-v2-navy">
      {/* Desktop: full-bleed photo behind the copy */}
      <div className="absolute inset-0 hidden bg-cover bg-[65%_40%] lg:block" style={{ backgroundImage: `url(${PHOTO})` }} />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-v2-navy via-v2-navy/70 to-transparent lg:block" />

      {/* Mobile: photo block at the artboard's 390×270 ratio */}
      <div className="relative aspect-[390/270] max-h-[520px] w-full lg:hidden">
        <div className="absolute inset-0 bg-cover bg-[55%_35%]" style={{ backgroundImage: `url(${PHOTO})` }} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0C18301A_0%,#0C183000_45%,#0C183099_75%,#0C1830_100%)]" />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] items-end px-5 pt-2 pb-8 lg:h-[600px] lg:px-v2-gutter lg:pt-0 lg:pb-[72px]">
      <div className="relative flex w-full flex-col gap-3.5 lg:w-[620px] lg:gap-[22px]">
        <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-[#8FA3CC] lg:text-[11px] lg:leading-[14px]">
          <span className="lg:hidden">{t("v2.studentLifeIndex.hero.eyebrowShort")}</span>
          <span className="hidden lg:inline">{t("v2.studentLifeIndex.hero.eyebrow")}</span>
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="text-[38px] font-extrabold leading-[42px] tracking-[-0.035em] text-v2-paper lg:text-[60px] lg:leading-[64px]">
            {t("v2.studentLifeIndex.hero.titleLine1")}
          </div>
          <div className="text-[38px] font-extrabold leading-[42px] tracking-[-0.035em] text-v2-step-4 lg:text-[60px] lg:leading-[64px]">
            {t("v2.studentLifeIndex.hero.titleLine2")}
          </div>
        </div>
        <p className="font-v2-body text-[14px] leading-[22px] text-[#D6DCE8] lg:w-[500px] lg:text-[17px] lg:leading-[27px]">
          {t("v2.studentLifeIndex.hero.description")}
        </p>
        <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap">
          <a
            href="#life-split"
            className="flex items-center justify-center gap-2.5 rounded-v2-sm bg-v2-crimson p-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:justify-start lg:px-6 lg:py-4"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M4 2v10l8-5-8-5z" fill="#FFFFFF" />
            </svg>
            {t("v2.studentLifeIndex.hero.primaryCta")}
          </a>
          <a
            href="/admissions"
            className="hidden items-center rounded-v2-sm border-[1.5px] border-white/70 px-6 py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:flex"
          >
            {t("v2.studentLifeIndex.hero.secondaryCta")}
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default StudentLifeHero;
