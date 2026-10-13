import ProgramHero from "../../components/academics/ProgramHero";
import ProgramFactsBand from "../../components/academics/ProgramFactsBand";
import AboutProgram from "../../components/academics/AboutProgram";
import Curriculum from "../../components/academics/Curriculum";
import Careers from "../../components/academics/Careers";
import CTABand from "../../components/home/CTABand";

// Transcribed from the Paper "EC Redesign" "Программа — Desktop v3" artboard
// (2DR-0), the single template reused for all 5 programs.
function ProgramPage({ program }) {
  return (
    <>
      <ProgramHero program={program} />
      <ProgramFactsBand />
      <AboutProgram program={program} />
      <Curriculum program={program} />
      <Careers program={program} />
      <CTABand />
    </>
  );
}

export default ProgramPage;
