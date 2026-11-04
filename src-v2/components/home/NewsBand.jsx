import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { news } from "../../config/news";
import Eyebrow from "../ui/Eyebrow";

const BASE = import.meta.env.BASE_URL;

const formatDate = (iso, lang) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString(lang === "en" ? "en-GB" : "ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

// Home "News" block: the latest article as a wide photo card.
function NewsBand() {
  const { t, i18n } = useTranslation();
  const latest = news[0];
  if (!latest) return null;
  const lang = i18n.language?.startsWith("en") ? "en" : "ru";
  const key = `v2.news.${latest.i18nKey}`;

  return (
    <section className="bg-v2-mist">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-12 lg:gap-10 lg:px-v2-gutter lg:py-24">
        <div className="flex flex-col gap-3.5">
          <Eyebrow className="text-[10px] leading-3 lg:text-[11px] lg:leading-[14px]">{t("v2.home.news.eyebrow")}</Eyebrow>
          <h2 className="flex flex-col font-v2-heading text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] lg:flex-row lg:gap-3 lg:text-[40px] lg:leading-[48px]">
            <span className="text-v2-navy">{t("v2.home.news.titleLine1")}</span>
            <span className="text-v2-sky">{t("v2.home.news.titleLine2")}</span>
          </h2>
        </div>

        <Link
          to={`/news/${latest.slug}`}
          className="group flex flex-col overflow-hidden rounded-[10px] bg-v2-paper shadow-[0_10px_30px_#0C18300F] transition-shadow duration-200 hover:shadow-[0_16px_40px_#0C18301F] lg:flex-row lg:rounded-xl"
        >
          <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:w-[52%] lg:shrink-0">
            <img
              src={`${BASE}${latest.cover}`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col gap-3 p-5 lg:justify-center lg:gap-4 lg:p-12">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-[4px] bg-v2-blush px-2 py-1 font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.2em] text-v2-crimson">
                {t(`${key}.tag`)}
              </span>
              <span className="font-v2-body text-[13px] leading-4 text-v2-slate">{formatDate(latest.date, lang)}</span>
            </div>
            <h3 className="font-v2-heading text-[22px] font-extrabold leading-[27px] tracking-[-0.02em] text-v2-navy lg:text-[30px] lg:leading-[36px]">
              {t(`${key}.title`)}
            </h3>
            <p className="font-v2-body text-[14px] leading-[22px] text-v2-slate lg:text-[16px] lg:leading-[26px]">
              {t(`${key}.excerpt`)}
            </p>
            <span className="flex items-center gap-2 pt-1 font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson">
              {t("v2.home.news.readMore")}
              <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default NewsBand;
