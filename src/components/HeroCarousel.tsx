import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroCarousel = () => {
  const { t } = useLanguage();
  
  // CHANGE IMAGES: Replace the image URLs below with your own images
  const slides = [
    {
      titleKey: "hero.slide1.title",
      subtitleKey: "hero.slide1.subtitle",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070", // Change this URL
    },
    {
      titleKey: "hero.slide2.title",
      subtitleKey: "hero.slide2.subtitle",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070", // Change this URL
    },
    {
      titleKey: "hero.slide3.title",
      subtitleKey: "hero.slide3.subtitle",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070", // Change this URL
    },
    {
      titleKey: "hero.slide4.title",
      subtitleKey: "hero.slide4.subtitle",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070", // Change this URL
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`,
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl animate-in fade-in duration-500">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {t(slides[currentSlide].titleKey)}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90">
            {t(slides[currentSlide].subtitleKey)}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
