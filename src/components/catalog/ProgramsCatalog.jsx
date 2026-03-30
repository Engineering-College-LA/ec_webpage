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
  ];
  return (
    <div className="page py-14 sm:py-20 px-4 md:px-8 text-slate-900">
      <SectionTitle>{t("home.programsSection.title")}</SectionTitle>
      <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-stretch">
        {programs.map((program, index) => (
          <div
            key={index}
            className="relative w-full max-w-[300px] bg-white rounded-3xl transition-transform hover:scale-105 p-6 text-center cursor-pointer shadow-custom"
          >
            <div className="w-full flex justify-center items-center text-n-blue">
              <GraduationCap className="w-[56px] h-[56px]" />
            </div>
            <h3 className="mb-4 font-medium text-lg">{program.name}</h3>
            <p className="pb-8 text-sm text-slate-700 ">
              {program.description}
            </p>
            <Link
              to={program.link}
              className="w-12 h-12 flex-center absolute rounded-full bottom-2 right-2 bg-n-blue"
            >
              <MoveUpRight className="text-white" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgramsCatalog;
