import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { partners } from "../../config/partners";
import Eyebrow from "../../components/ui/Eyebrow";

const CONTACT_EMAIL = "info@college.edu.kg";

// Left accent colours, same steps as the Admission path / Student life rows.
const benefitBorders = ["border-l-v2-navy-2", "border-l-v2-step-3", "border-l-v2-crimson"];

const ArrowIcon = ({ color = "#FFFFFF" }) => (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const initials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

// One logo tile. Light (white) logos sit on a navy tile so they stay visible.
function PartnerTile({ partner }) {
  const { name, url, logo, light, fill } = partner;
  const tile = `group flex h-24 items-center justify-center overflow-hidden rounded-[10px] border transition-shadow duration-200 lg:h-[150px] lg:rounded-xl ${
    light ? "border-v2-navy bg-v2-navy" : "border-v2-hairline bg-v2-paper"
  } ${url ? "hover:shadow-[0_10px_30px_#0C18301F]" : ""} ${fill ? "" : "px-5 lg:px-8"}`;

  const content = logo ? (
    <img
      src={logo}
      alt={name}
      loading="lazy"
      draggable={false}
      className={fill ? "h-full w-full object-cover" : "max-h-12 max-w-full object-contain lg:max-h-[72px]"}
    />
  ) : (
    <span className="font-v2-heading text-[18px] font-extrabold text-v2-navy">{initials(name)}</span>
  );

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className={tile}>
      {content}
    </a>
  ) : (
    <div className={tile} aria-label={name}>
      {content}
    </div>
  );
}

// Partners page in the v3 "Alpine" style. Paper has no artboard for it, so
// it reuses patterns from the About / Academics pages: navy hero with a
// ridge, logo grid, accent-bar cards and the navy→sky partners gradient.
function Affiliations() {
  const { t } = useTranslation();
  const benefits = t("v2.partnersPage.benefits", { returnObjects: true });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-v2-navy">
        <svg
          viewBox="0 0 1440 120"
          aria-hidden="true"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 h-[60px] w-full lg:h-[120px]"
        >
          <path d="M0 120V88L120 70 220 84 330 40 420 72 540 30 640 66 760 22 880 70 990 46 1110 78 1220 50 1330 74 1440 58V120Z" fill="#1C3154" />
          <path d="M330 40l-16 15 10-3 6 6 8-8zM760 22l-18 17 11-4 7 7 9-10z" fill="#FFFFFF59" />
          <path d="M0 120V104L160 94 320 104 480 90 640 102 800 88 960 100 1120 90 1280 102 1440 94V120Z" fill="#142541" />
        </svg>
        <div className="relative mx-auto flex max-w-[1440px] flex-col gap-3.5 px-5 pt-9 pb-v2-gutter lg:gap-[22px] lg:px-v2-gutter lg:pt-24 lg:pb-[150px]">
          <Eyebrow className="text-[10px] leading-3 text-[#8FA3CC] lg:text-[11px] lg:leading-[14px]">
            {t("v2.partnersPage.eyebrow")}
          </Eyebrow>
          <h1 className="flex flex-col font-v2-heading text-[32px] font-extrabold leading-[37px] tracking-[-0.035em] lg:text-[56px] lg:leading-[62px]">
            <span className="text-v2-paper">{t("v2.partnersPage.titleLine1")}</span>
            <span className="text-v2-step-4">{t("v2.partnersPage.titleLine2")}</span>
          </h1>
          <p className="font-v2-body text-[14px] leading-[22px] text-[#C4CCDD] lg:max-w-[560px] lg:text-[17px] lg:leading-[27px]">
            {t("v2.partnersPage.description")}
          </p>
        </div>
      </section>

      {/* Logo grid */}
      <section className="bg-v2-paper">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-12 lg:gap-11 lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-3.5">
            <Eyebrow className="text-[10px] leading-3 lg:text-[11px] lg:leading-[14px]">
              {t("v2.partnersPage.gridEyebrow")}
            </Eyebrow>
            <h2 className="flex flex-col font-v2-heading text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] lg:flex-row lg:gap-3 lg:text-[40px] lg:leading-[48px]">
              <span className="text-v2-navy">{t("v2.partnersPage.gridTitleLine1")}</span>
              <span className="text-v2-sky">{t("v2.partnersPage.gridTitleLine2")}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {partners.map((partner) => (
              <PartnerTile key={partner.name} partner={partner} />
            ))}
            <a
              href="#become-partner"
              className="flex h-24 flex-col items-start justify-center gap-1 rounded-[10px] border-[1.5px] border-dashed border-v2-step-3 px-4 transition-colors hover:border-v2-navy lg:h-[150px] lg:gap-2 lg:rounded-xl lg:px-6"
            >
              <span className="font-v2-heading text-[15px] font-extrabold leading-5 text-v2-navy lg:text-[20px] lg:leading-[26px]">
                {t("v2.about.partners.becomePartnerTitle")}
              </span>
              <span className="font-v2-body text-[12px] leading-[17px] text-v2-slate lg:text-[14px] lg:leading-[21px]">
                <span className="lg:hidden">{t("v2.about.partners.becomePartnerSubtitleShort")}</span>
                <span className="hidden lg:inline">{t("v2.about.partners.becomePartnerSubtitle")}</span> →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-v2-mist">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-12 lg:gap-11 lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-3.5">
            <Eyebrow className="text-[10px] leading-3 lg:text-[11px] lg:leading-[14px]">
              {t("v2.partnersPage.benefitsEyebrow")}
            </Eyebrow>
            <h2 className="flex flex-col font-v2-heading text-[26px] font-extrabold leading-[31px] tracking-[-0.03em] lg:flex-row lg:gap-3 lg:text-[40px] lg:leading-[48px]">
              <span className="text-v2-navy">{t("v2.partnersPage.benefitsTitleLine1")}</span>
              <span className="text-v2-sky">{t("v2.partnersPage.benefitsTitleLine2")}</span>
            </h2>
          </div>
          <div className="grid gap-2.5 lg:grid-cols-3 lg:gap-5">
            {Array.isArray(benefits) &&
              benefits.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex flex-col gap-1.5 rounded-[6px] border-l-4 bg-v2-paper p-4 lg:gap-3 lg:p-8 ${benefitBorders[i % benefitBorders.length]}`}
                >
                  <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.22em] text-v2-slate">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-v2-heading text-[16px] font-extrabold leading-5 text-v2-navy lg:text-[22px] lg:leading-7">
                    {item.title}
                  </div>
                  <p className="font-v2-body text-v2-label leading-5 text-v2-slate lg:text-[15px] lg:leading-6">
                    {item.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Become a partner */}
      <section
        id="become-partner"
        className="scroll-mt-[60px] lg:scroll-mt-20"
        style={{ backgroundImage: "linear-gradient(150deg, var(--v2-color-navy-2) 0%, var(--v2-color-sky) 100%)" }}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3.5 px-5 py-14 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:px-v2-gutter lg:py-24">
          <div className="flex flex-col gap-3.5 lg:max-w-[640px] lg:gap-4">
            <Eyebrow className="text-[10px] leading-3 text-[#CFE0FF] lg:text-[11px] lg:leading-[14px]">
              {t("v2.partnersPage.ctaEyebrow")}
            </Eyebrow>
            <h2 className="flex flex-col font-v2-heading text-[30px] font-extrabold leading-[34px] tracking-[-0.03em] lg:text-[48px] lg:leading-[54px]">
              <span className="text-v2-paper">{t("v2.partnersPage.ctaTitleLine1")}</span>
              <span className="text-[#CFE0FF]">{t("v2.partnersPage.ctaTitleLine2")}</span>
            </h2>
            <p className="font-v2-body text-[14px] leading-[22px] text-[#E4ECFA] lg:text-[16px] lg:leading-[26px]">
              {t("v2.partnersPage.ctaDescription")}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 pt-2 lg:shrink-0 lg:flex-row lg:gap-3 lg:pt-0">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center justify-center gap-2.5 rounded-v2-sm bg-v2-crimson p-4 font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:px-6"
            >
              {t("v2.partnersPage.ctaEmail")}
              <ArrowIcon />
            </a>
            <Link
              to="/about"
              className="flex items-center justify-center rounded-v2-sm border-[1.5px] border-white/70 p-[15px] font-v2-heading text-[15px] font-bold leading-[18px] text-v2-paper lg:px-6"
            >
              {t("v2.partnersPage.ctaContacts")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Affiliations;
