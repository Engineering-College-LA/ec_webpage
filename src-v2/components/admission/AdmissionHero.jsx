import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PHOTO =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/0W2D942P3ZQREJ9YWT55G4FHJ5.jpg";

const facts = ["deadline", "seats", "start"];
// Mobile shows the deadline as a badge on the photo, so only these two here.
const mobileFacts = ["seats", "start"];

// Transcribed from the Paper "EC Redesign" Admission "Admission Hero" artboard (2K4-0).
// Below lg it follows "Поступление — Mobile v3": photo first with a deadline
// badge, then copy, one full-width apply button and two fact tiles.
function AdmissionHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[600px] lg:flex-row">
      <div className="order-last flex flex-col justify-center gap-4 px-5 pt-7 pb-8 lg:order-none lg:w-[680px] lg:shrink-0 lg:gap-6 lg:px-6 lg:py-0 lg:pl-v2-gutter">
        <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate lg:text-[11px] lg:leading-[14px]">
          {t("v2.admission.hero.eyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="text-[34px] font-extrabold leading-[38px] tracking-[-0.035em] text-v2-navy lg:text-[58px] lg:leading-[62px]">
            {t("v2.admission.hero.titleLine1")}
          </div>
          <div className="text-[34px] font-extrabold leading-[38px] tracking-[-0.035em] text-v2-sky lg:text-[58px] lg:leading-[62px]">
            {t("v2.admission.hero.titleLine2")}
          </div>
        </div>
        <p className="font-v2-body text-[15px] leading-6 text-v2-slate lg:w-[500px] lg:text-[17px] lg:leading-[27px]">
          <span className="lg:hidden">{t("v2.admission.hero.descriptionShort")}</span>
          <span className="hidden lg:inline">{t("v2.admission.hero.description")}</span>
        </p>
        <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap">
          <Link
            to="#admission-contact"
            className="flex items-center justify-center gap-2.5 rounded-v2-sm bg-v2-crimson p-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:justify-start lg:px-6"
          >
            {t("v2.nav.applyButton")}
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="#requirements"
            className="hidden items-center rounded-v2-sm border-[1.5px] border-v2-navy px-6 py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy lg:flex"
          >
            {t("v2.admission.hero.secondaryCta")}
          </a>
        </div>

        {/* Mobile: two equal fact tiles */}
        <div className="flex gap-2 lg:hidden">
          {mobileFacts.map((key) => (
            <div key={key} className="flex grow basis-0 flex-col gap-0.5 rounded-v2-sm bg-v2-mist p-3">
              <div className="font-v2-heading text-[16px] font-extrabold leading-5 text-v2-navy">
                {t(`v2.admission.hero.facts.${key}.value`)}
              </div>
              <div className="font-v2-body text-[11px] leading-[14px] text-v2-slate">
                {t(`v2.admission.hero.facts.${key}.labelShort`, {
                  defaultValue: t(`v2.admission.hero.facts.${key}.label`),
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden flex-wrap gap-3 pt-1.5 lg:flex">
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

      <div className="relative order-first aspect-[390/250] max-h-[520px] w-full lg:order-none lg:aspect-auto lg:max-h-none lg:h-auto lg:w-auto lg:flex-1">
        <div className="absolute inset-0 bg-cover bg-center lg:bg-[70%_center]" style={{ backgroundImage: `url(${PHOTO})` }} />
        {/* Mobile: fade the photo's bottom into the white copy block */}
        <div className="absolute inset-x-0 bottom-0 h-[121px] bg-gradient-to-b from-white/0 via-white/80 via-70% to-white lg:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-[180px] bg-gradient-to-r from-white to-transparent lg:block" />

        {/* Mobile: deadline badge */}
        <div className="absolute right-4 top-4 flex flex-col gap-1 rounded-[6px] bg-v2-crimson px-4 py-3.5 lg:hidden">
          <div className="font-v2-heading text-[9px] font-semibold leading-3 tracking-[0.2em] text-[#F2C9D3]">
            {t("v2.admission.hero.badgeEyebrow")}
          </div>
          <div className="font-v2-heading text-v2-body font-extrabold leading-[22px] text-v2-paper">
            {t("v2.admission.hero.facts.deadline.value")}
          </div>
        </div>

        {/* Desktop: entry card */}
        <div className="absolute bottom-12 right-v2-gutter hidden w-[300px] flex-col gap-3 rounded-[6px] bg-v2-crimson px-6 py-6 shadow-[0_16px_40px_#0C183040] lg:flex">
          <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.22em] text-[#F2C9D3]">
            {t("v2.admission.hero.entryCard.eyebrow")}
          </div>
          <div className="font-v2-heading text-[22px] font-extrabold leading-[27px] text-v2-paper">
            {t("v2.admission.hero.entryCard.title")}
          </div>
          <Link to="/#admission-contact" className="font-v2-heading text-v2-label font-bold leading-4 text-v2-paper">
            {t("v2.admission.hero.entryCard.cta")} →
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AdmissionHero;
