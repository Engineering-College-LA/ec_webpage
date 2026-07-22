import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Trophy, ArrowRight } from "lucide-react";
import ContactTelegram from "../../components/contact/ContactTelegram";
import FAQ from "../../components/faq/FAQ";

const SECTIONS = [
  { id: "how-to-apply", label: "admission.sections.howToApply" },
  { id: "tuition", label: "admission.sections.tuition" },
  { id: "scholarships", label: "admission.sections.scholarships" },
  { id: "faq", label: "admission.sections.faq" },
];

const Admission = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [active, setActive] = useState(SECTIONS[0].id);

  // Honor a #section hash when arriving from another page (e.g. event CTA).
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const timer = setTimeout(
        () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
        100,
      );
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const renderList = (list) => {
    if (!Array.isArray(list)) return null;
    return (
      <ul className="list-disc pl-5 space-y-1">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  // Highlight the sub-nav button for whichever section is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-160px 0px -55% 0px" },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sch = (key, opts) => t(`admission.scholarship.${key}`, opts);

  return (
    <div className="page pt-24 text-slate-900">
      {/* Sticky sub-navigation */}
      <nav className="sticky top-[72px] z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[860px] gap-2 overflow-x-auto px-4 py-3 no-scrollbar">
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none;}`}</style>
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === id
                  ? "bg-n-blue text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {t(label)}
            </button>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-[860px] px-4 pb-16 pt-10 text-slate-700">
        {/* Scholarship / Olympiad event banner */}
        <Link
          to="/events/young-innovators-olympiad"
          className="group mb-8 flex flex-col gap-4 overflow-hidden rounded-2xl bg-n-blue-hard p-5 text-white transition-shadow hover:shadow-custom sm:flex-row sm:items-center sm:gap-5"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-main/20">
            <Trophy className="h-6 w-6 text-main" />
          </div>
          <div className="flex-1">
            <span className="inline-block rounded-full bg-main px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-n-blue-hard">
              {t("olympiad.banner.tag")}
            </span>
            <p className="mt-2 text-lg font-bold leading-snug">
              {t("olympiad.banner.title")}
            </p>
            <p className="mt-1 text-sm text-n-bluish-50">
              {t("olympiad.banner.text")}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-white/10 px-4 py-2 text-sm font-semibold transition-colors group-hover:bg-white/20 sm:self-center">
            {t("olympiad.banner.cta")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>

        <h2 className="page-title">{t("admission.title")}</h2>

        {/* How to Apply */}
        <section id="how-to-apply" className="scroll-mt-[150px] pt-10">
          <h3 className="page-subtitle">{t("admission.sections.howToApply")}</h3>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start">
            <div className="w-full text-base font-normal">
              <h4 className="font-semibold text-slate-800">
                {t("admission.requirements.title")}:
              </h4>
              <article className="page-paragraph">
                {t("admission.requirements.description")}
                {renderList(
                  t("admission.requirements.list", { returnObjects: true }),
                )}
              </article>

              <h4 className="pt-6 font-semibold text-slate-800">
                {t("admission.documents.title")}:
              </h4>
              <article className="page-paragraph">
                {renderList(
                  t("admission.documents.list", { returnObjects: true }),
                )}
              </article>
            </div>

            <div className="h-96 w-full max-w-[400px] self-center rounded-md bg-white p-1.5 shadow-md lg:self-start">
              <div className="bg-application h-full w-full rounded-md bg-cover bg-center bg-no-repeat"></div>
            </div>
          </div>
        </section>

        {/* Tuition & Fees */}
        <section id="tuition" className="scroll-mt-[150px] pt-12">
          <h3 className="page-subtitle">{t("admission.sections.tuition")}</h3>
          <h4 className="mt-4 font-semibold text-slate-800">
            {t("admission.cost.title")}:
          </h4>
          <p className="page-paragraph">{t("admission.cost.description")}</p>
        </section>

        {/* Scholarships & Financial Support */}
        <section id="scholarships" className="scroll-mt-[150px] pt-12">
          <h3 className="page-subtitle">{sch("title")}</h3>
          <div className="page-paragraph space-y-3">
            {(Array.isArray(sch("intro", { returnObjects: true })) ? sch("intro", { returnObjects: true }) : []).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h4 className="pt-6 font-semibold text-slate-800">
            {sch("eligibilityTitle")}
          </h4>
          <p className="mt-2">{sch("eligibilityIntro")}</p>
          <div className="mt-3">
            {renderList(sch("eligibilityList", { returnObjects: true }))}
          </div>

          <h4 className="pt-6 font-semibold text-slate-800">
            {sch("howToTitle")}
          </h4>
          <div className="mt-2 space-y-3">
            {(Array.isArray(sch("howToText", { returnObjects: true })) ? sch("howToText", { returnObjects: true }) : []).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h4 className="pt-6 font-semibold text-slate-800">
            {sch("importantTitle")}
          </h4>
          <div className="mt-2 space-y-3">
            {(Array.isArray(sch("importantText", { returnObjects: true })) ? sch("importantText", { returnObjects: true }) : []).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-n-bluish-50 bg-n-blue-light p-5">
            <h4 className="font-semibold text-slate-800">{sch("moreTitle")}</h4>
            <div className="mt-2 space-y-3">
              {(Array.isArray(sch("moreText", { returnObjects: true })) ? sch("moreText", { returnObjects: true }) : []).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-[150px]">
        <FAQ />
      </section>

      <ContactTelegram />
    </div>
  );
};

export default Admission;
