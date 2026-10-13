import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { programs } from "../../config/programs";
import ProgramCard from "./ProgramCard";
import Eyebrow from "../ui/Eyebrow";

// Transcribed from the Paper "EC Redesign" Home "Programs" section (1VN-0).
function ProgramsCatalog() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-11 bg-v2-paper px-6 py-16 lg:gap-[44px] lg:px-v2-gutter lg:py-[104px]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-4">
          <Eyebrow>{t("v2.home.programs.eyebrow")}</Eyebrow>
          <h2 className="font-v2-heading text-[32px] font-extrabold leading-[1.15] tracking-[-0.03em] text-v2-navy lg:text-[44px] lg:leading-[54px]">
            {t("v2.home.programs.titleStart")}{" "}
            <span className="text-v2-sky">{t("v2.home.programs.titleEnd")}</span>
          </h2>
        </div>
        <p className="font-v2-body text-[16px] leading-[25px] text-v2-slate lg:w-[440px] lg:shrink-0">
          {t("v2.home.programs.description")}
        </p>
        <Link
          to="/academics"
          className="whitespace-nowrap font-v2-heading text-[14px] font-bold leading-[18px] text-v2-crimson"
        >
          {t("v2.home.programs.allLink")} →
        </Link>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-2 lg:overflow-visible">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>
    </section>
  );
}

export default ProgramsCatalog;
