import { useTranslation } from "react-i18next";

const PHOTO =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/7TMMR26QP9WJBR439RHEK93B5Z.jpg";

// Transcribed from the Paper "EC Redesign" Home "Stories" artboard (1ZD-0).
// Single-quote carousel for now — only one story in the artboard; the
// prev/next controls are wired up as inert affordances pending real content.
function Stories() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-8 bg-v2-paper px-6 py-14 lg:flex-row lg:items-center lg:gap-14 lg:px-v2-gutter lg:py-24">
      <div className="flex flex-col gap-4 lg:w-[300px] lg:shrink-0 lg:gap-[18px]">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
          {t("v2.home.stories.eyebrow")}
        </div>
        <h2 className="font-v2-heading text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[38px] lg:leading-[44px]">
          {t("v2.home.stories.title")}
        </h2>
        <div className="flex gap-2.5 pt-2">
          <button
            type="button"
            aria-label="Previous"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-v2-hairline"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" fill="none" stroke="#5A6478" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-v2-navy"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#0E1B33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex grow flex-col overflow-hidden rounded-lg bg-v2-mist lg:flex-row">
        <div
          className="h-[220px] shrink-0 bg-cover bg-[center_25%] lg:h-[320px] lg:w-[300px]"
          style={{ backgroundImage: `url(${PHOTO})` }}
        />
        <div className="flex flex-col justify-center gap-5 px-6 py-8 lg:gap-6 lg:px-12 lg:py-10">
          <div className="font-['Georgia',serif] text-v2-h2 font-bold leading-[30px] text-v2-crimson">“</div>
          <p className="font-v2-body text-[18px] leading-8 text-v2-navy lg:text-[20px] lg:leading-8">
            {t("v2.home.stories.quote")}
          </p>
          <div className="flex flex-col gap-1 border-t border-v2-hairline pt-3.5">
            <div className="font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy">
              {t("v2.home.stories.author")}
            </div>
            <div className="font-v2-body text-v2-label leading-4 text-v2-slate">
              {t("v2.home.stories.authorMeta")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
