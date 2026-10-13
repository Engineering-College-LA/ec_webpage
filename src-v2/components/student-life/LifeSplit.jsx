import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { academicActivities, extracurricularActivities } from "../../config/studentLifeActivities";

const academicBorders = ["border-t-v2-navy-2", "border-t-v2-step-2", "border-t-v2-step-3", "border-t-v2-step-4"];

function AcademicCard({ activity, t, borderClass }) {
  return (
    <div className={`flex w-[260px] shrink-0 flex-col overflow-hidden rounded-[6px] border border-v2-hairline lg:w-[309px]`}>
      <div className="h-[150px] w-full bg-cover bg-center lg:h-[180px]" style={{ backgroundImage: `url(${activity.image})` }} />
      <div className={`flex flex-col gap-2.5 border-t-4 px-5 pt-[22px] pb-6 ${borderClass}`}>
        <div className="font-v2-heading text-[16px] font-extrabold leading-[22px] text-v2-navy">
          {t(`v2.studentLife.activities.${activity.i18nKey}.navLabel`)}
        </div>
        <div className="font-v2-body text-[14px] leading-[22px] text-v2-slate">
          {t(`v2.studentLife.activities.${activity.i18nKey}.navDescription`)}
        </div>
        <Link to={`/student-life/${activity.slug}`} className="font-v2-heading text-v2-label font-bold leading-4 text-v2-crimson">
          {t("v2.studentLifeIndex.detailsLink")} →
        </Link>
      </div>
    </div>
  );
}

function ExtracurricularCard({ activity, t }) {
  const Icon = activity.icon;
  return (
    <div className="flex w-[260px] shrink-0 flex-col gap-3.5 rounded-[6px] bg-v2-navy-2 px-6 py-7 lg:w-[309px]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[6px] bg-v2-crimson text-white">
          <Icon />
        </div>
        <div className="text-right font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.2em] text-[#8FA3CC]">
          {t(`v2.studentLife.activities.${activity.i18nKey}.categoryLabel`)}
        </div>
      </div>
      <div className="font-v2-heading text-[20px] font-extrabold leading-7 text-v2-paper lg:text-[22px] lg:leading-[28px]">
        {t(`v2.studentLife.activities.${activity.i18nKey}.navLabel`)}
      </div>
      <div className="font-v2-body text-[14px] leading-[22px] text-[#C4CCDD]">
        {t(`v2.studentLife.activities.${activity.i18nKey}.navDescription`)}
      </div>
      <Link to={`/student-life/${activity.slug}`} className="font-v2-heading text-v2-label font-bold leading-4 text-v2-paper">
        {t("v2.studentLifeIndex.detailsLink")} →
      </Link>
    </div>
  );
}

// Transcribed from the Paper "EC Redesign" Student Life "Life Split" artboard (3L7-0).
function LifeSplit() {
  const { t } = useTranslation();

  return (
    <div id="life-split" className="flex flex-col">
      <section className="flex flex-col gap-10 bg-v2-paper px-6 py-14 lg:gap-11 lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3.5">
            <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-sky">
              {t("v2.studentLifeIndex.academicEyebrow")}
            </div>
            <div className="flex flex-wrap gap-3 font-v2-heading">
              <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[44px] lg:leading-[50px]">
                {t("v2.studentLifeIndex.academicTitleLine1")}
              </span>
              <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[44px] lg:leading-[50px]">
                {t("v2.studentLifeIndex.academicTitleLine2")}
              </span>
            </div>
          </div>
          <p className="font-v2-body text-[15px] leading-[25px] text-v2-slate lg:w-[420px] lg:shrink-0">
            {t("v2.studentLifeIndex.academicDescription")}
          </p>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-2 lg:overflow-visible">
          {academicActivities.map((activity, i) => (
            <AcademicCard key={activity.slug} activity={activity} t={t} borderClass={academicBorders[i]} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-10 overflow-hidden bg-v2-navy px-6 py-14 lg:gap-11 lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3.5">
            <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-[#E6A3B4]">
              {t("v2.studentLifeIndex.extracurricularEyebrow")}
            </div>
            <div className="flex flex-wrap gap-3 font-v2-heading">
              <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-paper lg:text-[44px] lg:leading-[50px]">
                {t("v2.studentLifeIndex.extracurricularTitleLine1")}
              </span>
              <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-step-4 lg:text-[44px] lg:leading-[50px]">
                {t("v2.studentLifeIndex.extracurricularTitleLine2")}
              </span>
            </div>
          </div>
          <p className="font-v2-body text-[15px] leading-[25px] text-[#C4CCDD] lg:w-[420px] lg:shrink-0">
            {t("v2.studentLifeIndex.extracurricularDescription")}
          </p>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-2 lg:overflow-visible">
          {extracurricularActivities.map((activity) => (
            <ExtracurricularCard key={activity.slug} activity={activity} t={t} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default LifeSplit;
