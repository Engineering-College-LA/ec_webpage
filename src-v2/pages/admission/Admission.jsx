import AdmissionHero from "../../components/admission/AdmissionHero";
import Route from "../../components/admission/Route";
import Requirements from "../../components/admission/Requirements";
import CostSupport from "../../components/admission/CostSupport";
import AdmissionContact from "../../components/admission/AdmissionContact";

// Transcribed from the Paper "EC Redesign" "Поступление — Desktop v3" artboard (2JC-0).
function Admission() {
  return (
    <>
      <AdmissionHero />
      <Route />
      <Requirements />
      <CostSupport />
      <AdmissionContact />
    </>
  );
}

export default Admission;
