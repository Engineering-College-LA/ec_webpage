import { programs } from "../../config/programs";
import AcademicsHero from "../../components/academics/AcademicsHero";
import FilterBar from "../../components/academics/FilterBar";
import ProgramRow from "../../components/academics/ProgramRow";
import CareerTestCallout from "../../components/academics/CareerTestCallout";
import CTABand from "../../components/home/CTABand";

// Transcribed from the Paper "EC Redesign" "Направления — Desktop v3" artboard (26E-0).
function Academics() {
  return (
    <>
      <AcademicsHero />
      <FilterBar />
      <div className="flex flex-col">
        {programs.map((program, i) => (
          <ProgramRow key={program.slug} program={program} index={i} />
        ))}
      </div>
      <CareerTestCallout />
      <CTABand />
    </>
  );
}

export default Academics;
