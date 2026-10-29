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
    <div className="relative h-[258px] w-full shrink-0 overflow-hidden">
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
// Below lg it follows "Home — Mobile v3": photo with a white handwritten note
// on top, the navy copy block under it, and no side tiles.
function Community() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col lg:h-[520px] lg:flex-row">
      <div className="order-2 flex flex-col justify-center gap-4 bg-v2-navy px-5 pt-9 pb-10 lg:order-none lg:w-[480px] lg:shrink-0 lg:gap-[22px] lg:px-0 lg:pl-v2-gutter lg:pr-14 lg:py-0">
        <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-[#8FA3CC] lg:text-[11px] lg:leading-[14px]">
          {t("v2.home.community.eyebrow")}
        </div>
        <div className="flex flex-col font-v2-heading text-[26px] font-extrabold leading-8 tracking-[-0.03em] text-v2-paper lg:text-[31px] lg:leading-[38px]">
          <div>{t("v2.home.community.titleLine1")}</div>
          <div>{t("v2.home.community.titleLine2")}</div>
          <div>{t("v2.home.community.titleLine3")}</div>
        </div>
        <p className="font-v2-body text-[14px] leading-[22px] text-[#B9C3D9] lg:text-[15px] lg:leading-6">
          <span className="lg:hidden">{t("v2.home.community.descriptionShort")}</span>
          <span className="hidden lg:inline">{t("v2.home.community.description")}</span>
        </p>
        <Link
          to="/student-life"
          className="flex items-center justify-center gap-2.5 rounded-v2-sm border-[1.5px] border-white/70 p-[15px] font-v2-heading text-[14px] font-bold leading-[18px] text-v2-paper lg:self-start lg:px-[22px] lg:py-3.5"
        >
          {t("v2.nav.studentLife")}
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="relative order-1 aspect-[390/260] max-h-[520px] w-full shrink-0 overflow-hidden lg:order-none lg:aspect-auto lg:max-h-none lg:h-auto lg:w-[620px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PHOTO_MAIN})` }} />
        {/* Mobile: fade into the navy block below */}
        <div className="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-b from-[#0C1830]/0 via-[#0C1830]/75 via-55% to-[#0C1830] lg:hidden" />
        <div
          className="absolute bottom-5 left-5 origin-bottom-left whitespace-pre font-['Caveat',cursive] text-[22px] font-semibold leading-[22px] text-v2-paper lg:hidden"
          style={{ rotate: "-4deg" }}
        >
          {t("v2.home.community.stickyNote")}
        </div>
        <div
          className="absolute left-7 top-5 hidden origin-top-left whitespace-pre font-['Caveat',cursive] text-[30px] font-semibold leading-[30px] text-v2-ink-nav lg:block"
          style={{ rotate: "-7deg" }}
        >
          {t("v2.home.community.stickyNote")}
        </div>
      </div>

      <div className="hidden flex-col gap-1 lg:flex lg:w-[340px] lg:shrink-0">
        <Tile image={PHOTO_CAMPUS} titleKey="campusTitle" t={t} />
        <Tile image={PHOTO_COMMUNITY} titleKey="communityTitle" t={t} />
      </div>
    </section>
  );
}

export default Community;
