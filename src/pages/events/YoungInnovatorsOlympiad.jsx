import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Lightbulb,
  BookOpen,
  Calendar,
  Award,
  AlertTriangle,
  ArrowUpRight,
  Send,
  ClipboardList,
  Filter,
  GraduationCap,
  Presentation,
  Medal,
} from "lucide-react";
import ContactTelegram from "../../components/contact/ContactTelegram";
import { Boxes } from "../../components/ui/background-boxes";

const FORM_URL = "https://forms.office.com/r/eEqA9bL6Dv";
// Bishkek time (UTC+6)
const DEADLINE = new Date("2026-07-16T23:45:00+06:00");

/* ---------- animation helpers ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: i * 0.08 },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const Reveal = ({ children, className }) => (
  <motion.section
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    className={`pt-10 ${className || ""}`}
  >
    {children}
  </motion.section>
);

const SubHeading = ({ children }) => (
  <h3 className="page-subtitle">{children}</h3>
);

const Bullets = ({ items }) => (
  <ul className="list-disc space-y-1 pl-5 marker:text-n-blue">
    {items.map((it, i) => (
      <li key={i}>{it}</li>
    ))}
  </ul>
);

/* ---------- podium prizes ---------- */
const PODIUM_SLOTS = [
  {
    idx: 1,
    label: "2",
    podiumH: "h-24 sm:h-28",
    podiumBg: "bg-gradient-to-t from-slate-400 to-slate-300",
    ring: "ring-slate-300",
    badgeBg: "bg-slate-200 text-slate-600",
    icon: "silver",
    delay: 0.2,
  },
  {
    idx: 0,
    label: "1",
    podiumH: "h-36 sm:h-44",
    podiumBg: "bg-gradient-to-t from-amber-500 to-amber-300",
    ring: "ring-amber-300",
    badgeBg: "bg-amber-50 text-amber-600",
    icon: "gold",
    delay: 0,
  },
  {
    idx: 2,
    label: "3",
    podiumH: "h-14 sm:h-18",
    podiumBg: "bg-gradient-to-t from-orange-700 to-amber-600",
    ring: "ring-orange-400",
    badgeBg: "bg-orange-50 text-orange-700",
    icon: "bronze",
    delay: 0.35,
  },
];

const ICON_COLOR = {
  gold: "text-amber-400",
  silver: "text-slate-400",
  bronze: "text-orange-600",
};

const PodiumPrizes = ({ places }) => (
  <div className="mt-8 flex items-end justify-center gap-3 sm:gap-4">
    {PODIUM_SLOTS.map(({ idx, label, podiumH, podiumBg, ring, badgeBg, icon, delay }) => (
      <div key={idx} className="flex w-[30%] max-w-[180px] flex-col items-center">
        {/* Winner card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: delay + 0.45 }}
          whileHover={{ y: -4, scale: 1.03 }}
          className={`mb-2 w-full rounded-2xl border bg-white p-3 text-center shadow-custom2 ring-2 ${ring}`}
        >
          <Medal className={`mx-auto mb-1.5 h-7 w-7 ${ICON_COLOR[icon]}`} />
          <div
            className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full text-base font-black ${badgeBg}`}
          >
            {label}
          </div>
          <p className="text-xs font-semibold leading-snug text-slate-700">
            {places[idx]}
          </p>
        </motion.div>

        {/* Pedestal column */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1], delay }}
          style={{ transformOrigin: "bottom" }}
          className={`w-full rounded-t-xl ${podiumH} ${podiumBg}`}
        />
      </div>
    ))}
  </div>
);

/* ---------- horizontal process roadmap ---------- */
const STEP_CONFIG = [
  {
    iconComp: Lightbulb,
    gradient: "from-teal-400 to-teal-600",
    nodeActive: "bg-teal-500 border-teal-500",
    dotColor: "bg-teal-500",
    watermarkClass: "text-teal-100",
  },
  {
    iconComp: BookOpen,
    gradient: "from-rose-400 to-rose-600",
    nodeActive: "bg-rose-500 border-rose-500",
    dotColor: "bg-rose-500",
    watermarkClass: "text-rose-100",
  },
  {
    iconComp: ClipboardList,
    gradient: "from-n-blue to-n-blue-hard",
    nodeActive: "bg-n-blue border-n-blue",
    dotColor: "bg-n-blue",
    watermarkClass: "text-blue-100",
  },
  {
    iconComp: Filter,
    gradient: "from-emerald-400 to-emerald-600",
    nodeActive: "bg-emerald-500 border-emerald-500",
    dotColor: "bg-emerald-500",
    watermarkClass: "text-emerald-100",
  },
  {
    iconComp: Presentation,
    gradient: "from-amber-400 to-orange-500",
    nodeActive: "bg-amber-500 border-amber-500",
    dotColor: "bg-amber-500",
    watermarkClass: "text-amber-100",
  },
];

const HorizontalProcess = ({ ol, arr }) => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const fields = arr("process.steps.registration.fields");
  const format = arr("process.steps.finalPitch.format");

  const { scrollYProgress } = useScroll({ target: containerRef });

  // Vertical scroll 0→1 maps to horizontal translate 0→-400vw (5 steps)
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0vw", "-400vw"]);
  const progressFill = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const norm = (v - 0.05) / 0.9;
    setActiveStep(Math.max(0, Math.min(4, Math.floor(norm * 5))));
  });

  const directions = arr("theme.directions");
  const structure = arr("prepare.structure");
  const prototypeList = arr("prepare.prototypeList");

  const themeQuestions = arr("theme.questions");

  const stepContents = [
    <>
      <p className="text-lg font-semibold text-teal-700">{ol("theme.name")}</p>
      <p>{ol("theme.intro")}</p>
      <p className="text-slate-600">{ol("theme.findText")}</p>
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
          {ol("theme.inspirationLabel")}
        </p>
        <div className="flex flex-wrap gap-2">
          {directions.map((d, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700 shadow-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
              {d}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-start gap-2 rounded-xl bg-teal-50 px-4 py-3">
        <span className="mt-0.5 shrink-0 text-base leading-none text-teal-400">✦</span>
        <p className="text-sm text-teal-800">{ol("theme.note")}</p>
      </div>
      <div className="relative rounded-xl bg-slate-50 px-6 py-4">
        <span className="absolute left-3 top-0 select-none text-5xl font-black leading-none text-teal-200">"</span>
        <div className="space-y-1.5 pl-3">
          {themeQuestions.map((q, qi) => (
            <p key={qi} className="text-sm italic text-slate-600">{q}</p>
          ))}
        </div>
      </div>
    </>,
    <>
      <p>{ol("prepare.text")}</p>
      <ol className="list-decimal space-y-1 pl-5 marker:font-semibold marker:text-rose-500">
        {structure.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
      <p className="pt-1 font-medium text-slate-700">{ol("prepare.prototypeText")}</p>
      <div className="flex flex-wrap gap-2">
        {prototypeList.map((p, i) => (
          <span
            key={i}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
          >
            {p}
          </span>
        ))}
      </div>
    </>,
    <>
      <p>{ol("process.steps.registration.text")}</p>
      <Bullets items={fields} />
    </>,
    <>
      {arr("process.steps.selection.text").map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>,
    <>
      <div className="inline-flex items-center gap-2 rounded-lg bg-main/15 px-3 py-2 font-semibold text-n-blue-hard">
        <Calendar className="h-5 w-5" />
        {ol("process.steps.finalPitch.text")}
      </div>
      <p>{ol("process.steps.finalPitch.formatIntro")}</p>
      <div className="flex flex-wrap gap-2">
        {format.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
          >
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            {f}
          </div>
        ))}
      </div>
    </>,
  ];

  const stepTitles = [
    ol("theme.title"),
    ol("prepare.title"),
    ol("process.steps.registration.title"),
    ol("process.steps.selection.title"),
    ol("process.steps.finalPitch.title"),
  ];

  return (
    /* Outer tall wrapper — gives scroll distance for horizontal travel */
    <div ref={containerRef} style={{ height: "600vh" }} className="relative">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-slate-50">
        {/* Section heading */}
        <div className="relative z-10 px-4 pt-6 text-center sm:pt-8">
          <h3 className="page-subtitle">{ol("process.title")}</h3>
          <p className="mt-1 text-sm text-slate-400">
            {activeStep + 1} / {STEP_CONFIG.length}
          </p>
        </div>

        {/* Horizontally sliding track */}
        <div className="flex h-[calc(100vh-160px)] items-center">
          <motion.div
            style={{ x }}
            className="flex will-change-transform"
          >
            {STEP_CONFIG.map((cfg, i) => {
              const Icon = cfg.iconComp;
              return (
                <div
                  key={i}
                  className="flex w-screen flex-shrink-0 items-center justify-center px-4 sm:px-12 md:px-24"
                >
                  <div className="relative flex h-[calc(100vh-200px)] max-h-[680px] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-custom2">
                    {/* Watermark number */}
                    <span
                      className={`pointer-events-none absolute right-4 top-0 select-none text-[110px] font-black leading-none ${cfg.watermarkClass}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Header */}
                    <div className="relative shrink-0 flex items-center gap-3 p-6 pb-0 sm:p-8 sm:pb-0">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cfg.gradient} text-white shadow-md`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                          {ol("process.stepLabel")} {String(i + 1).padStart(2, "0")}
                        </span>
                        <h4 className="text-xl font-bold text-slate-800">
                          {stepTitles[i]}
                        </h4>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="relative mt-4 flex-1 space-y-3 overflow-y-auto px-5 pb-6 text-slate-700 sm:px-8 sm:pb-8">
                      {stepContents[i]}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Road progress bar */}
        <div className="absolute bottom-6 left-0 right-0 px-8 sm:px-16">
          <div className="relative mx-auto flex max-w-lg items-center justify-between">
            {/* background track */}
            <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-slate-200" />
            {/* animated fill */}
            <motion.div
              style={{ width: progressFill }}
              className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-n-blue via-violet-500 to-amber-500"
            />
            {/* step nodes */}
            {STEP_CONFIG.map((cfg, i) => (
              <div
                key={i}
                className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                  i <= activeStep
                    ? `${cfg.nodeActive} text-white shadow-md`
                    : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {i < activeStep ? (
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
            ))}
          </div>
          {/* active step label */}
          <p className="mt-2 text-center text-xs font-semibold text-slate-500">
            {stepTitles[activeStep]}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ---------- countdown ---------- */
const useCountdown = (target) => {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { expired: true, d: 0, h: 0, m: 0, s: 0 };
    return {
      expired: false,
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff / 3600000) % 24),
      m: Math.floor((diff / 60000) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return time;
};

const CountdownUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white/10 sm:h-20 sm:w-20">
      <motion.span
        key={value}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-bold tabular-nums text-white sm:text-3xl"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
    </div>
    <span className="mt-2 text-xs uppercase tracking-wide text-n-bluish-50">
      {label}
    </span>
  </div>
);

const RegisterBlock = ({ t }) => {
  const { expired, d, h, m, s } = useCountdown(DEADLINE);
  const u = (k) => t(`olympiad.cta.units.${k}`);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-10 text-white"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-n-bluish-50">
        {t("olympiad.cta.deadlineLabel")}
      </p>
      <p className="mt-1 text-lg font-bold">{t("olympiad.cta.deadlineDate")}</p>

      {/* Countdown */}
      <div className="mt-5 flex gap-3 sm:gap-4">
        <CountdownUnit value={d} label={u("days")} />
        <CountdownUnit value={h} label={u("hours")} />
        <CountdownUnit value={m} label={u("minutes")} />
        <CountdownUnit value={s} label={u("seconds")} />
      </div>

      {/* Warning */}
      <div className="mt-6 flex items-start gap-3 rounded-xl border border-main/40 bg-main/10 p-4">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-main" />
        <p className="text-sm text-n-bluish-50">{t("olympiad.cta.warning")}</p>
      </div>

      {/* Action button */}
      {expired ? (
        <div className="mt-6 w-full rounded-full bg-white/10 py-4 text-center font-semibold text-n-bluish-50">
          {t("olympiad.cta.closed")}
        </div>
      ) : (
        <motion.a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="pointer-events-auto mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-main py-4 text-lg font-bold text-n-blue-hard shadow-lg transition-colors hover:bg-main-100"
        >
          <Send className="h-5 w-5" />
          {t("olympiad.cta.register")}
        </motion.a>
      )}
    </motion.div>
  );
};

/* ---------- page ---------- */
const YoungInnovatorsOlympiad = () => {
  const { t } = useTranslation();
  const ol = (key, opts) => t(`olympiad.${key}`, opts);
  const arr = (key) => { const v = ol(key, { returnObjects: true }); return Array.isArray(v) ? v : []; };

  const intro = arr("intro");
  const criteria = arr("criteria.list");
  const places = arr("prizes.places");
  const special = arr("prizes.special");
  const whyList = arr("why.list");

  return (
    <div className="page text-slate-900">
      {/* ---------- Hero ---------- */}
      <div className="relative overflow-hidden bg-slate-900 px-4 pb-16 pt-32 text-white">
        {/* Interactive animated boxes background */}
        <Boxes />

        {/* Radial mask fades boxes toward the edges */}
        <div className="pointer-events-none absolute inset-0 z-10 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

        {/* Bottom gradient to blend into the content below */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-slate-900 to-transparent" />

        {/* pointer-events-none lets hover reach the boxes; interactive
            children opt back in with pointer-events-auto */}
        <div className="pointer-events-none relative z-20 mx-auto max-w-[860px]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-n-bluish-50"
          >
            <Lightbulb className="h-4 w-4" /> Engineering College ×{" "}
            <a
              href="https://aprd.kg/?lang=ru"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto font-semibold text-white underline-offset-4 transition-colors hover:text-main hover:underline"
            >
              APRD
            </a>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-5 text-3xl font-bold sm:text-5xl"
          >
            {ol("title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-3 text-lg text-n-bluish-50 sm:text-xl"
          >
            {ol("subtitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base font-medium text-main"
          >
            {ol("slogan")}
          </motion.p>

          <RegisterBlock t={t} />
        </div>
      </div>

      {/* ---------- Content: intro / forWhom / theme ---------- */}
      <div className="mx-auto max-w-[860px] px-4 pb-8">
        <Reveal>
          <div className="space-y-3 text-base leading-relaxed text-slate-700">
            {intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <SubHeading>{ol("forWhom.title")}</SubHeading>
          <div className="mt-3 space-y-3 text-slate-700">
            {arr("forWhom.text").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

      </div>

      {/* ---------- Workshops ---------- */}
      <div className="bg-gradient-to-br from-violet-900 to-n-blue-hard px-4 py-16">
        <div className="mx-auto max-w-[860px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/30 text-violet-200">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                {ol("process.steps.workshops.title")}
              </h3>
            </div>
            <p className="mt-3 text-violet-200">
              {ol("process.steps.workshops.text")}
            </p>
          </motion.div>
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 grid gap-5 sm:grid-cols-3"
          >
            {arr("process.steps.workshops.items").map((w, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl border border-violet-500/30 bg-white/10 p-5 backdrop-blur-sm"
              >
                <p className="font-semibold text-white">{w.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-violet-200">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ---------- Process: full-width horizontal scroll section ---------- */}
      <HorizontalProcess ol={ol} arr={arr} />

      {/* ---------- Content: criteria / prizes / why / organizer ---------- */}
      <div className="mx-auto max-w-[860px] px-4 pb-16">
        <Reveal>
          <SubHeading>{ol("criteria.title")}</SubHeading>
          <div className="mt-3 space-y-3 text-slate-700">
            <p>{ol("criteria.intro")}</p>
            <Bullets items={criteria} />
            <p className="font-medium text-slate-800">{ol("criteria.note")}</p>
          </div>
        </Reveal>

        <Reveal>
          <SubHeading>{ol("prizes.title")}</SubHeading>
          <div className="mt-3 space-y-3 text-slate-700">
            <p>{ol("prizes.intro")}</p>
            <PodiumPrizes places={places} />
            <p className="pt-2 font-medium text-slate-800">
              {ol("prizes.specialTitle")}
            </p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {special.map((sp, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  className="inline-flex items-center gap-1.5 rounded-full bg-n-blue-light px-3 py-1 text-sm font-medium text-n-blue"
                >
                  <Award className="h-4 w-4" /> {sp}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </Reveal>

        <Reveal>
          <SubHeading>{ol("why.title")}</SubHeading>
          <div className="mt-3 space-y-3 text-slate-700">
            <p>{ol("why.intro")}</p>
            <Bullets items={whyList} />
            <p className="font-medium text-slate-800">{ol("why.note")}</p>
          </div>
        </Reveal>

        <Reveal>
          <SubHeading>{ol("organizer.title")}</SubHeading>
          <div className="mt-3 space-y-3 text-slate-700">
            {arr("organizer.text").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        {/* Final CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-n-blue-hard px-6 py-10 text-center text-white"
        >
          <p className="mx-auto max-w-xl text-xl font-semibold">
            {ol("slogan")}
          </p>
          <motion.a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-main px-6 py-3 font-semibold text-n-blue-hard transition-colors hover:bg-main-100"
          >
            {t("olympiad.cta.register")}
            <ArrowUpRight className="h-5 w-5" />
          </motion.a>
          <div className="mt-4">
            <Link
              to="/admissions#scholarships"
              className="text-sm text-n-bluish-50 underline-offset-4 hover:underline"
            >
              {t("admission.sections.scholarships")}
            </Link>
          </div>
        </motion.div>
      </div>

      <ContactTelegram />
    </div>
  );
};

export default YoungInnovatorsOlympiad;
