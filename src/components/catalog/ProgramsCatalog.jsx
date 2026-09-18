import SectionTitle from "../title/SectionTitle";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gerbSoftwareEngineering from "../../assets/gerbs/software-engineering.png";
import gerbCyberSecurity from "../../assets/gerbs/cyber-security.png";
import gerbManagement from "../../assets/gerbs/management.png";
import gerbDesign from "../../assets/gerbs/industrial-design.png";
import gerbMarketing from "../../assets/gerbs/marketing.png";

function ProgramsCatalog() {
  const { t } = useTranslation();

  const programs = [
    {
      name: t("home.programsSection.programs.0.name"),
      description: t("home.programsSection.programs.0.description"),
      link: "/academics/software-engineering",
      gerb: gerbSoftwareEngineering,
    },
    {
      name: t("home.programsSection.programs.1.name"),
      description: t("home.programsSection.programs.1.description"),
      link: "/academics/cyber-security",
      gerb: gerbCyberSecurity,
    },
    {
      name: t("home.programsSection.programs.2.name"),
      description: t("home.programsSection.programs.2.description"),
      link: "/academics/management-in-it",
      gerb: gerbManagement,
    },
    {
      name: t("home.programsSection.programs.3.name"),
      description: t("home.programsSection.programs.3.description"),
      link: "/academics/industrial-design",
      gerb: gerbDesign,
    },
    {
      name: t("home.programsSection.programs.4.name"),
      description: t("home.programsSection.programs.4.description"),
      link: "/academics/marketing",
      gerb: gerbMarketing,
    },
  ];
  return (
    <div className="page py-14 sm:py-20 px-4 md:px-8 text-slate-900">
      <SectionTitle>{t("home.programsSection.title")}</SectionTitle>
      <div className="flex flex-wrap justify-center gap-5 sm:gap-6 lg:gap-8 items-stretch">
        {programs.map((program, index) => (
          <Link
            key={index}
            to={program.link}
            className="group relative w-full max-w-[290px] sm:max-w-[300px] bg-white rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl p-5 sm:p-6 text-center cursor-pointer shadow-custom flex flex-col justify-between border border-slate-100"
          >
            <div>
              <div className="w-full flex justify-center items-center mb-3">
                <img
                  src={program.gerb}
                  alt={program.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-2 font-bold text-base sm:text-lg text-slate-800">{program.name}</h3>
              <p className="pb-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {program.description}
              </p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-center absolute rounded-full bottom-3 right-3 bg-n-blue shadow-md group-hover:bg-blue-600 transition-colors">
              <MoveUpRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProgramsCatalog;
