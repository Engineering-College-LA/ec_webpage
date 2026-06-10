import { useTranslation } from "react-i18next";

const LANG_KEY = "academics.marketing";

function Marketing() {
  const { t } = useTranslation();

  const descriptionRaw = t(`${LANG_KEY}.description`, { returnObjects: true });
  const rolesRaw = t(`${LANG_KEY}.roles`, { returnObjects: true });

  const descriptionParagraphs = Array.isArray(descriptionRaw) ? descriptionRaw : [];
  const jobRoles = Array.isArray(rolesRaw) ? rolesRaw : [];

  return (
    <div className="page-style">
      <h2 className="page-title">{t(`${LANG_KEY}.name`)}</h2>
      {descriptionParagraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 text-pretty">
          {paragraph}
        </p>
      ))}
      <h3 className="page-subtitle mt-6">{t(`${LANG_KEY}.jobRoles`)}</h3>
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

export default Marketing;
