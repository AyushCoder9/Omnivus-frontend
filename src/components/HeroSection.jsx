
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      title: "Best IT Solutions Provider Agency",
      subtitle: "IT Business Consulting",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque tium totam rem aperiam eaque ipsa quae ab illo inventore veritatis",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop",
      buttonText: "Our Services"
    },
    {
      title: "Modern Web Applications",
      subtitle: "Web Development",
      description: "Custom web development services using the latest technologies and best practices.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop",
      buttonText: "Get Started"
    },
    {
      title: "Scale Your Business",
      subtitle: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure solutions for modern businesses.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop",
      buttonText: "Explore"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-100">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`text-white transform transition-all duration-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-lg mb-4 text-blue-300">
                {slides[currentSlide].subtitle}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg mb-8 text-gray-200 max-w-2xl">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-blue-600 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  {slides[currentSlide].buttonText} →
                </button>
                <button className="flex items-center space-x-2 text-white font-semibold text-lg hover:text-blue-300 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={16} className="ml-0.5" />
                  </div>
                  <span>Intro Video</span>
                </button>
              </div>
            </div>
            
            {/* Right side image */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="absolute top-8 right-12 w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ArrowRight size={24} />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-4 right-6 flex space-x-2 z-20">
        <div className="w-8 h-1 bg-white/50 rounded"></div>
        <div className="w-8 h-1 bg-white/50 rounded"></div>
        <div className="w-8 h-1 bg-white rounded"></div>
      </div>
    </section>
  );
};

export default HeroSection;
