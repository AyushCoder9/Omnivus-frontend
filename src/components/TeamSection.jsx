import { useEffect, useRef, useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const TeamSection = () => {
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

  const teamMembers = [
    {
      name: "Harry Garrett",
      position: "Design Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
    },
    {
      name: "Doris Jordan",
      position: "Design Expert",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Harry Garrett",
      position: "Design Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      name: "Johnny Ramirez",
      position: "Design Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop"
    },
    {
      name: "Diana Wagner",
      position: "Design Expert",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-blue-600 font-semibold mb-4 tracking-wider uppercase">
            OUR TEAM MEMBER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Meet Our Exclusive<br />Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`text-center group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-gray-600">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
