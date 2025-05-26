import { useEffect, useRef, useState } from "react";

const LatestNewsSection = () => {
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

  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      date: "By Admin, 05 Aug 2019",
      title: "Monthly Web Development Update Design Ethics & Clarity Over Solution",
      excerpt: "Read More"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      date: "By Admin, 05 Aug 2019",
      title: "Design System: What It And How To Create One Using Indigo Design Sence",
      excerpt: "Read More"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      date: "By Admin, 05 Aug 2019",
      title: "How We Used WebAssembly To Speed Up Our Web App By Omnivus",
      excerpt: "Read More"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#0a2240]">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-blue-600 font-semibold mb-4 tracking-wider uppercase">
            LATEST NEWS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Read Our Latest<br />News & Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-blue-600 text-sm mb-3">
                  {item.date}
                </p>
                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                  {item.excerpt} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
