import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const locales = {
  en: { title: "English" },
  ru: { title: "Русский" },
};

function LanguageSelecter() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="shadow-sm rounded-md" role="group">
        <button
          type="button"
          className={`outline-none rounded-l-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
            currentLanguage === "en" ? "bg-gray-100 text-n-blue" : ""
          }`}
          onClick={() => handleLanguageChange("en")}
        >
          Eng
        </button>
        <button
          type="button"
          className={`outline-none rounded-r-md border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
            currentLanguage === "ru" ? "bg-gray-100 text-n-blue" : ""
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
