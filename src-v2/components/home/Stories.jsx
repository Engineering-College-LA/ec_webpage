import { useTranslation } from "react-i18next";
import ceoPhoto from "../../../src/assets/person_01.jpg";

const PHOTO = ceoPhoto;



// Transcribed from the Paper "EC Redesign" Home "Stories" artboard (1ZD-0).
// Single-quote carousel for now — only one story in the artboard; the
// prev/next controls are wired up as inert affordances pending real content.
// Below lg ("Home — Mobile v3") the controls shrink and move into the
// author row.
function Stories() {
  const { t } = useTranslation();

  return (
    <section className="bg-v2-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[18px] px-5 py-12 lg:flex-row lg:items-center lg:gap-14 lg:px-v2-gutter lg:py-24">
      <div className="flex flex-col gap-[18px] lg:w-[300px] lg:shrink-0">
        <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-v2-slate lg:text-[11px] lg:leading-[14px]">
          {t("v2.home.stories.eyebrow")}
        </div>
        <h2 className="font-v2-heading text-v2-h3 font-extrabold leading-[33px] tracking-[-0.03em] text-v2-navy lg:text-[38px] lg:leading-[44px]">
          {t("v2.home.stories.title")}
        </h2>

      </div>

      <div className="flex grow flex-col overflow-hidden rounded-lg bg-v2-mist md:flex-row">
        {/* Phone: keep the artboard's 350×220 ratio so the face never gets
            cropped as the card widens; md+: photo becomes a fixed side column. */}
        <div
          className="aspect-[35/22] shrink-0 bg-cover bg-center md:aspect-auto md:bg-[center_25%] md:min-h-[320px] md:w-[300px]"
          style={{ backgroundImage: `url(${PHOTO})` }}
        />
        <div className="flex flex-col justify-center gap-3.5 px-[22px] py-6 lg:gap-6 lg:px-12 lg:py-10">
          <div className="font-['Georgia',serif] text-[44px] font-bold leading-[22px] text-v2-crimson lg:text-v2-h2 lg:leading-[30px]">“</div>
          <p className="font-v2-body text-[16px] leading-[25px] text-v2-navy lg:text-[20px] lg:leading-8">
            <span className="lg:hidden">{t("v2.home.stories.quoteShort")}</span>
            <span className="hidden lg:inline">{t("v2.home.stories.quote")}</span>
          </p>
          <div className="flex items-center justify-between border-t border-v2-hairline pt-3 lg:pt-3.5">
            <div className="flex flex-col gap-0.5 lg:gap-1">
              <div className="font-v2-heading text-[14px] font-bold leading-[18px] text-v2-navy lg:text-[15px]">
                {t("v2.home.stories.author")}
              </div>
              <div className="font-v2-body text-[12px] leading-4 text-v2-slate lg:text-v2-label">
                {t("v2.home.stories.authorMeta")}
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Stories;
