import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { partners } from "../../config/partners";

// Same list as the Partners page, so both stay in sync.
// Light (white) logos sit on a navy tile so they stay visible.
function PartnerTile({ partner }) {
  const { name, url, logo, light, fill } = partner;
  const tile = `flex h-24 items-center justify-center overflow-hidden rounded-[10px] shadow-[0_10px_30px_#08121F2E] lg:h-[150px] lg:rounded-xl ${
    light ? "bg-v2-navy" : "bg-v2-paper"
  } ${fill ? "" : "px-5 lg:px-8"}`;
  const img = (
    <img
      src={logo}
      alt={name}
      loading="lazy"
      draggable={false}
      className={fill ? "h-full w-full object-cover" : "max-h-10 max-w-full object-contain lg:max-h-[72px]"}
    />
  );
  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className={tile}>
      {img}
    </a>
  ) : (
    <div className={tile} aria-label={name}>
      {img}
    </div>
  );
}

// Transcribed from the Paper "EC Redesign" About "Partners" artboard (4BC-0).
// Below lg ("О колледже — Mobile v3"): two-column grid of smaller tiles.
function PartnersGrid() {
  const { t } = useTranslation();

  return (
    <section
      className="relative overflow-hidden lg:[--partners-angle:120deg]"
      style={{
        backgroundImage:
          "linear-gradient(var(--partners-angle, 150deg), var(--v2-color-navy-2) 0%, var(--v2-color-sky) 100%)",
      }}
    >
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-7 px-5 py-14 lg:gap-12 lg:px-v2-gutter lg:py-28">
      <svg
        viewBox="0 0 1440 180"
        aria-hidden="true"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 hidden w-full lg:block"
      >
        <path
          d="M0 180 L0 120 L180 60 L300 110 L470 30 L620 100 L760 50 L900 120 L1060 40 L1220 110 L1340 70 L1440 100 L1440 180 Z"
          fill="#FFFFFF0F"
        />
      </svg>
      <div className="relative flex flex-col gap-3.5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-3.5 lg:gap-4">
          <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-[#CFE0FF] lg:text-[11px] lg:leading-[14px]">
            {t("v2.about.partners.eyebrow")}
          </div>
          <div className="flex flex-col font-v2-heading">
            <div className="text-[30px] font-extrabold leading-[34px] tracking-[-0.03em] text-v2-paper lg:text-[52px] lg:leading-[58px] lg:tracking-[-0.035em]">
              {t("v2.about.partners.titleLine1")}
            </div>
            <div className="text-[30px] font-extrabold leading-[34px] tracking-[-0.03em] text-[#CFE0FF] lg:text-[52px] lg:leading-[58px] lg:tracking-[-0.035em]">
              {t("v2.about.partners.titleLine2")}
            </div>
          </div>
        </div>
        <p className="font-v2-body text-[14px] leading-[22px] text-[#E4ECFA] lg:w-[400px] lg:shrink-0 lg:text-[16px] lg:leading-[26px]">
          <span className="lg:hidden">{t("v2.about.partners.descriptionShort")}</span>
          <span className="hidden lg:inline">{t("v2.about.partners.description")}</span>
        </p>
      </div>
      <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
        {partners.map((partner) => (
          <PartnerTile key={partner.name} partner={partner} />
        ))}
        <Link
          to="/affiliations#become-partner"
          className="flex h-24 flex-col items-start justify-center gap-1 rounded-[10px] border-[1.5px] border-dashed border-white/55 px-4 transition-colors hover:border-white lg:h-[150px] lg:gap-2 lg:rounded-xl lg:px-6"
        >
          <div className="font-v2-heading text-[15px] font-extrabold leading-5 text-v2-paper lg:text-[20px] lg:leading-[26px]">
            {t("v2.about.partners.becomePartnerTitle")}
          </div>
          <div className="font-v2-body text-[12px] leading-[17px] text-[#DCE6F8] lg:text-[14px] lg:leading-[21px]">
            <span className="lg:hidden">{t("v2.about.partners.becomePartnerSubtitleShort")}</span>
            <span className="hidden lg:inline">{t("v2.about.partners.becomePartnerSubtitle")}</span> →
          </div>
        </Link>
      </div>
      </div>
    </section>
  );
}

export default PartnersGrid;
