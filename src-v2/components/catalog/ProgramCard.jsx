import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Transcribed from the Paper "EC Redesign" Home "Programs" section (1VN-0);
// below lg, sizes follow the "Home — Mobile v3" carousel card (250px wide).
function ProgramCard({ program }) {
  const { t } = useTranslation();
  const Icon = program.icon;

  return (
    <Link
      to={`/academics/${program.slug}`}
      className="relative flex w-[250px] shrink-0 snap-start flex-col overflow-hidden rounded-[6px] border border-v2-hairline bg-v2-paper lg:w-[243px]"
    >
      <div
        className="h-[160px] w-full shrink-0 bg-cover bg-center lg:h-[170px]"
        style={{ backgroundImage: `url(${program.image})` }}
      />
      <div className="flex flex-col gap-2 px-4 pt-[38px] pb-5 lg:gap-2.5 lg:px-[18px] lg:pt-[42px] lg:pb-[22px]">
        <div className="font-v2-heading text-[16px] font-bold leading-5 text-v2-navy lg:h-11 lg:shrink-0 lg:text-[17px] lg:leading-[22px]">
          {t(`v2.academics.programs.${program.i18nKey}.title`)}
        </div>
        <div className="font-v2-body text-v2-label leading-5 text-v2-slate lg:h-[63px] lg:shrink-0 lg:text-[14px] lg:leading-[21px]">
          {t(`v2.academics.programs.${program.i18nKey}.teaser`)}
        </div>
        <div className="pt-1 font-v2-heading text-[12px] font-bold leading-4 text-v2-crimson lg:pt-1.5 lg:text-v2-label">
          {t("v2.academics.index.readMore")} →
        </div>
      </div>
      <div className="absolute left-4 top-[136px] flex h-11 w-11 items-center justify-center rounded-[6px] bg-v2-paper text-v2-ink-nav shadow-[0_6px_18px_#0E1B3324] lg:left-[18px] lg:top-[146px] lg:h-12 lg:w-12">
        <Icon />
      </div>
    </Link>
  );
}

export default ProgramCard;
