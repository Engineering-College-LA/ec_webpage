import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { extracurricularActivities } from "../../../config/studentLifeActivities";
import CTABand from "../../../components/home/CTABand";

const eventBoxes = [
  { box: "bg-v2-navy", month: "text-[#8FA3CC]" },
  { box: "bg-v2-step-2", month: "text-[#DDE3F0]" },
  { box: "bg-v2-crimson", month: "text-[#F2C9D3]" },
];
const stepDots = ["bg-v2-navy-2", "bg-v2-step-3", "bg-v2-crimson"];
const stepNumberColors = ["text-v2-navy-2", "text-v2-step-3", "text-v2-crimson"];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Transcribed from the Paper "EC Redesign" "DevClub — Desktop (шаблон
// внеучебной)" artboard (3PF-0) and the Enactus desktop/mobile artboards
// (4CX-0 / 5AQ-0) — the template shared by all 4 extracurricular activities.
// Below lg the mobile artboards drop the join steps and the closing CTA band,
// and show shorter copy (the `*Short` keys, falling back to the full ones).
function ExtracurricularActivityTemplate({ activity }) {
  const { t } = useTranslation();
  const key = activity.i18nKey;
  const k = (name) => `v2.studentLife.activities.${key}.${name}`;
  // Optional key: use it if the activity defines it, otherwise the fallback.
  const opt = (name, fallback) => t(k(name), { defaultValue: fallback });

  const Icon = activity.icon;
  const facts = t(k("facts"), { returnObjects: true });
  const whatWeDo = t(k("whatWeDo"), { returnObjects: true });
  const events = t(k("events"), { returnObjects: true });
  const joinSteps = t(k("joinSteps"), { returnObjects: true });
  const others = extracurricularActivities.filter((a) => a.slug !== activity.slug);

  const navLabel = t(k("navLabel"));
  const heroCategory = opt("heroCategory", t(k("categoryLabel")));
  const heroCategoryShort = opt("heroCategoryShort", heroCategory);
  const heroDescription = t(k("heroDescription"));
  const heroDescriptionShort = opt("heroDescriptionShort", heroDescription);
  const primaryCta = opt("primaryCta", t("v2.studentLife.applyLabel"));
  // Mobile shows two facts: the ones listed in the activity config, or by
  // default the first and the last.
  const mobileFactIndexes = activity.mobileFacts ?? (Array.isArray(facts) ? [0, facts.length - 1] : []);
  const mobileFacts = Array.isArray(facts) ? mobileFactIndexes.map((i) => facts[i]).filter(Boolean) : [];
  const whatWeDoTitle = `${t(k("whatWeDoTitleLine1"))} ${t(k("whatWeDoTitleLine2"))}`;
  const whatWeDoTitleShort = opt("whatWeDoTitleShort", whatWeDoTitle);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-v2-navy">
        {/* Mobile: photo on top fading into navy */}
        <div className="relative aspect-[390/260] max-h-[520px] w-full lg:hidden">
          <div className="absolute inset-0 bg-cover bg-[50%_40%]" style={{ backgroundImage: `url(${activity.image})` }} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0C18301A_0%,#0C183000_40%,#0C183099_72%,#0C1830_100%)]" />
        </div>

        <div className="relative mx-auto flex max-w-[1440px] flex-col lg:h-[560px] lg:flex-row">
          {/* Desktop ridge under the copy */}
          <svg
            width="720"
            height="90"
            viewBox="0 0 720 90"
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 hidden lg:block"
          >
            <path d="M0 90L0 70 90 48 150 62 240 22 310 55 400 30 480 60 560 38 640 64 720 50V90Z" fill="#142541" />
            <path d="M240 22l-16 17 10-4 6 6 8-9zM400 30l-14 15 9-4 5 5 7-8z" fill="#FFFFFF59" />
          </svg>

          <div className="relative flex flex-col justify-center gap-3.5 px-5 pt-2 pb-8 lg:w-[680px] lg:shrink-0 lg:gap-[22px] lg:px-6 lg:py-0 lg:pl-v2-gutter">
            <div className="font-v2-heading text-[9px] font-semibold leading-3 tracking-[0.22em] text-[#8FA3CC] lg:text-[11px] lg:leading-[14px] lg:tracking-[0.24em]">
              <span className="lg:hidden">
                {t("v2.studentLife.breadcrumbShort")} / {t("v2.studentLife.extracurricularBreadcrumb")}
              </span>
              <span className="hidden lg:inline">
                {t("v2.studentLife.breadcrumb")} / {t("v2.studentLife.extracurricularBreadcrumb")} / {navLabel.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-2.5 lg:gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-v2-crimson text-white lg:h-14 lg:w-14">
                <Icon width={undefined} height={undefined} className="h-[18px] w-[18px] lg:h-[26px] lg:w-[26px]" />
              </div>
              <div className="font-v2-heading text-[9px] font-semibold leading-3 tracking-[0.22em] text-[#E6A3B4] lg:text-[11px] lg:leading-[14px]">
                <span className="lg:hidden">{heroCategoryShort}</span>
                <span className="hidden lg:inline">{heroCategory}</span>
              </div>
            </div>
            <div className="flex flex-col font-v2-heading">
              <div className="text-[36px] font-extrabold leading-10 tracking-[-0.035em] text-v2-paper lg:text-[48px] lg:leading-[54px]">
                {t(k("heroTitleLine1"))}
              </div>
              <div className="text-[36px] font-extrabold leading-10 tracking-[-0.035em] text-v2-step-4 lg:w-[540px] lg:text-[48px] lg:leading-[54px]">
                {t(k("heroTitleLine2"))}
              </div>
            </div>
            <p className="font-v2-body text-[14px] leading-[22px] text-[#D6DCE8] lg:w-[520px] lg:text-[17px] lg:leading-[27px] lg:text-[#C4CCDD]">
              <span className="lg:hidden">{heroDescriptionShort}</span>
              <span className="hidden lg:inline">{heroDescription}</span>
            </p>
            <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap">
              <Link
                to="/admissions"
                className="flex items-center justify-center gap-2.5 rounded-v2-sm bg-v2-crimson p-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:px-[26px] lg:py-4"
              >
                {primaryCta}
                <ArrowIcon />
              </Link>
              <a
                href="#how-we-work"
                className="hidden items-center rounded-v2-sm border-[1.5px] border-white/70 px-[26px] py-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:flex"
              >
                {t(k("secondaryCta"))}
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block lg:flex-1">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${activity.image})` }} />
            <div className="absolute inset-y-0 left-0 w-[300px] bg-gradient-to-r from-v2-navy to-transparent" />
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="border-b border-v2-hairline">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 py-3 lg:hidden">
          {Array.isArray(mobileFacts) &&
            mobileFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-[3px] py-3">
                <div className="font-v2-heading text-[9px] font-semibold leading-3 tracking-[0.22em] text-v2-slate">{fact.label}</div>
                <div className="font-v2-heading text-[16px] font-extrabold leading-5 text-v2-navy">{fact.value}</div>
              </div>
            ))}
        </div>
        <div className="mx-auto hidden max-w-[1440px] items-center px-v2-gutter py-8 lg:flex">
          {facts.map((fact, i) => (
            <div key={fact.label} className={`flex flex-col gap-1 lg:w-[330px] lg:shrink-0 ${i > 0 ? "border-l border-v2-hairline pl-8" : ""}`}>
              <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.22em] text-v2-slate">{fact.label}</div>
              <div className="font-v2-heading text-[20px] font-extrabold leading-6 text-v2-navy">{fact.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section id="how-we-work" className="mx-auto flex max-w-[1440px] scroll-mt-[60px] flex-col gap-3 px-5 py-10 lg:scroll-mt-20 lg:gap-11 lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-3 pb-1.5 lg:gap-3.5 lg:pb-0">
          <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate lg:text-[11px] lg:leading-[14px]">
            {t(k("whatWeDoEyebrow"))}
          </div>
          <div className="font-v2-heading text-[26px] font-extrabold leading-8 tracking-[-0.03em] text-v2-navy lg:hidden">
            {whatWeDoTitleShort}
          </div>
          <div className="hidden flex-wrap gap-3 font-v2-heading lg:flex">
            <span className="text-[40px] font-extrabold leading-[48px] tracking-[-0.03em] text-v2-navy">
              {t(k("whatWeDoTitleLine1"))}
            </span>
            <span className="text-[40px] font-extrabold leading-[48px] tracking-[-0.03em] text-v2-sky">
              {t(k("whatWeDoTitleLine2"))}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
          {whatWeDo.map((item, i) => {
            const last = i === whatWeDo.length - 1;
            return (
              <div
                key={item.title}
                className={`flex gap-3.5 rounded-[6px] p-[18px] lg:flex-1 lg:flex-col lg:gap-4 lg:px-7 lg:py-8 ${last ? "bg-v2-navy" : "bg-v2-mist"}`}
              >
                <div className={`font-v2-heading text-[22px] font-extrabold leading-7 lg:text-[40px] lg:leading-[48px] lg:tracking-[-0.04em] ${last ? "text-v2-crimson" : stepNumberColors[i] ?? "text-v2-navy-2"}`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-col gap-[3px] lg:gap-4">
                  <div className={`font-v2-heading text-[16px] font-extrabold leading-5 lg:text-[22px] lg:leading-7 ${last ? "text-v2-paper" : "text-v2-navy"}`}>
                    {item.title}
                  </div>
                  <div className={`font-v2-body text-v2-label leading-[19px] lg:text-[15px] lg:leading-6 ${last ? "text-[#C4CCDD]" : "text-v2-slate"}`}>
                    <span className="lg:hidden">{item.descriptionShort ?? item.description}</span>
                    <span className="hidden lg:inline">{item.description}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Events */}
      <section className="bg-v2-mist">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-10 lg:flex-row lg:gap-v2-gutter lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-[18px] lg:w-[380px] lg:shrink-0">
            <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate lg:text-[11px] lg:leading-[14px]">
              {t(k("eventsEyebrow"))}
            </div>
            <div className="hidden flex-col font-v2-heading lg:flex">
              <div className="text-[38px] font-extrabold leading-[44px] tracking-[-0.03em] text-v2-navy">{t(k("eventsTitleLine1"))}</div>
              <div className="text-[38px] font-extrabold leading-[44px] tracking-[-0.03em] text-v2-sky">{t(k("eventsTitleLine2"))}</div>
            </div>
            <p className="hidden font-v2-body text-[15px] leading-6 text-v2-slate lg:block">{t(k("eventsDescription"))}</p>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            {events.map((event, i) => {
              const box = eventBoxes[i % eventBoxes.length];
              const last = i === events.length - 1;
              return (
                <div key={event.title} className="flex items-center gap-3.5 rounded-[6px] bg-v2-paper p-3.5 lg:gap-6 lg:px-6 lg:py-5">
                  <div className={`flex h-[52px] w-[52px] shrink-0 flex-col items-center justify-center rounded-[6px] lg:h-16 lg:w-16 ${box.box}`}>
                    <div className="font-v2-heading text-v2-body font-extrabold leading-[22px] text-v2-paper lg:text-[22px] lg:leading-7">{event.day}</div>
                    <div className={`font-v2-heading text-[8px] font-semibold leading-[10px] tracking-[0.16em] lg:text-[9px] lg:leading-3 lg:tracking-[0.18em] ${box.month}`}>
                      {event.month}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[3px] lg:gap-1">
                    <div className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-navy lg:text-[17px] lg:leading-[22px]">
                      <span className="lg:hidden">{event.titleShort ?? event.title}</span>
                      <span className="hidden lg:inline">{event.title}</span>
                    </div>
                    <div className="font-v2-body text-[12px] leading-4 text-v2-slate lg:text-v2-label">
                      <span className="lg:hidden">{event.metaShort ?? event.meta}</span>
                      <span className="hidden lg:inline">{event.meta}</span>
                    </div>
                  </div>
                  <div className={`hidden shrink-0 rounded-v2-sm px-3 py-2 lg:block ${last ? "bg-[#FBEAEE]" : "bg-v2-mist"}`}>
                    <div className={`font-v2-heading text-[12px] font-bold leading-4 ${last ? "text-v2-crimson" : "text-v2-navy"}`}>{event.tag}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join — desktop only (not in the mobile artboards) */}
      <section id="join" className="mx-auto hidden max-w-[1440px] flex-col gap-11 px-v2-gutter py-24 lg:flex">
        <div className="flex flex-col gap-3.5">
          <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
            {t(k("joinEyebrow"))}
          </div>
          <div className="flex flex-wrap gap-3 font-v2-heading">
            <span className="text-[40px] font-extrabold leading-[48px] tracking-[-0.03em] text-v2-navy">{t(k("joinTitleLine1"))}</span>
            <span className="text-[40px] font-extrabold leading-[48px] tracking-[-0.03em] text-v2-sky">{t(k("joinTitleLine2"))}</span>
          </div>
        </div>
        <div className="relative flex flex-row">
          <div className="absolute left-8 top-8 h-0.5 w-[880px] max-w-[calc(100%-64px)] bg-gradient-to-r from-v2-navy-2 to-v2-step-4" />
          {joinSteps.map((step, i) => (
            <div key={step.title} className="relative flex flex-1 flex-col gap-3.5">
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[5px] border-v2-paper font-v2-heading text-v2-body font-extrabold leading-[22px] text-v2-paper ${stepDots[i]}`}>
                {i + 1}
              </div>
              <div className="font-v2-heading text-v2-body font-bold leading-[22px] text-v2-navy">{step.title}</div>
              <div className="max-w-[340px] font-v2-body text-[14px] leading-[22px] text-v2-slate">{step.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Other extracurricular life */}
      <section className="mx-auto flex max-w-[1440px] flex-col gap-2.5 px-5 py-10 lg:gap-7 lg:px-v2-gutter lg:pt-0 lg:pb-[104px]">
        <div className="flex items-center justify-between pb-1.5 lg:border-t lg:border-v2-hairline lg:pt-10 lg:pb-0">
          <div className="font-v2-heading text-[20px] font-extrabold leading-6 text-v2-navy lg:text-[24px] lg:leading-[30px]">
            {t("v2.studentLife.otherExtracurricular", {
              defaultValue: `${t("v2.studentLifeIndex.extracurricularTitleLine1")} ${t("v2.studentLifeIndex.extracurricularTitleLine2")}`,
            })}
          </div>
          <Link to="/student-life" className="hidden font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson lg:block">
            {t("v2.studentLife.allStudentLife", { defaultValue: t("v2.studentLife.breadcrumb") })} →
          </Link>
        </div>
        <div className="flex flex-col gap-2.5 lg:flex-row lg:gap-5">
          {others.map((other) => {
            const OtherIcon = other.icon;
            return (
              <Link
                key={other.slug}
                to={`/student-life/${other.slug}`}
                className="flex items-center justify-between gap-4 rounded-[6px] border border-v2-hairline p-4 lg:flex-1 lg:justify-start lg:p-[22px]"
              >
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-[6px] bg-[#FBEAEE] text-v2-crimson lg:flex">
                  <OtherIcon />
                </div>
                <div className="flex flex-1 flex-col gap-[3px]">
                  <div className="font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy lg:text-[17px] lg:font-extrabold lg:leading-[22px]">
                    {t(`v2.studentLife.activities.${other.i18nKey}.navLabel`)}
                  </div>
                  <div className="hidden font-v2-body text-v2-label leading-4 text-v2-slate lg:block">
                    {t(`v2.studentLife.activities.${other.i18nKey}.navDescription`)}
                  </div>
                </div>
                <div className="font-v2-heading text-[16px] font-bold leading-5 text-v2-crimson">→</div>
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

export default ExtracurricularActivityTemplate;
