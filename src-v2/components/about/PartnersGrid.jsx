import { useTranslation } from "react-i18next";

const logos = [
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/35QGQNDJFG8C58V16QBRRKGAXJ.png", w: 144, h: 53, mw: 96, mh: 36 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/4YEPPCQMK9W17KCKC4RDN03Y17.png", w: 84, h: 84, mw: 56, mh: 56 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/1RNZF3AV7K6AMZ09WP1M28QJH1.png", w: 72, h: 72, mw: 48, mh: 48 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/0V1JPHDKTG6556651N7SBQGE9J.png", w: 72, h: 72, mw: 48, mh: 48 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/7TX58DY9GNVK5Y5WERCW71T11K.png", w: 72, h: 72, mw: 48, mh: 48 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/4ERFJC3EPFY0EJC6WWV5SAFJ6N.png", w: 150, h: 56, mw: 104, mh: 40 },
  { src: "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/101718Q725SSKTHMFA2EJ6VDJF.png", w: 200, h: 50, mw: 130, mh: 34 },
];

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
      <div className="relative grid grid-cols-2 gap-3 lg:flex lg:flex-wrap lg:gap-5">
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="flex h-24 shrink-0 items-center justify-center rounded-[10px] bg-v2-paper shadow-[0_10px_30px_#08121F2E] lg:h-[150px] lg:w-[309px] lg:rounded-xl"
          >
            <img src={logo.src} alt="" style={{ width: logo.mw, height: logo.mh }} className="max-w-[80%] object-contain lg:hidden" />
            <img src={logo.src} alt="" style={{ width: logo.w, height: logo.h }} className="hidden max-w-[70%] object-contain lg:block" />
          </div>
        ))}
        <div className="flex h-24 shrink-0 flex-col items-start justify-center gap-1 rounded-[10px] border-[1.5px] border-dashed border-white/55 px-4 lg:h-[150px] lg:w-[309px] lg:gap-2 lg:rounded-xl lg:px-6">
          <div className="font-v2-heading text-[15px] font-extrabold leading-5 text-v2-paper lg:text-[20px] lg:leading-[26px]">
            {t("v2.about.partners.becomePartnerTitle")}
          </div>
          <div className="font-v2-body text-[12px] leading-[17px] text-[#DCE6F8] lg:text-[14px] lg:leading-[21px]">
            <span className="lg:hidden">{t("v2.about.partners.becomePartnerSubtitleShort")}</span>
            <span className="hidden lg:inline">{t("v2.about.partners.becomePartnerSubtitle")}</span> →
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default PartnersGrid;
