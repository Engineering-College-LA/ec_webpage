import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const LANGUAGES = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

const tones = {
  // On white (header, mobile menu)
  light: { active: "bg-v2-navy text-v2-paper", idle: "text-v2-slate hover:text-v2-navy", frame: "border-v2-hairline" },
  // On the dark footer
  dark: { active: "bg-v2-paper text-v2-navy", idle: "text-v2-footer-link hover:text-v2-paper", frame: "border-white/20" },
};

// Mirrors src-v2/components/langage-selector/LanguageSwitch.jsx — used by the
// redesigned Footer.
function LanguageSwitchV2({ tone = "light", className }) {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "ru").slice(0, 2);
  const c = tones[tone];

  return (
    <div
      role="group"
      aria-label={t("v2.nav.languageLabel", { defaultValue: "Language" })}
      className={twMerge("inline-flex shrink-0 items-center gap-0.5 rounded-v2-sm border p-0.5", c.frame, className)}
    >
      {LANGUAGES.map(({ code, label }) => {
        const active = current === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            onClick={() => !active && i18n.changeLanguage(code)}
            className={twMerge(
              "min-w-[36px] rounded-[3px] px-2 py-1.5 font-v2-heading text-[12px] font-bold leading-4 transition-colors",
              active ? c.active : c.idle,
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitchV2;
