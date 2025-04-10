import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../title/SectionTitle";
import { slides } from "../../config/icons";

const Images = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images on mount
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.url;
    });
  }, []);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="page py-14 sm:py-20 text-slate-900 px-2 sm:px-8 md:px-20">
      <SectionTitle>{t("home.gallerySection.title")}</SectionTitle>
      <div className="relative mx-auto pb-16 overflow-hidden max-w-[800px] xl:max-w-[1000px] h-[500px] sm:h-[600px] xl:h-[700px] group rounded-2xl">
        {/* Slide Container using flex layout for smooth transform transitions */}
        <div
          className="flex h-full transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full">
              <img
                src={slide.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer bg-black/20 p-3 rounded-full text-2xl"
        >
          <ChevronLeft size={32} className="text-n-bluish" />
        </div>
        {/* Right Arrow */}
        <div
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer bg-black/20 p-3 rounded-full text-2xl"
        >
          <ChevronRight size={32} className="text-n-bluish" />
        </div>
        {/* Navigation Dots */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className="cursor-pointer"
            >
              {index === currentIndex ? (
                <Dot size={48} className="text-n-blue" />
              ) : (
                <Dot size={48} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
