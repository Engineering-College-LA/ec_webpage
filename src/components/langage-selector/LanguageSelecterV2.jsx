import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const other = { en: "ru", ru: "en" };

// Mirrors src-v2/components/langage-selector/LanguageSelecter.jsx — used by
// the redesigned Footer. Kept separate from LanguageSelecter.jsx since that
// one is still used by the old Navbar/MobileMenu with a different signature.
function LanguageSelecterV2({ className }) {
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

export default LanguageSelecterV2;
