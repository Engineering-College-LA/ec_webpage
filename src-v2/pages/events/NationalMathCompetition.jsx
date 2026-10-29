import { useTranslation } from "react-i18next";
import {
  Brain,
  Target,
  Sparkles,
  ShieldCheck,
  Laptop,
  Smartphone,
  Headphones,
  Bot,
  Users,
} from "lucide-react";
import Eyebrow from "../../components/ui/Eyebrow";

const REGISTRATION_URL = "https://admission.college.edu.kg/";

const ArrowIcon = ({ color = "#FFFFFF" }) => (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const whyIcons = [Brain, Target, Sparkles, ShieldCheck];
const prizeIcons = [Laptop, Smartphone, Headphones];
const podiumAccents = ["border-t-main", "border-t-v2-slate", "border-t-[#B4722E]"];

// Bespoke page for the National Mathematics Competition — Paper has no
// artboard for it, so it reuses patterns from the Affiliations / Academics
// pages (navy ridge hero, accent-bar cards, navy→sky gradient CTA).
function NationalMathCompetition() {
  const { t } = useTranslation();
  const m = (key, opts) => t(`mathOlympiad.${key}`, opts);
  const arr = (key) => m(key, { returnObjects: true });

  const introParagraphs = arr("intro.paragraphs");
  const whyItems = arr("why.items");
  const prizePlaces = arr("prizes.places");
  const teacherRewards = arr("teachers.rewards");
  const rounds = arr("process.rounds");
  const eligibilityParagraphs = arr("eligibility.paragraphs");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-v2-navy">
        <svg
          viewBox="0 0 1440 120"
          aria-hidden="true"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 h-[60px] w-full lg:h-[120px]"
        >
          <path d="M0 120V88L120 70 220 84 330 40 420 72 540 30 640 66 760 22 880 70 990 46 1110 78 1220 50 1330 74 1440 58V120Z" fill="#1C3154" />
          <path d="M330 40l-16 15 10-3 6 6 8-8zM760 22l-18 17 11-4 7 7 9-10z" fill="#FFFFFF59" />
          <path d="M0 120V104L160 94 320 104 480 90 640 102 800 88 960 100 1120 90 1280 102 1440 94V120Z" fill="#142541" />
        </svg>
        <div className="relative mx-auto flex max-w-[1440px] flex-col gap-3.5 px-5 pt-9 pb-v2-gutter lg:gap-[22px] lg:px-v2-gutter lg:pt-24 lg:pb-[150px]">
          <Eyebrow className="text-[10px] leading-3 text-[#8FA3CC] lg:text-[11px] lg:leading-[14px]">
            {m("hero.eyebrow")}
          </Eyebrow>
          <h1 className="flex flex-col font-v2-heading text-[32px] font-extrabold leading-[37px] tracking-[-0.035em] lg:text-[56px] lg:leading-[62px]">
            <span className="text-v2-paper">{m("hero.titleLine1")}</span>
            <span className="text-v2-step-4">{m("hero.titleLine2")}</span>
          </h1>
          <p className="font-v2-heading text-[15px] font-semibold leading-5 text-main lg:text-[20px] lg:leading-7">
            {m("hero.subtitle")}
          </p>
          <p className="font-v2-body text-[14px] leading-[22px] text-[#C4CCDD] lg:max-w-[620px] lg:text-[17px] lg:leading-[27px]">
            {m("hero.description")}
          </p>
          <div className="flex flex-col gap-2.5 pt-2 lg:flex-row lg:gap-3">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-v2-sm bg-v2-crimson p-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:px-7"
            >
              {m("hero.primaryCta")}
              <ArrowIcon />
            </a>
            <a
              href="#process"
              className="flex items-center justify-center rounded-v2-sm border-[1.5px] border-white/70 p-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:px-7"
            >
              {m("hero.secondaryCta")}
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-v2-paper">
        <div className="mx-auto flex max-w-[860px] flex-col gap-4 px-5 py-12 lg:gap-5 lg:px-v2-gutter lg:py-24">
          {introParagraphs.map((p, i) => (
            <p key={i} className="font-v2-body text-[15px] leading-[24px] text-v2-slate lg:text-[17px] lg:leading-[28px]">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Why participate */}
      <section className="bg-v2-mist">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-12 lg:gap-11 lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-3.5">
            <Eyebrow className="text-[10px] leading-3 lg:text-[11px] lg:leading-[14px]">{m("why.eyebrow")}</Eyebrow>
            <h2 className="flex flex-col font-v2-heading text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] lg:flex-row lg:gap-3 lg:text-[40px] lg:leading-[48px]">
              <span className="text-v2-navy">{m("why.titleLine1")}</span>
              <span className="text-v2-sky">{m("why.titleLine2")}</span>
            </h2>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {whyItems.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <div key={item.title} className="flex flex-col gap-3 rounded-[6px] bg-v2-paper p-4 lg:gap-4 lg:p-8">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] bg-v2-navy-2 text-white">
                    <Icon width={20} height={20} />
                  </div>
                  <div className="font-v2-heading text-[16px] font-extrabold leading-5 text-v2-navy lg:text-[20px] lg:leading-6">
                    {item.title}
                  </div>
                  <p className="font-v2-body text-v2-label leading-5 text-v2-slate lg:text-[15px] lg:leading-6">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section id="prizes" className="scroll-mt-[60px] bg-v2-paper lg:scroll-mt-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-12 lg:gap-11 lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-3.5">
            <Eyebrow className="text-[10px] leading-3 lg:text-[11px] lg:leading-[14px]">{m("prizes.eyebrow")}</Eyebrow>
            <h2 className="flex flex-col font-v2-heading text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] lg:flex-row lg:gap-3 lg:text-[40px] lg:leading-[48px]">
              <span className="text-v2-navy">{m("prizes.titleLine1")}</span>
              <span className="text-v2-crimson">{m("prizes.titleLine2")}</span>
            </h2>
            <p className="font-v2-body text-[14px] leading-[22px] text-v2-slate lg:max-w-[640px] lg:text-[16px] lg:leading-[26px]">
              {m("prizes.intro")}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:gap-5">
            {prizePlaces.map((p, i) => {
              const Icon = prizeIcons[i];
              return (
                <div
                  key={p.place}
                  className={`flex flex-col items-center gap-3 rounded-[6px] border-t-4 bg-v2-mist p-6 text-center lg:gap-4 lg:p-10 ${podiumAccents[i]}`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-v2-navy text-white">
                    <Icon width={26} height={26} />
                  </div>
                  <div className="font-v2-heading text-[11px] font-semibold uppercase leading-[14px] tracking-[0.22em] text-v2-slate">
                    {p.place}
                  </div>
                  <div className="font-v2-heading text-[22px] font-extrabold leading-7 text-v2-navy">{p.prize}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="bg-v2-mist">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-12 lg:gap-11 lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-3.5">
            <Eyebrow className="text-[10px] leading-3 lg:text-[11px] lg:leading-[14px]">{m("teachers.eyebrow")}</Eyebrow>
            <h2 className="flex flex-col font-v2-heading text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] lg:flex-row lg:gap-3 lg:text-[40px] lg:leading-[48px]">
              <span className="text-v2-navy">{m("teachers.titleLine1")}</span>
              <span className="text-v2-sky">{m("teachers.titleLine2")}</span>
            </h2>
            <p className="font-v2-body text-[14px] leading-[22px] text-v2-slate lg:max-w-[640px] lg:text-[16px] lg:leading-[26px]">
              {m("teachers.intro")}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:gap-5">
            {teacherRewards.map((r, i) => (
              <div key={r.place} className={`flex flex-col gap-1.5 rounded-[6px] border-l-4 bg-v2-paper p-4 lg:gap-2 lg:p-8 ${podiumAccents[i].replace("border-t-", "border-l-")}`}>
                <div className="font-v2-heading text-[11px] font-semibold uppercase leading-[14px] tracking-[0.22em] text-v2-slate">
                  {r.place}
                </div>
                <div className="font-v2-heading text-[20px] font-extrabold leading-6 text-v2-navy lg:text-[26px] lg:leading-8">
                  {r.amount}
                </div>
              </div>
            ))}
          </div>

          {/* AI lesson banner */}
          <div className="flex flex-col gap-3 rounded-[10px] bg-v2-navy p-6 lg:flex-row lg:items-center lg:gap-6 lg:p-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[6px] bg-v2-sky/20 text-v2-sky lg:h-14 lg:w-14">
              <Bot width={26} height={26} />
            </div>
            <div className="flex flex-col gap-1.5 lg:gap-2">
              <div className="font-v2-heading text-[17px] font-extrabold leading-[22px] text-v2-paper lg:text-[22px] lg:leading-7">
                {m("teachers.aiLesson.title")}
              </div>
              <p className="font-v2-body text-[13px] leading-5 text-[#C4CCDD] lg:text-[15px] lg:leading-6">
                {m("teachers.aiLesson.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-[60px] bg-v2-navy lg:scroll-mt-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-10 lg:gap-12 lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-5 lg:gap-3.5">
            <Eyebrow className="text-[10px] leading-3 text-[#8FA3CC] lg:text-[11px] lg:leading-[14px]">
              {m("process.eyebrow")}
            </Eyebrow>
            <div className="flex flex-col font-v2-heading lg:flex-row lg:gap-3">
              <span className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-paper lg:text-[40px] lg:leading-[48px]">
                {m("process.titleLine1")}
              </span>
              <span className="text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] text-v2-step-4 lg:text-[40px] lg:leading-[48px]">
                {m("process.titleLine2")}
              </span>
            </div>
          </div>

          <div className="relative flex flex-col gap-5 lg:flex-row lg:gap-0">
            <div className="absolute left-[21px] top-[22px] bottom-[22px] w-0.5 bg-gradient-to-b from-v2-step-2 to-v2-crimson lg:left-9 lg:right-9 lg:top-9 lg:bottom-auto lg:h-0.5 lg:w-auto lg:bg-gradient-to-r" />
            {rounds.map((round, i) => (
              <div key={round.label} className="relative flex gap-4 lg:flex-1 lg:flex-col lg:gap-3.5 lg:pr-8 last:lg:pr-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-v2-navy bg-v2-step-2 font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper lg:h-[72px] lg:w-[72px] lg:border-[5px] lg:text-[20px] lg:font-extrabold lg:leading-6">
                  {i + 1}
                </div>
                <div className="flex flex-col gap-[3px] pt-[3px] lg:gap-3.5 lg:pt-0">
                  <div className="font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:text-v2-body lg:leading-[22px]">
                    {round.label}
                  </div>
                  <div className="font-v2-heading text-[12px] font-semibold uppercase tracking-[0.16em] text-v2-step-4">
                    {round.date}
                  </div>
                  <div className="font-v2-body text-v2-label leading-4 text-[#C4CCDD] lg:text-[14px] lg:leading-[22px]">
                    {round.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-v2-paper">
        <div className="mx-auto flex max-w-[860px] flex-col gap-4 px-5 py-12 lg:gap-5 lg:px-v2-gutter lg:py-24">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[6px] bg-v2-navy-2 text-white">
              <Users width={20} height={20} />
            </div>
            <h2 className="font-v2-heading text-[22px] font-extrabold leading-7 text-v2-navy lg:text-[28px] lg:leading-9">
              {m("eligibility.title")}
            </h2>
          </div>
          {eligibilityParagraphs.map((p, i) => (
            <p key={i} className="font-v2-body text-[15px] leading-[24px] text-v2-slate lg:text-[17px] lg:leading-[28px]">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Register CTA */}
      <section
        id="register"
        className="scroll-mt-[60px] lg:scroll-mt-20"
        style={{ backgroundImage: "linear-gradient(150deg, var(--v2-color-navy-2) 0%, var(--v2-color-sky) 100%)" }}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3.5 px-5 py-14 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-3.5 lg:max-w-[640px] lg:gap-4">
            <Eyebrow className="text-[10px] leading-3 text-[#CFE0FF] lg:text-[11px] lg:leading-[14px]">
              {m("cta.eyebrow")}
            </Eyebrow>
            <h2 className="flex flex-col font-v2-heading text-[30px] font-extrabold leading-[34px] tracking-[-0.03em] lg:text-[48px] lg:leading-[54px]">
              <span className="text-v2-paper">{m("cta.title")}</span>
            </h2>
            <p className="font-v2-body text-[14px] leading-[22px] text-[#E4ECFA] lg:text-[16px] lg:leading-[26px]">
              {m("cta.description")}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 pt-2 lg:shrink-0 lg:items-end lg:gap-3 lg:pt-0">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-v2-sm bg-v2-crimson p-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:px-7"
            >
              {m("cta.button")}
              <ArrowIcon />
            </a>
            <p className="font-v2-body text-[12px] leading-4 text-[#CFE0FF] lg:text-right">{m("cta.note")}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default NationalMathCompetition;
