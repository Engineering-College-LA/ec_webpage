import { useTranslation } from "react-i18next";

const facts = ["duration", "practice", "format", "diploma"];

// Transcribed from the Paper "EC Redesign" Program "Facts Band" artboard (2F1-0).
// Shared across all programs — institutional facts, not program-specific.
function ProgramFactsBand() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-6 bg-v2-navy px-6 py-8 lg:flex-row lg:items-center lg:gap-0 lg:px-v2-gutter lg:py-9">
      {facts.map((key, i) => (
        <div key={key} className={`flex flex-col gap-1.5 lg:w-[260px] lg:shrink-0 ${i > 0 ? "lg:border-l lg:border-white/[0.18] lg:pl-8" : ""}`}>
          <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.22em] text-[#8FA3CC]">
            {t(`v2.academics.facts.${key}.label`)}
          </div>
          <div className="font-v2-heading text-[22px] font-extrabold leading-7 text-v2-paper lg:text-[26px] lg:leading-8">
            {t(`v2.academics.facts.${key}.value`)}
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProgramFactsBand;
