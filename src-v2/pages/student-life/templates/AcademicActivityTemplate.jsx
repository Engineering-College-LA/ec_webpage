import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { academicActivities } from "../../../config/studentLifeActivities";
import CTABand from "../../../components/home/CTABand";

const cycleDots = ["bg-v2-step-2", "bg-v2-step-3", "bg-v2-step-4", "bg-v2-crimson"];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Internal paths use the router, anchors and absolute URLs a plain <a>.
const SmartLink = ({ to, className, children }) =>
  to.startsWith("/") && !to.includes("#") ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <a href={to} className={className}>
      {children}
    </a>
  );

// Transcribed from the Paper "EC Redesign" academic artboards — "Проектное
// обучение — Desktop (шаблон академической)" (3VC-0) and its siblings
// (Менторство 4V1-0, Олимпиады 50A-0, Лаборатории 55J-0) plus their Mobile
// artboards. Below lg the mobile artboards drop the closing CTA band and use
// shorter copy (the `*Short` keys, falling back to the full ones).
function AcademicActivityTemplate({ activity }) {
  const { t } = useTranslation();
  const key = activity.i18nKey;
  const k = (name) => `v2.studentLife.activities.${key}.${name}`;
  const opt = (name, fallback) => t(k(name), { defaultValue: fallback });

  const Icon = activity.icon;
  const cycleSteps = t(k("cycleSteps"), { returnObjects: true });
  const projects = t(k("projects"), { returnObjects: true });
  const others = academicActivities.filter((a) => a.slug !== activity.slug);
  const heroImage = activity.heroImage ?? activity.image;
  const projectImage = (i) => activity.projectImages?.[i] ?? { src: activity.image };

  const primaryCta = opt("primaryCta", t("v2.studentLife.applyLabel"));
  const primaryLink = activity.primaryLink ?? "/admissions";
  const mobileCta = opt("mobileCta", primaryCta);
  const mobileLink = activity.mobileLink ?? primaryLink;
  const secondaryLink = activity.secondaryLink ?? "#projects";
  const statValue = t(k("statValue"));
  const statLabel = t(k("statLabel"));
  const projectsTitle = `${t(k("projectsTitleLine1"))} ${t(k("projectsTitleLine2"))}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Mobile: photo with the stat badge */}
        <div className="relative aspect-[390/250] max-h-[520px] w-full lg:hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="absolute bottom-4 right-5 flex flex-col gap-0.5 rounded-[6px] bg-v2-paper px-3.5 py-2.5 shadow-[0_8px_24px_#0C183033]">
            <div className="font-v2-heading text-[20px] font-extrabold leading-6 text-v2-navy">{opt("statValueShort", statValue)}</div>
            <div className="font-v2-body text-[10px] leading-3 text-v2-slate">{opt("statLabelShort", statLabel)}</div>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[540px] lg:flex-row">
          <div className="flex flex-col justify-center gap-3.5 px-5 pt-[26px] pb-8 lg:w-[680px] lg:shrink-0 lg:gap-[22px] lg:px-6 lg:py-0 lg:pl-v2-gutter">
            <div className="font-v2-heading text-[9px] font-semibold leading-3 tracking-[0.22em] text-v2-sky lg:text-[11px] lg:leading-[14px] lg:tracking-[0.24em] lg:text-v2-slate">
              <span className="lg:hidden">
                {t("v2.studentLife.breadcrumbShort")} / {t("v2.studentLife.academicBreadcrumb")}
              </span>
              <span className="hidden lg:inline">
                {t("v2.studentLife.breadcrumb")} / {t("v2.studentLife.academicBreadcrumb")} / {t(k("heroTitleLine1")).toUpperCase()}
              </span>
            </div>
            <div className="hidden items-center gap-3.5 lg:flex">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[6px] bg-v2-navy-2 text-white">
                <Icon width={26} height={26} />
              </div>
              <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.22em] text-v2-sky">
                {t(k("categoryLabel"))}
              </div>
            </div>
            <div className="flex flex-col font-v2-heading">
              <div className="text-[32px] font-extrabold leading-[37px] tracking-[-0.035em] text-v2-navy lg:text-[44px] lg:leading-[50px]">
                {t(k("heroTitleLine1"))}
              </div>
              <div className="text-[32px] font-extrabold leading-[37px] tracking-[-0.035em] text-v2-sky lg:w-[540px] lg:text-[44px] lg:leading-[50px]">
                {t(k("heroTitleLine2"))}
              </div>
            </div>
            <p className="font-v2-body text-[14px] leading-[22px] text-v2-slate lg:w-[520px] lg:text-[17px] lg:leading-[27px]">
              <span className="lg:hidden">{opt("heroDescriptionShort", t(k("heroDescription")))}</span>
              <span className="hidden lg:inline">{t(k("heroDescription"))}</span>
            </p>
            {/* Mobile: one full-width button */}
            <SmartLink
              to={mobileLink}
              className="flex items-center justify-center gap-2.5 rounded-v2-sm bg-v2-crimson p-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:hidden"
            >
              {mobileCta}
              <ArrowIcon />
            </SmartLink>
            <div className="hidden gap-3 lg:flex">
              <SmartLink
                to={primaryLink}
                className="flex items-center gap-2.5 rounded-v2-sm bg-v2-crimson px-[26px] py-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper"
              >
                {primaryCta}
                <ArrowIcon />
              </SmartLink>
              <SmartLink
                to={secondaryLink}
                className="flex items-center rounded-v2-sm border-[1.5px] border-v2-navy px-[26px] py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy"
              >
                {t(k("secondaryCta"))}
              </SmartLink>
            </div>
          </div>

          {/* Desktop photo + stat card */}
          <div className="relative hidden lg:block lg:flex-1">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
            <div className="absolute inset-y-0 left-0 w-[240px] bg-gradient-to-r from-white to-transparent" />
            <div className="absolute bottom-10 right-v2-gutter flex flex-col gap-1 rounded-[6px] bg-v2-paper px-5 py-[18px] shadow-[0_12px_32px_#0C18302E]">
              <div className="font-v2-heading text-v2-h3 font-extrabold leading-[34px] text-v2-navy">{statValue}</div>
              <div className="font-v2-body text-[12px] leading-4 text-v2-slate">{statLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cycle */}
      <section id="cycle" className="scroll-mt-[60px] bg-v2-navy lg:scroll-mt-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-10 lg:gap-12 lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-5 lg:gap-3.5">
              <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-[#8FA3CC] lg:text-[11px] lg:leading-[14px]">
                {t(k("cycleEyebrow"))}
              </div>
              <div className="flex flex-col font-v2-heading lg:flex-row lg:gap-3">
                <span className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-paper lg:text-[40px] lg:leading-[48px]">
                  {t(k("cycleTitleLine1"))}
                </span>
                <span className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-step-4 lg:text-[40px] lg:leading-[48px]">
                  {t(k("cycleTitleLine2"))}
                </span>
              </div>
            </div>
            <p className="hidden w-[400px] shrink-0 font-v2-body text-[15px] leading-6 text-[#C4CCDD] lg:block">
              {t(k("cycleDescription"))}
            </p>
          </div>

          {/* Mobile: vertical list */}
          <div className="relative flex flex-col gap-5 lg:hidden">
            <div className="absolute left-[21px] top-[22px] bottom-[22px] w-0.5 bg-gradient-to-b from-v2-step-2 to-v2-crimson" />
            {cycleSteps.map((step, i) => (
              <div key={step.title} className="relative flex gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-v2-navy font-v2-heading text-[14px] font-bold leading-[18px] ${i === 2 ? "text-v2-navy" : "text-v2-paper"} ${cycleDots[i]}`}>
                  {i + 1}
                </div>
                <div className="flex flex-col gap-[3px] pt-[3px]">
                  <div className="font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper">{step.title}</div>
                  <div className="font-v2-body text-v2-label leading-4 text-[#C4CCDD]">{step.descriptionShort ?? step.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="relative hidden lg:flex">
            <div className="absolute left-9 top-9 h-0.5 w-[990px] max-w-[calc(100%-72px)] bg-gradient-to-r from-v2-step-2 to-v2-crimson" />
            {cycleSteps.map((step, i) => (
              <div key={step.title} className="relative flex flex-1 flex-col gap-3.5 pr-8 last:pr-0">
                <div className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border-[5px] border-v2-navy font-v2-heading text-[20px] font-extrabold leading-6 ${i === 2 ? "text-v2-navy" : "text-v2-paper"} ${cycleDots[i]}`}>
                  {i + 1}
                </div>
                <div className="font-v2-heading text-v2-body font-bold leading-[22px] text-v2-paper">{step.title}</div>
                <div className="font-v2-body text-[14px] leading-[22px] text-[#C4CCDD]">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / formats / spaces */}
      <section id="projects" className="mx-auto flex max-w-[1440px] scroll-mt-[60px] flex-col gap-3 px-5 py-10 lg:scroll-mt-20 lg:gap-10 lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-3 pb-1 lg:flex-row lg:items-end lg:justify-between lg:pb-0">
          <div className="flex flex-col gap-3 lg:gap-3.5">
            <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate lg:text-[11px] lg:leading-[14px]">
              {t(k("projectsEyebrow"))}
            </div>
            <div className="font-v2-heading text-[24px] font-extrabold leading-[30px] tracking-[-0.03em] text-v2-navy lg:hidden">
              {opt("projectsTitleShort", projectsTitle)}
            </div>
            <div className="hidden gap-3 font-v2-heading lg:flex">
              <span className="text-[40px] font-extrabold leading-[48px] tracking-[-0.03em] text-v2-navy">{t(k("projectsTitleLine1"))}</span>
              <span className="text-[40px] font-extrabold leading-[48px] tracking-[-0.03em] text-v2-sky">{t(k("projectsTitleLine2"))}</span>
            </div>
          </div>
          <div className="hidden font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson lg:block">
            {t(k("projectsLink"))} →
          </div>
        </div>

        {/* Mobile: compact rows with a thumbnail */}
        <div className="flex flex-col gap-3 lg:hidden">
          {projects.map((project, i) => {
            const img = projectImage(i);
            return (
              <div key={project.title} className="flex gap-3 rounded-[6px] border border-v2-hairline p-3">
                <div
                  className="h-[72px] w-[88px] shrink-0 rounded-v2-sm bg-cover"
                  style={{ backgroundImage: `url(${img.src})`, backgroundPosition: img.position ?? "50%" }}
                />
                <div className="flex flex-col justify-center gap-[3px]">
                  <div className="font-v2-heading text-[15px] font-extrabold leading-[18px] text-v2-navy">{project.title}</div>
                  <div className="font-v2-body text-[12px] leading-[18px] text-v2-slate">{project.descriptionShort ?? project.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: photo cards */}
        <div className="hidden gap-5 lg:flex">
          {projects.map((project, i) => {
            const img = projectImage(i);
            return (
              <div key={project.title} className="flex flex-1 flex-col overflow-hidden rounded-[6px] border border-v2-hairline">
                <div className="relative h-[240px] bg-cover" style={{ backgroundImage: `url(${img.src})`, backgroundPosition: img.position ?? "50%" }}>
                  <div className="absolute left-4 top-4 rounded-v2-sm bg-v2-paper px-2.5 py-1.5">
                    <div className="font-v2-heading text-[11px] font-bold leading-[14px] text-v2-navy">{project.tag}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-[22px]">
                  <div className="font-v2-heading text-[20px] font-extrabold leading-6 text-v2-navy">{project.title}</div>
                  <div className="font-v2-body text-[14px] leading-[22px] text-v2-slate">{project.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Other academic life */}
      <section className="mx-auto flex max-w-[1440px] flex-col gap-2.5 px-5 pb-10 lg:gap-7 lg:px-v2-gutter lg:pb-[104px]">
        <div className="flex items-center justify-between border-t border-v2-hairline pt-6 pb-1.5 lg:pt-10 lg:pb-0">
          <div className="font-v2-heading text-[20px] font-extrabold leading-6 text-v2-navy lg:text-[24px] lg:leading-[30px]">
            {t("v2.studentLife.otherAcademic")}
          </div>
          <Link to="/student-life" className="hidden font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson lg:block">
            {t("v2.studentLife.allStudentLife")} →
          </Link>
        </div>
        <div className="flex flex-col gap-2.5 lg:flex-row lg:gap-5">
          {others.map((other) => {
            const OtherIcon = other.icon;
            const otherKey = `v2.studentLife.activities.${other.i18nKey}`;
            return (
              <Link
                key={other.slug}
                to={`/student-life/${other.slug}`}
                className="flex items-center justify-between gap-4 rounded-[6px] bg-v2-mist p-4 lg:flex-1 lg:justify-start lg:p-[22px]"
              >
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-[6px] bg-v2-paper text-v2-ink-nav lg:flex">
                  <OtherIcon width={22} height={22} />
                </div>
                <div className="flex flex-1 flex-col gap-[3px]">
                  <div className="font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy lg:text-[17px] lg:font-extrabold lg:leading-[22px]">
                    {t(`${otherKey}.navLabel`)}
                  </div>
                  <div className="hidden font-v2-body text-v2-label leading-4 text-v2-slate lg:block">
                    {t(`${otherKey}.otherDescription`, { defaultValue: t(`${otherKey}.navDescription`) })}
                  </div>
                </div>
                <div className="font-v2-heading text-[16px] font-bold leading-5 text-v2-navy">→</div>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="hidden lg:block">
        <CTABand />
      </div>
    </>
  );
}

export default AcademicActivityTemplate;
