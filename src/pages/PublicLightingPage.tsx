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
        {/* Animated SVG Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1200 800" 
            className="absolute inset-0 w-full h-full"
            style={{ minHeight: '100%' }}
          >
            {/* Gradient Definitions */}
            <defs>
              <radialGradient id="lightGlow" cx="50%" cy="0%" r="60%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="lightGlow2" cx="50%" cy="0%" r="60%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="poleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="50%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
            </defs>

            {/* Background City Silhouette */}
            <g className="opacity-20">
              <rect x="100" y="500" width="60" height="200" fill="#1f2937" />
              <rect x="200" y="450" width="80" height="250" fill="#1f2937" />
              <rect x="320" y="480" width="70" height="220" fill="#1f2937" />
              <rect x="420" y="420" width="90" height="280" fill="#1f2937" />
              <rect x="550" y="460" width="75" height="240" fill="#1f2937" />
              <rect x="660" y="440" width="85" height="260" fill="#1f2937" />
              <rect x="780" y="470" width="65" height="230" fill="#1f2937" />
              <rect x="880" y="490" width="70" height="210" fill="#1f2937" />
              <rect x="980" y="460" width="80" height="240" fill="#1f2937" />
            </g>

            {/* Street Lamp 1 */}
            <g>
              {/* Pole */}
              <rect x="250" y="500" width="8" height="200" fill="url(#poleGradient)" />
              {/* Lamp Head */}
              <ellipse cx="254" cy="490" rx="25" ry="15" fill="#374151" />
              {/* Light Glow */}
              <ellipse cx="254" cy="500" rx="60" ry="120" fill="url(#lightGlow)" opacity="0">
                <animate attributeName="opacity" values="0;0.8;0.6;0.8" dur="3s" begin="0.5s" repeatCount="indefinite" />
              </ellipse>
              {/* Light Beam */}
              <polygon points="229,500 279,500 300,650 200,650" fill="url(#lightGlow)" opacity="0">
                <animate attributeName="opacity" values="0;0.3;0.2;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
              </polygon>
            </g>

            {/* Street Lamp 2 */}
            <g>
              <rect x="450" y="520" width="8" height="180" fill="url(#poleGradient)" />
              <ellipse cx="454" cy="510" rx="25" ry="15" fill="#374151" />
              <ellipse cx="454" cy="520" rx="60" ry="120" fill="url(#lightGlow2)" opacity="0">
                <animate attributeName="opacity" values="0;0.7;0.5;0.7" dur="3s" begin="1.2s" repeatCount="indefinite" />
              </ellipse>
              <polygon points="429,520 479,520 500,670 400,670" fill="url(#lightGlow2)" opacity="0">
                <animate attributeName="opacity" values="0;0.25;0.15;0.25" dur="3s" begin="1.2s" repeatCount="indefinite" />
              </polygon>
            </g>

            {/* Street Lamp 3 */}
            <g>
              <rect x="650" y="510" width="8" height="190" fill="url(#poleGradient)" />
              <ellipse cx="654" cy="500" rx="25" ry="15" fill="#374151" />
              <ellipse cx="654" cy="510" rx="60" ry="120" fill="url(#lightGlow)" opacity="0">
                <animate attributeName="opacity" values="0;0.9;0.7;0.9" dur="3s" begin="1.8s" repeatCount="indefinite" />
              </ellipse>
              <polygon points="629,510 679,510 700,660 600,660" fill="url(#lightGlow)" opacity="0">
                <animate attributeName="opacity" values="0;0.35;0.25;0.35" dur="3s" begin="1.8s" repeatCount="indefinite" />
              </polygon>
            </g>

            {/* Street Lamp 4 */}
            <g>
              <rect x="850" y="530" width="8" height="170" fill="url(#poleGradient)" />
              <ellipse cx="854" cy="520" rx="25" ry="15" fill="#374151" />
              <ellipse cx="854" cy="530" rx="60" ry="120" fill="url(#lightGlow2)" opacity="0">
                <animate attributeName="opacity" values="0;0.6;0.4;0.6" dur="3s" begin="2.5s" repeatCount="indefinite" />
              </ellipse>
              <polygon points="829,530 879,530 900,680 800,680" fill="url(#lightGlow2)" opacity="0">
                <animate attributeName="opacity" values="0;0.2;0.1;0.2" dur="3s" begin="2.5s" repeatCount="indefinite" />
              </polygon>
            </g>

            {/* Floating Light Particles */}
            <g className="opacity-60">
              <circle cx="300" cy="400" r="3" fill="#fbbf24">
                <animate attributeName="cy" values="400;380;400" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="500" cy="420" r="2" fill="#60a5fa">
                <animate attributeName="cy" values="420;400;420" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="700" cy="380" r="2.5" fill="#fbbf24">
                <animate attributeName="cy" values="380;360;380" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="900" cy="410" r="2" fill="#60a5fa">
                <animate attributeName="cy" values="410;390;410" dur="4.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4.5s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Power Grid Lines */}
            <g className="opacity-30">
              <line x1="254" y1="490" x2="454" y2="510" stroke="#374151" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="454" y1="510" x2="654" y2="500" stroke="#374151" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" begin="0.5s" repeatCount="indefinite" />
              </line>
              <line x1="654" y1="500" x2="854" y2="520" stroke="#374151" strokeWidth="2" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" begin="1s" repeatCount="indefinite" />
              </line>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 animate-fade-in-up">
                Komplexní realizace <span className="text-citysound-green-600 relative">
                  veřejného osvětlení
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-citysound-green-400 to-citysound-green-600 rounded animate-pulse"></div>
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