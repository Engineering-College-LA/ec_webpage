import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  Compass,
  Target,
  Eye,
  Sparkles,
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  Building2,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import ContactTelegram from "../../components/contact/ContactTelegram";
import TeachersConveyor from "../../components/about-us/TeachersConveyor";

function AboutPage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ru") ? "ru" : "en";

  const stats = [
    {
      icon: GraduationCap,
      value: "5",
      labelRu: "Современных программ",
      labelEn: "Modern Programs",
    },
    {
      icon: Rocket,
      value: "100%",
      labelRu: "Практическое обучение",
      labelEn: "Hands-on Learning",
    },
    {
      icon: Users,
      value: "15+",
      labelRu: "Опытных преподавателей",
      labelEn: "Expert Instructors",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      labelRu: "Поддержка студентов",
      labelEn: "Student Support",
    },
  ];

  const corePillars = [
    {
      titleRu: "Практический подход",
      titleEn: "Practical Approach",
      descRu: "Обучение через реальные проекты, кейсы индустрии и работу в современных лабораториях.",
      descEn: "Learning through real projects, industry cases, and work in state-of-the-art labs.",
    },
    {
      titleRu: "Английский язык",
      titleEn: "English Medium",
      descRu: "Преподавание ключевых дисциплин на английском языке для международной карьеры.",
      descEn: "Teaching core disciplines in English to prepare students for global careers.",
    },
    {
      titleRu: "Сильное сообщество",
      titleEn: "Strong Community",
      descRu: "Менторство, экосистема единомышленников и всесторонняя поддержка на протяжении всей учёбы.",
      descEn: "Mentorship, a community of peers, and continuous guidance throughout studies.",
    },
  ];

  return (
    <div className="page pt-28 pb-16 text-slate-900 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* ── Main Container ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Hero Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-n-blue/10 text-n-blue text-xs font-semibold uppercase tracking-wider border border-n-blue/20">
            <Building2 className="w-4 h-4" />
            <span>{t("about.collegeTitle")}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t("about.overview")}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {lang === "ru"
              ? "Инженерный колледж E|C — это пространство инноваций, современного образования и практической подготовки будущих лидеров технологической индустрии."
              : "E|C Engineering College is a space for innovation, modern education, and practical preparation of future technology leaders."}
          </p>
        </div>

        {/* ── Stats Highlights Bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-custom text-center space-y-2 hover:border-n-blue/40 transition-all hover:shadow-lg group"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-n-blue/10 text-n-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  {lang === "ru" ? stat.labelRu : stat.labelEn}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Featured Overview Card ── */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-custom p-6 sm:p-10 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-n-blue/5 rounded-full blur-3xl -z-0 pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2.5 text-n-blue font-bold text-lg sm:text-xl">
              <div className="p-2 rounded-xl bg-n-blue text-white shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <span>{lang === "ru" ? "О нашем колледже" : "About Our College"}</span>
            </div>

            <div className="text-slate-700 text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-4">
              {t("about.overviewDescription")}
            </div>

            {/* Core Pillars grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              {corePillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-1.5">
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-n-blue" />
                    <span>{lang === "ru" ? pillar.titleRu : pillar.titleEn}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === "ru" ? pillar.descRu : pillar.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mission & Vision 2-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-custom p-6 sm:p-8 flex flex-col justify-between hover:border-n-blue/40 transition-all hover:shadow-xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-blue-50 text-n-blue font-bold text-base sm:text-lg border border-blue-100">
                <Target className="w-5 h-5 text-n-blue" />
                <span>{t("about.mission")}</span>
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                {t("about.missionDescription")}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-n-blue uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{lang === "ru" ? "Целенаправленное развитие" : "Purpose-driven Education"}</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-custom p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition-all hover:shadow-xl relative overflow-hidden group">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-emerald-50 text-emerald-700 font-bold text-base sm:text-lg border border-emerald-100">
                <Eye className="w-5 h-5 text-emerald-600" />
                <span>{t("about.vision")}</span>
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                {t("about.visionDescription")}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>{lang === "ru" ? "Взгляд в будущее" : "Future-Oriented Vision"}</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Faculty Section & Telegram Contact ── */}
      <TeachersConveyor />
      <ContactTelegram />
    </div>
  );
}

export default AboutPage;
