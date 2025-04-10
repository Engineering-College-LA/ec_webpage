import { useTranslation } from "react-i18next";

function SoftwareEngineering() {
  const { t } = useTranslation();

  const descriptionParagraphs = t("academics.softwareEngineering.description", {
    returnObjects: true,
  });
  const jobRoles = t("academics.softwareEngineering.roles", {
    returnObjects: true,
  });

  return (
    <div className="page-style">
      <h2 className="page-title">{t("academics.softwareEngineering.name")}</h2>
      {descriptionParagraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 text-pretty">
          {paragraph}
        </p>
      ))}
      <h3 className="page-subtitle mt-6">
        {t("academics.softwareEngineering.jobRoles")}
      </h3>
      <ul className="list-disc ml-5">
        {jobRoles.map((role, index) => (
          <li key={index} className="mb-2">
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SoftwareEngineering;
