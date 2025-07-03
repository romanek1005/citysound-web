import React, { useEffect } from 'react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Building2, MapPin, Lightbulb, Users, Clock, Shield, Search, Wrench, HardHat, Construction } from 'lucide-react';

const PublicLightingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      number: 1,
      title: 'Projekt & Konzultace',
      description: 'Na začátku si vyslechneme vaše potřeby a analyzujeme stávající stav. Navrhneme technicky i ekonomicky optimální řešení, včetně světelně-technického výpočtu a projektové dokumentace.',
      icon: Search,
      color: 'bg-citysound-green-100 text-citysound-green-600'
    },
    {
      number: 2,
      title: 'Zemní Práce & NN Sítě',
      description: 'Disponujeme vlastní technikou pro výkopy a pokládku kabelových sítí nízkého napětí. Nemusíte tak čekat na dalšího dodavatele, vše probíhá plynule.',
      icon: Construction,
      color: 'bg-citysound-green-100 text-citysound-green-600'
    },
    {
      number: 3,
      title: 'Montáž Stožárů a Svítidel',
      description: 'Pomocí naší montážní plošiny profesionálně instalujeme stožáry, výložníky a osazujeme moderní a úsporná LED svítidla od prověřených výrobců.',
      icon: Lightbulb,
      color: 'bg-citysound-green-100 text-citysound-green-600'
    },
    {
      number: 4,
      title: 'Revize & Předání',
      description: 'Celé dílo odborně zapojíme, provedeme výchozí revizi a předáme vám plně funkční a bezpečné osvětlení s veškerou potřebnou dokumentací.',
      icon: CheckCircle,
      color: 'bg-citysound-green-100 text-citysound-green-600'
    }
  ];

  const constructionBenefits = [
    'Dodržujeme harmonogramy a rozpočty',
    'Jsme plně soběstační – vlastní technika i lidé',
    'Bezproblémová komunikace a koordinace na stavbě',
    'Přebíráme plnou zodpovědnost za svěřenou část díla'
  ];

  const municipalityBenefits = [
    'Navrhneme řešení s důrazem na úsporu energie (LED)',
    'Zvýšíme bezpečnost v ulicích a na přechodech',
    'Jediný partner pro celý projekt – od žádosti o dotaci po údržbu',
    'Zajistíme dlouhou životnost a minimální náklady na provoz'
  ];

  const projects = [
    {
      title: 'Rekonstrukce VO, Rožnov pod Radhoštěm, 2024',
      image: '/work/20241115_112046.jpg'
    },
    {
      title: 'Nové osvětlení, Brno - Líšeň, 2024',
      image: '/work/20250511_212135.jpg'
    },
    {
      title: 'LED modernizace, Ostrava centrum, 2023',
      image: '/work/20220530_143714.jpg'
    },
    {
      title: 'Veřejné osvětlení, Praha - Vinohrady, 2023',
      image: '/work/20250511_211440.jpg'
    },
    {
      title: 'Parkové osvětlení, Pardubice, 2023',
      image: '/work/20250226_091248.jpg'
    },
    {
      title: 'Přechody pro chodce, Plzeň, 2024',
      image: '/work/20250412_091130.jpg'
    },
    {
      title: 'Rekonstrukce náměstí, Hradec Králové, 2022',
      image: '/work/20210107_150459.jpg'
    },
    {
      title: 'Nová výstavba, České Budějovice, 2024',
      image: '/work/20250511_205703.jpg'
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-citysound-green-50 to-citysound-green-100 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-4xl">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 animate-fade-in-up">
                  Komplexní realizace <span className="text-citysound-green-600">
                    veřejného osvětlení
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl animate-fade-in-up animation-delay-200">
                  Pro stavební firmy a obce zajišťujeme kompletní dodávku veřejného osvětlení – 
                  od prvního výkopu až po finální revizi. S námi získáte jediného spolehlivého 
                  partnera pro celý projekt a ušetříte čas i náklady.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <button
                  onClick={scrollToContact}
                  className="bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Lightbulb className="w-5 h-5 group-hover:animate-pulse" />
                    <span>Chci nezávaznou konzultaci</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-citysound-green-600 text-citysound-green-600 hover:bg-citysound-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Prohlédnout reference
                </button>
              </div>
            </div>

            {/* Right Animation */}
            <div className="hidden lg:block">
              <div className="relative w-full h-96 group cursor-pointer">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.4))',
                    transform: 'perspective(600px) rotateX(15deg) rotateY(-10deg)',
                    transformOrigin: 'center center'
                  }}
                >
                  <defs>
                    <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
                    </radialGradient>
                    
                    <linearGradient id="electricFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
                      <stop offset="50%" stopColor="#22c55e" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
                    </linearGradient>
                    
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    
                    <style>
                      {`
                        /* Grid Infrastructure */
                        .grid-line {
                          stroke: #15803d;
                          stroke-width: 3;
                          fill: none;
                          stroke-dasharray: 1000;
                          stroke-dashoffset: 1000;
                          animation: drawLine 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                          filter: url(#glow);
                        }
                        
                        /* Electrical Flow Particles */
                        .flow-particle {
                          fill: #22c55e;
                          opacity: 0;
                          animation: particleFlow 1.5s ease-in-out infinite;
                          filter: url(#glow);
                        }
                        
                        /* Sequential Grid Drawing */
                        .grid-line:nth-of-type(1) { animation-delay: 0s; }
                        .grid-line:nth-of-type(2) { animation-delay: 0.2s; }
                        .grid-line:nth-of-type(3) { animation-delay: 0.4s; }
                        .grid-line:nth-of-type(4) { animation-delay: 0.6s; }
                        .grid-line:nth-of-type(5) { animation-delay: 0.8s; }
                        .grid-line:nth-of-type(6) { animation-delay: 1.0s; }
                        .grid-line:nth-of-type(7) { animation-delay: 1.2s; }
                        .grid-line:nth-of-type(8) { animation-delay: 1.4s; }
                        
                        /* Cascade Lamp Activation */
                        .street-lamp {
                          opacity: 0;
                          transform-origin: center bottom;
                          animation: cascadeLampLight 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                        }
                        
                        .street-lamp:nth-of-type(9) { animation-delay: 2.0s; }
                        .street-lamp:nth-of-type(10) { animation-delay: 2.2s; }
                        .street-lamp:nth-of-type(11) { animation-delay: 2.4s; }
                        .street-lamp:nth-of-type(12) { animation-delay: 2.6s; }
                        .street-lamp:nth-of-type(13) { animation-delay: 2.8s; }
                        .street-lamp:nth-of-type(14) { animation-delay: 3.0s; }
                        
                        /* Lamp Post Structure */
                        .lamp-post {
                          stroke: #15803d;
                          stroke-width: 4;
                          stroke-linecap: round;
                        }
                        
                        /* Dynamic Lamp Head */
                        .lamp-head {
                          animation: professionalPulse 3s ease-in-out infinite;
                          filter: url(#glow);
                        }
                        
                        /* Light Rays */
                        .light-ray {
                          stroke: #22c55e;
                          stroke-width: 2;
                          opacity: 0;
                          animation: lightRayExpand 2s ease-out infinite;
                        }
                        
                        /* Atmospheric Background */
                        .atmosphere {
                          fill: url(#lampGlow);
                          opacity: 0;
                          animation: atmosphericBuild 4s ease-out forwards;
                          animation-delay: 1.5s;
                        }
                        
                        /* Particle Flow Staggering */
                        .flow-particle:nth-child(1) { animation-delay: 0.5s; }
                        .flow-particle:nth-child(2) { animation-delay: 0.8s; }
                        .flow-particle:nth-child(3) { animation-delay: 1.1s; }
                        .flow-particle:nth-child(4) { animation-delay: 1.4s; }
                        
                        /* Keyframe Animations */
                        @keyframes drawLine {
                          0% { stroke-dashoffset: 1000; }
                          100% { stroke-dashoffset: 0; }
                        }
                        
                        @keyframes particleFlow {
                          0% { opacity: 0; transform: scale(0.8); }
                          50% { opacity: 1; transform: scale(1.2); }
                          100% { opacity: 0; transform: scale(0.8) translateX(20px); }
                        }
                        
                        @keyframes cascadeLampLight {
                          0% { 
                            opacity: 0; 
                            transform: scale(0.3) translateY(10px); 
                            filter: brightness(0.5);
                          }
                          30% { 
                            opacity: 1; 
                            transform: scale(1.3); 
                            filter: brightness(1.8);
                          }
                          100% { 
                            opacity: 1; 
                            transform: scale(1); 
                            filter: brightness(1);
                          }
                        }
                        
                        @keyframes professionalPulse {
                          0%, 100% { 
                            opacity: 1; 
                            filter: brightness(1) drop-shadow(0 0 12px #22c55e);
                            transform: scale(1);
                          }
                          50% { 
                            opacity: 0.85; 
                            filter: brightness(1.4) drop-shadow(0 0 20px #22c55e);
                            transform: scale(1.05);
                          }
                        }
                        
                        @keyframes lightRayExpand {
                          0% { opacity: 0; stroke-width: 1; }
                          30% { opacity: 0.6; stroke-width: 3; }
                          100% { opacity: 0; stroke-width: 1; }
                        }
                        
                        @keyframes atmosphericBuild {
                          0% { opacity: 0; }
                          100% { opacity: 0.15; }
                        }
                        
                        /* Micro-Interactions */
                        .group:hover .lamp-head {
                          animation-duration: 1.5s;
                          filter: brightness(1.6) drop-shadow(0 0 25px #22c55e);
                        }
                        
                        .group:hover .flow-particle {
                          animation-duration: 0.8s;
                          fill: #16a34a;
                        }
                        
                        .group:hover .grid-line {
                          stroke: #22c55e;
                          stroke-width: 4;
                          filter: brightness(1.2) url(#glow);
                        }
                        
                        .group:hover .light-ray {
                          animation-duration: 1s;
                          opacity: 0.8;
                        }
                        
                        .group:hover .atmosphere {
                          opacity: 0.25;
                        }
                      `}
                    </style>
                  </defs>
                  
                  {/* Atmospheric Background */}
                  <rect className="atmosphere" x="0" y="0" width="400" height="300" />
                  
                  {/* Main Grid Infrastructure */}
                  <path className="grid-line" d="M50 50 L350 50" />
                  <path className="grid-line" d="M50 120 L350 120" />
                  <path className="grid-line" d="M50 190 L350 190" />
                  <path className="grid-line" d="M50 260 L350 260" />
                  <path className="grid-line" d="M100 50 L100 260" />
                  <path className="grid-line" d="M200 50 L200 260" />
                  <path className="grid-line" d="M300 50 L300 260" />
                  <path className="grid-line" d="M50 50 L50 260" />
                  
                  {/* Electrical Flow Particles */}
                  <circle className="flow-particle" cx="80" cy="50" r="3" />
                  <circle className="flow-particle" cx="150" cy="120" r="3" />
                  <circle className="flow-particle" cx="250" cy="190" r="3" />
                  <circle className="flow-particle" cx="320" cy="260" r="3" />
                  
                  {/* Professional Street Lamps with Light Rays */}
                  <g className="street-lamp">
                    <line className="lamp-post" x1="100" y1="50" x2="100" y2="25" />
                    <ellipse className="lamp-head" cx="100" cy="20" rx="14" ry="7" fill="#22c55e" />
                    <circle cx="100" cy="20" r="25" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" className="light-ray" />
                    <circle cx="100" cy="20" r="35" fill="none" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" className="light-ray" />
                  </g>
                  
                  <g className="street-lamp">
                    <line className="lamp-post" x1="200" y1="50" x2="200" y2="25" />
                    <ellipse className="lamp-head" cx="200" cy="20" rx="14" ry="7" fill="#22c55e" />
                    <circle cx="200" cy="20" r="25" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" className="light-ray" />
                    <circle cx="200" cy="20" r="35" fill="none" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" className="light-ray" />
                  </g>
                  
                  <g className="street-lamp">
                    <line className="lamp-post" x1="300" y1="50" x2="300" y2="25" />
                    <ellipse className="lamp-head" cx="300" cy="20" rx="14" ry="7" fill="#22c55e" />
                    <circle cx="300" cy="20" r="25" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" className="light-ray" />
                    <circle cx="300" cy="20" r="35" fill="none" stroke="#22c55e" strokeWidth="0.5" opacity="0.2" className="light-ray" />
                  </g>
                  
                  <g className="street-lamp">
                    <line className="lamp-post" x1="100" y1="120" x2="100" y2="95" />
                    <ellipse className="lamp-head" cx="100" cy="90" rx="14" ry="7" fill="#22c55e" />
                    <circle cx="100" cy="90" r="25" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" className="light-ray" />
                  </g>
                  
                  <g className="street-lamp">
                    <line className="lamp-post" x1="200" y1="190" x2="200" y2="165" />
                    <ellipse className="lamp-head" cx="200" cy="160" rx="14" ry="7" fill="#22c55e" />
                    <circle cx="200" cy="160" r="25" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" className="light-ray" />
                  </g>
                  
                  <g className="street-lamp">
                    <line className="lamp-post" x1="300" y1="260" x2="300" y2="235" />
                    <ellipse className="lamp-head" cx="300" cy="230" rx="14" ry="7" fill="#22c55e" />
                    <circle cx="300" cy="230" r="25" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3" className="light-ray" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Jak probíhá realizace od A do Z?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Každý projekt veřejného osvětlení realizujeme systematicky a profesionálně. 
              Díky vlastní technice a zkušenému týmu máme nad celým procesem plnou kontrolu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-citysound-green-600 mb-1">
                      Krok {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="text-center">
            <div className="inline-block bg-citysound-green-100 text-citysound-green-800 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-citysound-green-200">
              ✓ Výsledek: Kompletní osvětlení bez starostí pro vás
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Řešení, které se přizpůsobí vašim potřebám
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rozumíme specifickým požadavkům stavebních firem i obcí. Naše služby 
              přizpůsobujeme tak, abyste dosáhli svých cílů.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* For Construction Companies */}
            <div className="rounded-2xl p-6" style={{backgroundColor: '#e3efff'}}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-citysound-blue-600 rounded-full flex items-center justify-center">
                  <HardHat className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Pro Stavební Firmy</h3>
              </div>
              <p className="text-lg text-citysound-blue-600 mb-6 font-semibold">
                Spolehlivý subdodavatel pro vaše projekty
              </p>
              <ul className="space-y-3">
                {constructionBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-citysound-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Municipalities */}
            <div className="rounded-2xl p-6" style={{backgroundColor: '#dffbed'}}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-citysound-green-600 rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Pro Města a Obce</h3>
              </div>
              <p className="text-lg text-citysound-green-600 mb-6 font-semibold">
                Moderní a bezpečné osvětlení pro vaše občany
              </p>
              <ul className="space-y-3">
                {municipalityBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-citysound-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Podívejte se na naši práci
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Každý projekt je pro nás příležitostí ukázat naši odbornost a pečlivost. 
              Podívejte se na výběr z našich nedávných realizací.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-semibold text-sm leading-tight">
                      {project.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="border-2 border-citysound-green-600 text-citysound-green-600 hover:bg-citysound-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-2">
              <span>Zobrazit všechny reference</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Use existing ContactSection component with custom title */}
      <ContactSection 
        customTitle="Máte projekt? Pojďme se o něm pobavit."
        customSubtitle="Napište nám nebo zavolejte. První konzultace a návrh řešení jsou zdarma."
      />
      
      <Footer />
    </div>
  );
};

export default PublicLightingPage;