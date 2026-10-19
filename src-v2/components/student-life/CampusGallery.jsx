import { useTranslation } from "react-i18next";

const ASSETS = "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW";
const PHOTO_MAIN = `${ASSETS}/0S8AHJ9QC6TYC43JJB5J2TXFS0.jpg`;
const PHOTO_TOP = `${ASSETS}/1ZJ12MXYTWE456EP3DJVHR96AJ.jpg`;
const PHOTO_BOTTOM = `${ASSETS}/4VGGRY57SRGNK37Z69ZBBS0ZBY.jpg`;
const PHOTO_PORTRAIT = `${ASSETS}/6D6AST14DP4ZAFAEPV51WNX3WW.jpg`;

const INSTAGRAM_URL = "https://www.instagram.com/engineering.college.la/";

const Photo = ({ src, className = "", position = "50%" }) => (
  <div
    className={`rounded-[6px] bg-cover ${className}`}
    style={{ backgroundImage: `url(${src})`, backgroundPosition: position }}
  />
);

// Transcribed from the Paper "EC Redesign" Student Life "Gallery" (2SA-0)
// and "M Gallery" (3BQ-0) frames.
function CampusGallery() {
  const { t } = useTranslation();

  return (
    <section className="bg-v2-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3.5 px-5 py-12 lg:gap-9 lg:px-[72px] lg:py-[104px]">
        <div className="flex flex-col gap-3.5 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3.5">
            <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate lg:text-[11px] lg:leading-[14px]">
              {t("v2.studentLifeIndex.gallery.eyebrow")}
            </div>
            <h2 className="flex flex-col font-v2-heading text-[24px] font-extrabold leading-[30px] tracking-[-0.03em] lg:flex-row lg:gap-3 lg:text-[40px] lg:leading-[48px]">
              <span className="text-v2-navy">{t("v2.studentLifeIndex.gallery.titleLine1")}</span>
              <span className="text-v2-sky">{t("v2.studentLifeIndex.gallery.titleLine2")}</span>
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson lg:block"
          >
            {t("v2.studentLifeIndex.gallery.instagramLink")} →
          </a>
        </div>

        {/* Desktop: wide photo · two stacked · tall portrait */}
        <div className="hidden h-[440px] gap-4 lg:grid lg:grid-cols-[520fr_380fr_380fr]">
          <Photo src={PHOTO_MAIN} />
          <div className="grid grid-rows-2 gap-4">
            <Photo src={PHOTO_TOP} />
            <Photo src={PHOTO_BOTTOM} />
          </div>
          <Photo src={PHOTO_PORTRAIT} position="center 25%" />
        </div>

        {/* Mobile: one wide photo, then two side by side */}
        <div className="flex flex-col gap-2 lg:hidden">
          <Photo src={PHOTO_MAIN} className="h-[220px]" />
          <div className="grid grid-cols-2 gap-2">
            <Photo src={PHOTO_TOP} className="h-[150px]" />
            <Photo src={PHOTO_PORTRAIT} className="h-[150px]" position="center 25%" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusGallery;
