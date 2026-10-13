import { useTranslation } from "react-i18next";
import AdmissionContactForm from "./AdmissionContactForm";

// Transcribed from the Paper "EC Redesign" Admission "Contact Form" artboard (2NX-0).
function AdmissionContact() {
  const { t } = useTranslation();

  return (
    <section id="admission-contact" className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-14 lg:flex-row lg:gap-20 lg:px-v2-gutter lg:py-24">
      <div className="flex flex-col gap-4 lg:w-[460px] lg:shrink-0">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-v2-slate">
          {t("v2.admission.contact.eyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading">
          <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[38px] lg:leading-[44px]">
            {t("v2.admission.contact.titleLine1")}
          </div>
          <div className="text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-sky lg:text-[38px] lg:leading-[44px]">
            {t("v2.admission.contact.titleLine2")}
          </div>
        </div>
        <p className="font-v2-body text-[16px] leading-[25px] text-v2-slate">{t("v2.admission.contact.description")}</p>
      </div>
      <AdmissionContactForm />
    </section>
  );
}

export default AdmissionContact;
