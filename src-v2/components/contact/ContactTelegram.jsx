import SectionTitle from "../title/SectionTitle";
import { AmoCRMForm } from "./AmoCRMForm";
import { useTranslation } from "react-i18next";

function ContactTelegram() {
  const { t } = useTranslation();

  return (
    <div className="page py-14 sm:py-20 px-4 md:px-12">
      <div className="flex flex-col text-center w-full mb-12 text-slate-900">
        <SectionTitle>{t("home.contactSection.sectionTitle")}</SectionTitle>
        <p className="w-full mx-auto leading-relaxed text-base max-w-3xl">
          {t("home.contactSection.description")}
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <AmoCRMForm />
      </div>
    </div>
  );
}

export default ContactTelegram;
