import { useTranslation } from "react-i18next";
import ContactTelegram from "../../components/contact/ContactTelegram";

const Affiliations = () => {
  const { t } = useTranslation();
  return (
    <div className="page py-20 pt-24 px-4 text-slate-800">
      <div className="max-w-[900px] mx-auto">
        <h2 className="page-title pt-6">{t("about.title")}</h2>
        <p className="page-paragraph">{t("about.description")}</p>
      </div>
      <ContactTelegram />
      {/* <ContactUsButton /> */}
    </div>
  );
};

export default Affiliations;
