import { useEffect, useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../title/SectionTitle";

import img_Abdyldaev from "../../assets/Teachers_img/Abdyldaev_Baktyar.jpg";
import img_Aibek    from "../../assets/Teachers_img/Aibek_Doolos.JPG";
import img_Azamat   from "../../assets/Teachers_img/Azamat_Askarov.JPG";
import img_Eldar    from "../../assets/Teachers_img/Eldar.JPG";
import img_Elnazar  from "../../assets/Teachers_img/Elnazar_Ulanbek_uulu.JPG";
import img_Erbol    from "../../assets/Teachers_img/Erbol.JPG";
import img_Jyldyz   from "../../assets/Teachers_img/Jyldyz_Biigeldieva.JPG";
import img_Munara   from "../../assets/Teachers_img/Munara_Bekbolotova.JPG";
import img_Nurlan   from "../../assets/Teachers_img/Nurlan.JPG";
import img_Nurzhan  from "../../assets/Teachers_img/Nurzhan_Beksultanova.JPG";
import img_Ramil    from "../../assets/Teachers_img/Ramil_Salikhar.JPG";
import img_Zhibek   from "../../assets/Teachers_img/Zhibek_Alykulova.JPG";
import img_Zumrad   from "../../assets/Teachers_img/Zumrad_Uysal.JPG";

// ─── Field themes ────────────────────────────────────────────────────────────
const THEMES = {
  cybersecurity: {
    gradient: "linear-gradient(135deg,#0a1628 0%,#1e3a5f 55%,#0d2845 100%)",
    accent: "#3b82f6",
    soft: "#eff6ff",
    labelRu: "Кибербезопасность",
    labelEn: "Cybersecurity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z"
          stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  chemistry: {
    gradient: "linear-gradient(135deg,#052e16 0%,#065f46 55%,#047857 100%)",
    accent: "#10b981",
    soft: "#ecfdf5",
    labelRu: "Химия",
    labelEn: "Chemistry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="5" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="19" r="1.5" fill="currentColor"/>
        <circle cx="5" cy="12" r="1.5" fill="currentColor"/>
        <circle cx="19" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  software: {
    gradient: "linear-gradient(135deg,#1e1b4b 0%,#3730a3 55%,#4f46e5 100%)",
    accent: "#818cf8",
    soft: "#eef2ff",
    labelRu: "Разработка ПО",
    labelEn: "Software Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  management: {
    gradient: "linear-gradient(135deg,#451a03 0%,#92400e 55%,#b45309 100%)",
    accent: "#f59e0b",
    soft: "#fffbeb",
    labelRu: "Менеджмент",
    labelEn: "IT Management",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="10" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  english: {
    gradient: "linear-gradient(135deg,#042f2e 0%,#0f766e 55%,#0d9488 100%)",
    accent: "#14b8a6",
    soft: "#f0fdfa",
    labelRu: "Английский язык",
    labelEn: "English Language",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  backend: {
    gradient: "linear-gradient(135deg,#1e1b4b 0%,#312e81 55%,#4338ca 100%)",
    accent: "#6366f1",
    soft: "#eef2ff",
    labelRu: "Backend / CS",
    labelEn: "Backend / CS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect x="2" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="2" y="14" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="6" y1="6" x2="6.01" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="6" y1="18" x2="6.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  math: {
    gradient: "linear-gradient(135deg,#431407 0%,#9a3412 55%,#c2410c 100%)",
    accent: "#f97316",
    soft: "#fff7ed",
    labelRu: "Математика",
    labelEn: "Mathematics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="6.5" cy="6.5" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="17.5" cy="17.5" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  psychology: {
    gradient: "linear-gradient(135deg,#2d1b3d 0%,#6d28d9 55%,#7c3aed 100%)",
    accent: "#c084fc",
    soft: "#faf5ff",
    labelRu: "Психология",
    labelEn: "Psychology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M9.5 2A6.5 6.5 0 0116 8.5c0 3-1.5 5.5-3.5 7l-1 1.5H9l-1-1.5C6 13 4.5 10.5 4.5 8.5A5 5 0 019.5 2z"
          stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <line x1="9" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="10" y1="20" x2="12" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  sports: {
    gradient: "linear-gradient(135deg,#052e16 0%,#166534 55%,#15803d 100%)",
    accent: "#22c55e",
    soft: "#f0fdf4",
    labelRu: "Физическая культура",
    labelEn: "Physical Education",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 7v6m0 0l-3 4m3-4l3 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 13H6m12 0h-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  computer_literacy: {
    gradient: "linear-gradient(135deg,#0c1445 0%,#1d4ed8 55%,#2563eb 100%)",
    accent: "#38bdf8",
    soft: "#f0f9ff",
    labelRu: "Компьютерная грамотность",
    labelEn: "Computer Literacy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  literature: {
    gradient: "linear-gradient(135deg,#4a0c2a 0%,#831843 55%,#9d174d 100%)",
    accent: "#f472b6",
    soft: "#fdf2f8",
    labelRu: "Русский язык и литература",
    labelEn: "Russian Language & Literature",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 20h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  history: {
    gradient: "linear-gradient(135deg,#3b1a08 0%,#78350f 55%,#92400e 100%)",
    accent: "#fbbf24",
    soft: "#fffbeb",
    labelRu: "История и обществознание",
    labelEn: "History & Social Studies",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  kyrgyz: {
    gradient: "linear-gradient(135deg,#3b0000 0%,#7f1d1d 55%,#991b1b 100%)",
    accent: "#f87171",
    soft: "#fef2f2",
    labelRu: "Кыргызский язык и литература",
    labelEn: "Kyrgyz Language & Literature",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  military: {
    gradient: "linear-gradient(135deg,#1a2e0a 0%,#365314 55%,#4d7c0f 100%)",
    accent: "#84cc16",
    soft: "#f7fee7",
    labelRu: "Допризывная подготовка",
    labelEn: "Pre-conscription Training",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  economics: {
    gradient: "linear-gradient(135deg,#052e2e 0%,#134e4a 55%,#115e59 100%)",
    accent: "#2dd4bf",
    soft: "#f0fdfa",
    labelRu: "Экономика и финансы",
    labelEn: "Economics & Finance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  design: {
    gradient: "linear-gradient(135deg,#31103f 0%,#701a75 55%,#86198f 100%)",
    accent: "#e879f9",
    soft: "#fdf4ff",
    labelRu: "Графический дизайн",
    labelEn: "Graphic Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 16.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-3.5-5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5-5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4.5 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  marketing: {
    gradient: "linear-gradient(135deg,#701a75 0%,#a21caf 55%,#c026d3 100%)",
    accent: "#e879f9",
    soft: "#fdf4ff",
    labelRu: "Маркетинг и коммуникации",
    labelEn: "Marketing & Communications",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 5l-7 3.882M18 5a2 2 0 012 2v7a2 2 0 01-2 2M18 5l-7 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  general: {
    gradient: "linear-gradient(135deg,#1e293b 0%,#334155 55%,#475569 100%)",
    accent: "#94a3b8",
    soft: "#f8fafc",
    labelRu: "Преподаватель",
    labelEn: "Instructor",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
};

// ─── Helper to resolve localized teacher name ────────────────────────────────
const getTeacherName = (t, lang = "ru") => {
  if (!t) return "";
  if (typeof t.name === "object" && t.name !== null) {
    return t.name[lang] || t.name.ru || t.name.en || "";
  }
  return t.name || "";
};

// ─── Teacher data ─────────────────────────────────────────────────────────────
const teachers = [
  // 1. Нурлан
  {
    name: {
      ru: "Нурлан",
      en: "Nurlan",
    },
    img: img_Nurlan,
    field: "general",
    info: null,
  },
  // 2. Доолос
  {
    name: {
      ru: "Доолос Айбек уулу",
      en: "Doolos Aibek uulu",
    },
    img: img_Aibek,
    field: "cybersecurity",
    info: {
      ru: {
        position: "Заведующий учебной частью, преподаватель кибербезопасности",
        bio: "PhD в области электротехники и компьютерной инженерии (KAUST), магистр материаловедения и нанотехнологий (Bilkent University), бакалавр физики (METU).\n\nВ Инженерном колледже отвечает за академическое развитие, преподаёт кибербезопасность и готовит к SAT. Ранее — ассистент-профессор в UCA, участвовал в разработке учебных программ.\n\nАвтор публикаций в IEEE Transactions on Antennas and Propagation. Развивает аналитическое мышление и практические навыки студентов.",
      },
      en: {
        position: "Vice Principal for Academic Affairs, Cybersecurity Instructor",
        bio: "PhD in Electrical and Computer Engineering (KAUST), MSc in Materials Science and Nanotechnology (Bilkent University), BSc in Physics (METU).\n\nOversees academic quality, teaches cybersecurity, and prepares students for the SAT. Previously an Assistant Professor at UCA, contributing to curriculum design.\n\nPublished in IEEE Transactions on Antennas and Propagation. Focuses on developing analytical thinking and practical engineering skills.",
      },
    },
  },
  // 3. Зумрад
  {
    name: {
      ru: "Зумрад Уйсал",
      en: "Zumrad Uysal",
    },
    img: img_Zumrad,
    field: "english",
    info: {
      ru: {
        position: "Преподаватель английского языка",
        bio: "Магистр педагогики (MAT, AUCA). Магистр и бакалавр романо-германской филологии (КГНУ).\n\nБолее 25 лет опыта в образовании. Работала в системе «Сапат», лицее «Айчурек», Silk Road International School, лицее Айтматова. С 2023 года — на факультете педагогики в AUCA.\n\nФокусируется на развитии языковых навыков и академической поддержке студентов.",
      },
      en: {
        position: "English Language Instructor",
        bio: "Master of Arts in Teaching (AUCA). MA and BA in Romance and Germanic Philology (KGNU).\n\nOver 25 years in education. Worked in the 'Sapat' system, Bishkek Lyceum Aichurek, Silk Road International School, and Chyngyz Aitmatov Lyceum. Since 2023 at AUCA's Faculty of Pedagogy.\n\nFocuses on developing language proficiency and academic skills.",
      },
    },
  },
  // 4. Жибек
  {
    name: {
      ru: "Жибек Алыкулова",
      en: "Zhibek Alykulova",
    },
    img: img_Zhibek,
    field: "management",
    info: {
      ru: {
        position: "Руководитель программы «Менеджмент», старший преподаватель",
        bio: "Степень магистра по направлению «Менеджмент».\n\nБолее 16 лет опыта в образовании и управлении. Руководит программой «Менеджмент» в Инженерном колледже, ведёт преподавательскую, методическую и административную работу.\n\nФокусируется на развитии образовательных программ и внедрении современных технологий обучения. Сильные лидерские и организационные качества.",
      },
      en: {
        position: "Head of IT Management Program, Senior Lecturer",
        bio: "Holds a Master's degree in Management.\n\nOver 16 years of experience in education and management. Leads the IT Management program at the Engineering College, combining teaching with methodological and administrative responsibilities.\n\nFocuses on developing educational programs and implementing modern teaching approaches. Known for strong leadership and organizational skills.",
      },
    },
  },
  // 5. Жылдыз
  {
    name: {
      ru: "Жылдыз Биигелдиева",
      en: "Jyldyz Biigeldieva",
    },
    img: img_Jyldyz,
    field: "english",
    info: {
      ru: {
        position: "Преподаватель английского языка",
        bio: "Магистрант программы Curriculum & Instruction, North American University (США). Бакалавр по английскому языку и литературе (Alatoo International University) — золотая медаль, стипендия президента. Участник программы UGRAD в Berea College.\n\nБолее 10 лет международного опыта преподавания (Лаос, Кыргызстан, США). International School of Laos (Cambridge IGCSE), Silk Road International School.\n\nПрошла Cambridge CELTA, IGCSE, Oxford Training.",
      },
      en: {
        position: "English Language Instructor",
        bio: "Pursuing M.A. in Curriculum & Instruction at North American University (USA). Bachelor's in English Language & Literature, Alatoo International University — gold medal, Presidential Scholarship. UGRAD exchange at Berea College.\n\nOver 10 years of international teaching experience (Laos, Kyrgyzstan, USA). International School of Laos (Cambridge IGCSE), Silk Road International School.\n\nCompleted Cambridge CELTA, IGCSE, and Oxford training programs.",
      },
    },
  },
  // 6. Нуржан
  {
    name: {
      ru: "Нуржан Бексултанова",
      en: "Nurzhan Beksultanova",
    },
    img: img_Nurzhan,
    field: "chemistry",
    info: {
      ru: {
        position: "Преподаватель химии",
        bio: "PhD в области химии (Middle East Technical University, METU). Магистр и бакалавр по химии (METU).\n\nАссистент профессора в METU (Анкара) — преподавала студентам от начальных курсов до выпуска. Участвовала в организации международных научных конференций.\n\nАвтор и соавтор публикаций в международных журналах. Фокусируется на понятном объяснении сложных тем и индивидуальном подходе.",
      },
      en: {
        position: "Chemistry Instructor",
        bio: "PhD in Chemistry from Middle East Technical University (METU). MSc and BSc in Chemistry from METU.\n\nTeaching Assistant at METU (Ankara) — supported students from early courses to graduation. Involved in organizing international scientific conferences.\n\nAuthor and co-author of publications in international journals. Focuses on clear explanations and a student-centered approach.",
      },
    },
  },
  // 7. Мунара
  {
    name: {
      ru: "Мунара Бекболотова",
      en: "Munara Bekbolotova",
    },
    img: img_Munara,
    field: "psychology",
    info: {
      ru: {
        position: "Психолог, специалист по профориентации",
        bio: "Бакалавр психологии Istanbul University. Применяет методы КПТ, коучинг, современные инструменты профориентации. Обучается EMDR.\n\nБолее 9 лет опыта в образовательной среде. Психологическое сопровождение студентов, профориентация, диагностика, консультирование родителей.\n\nСпециализируется на подростковой психологии, развитии мягких навыков и профессиональном самоопределении.",
      },
      en: {
        position: "Psychologist, Career Guidance Specialist",
        bio: "Bachelor's in Psychology from Istanbul University. Applies CBT, coaching, and modern career guidance tools. Currently training in EMDR.\n\nOver 9 years of experience in educational and psychological settings. Student support, career guidance, psychological assessment, and parent consultation.\n\nSpecializes in adolescent psychology, soft skills development, and career orientation.",
      },
    },
  },
  // 8. Рамиль
  {
    name: {
      ru: "Рамиль Салихар",
      en: "Ramil Salikhar",
    },
    img: img_Ramil,
    field: "software",
    info: {
      ru: {
        position: "Преподаватель / Специалист по разработке ПО",
        bio: "Выпускник Университета Центральной Азии, «Компьютерные науки».\n\nБолее 3 лет коммерческого опыта в мобильной разработке: Kloop Media Foundation, ABN, HelloIT. Сооснователь IT-компании APRD. Академический опыт — ассистент профессора в исследовании развития школ в Нарыне.\n\nУчастник IPHO 2019, ICPC NERC Finals 2022. Основатель Dev Club.",
      },
      en: {
        position: "Instructor / Software Development Specialist",
        bio: "Bachelor's in Computer Science, University of Central Asia.\n\nOver 3 years of commercial mobile development experience at Kloop Media Foundation, ABN, and HelloIT. Co-founder of APRD IT company. Teaching assistant in school development research in Naryn.\n\nParticipated in IPHO 2019, ICPC NERC Finals 2022. Founded Dev Club.",
      },
    },
  },

  // ── Остальные преподаватели ───────────────────────────────────────────────────
  {
    name: {
      ru: "Азамат Аскаров",
      en: "Azamat Askarov",
    },
    img: img_Azamat,
    field: "math",
    info: {
      ru: {
        position: "Преподаватель математики, тренер по олимпиадной математике",
        bio: "Выпускник факультета искусств и наук Middle East Technical University (METU) по специальности «Математика».\n\nБолее 10 лет подготовки к олимпиадной математике. С 2015 по 2025 — главный тренер системы «Сапат». Первый представитель Кыргызстана, завоевавший серебряную медаль на IMO 2010.\n\nОснователь математического кружка для учащихся 6–11 классов.",
      },
      en: {
        position: "Mathematics Instructor, Olympiad Coach",
        bio: "Graduate of the Faculty of Arts and Sciences at METU with a degree in Mathematics.\n\nOver 10 years of olympiad mathematics coaching. Head Coach at 'Sapat' from 2015–2025. First from Kyrgyzstan to win a silver medal at the International Mathematical Olympiad (IMO 2010).\n\nFounded a mathematics club for students in grades 6–11.",
      },
    },
  },
  {
    name: {
      ru: "Эльдар Уланов",
      en: "Eldar Ulanov",
    },
    img: img_Eldar,
    field: "computer_literacy",
    info: {
      ru: {
        position: "Преподаватель компьютерной грамотности",
        bio: "Выпускник факультета компьютерных наук. Менеджер проектов и соучредитель APRD — Asman Peak Research & Development.\n\nПреподаёт компьютерную грамотность: Microsoft Office, операционные системы, облачные технологии, основы кибербезопасности, Git и GitHub.\n\nРуководил командами в разработке платформ в сфере здравоохранения, e-commerce и образования. Получил 2 государственных и международных гранта.",
      },
      en: {
        position: "Computer Literacy Instructor",
        bio: "Computer Science graduate, project manager, and co-founder of APRD — Asman Peak Research & Development.\n\nTeaches Computer Literacy: Microsoft Office, operating systems, cloud technologies, cybersecurity fundamentals, Git and GitHub.\n\nLed technical teams in HealthTech, E-commerce, and education platforms. Secured 2 government and international grants.",
      },
    },
  },
  {
    name: {
      ru: "Эльназар Уланбек уулу",
      en: "Elnazar Ulanbek",
    },
    img: img_Elnazar,
    field: "backend",
    info: {
      ru: {
        position: "Преподаватель / Backend-разработчик",
        bio: "Специалист в области компьютерных наук с сильной подготовкой в алгоритмах и проектировании систем.\n\nОпыт в Yandex — поддержка высоконагруженных баз данных. Сооснователь и CTO APRD — руководит разработкой архитектуры для инфраструктурных и финтех-проектов.\n\nДвукратный финалист ICPC NERC. Преподаёт курс по базам данных в Инженерном колледже.",
      },
      en: {
        position: "Instructor / Backend Developer",
        bio: "Computer science specialist with a strong background in algorithms and system design.\n\nExperience at Yandex — maintaining and optimizing large-scale databases. Co-founder and CTO of APRD, leading architecture for infrastructure and fintech projects.\n\nTwo-time ICPC NERC finalist. Teaches a database course at the Engineering College.",
      },
    },
  },
  {
    name: {
      ru: "Эрбол Советалы уулу",
      en: "Erbol Sovetaly uulu",
    },
    img: img_Erbol,
    field: "marketing",
    info: {
      ru: {
        position: "Менеджер по маркетингу и коммуникациям",
        bio: "Специалист в области маркетинга, медиа и стратегических коммуникаций с опытом продвижения образовательных проектов, организации мероприятий и взаимодействия с разными аудиториями. В своей работе сочетает креативный подход, публичные коммуникации и понимание потребностей целевой аудитории, формируя узнаваемый образ колледжа и выстраивая доверительные отношения с абитуриентами, студентами, родителями и партнерами.\n\nОкончил Университет Центральной Азии по направлению «Коммуникации и медиа». Имеет опыт представления образовательных программ в школах Кыргызстана и Казахстана, организации дней открытых дверей и проведения крупных официальных, образовательных и культурных мероприятий. Работал в телевизионном производстве, создавая и ведя собственный проект, а также выступал ведущим форумов, университетских церемоний, TEDx и международных мероприятий. Опыт в медиа, публичных выступлениях и работе с молодежью помогает ему создавать содержательные коммуникационные кампании и эффективно представлять ценности Инженерного Колледжа.",
      },
      en: {
        position: "Marketing and Communications Manager",
        bio: "Specialist in marketing, media, and strategic communications with experience in promoting educational projects, organizing events, and engaging diverse audiences. Combines a creative approach, public communications, and a deep understanding of audience needs to build a recognizable college brand and foster trust with applicants, students, parents, and partners.\n\nGraduated from the University of Central Asia with a degree in Communications and Media. Experienced in presenting educational programs at schools across Kyrgyzstan and Kazakhstan, hosting Open House days, and managing major official, educational, and cultural events. Worked in television production creating and hosting his own program, and served as a master of ceremonies for forums, university commencements, TEDx, and international events. His expertise in media, public speaking, and youth engagement enables him to craft impactful communication campaigns and effectively represent the values of the Engineering College.",
      },
    },
  },
  {
    name: {
      ru: "Бактыгуль Асанова",
      en: "Baktygul Asanova",
    },
    img: null,
    field: "literature",
    info: {
      ru: {
        position: "Преподаватель русского языка и литературы",
        bio: "Педагог с многолетним опытом и глубоким пониманием современного образовательного процесса. Более двух десятилетий занимается подготовкой студентов, уделяя особое внимание развитию культуры речи, критического мышления и навыков эффективной коммуникации.\n\nОкончила Кыргызский государственный национальный университет по специальности «Русский язык и литература», а также получила степень магистра в области менеджмента образования.\n\nНеоднократно удостаивалась профессиональных наград и благодарностей за высокий профессионализм и вклад в развитие образования.",
      },
      en: {
        position: "Teacher of Russian Language and Literature",
        bio: "A teacher with extensive experience and a deep understanding of the modern educational process. She has been teaching for over two decades, focusing on developing oral communication skills, critical thinking, and effective communication.\n\nGraduated from the Kyrgyz State National University with a degree in Russian Language and Literature and a Master's in Educational Management.\n\nHas received numerous professional awards and recognitions for her high professionalism and contribution to education.",
      },
    },
  },
  {
    name: {
      ru: "Самара Адил",
      en: "Samara Adil",
    },
    img: null,
    field: "history",
    info: {
      ru: {
        position: "Преподаватель истории и общественных дисциплин",
        bio: "Педагог с многолетним опытом преподавания истории, помогающий студентам понимать взаимосвязь исторических событий, анализировать общественные процессы и развивать критическое мышление.\n\nОкончила Бишкекский гуманитарный университет им. К. Карасаева по специальности «Историко-архивоведение». Имеет опыт работы в образовательных учреждениях, руководства историческими кружками и внедрения цифровых образовательных инструментов.\n\nЗа вклад в развитие образования отмечена Почётной грамотой Центра образования Ленинского района г. Бишкек.",
      },
      en: {
        position: "History and Social Studies Teacher",
        bio: "A teacher with extensive experience in history and social studies, helping students understand historical events, analyze social processes, and develop critical thinking.\n\nGraduated from the K. Karasayev Bishkek Humanitarian University with a degree in Historical and Archival Science. Experienced in implementing curriculum, leading history clubs, and using digital educational tools.\n\nAwarded the Certificate of Honor from the Education Center of the Leninsky District of Bishkek.",
      },
    },
  },
  {
    name: {
      ru: "Наргул Осмонова",
      en: "Nargul Osmonova",
    },
    img: null,
    field: "kyrgyz",
    info: {
      ru: {
        position: "Доцент, кандидат филологических наук, преподаватель кыргызского языка",
        bio: "Опытный преподаватель и исследователь в области кыргызской филологии. В своей работе сочетает академическую подготовку с современными подходами к обучению, помогая студентам развивать культуру речи и критическое мышление.\n\nОкончила Жалал-Абадский государственный университет. Кандидат филологических наук; в 2024 году присвоено учёное звание доцента.\n\nМноголетняя научная и преподавательская деятельность позволяет создавать образовательную среду, ориентированную на профессиональный рост студентов.",
      },
      en: {
        position: "Associate Professor, PhD in Philology, Kyrgyz Language Instructor",
        bio: "An experienced teacher and researcher in Kyrgyz philology, combining academic training with modern teaching approaches to help students develop speech culture and critical thinking.\n\nGraduated from Jalal-Abad State University. Holds a PhD in Philology; awarded the title of Associate Professor in 2024.\n\nHer research and years of higher education experience create a student-centered learning environment focused on professional growth.",
      },
    },
  },
  {
    name: {
      ru: "Бакыт Молдокулов",
      en: "Bakyt Moldokulov",
    },
    img: null,
    field: "military",
    info: {
      ru: {
        position: "Преподаватель допризывной подготовки",
        bio: "Специализируется на допризывной подготовке и военно-патриотическом воспитании молодёжи. Уделяет особое внимание формированию дисциплины, ответственности и лидерских качеств.\n\nОкончил Кыргызский государственный университет строительства, транспорта и архитектуры (квалификация инженера-механика). Регулярно повышает квалификацию по программам Министерства образования и науки КР.\n\nСовременные методики обучения позволяют создавать образовательную среду, готовящую студентов к ответственному выполнению гражданского долга.",
      },
      en: {
        position: "Pre-conscription Training Instructor",
        bio: "Specializes in pre-conscription training and military-patriotic education. Focuses on developing discipline, responsibility, and leadership skills in students.\n\nGraduated from the Kyrgyz State University of Construction, Transport, and Architecture with a degree in mechanical engineering. Regularly completes professional development under Ministry of Education programs.\n\nModern teaching methods help foster civic responsibility and comprehensive student development.",
      },
    },
  },
  {
    name: {
      ru: "Журсун Орозалиева",
      en: "Zhursun Orozalieva",
    },
    img: null,
    field: "kyrgyz",
    info: {
      ru: {
        position: "Кандидат филологических наук, преподаватель кыргызского языка",
        bio: "Преподаватель с многолетним опытом научной и педагогической деятельности в области кыргызской филологии. Помогает студентам глубже понимать кыргызский язык, литературу и национальную культуру.\n\nОкончила КГНУ, получила степень магистра кыргызской литературы и завершила аспирантуру КГУ им. И. Арабаева. Кандидат филологических наук; регулярно участвует в конференциях и образовательных программах.\n\nАкадемический опыт и преданность профессии позволяют создавать современную образовательную среду для развития студентов.",
      },
      en: {
        position: "PhD in Philology, Kyrgyz Language & Literature Instructor",
        bio: "A teacher with extensive experience in Kyrgyz philology research and teaching. Helps students gain a deeper understanding of the Kyrgyz language, literature, and national culture.\n\nGraduated from KSNU, completed an MA in Kyrgyz Literature and postgraduate studies at I. Arabaev KSU. Holds a PhD in Philology; actively participates in professional conferences.\n\nHer academic experience and dedication enable her to create a modern learning environment focused on students' intellectual growth.",
      },
    },
  },
  {
    name: {
      ru: "Улан Нуркасымов",
      en: "Ulan Nurkasymov",
    },
    img: null,
    field: "economics",
    info: {
      ru: {
        position: "Преподаватель экономики и финансов",
        bio: "Преподаватель с международным академическим и практическим опытом в области экономики, финансов и управления. Сочетает современные методики с реальными кейсами из финансового сектора.\n\nОкончил Международный университет «Ала-Тоо» (специальность «Финансы и кредит»), продолжает PhD-исследование в КРСУ. Прошёл подготовку в Национальном институте финансового менеджмента Индии, работал руководителем проекта IFC, стажировался в Центральном банке Турции.\n\nПреподаёт программы международного уровня Cambridge IGCSE.",
      },
      en: {
        position: "Economics and Finance Lecturer",
        bio: "A lecturer with international academic and practical experience in economics, finance, and management. Combines modern methods with real-world financial sector case studies.\n\nGraduated from Ala-Too International University (Finance & Credit) and is pursuing a PhD in Economics at the Kyrgyz-Russian Slavic University. Trained at India's National Institute of Financial Management, worked as an IFC project manager, and interned at the Central Bank of Turkey.\n\nTeaches internationally recognized Cambridge IGCSE programs.",
      },
    },
  },
  {
    name: {
      ru: "Талант Асан уулу",
      en: "Talant Asan uulu",
    },
    img: null,
    field: "management",
    info: {
      ru: {
        position: "Преподаватель менеджмента и экономики",
        bio: "Эксперт в области менеджмента, экономики и управления образованием с многолетним опытом преподавательской и научной деятельности. Сочетает международные образовательные практики с реальными бизнес-кейсами.\n\nОкончил КГУСТА (инженерное образование), получил степень MBA в Eastern Mediterranean University (Северный Кипр) и PhD по экономике. Автор исследований по экономике, менеджменту и развитию высшего образования.\n\nМеждународный академический опыт позволяет внедрять современные подходы к обучению и готовить студентов к успешной карьере.",
      },
      en: {
        position: "Management and Economics Lecturer",
        bio: "An expert in management, economics, and educational administration. Combines modern international educational practices with real-world business cases.\n\nHolds an engineering degree from KSUCA, an MBA from Eastern Mediterranean University (Northern Cyprus), and a PhD in Economics. Author of research on economics, management, and higher education development.\n\nHis international academic background enables him to implement modern teaching approaches and prepare students for successful careers.",
      },
    },
  },

  {
    name: {
      ru: "Айзада Шаршенова",
      en: "Aizada Sharshenova",
    },
    img: null,
    field: "design",
    info: {
      ru: {
        position: "Преподаватель графического дизайна",
        bio: "Графический дизайнер с более чем восьмилетним профессиональным опытом в сфере визуальных коммуникаций, брендинга и цифрового дизайна. Специализируется на разработке фирменного стиля, маркетинговых материалов, веб-дизайне, UX/UI, полиграфии и создании образовательного контента. В своей работе сочетает креативный подход, понимание современных трендов и практический опыт реализации коммерческих проектов для компаний Кыргызстана и международных заказчиков.\n\nСвою профессиональную карьеру начала в 2017 году и за это время работала в дизайн-студиях, образовательных проектах, стартапах и коммерческих организациях. С июля 2025 по май 2026 года занимала должность графического дизайнера в ЗАО «Азия Клир». В настоящее время работает full-time графическим дизайнером в международной дизайн-студии, создающей проекты для зарубежного рынка, а также является part-time дизайнером в STEM-стартапе Supernova. За годы работы реализовала десятки проектов в области брендинга, веб-дизайна, печатной продукции, презентаций и цифровых продуктов, сотрудничая как с государственными, так и с международными организациями. Опыт преподавания позволяет ей передавать студентам не только фундаментальные знания дизайна, но и навыки, востребованные современной индустрией.",
      },
      en: {
        position: "Graphic Design Lecturer",
        bio: "Graphic designer with over eight years of professional experience in visual communications, branding, and digital design. Specializes in corporate identity development, marketing materials, web design, UX/UI, print, and educational content creation. Combines a creative approach, an understanding of modern industry trends, and practical experience delivering commercial projects for Kyrgyz and international clients.\n\nStarted her professional career in 2017, working across design studios, educational projects, startups, and commercial companies. Served as Graphic Designer at Asia Clear CJSC from July 2025 to May 2026. Currently works full-time as a Graphic Designer at an international design studio serving overseas markets, while also working part-time as a Designer at the STEM startup Supernova. Over the years, she has delivered dozens of projects in branding, web design, print media, presentations, and digital products in collaboration with public and international organizations. Her teaching experience enables her to provide students with both fundamental design knowledge and industry-demanded practical skills.",
      },
    },
  },

  // ── Последний ────────────────────────────────────────────────────────────────
  {
    name: {
      ru: "Бактияр Абдылдаев",
      en: "Baktyar Abdyldaev",
    },
    img: img_Abdyldaev,
    field: "sports",
    info: {
      ru: {
        position: "Преподаватель физической культуры",
        bio: "Выпускник Кыргызской государственной академии физической культуры и спорта, педагогического факультета.\n\nТренер по футболу категории B (АФК/KФС). Основатель спортивного клуба «Восход» — развитие детско-юношеского спорта, подготовка юных спортсменов и популяризация массового спорта.\n\nФокусируется на современных методиках обучения, всестороннем развитии детей и воспитании личности через спорт.",
      },
      en: {
        position: "Physical Education Instructor",
        bio: "Graduate of the Kyrgyz State Academy of Physical Culture and Sports, Faculty of Education.\n\nCategory B football coach (AFC/KFS). Founder of the Voskhod sports club — developing youth sports, training young athletes, and promoting mass sports.\n\nFocuses on modern teaching methods, the comprehensive development of children, and fostering personality through sports.",
      },
    },
  },
];

const TOTAL = teachers.length;
const AUTO_DELAY = 2200;
const SIDE_OFFSET = 320;

function getOffset(idx, active) {
  let off = ((idx - active) % TOTAL + TOTAL) % TOTAL;
  if (off > TOTAL / 2) off -= TOTAL;
  return off;
}

// ─── Main component ───────────────────────────────────────────────────────────
const TeachersConveyor = () => {
  const [active, setActive]       = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [modal, setModal]         = useState(null); // teacher object or null
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const touchStartX = useRef(null);
  const timerRef = useRef(null);
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ru") ? "ru" : "en";

  const next = useCallback(() => setActive((p) => (p + 1) % TOTAL), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + TOTAL) % TOTAL), []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isHovered || modal) return;
    timerRef.current = setTimeout(next, AUTO_DELAY);
    return () => clearTimeout(timerRef.current);
  }, [active, isHovered, modal, next]);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const sideOffset = isMobile
    ? 0
    : isTablet
    ? Math.min(210, Math.floor(windowWidth * 0.26))
    : 320;
  const cardWidth = isMobile
    ? Math.min(windowWidth - 48, 310)
    : isTablet
    ? 280
    : 340;
  const containerHeight = isMobile ? 470 : isTablet ? 500 : 540;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      next();
    } else if (diff < -40) {
      prev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="teachers" className="py-12 select-none overflow-hidden w-full px-2 sm:px-4 scroll-mt-24">
      <SectionTitle>
        {lang === "ru" ? "Преподавательский состав" : "Our Faculty"}
      </SectionTitle>

      <div
        className="relative mx-auto w-full"
        style={{ height: containerHeight, maxWidth: 980 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {teachers.map((t, idx) => {
            const tName     = getTeacherName(t, lang);
            const off       = getOffset(idx, active);
            const isCenter  = off === 0;
            const isVisible = Math.abs(off) <= 1;

            const translateX   = off * sideOffset;
            const scale        = isCenter ? 1 : isMobile ? 0.85 : 0.72;
            const opacity      = isCenter ? 1 : isMobile ? 0 : isVisible ? 0.65 : 0;
            const zIndex       = isCenter ? 10 : isVisible ? 5 : 0;
            const hasInfo      = !!t.info;
            const clickable    = (isVisible && !isCenter && !isMobile) || (isCenter && hasInfo);
            const cardCursor   = isCenter && hasInfo ? "pointer" : isVisible && !isCenter ? "pointer" : "default";

            const centerPhotoH = isMobile ? 330 : isTablet ? 370 : 420;
            const sidePhotoH = isMobile ? 260 : isTablet ? 270 : 290;

            return (
              <div
                key={idx}
                onClick={() => {
                  if (isCenter && hasInfo) { setModal(t); return; }
                  if (off < 0) prev();
                  else if (off > 0) next();
                }}
                style={{
                  position: "absolute",
                  width: cardWidth,
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: clickable ? "auto" : "none",
                  cursor: cardCursor,
                  transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1), opacity 0.8s ease",
                  transformOrigin: "center center",
                  willChange: "transform, opacity",
                }}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: isCenter
                      ? "0 20px 55px rgba(34,89,164,0.26)"
                      : "0 4px 18px rgba(0,0,0,0.10)",
                    transition: "box-shadow 0.8s ease",
                  }}
                >
                  {/* Photo */}
                  <div
                    className="overflow-hidden w-full relative flex items-center justify-center"
                    style={{
                      height: isCenter ? centerPhotoH : sidePhotoH,
                      transition: "height 0.8s cubic-bezier(0.4,0,0.2,1)",
                      background: t.img ? undefined : THEMES[t.field]?.gradient ?? THEMES.general.gradient,
                    }}
                  >
                    {t.img ? (
                      <img
                        src={t.img}
                        alt={tName}
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3 select-none">
                        {/* Decorative blobs */}
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ background: THEMES[t.field]?.accent ?? "#fff" }}/>
                        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10" style={{ background: THEMES[t.field]?.accent ?? "#fff" }}/>
                        {/* Silhouette icon */}
                        <div
                          className="relative z-10 rounded-full flex items-center justify-center"
                          style={{
                            width: isCenter ? (isMobile ? 90 : 110) : 76,
                            height: isCenter ? (isMobile ? 90 : 110) : 76,
                            background: "rgba(255,255,255,0.12)",
                            border: `2px solid rgba(255,255,255,0.22)`,
                            transition: "width 0.8s ease, height 0.8s ease",
                          }}
                        >
                          <svg viewBox="0 0 60 60" fill="none"
                            style={{ width: isCenter ? (isMobile ? 48 : 58) : 40, height: isCenter ? (isMobile ? 48 : 58) : 40 }}>
                            <circle cx="30" cy="22" r="12" fill="rgba(255,255,255,0.35)"/>
                            <path d="M8 56c0-12.15 9.85-22 22-22s22 9.85 22 22" fill="rgba(255,255,255,0.35)"/>
                          </svg>
                        </div>
                        {/* Initials */}
                        <p className="relative z-10 font-bold tracking-widest text-white opacity-60"
                          style={{ fontSize: isCenter ? 13 : 10 }}>
                          {tName.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase()}
                        </p>
                      </div>
                    )}
                    {/* "tap to view" hint on center card with info */}
                    {isCenter && hasInfo && (
                      <div
                        className="absolute bottom-0 inset-x-0 flex items-center justify-center py-2 text-xs font-medium text-white gap-1"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.8"/>
                          <line x1="12" y1="8" x2="12" y2="12" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                          <circle cx="12" cy="16" r="1" fill="white"/>
                        </svg>
                        {lang === "ru" ? "Нажмите для подробностей" : "Click for details"}
                      </div>
                    )}
                  </div>

                  {/* Name badge */}
                  <div
                    className="text-center px-3"
                    style={{
                      background: isCenter
                        ? "linear-gradient(135deg,#1C3C71,#2259A4)"
                        : "#f1f5f9",
                      transition: "background 0.8s ease",
                      paddingTop: isCenter ? 10 : 6,
                      paddingBottom: isCenter ? 12 : 6,
                    }}
                  >
                    <p
                      className="font-semibold leading-snug truncate"
                      style={{
                        fontSize: isCenter ? (isMobile ? 13 : 14) : 11,
                        color: isCenter ? "#fff" : "#475569",
                        transition: "color 0.8s ease, font-size 0.8s ease",
                      }}
                    >
                      {tName}
                    </p>
                    {/* Specialty line — only center card */}
                    {isCenter && t.info && (
                      <p
                        className="truncate mt-0.5"
                        style={{
                          fontSize: 11,
                          color: "rgba(255,255,255,0.65)",
                          maxWidth: "100%",
                        }}
                      >
                        {t.info[lang]?.position ?? ""}
                      </p>
                    )}
                    <div
                      className="rounded-full mx-auto mt-1.5"
                      style={{
                        height: 2,
                        width: isCenter ? 32 : 0,
                        background: "#F6C90E",
                        transition: "width 0.5s ease 0.15s",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute z-30 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            left: isMobile ? 4 : isTablet ? 8 : "calc(50% - 460px)",
            top: "50%",
            transform: "translateY(-50%)",
            width: isMobile ? 38 : 48,
            height: isMobile ? 38 : 48,
            background: "rgba(34,89,164,0.18)",
            border: "1.5px solid rgba(34,89,164,0.3)",
            backdropFilter: "blur(6px)",
          }}
          aria-label="Предыдущий"
        >
          <svg width={isMobile ? "14" : "18"} height={isMobile ? "14" : "18"} viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#2259A4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute z-30 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            right: isMobile ? 4 : isTablet ? 8 : "calc(50% - 460px)",
            top: "50%",
            transform: "translateY(-50%)",
            width: isMobile ? 38 : 48,
            height: isMobile ? 38 : 48,
            background: "rgba(34,89,164,0.18)",
            border: "1.5px solid rgba(34,89,164,0.3)",
            backdropFilter: "blur(6px)",
          }}
          aria-label="Следующий"
        >
          <svg width={isMobile ? "14" : "18"} height={isMobile ? "14" : "18"} viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#2259A4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 flex-wrap max-w-xs sm:max-w-md mx-auto px-2">
        {teachers.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: i === active ? 22 : 8, height: 8, background: i === active ? "#2259A4" : "rgba(34,89,164,0.22)" }}
            aria-label={`${i + 1}`}
          />
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <TeacherModal teacher={modal} lang={lang} onClose={() => setModal(null)} />
      )}
    </section>
  );
};

// ─── Modal ────────────────────────────────────────────────────────────────────
const TeacherModal = ({ teacher, lang, onClose }) => {
  const teacherName = getTeacherName(teacher, lang);
  const theme       = THEMES[teacher.field] || THEMES.general;
  const info        = teacher.info?.[lang];
  const label       = lang === "ru" ? theme.labelRu : theme.labelEn;

  // Close on backdrop click
  const handleBackdrop = (e) => { if (e.target === e.currentTarget) onClose(); };

  // Close on Escape
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  // Prevent body & html scroll
  useEffect(() => {
    const origBody = document.body.style.overflow;
    const origHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = origBody;
      document.documentElement.style.overflow = origHtml;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overscroll-contain"
      style={{ background: "rgba(10,15,30,0.72)", backdropFilter: "blur(6px)", animation: "fadeIn 0.25s ease" }}
      onClick={handleBackdrop}
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
        style={{ animation: "scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}
      >
        {/* ── Header (gradient) ── */}
        <div className="relative overflow-hidden" style={{ background: theme.gradient, minHeight: 180 }}>
          {/* Decorative blobs */}
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-10" style={{ background: theme.accent }}/>
          <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full opacity-10" style={{ background: theme.accent }}/>
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full opacity-5" style={{ background: theme.accent }}/>

        {/* ── Close button — outside header so overflow:hidden doesn't kill clicks ── */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 w-9 h-9 flex items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 shadow-md"
          style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.3)", pointerEvents: "auto" }}
          aria-label="Закрыть"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        </button>

          <div className="relative z-10 flex items-end gap-3.5 sm:gap-5 p-4 sm:p-6 pt-10 sm:pt-8 pr-12 sm:pr-6">
            {/* Photo circle */}
            <div
              className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 flex items-center justify-center"
              style={{ borderColor: `${theme.accent}55`, boxShadow: `0 8px 24px rgba(0,0,0,0.4)`, background: theme.gradient }}
            >
              {teacher.img ? (
                <img src={teacher.img} alt={teacherName} className="w-full h-full object-cover object-top" draggable={false}/>
              ) : (
                <svg viewBox="0 0 60 60" fill="none" width="54" height="54">
                  <circle cx="30" cy="22" r="12" fill="rgba(255,255,255,0.4)"/>
                  <path d="M8 56c0-12.15 9.85-22 22-22s22 9.85 22 22" fill="rgba(255,255,255,0.4)"/>
                </svg>
              )}
            </div>

            {/* Name + position */}
            <div className="flex-1 min-w-0 pb-1">
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold mb-2 max-w-full leading-normal"
                style={{ background: `${theme.accent}22`, color: theme.accent, border: `1px solid ${theme.accent}44` }}
              >
                {theme.icon && <span className="w-4 h-4 shrink-0 flex items-center justify-center">{theme.icon}</span>}
                <span className="break-words">{label}</span>
              </div>
              <h3 className="text-white font-bold text-lg sm:text-xl leading-tight">{teacherName}</h3>
              {info && (
                <p className="text-xs sm:text-sm mt-0.5" style={{ color: `${theme.accent}cc` }}>{info.position}</p>
              )}
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="bg-white px-6 py-5 max-h-72 overflow-y-auto overscroll-contain" style={{ scrollbarWidth: "thin", overscrollBehavior: "contain" }}>
          {info ? (
            info.bio.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-slate-600 leading-relaxed mb-3 last:mb-0">{para}</p>
            ))
          ) : (
            <p className="text-sm text-slate-400 italic text-center py-4">
              {lang === "ru" ? "Информация будет добавлена скоро." : "Information coming soon."}
            </p>
          )}
        </div>

        {/* ── Footer accent line ── */}
        <div className="h-1" style={{ background: `linear-gradient(to right, ${theme.gradient})` }}/>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.88) } to { opacity: 1; transform: scale(1) } }
      `}</style>
    </div>
  );
};

export default TeachersConveyor;
