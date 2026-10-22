import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const other = { en: "ru", ru: "en" };

// Desktop RU ⇄ EN toggle. Reads the language from i18n on every render so it
// stays in sync when the language is changed elsewhere (e.g. LanguageSwitch).
function LanguageSelecter({ className }) {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "ru").slice(0, 2);

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(other[current] ?? "ru")}
      className={twMerge(
        "font-v2-heading text-v2-label font-semibold leading-4 text-v2-slate",
        className,
      )}
    >
      {current.toUpperCase()}
    </button>
  );
}

export default LanguageSelecter;
