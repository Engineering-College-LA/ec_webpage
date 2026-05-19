import { motion } from "framer-motion";
import { Apple, Play, Bell, CalendarDays, ScrollText, CreditCard, ChevronDown, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo-white.svg";
import img from "../../assets/img_05.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 },
  }),
};

const features = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    titleKey: "appLanding.features.digitalId.title",
    descKey: "appLanding.features.digitalId.desc",
  },
  {
    icon: <ScrollText className="w-6 h-6" />,
    titleKey: "appLanding.features.transcript.title",
    descKey: "appLanding.features.transcript.desc",
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    titleKey: "appLanding.features.schedule.title",
    descKey: "appLanding.features.schedule.desc",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    titleKey: "appLanding.features.updates.title",
    descKey: "appLanding.features.updates.desc",
  },
];

function StoreButton({ icon, badge, store, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-white text-n-blue-hard hover:bg-n-bluish-50 border border-white/30 rounded-2xl py-3 px-6 transition-colors shadow-lg"
    >
      <span className="shrink-0">{icon}</span>
      <div className="text-left leading-tight">
        <p className="text-xs text-n-blue/70">{badge}</p>
        <p className="text-base font-bold">{store}</p>
      </div>
    </a>
  );
}

function AppLanding() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative bg-n-blue-hard overflow-hidden min-h-[100dvh] flex flex-col items-center justify-center px-6 py-24 pt-32">
        {/* decorative circles */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-n-blue/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-20 w-[400px] h-[400px] rounded-full bg-n-bluish/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          {/* logo */}
          <Link to="/">
            <motion.img
              src={logoWhite}
              alt="E|C College"
              className="h-12 w-auto hover:opacity-80 transition-opacity"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            />
          </Link>

          {/* pill badge */}
          <motion.span
            className="flex items-center gap-2 bg-white/10 text-n-bluish-50 text-sm font-medium rounded-full px-4 py-1.5 border border-white/20"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <Smartphone className="w-4 h-4" />
            {t("appLanding.hero.badge")}
          </motion.span>

          <motion.h1
            className="text-white font-bold text-5xl sm:text-6xl md:text-7xl leading-tight"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {t("appLanding.hero.title")}
          </motion.h1>

          <motion.p
            className="text-n-bluish-50 text-lg md:text-xl max-w-2xl leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {t("appLanding.hero.description")}
          </motion.p>

          {/* store buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <StoreButton
              href="https://apps.apple.com/ua/app/engineering-college-app/id6755540603"
              icon={<Apple className="w-7 h-7" />}
              badge={t("navbar.appModal.appStore.badge")}
              store="App Store"
            />
            <StoreButton
              href="https://play.google.com/store/apps/details?id=com.aprd.studentID&hl=en"
              icon={<Play className="w-7 h-7 fill-n-blue-hard" />}
              badge={t("navbar.appModal.googlePlay.badge")}
              store="Google Play"
            />
          </motion.div>

          {/* scroll cue */}
          <motion.div
            className="mt-4 text-white/40 flex flex-col items-center gap-1"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-n-blue text-sm font-semibold uppercase tracking-widest">
              {t("appLanding.features.eyebrow")}
            </span>
            <h2 className="text-n-blue-hard font-bold text-4xl md:text-5xl mt-3">
              {t("appLanding.features.title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="flex gap-5 p-6 rounded-2xl border border-slate-100 hover:border-n-bluish-70 hover:shadow-custom transition-all"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-n-blue-light flex items-center justify-center text-n-blue">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-n-blue-hard text-lg">
                    {t(f.titleKey)}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    {t(f.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visual / Image band ── */}
      <section className="relative overflow-hidden">
        <div
          className="w-full h-[400px] md:h-[520px] bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(28,60,113,0.7), rgba(28,60,113,0.7)), url(${img})` }}
        >
          <div className="flex flex-col items-center justify-center h-full px-6 text-center gap-6">
            <motion.h2
              className="text-white font-bold text-4xl md:text-5xl max-w-2xl leading-tight"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("appLanding.cta.title")}
            </motion.h2>
            <motion.p
              className="text-n-bluish-50 text-lg max-w-xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              {t("appLanding.cta.description")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <StoreButton
                href="https://apps.apple.com/ua/app/engineering-college-app/id6755540603"
                icon={<Apple className="w-7 h-7" />}
                badge={t("navbar.appModal.appStore.badge")}
                store="App Store"
              />
              <StoreButton
                href="https://play.google.com/store/apps/details?id=com.aprd.studentID&hl=en"
                icon={<Play className="w-7 h-7 fill-n-blue-hard" />}
                badge={t("navbar.appModal.googlePlay.badge")}
                store="Google Play"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <div className="bg-n-blue-hard py-6 px-6 flex items-center justify-center">
        <Link to="/"><img src={logoWhite} alt="E|C College" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" /></Link>
      </div>
    </div>
  );
}

export default AppLanding;
