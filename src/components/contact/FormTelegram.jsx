import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ReactGA from "react-ga4";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";

export function FormTelegram() {
  const { t } = useTranslation();
  const prefix = "home.contactSection";
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm();
  const form = useRef();
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search);
    const utm = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term"].forEach(
      (param) => {
        utm[param] = urlSearchParams.get(param) || "";
      }
    );
    setUtmParams(utm);
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const newData = { ...data, ...utmParams };

    const formData = new FormData();
    Object.entries(newData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const message = `New contact form submission:\nName: ${data.name}\nPhone: ${data.phone}\nMessage: ${data.message}`;

    try {
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${import.meta.env.VITE_APP_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: import.meta.env.VITE_APP_TELEGRAM_CHAT_ID,
            text: message,
          }),
        }
      );

      if (!telegramResponse.ok) {
        throw new Error("Failed to send message to Telegram.");
      }

      // Send to Google Sheets
      const sheetResponse = await fetch(
        import.meta.env.VITE_APP_GOOGLE_SHEETS_API_URL,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!sheetResponse.ok)
        throw new Error("Failed to send data to Google Sheets.");

      // Send event to Google Analytics
      try {
        ReactGA.event({
          category: "Form",
          action: "generate_lead",
          label: "Telegram Contact Form",
        });
      } catch (gaError) {
        console.warn("Analytics event failed:", gaError);
      }

      window.sessionStorage.setItem("formSubmitted", true);
      reset();
      navigate("/thank-you");
      toast.success(t(`${prefix}.form.success`));
    } catch (error) {
      toast.error(t(`${prefix}.form.error`));
    } finally {
      setIsSubmitting(false);
      clearErrors(); // Clear all errors after submission
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-wrap -m-2 overflow-hidden">
        <div className="p-2 w-1/2">
          <Input
            type="text"
            id="name"
            name="name"
            label={t(`${prefix}.name`)}
            required
            register={register}
            errors={errors}
          />
        </div>
        <div className="p-2 w-1/2">
          <Input
            type="tel"
            id="phone"
            name="phone"
            label={t(`${prefix}.phone`)}
            required
            register={register}
            errors={errors}
          />
        </div>
        <div className="p-2 w-full">
          <Input
            type="textarea"
            id="message"
            name="message"
            label={t(`${prefix}.message`)}
            required
            register={register}
            errors={errors}
          />
        </div>
        <div className="p-2 w-full">
          <Button
            type="submit"
            className="bg-n-blue text-white relative"
            disabled={isSubmitting}
          >
            <span className="absolute inset-0 rounded-[inherit] shimmer-gradient bg-[length:250%_250%,100%_100%] bg-[position:200%_0,0_0] bg-no-repeat transition-all animate-shimmer"></span>
            {isSubmitting ? "Submitting..." : t(`${prefix}.sendMessage`)}
          </Button>
          {errors.general && (
            <span className="text-red-500 text-sm">
              {errors.general.message}
            </span>
          )}
        </div>
      </div>
    </form>
  );
}

const Input = ({
  type = "text",
  id,
  name,
  label,
  className,
  required,
  register,
  errors,
  ...props
}) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="leading-7 text-base text-slate-600">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          className={`w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-slate-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${className}`}
          required={required}
          {...register(name, { required: `${label} is required` })}
          {...props}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          className={`w-full bg-slate-100 bg-opacity-50 rounded border border-slate-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
          required={required}
          {...register(name, { required: `${label} is required` })}
          {...props}
        />
      )}
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name].message}</span>
      )}
    </div>
  );
};
