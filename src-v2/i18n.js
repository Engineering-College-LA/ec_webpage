import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "ru",
  lng: "ru",
  backend: {
    // BASE_URL is "/" on college.edu.kg and "/ec_webpage/" on GitHub Pages.
    loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    queryStringParams: { v: "4" },
  },
});

export default i18n;
