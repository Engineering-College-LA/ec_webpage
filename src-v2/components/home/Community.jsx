import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PHOTO_MAIN =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/7R8XZDBZ6VJ8WV17XPSMA17THH.jpg";
const PHOTO_CAMPUS =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/0S8AHJ9QC6TYC43JJB5J2TXFS0.jpg";
const PHOTO_COMMUNITY =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/1NRT7HH082XEJ9V3NQM3MYM4XC.jpg";

function Tile({ image, titleKey, t }) {
  return (
    <div className="relative h-[220px] shrink-0 overflow-hidden lg:h-[258px] lg:w-full">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C2A3D]/85 from-40% to-transparent" />
      <div className="absolute bottom-5 left-5 flex flex-col gap-2">
        <div className="whitespace-pre-wrap font-v2-heading text-[16px] font-bold leading-[21px] text-v2-paper">
          {t(`v2.home.community.${titleKey}`)}
        </div>
        <div className="h-0.5 w-7 shrink-0 bg-v2-crimson" />
      </div>
    </div>
  );
}

// Transcribed from the Paper "EC Redesign" Home "Community" artboard (1YG-0).
function Community() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col lg:h-[520px] lg:flex-row">
      <div className="flex flex-col justify-center gap-5 bg-v2-navy px-6 py-12 lg:w-[480px] lg:shrink-0 lg:gap-[22px] lg:px-0 lg:pl-v2-gutter lg:pr-14 lg:py-0">
        <div className="font-v2-heading text-[11px] font-semibold leading-[14px] tracking-[0.24em] text-[#8FA3CC]">
          {t("v2.home.community.eyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading text-[26px] font-extrabold leading-[1.2] tracking-[-0.03em] text-v2-paper lg:text-[31px] lg:leading-[38px]">
          <div>{t("v2.home.community.titleLine1")}</div>
          <div>{t("v2.home.community.titleLine2")}</div>
          <div>{t("v2.home.community.titleLine3")}</div>
        </div>
        <p className="font-v2-body text-[15px] leading-6 text-[#B9C3D9]">
          {t("v2.home.community.description")}
        </p>
        <Link
          to="/student-life"
          className="flex items-center gap-2.5 self-start rounded-v2-sm border-[1.5px] border-white/70 px-[22px] py-3.5 font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper"
        >
          {t("v2.nav.studentLife")}
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="relative h-[320px] shrink-0 overflow-hidden lg:h-auto lg:w-[620px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PHOTO_MAIN})` }} />
        <div
          className="absolute left-7 top-5 origin-top-left whitespace-pre font-['Caveat',cursive] text-[26px] font-semibold leading-[30px] text-v2-ink-nav lg:text-[30px]"
          style={{ rotate: "-7deg" }}
        >
          {t("v2.home.community.stickyNote")}
        </div>
      </div>

      <div className="flex flex-col gap-1 lg:w-[340px] lg:shrink-0">
        <Tile image={PHOTO_CAMPUS} titleKey="campusTitle" t={t} />
        <Tile image={PHOTO_COMMUNITY} titleKey="communityTitle" t={t} />
      </div>
    </section>
  );
}

export default Community;
