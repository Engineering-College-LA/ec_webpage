import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SectionTitle from "../title/SectionTitle";
import { slides } from "../../config/icons";

const Images = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cache all images on the first load
  useEffect(() => {
    const preloadedImages = slides.map((slide) => {
      const img = new Image();
      img.src = slide.url;
      return img;
    });
    setImages(preloadedImages);
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="page py-14 sm:py-20 text-slate-900 px-2 sm:px-8 md:px-20">
      <SectionTitle>{t("home.gallerySection.title")}</SectionTitle>
      <div className="max-w-[800px] sm:max-w-[1000px] h-[620px] sm:h-[700px] w-full mx-auto pb-16 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover transition-all ease-in-out duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-3 bg-black/20 text-white cursor-pointer">
          <ChevronLeft size={32} className="text-n-blue" onClick={prevSlide} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-3 bg-black/20 text-white cursor-pointer">
          <ChevronRight size={32} className="text-n-blue" onClick={nextSlide} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              {slideIndex === currentIndex ? (
                <Dot size={48} className="-mx-1 text-n-blue" />
              ) : (
                <Dot size={48} className="-mx-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
