
import { useEffect, useRef, useState } from "react";

const CallToActionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-lg rotate-12"></div>
        <div className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div
            className={`text-white mb-8 lg:mb-0 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="text-blue-200 font-semibold mb-4 tracking-wider uppercase">
              CALL TO ACTION
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let's Discuss With Us<br />Your Estimate.
            </h2>
          </div>
          
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <button className="bg-white text-blue-600 px-8 py-4 rounded font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2">
              <span>💬</span>
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
