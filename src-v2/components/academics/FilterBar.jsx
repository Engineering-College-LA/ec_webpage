import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const filters = ["all", "itSecurity", "business", "creative"];

// Transcribed from the Paper "EC Redesign" Academics "Filter Bar" artboard (27S-0).
// Filter buttons are a visual affordance for now, not wired to real
// filtering — there are only 5 programs total, not enough to warrant it yet.
function FilterBar() {
  const { t } = useTranslation();

  return (
    <div className="border-b border-v2-hairline">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-v2-gutter lg:py-7">
      <div className="flex flex-wrap gap-2 font-v2-heading">
        {filters.map((key, i) => (
          <button
            key={key}
            type="button"
            className={
              i === 0
                ? "rounded-v2-sm bg-v2-navy px-[18px] py-2.5 text-v2-label font-semibold leading-4 text-v2-paper"
                : "rounded-v2-sm border border-v2-hairline px-[18px] py-2.5 text-v2-label font-semibold leading-4 text-v2-navy"
            }
          >
            {t(`v2.academics.index.filters.${key}`)}
          </button>
        ))}
      </div>
      <Link to="/career-test" className="font-v2-body text-[14px] leading-[18px] text-v2-slate">
        {t("v2.academics.index.careerTestLink")} →
      </Link>
      </div>
    </div>
  );
}

export default FilterBar;
