import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="page h-screen max-h-[1200px] bg-slate-800 bg-hero-gradient bg-no-repeat bg-cover bg-top w-full flex items-center justify-center px-6">
      <div className="text-center text-white">
        <div className="mx-auto text-center">
          <h1 className="font-bold">
            <span className="text-3xl md:text-5xl block">
              {t("home.heroSection.welcome")}
            </span>
            <span className="text-4xl md:text-6xl lg:text-7xl">
              {t("home.heroSection.title")}
            </span>
          </h1>
          <p className="max-w-[760px] mx-auto my-6 text-sm md:text-base">
            {t("home.heroSection.description")}
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/academics">
              <Button className="py-4 relative from-slate-200 bg-gradient-to-r to-slate-100 rounded-lg">
                <span className="absolute inset-0 rounded-[inherit] shimmer-gradient bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all animate-shimmer"></span>
                {t("home.heroSection.primaryButton")}
              </Button>
            </Link>
            <a href="#contact">
              <div className="relative">
                <Button className="py-4 relative bg-n-bluish shadow-lg z-10 rounded-lg">
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
