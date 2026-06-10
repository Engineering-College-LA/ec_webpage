import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { partners } from "../../config/partners";

const initials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const PartnerCard = ({ partner }) => {
  const { name, url, logo, light, hideName, fill } = partner;

  // White/transparent logos need a dark card so they stay visible.
  const cardBg = light ? "bg-n-blue-hard" : "bg-white";
  const nameColor = light ? "text-white" : "text-slate-600";

  const inner = (
    <div
      className={`flex h-28 w-36 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-slate-100 shadow-custom2 transition-transform duration-300 ease-out group-hover/card:scale-110 sm:h-32 sm:w-44 ${cardBg} ${fill ? "" : "px-3 sm:px-4"}`}
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          loading="lazy"
          draggable={false}
          className={
            fill
              ? "h-full w-full object-cover"
              : `max-w-full object-contain ${hideName ? "h-16 sm:h-20" : "h-12 sm:h-14"}`
          }
        />
      ) : (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-n-blue-light text-base font-bold text-n-blue sm:h-14 sm:w-14">
          {initials(name)}
        </div>
      )}
      {!hideName && (
        <span
          className={`line-clamp-1 text-center text-xs font-medium ${nameColor}`}
        >
          {name}
        </span>
      )}
    </div>
  );

  const wrapper =
    "group/card relative shrink-0 transition-transform duration-300 hover:z-10";

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${wrapper} cursor-pointer`}
      aria-label={name}
    >
      {inner}
    </a>
  ) : (
    <div className={wrapper}>{inner}</div>
  );
};

const PartnersCarousel = ({ fullWidth = false, hideTitle = false }) => {
  const { t } = useTranslation();
  const scrollRef = useRef(null);
  const pausedRef = useRef(false);

  // Duplicate the list so we can loop seamlessly by resetting scrollLeft.
  const loop = [...partners, ...partners];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    let raf;
    const speed = 0.5; // px per frame

    const step = () => {
      if (!pausedRef.current) {
        el.scrollLeft += speed;
        // first copy ends at half the scroll width -> reset seamlessly
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pause = () => (pausedRef.current = true);
  const resume = () => (pausedRef.current = false);

  return (
    <section
      className={`mx-auto mt-12 px-4 sm:mt-16 ${fullWidth ? "w-full max-w-none" : "max-w-[900px]"}`}
    >
      {!hideTitle && (
        <h3 className="mb-6 text-left text-xl font-semibold text-slate-800 sm:mb-8 sm:text-2xl">
          {t("about.partnersTitle", "Our Partners")}
        </h3>
      )}

      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

      <div className="relative">
        {/* edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-16" />

        {/* Native horizontal scroll: wheel/trackpad on desktop, swipe on mobile.
            Hovering or touching pauses the auto-scroll. */}
        <div
          ref={scrollRef}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
          className="no-scrollbar flex gap-4 overflow-x-auto px-4 py-6 sm:gap-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {loop.map((partner, i) => (
            <PartnerCard key={`${partner.name}-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
