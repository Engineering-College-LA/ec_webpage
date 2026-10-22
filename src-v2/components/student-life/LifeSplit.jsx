import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { academicActivities, extracurricularActivities } from "../../config/studentLifeActivities";

const academicBorders = ["border-t-v2-navy-2", "border-t-v2-step-2", "border-t-v2-step-3", "border-t-v2-step-4"];
// Mobile list rows use the same palette as a left accent bar.
const academicLeftBorders = ["border-l-v2-navy-2", "border-l-v2-step-2", "border-l-v2-step-3", "border-l-v2-step-4"];

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

// Mobile ("Студенческая жизнь — Mobile v3"): compact row with a coloured
// left bar, no photo. The whole row links to the activity page.
function AcademicRow({ activity, t, borderClass }) {
  return (
    <Link
      to={`/student-life/${activity.slug}`}
      className={`flex flex-col gap-[3px] rounded-[6px] border-l-4 p-4 ${borderClass}`}
    >
      <div className="font-v2-heading text-[15px] font-extrabold leading-[18px] text-v2-navy">
        {t(`v2.studentLife.activities.${activity.i18nKey}.navLabel`)}
      </div>
      <div className="font-v2-body text-v2-label leading-[19px] text-v2-slate">
        {t(`v2.studentLife.activities.${activity.i18nKey}.mobileDescription`)}
      </div>
    </Link>
  );
}

// Mobile: small navy tile for the 2×2 extracurricular grid.
function ExtracurricularTile({ activity, t }) {
  const Icon = activity.icon;
  return (
    <Link
      to={`/student-life/${activity.slug}`}
      className="flex flex-col gap-2.5 rounded-[6px] bg-v2-navy-2 px-4 py-[18px]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-v2-crimson text-white">
        <Icon width={18} height={18} />
      </div>
      <div className="font-v2-heading text-[16px] font-extrabold leading-5 text-v2-paper">
        {t(`v2.studentLife.activities.${activity.i18nKey}.navLabel`)}
      </div>
      <div className="font-v2-body text-[12px] leading-[18px] text-[#C4CCDD]">
        {t(`v2.studentLife.activities.${activity.i18nKey}.mobileDescription`)}
      </div>
    </Link>
  );
}

const TAB_BASE =
  "flex grow basis-0 items-center justify-center rounded-v2-sm border px-2 py-2.5 font-v2-heading text-v2-label font-bold leading-4";

// Transcribed from the Paper "EC Redesign" Student Life "Life Split" artboard (3L7-0).
function LifeSplit() {
  const { t } = useTranslation();
  const [tab, setTab] = useState("academic");

  // Mobile tabs jump to the matching section (both stay on the page, as in
  // the artboard) and mark the one the reader picked.
  const goTo = (key) => {
    setTab(key);
    document.getElementById(`life-${key}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="life-split" className="flex flex-col">
      <div className="sticky top-[60px] z-20 flex gap-2 border-b border-v2-hairline bg-v2-paper px-5 py-3.5 lg:hidden" role="tablist">
        {["academic", "extracurricular"].map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            onClick={() => goTo(key)}
            className={`${TAB_BASE} ${tab === key ? "border-v2-navy bg-v2-navy text-v2-paper" : "border-v2-hairline text-v2-navy"}`}
          >
            {t(`v2.studentLifeIndex.tabs.${key}`)}
          </button>
        ))}
      </div>

      <section id="life-academic" className="scroll-mt-[124px] bg-v2-paper lg:scroll-mt-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 pt-10 pb-11 lg:gap-11 lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4 lg:gap-3.5">
              <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-sky lg:text-[11px] lg:leading-[14px]">
                {t("v2.studentLifeIndex.academicEyebrow")}
              </div>
              <div className="flex flex-col font-v2-heading lg:flex-row lg:flex-wrap lg:gap-3">
                <span className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-navy lg:text-[44px] lg:leading-[50px]">
                  {t("v2.studentLifeIndex.academicTitleLine1")}
                </span>
                <span className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-sky lg:text-[44px] lg:leading-[50px]">
                  {t("v2.studentLifeIndex.academicTitleLine2")}
                </span>
              </div>
            </div>
            <p className="hidden font-v2-body text-[15px] leading-[25px] text-v2-slate lg:block lg:w-[420px] lg:shrink-0">
              {t("v2.studentLifeIndex.academicDescription")}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 lg:hidden">
            {academicActivities.map((activity, i) => (
              <AcademicRow key={activity.slug} activity={activity} t={t} borderClass={academicLeftBorders[i]} />
            ))}
          </div>
          <div className="hidden gap-5 pb-2 lg:flex">
            {academicActivities.map((activity, i) => (
              <AcademicCard key={activity.slug} activity={activity} t={t} borderClass={academicBorders[i]} />
            ))}
          </div>
        </div>
      </section>

      <section id="life-extracurricular" className="scroll-mt-[124px] overflow-hidden bg-v2-navy lg:scroll-mt-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 pt-10 pb-11 lg:gap-11 lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4 lg:gap-3.5">
              <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-[#E6A3B4] lg:text-[11px] lg:leading-[14px]">
                {t("v2.studentLifeIndex.extracurricularEyebrow")}
              </div>
              <div className="flex flex-col font-v2-heading lg:flex-row lg:flex-wrap lg:gap-3">
                <span className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-paper lg:text-[44px] lg:leading-[50px]">
                  {t("v2.studentLifeIndex.extracurricularTitleLine1")}
                </span>
                <span className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-step-4 lg:text-[44px] lg:leading-[50px]">
                  {t("v2.studentLifeIndex.extracurricularTitleLine2")}
                </span>
              </div>
            </div>
            <p className="hidden font-v2-body text-[15px] leading-[25px] text-[#C4CCDD] lg:block lg:w-[420px] lg:shrink-0">
              {t("v2.studentLifeIndex.extracurricularDescription")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 lg:hidden">
            {extracurricularActivities.map((activity) => (
              <ExtracurricularTile key={activity.slug} activity={activity} t={t} />
            ))}
          </div>
          <div className="hidden gap-5 pb-2 lg:flex">
            {extracurricularActivities.map((activity) => (
              <ExtracurricularCard key={activity.slug} activity={activity} t={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LifeSplit;
