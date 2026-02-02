import { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import AboutSection from "../../components/about-us/AboutSection";
import ProgramsCatalog from "../../components/catalog/ProgramsCatalog";
import FAQ from "../../components/faq/FAQ";
import ReasonsToStudy from "../../components/reasons/ReasonsToStudy";
import MapAndContactInfo from "../../components/map-info/MapAndContactInfo";
import Images from "../../components/gallery/Images";
import { useLocation } from "react-router-dom";
import ContactTelegram from "../../components/contact/ContactTelegram";
import QuoteSection from "../../components/QuoteSection";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -20;
        element.scrollIntoView({ behavior: "smooth" });
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
        <QuoteSection />
        <ProgramsCatalog />
      </section>
      <section id="reasons">
        <ReasonsToStudy />
      </section>
      <section id="gallery">
        <Images />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <ContactTelegram />
        <MapAndContactInfo />
      </section>
    </>
  );
}

export default Home;
