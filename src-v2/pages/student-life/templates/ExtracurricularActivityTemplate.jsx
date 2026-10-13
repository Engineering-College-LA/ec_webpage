import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { extracurricularActivities } from "../../../config/studentLifeActivities";
import CTABand from "../../../components/home/CTABand";

// Transcribed from the Paper "EC Redesign" "DevClub — Desktop (шаблон
// внеучебной)" artboard (3PF-0) — the template shared by all 4
// extracurricular activities (childCount=9 artboards).
function ExtracurricularActivityTemplate({ activity }) {
  const { t } = useTranslation();
  const key = activity.i18nKey;
  const Icon = activity.icon;
  const facts = t(`v2.studentLife.activities.${key}.facts`, { returnObjects: true });
  const whatWeDo = t(`v2.studentLife.activities.${key}.whatWeDo`, { returnObjects: true });
  const events = t(`v2.studentLife.activities.${key}.events`, { returnObjects: true });
  const joinSteps = t(`v2.studentLife.activities.${key}.joinSteps`, { returnObjects: true });
  const eventDots = ["bg-v2-navy", "bg-v2-step-2", "bg-v2-crimson"];
  const stepDots = ["bg-v2-navy-2", "bg-v2-step-3", "bg-v2-crimson"];
  const others = extracurricularActivities.filter((a) => a.slug !== activity.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-v2-navy">
        <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[560px] lg:flex-row">
        <div className="relative order-2 h-[260px] shrink-0 lg:order-none lg:h-auto lg:w-[740px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${activity.image})` }} />
          <div className="absolute inset-y-0 left-0 hidden w-[300px] bg-gradient-to-r from-v2-navy to-transparent lg:block" />
        </div>
        <div className="flex flex-col justify-center gap-5 px-6 py-10 lg:w-[680px] lg:shrink-0 lg:gap-[22px] lg:py-0 lg:pl-v2-gutter">
          <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-[#8FA3CC]">
            {t("v2.studentLife.breadcrumb")} / {t("v2.studentLife.extracurricularBreadcrumb")} / {t(`v2.studentLife.activities.${key}.navLabel`).toUpperCase()}
          </div>
          <div className="flex items-center gap-3.5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[6px] bg-v2-crimson text-white">
              <Icon />
            </div>
            <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.22em] text-[#E6A3B4]">
              {t(`v2.studentLife.activities.${key}.categoryLabel`)}
            </div>
          </div>
          <div className="flex flex-col font-v2-heading">
            <div className="text-[32px] font-extrabold leading-[1.15] tracking-[-0.035em] text-v2-paper lg:text-[48px] lg:leading-[54px]">
              {t(`v2.studentLife.activities.${key}.heroTitleLine1`)}
            </div>
            <div className="text-[32px] font-extrabold leading-[1.15] tracking-[-0.035em] text-v2-step-4 lg:text-[48px] lg:leading-[54px]">
              {t(`v2.studentLife.activities.${key}.heroTitleLine2`)}
            </div>
          </div>
          <p className="font-v2-body text-[16px] leading-[26px] text-[#C4CCDD] lg:w-[520px] lg:text-[17px] lg:leading-[27px]">
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
              href="#join"
              className="flex items-center rounded-v2-sm border-[1.5px] border-white/70 px-6 py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper"
            >
              {t(`v2.studentLife.activities.${key}.secondaryCta`)}
            </a>
          </div>
        </div>
      </div>
      </section>

      <section className="border-b border-v2-hairline">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-7 lg:flex-row lg:items-center lg:gap-0 lg:px-v2-gutter lg:py-8">
          {facts.map((fact, i) => (
            <div key={fact.label} className={`flex flex-col gap-1 lg:w-[330px] lg:shrink-0 ${i > 0 ? "lg:border-l lg:border-v2-hairline lg:pl-8" : ""}`}>
              <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.22em] text-v2-slate">{fact.label}</div>
              <div className="font-v2-heading text-[20px] font-extrabold leading-6 text-v2-navy">{fact.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-14 lg:gap-11 lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-3.5">
          <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
            {t(`v2.studentLife.activities.${key}.whatWeDoEyebrow`)}
          </div>
          <div className="flex flex-wrap gap-3 font-v2-heading">
            <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[48px]">
              {t(`v2.studentLife.activities.${key}.whatWeDoTitleLine1`)}
            </span>
            <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[48px]">
              {t(`v2.studentLife.activities.${key}.whatWeDoTitleLine2`)}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          {whatWeDo.map((item, i) => {
            const last = i === whatWeDo.length - 1;
            return (
              <div
                key={item.title}
                className={`flex flex-1 flex-col gap-4 rounded-[6px] px-6 py-8 ${last ? "bg-v2-navy" : "bg-v2-mist"}`}
              >
                <div className={`font-v2-heading text-[36px] font-extrabold leading-[1.1] tracking-[-0.04em] ${last ? "text-v2-crimson" : i === 0 ? "text-v2-navy-2" : "text-v2-step-3"}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className={`font-v2-heading text-[20px] font-extrabold leading-7 ${last ? "text-v2-paper" : "text-v2-navy"}`}>{item.title}</div>
                <div className={`font-v2-body text-[15px] leading-6 ${last ? "text-[#C4CCDD]" : "text-v2-slate"}`}>{item.description}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-v2-mist">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-14 lg:flex-row lg:gap-v2-gutter lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-4 lg:w-[380px] lg:shrink-0">
          <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
            {t(`v2.studentLife.activities.${key}.eventsEyebrow`)}
          </div>
          <div className="flex flex-col font-v2-heading">
            <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[38px] lg:leading-[44px]">
              {t(`v2.studentLife.activities.${key}.eventsTitleLine1`)}
            </div>
            <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[38px] lg:leading-[44px]">
              {t(`v2.studentLife.activities.${key}.eventsTitleLine2`)}
            </div>
          </div>
          <p className="font-v2-body text-[15px] leading-6 text-v2-slate">{t(`v2.studentLife.activities.${key}.eventsDescription`)}</p>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {events.map((event, i) => (
            <div key={event.title} className="flex items-center gap-4 rounded-[6px] bg-v2-paper px-5 py-5 lg:gap-6 lg:px-6">
              <div className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-[6px] ${eventDots[i]}`}>
                <div className="font-v2-heading text-[20px] font-extrabold leading-7 text-v2-paper">{event.day}</div>
                <div className="font-v2-heading text-[9px] font-semibold leading-3 tracking-[0.18em] text-[#8FA3CC]">{event.month}</div>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="font-v2-heading text-[16px] font-bold leading-[22px] text-v2-navy lg:text-[17px]">{event.title}</div>
                <div className="font-v2-body text-v2-label leading-4 text-v2-slate">{event.meta}</div>
              </div>
              <div className="shrink-0 rounded-v2-sm bg-v2-mist px-3 py-2">
                <div className="font-v2-heading text-[12px] font-bold leading-4 text-v2-navy">{event.tag}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section id="join" className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-14 lg:gap-11 lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-3.5">
          <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
            {t(`v2.studentLife.activities.${key}.joinEyebrow`)}
          </div>
          <div className="flex flex-wrap gap-3 font-v2-heading">
            <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[40px] lg:leading-[48px]">
              {t(`v2.studentLife.activities.${key}.joinTitleLine1`)}
            </span>
            <span className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[40px] lg:leading-[48px]">
              {t(`v2.studentLife.activities.${key}.joinTitleLine2`)}
            </span>
          </div>
        </div>
        <div className="relative flex flex-col gap-10 lg:flex-row">
          <div className="absolute left-7 top-7 hidden h-0.5 w-[calc(100%-56px)] bg-gradient-to-r from-v2-navy-2 to-v2-crimson lg:block" />
          {joinSteps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col gap-3.5 lg:flex-1">
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[5px] border-v2-paper font-v2-heading text-[16px] font-extrabold leading-5 text-v2-paper ${stepDots[i]}`}>
                {i + 1}
              </div>
              <div className="font-v2-heading text-[16px] font-bold leading-[22px] text-v2-navy">{step.title}</div>
              <div className="max-w-[340px] font-v2-body text-[14px] leading-[22px] text-v2-slate">{step.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-[1440px] flex-col gap-7 px-6 pb-14 lg:px-v2-gutter lg:pb-24">
        <div className="flex items-center justify-between border-t border-v2-hairline pt-10">
          <div className="font-v2-heading text-[20px] font-extrabold leading-[30px] text-v2-navy lg:text-[24px]">
            {t("v2.studentLifeIndex.extracurricularTitleLine1")} {t("v2.studentLifeIndex.extracurricularTitleLine2")}
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
                className="flex flex-1 items-center gap-4 rounded-[6px] border border-v2-hairline p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[6px] bg-v2-blush text-v2-crimson">
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
      </section>

      <CTABand />
    </>
  );
}

export default ExtracurricularActivityTemplate;
