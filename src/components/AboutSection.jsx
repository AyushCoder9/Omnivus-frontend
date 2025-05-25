
import { useEffect, useRef, useState } from "react";
import { CheckCircle, Users, Award, Globe } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    awards: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    { icon: CheckCircle, label: "Projects Completed", value: 500, key: "projects" },
    { icon: Users, label: "Happy Clients", value: 200, key: "clients" },
    { icon: Award, label: "Years Experience", value: 10, key: "experience" },
    { icon: Globe, label: "Awards Won", value: 25, key: "awards" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          stats.forEach((stat) => {
            let start = 0;
            const increment = stat.value / 50;
            const timer = setInterval(() => {
              start += increment;
              if (start >= stat.value) {
                start = stat.value;
                clearInterval(timer);
              }
              setCounters(prev => ({
                ...prev,
                [stat.key]: Math.floor(start)
              }));
            }, 50);
          });
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
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Omnivus
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a leading IT solutions company dedicated to helping businesses 
              succeed in the digital world. With over a decade of experience, we 
              provide innovative technology solutions that drive growth and efficiency.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of expert developers, designers, and consultants work closely 
              with clients to understand their unique needs and deliver customized 
              solutions that exceed expectations.
            </p>
            
            {/* Features */}
            <div className="space-y-4">
              {[
                "Expert team of certified professionals",
                "24/7 technical support and maintenance",
                "Scalable solutions for businesses of all sizes",
                "Latest technology stack and best practices"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {counters[stat.key]}+
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
