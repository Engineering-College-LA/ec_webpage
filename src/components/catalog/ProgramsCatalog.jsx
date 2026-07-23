import SectionTitle from "../title/SectionTitle";
import { GraduationCap, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProgramsCatalog() {
  const { t } = useTranslation();

  const programs = [
    {
      name: t("home.programsSection.programs.0.name"),
      description: t("home.programsSection.programs.0.description"),
      link: "/academics/software-engineering",
    },
    {
      name: t("home.programsSection.programs.1.name"),
      description: t("home.programsSection.programs.1.description"),
      link: "/academics/cyber-security",
    },
    {
      name: t("home.programsSection.programs.2.name"),
      description: t("home.programsSection.programs.2.description"),
      link: "/academics/management-in-it",
    },
    {
      name: t("home.programsSection.programs.3.name"),
      description: t("home.programsSection.programs.3.description"),
      link: "/academics/industrial-design",
    },
    {
      name: t("home.programsSection.programs.4.name"),
      description: t("home.programsSection.programs.4.description"),
      link: "/academics/marketing",
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
            className="relative w-full max-w-[290px] sm:max-w-[300px] bg-white rounded-3xl transition-transform hover:scale-105 p-5 sm:p-6 text-center cursor-pointer shadow-custom flex flex-col justify-between"
          >
            <div>
              <div className="w-full flex justify-center items-center text-n-blue mb-2">
                <GraduationCap className="w-12 h-12 sm:w-[56px] sm:h-[56px]" />
              </div>
              <h3 className="mb-3 font-semibold text-base sm:text-lg text-slate-800">{program.name}</h3>
              <p className="pb-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {program.description}
              </p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-center absolute rounded-full bottom-3 right-3 bg-n-blue shadow-md">
              <MoveUpRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProgramsCatalog;
