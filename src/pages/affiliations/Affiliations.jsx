import { useTranslation } from "react-i18next";
import ContactTelegram from "../../components/contact/ContactTelegram";
import PartnersCarousel from "../../components/partners/PartnersCarousel";

const Affiliations = () => {
  const { t } = useTranslation();
  return (
    <div className="page py-20 pt-24 px-4 text-slate-800">
      <div className="max-w-[900px] mx-auto px-4">
        <h2 className="page-title pt-6">{t("about.title")}</h2>
        <p className="page-paragraph">{t("about.description")}</p>
      </div>
      <PartnersCarousel />
      <ContactTelegram />
      {/* <ContactUsButton /> */}
    </div>
  );
};

export default Affiliations;
