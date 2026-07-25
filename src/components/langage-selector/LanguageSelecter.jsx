import React from "react";
import { useTranslation } from "react-i18next";

const locales = {
  en: { title: "English" },
  ru: { title: "Русский" },
};

function LanguageSelecter() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "ru";

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="shadow-sm rounded-md" role="group">
        <button
          type="button"
          className={`outline-none rounded-l-lg border border-gray-200 bg-white text-xs font-medium px-3 py-1.5 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
            currentLang === "en" ? "bg-gray-100 text-n-blue font-bold" : ""
          }`}
          onClick={() => handleLanguageChange("en")}
        >
          Eng
        </button>
        <button
          type="button"
          className={`outline-none rounded-r-md border border-gray-200 bg-white text-xs font-medium px-3 py-1.5 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
            currentLang === "ru" ? "bg-gray-100 text-n-blue font-bold" : ""
          }`}
          onClick={() => handleLanguageChange("ru")}
        >
          Рус
        </button>
      </div>
    </div>
  );
}

export default LanguageSelecter;
