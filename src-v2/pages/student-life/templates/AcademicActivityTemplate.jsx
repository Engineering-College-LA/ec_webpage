import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { academicActivities } from "../../../config/studentLifeActivities";
import CTABand from "../../../components/home/CTABand";

const cycleDots = ["bg-v2-step-2", "bg-v2-step-3", "bg-v2-step-4", "bg-v2-crimson"];

// Transcribed from the Paper "EC Redesign" "Проектное обучение — Desktop
// (шаблон академической)" artboard (3VC-0) — the template shared by all 4
// academic activities (childCount=7 artboards).
function AcademicActivityTemplate({ activity }) {
  const { t } = useTranslation();
  const key = activity.i18nKey;
  const Icon = activity.icon;
  const cycleSteps = t(`v2.studentLife.activities.${key}.cycleSteps`, { returnObjects: true });
  const projects = t(`v2.studentLife.activities.${key}.projects`, { returnObjects: true });
  const others = academicActivities.filter((a) => a.slug !== activity.slug);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[540px] lg:flex-row">
        <div className="relative order-2 h-[260px] shrink-0 lg:order-none lg:h-auto lg:w-[760px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${activity.image})` }} />
          <div className="absolute inset-y-0 left-0 hidden w-[240px] bg-gradient-to-r from-white to-transparent lg:block" />
          <div className="absolute bottom-6 right-6 flex flex-col gap-1 rounded-[6px] bg-v2-paper px-5 py-4 shadow-[0_12px_32px_#0C18302E] lg:bottom-10 lg:right-v2-gutter">
            <div className="font-v2-heading text-v2-h3 font-extrabold leading-[34px] text-v2-navy">
              {t(`v2.studentLife.activities.${key}.statValue`)}
            </div>
            <div className="font-v2-body text-[12px] leading-4 text-v2-slate">{t(`v2.studentLife.activities.${key}.statLabel`)}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 px-6 py-10 lg:w-[680px] lg:shrink-0 lg:gap-[22px] lg:py-0 lg:pl-v2-gutter">
          <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
            {t("v2.studentLife.breadcrumb")} / {t("v2.studentLife.academicBreadcrumb")} / {t(`v2.studentLife.activities.${key}.navLabel`).toUpperCase()}
          </div>
          <div className="flex items-center gap-3.5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[6px] bg-v2-navy-2 text-white">
              <Icon />
            </div>
            <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.22em] text-v2-sky">
              {t(`v2.studentLife.activities.${key}.categoryLabel`)}
            </div>
          </div>
          <div className="flex flex-col font-v2-heading">
            <div className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.035em] text-v2-navy lg:text-[44px] lg:leading-[50px]">
              {t(`v2.studentLife.activities.${key}.heroTitleLine1`)}
            </div>
            <div className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.035em] text-v2-sky lg:text-[44px] lg:leading-[50px]">
              {t(`v2.studentLife.activities.${key}.heroTitleLine2`)}
            </div>
          </div>
          <p className="font-v2-body text-[16px] leading-[26px] text-v2-slate lg:w-[520px] lg:text-[17px] lg:leading-[27px]">
            {t(`v2.studentLife.activities.${key}.heroDescription`)}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/admissions"
              className="flex items-center gap-2.5 rounded-v2-sm bg-v2-crimson px-6 py-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper"
            >
              {t("v2.studentLife.applyLabel")}
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="#projects"
              className="flex items-center rounded-v2-sm border-[1.5px] border-v2-navy px-6 py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy"
            >
              {t(`v2.studentLife.activities.${key}.secondaryCta`)}
            </a>
          </div>
        </div>
      </div>
      </section>

      <section className="bg-v2-navy">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-14 lg:gap-11 lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3.5">
            <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-[#8FA3CC]">
              {t(`v2.studentLife.activities.${key}.cycleEyebrow`)}
            </div>
            <div className="flex flex-wrap gap-3 font-v2-heading">
              <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-paper lg:text-[40px] lg:leading-[48px]">
                {t(`v2.studentLife.activities.${key}.cycleTitleLine1`)}
              </span>
              <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-step-4 lg:text-[40px] lg:leading-[48px]">
                {t(`v2.studentLife.activities.${key}.cycleTitleLine2`)}
              </span>
            </div>
          </div>
          <p className="font-v2-body text-[15px] leading-6 text-[#C4CCDD] lg:w-[400px] lg:shrink-0">
            {t(`v2.studentLife.activities.${key}.cycleDescription`)}
          </p>
        </div>
        <div className="relative flex flex-col gap-10 lg:flex-row">
          <div className="absolute left-9 top-9 hidden h-0.5 w-[calc(100%-72px)] bg-gradient-to-r from-v2-step-2 to-v2-crimson lg:block" />
          {cycleSteps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col gap-3.5 lg:flex-1">
              <div className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-[5px] border-v2-navy font-v2-heading text-[20px] font-extrabold leading-6 ${i === 2 ? "text-v2-navy" : "text-v2-paper"} ${cycleDots[i]}`}>
                {i + 1}
              </div>
              <div className="font-v2-heading text-[16px] font-bold leading-[22px] text-v2-paper">{step.title}</div>
              <div className="font-v2-body text-[14px] leading-[22px] text-[#C4CCDD]">{step.description}</div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section id="projects" className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-14 lg:gap-11 lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3.5">
            <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
              {t(`v2.studentLife.activities.${key}.projectsEyebrow`)}
            </div>
            <div className="flex flex-wrap gap-3 font-v2-heading">
              <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[48px]">
                {t(`v2.studentLife.activities.${key}.projectsTitleLine1`)}
              </span>
              <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[48px]">
                {t(`v2.studentLife.activities.${key}.projectsTitleLine2`)}
              </span>
            </div>
          </div>
          <div className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson">
            {t(`v2.studentLife.activities.${key}.projectsLink`)} →
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-1 flex-col overflow-hidden rounded-[6px] border border-v2-hairline">
              <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${activity.image})` }}>
                <div className="absolute left-4 top-4 rounded-v2-sm bg-v2-paper px-2.5 py-1.5">
                  <div className="font-v2-heading text-[11px] font-bold leading-[14px] text-v2-navy">{project.tag}</div>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-5">
                <div className="font-v2-heading text-[20px] font-extrabold leading-6 text-v2-navy">{project.title}</div>
                <div className="font-v2-body text-[14px] leading-[22px] text-v2-slate">{project.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-v2-mist">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-6 py-14 lg:px-v2-gutter lg:py-16">
        <div className="flex items-center justify-between">
          <div className="font-v2-heading text-[20px] font-extrabold leading-[30px] text-v2-navy lg:text-[24px]">
            {t("v2.studentLifeIndex.academicTitleLine1")} {t("v2.studentLifeIndex.academicTitleLine2")}
          </div>
          <Link to="/student-life" className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson">
            {t("v2.studentLife.breadcrumb")} →
          </Link>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          {others.map((other) => {
            const OtherIcon = other.icon;
            return (
              <Link
                key={other.slug}
                to={`/student-life/${other.slug}`}
                className="flex flex-1 items-center gap-4 rounded-[6px] bg-v2-paper p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[6px] bg-v2-mist text-v2-ink-nav">
                  <OtherIcon />
                </div>
                <div className="flex flex-1 flex-col gap-0.5">
                  <div className="font-v2-heading text-[17px] font-extrabold leading-[22px] text-v2-navy">
                    {t(`v2.studentLife.activities.${other.i18nKey}.navLabel`)}
                  </div>
                  <div className="font-v2-body text-v2-label leading-4 text-v2-slate">
                    {t(`v2.studentLife.activities.${other.i18nKey}.navDescription`)}
                  </div>
                </div>
                <div className="font-v2-heading text-[16px] font-bold leading-5 text-v2-crimson">→</div>
              </Link>
            );
          })}
        </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

export default AcademicActivityTemplate;
