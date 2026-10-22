import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CTABand from "../../components/home/CTABand";

// Each answer letter maps to one direction. `slug` links the result to its
// program page; STEM has no program page yet, so it shows text only.
const RESULTS = {
  a: { slug: "software-engineering", i18nKey: "softwareEngineering", fallback: "Программная инженерия" },
  b: { slug: "cyber-security", i18nKey: "cyberSecurity", fallback: "Кибербезопасность" },
  c: { slug: "management-in-it", i18nKey: "managementInIt", fallback: "IT и предпринимательство" },
  d: { slug: null, i18nKey: null, fallback: "Международный учитель STEM-педагогики" },
};

const QUESTIONS = [
  {
    q: "Что вам больше нравится делать в свободное время?",
    options: {
      a: "Разрабатывать программы или писать код.",
      b: "Изучать способы защиты информации и систем.",
      c: "Придумывать и реализовывать бизнес-идеи.",
      d: "Объяснять сложные вещи простыми словами и обучать других.",
    },
  },
  {
    q: "Какой тип задач вам наиболее интересен?",
    options: {
      a: "Решение логических задач и создание алгоритмов.",
      b: "Анализ и предотвращение угроз безопасности.",
      c: "Планирование и реализация бизнес-проектов.",
      d: "Подготовка уроков и объяснение научных концепций.",
    },
  },
  {
    q: "Как вы относитесь к командной работе?",
    options: {
      a: "Предпочитаю работать самостоятельно, но могу работать в команде.",
      b: "Работаю в команде для анализа и решения проблем.",
      c: "Люблю работать в команде и вести её к успеху.",
      d: "Работаю с удовольствием в группе, особенно с учениками.",
    },
  },
  {
    q: "Какие школьные предметы вам нравятся больше всего?",
    options: {
      a: "Математика и информатика.",
      b: "Информатика и основы безопасности.",
      c: "Экономика и бизнес.",
      d: "Физика, математика и биология.",
    },
  },
  {
    q: "Как вы представляете свою будущую работу?",
    options: {
      a: "Разработка и тестирование программного обеспечения.",
      b: "Анализ рисков и защита данных.",
      c: "Управление собственным бизнесом или стартапом.",
      d: "Преподавание и помощь студентам в освоении науки и технологий.",
    },
  },
  {
    q: "Какие навыки вам кажутся наиболее важными для успеха?",
    options: {
      a: "Логическое мышление и внимание к деталям.",
      b: "Аналитические способности и знание современных угроз.",
      c: "Лидерские качества и креативность.",
      d: "Способность объяснять сложные вещи простыми словами.",
    },
  },
];

const facts = ["6 вопросов", "2 минуты", "Результат сразу"];

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Same layout and mountain strip as the Academics hero, without the photo.
function CareerHero() {
  return (
    <section className="relative overflow-hidden bg-v2-navy">
      <div className="relative mx-auto flex max-w-[1440px] flex-col lg:h-[400px]">
        <svg
          width="700"
          height="60"
          viewBox="0 0 700 60"
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 hidden lg:block"
          style={{
            maskImage: "linear-gradient(to right, #000 75%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, #000 75%, transparent)",
          }}
        >
          <path d="M0 60V45L60 38 120 44 180 30 243 3 290 28 340 22 398 2 450 26 520 20 580 32 640 26 700 34V60Z" fill="#1C3154" />
          <path d="M243 3L254 9 248 8 243 11 237 8 229 9ZM398 2L411 8 404 7 398 10 391 7 381 8Z" fill="#E9EDFF" fillOpacity="0.85" />
          <path d="M0 60V52L80 46 160 52 240 42 320 50 400 40 480 50 560 44 640 50 700 46V60Z" fill="#142541" />
        </svg>
        <div className="relative z-10 flex flex-col justify-center gap-5 px-6 py-12 lg:h-full lg:gap-[22px] lg:py-0 lg:pl-v2-gutter">
          <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-[#8FA3CC]">
            ГЛАВНАЯ / КАРЬЕРА
          </div>
          <div className="flex flex-col font-v2-heading">
            <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.035em] text-v2-paper lg:text-[40px] lg:leading-[48px]">
              Профориентационный тест.
            </div>
            <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.035em] text-v2-step-4 lg:text-[40px] lg:leading-[48px]">
              Найди своё направление.
            </div>
          </div>
          <p className="max-w-[560px] font-v2-body text-[16px] leading-[26px] text-[#C4CCDD] lg:text-[17px] lg:leading-[27px]">
            Ответь на шесть коротких вопросов — мы подскажем, какая программа колледжа подходит тебе больше всего.
          </p>
          <div className="flex flex-wrap gap-5 pt-1">
            {facts.map((fact) => (
              <div key={fact} className="flex items-center gap-2.5">
                <div className="h-2 w-2 shrink-0 rounded-full bg-v2-crimson" />
                <div className="font-v2-heading text-v2-label font-semibold leading-4 text-v2-paper">{fact}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CareerTestPage() {
  const { t } = useTranslation();
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === QUESTIONS.length;

  const select = (qIndex, letter) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: letter }));
    setResult(null);
  };

  const showResult = () => {
    if (!allAnswered) return;
    const counts = { a: 0, b: 0, c: 0, d: 0 };
    Object.values(answers).forEach((letter) => counts[letter]++);
    const best = Object.keys(counts).reduce((x, y) => (counts[x] >= counts[y] ? x : y));
    setResult(RESULTS[best]);
  };

  const resultTitle = result
    ? result.i18nKey
      ? t(`v2.academics.programs.${result.i18nKey}.title`, { defaultValue: result.fallback })
      : result.fallback
    : "";

  return (
    <>
      <CareerHero />

      <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-v2-gutter lg:py-20">
        <div className="mx-auto flex max-w-[880px] flex-col gap-6 lg:gap-8">
          {QUESTIONS.map((question, qIndex) => (
            <fieldset key={qIndex} className="rounded-[6px] border border-v2-hairline bg-v2-paper p-6 lg:p-8">
              <legend className="sr-only">{question.q}</legend>
              <div className="mb-5 flex items-baseline gap-4">
                <span className="font-v2-mono text-[13px] font-semibold tracking-[0.12em] text-v2-crimson">
                  {String(qIndex + 1).padStart(2, "0")}
                </span>
                <h2 className="font-v2-heading text-[19px] font-extrabold leading-7 tracking-[-0.02em] text-v2-navy lg:text-[22px]">
                  {question.q}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {Object.entries(question.options).map(([letter, text]) => {
                  const checked = answers[qIndex] === letter;
                  return (
                    <label
                      key={letter}
                      className={`flex cursor-pointer items-start gap-3 rounded-v2-sm border px-4 py-3.5 font-v2-body text-[15px] leading-[22px] transition-colors ${
                        checked
                          ? "border-v2-navy bg-v2-mist text-v2-navy"
                          : "border-v2-hairline text-v2-slate hover:border-v2-step-4"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q${qIndex}`}
                        value={letter}
                        checked={checked}
                        onChange={() => select(qIndex, letter)}
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                          checked ? "border-v2-crimson" : "border-v2-hairline"
                        }`}
                      >
                        {checked && <span className="h-1.5 w-1.5 rounded-full bg-v2-crimson" />}
                      </span>
                      {text}
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="font-v2-body text-[15px] text-v2-slate">
              Отвечено {answeredCount} из {QUESTIONS.length}
            </div>
            <button
              type="button"
              onClick={showResult}
              disabled={!allAnswered}
              className="flex items-center justify-center gap-2.5 rounded-v2-sm bg-v2-navy px-6 py-[15px] font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
            >
              Показать результат
              <Arrow />
            </button>
          </div>

          {result && (
            <div
              role="status"
              className="flex flex-col gap-6 rounded-[6px] border-l-4 border-v2-crimson bg-v2-mist px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-10"
            >
              <div className="flex flex-col gap-1.5">
                <div className="font-v2-heading text-[11px] font-semibold tracking-[0.24em] text-v2-crimson">
                  ВАШ РЕЗУЛЬТАТ
                </div>
                <div className="font-v2-heading text-[22px] font-extrabold leading-8 tracking-[-0.02em] text-v2-navy lg:text-[26px]">
                  {resultTitle}
                </div>
                <div className="font-v2-body text-[15px] leading-[22px] text-v2-slate">
                  Это направление лучше всего совпадает с твоими ответами.
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                {result.slug && (
                  <Link
                    to={`/academics/${result.slug}`}
                    className="flex items-center justify-center gap-2.5 whitespace-nowrap rounded-v2-sm bg-v2-navy px-6 py-[15px] font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper"
                  >
                    О программе
                    <Arrow />
                  </Link>
                )}
                <Link
                  to="/admissions"
                  className="flex items-center justify-center gap-2.5 whitespace-nowrap rounded-v2-sm bg-v2-crimson px-6 py-[15px] font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper"
                >
                  Подать заявку
                  <Arrow />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABand />
    </>
  );
}

export default CareerTestPage;
