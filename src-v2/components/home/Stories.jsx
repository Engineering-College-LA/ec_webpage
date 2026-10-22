import { useTranslation } from "react-i18next";

const PHOTO =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/7TMMR26QP9WJBR439RHEK93B5Z.jpg";

const ArrowLeft = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
    <path d="M13 8H3M7 4L3 8l4 4" fill="none" stroke="#5A6478" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#0E1B33" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Transcribed from the Paper "EC Redesign" Home "Stories" artboard (1ZD-0).
// Single-quote carousel for now — only one story in the artboard; the
// prev/next controls are wired up as inert affordances pending real content.
// Below lg ("Home — Mobile v3") the controls shrink and move into the
// author row.
function Stories() {
  const { t } = useTranslation();

  return (
    <section className="bg-v2-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[18px] px-5 py-12 lg:flex-row lg:items-center lg:gap-14 lg:px-v2-gutter lg:py-24">
      <div className="flex flex-col gap-[18px] lg:w-[300px] lg:shrink-0">
        <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate lg:text-[11px] lg:leading-[14px]">
          {t("v2.home.stories.eyebrow")}
        </div>
        <h2 className="font-v2-heading text-v2-h3 font-extrabold leading-[33px] tracking-[-0.03em] text-v2-navy lg:text-[38px] lg:leading-[44px]">
          {t("v2.home.stories.title")}
        </h2>
        <div className="hidden gap-2.5 pt-2 lg:flex">
          <button
            type="button"
            aria-label="Previous"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-v2-hairline"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-v2-navy"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="flex grow flex-col overflow-hidden rounded-lg bg-v2-mist md:flex-row">
        {/* Phone: keep the artboard's 350×220 ratio so the face never gets
            cropped as the card widens; md+: photo becomes a fixed side column. */}
        <div
          className="aspect-[35/22] shrink-0 bg-cover bg-center md:aspect-auto md:bg-[center_25%] md:min-h-[320px] md:w-[300px]"
          style={{ backgroundImage: `url(${PHOTO})` }}
        />
        <div className="flex flex-col justify-center gap-3.5 px-[22px] py-6 lg:gap-6 lg:px-12 lg:py-10">
          <div className="font-['Georgia',serif] text-[44px] font-bold leading-[22px] text-v2-crimson lg:text-v2-h2 lg:leading-[30px]">“</div>
          <p className="font-v2-body text-[16px] leading-[25px] text-v2-navy lg:text-[20px] lg:leading-8">
            <span className="lg:hidden">{t("v2.home.stories.quoteShort")}</span>
            <span className="hidden lg:inline">{t("v2.home.stories.quote")}</span>
          </p>
          <div className="flex items-center justify-between border-t border-v2-hairline pt-3 lg:pt-3.5">
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <div className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-navy lg:text-[15px]">
                {t("v2.home.stories.author")}
              </div>
              <div className="font-v2-body text-[12px] leading-4 text-v2-slate lg:text-v2-label">
                {t("v2.home.stories.authorMeta")}
              </div>
            </div>
            <div className="flex gap-1.5 lg:hidden">
              <button
                type="button"
                aria-label="Previous"
                className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-v2-hairline"
              >
                <ArrowLeft size={12} />
              </button>
              <button
                type="button"
                aria-label="Next"
                className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-v2-navy"
              >
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Stories;
