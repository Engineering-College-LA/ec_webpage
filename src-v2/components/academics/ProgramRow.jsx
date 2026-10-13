import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Transcribed from the Paper "EC Redesign" Academics "Program Rows" artboard (284-0).
function ProgramRow({ program, index }) {
  const { t } = useTranslation();
  const Icon = program.icon;
  const imageFirst = index % 2 === 0;
  const tags = t(`v2.academics.programs.${program.i18nKey}.tags`, { returnObjects: true });

  const image = (
    <div
      className="h-[260px] w-full shrink-0 rounded-[6px] bg-cover bg-center lg:h-[360px] lg:w-[560px]"
      style={{ backgroundImage: `url(${program.image})` }}
    />
  );

  const copy = (
    <div className="flex flex-col gap-4 lg:gap-[18px]">
      <div className="flex items-center gap-3.5">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[6px] text-v2-ink-nav ${imageFirst ? "bg-v2-mist" : "bg-v2-paper"}`}>
          <Icon />
        </div>
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.22em] text-v2-slate">
          {String(index + 1).padStart(2, "0")} · {program.i18nKey.replace(/([A-Z])/g, " $1").toUpperCase()}
        </div>
      </div>
      <div className="font-v2-heading text-[28px] font-extrabold leading-[1.2] tracking-[-0.03em] text-v2-navy lg:text-[36px] lg:leading-[44px]">
        {t(`v2.academics.programs.${program.i18nKey}.title`)}
      </div>
      <p className="font-v2-body text-[15px] leading-[24px] text-v2-slate lg:w-[560px] lg:text-[16px] lg:leading-[26px]">
        {t(`v2.academics.programs.${program.i18nKey}.indexDescription`)}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div key={tag} className={`rounded-v2-sm px-3 py-1.5 ${imageFirst ? "bg-v2-mist" : "bg-v2-paper"}`}>
            <div className="font-v2-heading text-[12px] font-semibold leading-4 text-v2-navy">{tag}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-6 pt-2">
        <Link
          to={`/academics/${program.slug}`}
          className="flex items-center gap-2.5 rounded-v2-sm bg-v2-crimson px-[22px] py-3.5 font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper"
        >
          {t("v2.academics.index.detailsLink")}
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link to={`/academics/${program.slug}#curriculum`} className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-navy">
          {t("v2.academics.index.curriculumLink")} ↓
        </Link>
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:gap-v2-gutter lg:px-v2-gutter lg:py-12 ${imageFirst ? "" : "bg-v2-mist lg:flex-row-reverse"}`}>
      {image}
      {copy}
    </div>
  );
}

export default ProgramRow;
