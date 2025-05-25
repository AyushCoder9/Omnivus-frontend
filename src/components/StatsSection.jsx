
import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    branches: 0,
    projects: 0,
    users: 0,
    awards: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    { icon: MessageCircle, label: "Our Branchs", value: 280, key: "branches", color: "bg-teal-500" },
    { icon: MessageCircle, label: "Projects Done", value: 782, key: "projects", color: "bg-yellow-500" },
    { icon: MessageCircle, label: "Happy Users", value: 1000000, key: "users", suffix: "M", color: "bg-red-500" },
    { icon: MessageCircle, label: "Awards", value: 100, key: "awards", color: "bg-blue-500" }
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
    <section ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 border border-blue-500/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-10 right-20 w-48 h-48 border border-blue-500/20 rounded-lg rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-2 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition-colors duration-300">
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.key === "users" ? "1M" : counters[stat.key]}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
