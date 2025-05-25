
import { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import CoreFeaturesSection from "../components/CoreFeaturesSection";
import LatestServicesSection from "../components/LatestServicesSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import StatsSection from "../components/StatsSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";
import LatestNewsSection from "../components/LatestNewsSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import LoadingAnimation from "../components/LoadingAnimation";

const Index = () => {
  const [isPageVisible, setIsPageVisible] = useState(false);

  useEffect(() => {
    const pageTimer = setTimeout(() => {
      setIsPageVisible(true);
    }, 1000);

    return () => {
      clearTimeout(pageTimer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      
      <LoadingAnimation isVisible={!isPageVisible} />

      {/* Main Content */}
      <div
        className={`transition-all duration-1000 ${
          isPageVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <HeroSection />
        <ServicesSection />
        <CoreFeaturesSection />
        <LatestServicesSection />
        <CaseStudiesSection />
        <StatsSection />
        <TeamSection />
        <TestimonialsSection />
        <CallToActionSection />
        <LatestNewsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
