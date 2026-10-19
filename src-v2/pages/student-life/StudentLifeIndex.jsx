import StudentLifeHero from "../../components/student-life/StudentLifeHero";
import LifeSplit from "../../components/student-life/LifeSplit";
import CampusGallery from "../../components/student-life/CampusGallery";
import DayInLife from "../../components/student-life/DayInLife";
import StudentStories from "../../components/student-life/StudentStories";
import CTABand from "../../components/home/CTABand";

// Transcribed from the Paper "EC Redesign" "Студенческая жизнь — Desktop v3"
// artboard (2PE-0) and its Mobile v3 counterpart (39C-0).
function StudentLifeIndex() {
  return (
    <>
      <StudentLifeHero />
      <LifeSplit />
      <CampusGallery />
      <DayInLife />
      <StudentStories />
      <CTABand />
    </>
  );
}

export default StudentLifeIndex;
