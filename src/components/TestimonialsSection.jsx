import { useEffect, useRef, useState } from "react";

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author: "Eugene Freeman",
      position: "Tincidunt",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop",
      color: "border-blue-500"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author: "Kelly Coleman",
      position: "Nulla nec",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      color: "border-teal-500"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author: "Philip Mendez",
      position: "Consectetur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop",
      color: "border-red-500"
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
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className={`border-t-4 ${testimonial.color} bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
