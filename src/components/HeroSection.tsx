import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import lightsOffImage from '../assets/hero/after2.png';
import lightsOnImage from '../assets/hero/before2.jpg';

const HeroSection: React.FC = () => {
  const [showLights, setShowLights] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLights(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Animation */}
      <div className="absolute inset-0 z-0">
        <img
          src={lightsOffImage}
          alt="Veřejné osvětlení zhasnuté"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={lightsOnImage}
          alt="Veřejné osvětlení rozsvícené"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            showLights ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Content with Frosted Glass Effect */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-white">Citysound</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <CheckCircle size={16} className="text-citysound-green-400" />
            <span className="text-sm font-medium text-white">Jediní, kdo realizují veřejné osvětlení kompletně</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Veřejné osvětlení
            <span className="block text-citysound-green-400">od A do Z</span>
          </h1>

          {/* Subheading */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              Zajistíme vše od výkopu a položení sítí až po finální instalaci a revizi. 
              <strong className="text-citysound-green-300"> Kompletní řešení pro stavební firmy i obce.</strong>
            </p>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              'Vlastní technika',
              'Zkušený tým',
              'Komplexní řešení',
              'Dodržujeme termíny'
            ].map((benefit) => (
              <div key={benefit} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <CheckCircle size={16} className="text-citysound-green-400" />
                <span className="text-sm font-medium text-white">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="group bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-citysound-red-500/25"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Nezávazně poptat</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Více o nás
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;