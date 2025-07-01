import React, { useEffect, useState } from 'react';
import lightsOffImage from '../assets/hero/after2.png';
import lightsOnImage from '../assets/hero/before2.jpg';

const HeroSection: React.FC = () => {
  const [showLights, setShowLights] = useState(false);
  const [showSecondLights, setShowSecondLights] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowLights(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowSecondLights(true);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToReferences = () => {
    document.getElementById('references')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white p-5 font-['Poppins',sans-serif] min-h-screen">
      {/* Main Hero Section */}
      <section className="relative w-full h-[calc(100vh-40px)] overflow-hidden bg-gray-800 border-[5px] border-white rounded-[30px] box-border">
        <div className="absolute inset-0">
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
        
        <div className="absolute z-10 text-white text-left top-1/2 left-[8%] transform -translate-y-1/2 p-[25px_35px] bg-black/65 rounded-[10px] max-w-[50%] box-border">
          <h1 className="text-[3.2em] font-bold mt-0 mb-[0.4em] [text-shadow:2px_2px_5px_rgba(0,0,0,0.8)]">
            CitySound
          </h1>
          <p className="text-[1.3em] font-normal [text-shadow:1px_1px_4px_rgba(0,0,0,0.8)] leading-[1.6] mb-0">
            Specialisté na veřejné osvětlení. Nabízíme unikátní komplexní služby: od výkopových prací a NN sítí až po finální instalaci a následný servis.
          </p>
        </div>
      </section>

      {/* Compact Second Section */}
      <section className="relative max-w-[850px] min-h-[450px] h-auto overflow-hidden bg-gray-800 border-[5px] border-white rounded-[25px] box-border my-[60px] mx-auto p-10">
        <div className="absolute inset-0">
          <img
            src={lightsOffImage}
            alt="Moderní řešení osvětlení"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src={lightsOnImage}
            alt="Inovativní veřejné osvětlení"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              showSecondLights ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        
        <div className="absolute z-10 text-white text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-black/70 rounded-lg w-[85%] max-w-[550px] box-border">
          <h1 className="text-[2.4em] font-semibold mt-0 mb-[0.5em] [text-shadow:1px_1px_3px_rgba(0,0,0,0.7)]">
            Zjistěte více
          </h1>
          <p className="text-[1.1em] font-normal leading-[1.5] mb-6 [text-shadow:1px_1px_3px_rgba(0,0,0,0.7)]">
            Prohlédněte si naše úspěšné projekty nebo nás kontaktujte pro nezávaznou konzultaci.
          </p>
          <div className="mt-5">
            <button
              onClick={scrollToContact}
              className="inline-block py-3 px-7 mx-2 my-2 no-underline rounded-[25px] font-semibold text-[0.95em] transition-all duration-300 cursor-pointer border-2 border-transparent uppercase tracking-[0.5px] bg-[#FF8C00] text-white border-[#FF8C00] hover:bg-[#e67e00] hover:border-[#e67e00] hover:-translate-y-[3px] hover:shadow-[0_6px_12px_rgba(0,0,0,0.2)]"
            >
              Kontaktujte nás
            </button>
            <button
              onClick={scrollToReferences}
              className="inline-block py-3 px-7 mx-2 my-2 no-underline rounded-[25px] font-semibold text-[0.95em] transition-all duration-300 cursor-pointer border-2 border-white uppercase tracking-[0.5px] bg-transparent text-white hover:bg-white hover:text-gray-800 hover:-translate-y-[3px] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
            >
              Reference
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;