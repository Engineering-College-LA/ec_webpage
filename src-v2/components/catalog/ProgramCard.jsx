import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Transcribed from the Paper "EC Redesign" Home "Programs" section (1VN-0).
function ProgramCard({ program }) {
  const { t } = useTranslation();
  const Icon = program.icon;

  return (
    <Link
      to={`/academics/${program.slug}`}
      className="relative flex w-[243px] shrink-0 flex-col overflow-hidden rounded-[6px] border border-v2-hairline bg-v2-paper"
    >
      <div
        className="h-[170px] w-[243px] shrink-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${program.image})` }}
      />
      <div className="flex flex-col gap-2.5 px-[18px] pt-[42px] pb-[22px]">
        <div className="h-11 shrink-0 font-v2-heading text-[17px] font-bold leading-[22px] text-v2-navy">
          {t(`v2.academics.programs.${program.i18nKey}.title`)}
        </div>
        <div className="h-[63px] shrink-0 font-v2-body text-[14px] leading-[21px] text-v2-slate">
          {t(`v2.academics.programs.${program.i18nKey}.teaser`)}
        </div>
        <div className="pt-1.5 font-v2-heading text-v2-label font-bold leading-4 text-v2-crimson">
          {t("v2.academics.index.readMore")} →
        </div>
      </div>
      <div className="absolute left-[18px] top-[146px] flex h-12 w-12 items-center justify-center rounded-[6px] bg-v2-paper text-v2-ink-nav shadow-[0_6px_18px_#0E1B3324]">
        <Icon />
      </div>
    </Link>
  );
}

export default ProgramCard;
