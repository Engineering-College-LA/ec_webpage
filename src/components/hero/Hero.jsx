import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="page min-h-[560px] py-24 sm:py-32 h-[90vh] max-h-[1200px] bg-slate-800 bg-hero-gradient bg-no-repeat bg-cover bg-top w-full flex items-center justify-center px-4 sm:px-6">
      <div className="text-center text-white">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 sm:px-5 py-2 mb-4 sm:mb-6 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.25em] uppercase text-white/70 [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
            {t("home.heroSection.welcome")}
          </div>
          <h1 className="font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight sm:leading-none tracking-tight mb-4 sm:mb-5 [text-shadow:0_2px_16px_rgba(0,0,0,0.7)]">
            {t("home.heroSection.title")}
          </h1>
          <div className="flex justify-center mb-5 sm:mb-7">
            <div className="w-14 h-[3px] bg-n-bluish rounded-full"></div>
          </div>
          <p className="max-w-[600px] mx-auto mb-6 sm:mb-8 text-xs sm:text-sm md:text-base text-white/80 leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
            {t("home.heroSection.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link to="/academics" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto py-3.5 sm:py-4 relative from-slate-200 bg-gradient-to-r to-slate-100 rounded-lg">
                <span className="absolute inset-0 rounded-[inherit] shimmer-gradient bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all animate-shimmer"></span>
                {t("home.heroSection.primaryButton")}
              </Button>
            </Link>
            <a href="#contact" className="w-full sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <Button className="w-full sm:w-auto py-3.5 sm:py-4 relative bg-n-bluish shadow-lg z-10 rounded-lg">
                  {t("home.heroSection.secondaryButton")}
                </Button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-4 border-n-bluish animate-pulseRing"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
