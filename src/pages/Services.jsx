
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LoadingAnimation from "../components/LoadingAnimation";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => setIsVisible(true), 300);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
      title: "UI/UX Design",
      description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      icon: "🎨"
    },
    {
      title: "IT Consultancy",
      description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      icon: "💼"
    },
    {
      title: "Technology Prof.",
      description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      icon: "⚙️"
    },
    {
      title: "Web Development",
      description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      icon: "💻"
    },
    {
      title: "Web Development",
      description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      icon: "🌐"
    },
    {
      title: "Game Design",
      description: "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      icon: "🎮"
    }
  ];

  const plans = [
    {
      name: "Early Birds",
      price: 9,
      description: "The functional goal of technical content is to help people use a product successfully.",
      features: ["Basic Support", "5 Projects", "10GB Storage", "Email Support"]
    },
    {
      name: "Team",
      price: 32,
      description: "The functional goal of technical content is to help people use a product successfully.",
      features: ["Priority Support", "20 Projects", "100GB Storage", "Phone Support"],
      popular: true
    },
    {
      name: "Personal",
      price: 69,
      description: "The functional goal of technical content is to help people use a product successfully.",
      features: ["Premium Support", "50 Projects", "500GB Storage", "24/7 Support"]
    },
    {
      name: "Platinum",
      price: 99,
      description: "The functional goal of technical content is to help people use a product successfully.",
      features: ["VIP Support", "Unlimited Projects", "Unlimited Storage", "Dedicated Manager"]
    }
  ];

  const newsFeeds = [
    {
      title: "A series of iOS 7 inspired vector icons.",
      category: "Design/SEO",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=80&fit=crop"
    },
    {
      title: "A series of iOS 7 inspired vector icons.",
      category: "Design/SEO", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=80&fit=crop"
    },
    {
      title: "A series of iOS 7 inspired vector icons.",
      category: "Design/SEO",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100&h=80&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <LoadingAnimation isVisible={!isLoaded} />
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className={`pt-24 pb-8 bg-gradient-to-r from-blue-50 to-purple-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <nav className="text-sm text-gray-600 mb-4 animate-fade-in">
              Home &gt; Services
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 animate-scale-in">Services</h1>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className={`py-16 bg-white transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-3 cursor-pointer ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 text-3xl animate-bounce">
                    {service.icon}
                  </div>
                  
                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.description}</p>
                    <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
                
                {/* Default Content */}
                <div className="p-6 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold mb-4 tracking-wider uppercase animate-fade-in">
              PLANS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 animate-scale-in">
              Here is plans
            </h2>
            <div className="flex justify-center mt-8">
              <div className="bg-white rounded-full p-1 shadow-lg">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full transition-all duration-300">Monthly</button>
                <button className="px-6 py-2 text-gray-600 hover:text-blue-600 transition-colors">Yearly</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
                } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 -mx-8 -mt-8 mb-6 rounded-t-xl">
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">${plan.price}</span>
                    <span className="text-gray-600 ml-2">Per Month</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}>
                    Purchase Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Feeds Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">News Feeds</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Does any industry face a more complex audience journey and marketing sales process than B2B technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {newsFeeds.map((news, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-semibold">{news.category}</span>
                  <h3 className="text-lg font-bold text-gray-800 mt-2 hover:text-blue-600 transition-colors">
                    {news.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop"
              alt="Team collaboration"
              className="w-full h-64 object-cover rounded-lg mb-6 hover:scale-105 transition-transform duration-500"
            />
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, 
              as have the things that we bring to our community conferences, books, and our membership added to the online magazine.
              <br /><br />
              One thing that hasn't changed is that we're a small team — with most of us not working
            </p>
          </div>
        </div>
      </section>

      {/* Footer with background image */}
      <section className="relative py-16 bg-gray-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-blue-600/80"></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg font-semibold mb-4">Pages</h4>
              <ul className="space-y-2 text-sm">
                {["Home", "Services", "About", "Career", "Refund", "Terms", "Details", "Contact", "Business", "Affiliate"].map((item) => (
                  <li key={item} className="hover:text-blue-200 transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
              <div className="text-sm space-y-1">
                <p>Monday - Friday: 7:00 - 17:00</p>
                <p>Saturday: 7:00 - 12:00</p>
                <p>Sunday and holidays: 8:00 - 10:00</p>
              </div>
            </div>
            
            <div className="transform hover:scale-105 transition-transform duration-300">
              <p className="text-sm mb-4">
                For more than 30 years, IT Service has been a reliable partner in the field of logistics and cargo forwarding.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Discover More
              </button>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p className="text-sm">Copyright By@ WebTend - 2021</p>
            <p className="text-sm">info@webmail.com | 786 875 864 75 7</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
