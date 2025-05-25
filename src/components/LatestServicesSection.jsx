
import { useEffect, useRef, useState } from "react";
import { Monitor } from "lucide-react";

const LatestServicesSection = () => {
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

  const services = [
    {
      icon: Monitor,
      title: "Desktop Computing",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam",
      color: "text-red-500"
    },
    {
      icon: Monitor,
      title: "Desktop Computing",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam",
      color: "text-yellow-500"
    },
    {
      icon: Monitor,
      title: "Desktop Computing",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam",
      color: "text-blue-500"
    },
    {
      icon: Monitor,
      title: "Desktop Computing",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam",
      color: "text-blue-500"
    },
    {
      icon: Monitor,
      title: "Desktop Computing",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam",
      color: "text-red-500"
    },
    {
      icon: Monitor,
      title: "Desktop Computing",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiutotam",
      color: "text-teal-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-blue-600 font-semibold mb-4 tracking-wider uppercase">
            OUR LATEST SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 max-w-4xl mx-auto">
            We Offer Better Solution<br />For Your IT Business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 group cursor-pointer ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="mb-6">
                <service.icon className={`${service.color} group-hover:scale-110 transition-transform duration-300`} size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestServicesSection;
