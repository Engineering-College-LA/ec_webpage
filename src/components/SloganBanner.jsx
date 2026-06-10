import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const SloganBanner = () => {
  const { t } = useTranslation();

  return (
    <HeroHighlight
      containerClassName="border-y border-slate-100 py-20 md:py-32 overflow-hidden"
    >
      {/* large background letters */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="text-[15rem] md:text-[25rem] font-bold text-slate-50 leading-none">
          E|C
        </span>
      </div>

      <div className="page px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-2 animate-fadeIn">
              <div className="h-[1px] w-8 md:w-12 bg-n-blue/30"></div>
              <span className="text-slate-400 font-medium tracking-[0.1em] sm:tracking-[0.4em] uppercase text-base md:text-lg whitespace-nowrap">
                {t("home.quoteSection.slogan.part1")}
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-n-bluish-70"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [20, -5, 0] }}
              transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <h2 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-n-blue-hard sm:leading-[0.8] text-center">
                <Highlight>
                  {t("home.quoteSection.slogan.part2")}
                </Highlight>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default SloganBanner;
