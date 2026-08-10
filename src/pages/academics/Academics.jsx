import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ContactTelegram from "../../components/contact/ContactTelegram";
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
    introEn: "The Software Engineering program trains specialists capable of designing, developing, testing, and maintaining modern software products. Students study not only programming languages but also the complete software creation lifecycle—from problem analysis and system design to deploying the finished solution.\n\nTraining begins with fundamental principles and gradually progresses to the development of more complex applications. This approach enables students to understand the internal logic of software systems, independently find solutions, and adapt to emerging technologies.",

    modulesRu: [
      {
        title: "Основы программирования",
        desc: "Студенты изучают алгоритмы, структуры данных, логику программирования и принципы объектно-ориентированной разработки. Эти знания формируют основу, необходимую для освоения разных языков программирования и технологических направлений.",
      },
      {
        title: "Разработка цифровых продуктов",
        desc: "Программа охватывает веб-разработку, создание клиентской и серверной частей приложений, работу с базами данных и программными интерфейсами. Студенты учатся связывать различные компоненты системы и создавать продукты, способные обрабатывать, хранить и передавать информацию.",
      },
      {
        title: "Качество и надёжность",
        desc: "Отдельное внимание уделяется тестированию, поиску и исправлению ошибок, основам информационной безопасности и сопровождению программного обеспечения. Студенты знакомятся с системами контроля версий, принципами развёртывания приложений и основами DevOps.",
      },
      {
        title: "Командная разработка",
        desc: "Создание программного продукта редко бывает индивидуальной работой. Поэтому студенты учатся анализировать требования, распределять задачи, документировать решения, контролировать изменения и представлять результаты своей работы. Это помогает понять, как устроены процессы внутри профессиональной команды разработчиков.",
      },
      {
        title: "Искусственный интеллект в разработке",
        desc: "Искусственный интеллект является важной частью программы. Студенты изучают его не только как вспомогательный инструмент, но и как технологию, которую можно интегрировать в собственные цифровые продукты.\nСначала они учатся грамотно использовать ИИ для анализа задач, написания и проверки кода, тестирования, поиска ошибок и подготовки технической документации. Затем переходят к интеграции готовых ИИ-сервисов в сайты и приложения — для обработки информации, автоматизации процессов и создания интеллектуальных функций.\nНа более продвинутом уровне студенты знакомятся с принципами машинного обучения, подготовкой данных, обучением и оценкой моделей. Полученные знания позволяют им разрабатывать собственные решения на основе искусственного интеллекта и понимать, как интеллектуальные системы создаются, работают и внедряются в реальные продукты.\nТаким образом, студент проходит путь от уверенного пользователя ИИ-инструментов до разработчика, способного проектировать и создавать интеллектуальные программные решения.",
      },
    ],
    modulesEn: [
      {
        title: "Foundations of Programming",
        desc: "Students study algorithms, data structures, programming logic, and object-oriented development principles. This knowledge forms the foundation necessary for mastering different programming languages and technology domains.",
      },
      {
        title: "Digital Product Development",
        desc: "The program covers web development, building client and server sides of applications, working with databases and APIs. Students learn to connect various system components and create products capable of processing, storing, and transmitting information.",
      },
      {
        title: "Quality and Reliability",
        desc: "Special attention is given to testing, debugging, information security fundamentals, and software maintenance. Students become familiar with version control systems, deployment principles, and DevOps basics.",
      },
      {
        title: "Team Development",
        desc: "Creating a software product is rarely an individual effort. Therefore, students learn to analyze requirements, distribute tasks, document decisions, manage changes, and present their work. This helps them understand the processes within a professional development team.",
      },
      {
        title: "Artificial Intelligence in Development",
        desc: "Artificial intelligence is an important part of the program. Students study it not only as an auxiliary tool but also as a technology they can integrate into their own digital products.\nInitially, they learn to use AI effectively for task analysis, code writing and review, testing, bug detection, and technical documentation preparation. Then they move on to integrating ready-made AI services into websites and applications—for information processing, process automation, and creating intelligent features.\nAt a more advanced level, students explore machine learning principles, data preparation, model training, and evaluation. The knowledge gained allows them to develop their own AI-based solutions and understand how intelligent systems are built, operate, and are deployed in real products.\nThus, students progress from confident users of AI tools to developers capable of designing and creating intelligent software solutions.",
      },
    ],

    skillsRu: [
      "Анализировать задачу и проектировать техническое решение",
      "Создавать веб-приложения и другие цифровые продукты",
      "Работать с базами данных и серверной частью системы",
      "Тестировать программы, находить ошибки и улучшать код",
      "Использовать профессиональные инструменты совместной разработки",
      "Применять ИИ в процессе разработки и интегрировать его в приложения",
      "Создавать собственные интеллектуальные программные решения",
      "Доводить проект от первоначальной идеи до работающего прототипа",
    ],
    skillsEn: [
      "Analyze a problem and design a technical solution",
      "Create web applications and other digital products",
      "Work with databases and server-side components",
      "Test programs, find bugs, and improve code",
      "Use professional collaborative development tools",
      "Apply AI in the development process and integrate it into applications",
      "Build their own intelligent software solutions",
      "Take a project from initial idea to a working prototype",
    ],

    howItWorksRu: "Теоретические знания сразу закрепляются практическими заданиями. Сначала студенты создают небольшие программы и отдельные элементы приложений, а затем переходят к более комплексным индивидуальным и командным проектам.\n\nЭто веб-сервисы, мобильные приложения, образовательные платформы, системы учёта, решения для автоматизации бизнес-процессов и продукты с элементами искусственного интеллекта. Во время работы над проектами студенты проходят основные этапы разработки: изучают задачу, определяют требования, проектируют систему, пишут код, проводят тестирование и представляют готовый результат.\n\nКаждый студент получает индивидуальный ноутбук, который используется во время занятий и для самостоятельной работы над проектами.",
    howItWorksEn: "Theoretical knowledge is immediately reinforced with practical assignments. Students first create small programs and individual application components, then move on to more comprehensive individual and team projects.\n\nThese include web services, mobile applications, educational platforms, inventory systems, business process automation solutions, and products with AI elements. During project work, students go through the main development stages: studying the problem, defining requirements, designing the system, writing code, testing, and presenting the final result.\n\nEach student receives a personal laptop, used during classes and for independent project work.",

    practiceRu: "Полученные знания можно развивать в DevClub, где студенты работают над задачами, приближенными к коммерческой разработке. Участники получают технические задания, распределяют роли в команде, соблюдают сроки и доводят проекты до рабочего состояния.\n\nDevClub действует при поддержке APRD. Сотрудничество помогает студентам познакомиться с требованиями индустрии, получать обратную связь от специалистов и готовиться к первой профессиональной стажировке.\n\nСтуденты, которым интересны алгоритмы и решение сложных задач, также могут участвовать в подготовке к ICPC и другим соревнованиям по программированию. Такая подготовка развивает аналитическое мышление, скорость принятия решений и навыки командной работы.",
    practiceEn: "Students can further develop their skills in DevClub, where they work on tasks close to commercial development. Participants receive technical assignments, divide roles within the team, meet deadlines, and bring projects to a working state.\n\nDevClub operates with the support of APRD. This collaboration helps students become familiar with industry requirements, receive feedback from professionals, and prepare for their first professional internship.\n\nStudents interested in algorithms and solving complex problems can also participate in preparation for ICPC and other programming competitions. Such training develops analytical thinking, decision‑making speed, and teamwork skills.",

    resultRu: "За время обучения студент формирует портфолио из индивидуальных и командных проектов, получает опыт работы с профессиональными инструментами и понимает полный цикл создания программного продукта.\n\nВыпускник способен не только написать отдельный фрагмент кода, но и разобраться в задаче, предложить техническое решение, реализовать его и проверить качество готового продукта. Он также понимает возможности искусственного интеллекта и умеет применять его при создании современных цифровых решений.\n\nПолученная база позволяет начать профессиональное развитие в IT, работать над собственными проектами или продолжить образование в области программной инженерии, компьютерных наук и искусственного интеллекта.",
    resultEn: "During their studies, students build a portfolio of individual and team projects, gain experience with professional tools, and understand the complete software product lifecycle.\n\nGraduates are able not only to write a piece of code but also to understand a problem, propose a technical solution, implement it, and verify the quality of the finished product. They also grasp AI capabilities and know how to apply them in creating modern digital solutions.\n\nThe acquired foundation allows them to start a professional career in IT, work on their own projects, or continue their education in software engineering, computer science, or artificial intelligence.",

    careerRu: ["Программист", "Junior-разработчик", "Front-end разработчик", "Back-end разработчик", "Разработчик мобильных приложений", "QA-инженер", "AI-разработчик", "Full-stack разработчик", "DevOps-инженер"],
    careerEn: ["Programmer", "Junior Developer", "Front-end Developer", "Back-end Developer", "Mobile Application Developer", "QA Engineer", "AI Developer", "Full-stack Developer", "DevOps Engineer"],

    targetAudienceRu: "Программная инженерия подойдёт тем, кто интересуется технологиями, любит решать логические задачи и хочет создавать собственные цифровые продукты. Предварительный опыт в программировании не обязателен: программа начинается с базовых принципов и постепенно подводит студентов к самостоятельной разработке.",
    targetAudienceEn: "Software Engineering is suitable for those interested in technology, who enjoy solving logic problems, and want to create their own digital products. Prior programming experience is not required: the program begins with basic principles and gradually leads students to independent development.",

    ctaBtnRu: "Подать заявку на программу",
    ctaBtnEn: "Apply for Program",
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
    introRu: "Программа «Кибербезопасность» готовит специалистов, способных защищать компьютерные системы, сети и данные от современных цифровых угроз. Студенты изучают, как возникают уязвимости, какими методами проводятся кибератаки и какие технологии используются для их обнаружения и предотвращения.\n\nОбучение начинается с устройства компьютерных систем, операционных систем и сетей, а затем переходит к практическим направлениям информационной безопасности. Студенты учатся оценивать защищённость цифровой инфраструктуры, анализировать подозрительную активность и принимать меры для снижения рисков.",
    introEn: "The Cybersecurity program trains specialists capable of protecting computer systems, networks, and data from modern digital threats. Students study how vulnerabilities arise, the methods used in cyberattacks, and the technologies employed to detect and prevent them.\n\nTraining begins with the architecture of computer systems, operating systems, and networks, then moves to practical areas of information security. Students learn to assess the security of digital infrastructure, analyse suspicious activity, and take measures to reduce risks.",

    modulesRu: [
      {
        title: "Компьютерные системы и сети",
        desc: "Чтобы эффективно защищать цифровую инфраструктуру, необходимо понимать, как она устроена. Студенты изучают операционные системы, компьютерные сети, сетевые протоколы, основы программирования и администрирования. Эти знания помогают определять, где могут возникнуть уязвимости и как их устранить.",
      },
      {
        title: "Защита систем и данных",
        desc: "Программа охватывает управление доступом, защиту сетей и устройств, безопасную настройку систем, основы криптографии и методы защиты конфиденциальной информации. Студенты учатся выстраивать многоуровневую систему безопасности и снижать вероятность несанкционированного доступа.",
      },
      {
        title: "Этичный хакинг",
        desc: "Для построения надёжной защиты важно понимать методы, которыми пользуются злоумышленники. Студенты знакомятся с принципами этичного хакинга, анализом уязвимостей и тестированием на проникновение.\nВсе практические задания выполняются исключительно в контролируемой учебной среде и в рамках профессиональных и правовых норм. Цель обучения — научиться находить слабые места раньше злоумышленников и предлагать способы их устранения.",
      },
      {
        title: "Мониторинг и реагирование на инциденты",
        desc: "Студенты учатся анализировать журналы событий, выявлять подозрительную активность и определять признаки возможной атаки. Они знакомятся с основами мониторинга безопасности, расследования инцидентов, локализации угроз и восстановления работы системы.",
      },
      {
        title: "Управление рисками",
        desc: "Кибербезопасность включает не только техническую защиту, но и организационные процессы. Студенты учатся оценивать риски, разрабатывать правила безопасной работы, анализировать человеческий фактор и формировать рекомендации по защите информации в организации.",
      },
    ],
    modulesEn: [
      {
        title: "Computer Systems and Networks",
        desc: "To effectively protect digital infrastructure, one must understand how it works. Students study operating systems, computer networks, network protocols, programming basics, and system administration. This knowledge helps identify where vulnerabilities may arise and how to eliminate them.",
      },
      {
        title: "System and Data Protection",
        desc: "The program covers access control, network and device protection, secure system configuration, cryptography fundamentals, and methods for safeguarding confidential information. Students learn to build multi‑layer security and reduce the risk of unauthorised access.",
      },
      {
        title: "Ethical Hacking",
        desc: "To build robust protection, it is essential to understand the methods used by attackers. Students become familiar with ethical hacking principles, vulnerability analysis, and penetration testing.\nAll practical exercises are conducted exclusively in controlled educational environments and within professional and legal frameworks. The goal is to learn how to find weaknesses before attackers do and to propose ways to fix them.",
      },
      {
        title: "Monitoring and Incident Response",
        desc: "Students learn to analyse event logs, detect suspicious activity, and identify signs of potential attacks. They study the basics of security monitoring, incident investigation, threat containment, and system recovery.",
      },
      {
        title: "Risk Management",
        desc: "Cybersecurity involves not only technical protection but also organisational processes. Students learn to assess risks, develop secure working policies, analyse human factors, and formulate recommendations for information protection within an organisation.",
      },
    ],

    skillsRu: [
      "Понимать устройство компьютерных сетей и операционных систем",
      "Выявлять и анализировать уязвимости",
      "Настраивать базовую защиту систем, сетей и данных",
      "Проводить тестирование безопасности в контролируемой среде",
      "Анализировать сетевую активность и журналы событий",
      "Распознавать признаки кибератак и инцидентов",
      "Оценивать риски и предлагать меры по их снижению",
      "Составлять технические отчёты и рекомендации по безопасности",
    ],
    skillsEn: [
      "Understand the structure of computer networks and operating systems",
      "Identify and analyse vulnerabilities",
      "Configure basic protection for systems, networks, and data",
      "Conduct security testing in a controlled environment",
      "Analyse network traffic and event logs",
      "Recognise signs of cyberattacks and incidents",
      "Assess risks and propose mitigation measures",
      "Write technical reports and security recommendations",
    ],

    howItWorksRu: "Теоретические знания закрепляются лабораторными работами, практическими заданиями и разбором реальных сценариев. Студенты работают в специально подготовленной цифровой среде, где могут безопасно изучать поведение сетей, моделировать угрозы и проверять эффективность различных способов защиты.\n\nПрактические задания могут включать поиск уязвимостей в учебной системе, настройку прав доступа, анализ подозрительного сетевого трафика, расследование смоделированного инцидента и разработку плана защиты организации.\n\nКаждый студент получает индивидуальный ноутбук, который используется для обучения, работы с виртуальными средами и выполнения практических проектов.",
    howItWorksEn: "Theoretical knowledge is reinforced through lab work, practical assignments, and real‑world scenario analysis. Students work in a specially prepared digital environment where they can safely study network behaviour, model threats, and test the effectiveness of various protection methods.\n\nPractical tasks may include finding vulnerabilities in a training system, configuring access rights, analysing suspicious network traffic, investigating a simulated incident, and developing an organisational protection plan.\n\nEach student receives a personal laptop, used for learning, working with virtual environments, and completing practical projects.",

    practiceRu: "По мере обучения студенты переходят от отдельных лабораторных заданий к комплексным проектам. Они могут проводить аудит защищённости учебной сети, разрабатывать политику информационной безопасности, настраивать систему мониторинга или создавать план реагирования на киберинциденты.\n\nРабота над такими проектами помогает научиться не только пользоваться инструментами, но и профессионально представлять результаты: описывать обнаруженные риски, определять их критичность и предлагать обоснованные меры защиты.\n\nСпециалист по кибербезопасности работает с конфиденциальной информацией и получает доступ к критически важным системам. Поэтому в программе особое внимание уделяется ответственности, профессиональной этике и законному использованию полученных знаний. Студенты учатся действовать по установленным процедурам, документировать свои действия и понимать возможные последствия технических решений.",
    practiceEn: "As they progress, students move from individual lab assignments to comprehensive projects. They may conduct a security audit of a training network, develop an information security policy, set up a monitoring system, or create an incident response plan.\n\nWorking on such projects helps them learn not only to use tools but also to present results professionally: describe identified risks, determine their criticality, and propose justified protection measures.\n\nA cybersecurity specialist works with confidential information and gains access to critical systems. Therefore, the program places special emphasis on responsibility, professional ethics, and the lawful use of acquired knowledge. Students learn to follow established procedures, document their actions, and understand the potential consequences of technical decisions.",

    resultRu: "За время обучения студент формирует практическое портфолио, в которое могут входить результаты лабораторных работ, отчёты по анализу уязвимостей, проекты по защите сетей и планы реагирования на инциденты.\n\nВыпускник понимает принципы построения защищённых систем, способен выявлять базовые угрозы, оценивать риски и принимать обоснованные меры для защиты информации. Полученная база позволяет начать профессиональное развитие в сфере кибербезопасности или продолжить образование в области информационной безопасности, компьютерных сетей и IT.",
    resultEn: "During their studies, students build a practical portfolio that may include lab results, vulnerability analysis reports, network security projects, and incident response plans.\n\nGraduates understand the principles of building secure systems, can identify basic threats, assess risks, and take informed measures to protect information. The foundation they gain allows them to begin a professional career in cybersecurity or continue their education in information security, computer networks, or IT.",

    careerRu: ["Специалист по кибербезопасности", "Junior SOC-аналитик", "Аналитик информационной безопасности", "Инженер по сетевой безопасности", "Специалист по защите сетей и систем", "Специалист по тестированию на проникновение", "Специалист по реагированию на инциденты", "Консультант по безопасности"],
    careerEn: ["Cybersecurity Specialist", "Junior SOC Analyst", "Information Security Analyst", "Network Security Engineer", "Penetration Testing Specialist", "Incident Response Specialist", "Security Consultant"],

    targetAudienceRu: "Кибербезопасность подойдёт тем, кто интересуется технологиями, внимательно относится к деталям и любит разбираться в сложных системах. В этой сфере особенно важны аналитическое мышление, ответственность, любознательность и готовность постоянно изучать новые типы угроз.\n\nПредварительный опыт в кибербезопасности не обязателен: обучение начинается с основ компьютерных систем и сетей, после чего студенты постепенно переходят к профессиональным методам защиты.",
    targetAudienceEn: "Cybersecurity is suitable for those interested in technology, who pay close attention to details and enjoy analysing complex systems. In this field, analytical thinking, responsibility, curiosity, and a willingness to constantly learn about new types of threats are especially important.\n\nPrior experience in cybersecurity is not required: training starts with the basics of computer systems and networks, then gradually moves to professional protection methods.",

    ctaBtnRu: "Подать заявку на программу",
    ctaBtnEn: "Apply for Program",
  },
  {
    id: "management-in-it",
    titleRu: "Менеджмент",
    titleEn: "Management",
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
    introRu: "Программа «Менеджмент» готовит специалистов, способных организовывать работу команд, управлять проектами и совершенствовать бизнес-процессы. Студенты учатся ставить цели, планировать ресурсы, распределять задачи, контролировать результаты и принимать решения на основе данных.\n\nОбучение сочетает знания в области бизнеса, экономики и управления с развитием лидерских, аналитических и коммуникативных навыков. Особое внимание уделяется практическим ситуациям: студенты работают с бизнес-кейсами, разрабатывают проекты и учатся решать задачи, с которыми менеджеры сталкиваются в реальных организациях.",
    introEn: "The Management program trains specialists capable of organising team work, managing projects, and improving business processes. Students learn to set goals, plan resources, allocate tasks, monitor results, and make data‑driven decisions.\n\nThe training combines knowledge in business, economics, and management with the development of leadership, analytical, and communication skills. Special attention is given to practical scenarios: students work with business cases, develop projects, and learn to solve problems that managers face in real organisations.",

    modulesRu: [
      {
        title: "Основы управления",
        desc: "Студенты изучают, как устроены организации, какие функции выполняют руководители и как принимаются управленческие решения. Они знакомятся со стратегическим и операционным управлением, постановкой целей, распределением ответственности и оценкой результатов.",
      },
      {
        title: "Управление проектами",
        desc: "Программа охватывает основные этапы проекта: от определения цели и требований до планирования сроков, бюджета, команды и контроля выполнения. Студенты учатся разбивать сложную задачу на этапы, определять приоритеты, работать с рисками и представлять результаты заинтересованным сторонам.",
      },
      {
        title: "Бизнес-процессы и операции",
        desc: "Студенты анализируют, как внутри организации движутся информация, ресурсы и задачи. Они учатся находить проблемы и потери времени, определять причины неэффективности и предлагать улучшения, которые помогают компании работать быстрее и качественнее.",
      },
      {
        title: "Финансы и аналитика",
        desc: "Будущий менеджер должен понимать экономические последствия своих решений. Поэтому студенты изучают основы финансов, бюджетирования и управленческого анализа, учатся работать с показателями, сравнивать возможные варианты и оценивать результаты проекта или подразделения.",
      },
      {
        title: "Управление командой",
        desc: "Программа развивает навыки деловой коммуникации, ведения переговоров, разрешения конфликтов и организации командной работы. Студенты учатся давать обратную связь, мотивировать участников проекта и создавать условия, в которых команда может эффективно достигать общей цели.",
      },
      {
        title: "Предпринимательство и развитие бизнеса",
        desc: "Студенты знакомятся с основами предпринимательства, разработкой бизнес-моделей и проверкой бизнес-идей. Они учатся изучать потребности клиентов, анализировать рынок, рассчитывать необходимые ресурсы и превращать идею в структурированный проект.",
      },
      {
        title: "Цифровые инструменты управления",
        desc: "Современный менеджер работает с большим объёмом информации и должен уметь использовать цифровые инструменты для планирования, координации и анализа.\nСтуденты учатся организовывать задачи, контролировать сроки, работать с таблицами и отчётами, визуализировать показатели и готовить управленческие решения на основе данных. Это помогает эффективно управлять проектами как в традиционном бизнесе, так и в технологических компаниях.",
      },
    ],
    modulesEn: [
      {
        title: "Foundations of Management",
        desc: "Students study how organisations are structured, what functions managers perform, and how management decisions are made. They learn about strategic and operational management, goal setting, responsibility allocation, and performance evaluation.",
      },
      {
        title: "Project Management",
        desc: "The program covers the main stages of a project: from defining goals and requirements to planning timelines, budgets, team composition, and execution monitoring. Students learn to break down complex tasks into phases, set priorities, manage risks, and present results to stakeholders.",
      },
      {
        title: "Business Processes and Operations",
        desc: "Students analyse how information, resources, and tasks flow within an organisation. They learn to identify problems and inefficiencies, determine root causes, and propose improvements that help the company work faster and with higher quality.",
      },
      {
        title: "Finance and Analytics",
        desc: "A future manager must understand the economic consequences of their decisions. Therefore, students study the basics of finance, budgeting, and management analysis, learn to work with metrics, compare options, and evaluate the outcomes of a project or department.",
      },
      {
        title: "Team Management",
        desc: "The program develops skills in business communication, negotiation, conflict resolution, and team organisation. Students learn to give feedback, motivate team members, and create conditions in which the team can effectively achieve a common goal.",
      },
      {
        title: "Entrepreneurship and Business Development",
        desc: "Students become familiar with entrepreneurship basics, business model development, and idea validation. They learn to study customer needs, analyse markets, estimate required resources, and turn an idea into a structured project.",
      },
      {
        title: "Digital Management Tools",
        desc: "Modern managers work with large amounts of information and must use digital tools for planning, coordination, and analysis.\nStudents learn to organise tasks, track deadlines, work with spreadsheets and reports, visualise metrics, and prepare data‑driven management decisions. This helps them manage projects effectively in both traditional business and technology companies.",
      },
    ],

    skillsRu: [
      "Планировать и координировать проекты",
      "Распределять задачи, сроки и ресурсы",
      "Анализировать бизнес-процессы и находить возможности для улучшения",
      "Работать с основными финансовыми и операционными показателями",
      "Готовить отчёты, презентации и управленческие рекомендации",
      "Организовывать командную работу и деловую коммуникацию",
      "Оценивать риски и принимать обоснованные решения",
      "Разрабатывать и презентовать бизнес-идеи",
    ],
    skillsEn: [
      "Plan and coordinate projects",
      "Allocate tasks, timelines, and resources",
      "Analyse business processes and identify improvement opportunities",
      "Work with key financial and operational metrics",
      "Prepare reports, presentations, and management recommendations",
      "Organise teamwork and business communication",
      "Assess risks and make informed decisions",
      "Develop and present business ideas",
    ],

    howItWorksRu: "Теоретические знания закрепляются практическими заданиями, бизнес-кейсами, командными проектами и презентациями. Студенты получают задачу, анализируют ситуацию, распределяют роли, составляют план действий и защищают предложенное решение.\n\nПроекты могут включать разработку бизнес-плана, организацию мероприятия, запуск нового продукта, анализ работы компании, улучшение бизнес-процесса или создание концепции собственного стартапа.\n\nКаждый студент получает индивидуальный ноутбук, который используется для анализа данных, подготовки проектов, совместной работы и создания презентаций.",
    howItWorksEn: "Theoretical knowledge is reinforced with practical assignments, business cases, team projects, and presentations. Students receive a task, analyse the situation, allocate roles, devise an action plan, and defend their proposed solution.\n\nProjects may include developing a business plan, organising an event, launching a new product, analysing a company’s operations, improving a business process, or creating a startup concept.\n\nEach student receives a personal laptop, used for data analysis, project preparation, collaborative work, and creating presentations.",

    practiceRu: "Студенты применяют управленческие знания не только на занятиях, но и в реальных проектах, студенческих организациях и бизнес-соревнованиях.\n\nРабота в Студенческом парламенте позволяет участвовать в организации мероприятий, координировать команды, представлять интересы студентов и реализовывать собственные инициативы. Такой опыт развивает ответственность, лидерские качества, навыки переговоров и принятия решений.\n\nВ проектах Enactus студенты работают над предпринимательскими и социальными инициативами: исследуют проблему, разрабатывают решение, формируют бизнес-модель, распределяют роли и представляют проект экспертам.\n\nСтуденты также могут участвовать в бизнес-олимпиадах, конкурсах стартапов и других проектных соревнованиях, где необходимо анализировать кейсы, предлагать стратегии и защищать свои решения.\n\nБлагодаря этому они получают опыт управления проектами в разных условиях — от внутренней жизни колледжа до командных соревнований и предпринимательских инициатив.",
    practiceEn: "Students apply their management knowledge not only in class but also in real projects, student organisations, and business competitions.\n\nWorking in the Student Parliament allows them to participate in event organisation, coordinate teams, represent student interests, and implement their own initiatives. This experience builds responsibility, leadership, negotiation skills, and decision‑making abilities.\n\nIn Enactus projects, students work on entrepreneurial and social initiatives: they research a problem, develop a solution, build a business model, assign roles, and present the project to experts.\n\nStudents can also participate in business Olympiads, startup competitions, and other project‑based contests where they must analyse cases, propose strategies, and defend their solutions.\n\nThrough these activities, they gain experience in managing projects in various settings—from college life to team competitions and entrepreneurial ventures.",

    resultRu: "За время обучения студент формирует портфолио, в которое могут входить бизнес-планы, проектная документация, аналитические отчёты, модели бизнес-процессов и командные проекты.\n\nВыпускник понимает, как устроена работа организации, умеет планировать деятельность, взаимодействовать с командой и принимать решения на основе информации. Он готов начать профессиональное развитие в бизнесе, технологической компании, общественной организации или работать над собственным предпринимательским проектом.",
    resultEn: "During their studies, students build a portfolio that may include business plans, project documentation, analytical reports, business process models, and team projects.\n\nGraduates understand how an organisation operates, can plan activities, interact with teams, and make informed decisions. They are ready to start a professional career in business, technology companies, non‑profit organisations, or work on their own entrepreneurial projects.",

    careerRu: ["Координатор проектов", "Ассистент менеджера", "Специалист по работе с клиентами", "Операционный специалист", "Сотрудник отдела развития бизнеса", "Младший бизнес-аналитик", "Менеджер проектов", "Руководитель команды"],
    careerEn: ["Project Coordinator", "Manager Assistant", "Client Relations Specialist", "Operations Specialist", "Business Development Associate", "Junior Business Analyst", "Project Manager", "Team Leader"],

    targetAudienceRu: "Менеджмент подойдёт тем, кто любит организовывать процессы, работать с людьми, брать ответственность и превращать идеи в конкретный план действий. В этой сфере особенно важны инициативность, коммуникабельность, аналитическое мышление и способность видеть общую картину.\n\nПредварительный опыт управления не обязателен: обучение начинается с базовых принципов бизнеса и постепенно переходит к самостоятельной работе над проектами.",
    targetAudienceEn: "Management is suitable for those who enjoy organising processes, working with people, taking responsibility, and turning ideas into concrete action plans. In this field, initiative, communication skills, analytical thinking, and the ability to see the big picture are especially important.\n\nPrior management experience is not required: training starts with basic business principles and gradually moves to independent project work.",

    ctaBtnRu: "Подать заявку на программу",
    ctaBtnEn: "Apply for Program",
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
    subtitleRu: "Исследование рынка, брендинг, Digital-продвижение и применение ИИ",
    subtitleEn: "Market analytics, branding, digital promotion, and AI integration",
    introRu: "Программа «Маркетинг» готовит специалистов, способных изучать рынок, понимать потребности аудитории и разрабатывать стратегии продвижения продуктов, услуг и брендов.\n\nСтуденты осваивают полный маркетинговый цикл: от исследования потребителей и определения целевой аудитории до создания рекламной кампании, запуска продвижения и анализа полученных результатов. Обучение сочетает стратегическое мышление, творчество, работу с данными и современные цифровые инструменты.",
    introEn: "The Marketing program trains specialists capable of researching markets, understanding audience needs, and developing strategies to promote products, services, and brands.\n\nStudents master the complete marketing cycle: from consumer research and target audience definition to creating advertising campaigns, launching promotions, and analysing results. The training combines strategic thinking, creativity, data work, and modern digital tools.",

    modulesRu: [
      {
        title: "Основы маркетинга",
        desc: "Студенты изучают принципы работы рынка, поведение потребителей и факторы, влияющие на выбор продукта. Они учатся определять целевую аудиторию, понимать её потребности и формировать предложение, которое представляет для неё реальную ценность.",
      },
      {
        title: "Исследование рынка",
        desc: "Эффективный маркетинг начинается с информации. Студенты учатся анализировать рынок и конкурентов, проводить опросы, собирать обратную связь и работать с количественными и качественными данными. На основе исследования они определяют возможности для развития продукта и принимают более обоснованные маркетинговые решения.",
      },
      {
        title: "Брендинг и позиционирование",
        desc: "Программа охватывает основы создания и развития бренда. Студенты учатся формулировать ценности, характер и ключевое сообщение бренда, определять его позицию на рынке и поддерживать единый стиль коммуникации с аудиторией.",
      },
      {
        title: "Цифровой маркетинг",
        desc: "Студенты знакомятся с основными каналами продвижения в цифровой среде: социальными сетями, интернет-рекламой, поисковыми системами, сайтами, электронной почтой и другими онлайн-платформами. Они учатся выбирать подходящие каналы, планировать рекламные кампании, распределять бюджет и оценивать эффективность продвижения.",
      },
      {
        title: "Контент и коммуникации",
        desc: "Контент помогает бренду привлекать внимание, объяснять ценность продукта и выстраивать отношения с аудиторией. Студенты учатся разрабатывать контент-стратегии, составлять планы публикаций, создавать рекламные сообщения и адаптировать коммуникацию под разные платформы.",
      },
      {
        title: "Маркетинговая аналитика",
        desc: "Студенты учатся работать с показателями, сравнивать результаты кампаний и определять, какие действия действительно помогают бизнесу расти. Аналитика позволяет не просто запускать рекламу, а понимать её влияние на узнаваемость бренда, интерес аудитории и продажи.",
      },
      {
        title: "Искусственный интеллект и цифровые инструменты",
        desc: "Современный маркетолог должен уметь работать с технологиями, которые помогают быстрее анализировать информацию, создавать материалы и персонализировать коммуникацию.\nСтуденты учатся использовать искусственный интеллект для исследования аудитории, генерации и проверки идей, подготовки черновых вариантов контента, анализа данных и автоматизации отдельных маркетинговых задач.\nПри этом особое внимание уделяется качеству информации, авторскому контролю и ответственному использованию технологий. ИИ рассматривается как профессиональный инструмент, который усиливает работу маркетолога, но не заменяет стратегическое мышление и понимание аудитории.",
      },
    ],
    modulesEn: [
      {
        title: "Foundations of Marketing",
        desc: "Students study market principles, consumer behaviour, and factors influencing product choice. They learn to define target audiences, understand their needs, and formulate offerings that provide real value.",
      },
      {
        title: "Market Research",
        desc: "Effective marketing starts with information. Students learn to analyse markets and competitors, conduct surveys, gather feedback, and work with quantitative and qualitative data. Based on research, they identify opportunities for product development and make more informed marketing decisions.",
      },
      {
        title: "Branding and Positioning",
        desc: "The program covers the basics of brand creation and development. Students learn to articulate brand values, personality, and key messages, define its market position, and maintain a consistent communication style with the audience.",
      },
      {
        title: "Digital Marketing",
        desc: "Students become familiar with major promotion channels in the digital environment: social media, online advertising, search engines, websites, email, and other online platforms. They learn to choose appropriate channels, plan advertising campaigns, allocate budgets, and evaluate promotion effectiveness.",
      },
      {
        title: "Content and Communications",
        desc: "Content helps a brand attract attention, explain product value, and build relationships with the audience. Students learn to develop content strategies, create publication plans, craft advertising messages, and adapt communication for different platforms.",
      },
      {
        title: "Marketing Analytics",
        desc: "Students learn to work with metrics, compare campaign results, and determine which actions truly help the business grow. Analytics allows them not just to run ads but to understand their impact on brand awareness, audience interest, and sales.",
      },
      {
        title: "Artificial Intelligence and Digital Tools",
        desc: "Modern marketers must be able to work with technologies that help analyse information faster, create materials, and personalise communication.\nStudents learn to use AI for audience research, idea generation and validation, drafting content, data analysis, and automating certain marketing tasks.\nAt the same time, special attention is paid to information quality, authorial control, and responsible use of technology. AI is viewed as a professional tool that enhances the marketer’s work but does not replace strategic thinking and audience understanding.",
      },
    ],

    skillsRu: [
      "Проводить исследование рынка и конкурентов",
      "Определять и сегментировать целевую аудиторию",
      "Разрабатывать маркетинговую стратегию",
      "Формировать позиционирование и коммуникацию бренда",
      "Создавать контент-планы и рекламные сообщения",
      "Планировать продвижение в цифровых каналах",
      "Работать с маркетинговыми показателями и анализировать результаты",
      "Использовать ИИ и цифровые инструменты в маркетинговых задачах",
      "Презентовать и аргументированно защищать свои решения",
    ],
    skillsEn: [
      "Conduct market and competitor research",
      "Define and segment target audiences",
      "Develop a marketing strategy",
      "Shape brand positioning and communication",
      "Create content plans and advertising messages",
      "Plan promotion across digital channels",
      "Work with marketing metrics and analyse results",
      "Use AI and digital tools in marketing tasks",
      "Present and convincingly defend their decisions",
    ],

    howItWorksRu: "Теоретические знания закрепляются практическими заданиями, анализом реальных брендов, бизнес-кейсами и командными проектами. Студенты учатся работать с конкретной задачей: исследуют аудиторию, анализируют конкурентов, разрабатывают стратегию, создают контент и определяют показатели эффективности.\n\nУчебные проекты включают в себя разработку рекламных кампаний, создание концепции бренда, подготовку стратегии продвижения в социальных сетях, исследование потребителей или маркетинговый план запуска нового продукта.\n\nКаждый студент получает индивидуальный ноутбук, который используется для исследований, подготовки контента, анализа данных, командной работы и презентации проектов.",
    howItWorksEn: "Theoretical knowledge is reinforced with practical assignments, real‑brand analysis, business cases, and team projects. Students work on a specific task: researching the audience, analysing competitors, developing a strategy, creating content, and defining performance indicators.\n\nTraining projects include developing advertising campaigns, creating a brand concept, preparing a social media promotion strategy, conducting consumer research, or drafting a marketing plan for a new product launch.\n\nEach student receives a personal laptop, used for research, content creation, data analysis, team collaboration, and project presentations.",

    practiceRu: "Студенты могут применять знания в проектах Enactus, бизнес-олимпиадах, конкурсах стартапов и других проектных соревнованиях. В таких командах маркетолог отвечает за исследование аудитории, позиционирование продукта, коммуникационную стратегию и подготовку презентации проекта.\n\nУчастие в реальных инициативах колледжа также позволяет получить опыт продвижения мероприятий, разработки информационных кампаний и работы с различными группами аудитории.\n\nСовместные проекты со студентами направлений «Менеджмент», «Дизайн» и «Программная инженерия» помогают понять, как маркетолог взаимодействует с другими специалистами при создании и запуске продукта.",
    practiceEn: "Students can apply their knowledge in Enactus projects, business Olympiads, startup competitions, and other project‑based contests. In such teams, the marketer is responsible for audience research, product positioning, communication strategy, and project presentation.\n\nParticipation in college initiatives also provides experience in promoting events, developing information campaigns, and working with diverse audience groups.\n\nJoint projects with students from Management, Design, and Software Engineering help them understand how a marketer interacts with other specialists when creating and launching a product.",

    resultRu: "За время обучения студент формирует портфолио, в которое могут входить маркетинговые исследования, стратегии продвижения, контент-планы, концепции брендов, рекламные материалы и аналитические отчёты.\n\nВыпускник понимает, как исследовать рынок, находить целевую аудиторию, формировать ценность продукта и выбирать подходящие каналы продвижения. Он умеет сочетать творческие решения с аналитикой и оценивать маркетинг по конкретным результатам.\n\nПолученная база позволяет начать профессиональное развитие в компании, рекламном агентстве, стартапе, общественной организации или продвигать собственный проект.",
    resultEn: "During their studies, students build a portfolio that may include marketing research, promotion strategies, content plans, brand concepts, advertising materials, and analytical reports.\n\nGraduates understand how to research markets, find target audiences, formulate product value, and choose appropriate promotion channels. They can combine creative solutions with analytics and evaluate marketing by tangible results.\n\nThe foundation gained allows them to start a professional career in a company, advertising agency, startup, non‑profit organisation, or to promote their own project.",

    careerRu: ["Ассистент маркетолога", "Junior-маркетолог", "SMM-специалист", "Контент-менеджер", "Специалист по цифровому продвижению", "Младший маркетинговый аналитик", "Бренд-менеджер", "Продуктовый маркетолог"],
    careerEn: ["Marketing Assistant", "Junior Marketer", "SMM Specialist", "Content Manager", "Digital Promotion Specialist", "Junior Marketing Analyst", "Brand Manager", "Product Marketer"],

    targetAudienceRu: "Маркетинг подойдёт тем, кто интересуется психологией людей, трендами, коммуникациями и медиа. В этой профессии важны любознательность, креативность, аналитический склад ума и желание понимать, почему люди делают свой выбор.\n\nПредварительный опыт в маркетинге не обязателен: обучение начинается с фундаментальных понятий и постепенно переходит к реальным практическим проектам.",
    targetAudienceEn: "Marketing is suitable for those interested in human behaviour, modern brands, advertising, and digital technologies. In this field, curiosity, communication skills, creative thinking, and a willingness to work with data are important.\n\nPrior experience is not required: training starts with basic marketing principles and gradually moves to independent strategy and campaign development.",

    ctaBtnRu: "Подать заявку на программу",
    ctaBtnEn: "Apply for Program",
  },
  {
    id: "industrial-design",
    titleRu: "Дизайн",
    titleEn: "Design",
    tagRu: "Графический дизайн, UI/UX & Брендинг",
    tagEn: "Graphic Design, UI/UX & Branding",
    icon: Palette,
    accentColor: "from-[#042f2e] via-teal-900 to-slate-900",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
    coverImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80",
    ],
    subtitleRu: "Создание визуальных решений для брендов, цифровых продуктов и коммуникаций",
    subtitleEn: "Creating visual solutions for brands, digital products, and communications",
    introRu: "Программа «Дизайн» готовит специалистов, способных создавать визуальные решения для брендов, цифровых продуктов и коммуникаций. Студенты учатся не только работать с графическими инструментами, но и понимать задачу, исследовать аудиторию, формировать концепцию и превращать её в функциональный дизайн.\n\nОбучение сочетает творческий подход, визуальную культуру и современные технологии. Студенты проходят полный процесс работы дизайнера: от анализа задачи и поиска идеи до создания макета, прототипирования, тестирования и презентации готового решения.",
    introEn: "The Design program trains specialists capable of creating visual solutions for brands, digital products, and communications. Students learn not only to use graphic tools but also to understand the task, research the audience, form a concept, and turn it into functional design.\n\nThe training combines creative approach, visual culture, and modern technology. Students go through the full designer workflow: from task analysis and idea exploration to creating layouts, prototyping, testing, and presenting the final solution.",

    modulesRu: [
      {
        title: "Основы визуального дизайна",
        desc: "Студенты изучают композицию, цвет, форму, типографику и визуальную иерархию. Они учатся управлять вниманием зрителя, выстраивать понятную структуру и создавать визуальные решения, в которых эстетика поддерживает содержание.",
      },
      {
        title: "Графический дизайн",
        desc: "Программа охватывает работу с растровой и векторной графикой, создание макетов для цифровой и печатной среды, оформление социальных сетей, рекламных материалов, презентаций и информационных носителей.\nСтуденты подбирают формат и визуальный язык в зависимости от задачи, аудитории и канала коммуникации.",
      },
      {
        title: "Брендинг и визуальная идентичность",
        desc: "Студенты осваивают процесс создания бренда: исследуют аудиторию и конкурентов, формируют визуальную концепцию, разрабатывают логотип, цветовую палитру, типографику и правила использования фирменного стиля.\nРезультатом становится целостная визуальная система, которая передаёт характер бренда и сохраняет узнаваемость в разных форматах.",
      },
      {
        title: "UI/UX-дизайн",
        desc: "В рамках цифрового дизайна студенты проектируют интерфейсы сайтов и мобильных приложений. Они изучают потребности пользователей, разрабатывают структуру продукта, создают пользовательские сценарии, прототипы и визуальные макеты.\nОсобое внимание уделяется удобству, логике и доступности интерфейса. Дизайнерские решения принимаются на основе задач пользователя, а не только личных визуальных предпочтений.",
      },
      {
        title: "Моушн-дизайн",
        desc: "Студенты изучают основы анимации и создания динамического контента. Они используют движение для объяснения информации, привлечения внимания и усиления визуальной коммуникации.\nЭти навыки применяются при создании рекламных роликов, материалов для социальных сетей, презентаций, интерфейсов и других цифровых продуктов.",
      },
      {
        title: "Искусственный интеллект и инструменты дизайнера",
        desc: "Искусственный интеллект используется как дополнительный инструмент для поиска идей, разработки визуальных направлений, подготовки черновых вариантов и ускорения отдельных этапов работы.\nСтуденты учатся правильно формулировать запросы, оценивать качество полученных результатов и дорабатывать материалы в соответствии с задачей, стилем бренда и потребностями аудитории.\nОсобое внимание уделяется авторскому контролю, оригинальности и этичному использованию технологий. ИИ не заменяет дизайнера: итоговое решение требует профессионального отбора, композиционного мышления и осознанной работы с визуальной системой.",
      },
    ],
    modulesEn: [
      {
        title: "Foundations of Visual Design",
        desc: "Students study composition, colour, form, typography, and visual hierarchy. They learn to direct the viewer’s attention, build clear structure, and create visual solutions where aesthetics support content.",
      },
      {
        title: "Graphic Design",
        desc: "The program covers raster and vector graphics, layout creation for digital and print media, social media design, advertising materials, presentations, and informational media. Students choose the format and visual language based on the task, audience, and communication channel.",
      },
      {
        title: "Branding and Visual Identity",
        desc: "Students learn the process of brand creation: researching the audience and competitors, forming a visual concept, designing logos, colour palettes, typography, and guidelines for using the corporate style. The result is a cohesive visual system that conveys the brand’s character and maintains recognisability across different formats.",
      },
      {
        title: "UI/UX Design",
        desc: "Within digital design, students create interfaces for websites and mobile applications. They study user needs, develop product structure, create user scenarios, prototypes, and visual mockups. Special emphasis is placed on usability, logic, and accessibility. Design decisions are based on user goals, not just personal visual preferences.",
      },
      {
        title: "Motion Design",
        desc: "Students learn the basics of animation and dynamic content creation. They use motion to explain information, attract attention, and enhance visual communication. These skills are applied in creating promotional videos, social media content, presentations, interfaces, and other digital products.",
      },
      {
        title: "Artificial Intelligence and Designer Tools",
        desc: "Artificial intelligence is used as an additional tool for idea generation, exploring visual directions, preparing drafts, and accelerating certain stages of work. Students learn to formulate prompts correctly, evaluate the quality of generated results, and refine materials according to the task, brand style, and audience needs. Particular attention is given to authorial control, originality, and ethical use of technology. AI does not replace the designer: the final decision requires professional selection, compositional thinking, and conscious work with the visual system.",
      },
    ],

    skillsRu: [
      "Работать с композицией, цветом, формой и типографикой",
      "Создавать графические материалы для цифровой и печатной среды",
      "Разрабатывать логотипы и системы визуальной идентичности",
      "Проектировать интерфейсы сайтов и мобильных приложений",
      "Исследовать потребности пользователей и создавать прототипы",
      "Разрабатывать анимацию и динамический контент",
      "Использовать профессиональные цифровые и ИИ-инструменты",
      "Презентовать и аргументированно защищать дизайнерские решения",
    ],
    skillsEn: [
      "Work with composition, colour, form, and typography",
      "Create graphic materials for digital and print media",
      "Design logos and visual identity systems",
      "Design interfaces for websites and mobile applications",
      "Research user needs and create prototypes",
      "Develop animation and dynamic content",
      "Use professional digital and AI tools",
      "Present and convincingly defend design solutions",
    ],

    howItWorksRu: "Теоретические знания закрепляются практическими заданиями и проектами. Сначала студенты осваивают визуальные основы и профессиональные инструменты, а затем переходят к работе над комплексными задачами.\n\nУчебные проекты включают разработку фирменного стиля, проектирование интерфейса мобильного приложения, оформление рекламной кампании, создание серии публикаций для социальных сетей, дизайн сайта и подготовку анимационного ролика.\n\nСтуденты получают обратную связь, анализируют свои решения и дорабатывают проекты. Такой процесс формирует профессиональный подход, при котором дизайн оценивается не только по внешнему виду, но и по тому, насколько эффективно он решает поставленную задачу.\n\nКаждый студент получает индивидуальный ноутбук, который используется для работы с графикой, интерфейсами, анимацией и формирования собственного портфолио.",
    howItWorksEn: "Theoretical knowledge is reinforced with practical assignments and projects. Students first master visual fundamentals and professional tools, then move on to complex tasks.\n\nTraining projects include developing a corporate identity, designing a mobile app interface, creating an advertising campaign layout, producing a series of social media posts, designing a website, and preparing an animated video.\n\nStudents receive feedback, analyse their decisions, and refine their projects. This process fosters a professional approach where design is evaluated not only by appearance but also by how effectively it solves the given task.\n\nEach student receives a personal laptop, used for graphic work, interfaces, animation, and building their own portfolio.",

    practiceRu: "Дополнительную практику студенты получают через участие в проектах Enactus, конкурсах стартапов, бизнес-олимпиадах и других проектных соревнованиях. В таких командах дизайнер отвечает за визуальную концепцию, презентацию продукта, интерфейс и коммуникационные материалы.\n\nСовместная работа со студентами направлений «Программная инженерия», «Маркетинг» и «Менеджмент» показывает, как создаётся реальный продукт. Дизайнер учится учитывать требования разработчиков, задачи маркетинга и цели бизнеса.\n\nРабота над инициативами колледжа также даёт опыт выполнения конкретного задания, соблюдения сроков, взаимодействия с заказчиком и ответственности за итоговый результат.",
    practiceEn: "Students gain additional practice by participating in Enactus projects, startup competitions, business Olympiads, and other project‑based contests. In such teams, the designer is responsible for the visual concept, product presentation, interface, and communication materials.\n\nCollaboration with students from Software Engineering, Marketing, and Management shows how a real product is created. The designer learns to consider developer requirements, marketing objectives, and business goals.\n\nWorking on college initiatives also provides experience in fulfilling specific assignments, meeting deadlines, interacting with clients, and taking responsibility for the final result.",

    resultRu: "За время обучения студент формирует профессиональное портфолио. В него входят проекты по графическому дизайну, брендингу, UI/UX, рекламе и анимации.\n\nВыпускник умеет анализировать задачу, разрабатывать визуальную концепцию, создавать макеты и представлять готовое решение. Он понимает весь процесс работы дизайнера — от первоначальной идеи до подготовки продукта к публикации или передаче в разработку.\n\nПортфолио и полученные навыки создают основу для работы в дизайн-студии, рекламном агентстве, технологической компании, стартапе или над собственными проектами.",
    resultEn: "During their studies, students build a professional portfolio containing graphic design, branding, UI/UX, advertising, and animation projects.\n\nGraduates can analyse a task, develop a visual concept, create layouts, and present the final solution. They understand the entire designer workflow—from initial idea to preparing the product for publication or handover to development.\n\nThe portfolio and acquired skills provide a foundation for working in a design studio, advertising agency, technology company, startup, or on their own projects.",

    careerRu: ["Графический дизайнер", "Junior UI/UX-дизайнер", "Визуальный дизайнер", "Контент-дизайнер", "Специалист по оформлению цифровых материалов", "Продуктовый дизайнер", "Бренд-дизайнер", "Моушн-дизайнер"],
    careerEn: ["Graphic Designer", "Junior UI/UX Designer", "Visual Designer", "Content Designer", "Digital Media Specialist", "Product Designer", "Brand Designer", "Motion Designer"],

    targetAudienceRu: "Дизайн подойдёт тем, кто интересуется визуальной культурой, технологиями и созданием новых идей. В этой профессии важны наблюдательность, внимание к деталям, готовность принимать обратную связь и умение смотреть на задачу с позиции пользователя.\n\nПрофессионально рисовать до поступления не обязательно. Обучение начинается с основ визуального языка и постепенно переходит к работе над полноценными дизайнерскими проектами.",
    targetAudienceEn: "Design is suitable for those interested in visual culture, technology, and creating new ideas. In this profession, observation, attention to detail, openness to feedback, and the ability to view tasks from the user’s perspective are important.\n\nProfessional drawing skills are not required prior to admission. Training starts with the basics of visual language and gradually moves to full‑scale design projects.",

    ctaBtnRu: "Подать заявку на программу",
    ctaBtnEn: "Apply for Program",
  },
];

export default function Academics({ initialProgram }) {
  const { programId } = useParams();
  const effectiveProgramId = programId || initialProgram;
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ru") ? "ru" : "en";

  const [activeTab, setActiveTab] = useState(effectiveProgramId || "software-engineering");
  const [selectedProgramModal, setSelectedProgramModal] = useState(null);
  const navContainerRef = useRef(null);
  const isManualClickRef = useRef(false);

  useEffect(() => {
    const target = effectiveProgramId || "software-engineering";
    if (target && PROGRAMS_DATA.some((p) => p.id === target)) {
      setActiveTab(target);
      const timer = setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          const yOffset = window.innerWidth < 640 ? -96 : -130;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [effectiveProgramId]);

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
      const yOffset = window.innerWidth < 640 ? -96 : -130;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setTimeout(() => {
      isManualClickRef.current = false;
    }, 850);
  };

  const handleApplyClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = window.innerWidth < 640 ? -96 : -130;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      navigate("/admission#how-to-apply");
    }
  };

  return (
    <div className="page pt-[96px] sm:pt-[124px] pb-16 text-slate-900">
      {/* ── Fixed Sub-Navigation Bar at TOP of Screen ── */}
      <nav className="fixed top-[56px] sm:top-[64px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80">
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

                {/* Body Content (Shortened Summary View) */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Left Column: Image + Specs + Short Description */}
                    <div className="md:col-span-6 space-y-4">
                      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm relative group">
                        <img
                          src={prog.coverImage}
                          alt={title}
                          className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <button
                            onClick={() => setSelectedProgramModal(prog)}
                            className="text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/30"
                          >
                            {lang === "ru" ? "Смотреть галерею и детали" : "View gallery & details"}
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                        <span className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200/80">
                          ⏱️ {lang === "ru" ? "4 года" : "4 Years"}
                        </span>
                        <span className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200/80">
                          🎓 {lang === "ru" ? "Диплом СПО" : "Professional Diploma"}
                        </span>
                        <span className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200/80">
                          🌐 {lang === "ru" ? "Английский / Русский" : "English / Russian"}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {intro.split("\n\n")[0]}
                      </p>
                    </div>

                    {/* Right Column: Key Outcomes & Career Tags */}
                    <div className="md:col-span-6 space-y-5 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>{lang === "ru" ? "Главные навыки:" : "Key Learning Outcomes:"}</span>
                        </h3>
                        <div className="space-y-2">
                          {skills.slice(0, 4).map((skill, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                          <span>{lang === "ru" ? "Перспективы:" : "Career Roles:"}</span>
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {careers.slice(0, 3).map((car, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 text-xs font-semibold"
                            >
                              {car}
                            </span>
                          ))}
                          {careers.length > 3 && (
                            <span className="px-2 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold">
                              +{careers.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CRM APPLICATION BLOCK ── */}
      <ContactTelegram />

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
                {(lang === "ru" ? selectedProgramModal.introRu : selectedProgramModal.introEn).split("\n\n").map((par, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {par}
                  </p>
                ))}
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
                      {mod.desc.split("\n\n").map((dPar, dIdx) => (
                        <p key={dIdx} className="text-xs text-slate-600 leading-relaxed">{dPar}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Competencies */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>{lang === "ru" ? "Чему научится студент" : "What the Student Will Learn"}</span>
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
                  <span>{lang === "ru" ? "Выдача оборудования & Процесс обучения" : "Laptops, Practice & Professional Development"}</span>
                </div>
                {(lang === "ru" ? selectedProgramModal.howItWorksRu : selectedProgramModal.howItWorksEn).split("\n\n").map((par, idx) => (
                  <p key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {par}
                  </p>
                ))}
                <div className="pt-2 border-t border-indigo-100/80 font-bold text-xs uppercase tracking-wider text-indigo-950">
                  {lang === "ru" ? "Практика и проекты:" : "Practice & Projects:"}
                </div>
                {(lang === "ru" ? selectedProgramModal.practiceRu : selectedProgramModal.practiceEn).split("\n\n").map((par, idx) => (
                  <p key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {par}
                  </p>
                ))}
              </div>

              {/* Result & Portfolio */}
              {((lang === "ru" && selectedProgramModal.resultRu) || (lang !== "ru" && selectedProgramModal.resultEn)) && (
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/70 space-y-2">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base">
                    <Award className="w-5 h-5 text-amber-600" />
                    <span>{lang === "ru" ? "Результат обучения и портфолио" : "Learning Outcomes & Portfolio"}</span>
                  </div>
                  {(lang === "ru" ? selectedProgramModal.resultRu : selectedProgramModal.resultEn).split("\n\n").map((par, pIdx) => (
                    <p key={pIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {par}
                    </p>
                  ))}
                </div>
              )}

              {/* Target Audience / Who the Program Suits */}
              {((lang === "ru" && selectedProgramModal.targetAudienceRu) || (lang !== "ru" && selectedProgramModal.targetAudienceEn)) && (
                <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200/70 space-y-2">
                  <div className="flex items-center gap-2 text-sky-900 font-bold text-sm sm:text-base">
                    <Target className="w-5 h-5 text-sky-600" />
                    <span>{lang === "ru" ? "Кому подойдёт направление" : "Who the Program Suits"}</span>
                  </div>
                  {(lang === "ru" ? selectedProgramModal.targetAudienceRu : selectedProgramModal.targetAudienceEn).split("\n\n").map((par, pIdx) => (
                    <p key={pIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {par}
                    </p>
                  ))}
                </div>
              )}

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
