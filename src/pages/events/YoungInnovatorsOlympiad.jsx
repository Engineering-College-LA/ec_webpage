import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Trophy,
  Lightbulb,
  Calendar,
  Award,
  AlertTriangle,
  ArrowUpRight,
  Send,
  ClipboardList,
  Filter,
  GraduationCap,
  Presentation,
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

const Chips = ({ items, variant = "blue" }) => {
  const styles =
    variant === "blue"
      ? "bg-n-blue-light text-n-blue"
      : "bg-slate-100 text-slate-700";
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap gap-2"
    >
      {items.map((d, i) => (
        <motion.span
          key={i}
          variants={fadeUp}
          className={`rounded-full px-3 py-1 text-sm font-medium ${styles}`}
        >
          {d}
        </motion.span>
      ))}
    </motion.div>
  );
};

/* ---------- animated timeline step ---------- */
const TimelineStep = ({ icon: Icon, title, last, children }) => (
  <div className="relative pb-10 pl-16 last:pb-0 sm:pl-20">
    {/* connector line draws down on scroll */}
    {!last && (
      <motion.span
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className="absolute bottom-0 left-6 top-14 w-0.5 bg-gradient-to-b from-n-blue/50 to-n-blue/5 sm:left-7"
      />
    )}
    {/* icon node springs in */}
    <motion.div
      initial={{ scale: 0, rotate: -45 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 13 }}
      whileHover={{ scale: 1.1 }}
      className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-n-blue to-n-blue-hard text-white shadow-lg sm:h-14 sm:w-14"
    >
      <Icon className="h-6 w-6" />
    </motion.div>
    {/* content card */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-slate-100 bg-white p-5 shadow-custom2 transition-shadow hover:shadow-custom"
    >
      <h4 className="text-lg font-bold text-n-blue">{title}</h4>
      <div className="mt-2 space-y-3 text-slate-700">{children}</div>
    </motion.div>
  </div>
);

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
  const arr = (key) => ol(key, { returnObjects: true });

  const intro = arr("intro");
  const directions = arr("theme.directions");
  const fields = arr("process.steps.registration.fields");
  const workshops = arr("process.steps.workshops.items");
  const format = arr("process.steps.finalPitch.format");
  const structure = arr("prepare.structure");
  const prototypeList = arr("prepare.prototypeList");
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

      <div className="mx-auto max-w-[860px] px-4 pb-16">
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

        <Reveal>
          <SubHeading>{ol("theme.title")}</SubHeading>
          <div className="mt-3 space-y-3 text-slate-700">
            <p className="text-lg font-semibold text-n-blue">
              {ol("theme.name")}
            </p>
            <p>{ol("theme.intro")}</p>
            <Chips items={directions} />
            <p>{ol("theme.note")}</p>
          </div>
        </Reveal>

        <Reveal>
          <SubHeading>{ol("process.title")}</SubHeading>
          <div className="mt-6">
            <TimelineStep
              icon={ClipboardList}
              title={ol("process.steps.registration.title")}
            >
              <p>{ol("process.steps.registration.text")}</p>
              <Bullets items={fields} />
            </TimelineStep>

            <TimelineStep
              icon={Filter}
              title={ol("process.steps.selection.title")}
            >
              {arr("process.steps.selection.text").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </TimelineStep>

            <TimelineStep
              icon={GraduationCap}
              title={ol("process.steps.workshops.title")}
            >
              <p>{ol("process.steps.workshops.text")}</p>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 sm:grid-cols-3"
              >
                {workshops.map((w, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="rounded-xl border border-n-blue-light bg-n-blue-light/40 p-4"
                  >
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-n-blue text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <p className="font-semibold text-n-blue">{w.name}</p>
                    <p className="mt-1 text-sm text-slate-600">{w.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </TimelineStep>

            <TimelineStep
              icon={Presentation}
              title={ol("process.steps.finalPitch.title")}
              last
            >
              <div className="inline-flex items-center gap-2 rounded-lg bg-main/15 px-3 py-2 font-semibold text-n-blue-hard">
                <Calendar className="h-5 w-5" />
                {ol("process.steps.finalPitch.text")}
              </div>
              <p>{ol("process.steps.finalPitch.formatIntro")}</p>
              <div className="flex flex-wrap gap-3">
                {format.map((f, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    <span className="h-2 w-2 rounded-full bg-n-blue" />
                    {f}
                  </motion.div>
                ))}
              </div>
            </TimelineStep>
          </div>
        </Reveal>

        <Reveal>
          <SubHeading>{ol("prepare.title")}</SubHeading>
          <div className="mt-3 space-y-3 text-slate-700">
            <p>{ol("prepare.text")}</p>
            <ol className="list-decimal space-y-1 pl-5 marker:font-semibold marker:text-n-blue">
              {structure.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            <p>{ol("prepare.prototypeText")}</p>
            <Chips items={prototypeList} variant="gray" />
          </div>
        </Reveal>

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
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {places.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 rounded-xl border border-main/40 bg-main/10 p-4"
                >
                  <Trophy className="h-7 w-7 shrink-0 text-main-100" />
                  <span className="font-semibold text-slate-800">{p}</span>
                </motion.div>
              ))}
            </motion.div>
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
