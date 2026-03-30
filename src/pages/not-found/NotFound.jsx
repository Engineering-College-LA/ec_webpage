import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { ContactLinkButton } from "../../components/reasons/ReasonsToStudy";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-white">
      <div className="absolute inset-0 grid-layout opacity-20 pointer-events-none"></div>

      <div className="absolute select-none pointer-events-none z-0">
        <span className="text-[20rem] md:text-[40rem] font-bold text-slate-50 leading-none">
          404
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div className="relative">
          <h1 className="section-title text-[8rem] md:text-[15rem] leading-none mb-0 select-none bg-clip-text text-transparent bg-gradient-to-b from-n-blue via-[#5a99e9] to-n-blue bg-[length:200%_auto] animate-shimmer">
            404
          </h1>
        </div>

        <div className="max-w-md -mt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-2 uppercase tracking-tight">
            {t("notFound.title")}
          </h2>
          <p className="text-slate-500 font-medium mb-8 leading-relaxed">
            {t("notFound.subtitle")}
            <br />
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link to="/" className="group">
            <ContactLinkButton>
              <div className="flex items-center gap-2">
                <Home size={18} />
                <span>{t("notFound.goBackBtn")}</span>
              </div>
            </ContactLinkButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
