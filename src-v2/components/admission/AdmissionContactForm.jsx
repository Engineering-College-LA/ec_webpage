import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { programs } from "../../config/programs";

// Transcribed from the Paper "EC Redesign" Admission "Contact Form" artboard
// (2NX-0). Submission logic adapted from ContactTelegram/FormTelegram (same
// Telegram Bot API + Google Sheets webhook pattern), field set redesigned
// to match this artboard (name, phone, program, consent).
function AdmissionContactForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const message = `New admission inquiry:\nName: ${data.name}\nPhone: ${data.phone}\nProgram: ${data.program || "undecided"}`;

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    try {
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: import.meta.env.VITE_APP_TELEGRAM_CHAT_ID,
            text: message,
          }),
        },
      );
      if (!telegramResponse.ok) throw new Error("telegram failed");

      const sheetResponse = await fetch(import.meta.env.VITE_APP_GOOGLE_SHEETS_API_URL, {
        method: "POST",
        body: formData,
      });
      if (!sheetResponse.ok) throw new Error("sheets failed");

      reset();
      navigate("/thank-you");
      toast.success(t("v2.admission.contact.form.success"));
    } catch {
      toast.error(t("v2.admission.contact.form.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex grow flex-col gap-[18px] rounded-lg border border-v2-hairline p-6 shadow-[0_16px_40px_#0C18300F] lg:p-10"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="name" className="font-v2-heading text-[12px] font-semibold leading-4 text-v2-navy">
            {t("v2.admission.contact.form.nameLabel")}
          </label>
          <input
            id="name"
            type="text"
            placeholder={t("v2.admission.contact.form.namePlaceholder")}
            className="rounded-v2-sm border border-v2-hairline px-4 py-3.5 font-v2-body text-[15px] text-v2-navy placeholder:text-[#9AA0AE]"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="text-xs text-v2-crimson">{t("v2.admission.contact.form.nameLabel")}</span>}
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="phone" className="font-v2-heading text-[12px] font-semibold leading-4 text-v2-navy">
            {t("v2.admission.contact.form.phoneLabel")}
          </label>
          <input
            id="phone"
            type="tel"
            placeholder={t("v2.admission.contact.form.phonePlaceholder")}
            className="rounded-v2-sm border border-v2-hairline px-4 py-3.5 font-v2-body text-[15px] text-v2-navy placeholder:text-[#9AA0AE]"
            {...register("phone", { required: true })}
          />
          {errors.phone && <span className="text-xs text-v2-crimson">{t("v2.admission.contact.form.phoneLabel")}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="program" className="font-v2-heading text-[12px] font-semibold leading-4 text-v2-navy">
          {t("v2.admission.contact.form.programLabel")}
        </label>
        <select
          id="program"
          defaultValue=""
          className="rounded-v2-sm border border-v2-hairline px-4 py-3.5 font-v2-body text-[15px] text-v2-navy"
          {...register("program")}
        >
          <option value="">{t("v2.admission.contact.form.programUndecided")}</option>
          {programs.map((program) => (
            <option key={program.slug} value={program.slug}>
              {t(`v2.academics.programs.${program.i18nKey}.title`)}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-start gap-4 pt-1.5 lg:flex-row lg:items-center lg:justify-between">
        <label className="flex items-center gap-2.5">
          <input
            type="checkbox"
            className="h-[18px] w-[18px] shrink-0 rounded-[3px] border-[1.5px] border-v2-navy"
            {...register("consent", { required: true })}
          />
          <span className="font-v2-body text-v2-label leading-4 text-v2-slate">{t("v2.admission.contact.form.consent")}</span>
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2.5 whitespace-nowrap rounded-v2-sm bg-v2-crimson px-6 py-[15px] font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper disabled:opacity-60"
        >
          {isSubmitting ? t("v2.admission.contact.form.submitting") : t("v2.admission.contact.form.submit")}
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default AdmissionContactForm;
