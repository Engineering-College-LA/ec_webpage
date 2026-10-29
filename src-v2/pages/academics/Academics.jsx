import { useSearchParams } from "react-router-dom";
import { programs, programCategories } from "../../config/programs";
import AcademicsHero from "../../components/academics/AcademicsHero";
import FilterBar from "../../components/academics/FilterBar";
import ProgramRow from "../../components/academics/ProgramRow";
import CTABand from "../../components/home/CTABand";

// Transcribed from the Paper "EC Redesign" "Направления — Desktop v3" artboard (26E-0).
function Academics() {
  // Filter lives in the URL (?category=business) so a filtered list can be shared.
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get("category");
  const active = programCategories.includes(param) ? param : "all";

  const handleChange = (key) => {
    setSearchParams(key === "all" ? {} : { category: key }, { replace: true, preventScrollReset: true });
  };

  const visible = programs
    .map((program, i) => ({ program, number: i + 1 }))
    .filter(({ program }) => active === "all" || program.category === active);

  return (
    <>
      <AcademicsHero />
      <FilterBar active={active} onChange={handleChange} total={programs.length} />
      {/* Mobile: stacked cards with page padding; desktop: full-bleed rows. */}
      <div className="flex flex-col gap-5 px-5 pt-7 pb-12 lg:gap-0 lg:p-0">
        {visible.map(({ program, number }, i) => (
          <ProgramRow key={program.slug} program={program} index={i} number={number} />
        ))}
      </div>
      <CTABand />
    </>
  );
}

export default Academics;
