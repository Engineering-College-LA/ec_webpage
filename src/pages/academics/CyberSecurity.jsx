import { useTranslation } from "react-i18next";

function CyberSecurity() {
  const { t } = useTranslation();

  const descriptionParagraphs = t("academics.cyberSecurity.description", {
    returnObjects: true,
  });
  const jobRoles = t("academics.cyberSecurity.roles", { returnObjects: true });

  return (
    <div className="page-style">
      <h2 className="page-title">{t("academics.cyberSecurity.name")}</h2>
      {Array.isArray(descriptionParagraphs) && descriptionParagraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 text-pretty">
          {paragraph}
        </p>
      ))}
      <h3 className="page-subtitle mt-6">
        {t("academics.cyberSecurity.jobRoles")}
      </h3>
      <ul className="list-disc ml-5">
        {Array.isArray(jobRoles) && jobRoles.map((role, index) => (
          <li key={index} className="mb-2">
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CyberSecurity;
