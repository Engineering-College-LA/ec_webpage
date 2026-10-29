import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { programs } from "../../config/programs";
import ProgramCard from "./ProgramCard";
import Eyebrow from "../ui/Eyebrow";

// Transcribed from the Paper "EC Redesign" Home "Programs" section (1VN-0).
// Below lg it follows "Home — Mobile v3": a swipeable card carousel that
// bleeds off the right edge, with page dots underneath.
function ProgramsCatalog() {
  const { t } = useTranslation();
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    if (!card) return;
    const step = card.getBoundingClientRect().width + 12;
    setActive(Math.min(programs.length - 1, Math.round(track.scrollLeft / step)));
  };

  return (
    <section className="bg-v2-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[22px] py-14 pl-5 lg:gap-[44px] lg:px-v2-gutter lg:py-[104px]">
        <div className="flex flex-col gap-3 pr-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pr-0">
          <div className="flex flex-col gap-3 lg:gap-4">
            <Eyebrow className="text-[10px] leading-3 lg:text-[11px] lg:leading-[14px]">
              {t("v2.home.programs.eyebrow")}
            </Eyebrow>
            <h2 className="font-v2-heading text-[30px] font-extrabold leading-9 tracking-[-0.03em] text-v2-navy lg:text-[44px] lg:leading-[54px]">
              {t("v2.home.programs.titleStart")}{" "}
              <span className="text-v2-sky">{t("v2.home.programs.titleEnd")}</span>
            </h2>
          </div>
          <p className="hidden font-v2-body text-[16px] leading-[25px] text-v2-slate lg:block lg:w-[440px] lg:shrink-0">
            {t("v2.home.programs.description")}
          </p>
          <Link
            to="/academics"
            className="hidden whitespace-nowrap font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson lg:block"
          >
            {t("v2.home.programs.allLink")} →
          </Link>
        </div>
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pr-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:snap-none lg:gap-5 lg:overflow-visible lg:pr-0 lg:pb-2"
        >
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
        <div className="flex gap-1.5 pr-5 lg:hidden" aria-hidden="true">
          {programs.map((program, i) => (
            <div
              key={program.slug}
              className={`h-1 shrink-0 rounded-v2-pill transition-all duration-300 ${
                i === active ? "w-5 bg-v2-crimson" : "w-1.5 bg-v2-hairline"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsCatalog;
