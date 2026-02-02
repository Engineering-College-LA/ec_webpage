import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

const CEOQuote = () => {
  const { t } = useTranslation();

  return (
    <div className="page py-16 md:py-24 px-4 sm:px-6 md:px-8 text-slate-900">
      <div className="flex flex-col items-center lg:flex-row justify-center gap-12 lg:gap-24">
        <div className="relative group">
          <div className="absolute -inset-4 border-2 border-dashed border-n-blue/30 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-n-blue/60 transition-colors"></div>

          {/* Main Circular Container */}
          <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] p-2 bg-white shadow-2xl rounded-full">
            <div className="w-full h-full bg-quote bg-no-repeat bg-cover bg-top rounded-full border-4 border-slate-50">
              <div className="w-full h-full rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]"></div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[550px] flex flex-col items-center lg:items-start text-center lg:text-left">
          <Quote className="w-12 h-12 text-n-blue mb-6 opacity-20 transform -scale-x-100" />

          <blockquote className="relative">
            <p className="text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed italic font-medium">
              {t("home.quoteSection.quote")}
            </p>
          </blockquote>

          <div className="mt-8 flex flex-col items-center lg:items-start">
            <h4 className="font-bold text-slate-700 text-xl md:text-2xl tracking-tight">
              {t("home.quoteSection.author.name")}
            </h4>

            <p className="text-sm md:text-base text-n-blue font-semibold  ">
              {t("home.quoteSection.author.title")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOQuote;
