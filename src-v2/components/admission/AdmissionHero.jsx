import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PHOTO =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/0W2D942P3ZQREJ9YWT55G4FHJ5.jpg";

const facts = ["deadline", "seats", "start"];

// Transcribed from the Paper "EC Redesign" Admission "Admission Hero" artboard (2K4-0).
function AdmissionHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[600px] lg:flex-row">
      <div className="flex flex-col justify-center gap-5 px-6 py-10 lg:w-[680px] lg:shrink-0 lg:gap-6 lg:py-0 lg:pl-v2-gutter">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
          {t("v2.admission.hero.eyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.035em] text-v2-navy lg:text-[58px] lg:leading-[62px]">
            {t("v2.admission.hero.titleLine1")}
          </div>
          <div className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.035em] text-v2-sky lg:text-[58px] lg:leading-[62px]">
            {t("v2.admission.hero.titleLine2")}
          </div>
        </div>
        <p className="font-v2-body text-[16px] leading-[26px] text-v2-slate lg:w-[500px] lg:text-[17px] lg:leading-[27px]">
          {t("v2.admission.hero.description")}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="#admission-contact"
            className="flex items-center gap-2.5 rounded-v2-sm bg-v2-crimson px-6 py-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper"
          >
            {t("v2.nav.applyButton")}
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="#requirements"
            className="flex items-center rounded-v2-sm border-[1.5px] border-v2-navy px-6 py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy"
          >
            {t("v2.admission.hero.secondaryCta")}
          </a>
        </div>
        <div className="flex flex-wrap gap-3 pt-1.5">
          {facts.map((key) => (
            <div key={key} className="flex flex-col gap-0.5 rounded-v2-sm bg-v2-mist px-4 py-3">
              <div className="font-v2-heading text-[18px] font-extrabold leading-[22px] text-v2-navy">
                {t(`v2.admission.hero.facts.${key}.value`)}
              </div>
              <div className="font-v2-body text-[12px] leading-4 text-v2-slate">
                {t(`v2.admission.hero.facts.${key}.label`)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[280px] lg:h-auto lg:flex-1">
        <div className="absolute inset-0 bg-cover bg-[70%_center]" style={{ backgroundImage: `url(${PHOTO})` }} />
        <div className="absolute inset-y-0 left-0 hidden w-[180px] bg-gradient-to-r from-white to-transparent lg:block" />
        <div className="absolute bottom-6 right-6 flex w-[260px] flex-col gap-3 rounded-[6px] bg-v2-crimson px-6 py-6 shadow-[0_16px_40px_#0C183040] lg:bottom-12 lg:right-v2-gutter lg:w-[300px]">
          <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.22em] text-[#F2C9D3]">
            {t("v2.admission.hero.entryCard.eyebrow")}
          </div>
          <div className="font-v2-heading text-[20px] font-extrabold leading-[27px] text-v2-paper lg:text-[22px]">
            {t("v2.admission.hero.entryCard.title")}
          </div>
          <a href="/#admission-contact" className="font-v2-heading text-v2-label font-bold leading-4 text-v2-paper">
            {t("v2.admission.hero.entryCard.cta")} →
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AdmissionHero;
