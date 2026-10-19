import { useState } from "react";
import { useTranslation } from "react-i18next";

// Photos line up with v2.studentLifeIndex.stories.items by index.
const STORY_PHOTOS = [
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/7TMMR26QP9WJBR439RHEK93B5Z.jpg",
];

const ArrowButton = ({ direction, disabled, onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
    className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-v2-pill border ${
      disabled ? "cursor-default border-v2-hairline" : "border-v2-navy"
    }`}
  >
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d={direction === "prev" ? "M13 8H3M7 4L3 8l4 4" : "M3 8h10M9 4l4 4-4 4"}
        fill="none"
        stroke={disabled ? "#5A6478" : "#0E1B33"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

// Transcribed from the Paper "EC Redesign" Student Life "Stories" frame (2SO-0).
// Mobile has no Paper frame; it stacks the same card vertically.
function StudentStories() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const raw = t("v2.studentLifeIndex.stories.items", { returnObjects: true });
  const stories = Array.isArray(raw) ? raw : [];
  if (stories.length === 0) return null;

  const story = stories[index];
  const photo = STORY_PHOTOS[index % STORY_PHOTOS.length];

  return (
    <section className="bg-v2-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-14 lg:flex-row lg:items-center lg:gap-14 lg:px-[72px] lg:py-24">
        <div className="flex shrink-0 flex-col gap-[18px] lg:w-[300px]">
          <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate lg:text-[11px] lg:leading-[14px]">
            {t("v2.studentLifeIndex.stories.eyebrow")}
          </div>
          <h2 className="font-v2-heading text-[26px] font-extrabold leading-8 tracking-[-0.03em] text-v2-navy lg:text-[38px] lg:leading-[44px]">
            {t("v2.studentLifeIndex.stories.title")}
          </h2>
          <div className="flex gap-2.5 pt-2.5">
            <ArrowButton
              direction="prev"
              label={t("v2.studentLifeIndex.stories.prev")}
              disabled={index === 0}
              onClick={() => setIndex((i) => i - 1)}
            />
            <ArrowButton
              direction="next"
              label={t("v2.studentLifeIndex.stories.next")}
              disabled={index >= stories.length - 1}
              onClick={() => setIndex((i) => i + 1)}
            />
          </div>
        </div>

        <figure className="flex flex-1 flex-col overflow-hidden rounded-[8px] bg-v2-mist lg:flex-row">
          <div
            className="h-[260px] shrink-0 bg-cover lg:h-[320px] lg:w-[300px]"
            style={{ backgroundImage: `url(${photo})`, backgroundPosition: "center 25%" }}
          />
          <div className="flex flex-col justify-center gap-5 px-6 py-8 lg:gap-6 lg:px-12 lg:py-10">
            <div aria-hidden="true" className="font-['Georgia',serif] text-[56px] font-bold leading-[30px] text-v2-crimson">
              “
            </div>
            <blockquote className="font-v2-body text-[17px] leading-7 text-v2-navy lg:text-[20px] lg:leading-8">
              {story.quote}
            </blockquote>
            <figcaption className="flex flex-col gap-1 border-t border-v2-hairline pt-3.5">
              <div className="font-v2-heading text-[15px] font-bold leading-[18px] text-v2-navy">{story.name}</div>
              <div className="font-v2-body text-[13px] leading-4 text-v2-slate">{story.meta}</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default StudentStories;
