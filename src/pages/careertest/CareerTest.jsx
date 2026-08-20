import { useState } from "react";
import ReactGA from "react-ga4";
import { ContactLinkButton } from "../../components/reasons/ReasonsToStudy";

const CareerTestPage = () => {
  const [result, setResult] = useState("");

  const showResult = () => {
    const form = document.getElementById("testForm");
    const answers = { a: 0, b: 0, c: 0, d: 0 };

    for (let i = 0; i < form.elements.length; i++) {
      if (form.elements[i].type === "radio" && form.elements[i].checked) {
        answers[form.elements[i].value]++;
      }
    }

    const maxAnswer = Object.keys(answers).reduce((a, b) =>
      answers[a] > answers[b] ? a : b
    );

    let resultText = "";
    switch (maxAnswer) {
      case "a":
        resultText = "Вам подходит направление «Программная инженерия».";
        break;
      case "b":
        resultText = "Вам подходит направление «Программа кибербезопасности».";
        break;
      case "c":
        resultText = "Вам подходит направление «IT и предпринимательство».";
        break;
      case "d":
        resultText =
          "Вам подходит направление «Международный учитель STEM-педагогики».";
        break;
      default:
        resultText = "Пожалуйста, ответьте на все вопросы.";
        break;
    }

    setResult(resultText);

    if (resultText !== "Пожалуйста, ответьте на все вопросы.") {
      try {
        ReactGA.event({
          category: "CareerTest",
          action: "complete_career_test",
          label: resultText,
        });
      } catch (err) {
        console.warn("Analytics event failed:", err);
      }
    }
  };

  return (
    <div className="page py-20 flex justify-center">
      <div className="mx-4 w-full max-w-md">
        <h1 className="text-2xl font-bold my-4 text-center">
          Профориентационный тест
        </h1>
        <form id="testForm" className="flex flex-col gap-2">
          <div className="question mb-4">
            <p className="question-q">
              1. Что вам больше нравится делать в свободное время?
            </p>
            <label className="block mb-2 question-v">
              <input type="radio" name="q1" value="a" className="mr-2" />
              Разрабатывать программы или писать код.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q1" value="b" className="mr-2" />
              Изучать способы защиты информации и систем.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q1" value="c" className="mr-2" />
              Придумывать и реализовывать бизнес-идеи.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q1" value="d" className="mr-2" />
              Объяснять сложные вещи простыми словами и обучать других.
            </label>
          </div>
          <div className="question mb-4">
            <p className="question-q">
              2. Какой тип задач вам наиболее интересен?
            </p>
            <label className="block mb-2 question-v">
              <input type="radio" name="q2" value="a" className="mr-2" />
              Решение логических задач и создание алгоритмов.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q2" value="b" className="mr-2" />
              Анализ и предотвращение угроз безопасности.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q2" value="c" className="mr-2" />
              Планирование и реализация бизнес-проектов.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q2" value="d" className="mr-2" />
              Подготовка уроков и объяснение научных концепций.
            </label>
          </div>
          <div className="question mb-4">
            <p className="question-q">
              3. Как вы относитесь к командной работе?
            </p>
            <label className="block mb-2 question-v">
              <input type="radio" name="q3" value="a" className="mr-2" />
              Предпочитаю работать самостоятельно, но могу работать в команде.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q3" value="b" className="mr-2" />
              Работаю в команде для анализа и решения проблем.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q3" value="c" className="mr-2" />
              Люблю работать в команде и вести её к успеху.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q3" value="d" className="mr-2" />
              Работаю с удовольствием в группе, особенно с учениками.
            </label>
          </div>
          <div className="question mb-4">
            <p className="question-q">
              4. Какие школьные предметы вам нравятся больше всего?
            </p>
            <label className="block mb-2">
              <input type="radio" name="q4" value="a" className="mr-2" />
              Математика и информатика.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q4" value="b" className="mr-2" />
              Информатика и основы безопасности.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q4" value="c" className="mr-2" />
              Экономика и бизнес.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q4" value="d" className="mr-2" />
              Физика, математика и биология.
            </label>
          </div>
          <div className="question mb-4">
            <p className="question-q">
              5. Как вы представляете свою будущую работу?
            </p>
            <label className="block mb-2 question-v">
              <input type="radio" name="q5" value="a" className="mr-2" />
              Разработка и тестирование программного обеспечения.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q5" value="b" className="mr-2" />
              Анализ рисков и защита данных.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q5" value="c" className="mr-2" />
              Управление собственным бизнесом или стартапом.
            </label>
            <label className="block mb-2 question-v">
              <input type="radio" name="q5" value="d" className="mr-2" />
              Преподавание и помощь студентам в освоении науки и технологий.
            </label>
          </div>
          <div className="question mb-4 question-v">
            <p className="question-q">
              6. Какие навыки вам кажутся наиболее важными для успеха?
            </p>
            <label className="block mb-2">
              <input type="radio" name="q6" value="a" className="mr-2" />
              Логическое мышление и внимание к деталям.
            </label>
            <label className="block mb-2">
              <input type="radio" name="q6" value="b" className="mr-2" />
              Аналитические способности и знание современных угроз.
            </label>
            <label className="block mb-2">
              <input type="radio" name="q6" value="c" className="mr-2" />
              Лидерские качества и креативность.
            </label>
            <label className="block mb-2">
              <input type="radio" name="q6" value="d" className="mr-2" />
              Способность объяснять сложные вещи простыми словами.
            </label>
          </div>
        </form>
        <ContactLinkButton onClick={showResult}>
          Показать результат
        </ContactLinkButton>
        {result && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Ваш результат:</h2>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerTestPage;
