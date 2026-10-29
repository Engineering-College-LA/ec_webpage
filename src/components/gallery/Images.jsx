import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../title/SectionTitle";
import { slides } from "../../config/icons";

const Images = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div className="page py-10 sm:py-20 text-slate-900 px-3 sm:px-8 md:px-20">
      <SectionTitle>{t("home.gallerySection.title")}</SectionTitle>
      <div
        className="relative mx-auto overflow-hidden max-w-[800px] xl:max-w-[1000px] h-[240px] sm:h-[420px] xl:h-[550px] group rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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
          className="absolute top-1/2 left-2 sm:left-5 transform -translate-y-1/2 cursor-pointer bg-black/40 sm:bg-black/20 p-2 sm:p-3 rounded-full text-2xl z-10 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8 text-white sm:text-n-bluish" />
        </div>
        {/* Right Arrow */}
        <div
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-5 transform -translate-y-1/2 cursor-pointer bg-black/40 sm:bg-black/20 p-2 sm:p-3 rounded-full text-2xl z-10 transition-opacity"
        >
          <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8 text-white sm:text-n-bluish" />
        </div>
        {/* Navigation Dots */}
        <div className="absolute bottom-2 sm:bottom-4 w-full flex justify-center -space-x-1 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className="cursor-pointer"
            >
              {index === currentIndex ? (
                <Dot className="w-8 h-8 sm:w-12 sm:h-12 text-n-blue" />
              ) : (
                <Dot className="w-8 h-8 sm:w-12 sm:h-12 text-white/70" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
