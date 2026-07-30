import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Code2,
  ShieldCheck,
  Briefcase,
  Sparkles,
  Palette,
  ArrowRight,
  CheckCircle2,
  Target,
  Zap,
  Users,
  GraduationCap,
  Laptop,
  ExternalLink,
  ChevronRight,
  UserCheck,
  Award,
  BookOpen,
  Rocket,
  Brain,
  Info,
  X,
} from "lucide-react";

/* ─── FULL ACADEMIC PROGRAMS DATA ─── */
const PROGRAMS_DATA = [
  {
    id: "software-engineering",
    titleRu: "Программная инженерия",
    titleEn: "Software Engineering",
    tagRu: "Разработка ПО & ИИ",
    tagEn: "Software & AI Development",
    icon: Code2,
    accentColor: "from-[#1e1b4b] via-indigo-900 to-slate-900",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80",
    ],
    subtitleRu: "Проектирование, разработка, тестирование и интеграция искусственного интеллекта",
    subtitleEn: "Design, development, testing, and AI integration for modern digital products",
    introRu: "Программа «Программная инженерия» готовит специалистов, способных проектировать, разрабатывать, тестировать и сопровождать современные программные продукты. Студенты изучают не только языки программирования, но и полный процесс создания программного обеспечения — от анализа задачи и проектирования системы до запуска готового решения.\n\nОбучение начинается с фундаментальных основ и постепенно переходит к разработке более сложных приложений. Такой подход позволяет студентам понимать внутреннюю логику программных систем, самостоятельно находить решения и адаптироваться к новым технологиям.",
    introEn: "The Software Engineering program trains specialists capable of designing, developing, testing, and supporting modern software products. Students master programming languages as well as the complete software engineering process — from system design to full-scale deployment.",
    
    modulesRu: [
      {
        title: "Основы программирования",
        desc: "Алгоритмы, структуры данных, логика программирования и принципы объектно-ориентированной разработки (ООП). База для освоения любых стеков.",
      },
      {
        title: "Разработка цифровых продуктов",
        desc: "Веб-разработка, Frontend и Backend, базы данных, REST API и программные интерфейсы. Создание продуктов, обрабатывающих и хранящих данные.",
      },
      {
        title: "Качество и надёжность",
        desc: "Тестирование (QA), поиск ошибок, основы информационной безопасности, Git, автоматическое развёртывание и базовые принципы DevOps.",
      },
      {
        title: "Командная разработка",
        desc: "Анализ требований, распределение задач в командах, документирование решений, контроль версий и презентация готового продукта.",
      },
      {
        title: "Искусственный интеллект в разработке",
        desc: "Использование ИИ для написания и отладки кода, автотестов и документации. Интеграция готовых ИИ-сервисов, обучение ML-моделей и разработка умных решений.",
      },
    ],
    modulesEn: [
      {
        title: "Programming Fundamentals",
        desc: "Algorithms, data structures, logic, and Object-Oriented Programming (OOP) fundamentals.",
      },
      {
        title: "Digital Product Development",
        desc: "Web development, Frontend & Backend architecture, databases, and REST APIs.",
      },
      {
        title: "Quality & Reliability",
        desc: "Testing (QA), security fundamentals, Git version control, deployment, and DevOps basics.",
      },
      {
        title: "Team Engineering",
        desc: "Requirements analysis, Agile task assignment, technical documentation, and project defense.",
      },
      {
        title: "AI Integration in Development",
        desc: "AI-assisted coding, automated testing, API AI integration, machine learning principles, and intelligent software creation.",
      },
    ],

    skillsRu: [
      "Анализировать задачу и проектировать техническое архитектурное решение",
      "Создавать веб-приложения, сервисы и цифровые продукты",
      "Работать с базами данных и серверной частью (Backend)",
      "Тестировать программы, находить ошибки и оптимизировать код",
      "Использовать профессиональные инструменты командной разработки (Git, Jira)",
      "Применять ИИ в процессе разработки и интегрировать его в приложения",
      "Создавать собственные интеллектуальные программные решения",
      "Доводить проект от первоначальной идеи до работающего прототипа",
    ],
    skillsEn: [
      "Analyze business requirements and architect technical solutions",
      "Build web applications, services, and digital products",
      "Manage databases and backend server infrastructure",
      "Test software, debug errors, and refactor code",
      "Utilize professional team collaboration tools (Git, Jira)",
      "Leverage AI during coding and integrate AI models into apps",
      "Develop custom intelligent software applications",
      "Take projects from initial concept to working commercial prototypes",
    ],

    howItWorksRu: "Теоретические знания сразу закрепляются практическими заданиями: от создания небольших модулей до полноценных веб-сервисов, мобильных приложений и ИИ-решений. Каждый студент получает индивидуальный ноутбук для занятий и самостоятельной работы.",
    howItWorksEn: "Theory is immediately reinforced through practice. Students build real-world web apps, mobile services, and AI solutions. Every student receives a dedicated personal laptop.",

    practiceRu: "Практика в DevClub при поддержке IT-компании APRD — работа над задачами, приближенными к коммерческой разработке. Подготовка к ICPC для любителей алгоритмов.",
    practiceEn: "Hands-on projects at DevClub powered by APRD IT company. Preparation for ICPC competitive programming for algorithm enthusiasts.",

    careerRu: ["Junior Software Developer", "Frontend / Backend Developer", "Full-stack Engineer", "AI / ML Integration Specialist", "QA Automation Engineer", "DevOps Engineer"],
    careerEn: ["Junior Software Developer", "Frontend / Backend Developer", "Full-stack Engineer", "AI / ML Integration Specialist", "QA Automation Engineer", "DevOps Engineer"],

    targetAudienceRu: "Программная инженерия подойдёт тем, кто интересуется технологиями, любит решать логические задачи и хочет создавать свои продукты. Предварительный опыт в программировании не обязателен.",
    targetAudienceEn: "Ideal for technology enthusiasts who enjoy solving logical puzzles and building products. Prior programming experience is not required.",
    
    ctaBtnRu: "Подать заявку на программу",
    ctaBtnEn: "Apply for Software Engineering",
  },
  {
    id: "cyber-security",
    titleRu: "Кибербезопасность",
    titleEn: "Cybersecurity",
    tagRu: "Защита систем & Этичный хакинг",
    tagEn: "System Defense & Ethical Hacking",
    icon: ShieldCheck,
    accentColor: "from-[#0a1628] via-sky-900 to-slate-950",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80",
    ],
    subtitleRu: "Защита компьютерных систем, сетей и данных от современных цифровых угроз",
    subtitleEn: "Protecting computer systems, networks, and data from digital threats",
    introRu: "Программа «Кибербезопасность» готовит специалистов, способных защищать компьютерные системы, сети и данные от современных цифровых угроз. Студенты изучают, как возникают уязвимости, какими методами проводятся кибератаки и какие технологии используются для их обнаружения и предотвращения.\n\nОбучение начинается с устройства компьютерных систем, операционных систем и сетей, а затем переходит к практическим направлениям информационной безопасности.",
    introEn: "The Cybersecurity program prepares specialists capable of protecting computer systems, networks, and confidential data against cyber threats, vulnerabilities, and unauthorized access.",

    modulesRu: [
      {
        title: "Компьютерные системы и сети",
        desc: "Операционные системы, сетевые протоколы (TCP/IP), администрирование, маршрутизация и устройство цифровой инфраструктуры.",
      },
      {
        title: "Защита систем и данных",
        desc: "Управление доступом, защита устройств, экраны (Firewall), принципы криптографии, безопасные конфигурации и шифрование.",
      },
      {
        title: "Этичный хакинг",
        desc: "Понимание методов злоумышленников, анализ уязвимостей и тестирование на проникновение (пентестинг) в изолированных лабораториях.",
      },
      {
        title: "Мониторинг и реагирование на инциденты",
        desc: "Анализ логов и сетевого трафика, выявление аномалий, локализация угроз, расследование киберинцидентов и восстановление систем.",
      },
      {
        title: "Управление рисками",
        desc: "Оценка рисков безопасности, составление регламентов, анализ человеческого фактора и аудит защищённости организаций.",
      },
    ],
    modulesEn: [
      {
        title: "Computer Systems & Networks",
        desc: "Operating systems, TCP/IP network protocols, system administration, and infrastructure architecture.",
      },
      {
        title: "Systems & Data Protection",
        desc: "Access control, endpoint protection, firewalls, cryptography principles, and secure system configuration.",
      },
      {
        title: "Ethical Hacking",
        desc: "Understanding hacker techniques, vulnerability assessments, and penetration testing in safe sandbox environments.",
      },
      {
        title: "Incident Monitoring & Response",
        desc: "Log and traffic analysis, anomaly detection, threat containment, digital forensics, and system recovery.",
      },
      {
        title: "Risk Governance & Compliance",
        desc: "Security risk analysis, policy formulation, human factor evaluation, and organizational security audits.",
      },
    ],

    skillsRu: [
      "Понимать глубокое устройство компьютерных сетей и операционных систем",
      "Выявлять и анализировать уязвимости в программных и сетевых комплексах",
      "Настраивать комплексную защиту систем, сетей и баз данных",
      "Проводить тестирование безопасности (пентест) в контролируемой среде",
      "Анализировать сетевую активность, трафик и журналы событий",
      "Распознавать признаки кибератак и оперативно реагировать на инциденты",
      "Оценивать риски и предлагать обоснованные технические меры защиты",
      "Составлять отчёты по аудиту безопасности и инструкции для организаций",
    ],
    skillsEn: [
      "Understand deep computer architecture and networking fundamentals",
      "Identify and analyze security vulnerabilities in software and networks",
      "Configure multi-layer defense for enterprise systems and databases",
      "Conduct authorized penetration testing in controlled laboratory environments",
      "Analyze network traffic and security event logs",
      "Detect cyberattacks promptly and execute incident response plans",
      "Assess cybersecurity risks and recommend mitigation measures",
      "Draft comprehensive security audit reports and compliance documentation",
    ],

    howItWorksRu: "Лабораторные работы в изолированных виртуальных средах, анализ сетевого трафика и моделирование атак. Каждому студенту выдаётся индивидуальный ноутбук.",
    howItWorksEn: "Hands-on labs in isolated virtual environments, network traffic analysis, and simulated attacks. Every student receives a dedicated personal laptop.",

    practiceRu: "Аудит защищённости сетей, разработка регламентов ИБ, реагирование на смоделированные инциденты и этичное тестирование.",
    practiceEn: "Network security auditing, drafting security policies, simulated incident response, and ethical penetration testing.",

    careerRu: ["Специалист по кибербезопасности", "SOC-аналитик", "Инженер по сетевой безопасности", "Специалист по пентестингу", "Аналитик ИБ"],
    careerEn: ["Cybersecurity Specialist", "SOC Analyst", "Network Security Engineer", "Penetration Tester", "Information Security Analyst"],

    targetAudienceRu: "Для тех, кто внимателен к деталям, интересуется технологиями и любит разбираться в сложных системах. Важны аналитика и высокая ответственность.",
    targetAudienceEn: "For detail-oriented individuals interested in technologies, complex systems, and protecting critical data infrastructure.",

    ctaBtnRu: "Подать заявку на Кибербезопасность",
    ctaBtnEn: "Apply for Cybersecurity",
  },
  {
    id: "management-in-it",
    titleRu: "IT Management",
    titleEn: "IT Management",
    tagRu: "Управление проектами & Лидерство",
    tagEn: "Project Management & Leadership",
    icon: Briefcase,
    accentColor: "from-[#451a03] via-amber-900 to-amber-950",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80",
    ],
    subtitleRu: "Управление проектами, командами и бизнес-процессами в цифровой эре",
    subtitleEn: "Managing projects, teams, and business processes in the digital era",
    introRu: "Программа «IT Management» готовит специалистов, способных организовывать работу команд, управлять проектами и совершенствовать бизнес-процессы. Студенты учатся ставить цели, планировать ресурсы, распределять задачи, контролировать результаты и принимать решения на основе данных.\n\nОбучение сочетает знания в области бизнеса, экономики и управления с развитием лидерских, аналитических и коммуникативных навыков.",
    introEn: "The IT Management program trains leaders and project managers capable of coordinating teams, organizing business processes, and making data-driven strategic decisions.",

    modulesRu: [
      {
        title: "Основы управления",
        desc: "Устройство организаций, стратегическое и операционное управление, определение целей, KPI и распределение ответственности.",
      },
      {
        title: "Управление проектами (PM)",
        desc: "Планирование сроков, бюджетов, разбиение задач, гибкие методологии (Agile, Scrum, Kanban), управление рисками.",
      },
      {
        title: "Бизнес-процессы и операции",
        desc: "Анализ информационных потоков, устранение неэффективности и потерь времени, оптимизация работы компании.",
      },
      {
        title: "Финансы и аналитика",
        desc: "Основы экономики, бюджетирование, управленческий анализ, расчёт окупаемости и оценка финансовых результатов.",
      },
      {
        title: "Управление командой",
        desc: "Деловые коммуникации, переговоры, разрешение конфликтов, мотивация сотрудников и развитие лидерских качеств.",
      },
      {
        title: "Предпринимательство",
        desc: "Разработка бизнес-моделей (Lean Canvas), исследование потребностей клиентов (CustDev) и защита стартап-идей.",
      },
      {
        title: "Цифровые инструменты",
        desc: "Управление проектами в Notion, Trello, Jira, работа с большими таблицами, визуализация данных и Data-Driven подход.",
      },
    ],
    modulesEn: [
      {
        title: "Management Fundamentals",
        desc: "Organizational structures, strategic and operational management, goal setting, and KPI tracking.",
      },
      {
        title: "Project Management (PM)",
        desc: "Project scope, budgeting, timeline estimation, Agile/Scrum methodologies, and risk mitigation.",
      },
      {
        title: "Business Process Optimization",
        desc: "Mapping workflows, identifying operational bottlenecks, and streamlining business operations.",
      },
      {
        title: "Finance & Data Analytics",
        desc: "Financial management basics, budgeting, managerial metrics, and ROI calculations.",
      },
      {
        title: "Team Leadership",
        desc: "Business communications, negotiation tactics, conflict resolution, motivation, and soft skills.",
      },
      {
        title: "Entrepreneurship & Innovation",
        desc: "Business model generation (Lean Canvas), customer development (CustDev), and startup pitch preparation.",
      },
      {
        title: "Digital Management Suite",
        desc: "Project tracking in Jira/Trello/Notion, spreadsheet modeling, data visualization, and Data-Driven decisions.",
      },
    ],

    skillsRu: [
      "Планировать, запускать и успешно координировать проекты",
      "Грамотно распределять задачи, сроки, бюджеты и ресурсы",
      "Анализировать бизнес-процессы и оптимизировать их",
      "Работать с финансовыми и операционными показателями",
      "Готовить качественные отчёты, презентации и управленческие выводы",
      "Организовывать продуктивную командную работу и вести переговоры",
      "Оценивать риски и принимать обоснованные решения",
      "Разрабатывать и защищать перед инвесторами бизнес-идеи",
    ],
    skillsEn: [
      "Plan, initiate, and coordinate complex multi-disciplinary projects",
      "Allocate tasks, timelines, budgets, and human resources effectively",
      "Analyze business processes and implement efficiency improvements",
      "Manage key financial metrics and operational performance indicators",
      "Prepare clear management reports, presentations, and strategic recommendations",
      "Foster team collaboration, handle negotiations, and lead people",
      "Evaluate business risks and make data-informed managerial decisions",
      "Develop business models and pitch startup ideas to stakeholders",
    ],

    howItWorksRu: "Разбор бизнес-кейсов, командные презентации, участие в Студенческом парламенте, Enactus и бизнес-олимпиадах. Каждый студент получает индивидуальный ноутбук.",
    howItWorksEn: "Case study analysis, team presentations, participation in Student Parliament, Enactus, and business cups. Every student receives a dedicated personal laptop.",

    practiceRu: "Управление реальными студенческими и коммерческими проектами, разработка стартапов, участие в кейс-чемпионатах.",
    practiceEn: "Managing real student and commercial initiatives, launching social startups, and participating in case competitions.",

    careerRu: ["Менеджер проектов (Project Manager)", "Младший бизнес-аналитик", "Scrum-мастер / Координатор", "Операционный специалист", "Предприниматель / Основатель стартапа"],
    careerEn: ["Project Manager", "Junior Business Analyst", "Scrum Master / Coordinator", "Operations Specialist", "Entrepreneur / Startup Founder"],

    targetAudienceRu: "Программа IT Management подойдёт тем, кто любит организовывать процессы, работать с людьми, брать ответственность и превращать идеи в конкретный план действий.",
    targetAudienceEn: "Ideal for communicative individuals who enjoy organizing workflows, leading people, taking initiative, and translating ideas into actionable plans.",

    ctaBtnRu: "Подать заявку на IT Management",
    ctaBtnEn: "Apply for IT Management",
  },
  {
    id: "marketing",
    titleRu: "Маркетинг",
    titleEn: "Marketing",
    tagRu: "Цифровой маркетинг & Брендинг",
    tagEn: "Digital Marketing & Branding",
    icon: Sparkles,
    accentColor: "from-[#4a0c2a] via-rose-900 to-slate-900",
    badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
    ],
    subtitleRu: "Аналитика рынка, брендинг, Digital-продвижение и применение ИИ",
    subtitleEn: "Market analytics, branding, digital promotion, and AI integration",
    introRu: "Программа «Маркетинг» готовит специалистов, способных изучать рынок, понимать потребности аудитории и разрабатывать стратегии продвижения продуктов, услуг и брендов.\n\nСтуденты осваивают полный маркетинговый цикл: от исследования потребителей и определения целевой аудитории до создания рекламной кампании, запуска продвижения и анализа полученных результатов.",
    introEn: "The Marketing program trains experts in consumer research, brand positioning, digital advertising, content creation, and data analytics.",

    modulesRu: [
      {
        title: "Основы маркетинга",
        desc: "Принципы работы рынка, поведение потребителей, определение целевой аудитории и ценностного предложения.",
      },
      {
        title: "Исследование рынка",
        desc: "Анализ конкурентов, опросы, сбор обратной связи, обработка качественных и количественных данных.",
      },
      {
        title: "Брендинг и позиционирование",
        desc: "Создание бренда, выработка ключевого сообщения, айдентика, тональность (Tone of Voice) и коммуникации.",
      },
      {
        title: "Цифровой маркетинг (Digital)",
        desc: "SMM, контекстная и таргетированная реклама, SEO, Email-маркетинг, медиапланирование и распределение бюджетов.",
      },
      {
        title: "Контент и коммуникации",
        desc: "Разработка контент-стратегий, копирайтинг, виральные сообщения и адаптация материалов под разные каналы.",
      },
      {
        title: "Маркетинговая аналитика",
        desc: "Сквозная аналитика, расчёт ROI, конверсий, LTV, CAC и оценка влияния маркетинга на продажи.",
      },
      {
        title: "ИИ в маркетинге",
        desc: "Применение нейросетей для исследования аудитории, генерации контента, парсинга данных и гипотез.",
      },
    ],
    modulesEn: [
      {
        title: "Marketing Fundamentals",
        desc: "Market dynamics, consumer psychology, target audience profiling, and value propositions.",
      },
      {
        title: "Market Research & Insights",
        desc: "Competitor intelligence, user surveys, feedback gathering, qualitative & quantitative analytics.",
      },
      {
        title: "Branding & Positioning",
        desc: "Brand creation, identity design, core messaging, Tone of Voice, and position mapping.",
      },
      {
        title: "Digital Marketing Channels",
        desc: "SMM, targeted Ads, Google Search Ads, SEO, Email campaigns, and media planning.",
      },
      {
        title: "Content Strategy & Copywriting",
        desc: "Crafting content strategies, persuasive copywriting, viral campaigns, and multi-channel adaptation.",
      },
      {
        title: "Marketing Analytics",
        desc: "End-to-end analytics, tracking ROI, CAC, LTV, conversion funnels, and revenue attribution.",
      },
      {
        title: "AI Tools for Marketers",
        desc: "Leveraging AI for customer research, copy generation, creative testing, and automation.",
      },
    ],

    skillsRu: [
      "Проводить исследования рынка, трендов и конкурентов",
      "Определять и глубоко сегментировать целевую аудиторию",
      "Разрабатывать комплексную маркетинговую стратегию",
      "Формировать позиционирование и айдентику бренда",
      "Создавать контент-планы и продающие рекламные сообщения",
      "Планировать и запускать продвижение в соцсетях и поиске",
      "Анализировать рекламные показатели и окупаемость (ROI)",
      "Использовать нейросети (ИИ) для ускорения маркетинговых задач",
    ],
    skillsEn: [
      "Conduct thorough market, trend, and competitor research",
      "Identify and segment target consumer groups",
      "Formulate comprehensive marketing and growth strategies",
      "Build brand positioning and visual communications",
      "Draft content calendars and high-converting ad copy",
      "Plan and execute campaigns across social media and search engines",
      "Analyze advertising metrics, conversion rates, and ROI",
      "Utilize AI tools to optimize research, creation, and workflow",
    ],

    howItWorksRu: "Создание реальных рекламных концептов, брендинг-кейсы, маркетинговая поддержка проектов Enactus и колледжа. Каждому студенту выдаётся индивидуальный ноутбук.",
    howItWorksEn: "Creating real campaign concepts, brand books, marketing support for Enactus and college events. Every student receives a personal laptop.",

    practiceRu: "Запуск рекламных кампаний, командная работа со студентами направлений «Программная инженерия» и «Дизайн», участие в конкурсах.",
    practiceEn: "Running live ad campaigns, cross-functional projects with Developers and Designers, competing in marketing hackathons.",

    careerRu: ["SMM-специалист / Content Manager", "Digital-маркетолог", "Ассистент бренд-менеджера", "Младший маркетинговый аналитик", "Специалист по контекстной/таргетированной рекламе"],
    careerEn: ["SMM Specialist / Content Manager", "Digital Marketer", "Assistant Brand Manager", "Junior Marketing Analyst", "Targeted / Search Ad Specialist"],

    targetAudienceRu: "Маркетинг подойдёт креативным, общительным студентам, которым интересно сочетать аналитику, психологическое поведение людей и творческие решения.",
    targetAudienceEn: "For creative and curious individuals who like combining consumer psychology, analytics, and compelling messaging.",

    ctaBtnRu: "Подать заявку на Маркетинг",
    ctaBtnEn: "Apply for Marketing",
  },
  {
    id: "industrial-design",
    titleRu: "Промышленный дизайн",
    titleEn: "Industrial Design",
    tagRu: "3D-моделирование & Проектирование",
    tagEn: "3D Modeling & Product Design",
    icon: Palette,
    accentColor: "from-[#042f2e] via-teal-900 to-slate-900",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
    coverImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
    ],
    subtitleRu: "Создание физических и цифровых продуктов от идеи и 3D-модели до прототипа",
    subtitleEn: "Creating physical and digital products from sketch to 3D prototype",
    introRu: "Программа «Промышленный дизайн» готовит специалистов на стыке искусства, инженерии и современных технологий. Студенты учатся разрабатывать эргономичные, эстетичные и функциональные объекты — от гаджетов и умных устройств до элементов интерьера и потребительских товаров.\n\nОбучение охватывает весь путь: от идеи и эскиза на бумаге до 3D-моделирования в CAD и изготовления физических прототипов.",
    introEn: "The Industrial Design program equips students with skills at the intersection of art, engineering, and technology to design functional, aesthetic physical and digital products.",

    modulesRu: [
      {
        title: "Эскизирование и скетчинг",
        desc: "Быстрая визуализация идей, подача концептов, законы формы, пропорций и эргономики.",
      },
      {
        title: "3D-моделирование и CAD",
        desc: "Проектирование в SolidWorks, Rhino, Blender, подготовка поверхностей и параметрических моделей.",
      },
      {
        title: "Материаловедение и производство",
        desc: "Изучение свойств пластиков, металлов, композитов, технологии прототипирования и 3D-печати.",
      },
      {
        title: "UX/UI и продуктовый дизайн",
        desc: "Проектирование взаимодействия человека с объектом, сенсорных интерфейсов и умных гаджетов.",
      },
      {
        title: "Проектная работа",
        desc: "Создание полноценных прототипов, макетирование, проведение испытаний и презентация продукта.",
      },
    ],
    modulesEn: [
      {
        title: "Product Sketching & Concept Art",
        desc: "Rapid visualization of ideas, forms, proportions, and human ergonomics.",
      },
      {
        title: "3D CAD Modeling",
        desc: "Industrial modeling in SolidWorks, Rhino, and Blender with parametric surface design.",
      },
      {
        title: "Materials & Rapid Prototyping",
        desc: "Properties of plastics, metals, composites, 3D printing technologies, and manufacturing processes.",
      },
      {
        title: "Hardware UX/UI",
        desc: "Human-device interaction design, physical controls, touch interfaces, and smart gadgets.",
      },
      {
        title: "Prototype Development",
        desc: "Building physical working prototypes, testing ergonomics, and pitching design solutions.",
      },
    ],

    skillsRu: [
      "Создавать профессиональные эскизы и концептуальные скетчи объектов",
      "Разрабатывать сложнейшие 3D-модели в CAD-системах",
      "Учитывать параметры эргономики, удобства и безопасности использования",
      "Работать с 3D-принтерами и оборудованием прототипирования",
      "Подбирать подходящие материалы и технологии производства",
      "Интегрировать физический дизайн с цифровыми интерфейсами (UX/UI)",
      "Доводить устройство от первого чертежа до готового макета",
    ],
    skillsEn: [
      "Draw professional sketches and physical object concepts",
      "Build complex 3D parametric CAD models",
      "Incorporate human ergonomics, usability, and safety guidelines",
      "Operate 3D printers and prototyping equipment",
      "Select appropriate industrial materials and manufacturing techniques",
      "Integrate physical product shell with digital UX/UI interfaces",
      "Take hardware products from early draft to finished prototype",
    ],

    howItWorksRu: "Работа в дизайнеро-инженерных мастерских, 3D-печать, физическое макетирование и визуализация. Каждому студенту выдаётся индивидуальный ноутбук.",
    howItWorksEn: "Workshops in design studios, 3D printing labs, physical modeling, and rendering. Every student receives a dedicated personal laptop.",

    practiceRu: "Проектирование реальных образцов устройств, совместная разработка корпусов для IT-продуктов с инженерами DevClub.",
    practiceEn: "Designing real device enclosures, collaboration with DevClub software engineers for IoT hardware products.",

    careerRu: ["Промышленный дизайнер", "3D-моделлер / CAD-инженер", "Продуктовый дизайнер (Product Designer)", "Дизайнер потребительских товаров / гаджетов"],
    careerEn: ["Industrial Designer", "3D Modeler / CAD Engineer", "Product Designer", "Hardware Consumer Product Designer"],

    targetAudienceRu: "Для тех, кто хочет придумывать и создавать реальные вещи, развивать пространственное мышление и объединять технологичность с эстетикой.",
    targetAudienceEn: "For students who want to invent physical products, cultivate spatial vision, and blend engineering with aesthetics.",

    ctaBtnRu: "Подать заявку на Промышленный дизайн",
    ctaBtnEn: "Apply for Industrial Design",
  },
];

export default function Academics() {
  const { programId } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ru") ? "ru" : "en";

  const [activeTab, setActiveTab] = useState(programId || "software-engineering");
  const [selectedProgramModal, setSelectedProgramModal] = useState(null);
  const navContainerRef = useRef(null);
  const isManualClickRef = useRef(false);

  useEffect(() => {
    if (programId && PROGRAMS_DATA.some((p) => p.id === programId)) {
      setActiveTab(programId);
      const element = document.getElementById(programId);
      if (element) {
        const yOffset = -130;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [programId]);

  // Robust scroll listener to track active section accurately during manual scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isManualClickRef.current) return;

      const scrollPosition = window.scrollY + 200;
      let currentSection = PROGRAMS_DATA[0].id;

      for (const prog of PROGRAMS_DATA) {
        const el = document.getElementById(prog.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentSection = prog.id;
          }
        }
      }

      setActiveTab(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll active tab pill inside the top sub-nav bar so it follows movement
  useEffect(() => {
    if (navContainerRef.current) {
      const activeBtn = navContainerRef.current.querySelector(`[data-tab="${activeTab}"]`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    isManualClickRef.current = true;

    const element = document.getElementById(tabId);
    if (element) {
      const yOffset = -130;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setTimeout(() => {
      isManualClickRef.current = false;
    }, 850);
  };

  const handleApplyClick = () => {
    navigate("/admissions");
  };

  return (
    <div className="page pt-[124px] pb-16 text-slate-900">
      {/* ── Fixed Sub-Navigation Bar at TOP of Screen ── */}
      <nav className="fixed top-[64px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80">
        <div ref={navContainerRef} className="max-w-5xl mx-auto flex items-center gap-2 overflow-x-auto px-4 sm:px-6 lg:px-8 py-2.5 no-scrollbar">
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none;}`}</style>
          {PROGRAMS_DATA.map((prog) => {
            const title = lang === "ru" ? prog.titleRu : prog.titleEn;
            return (
              <button
                key={prog.id}
                data-tab={prog.id}
                onClick={() => handleTabChange(prog.id)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === prog.id
                    ? "bg-n-blue text-white shadow-sm"
                    : "bg-slate-100/90 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {title}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── Main Container ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-n-blue text-xs font-semibold uppercase tracking-wider border border-blue-100">
            <GraduationCap className="w-4 h-4" />
            <span>{lang === "ru" ? "Образовательные программы E|C" : "E|C Academic Programs"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {lang === "ru" ? "Направления обучения" : "Fields of Study"}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {lang === "ru"
              ? "Практико-ориентированное среднее профессиональное образование с преподаванием на английском языке, разработкой реальных проектов и поддержкой ведущих компаний."
              : "Practice-oriented secondary professional education taught in English, featuring real project engineering and industry support."}
          </p>
        </div>

        {/* ── Educational Program Cards (Full Continuous Feed) ── */}
        <div className="space-y-16">
          {PROGRAMS_DATA.map((prog) => {
            const IconComp = prog.icon;
            const title = lang === "ru" ? prog.titleRu : prog.titleEn;
            const subtitle = lang === "ru" ? prog.subtitleRu : prog.subtitleEn;
            const intro = lang === "ru" ? prog.introRu : prog.introEn;
            const tag = lang === "ru" ? prog.tagRu : prog.tagEn;
            const ctaBtn = lang === "ru" ? prog.ctaBtnRu : prog.ctaBtnEn;
            const modules = lang === "ru" ? prog.modulesRu : prog.modulesEn;
            const skills = lang === "ru" ? prog.skillsRu : prog.skillsEn;
            const howItWorks = lang === "ru" ? prog.howItWorksRu : prog.howItWorksEn;
            const practice = lang === "ru" ? prog.practiceRu : prog.practiceEn;
            const careers = lang === "ru" ? prog.careerRu : prog.careerEn;
            const targetAudience = lang === "ru" ? prog.targetAudienceRu : prog.targetAudienceEn;

            return (
              <div
                key={prog.id}
                id={prog.id}
                className="scroll-mt-36 bg-white rounded-3xl border border-slate-200 shadow-custom overflow-hidden transition-all hover:shadow-xl"
              >
                {/* Header Banner */}
                <div className={`bg-gradient-to-r ${prog.accentColor} p-6 sm:p-10 text-white relative overflow-hidden`}>
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-3xl cursor-pointer" onClick={() => setSelectedProgramModal(prog)}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white border border-white/20 hover:bg-white/25 transition-colors">
                        <IconComp className="w-4 h-4" />
                        <span>{tag}</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight hover:text-amber-300 transition-colors flex items-center gap-3">
                        <span>{title}</span>
                        <Info className="w-6 h-6 text-amber-300 shrink-0 opacity-80" />
                      </h2>
                      <p className="text-sm sm:text-base text-slate-200 font-medium">
                        {subtitle}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProgramModal(prog)}
                        className="shrink-0 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 font-bold px-5 py-3 rounded-2xl transition-all active:scale-95 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <Info className="w-4.5 h-4.5 text-amber-300" />
                        <span>{lang === "ru" ? "Подробнее о программе" : "Program Details"}</span>
                      </button>

                      <button
                        onClick={handleApplyClick}
                        className="shrink-0 bg-white text-slate-900 font-bold px-6 py-3 rounded-2xl hover:bg-slate-100 transition-transform active:scale-95 shadow-lg text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>{ctaBtn}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-10 space-y-10">
                  {/* Photo & Intro Section */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-8 space-y-4">
                      {intro.split("\n\n").map((paragraph, idx) => (
                        <p key={idx} className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Program Main Cover Image */}
                    <div className="md:col-span-4 overflow-hidden rounded-2xl border border-slate-200 shadow-sm relative group">
                      <img
                        src={prog.coverImage}
                        alt={title}
                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80";
                        }}
                      />
                    </div>
                  </div>

                  {/* Photo Gallery Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    {prog.photos.map((imgUrl, imgIdx) => (
                      <div key={imgIdx} className="overflow-hidden rounded-2xl border border-slate-200 h-36 sm:h-44 relative group">
                        <img
                          src={imgUrl}
                          alt={`${title} photo ${imgIdx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80";
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* ── 1.Что входит в программу ── */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <span>{lang === "ru" ? "Что входит в программу:" : "Curriculum Modules:"}</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {modules.map((mod, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-blue-300 transition-colors"
                        >
                          <div className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center font-bold">
                              {idx + 1}
                            </span>
                            <span>{mod.title}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                            {mod.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── 2. Чему научится студент ── */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <Target className="w-5 h-5 text-emerald-600" />
                      <span>{lang === "ru" ? "Чему научится студент:" : "Key Learning Outcomes:"}</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {skills.map((skill, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── 3. Как проходит обучение & Практика ── */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* How learning happens */}
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                        <Laptop className="w-5 h-5 text-indigo-600" />
                        <span>{lang === "ru" ? "Как проходит обучение" : "Learning Process"}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {howItWorks}
                      </p>
                    </div>

                    {/* Practice & Career Growth */}
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                        <Rocket className="w-5 h-5 text-purple-600" />
                        <span>{lang === "ru" ? "Практика и развитие" : "Practice & Projects"}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {practice}
                      </p>
                    </div>
                  </div>

                  {/* ── 4. Карьерные возможности & Кому подойдет ── */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Career options */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                        <span>{lang === "ru" ? "Карьерные возможности:" : "Career Pathways:"}</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {careers.map((car, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 text-xs font-semibold"
                          >
                            {car}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Target Audience */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                        <Users className="w-4 h-4 text-amber-600" />
                        <span>{lang === "ru" ? "Кому подойдёт направление:" : "Who Should Apply:"}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-amber-50/50 p-4 rounded-xl border border-amber-200/60">
                        {targetAudience}
                      </p>
                    </div>
                  </div>


                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── PROGRAM DETAIL MODAL ── */}
      {selectedProgramModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-200 no-scrollbar">
            {/* Close button */}
            <button
              onClick={() => setSelectedProgramModal(null)}
              className="absolute top-4 right-4 z-20 bg-slate-900/60 hover:bg-slate-900 text-white p-2.5 rounded-full transition-colors backdrop-blur-md cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Banner */}
            <div className={`bg-gradient-to-r ${selectedProgramModal.accentColor} p-6 sm:p-10 text-white relative overflow-hidden`}>
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-amber-300 border border-white/20">
                  <selectedProgramModal.icon className="w-4 h-4" />
                  <span>{lang === "ru" ? selectedProgramModal.tagRu : selectedProgramModal.tagEn}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  {lang === "ru" ? selectedProgramModal.titleRu : selectedProgramModal.titleEn}
                </h2>
                <p className="text-sm sm:text-base text-slate-200 font-medium">
                  {lang === "ru" ? selectedProgramModal.subtitleRu : selectedProgramModal.subtitleEn}
                </p>
              </div>

              {/* Quick Facts Badges */}
              <div className="mt-6 flex flex-wrap gap-2.5 text-xs sm:text-sm font-semibold">
                <span className="px-3.5 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20">
                  ⏱️ {lang === "ru" ? "Срок обучения: 4 года" : "Duration: 4 Years"}
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20">
                  🎓 {lang === "ru" ? "Диплом о среднем профессиональном образовании" : "Secondary Professional Education Diploma"}
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20">
                  🌐 {lang === "ru" ? "Язык: Английский / Русский" : "Language: English / Russian"}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10 space-y-8 text-slate-800">
              {/* Intro */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-n-blue" />
                  <span>{lang === "ru" ? "Подробное описание программы" : "Detailed Program Overview"}</span>
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {lang === "ru" ? selectedProgramModal.introRu : selectedProgramModal.introEn}
                </p>
              </div>

              {/* Modules Breakdown */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-n-blue" />
                  <span>{lang === "ru" ? "Ключевые учебные модули" : "Core Curriculum Modules"}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(lang === "ru" ? selectedProgramModal.modulesRu : selectedProgramModal.modulesEn).map((mod, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                      <span className="text-xs font-bold text-n-blue uppercase tracking-wider">
                        {lang === "ru" ? `Модуль 0${idx + 1}` : `Module 0${idx + 1}`}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900">{mod.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{mod.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competencies */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>{lang === "ru" ? "Чему научится студент" : "Learning Outcomes"}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(lang === "ru" ? selectedProgramModal.skillsRu : selectedProgramModal.skillsEn).map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/70 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practice & Laptop */}
              <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-3">
                <div className="flex items-center gap-2 text-n-blue font-bold text-sm sm:text-base">
                  <Laptop className="w-5 h-5" />
                  <span>{lang === "ru" ? "Выдача оборудования & Практика" : "Laptops & Industry Practice"}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {lang === "ru" ? selectedProgramModal.howItWorksRu : selectedProgramModal.howItWorksEn}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {lang === "ru" ? selectedProgramModal.practiceRu : selectedProgramModal.practiceEn}
                </p>
              </div>

              {/* Career Opportunities */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-n-blue" />
                  <span>{lang === "ru" ? "Кем сможет работать выпускник" : "Career Opportunities"}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(lang === "ru" ? selectedProgramModal.careerRu : selectedProgramModal.careerEn).map((role, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
                      💼 {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProgramModal(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-xs sm:text-sm text-slate-700 transition-colors cursor-pointer"
                >
                  {lang === "ru" ? "Закрыть" : "Close"}
                </button>

                <button
                  onClick={() => {
                    setSelectedProgramModal(null);
                    handleApplyClick();
                  }}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-n-blue hover:bg-blue-700 font-bold text-xs sm:text-sm text-white shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
                >
                  <span>{lang === "ru" ? "Подать заявку на программу" : "Apply for Program"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
