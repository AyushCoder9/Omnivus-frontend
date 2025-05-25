
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

const CoreFeaturesSection = () => {
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
                  alt="Office work"
                  className="rounded-lg w-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop"
                  alt="Team collaboration"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop"
                  alt="Business meeting"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <p className="text-blue-600 font-semibold mb-4 tracking-wider uppercase">
              CORE FEATURES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Get More Good Experience.
            </h2>
            <p className="text-blue-400 text-lg mb-6">
              Our knowledge of computers will help us
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It's a lot meaningful content here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
              <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors duration-300">
                  <Play size={16} className="ml-0.5" />
                </div>
                <span className="font-medium">Intro Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
