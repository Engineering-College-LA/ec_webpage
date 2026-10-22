import { useTranslation } from "react-i18next";

// Transcribed from the Paper "EC Redesign" Admission "Cost Support" artboard (2N3-0).
// Below lg ("Поступление — Mobile v3") only the navy price block shows, with
// the discounts folded into its description.
function CostSupport() {
  const { t } = useTranslation();
  const tags = t("v2.admission.cost.tags", { returnObjects: true });

  return (
    <section id="cost" className="mx-auto flex max-w-[1440px] flex-col lg:flex-row">
      <div className="flex flex-col gap-3.5 bg-v2-navy px-5 py-10 lg:w-[520px] lg:gap-4 lg:shrink-0 lg:gap-[18px] lg:px-0 lg:py-20 lg:pl-v2-gutter lg:pr-14">
        <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-[#8FA3CC] lg:text-[11px] lg:leading-[14px]">
          {t("v2.admission.cost.eyebrow")}
        </div>
        <div className="font-v2-heading text-[48px] font-extrabold leading-[58px] tracking-[-0.04em] text-v2-paper lg:text-[64px] lg:leading-[78px]">
          {t("v2.admission.cost.amount")}
        </div>
        <p className="font-v2-body text-[14px] leading-[22px] text-[#C4CCDD] lg:text-[15px] lg:leading-6">
          <span className="lg:hidden">{t("v2.admission.cost.descriptionShort")}</span>
          <span className="hidden lg:inline">{t("v2.admission.cost.description")}</span>
        </p>
        <div className="pt-1.5 font-v2-heading text-[16px] font-bold leading-5 text-v2-paper lg:hidden">
          {t("v2.admission.cost.phone1")} · {t("v2.admission.cost.phone2")}
        </div>
        <div className="hidden flex-col gap-1.5 border-t border-white/15 pt-[18px] lg:flex">
          <div className="font-v2-heading text-[18px] font-bold leading-[22px] text-v2-paper">{t("v2.admission.cost.phone1")}</div>
          <div className="font-v2-heading text-[18px] font-bold leading-[22px] text-v2-paper">{t("v2.admission.cost.phone2")}</div>
        </div>
      </div>

      <div className="hidden grow flex-col gap-5 bg-v2-mist px-6 py-14 lg:flex lg:gap-6 lg:px-v2-gutter lg:py-20">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
          {t("v2.admission.cost.supportEyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="text-[26px] font-extrabold leading-[1.2] tracking-[-0.03em] text-v2-navy lg:text-[34px] lg:leading-10">
            {t("v2.admission.cost.titleLine1")}
          </div>
          <div className="text-[26px] font-extrabold leading-[1.2] tracking-[-0.03em] text-v2-sky lg:text-[34px] lg:leading-10">
            {t("v2.admission.cost.titleLine2")}
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <div key={tag} className="rounded-v2-sm bg-v2-paper px-3.5 py-2.5">
              <div className="font-v2-heading text-v2-label font-semibold leading-4 text-v2-navy">{tag}</div>
            </div>
          ))}
        </div>
        <p className="font-v2-body text-[14px] leading-[22px] text-v2-slate">{t("v2.admission.cost.note")}</p>
        <a href="#requirements" className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson">
          {t("v2.admission.cost.allDiscountsLink")} →
        </a>
      </div>
    </section>
  );
}

export default CostSupport;
