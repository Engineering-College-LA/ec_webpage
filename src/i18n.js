import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "ru",
  lng: "ru",
  backend: {
    loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    queryStringParams: { v: "3" },
  },
  initImmediate: false,
});

export default i18n;
