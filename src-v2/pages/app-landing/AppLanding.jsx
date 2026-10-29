import { motion } from "framer-motion";
import { Apple, Play, Bell, CalendarDays, ScrollText, CreditCard, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo-white.svg";
import img from "../../assets/img_05.jpg";
import { HeroGeometric } from "../../components/ui/shape-landing-hero";

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
      className="inline-flex items-center gap-3 bg-white text-n-blue-hard hover:bg-n-bluish-50 border border-white/30 rounded-2xl py-3 px-5 transition-colors shadow-lg w-full sm:w-auto justify-center sm:justify-start"
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
      <HeroGeometric
        badge={t("appLanding.hero.badge")}
        title1={t("appLanding.hero.title1")}
        title2={t("appLanding.hero.title2")}
        description={t("appLanding.hero.description")}
        logo={
          <Link to="/">
            <img
              src={logoWhite}
              alt="E|C College"
              className="h-9 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        }
      >
        {/* store buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0">
          <StoreButton
            href="https://apps.apple.com/ua/app/engineering-college-app/id6755540603"
            icon={<Apple className="w-6 h-6" />}
            badge={t("navbar.appModal.appStore.badge")}
            store="App Store"
          />
          <StoreButton
            href="https://play.google.com/store/apps/details?id=com.aprd.studentID&hl=en"
            icon={<Play className="w-6 h-6 fill-n-blue-hard" />}
            badge={t("navbar.appModal.googlePlay.badge")}
            store="Google Play"
          />
        </div>

        {/* scroll cue */}
        <motion.div
          className="flex justify-center mt-8 text-white/30"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </HeroGeometric>

      {/* ── Features ── */}
      <section className="py-16 md:py-24 px-5 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-10 md:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-n-blue text-xs md:text-sm font-semibold uppercase tracking-widest">
              {t("appLanding.features.eyebrow")}
            </span>
            <h2 className="text-n-blue-hard font-bold text-3xl md:text-5xl mt-3">
              {t("appLanding.features.title")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="flex gap-4 p-5 md:p-6 rounded-2xl border border-slate-100 hover:border-n-bluish-70 hover:shadow-custom transition-all"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
              >
                <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl bg-n-blue-light flex items-center justify-center text-n-blue">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-n-blue-hard text-base md:text-lg">
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

      {/* ── CTA image band ── */}
      <section className="relative overflow-hidden">
        <div
          className="w-full min-h-[420px] md:min-h-[520px] bg-cover bg-center flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(28,60,113,0.80), rgba(28,60,113,0.80)), url(${img})`,
          }}
        >
          <div className="flex flex-col items-center justify-center w-full px-5 md:px-6 py-14 text-center gap-5 md:gap-6">
            <motion.h2
              className="text-white font-bold text-3xl md:text-5xl max-w-2xl leading-tight"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("appLanding.cta.title")}
            </motion.h2>
            <motion.p
              className="text-n-bluish-50 text-base md:text-lg max-w-xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              {t("appLanding.cta.description")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto max-w-xs sm:max-w-none px-4 sm:px-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <StoreButton
                href="https://apps.apple.com/ua/app/engineering-college-app/id6755540603"
                icon={<Apple className="w-6 h-6" />}
                badge={t("navbar.appModal.appStore.badge")}
                store="App Store"
              />
              <StoreButton
                href="https://play.google.com/store/apps/details?id=com.aprd.studentID&hl=en"
                icon={<Play className="w-6 h-6 fill-n-blue-hard" />}
                badge={t("navbar.appModal.googlePlay.badge")}
                store="Google Play"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-n-blue-hard px-5 md:px-8 py-8 md:py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/">
            <img
              src={logoWhite}
              alt="E|C College"
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-white/50 text-sm text-center sm:text-right">
            © {new Date().getFullYear()} E|C Engineering College.{" "}
            <span className="whitespace-nowrap">{t("footer.copyright").split("©")[0].trim() ? t("appLanding.footer.rights") : t("appLanding.footer.rights")}</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://apps.apple.com/ua/app/engineering-college-app/id6755540603"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.aprd.studentID&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Google Play
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppLanding;
