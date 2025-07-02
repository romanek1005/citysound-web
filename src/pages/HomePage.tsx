import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ReferencesSection from '../components/ReferencesSection';
import ProcessSection from '../components/ProcessSection';
import ServicesSection from '../components/ServicesSection';
import BenefitsSection from '../components/BenefitsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ReferencesSection />
      <ProcessSection />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;