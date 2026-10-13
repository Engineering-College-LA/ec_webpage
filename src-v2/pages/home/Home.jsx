import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import StatsBand from "../../components/home/StatsBand";
import ProgramsCatalog from "../../components/catalog/ProgramsCatalog";
import AdmissionPath from "../../components/home/AdmissionPath";
import Community from "../../components/home/Community";
import Stories from "../../components/home/Stories";
import CTABand from "../../components/home/CTABand";

// Transcribed from the Paper "EC Redesign" Home artboard (1T8-0).
function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <StatsBand />
      <ProgramsCatalog />
      <AdmissionPath />
      <Community />
      <Stories />
      <div id="contact">
        <CTABand />
      </div>
    </>
  );
}

export default Home;
