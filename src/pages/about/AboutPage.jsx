import { useTranslation } from "react-i18next";
import ContactUsButton from "../../components/contact/CallButton";
import ContactTelegram from "../../components/contact/ContactTelegram";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="page py-20 pt-24 px-4 text-slate-800">
      <div className="max-w-[900px] mx-auto">
        <h2 className="page-title pt-6">{t("about.collegeTitle")}</h2>
        <h3 className="page-subtitle">{t("about.overview")}</h3>
        <p className="page-paragraph">{t("about.overviewDescription")}</p>

        <h3 className="page-subtitle">{t("about.mission")}</h3>
        <p className="page-paragraph">{t("about.missionDescription")}</p>
        <h3 className="page-subtitle">{t("about.vision")}</h3>
        <p className="page-paragraph">{t("about.visionDescription")}</p>

        <h2 className="page-title pt-6">{t("about.title")}</h2>
        <p className="page-paragraph">{t("about.description")}</p>
      </div>
      <ContactTelegram />
      {/* <ContactUsButton /> */}
    </div>
  );
}

export default AboutPage;
