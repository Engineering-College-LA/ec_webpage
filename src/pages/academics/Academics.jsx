import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const reasons = Array.from({ length: 7 }, (_, i) => ({
  key: `reasons.${i}`,
}));

const programs = [
  { key: "programs.0", path: "software-engineering" },
  { key: "programs.1", path: "cyber-security" },
  { key: "programs.2", path: "management-in-it" },
  { key: "programs.3", path: "industrial-design" },
];

function Academics() {
  const { t } = useTranslation();

  return (
    <div className="page-style">
      <h2 className="page-title">{t("academics.programs")}</h2>
      {programs.map((program) => (
        <div
          key={program.key}
          className="mb-6 p-6 bg-white rounded-xl shadow-custom"
        >
          <h3 className="page-subtitle">
            {t(`home.programsSection.${program.key}.name`)}
          </h3>
          <p className="mb-4 text-balance">
            {t(`home.programsSection.${program.key}.description`)}
          </p>
          <Link
            to={`/academics/${program.path}`}
            className="text-blue-700 flex items-center gap-1 hover:text-blue-500"
          >
            <span>{t("home.programsSection.learnMore")}</span>
            <ArrowRight size={18} className="inline" />
          </Link>
        </div>
      ))}

      <h2 className="page-title pt-14">{t("academics.reasonsTitle")}</h2>
      <div className="grid gap-4">
        {reasons.map((reason, index) => {
          const reasonDescription = t(`academics.${reason.key}.description`, {
            returnObjects: true,
          });

          return (
            <div key={index} className="relative flex flex-col p-4 rounded-lg">
              <div className="page-subtitle">
                <span className="text-slate-200 text-6xl absolute -z-10 top-2 select-none">
                  {index + 1}
                </span>{" "}
                {t(`academics.${reason.key}.keywords`)}
              </div>
              {typeof reasonDescription === "string" ? (
                <div>{reasonDescription}</div>
              ) : (
                <div>
                  <div>{reasonDescription.text}</div>
                  <ul className="list-disc ml-5 mt-2">
                    {reasonDescription.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Academics;
