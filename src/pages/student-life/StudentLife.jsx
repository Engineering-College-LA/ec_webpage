import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Users,
  Code2,
  Trophy,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Award,
  Crown,
  Briefcase,
  GraduationCap,
  Trees,
  Palette,
  Dumbbell,
  Target,
  Zap,
  ChevronDown,
  ChevronUp,
  X,
  Send,
} from "lucide-react";
import Button from "../../components/button/Button";

/* ─── FULL DATA STRUCTURE ─── */
const CLUBS_DATA = [
  {
    id: "support-center",
    titleRu: "Центр поддержки и благополучия студентов",
    titleEn: "Student Support & Wellbeing Center",
    tagRu: "Забота & Конфиденциальность",
    tagEn: "Care & Confidentiality",
    icon: HeartHandshake,
    accentColor: "from-[#1C3C71] via-blue-800 to-indigo-900",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    subtitleRu: "Забота о психологическом, эмоциональном и социальном благополучии каждого студента",
    subtitleEn: "Caring for the psychological, emotional, and social wellbeing of every student",
    introRu: "Обучение в колледже — это не только новые знания и профессиональные навыки, но и важный этап взросления. Центр поддержки и благополучия студентов Engineering College Light Academy помогает учащимся адаптироваться к учебной среде, справляться с трудностями и уверенно двигаться к своим образовательным и карьерным целям.",
    introEn: "College education is not only about gaining knowledge and professional skills, but also an important phase of personal growth. The Student Support & Wellbeing Center at E|C helps students adapt, navigate challenges, and move confidently toward their goals.",
    quoteRu: "Каждый студент может обратиться за индивидуальной и конфиденциальной поддержкой в течение всего периода обучения — не только в кризисной ситуации, но и тогда, когда необходим совет или внимание.",
    quoteEn: "Every student can reach out for confidential individual support throughout their studies — not only during crisis situations, but whenever advice or guidance is needed.",
    servicesRu: [
      {
        title: "Психологическая и эмоциональная поддержка",
        desc: "Специалисты помогают справляться с учебным стрессом, эмоциональным напряжением, сложностями в общении и личными переживаниями.",
      },
      {
        title: "Адаптация к обучению",
        desc: "Поддержка в период поступления, помощь в привыкании к интенсивной программе, англоязычной академической среде и новым требованиям.",
      },
      {
        title: "Предупреждение учебных трудностей",
        desc: "Взаимодействие с преподавателями и Отделом по работе со студентами для своевременного выявления ситуаций, требующих помощи.",
      },
      {
        title: "Развитие полезных навыков (Soft Skills)",
        desc: "Практикумы по управлению стрессом, эмоциональной устойчивости, тайм-менеджменту, самоуправлению и взаимной поддержке.",
      },
      {
        title: "Поддержка родителей",
        desc: "Доверительный канал связи между колледжем и родителями. Соблюдение баланса между поддержкой и правом студента на конфиденциальность.",
      },
      {
        title: "Помощь в выборе будущей профессии",
        desc: "Понимание сильных сторон, подходящих специализаций, профессиональных траекторий и требований современной IT-индустрии.",
      },
    ],
    confidentialityRu: "Все обращения студентов рассматриваются конфиденциально с соблюдением законодательства КР. Центр работает независимо от дисциплинарных процедур: обращение НЕ влияет на оценки или академический статус.",
    whenToApplyRu: [
      "Испытываете стресс или эмоциональное напряжение",
      "Столкнулись с трудностями в учёбе или адаптации",
      "Переживаете семейные или личные сложности",
      "Чувствуете неуверенность в выборе специальности",
      "Хотите обсудить цели и собственное дальнейшее развитие",
      "Нуждаетесь в поддержке, совете или доверительном разговоре",
    ],
    ctaBtnRu: "Записаться на консультацию",
    ctaBtnEn: "Book a Consultation",
  },
  {
    id: "enactus",
    titleRu: "Enactus Engineering College",
    titleEn: "Enactus Engineering College",
    tagRu: "Лидерство & Соцпредпринимательство",
    tagEn: "Leadership & Social Entrepreneurship",
    icon: Sparkles,
    accentColor: "from-amber-600 via-orange-600 to-amber-700",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    subtitleRu: "Путь к лидерству, социальному предпринимательству и реальным проектам",
    subtitleEn: "Path to leadership, social entrepreneurship, and real-world projects",
    introRu: "Enactus — это международная некоммерческая организация, объединяющая студентов более чем из 30 стран. Участники создают собственные социальные и бизнес-проекты, развивают предпринимательское мышление и защищают честь колледжа на национальных соревнованиях и Enactus World Cup.",
    introEn: "Enactus is an international non-profit organization uniting students from over 30 countries. Members build social startups, develop entrepreneurial mindsets, and represent the college at National & World Cups.",
    achievementBadgeRu: "🏆 Награда «Прорыв года» — один из лучших результатов за наиболее короткий период развития на национальном уровне!",
    achievementBadgeEn: "🏆 'Breakthrough of the Year' Award — one of the best national results in a record timeframe!",
    highlightsRu: [
      "Разработка и запуск реальных бизнес-стартапов",
      "Участие в Национальном кубке и Enactus World Cup",
      "Тренинги по питчингу, финансовому моделированию и PM",
      "Нетворкинг с топ-предпринимателями и экспертами КР",
      "Выездные тимбилдинги, мастер-классы и тренинги",
    ],
    careersRu: [
      "Project Management",
      "Product Management",
      "Business Development",
      "Marketing & PR",
      "Entrepreneurship",
      "Finance & Data Analytics",
      "UX/UI Design",
      "Software Engineering",
    ],
    ctaBtnRu: "Присоединиться к Enactus",
    ctaBtnEn: "Join Enactus",
  },
  {
    id: "student-council",
    titleRu: "Студенческий парламент",
    titleEn: "Student Parliament",
    tagRu: "Голос студентов & Самоуправление",
    tagEn: "Student Voice & Governance",
    icon: Users,
    accentColor: "from-purple-700 via-indigo-800 to-purple-950",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    subtitleRu: "Голос студентов. Пространство для инициатив. Возможность влиять на жизнь колледжа.",
    subtitleEn: "The voice of students. Space for initiative. Opportunity to influence campus life.",
    introRu: "Студенческий парламент — орган студенческого самоуправления, представляющий интересы учащихся перед администрацией. Парламент организует крупные мероприятия, поддерживает инициативы и развивает культуру лидерства.",
    introEn: "The Student Parliament is the self-governing body representing student interests to administration, organizing major events, and fostering campus leadership.",
    ministriesRu: [
      {
        role: "Президент",
        icon: Crown,
        color: "text-amber-500",
        desc: "Руководит парламентом, определяет приоритеты, координирует работу министерств и представляет студентов перед руководством колледжа.",
      },
      {
        role: "Вице-президент",
        icon: ShieldCheck,
        color: "text-indigo-500",
        desc: "Помогает президенту, контролирует выполнение решений, организует календарь мероприятий и совместные проекты.",
      },
      {
        role: "Министр спорта",
        icon: Dumbbell,
        color: "text-emerald-500",
        desc: "Организует спортивные турниры, марафоны, формирует сборные команды колледжа и популяризирует здоровый образ жизни.",
      },
      {
        role: "Министр культуры",
        icon: Palette,
        color: "text-rose-500",
        desc: "Отвечает за концерты, тематические вечера, День открытых дверей, музыкальные, танцевальные и творческие инициативы.",
      },
      {
        role: "Министр образования",
        icon: GraduationCap,
        color: "text-blue-500",
        desc: "Представляет академические интересы, содействует мастер-классам, олимпиадам, связывает студентов с DevClub и ICPC.",
      },
      {
        role: "Министр экологии",
        icon: Trees,
        color: "text-teal-500",
        desc: "Развивает экологическую культуру, сортировку отходов, проводит акции по озеленению, субботники и волонтерские проекты.",
      },
    ],
    ctaBtnRu: "Подать заявку в Парламент",
    ctaBtnEn: "Apply for Parliament",
  },
  {
    id: "devclub",
    titleRu: "DevClub Engineering College",
    titleEn: "DevClub Engineering College",
    tagRu: "От кода к IT-продуктам",
    tagEn: "From Code to IT Products",
    icon: Code2,
    accentColor: "from-cyan-600 via-blue-700 to-cyan-900",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
    subtitleRu: "От учебного кода — к реальным IT-проектам при поддержке APRD",
    subtitleEn: "From classroom code to production IT products supported by APRD",
    introRu: "DevClub — студенческое сообщество для тех, кто хочет создавать реальные цифровые продукты. Участники проходят весь цикл разработки: от требований и архитектуры до код-ревью, тестирования и релиза.",
    introEn: "DevClub is a student engineering community creating real digital products, walking through the entire SDLC: requirements, architecture, code reviews, testing, and production deployment.",
    aprdCardRu: {
      title: "🚀 Поддержка компании APRD",
      desc: "APRD предоставляет участникам DevClub структурированные практические стажировки, коммерческие задачи, профессиональное наставничество от Senior-разработчиков и проекты с возможностью внедрения.",
    },
    workflowRu: [
      "1. Формирование команды и выбор проекта",
      "2. Анализ требований и архитектуры",
      "3. Спринты разработки и код-ревью",
      "4. Тестирование, доработка и рефакторинг",
      "5. Презентация и запуск готового продукта",
    ],
    ctaBtnRu: "Присоединиться к DevClub",
    ctaBtnEn: "Join DevClub",
  },
  {
    id: "icpc",
    titleRu: "ICPC Club — Олимпиадное программирование",
    titleEn: "ICPC Club — Competitive Programming",
    tagRu: "Алгоритмы & Победы",
    tagEn: "Algorithms & Contests",
    icon: Trophy,
    accentColor: "from-emerald-600 via-teal-700 to-slate-900",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    subtitleRu: "Путь к международным соревнованиям и карьере в мировых IT-гигантах",
    subtitleEn: "Path to international contests and careers at global tech leaders",
    introRu: "ICPC (International Collegiate Programming Contest) — крупнейшее международное соревнование по алгоритмическому программированию. ICPC Club при E|C готовит студентов по методике Implementation First.",
    introEn: "ICPC is the world's premier competitive programming contest. The ICPC Club at E|C prepares students using the Implementation First methodology.",
    levelsRu: [
      {
        div: "Div 3 — Начинающий",
        desc: "Синтаксис, условия, циклы, массивы, симуляции и базовый перебор. Самостоятельное решение задач.",
      },
      {
        div: "Div 2 — Средний",
        desc: "Структуры данных, алгоритмы на графах, бинарный поиск, динамическое программирование (DP).",
      },
      {
        div: "Div 1 — Продвинутый",
        desc: "Сложная олимпиадная математика, продвинутые структуры данных, командная стратегия на ICPC Regionals.",
      },
    ],
    modelRu: "⚡ Модель обучения «2+1»: 2 тематических занятия в неделю + 1 тренировочный контест по выходным с обязательным разбором и upsolving.",
    ctaBtnRu: "Присоединиться к ICPC Club",
    ctaBtnEn: "Join ICPC Club",
  },
];

export default function StudentLife() {
  const { clubId } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ru") ? "ru" : "en";

  const [activeTab, setActiveTab] = useState(clubId || "all");
  const [expandedMinistry, setExpandedMinistry] = useState(null);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [targetClub, setTargetClub] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", group: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (clubId && CLUBS_DATA.some((c) => c.id === clubId)) {
      setActiveTab(clubId);
      const element = document.getElementById(clubId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [clubId]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === "all") {
      navigate("/student-life", { replace: true });
    } else {
      navigate(`/student-life/${tabId}`, { replace: true });
      const element = document.getElementById(tabId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const openApplyModal = (clubTitle) => {
    setTargetClub(clubTitle);
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setModalOpen(false);
        setFormData({ name: "", phone: "", group: "", note: "" });
        setSubmitted(false);
      }, 2000);
    }, 400);
  };

  const filteredClubs = CLUBS_DATA.filter((club) => {
    return activeTab === "all" || club.id === activeTab;
  });

  return (
    <div className="page pt-28 sm:pt-32 pb-16 text-slate-900">
      {/* ── Main Container ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto w-full pb-3 mb-10 border-b border-slate-200 scrollbar-none">
          <button
            onClick={() => handleTabChange("all")}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === "all"
                ? "bg-[#1C3C71] text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {lang === "ru" ? "Все направления (5)" : "All Organizations (5)"}
          </button>
          {CLUBS_DATA.map((c) => (
            <button
              key={c.id}
              onClick={() => handleTabChange(c.id)}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === c.id
                  ? "bg-[#1C3C71] text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {lang === "ru" ? c.titleRu.split(" ")[0] + " " + (c.titleRu.split(" ")[1] || "") : c.titleEn.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* ── Organization Cards ── */}
        <div className="space-y-16">
          {filteredClubs.map((club) => {
            const IconComp = club.icon;
            const title = lang === "ru" ? club.titleRu : club.titleEn;
            const subtitle = lang === "ru" ? club.subtitleRu : club.subtitleEn;
            const intro = lang === "ru" ? club.introRu : club.introEn;
            const tag = lang === "ru" ? club.tagRu : club.tagEn;
            const ctaBtn = lang === "ru" ? club.ctaBtnRu : club.ctaBtnEn;

            return (
              <div
                key={club.id}
                id={club.id}
                className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 shadow-custom overflow-hidden transition-all hover:shadow-xl"
              >
                {/* Header Banner */}
                <div className={`bg-gradient-to-r ${club.accentColor} p-6 sm:p-10 text-white relative overflow-hidden`}>
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-3xl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white border border-white/20">
                        <IconComp className="w-4 h-4" />
                        <span>{tag}</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                        {title}
                      </h2>
                      <p className="text-sm sm:text-base text-slate-200 font-medium">
                        {subtitle}
                      </p>
                    </div>

                    <button
                      onClick={() => openApplyModal(title)}
                      className="shrink-0 bg-white text-slate-900 font-bold px-6 py-3 rounded-2xl hover:bg-slate-100 transition-transform active:scale-95 shadow-lg text-sm sm:text-base flex items-center justify-center gap-2"
                    >
                      <span>{ctaBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-10 space-y-8">
                  {/* Intro text */}
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    {intro}
                  </p>

                  {/* ── 1. Support Center Specific View ── */}
                  {club.id === "support-center" && (
                    <div className="space-y-8">
                      <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-100 text-blue-900 font-medium italic text-sm sm:text-base">
                        💬 "{lang === "ru" ? club.quoteRu : club.quoteEn}"
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-blue-600" />
                          <span>{lang === "ru" ? "Чем мы помогаем студентам:" : "Services Offered:"}</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {club.servicesRu.map((srv, idx) => (
                            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 hover:border-blue-300 transition-colors">
                              <h4 className="font-bold text-slate-800 text-sm sm:text-base">{srv.title}</h4>
                              <p className="text-xs sm:text-sm text-slate-600 leading-normal">{srv.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Confidentiality Card */}
                      <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-1 max-w-2xl">
                          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                            <ShieldCheck className="w-5 h-5" />
                            <span>{lang === "ru" ? "100% Конфиденциальность и Безопасность" : "100% Confidentiality Guarantee"}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300">
                            {club.confidentialityRu}
                          </p>
                        </div>
                        <button
                          onClick={() => openApplyModal("Консультация в Центре поддержки")}
                          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 font-semibold text-xs sm:text-sm whitespace-nowrap"
                        >
                          {lang === "ru" ? "Записаться" : "Book Now"}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── 2. Enactus Specific View ── */}
                  {club.id === "enactus" && (
                    <div className="space-y-8">
                      {/* Achievement Banner */}
                      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-300 text-amber-900 font-bold text-sm sm:text-base flex items-center gap-3">
                        <Award className="w-6 h-6 text-amber-600 shrink-0" />
                        <span>{lang === "ru" ? club.achievementBadgeRu : club.achievementBadgeEn}</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-amber-600" />
                            <span>{lang === "ru" ? "Возможности для участников:" : "Member Opportunities:"}</span>
                          </h3>
                          <ul className="space-y-2.5">
                            {club.highlightsRu.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-amber-600" />
                            <span>{lang === "ru" ? "Карьерные направления:" : "Career Pathways:"}</span>
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {club.careersRu.map((car, idx) => (
                              <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
                                {car}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── 3. Student Parliament Specific View ── */}
                  {club.id === "student-council" && (
                    <div className="space-y-8">
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Crown className="w-5 h-5 text-purple-600" />
                        <span>{lang === "ru" ? "Структура Студенческого парламента:" : "Parliament Leadership & Ministries:"}</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {club.ministriesRu.map((min, idx) => {
                          const MinIcon = min.icon;
                          return (
                            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-purple-300 transition-colors">
                              <div className="flex items-center gap-2">
                                <MinIcon className={`w-5 h-5 ${min.color}`} />
                                <h4 className="font-extrabold text-slate-900 text-base">{min.role}</h4>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{min.desc}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── 4. DevClub Specific View ── */}
                  {club.id === "devclub" && (
                    <div className="space-y-8">
                      {/* APRD Card */}
                      <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-900 to-blue-900 text-white space-y-2">
                        <div className="font-bold text-cyan-300 text-lg">{club.aprdCardRu.title}</div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{club.aprdCardRu.desc}</p>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-cyan-600" />
                          <span>{lang === "ru" ? "Этапы разработки продуктов:" : "Product SDLC Stages:"}</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                          {club.workflowRu.map((step, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-medium text-xs text-slate-700">
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── 5. ICPC Specific View ── */}
                  {club.id === "icpc" && (
                    <div className="space-y-8">
                      <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium text-xs sm:text-sm">
                        {club.modelRu}
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-emerald-600" />
                          <span>{lang === "ru" ? "3 Уровня подготовки:" : "3 Division Levels:"}</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {club.levelsRu.map((lvl, idx) => (
                            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                              <h4 className="font-extrabold text-emerald-700 text-base">{lvl.div}</h4>
                              <p className="text-xs sm:text-sm text-slate-600 leading-normal">{lvl.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Footer CTA Line */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs sm:text-sm text-slate-500 font-medium">
                      {lang === "ru"
                        ? "Заявки принимаются среди всех студентов Engineering College Light Academy"
                        : "Open to all registered E|C Engineering College students"}
                    </div>
                    <button
                      onClick={() => openApplyModal(title)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1C3C71] text-white hover:bg-[#152e58] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <span>{ctaBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Interactive Application Modal ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 sm:p-8 relative space-y-6 animate-scaleIn">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {lang === "ru" ? "Заявка / Запись" : "Application Form"}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                {targetClub}
              </h3>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-slate-900">
                  {lang === "ru" ? "Заявка принята!" : "Submitted Successfully!"}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  {lang === "ru"
                    ? "Мы свяжемся с вами в ближайшее время через координатора."
                    : "We will contact you shortly via campus coordinator."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === "ru" ? "Ваше Имя и Фамилия *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === "ru" ? "Асан уулу Бакыт" : "John Doe"}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1C3C71]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === "ru" ? "Телефон / WhatsApp *" : "Phone / WhatsApp *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+996 700 000 000"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1C3C71]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === "ru" ? "Группа / Курс" : "Group / Academic Year"}
                  </label>
                  <input
                    type="text"
                    value={formData.group}
                    onChange={(e) => setFormData({ ...formData, group: e.target.value })}
                    placeholder="SE-23-1"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1C3C71]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === "ru" ? "Вопрос или комментарий" : "Questions or Note"}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder={lang === "ru" ? "Опишите вашу цель или вопрос..." : "Describe your interest..."}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1C3C71]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[#1C3C71] text-white font-bold text-sm hover:bg-[#152e58] flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? lang === "ru"
                        ? "Отправка..."
                        : "Submitting..."
                      : lang === "ru"
                      ? "Отправить заявку"
                      : "Submit Application"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
