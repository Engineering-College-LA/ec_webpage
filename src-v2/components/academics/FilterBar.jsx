import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { programCategories } from "../../config/programs";

// Below lg the chips shrink to the "Направления — Mobile v3" size.
const CHIP =
  "rounded-v2-sm border px-3.5 py-2 text-[12px] font-semibold leading-4 lg:px-[18px] lg:py-2.5 lg:text-v2-label";
const ACTIVE = `${CHIP} border-v2-navy bg-v2-navy text-v2-paper`;
const IDLE = `${CHIP} border-v2-hairline text-v2-navy transition-colors hover:border-v2-navy`;

// Transcribed from the Paper "EC Redesign" Academics "Filter Bar" artboard (27S-0).
// `active` is "all" or one of programCategories; the page owns the state.
function FilterBar({ active, onChange, total }) {
  const { t } = useTranslation();
  const filters = ["all", ...programCategories];

  return (
    <div className="border-b border-v2-hairline">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-[18px] lg:flex-row lg:items-center lg:justify-between lg:px-v2-gutter lg:py-7">
      <div className="flex flex-wrap gap-2 font-v2-heading" role="group">
        {filters.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key)}
            aria-pressed={active === key}
            className={active === key ? ACTIVE : IDLE}
          >
            {/* Mobile uses a shorter label where one exists (e.g. "IT"). */}
            <span className="lg:hidden">
              {t(`v2.academics.index.filtersShort.${key}`, {
                count: total,
                defaultValue: t(`v2.academics.index.filters.${key}`, { count: total }),
              })}
            </span>
            <span className="hidden lg:inline">
              {t(`v2.academics.index.filters.${key}`, { count: total })}
            </span>
          </button>
        ))}
      </div>
      <Link to="/career-test" className="hidden font-v2-body lg:block text-[14px] leading-[18px] text-v2-slate">
        {t("v2.academics.index.careerTestLink")} →
      </Link>
      </div>
    </div>
  );
}

export default FilterBar;
