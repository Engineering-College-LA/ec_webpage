import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";
import person1 from "../assets/person_01.jpg";

const QuoteSection = () => {
  const { t } = useTranslation();

  return (
    <div className="page py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-[400px] mx-auto lg:ml-0">
              <div className="absolute -top-4 -right-4 w-full h-full border-[3px] border-n-blue rounded-3xl z-0"></div>

              {/* Main Image Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-custom bg-slate-200 aspect-[4/5]">
                <img
                  src={person1}
                  alt="Nurlan Shaidullaev"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Minimalist Name Badge */}
              <div className="absolute -bottom-6 -right-4 lg:right-[-20%] z-20 bg-white p-6 rounded-2xl shadow-custom border-l-4 border-n-blue max-w-[240px]">
                <h4 className="font-bold text-slate-700 leading-tight">
                  {t("home.quoteSection.author.name")}
                </h4>
                <p className="text-[11px] text-n-blue font-semibold uppercase tracking-wider mt-1">
                  {t("home.quoteSection.author.title")}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Slogan & Quote Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-10">
              <p className="text-slate-700 font-bold tracking-[0.2em] uppercase text-sm mb-3">
                {t("home.quoteSection.slogan.part1")}
              </p>
              <h2 className="section-title text-4xl md:text-5xl lg:text-6xl text-n-blue m-0 p-0 leading-none">
                {t("home.quoteSection.slogan.part2")}
              </h2>
            </div>

            <div className="relative">
              <Quote className="absolute -top-8 -left-2 w-8 h-8 text-n-blue/20 rotate-180" />
              <blockquote className="relative z-10">
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic">
                  {t("home.quoteSection.quote")}
                </p>
              </blockquote>

              <div className="mt-8 flex gap-2">
                <div className="w-12 h-[2px] bg-n-blue"></div>
                <div className="w-2 h-[2px] bg-n-blue/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
