import AboutHero from "../../components/about/AboutHero";
import Story from "../../components/about/Story";
import MissionVision from "../../components/about/MissionVision";
import PartnersGrid from "../../components/about/PartnersGrid";
import CTABand from "../../components/home/CTABand";

// Transcribed from the Paper "EC Redesign" "О колледже — Desktop v3" artboard (2U8-0).
function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <MissionVision />
      <PartnersGrid />
      <CTABand />
    </>
  );
}

export default AboutPage;
