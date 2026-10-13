import { useTranslation } from "react-i18next";

const logos = [
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/35QGQNDJFG8C58V16QBRRKGAXJ.png", w: 144, h: 53 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/4YEPPCQMK9W17KCKC4RDN03Y17.png", w: 84, h: 84 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/1RNZF3AV7K6AMZ09WP1M28QJH1.png", w: 72, h: 72 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/0V1JPHDKTG6556651N7SBQGE9J.png", w: 72, h: 72 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/7TX58DY9GNVK5Y5WERCW71T11K.png", w: 72, h: 72 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/4ERFJC3EPFY0EJC6WWV5SAFJ6N.png", w: 150, h: 56 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/101718Q725SSKTHMFA2EJ6VDJF.png", w: 200, h: 50 },
];

// Transcribed from the Paper "EC Redesign" About "Partners" artboard (4BC-0).
function PartnersGrid() {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex flex-col gap-10 overflow-hidden px-6 py-16 lg:gap-12 lg:px-v2-gutter lg:py-28"
      style={{
        backgroundImage:
          "linear-gradient(120deg, var(--v2-color-navy-2) 0%, var(--v2-color-sky) 100%)",
      }}
    >
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
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-4">
          <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-[#CFE0FF]">
            {t("v2.about.partners.eyebrow")}
          </div>
          <div className="flex flex-col font-v2-heading">
            <div className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.035em] text-v2-paper lg:text-[52px] lg:leading-[58px]">
              {t("v2.about.partners.titleLine1")}
            </div>
            <div className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#CFE0FF] lg:text-[52px] lg:leading-[58px]">
              {t("v2.about.partners.titleLine2")}
            </div>
          </div>
        </div>
        <p className="font-v2-body text-[16px] leading-[26px] text-[#E4ECFA] lg:w-[400px] lg:shrink-0">
          {t("v2.about.partners.description")}
        </p>
      </div>
      <div className="relative flex flex-wrap gap-5">
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="flex h-[130px] w-[150px] shrink-0 items-center justify-center rounded-xl bg-v2-paper shadow-[0_10px_30px_#08121F2E] lg:h-[150px] lg:w-[309px]"
          >
            <img src={logo.src} alt="" style={{ width: logo.w, height: logo.h }} className="max-w-[70%] object-contain" />
          </div>
        ))}
        <div className="flex h-[130px] w-[150px] shrink-0 flex-col items-start justify-center gap-2 rounded-xl border-[1.5px] border-dashed border-white/55 px-6 lg:h-[150px] lg:w-[309px]">
          <div className="font-v2-heading text-[18px] font-extrabold leading-6 text-v2-paper lg:text-[20px] lg:leading-[26px]">
            {t("v2.about.partners.becomePartnerTitle")}
          </div>
          <div className="font-v2-body text-[13px] leading-5 text-[#DCE6F8] lg:text-[14px] lg:leading-[21px]">
            {t("v2.about.partners.becomePartnerSubtitle")} →
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersGrid;
