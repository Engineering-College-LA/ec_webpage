import { useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const other = { en: "ru", ru: "en" };

function LanguageSelecter({ className }) {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggle = () => {
    const next = other[currentLanguage] ?? "ru";
    i18n.changeLanguage(next);
    setCurrentLanguage(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={twMerge(
        "font-v2-heading text-v2-label font-semibold leading-4 text-v2-slate",
        className,
      )}
    >
      {currentLanguage.toUpperCase()}
    </button>
  );
}

export default LanguageSelecter;
