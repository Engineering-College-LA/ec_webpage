import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  academicActivities,
  extracurricularActivities,
} from "../../config/studentLifeActivities";

// Transcribed from the Paper "EC Redesign" nav dropdown artboard (3HG-0).
function ActivityRow({ activity, featured, t }) {
  const Icon = activity.icon;
  return (
    <Link
      to={`/student-life/${activity.slug}`}
      className="flex gap-3.5 rounded-[6px] p-3 hover:bg-v2-mist"
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] ${
          featured ? "bg-v2-navy-2 text-white" : "bg-v2-mist text-v2-navy"
        }`}
      >
        <Icon />
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-navy">
          {t(`v2.studentLife.activities.${activity.i18nKey}.navLabel`)}
        </div>
        <div className="font-v2-body text-[12px] leading-[17px] text-v2-slate">
          {t(`v2.studentLife.activities.${activity.i18nKey}.navDescription`)}
        </div>
      </div>
    </Link>
  );
}

function ExtracurricularRow({ activity, t }) {
  const Icon = activity.icon;
  return (
    <Link
      to={`/student-life/${activity.slug}`}
      className="flex gap-3.5 rounded-[6px] p-3 hover:bg-v2-mist"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-v2-blush text-v2-crimson">
        <Icon />
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-navy">
          {t(`v2.studentLife.activities.${activity.i18nKey}.navLabel`)}
        </div>
        <div className="font-v2-body text-[12px] leading-[17px] text-v2-slate">
          {t(`v2.studentLife.activities.${activity.i18nKey}.navDescription`)}
        </div>
      </div>
    </Link>
  );
}

function NavDropdown({ open }) {
  const { t } = useTranslation();

  if (!open) return null;

  return (
    <div
      className="absolute left-1/2 top-full z-50 flex -translate-x-1/2 rounded-[10px] border border-v2-hairline bg-v2-paper shadow-xl"
      role="menu"
    >
      <div className="flex w-[350px] shrink-0 flex-col gap-0.5 px-5 py-6">
        <div className="px-3 pb-2.5 font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate">
          {t("v2.nav.dropdown.academicHeading")}
        </div>
        {academicActivities.map((activity, i) => (
          <ActivityRow
            key={activity.slug}
            activity={activity}
            featured={i === 0}
            t={t}
          />
        ))}
      </div>
      <div className="w-px shrink-0 bg-v2-hairline" />
      <div className="flex w-[350px] shrink-0 flex-col gap-0.5 px-5 py-6">
        <div className="px-3 pb-2.5 font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate">
          {t("v2.nav.dropdown.extracurricularHeading")}
        </div>
        {extracurricularActivities.map((activity) => (
          <ExtracurricularRow key={activity.slug} activity={activity} t={t} />
        ))}
      </div>
    </div>
  );
}

export default NavDropdown;
