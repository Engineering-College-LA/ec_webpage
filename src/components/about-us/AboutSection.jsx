import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import CustomList from "../list/CustomList";
import SectionTitle from "../title/SectionTitle";
import Button from "../button/Button";

const AboutSection = () => {
  const { t } = useTranslation();

  const listForMission = [
    { text: t("home.aboutSection.listItems.history"), link: "/about" },
    { text: t("home.aboutSection.listItems.missionAndVision"), link: "/about" },
    {
      text: t("home.aboutSection.listItems.programs"),
      link: "/academics",
    },
  ];

  return (
    <div className="page py-16 sm:py-24 px-4 sm:px-6 md:px-8 text-slate-900">
      <div className="flex flex-col items-center lg:flex-row justify-center gap-12">
        <div className="w-full max-w-[600px] h-[400px] p-1.5 bg-white shadow-custom rounded-2xl">
          <div className="w-full h-full bg-mission bg-no-repeat bg-cover bg-center rounded-2xl"></div>
        </div>
        <div className="w-full max-w-[500px]">
          <SectionTitle className="text-start">
            {t("home.aboutSection.title")}
          </SectionTitle>
          <p className="text-base my-2">{t("home.aboutSection.description")}</p>
          <CustomList list={listForMission} className="my-4" />
          <Link to={"/about"} preventScrollReset={true}>
            <Button className="uppercase bg-n-blue text-white relative">
              <span className="absolute inset-0 rounded-[inherit] shimmer-gradient bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all animate-shimmer"></span>
              {t("home.aboutSection.learnMoreButton")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
