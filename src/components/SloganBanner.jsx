import { useTranslation } from "react-i18next";

const SloganBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full overflow-hidden bg-white py-20 md:py-32 border-y border-slate-100">
      <div className="absolute inset-0 grid-layout opacity-[0.15] pointer-events-none"></div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="text-[15rem] md:text-[25rem] font-bold text-slate-50 leading-none">
          E|C
        </span>
      </div>

      <div className="page relative z-10 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-2 animate-fadeIn">
              <div className="h-[1px] w-8 md:w-12 bg-n-blue/30"></div>
              <span className="text-slate-400 font-medium tracking-[0.1em] sm:tracking-[0.4em] uppercase text-base md:text-lg whitespace-nowrap">
                {t("home.quoteSection.slogan.part1")}
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-n-bluish-70"></div>
            </div>

            <div className="relative">
              <h2 className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-n-blue-hard sm:leading-[0.8] text-center">
                <span className="relative inline-block">
                  <span className="relative z-10">
                    {t("home.quoteSection.slogan.part2")}
                  </span>

                  <span className="absolute bottom-0 left-0 w-full h-[30%] bg-n-blue/10 -z-10 rounded-sm"></span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SloganBanner;
