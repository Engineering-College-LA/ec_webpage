import StudentLifeHero from "../../components/student-life/StudentLifeHero";
import LifeSplit from "../../components/student-life/LifeSplit";
import CTABand from "../../components/home/CTABand";

// Transcribed from the Paper "EC Redesign" "Студенческая жизнь — Desktop v3"
// artboard (2PE-0). The Gallery/Day/Stories sections from that artboard are
// not yet built here — scoped out to prioritize the 8 activity detail pages.
function StudentLifeIndex() {
  return (
    <>
      <StudentLifeHero />
      <LifeSplit />
      <CTABand />
    </>
  );
}

export default StudentLifeIndex;
