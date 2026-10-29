import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Transcribed from the Paper "EC Redesign" Academics "Program Rows" artboard (284-0).
// `number` is the program's fixed position in the full list, so it stays the
// same when a filter hides other rows; `index` is its position on screen.
function ProgramRow({ program, index, number = index + 1 }) {
  const { t } = useTranslation();
  const Icon = program.icon;
  const imageFirst = index % 2 === 0;
  const tags = t(`v2.academics.programs.${program.i18nKey}.tags`, { returnObjects: true });
  const eyebrow = `${String(number).padStart(2, "0")} · ${program.i18nKey.replace(/([A-Z])/g, " $1").toUpperCase()}`;

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
          {eyebrow}
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

  // Below lg: compact card from "Направления — Mobile v3" (photo, floating
  // icon, eyebrow, title, one-line description, "Подробнее").
  const mobileCard = (
    <Link
      to={`/academics/${program.slug}`}
      className="relative flex flex-col overflow-hidden rounded-[6px] border border-v2-hairline bg-v2-paper lg:hidden"
    >
      <div className="relative">
        <div
          className="aspect-[348/190] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${program.image})` }}
        />
        <div className="absolute -bottom-6 left-4 flex h-[46px] w-[46px] items-center justify-center rounded-[6px] bg-v2-paper text-v2-ink-nav shadow-[0_6px_18px_#0C183024]">
          <Icon width={20} height={20} />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 pt-[38px] pb-5">
        <div className="font-v2-heading text-[9px] font-semibold leading-3 tracking-[0.22em] text-v2-slate">
          {eyebrow}
        </div>
        <div className="font-v2-heading text-[20px] font-extrabold leading-6 text-v2-navy">
          {t(`v2.academics.programs.${program.i18nKey}.title`)}
        </div>
        <div className="font-v2-body text-[14px] leading-[21px] text-v2-slate">
          {t(`v2.academics.programs.${program.i18nKey}.cardDescription`)}
        </div>
        <div className="pt-1 font-v2-heading text-v2-label font-bold leading-4 text-v2-crimson">
          {t("v2.academics.index.readMore")} →
        </div>
      </div>
    </Link>
  );

  return (
    <>
    {mobileCard}
    <div className={`hidden lg:block ${imageFirst ? "" : "bg-v2-mist"}`}>
      <div
        className={`mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:gap-v2-gutter lg:px-v2-gutter lg:py-12 ${imageFirst ? "" : "lg:flex-row-reverse"}`}
      >
        {image}
        {copy}
      </div>
    </div>
    </>
  );
}

export default ProgramRow;
