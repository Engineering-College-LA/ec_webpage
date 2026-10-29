import { useTranslation } from "react-i18next";

const PHOTO =
  "https://app.paper.design/file-assets/01M3BYQQM7968GE3HW5M38VWAW/7R8XZDBZ6VJ8WV17XPSMA17THH.jpg";

// Transcribed from the Paper "EC Redesign" Student Life "Day" (2RT-0)
// and "M Day" (3B9-0) frames.
function DayInLife() {
  const { t } = useTranslation();
  const moments = t("v2.studentLifeIndex.day.moments", { returnObjects: true });

  return (
    <section className="bg-v2-navy">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:h-[560px] lg:flex-row">
        <div className="relative aspect-[390/240] max-h-[480px] w-full shrink-0 overflow-hidden lg:aspect-auto lg:max-h-none lg:h-auto lg:w-1/2">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PHOTO})` }} />
          {/* Mobile only: fade into the navy panel so the white note stays readable */}
          <div
            className="absolute inset-x-0 bottom-0 h-[140px] lg:hidden"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(12,24,48,0) 0%, rgba(12,24,48,0.75) 55%, #0C1830 100%)",
            }}
          />
          <div className="absolute bottom-5 left-6 origin-bottom-left lg:bottom-auto lg:origin-top-left -rotate-6 whitespace-nowrap font-v2-accent-script text-[22px] font-semibold leading-7 text-white lg:left-8 lg:top-8 lg:text-[30px] lg:leading-[30px] lg:text-v2-navy">
            {t("v2.studentLifeIndex.day.scriptNote")}
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-4 px-5 pt-9 pb-10 lg:gap-[26px] lg:py-0 lg:pl-16 lg:pr-[72px]">
          <div className="font-v2-heading text-[10px] font-semibold leading-3 tracking-[0.24em] text-[#8FA3CC] lg:text-[11px] lg:leading-[14px]">
            <span className="lg:hidden">{t("v2.studentLifeIndex.day.eyebrowShort")}</span>
            <span className="hidden lg:inline">{t("v2.studentLifeIndex.day.eyebrow")}</span>
          </div>
          <h2 className="font-v2-heading text-[24px] font-extrabold leading-[30px] tracking-[-0.03em] text-white lg:text-[34px] lg:leading-[40px]">
            {t("v2.studentLifeIndex.day.title")}
          </h2>
          <div className="flex flex-col border-t border-white/15">
            {Array.isArray(moments) &&
              moments.map((moment) => (
                <div
                  key={moment.time}
                  className="flex gap-3.5 border-b border-white/10 py-[13px] last:border-b-0 lg:gap-5 lg:py-[18px]"
                >
                  <div className="w-14 shrink-0 font-v2-heading text-[13px] font-bold leading-4 text-v2-step-4 lg:w-20 lg:text-[14px] lg:leading-[18px]">
                    {moment.time}
                  </div>
                  <div className="font-v2-body text-[13px] leading-5 text-[#D6DCE8] lg:text-[15px] lg:leading-[23px]">
                    <span className="lg:hidden">{moment.textShort ?? moment.text}</span>
                    <span className="hidden lg:inline">{moment.text}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DayInLife;
