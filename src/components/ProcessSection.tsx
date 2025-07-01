import React from 'react';
import { FileText, Shovel, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Projekt & Konzultace',
      description: 'Analyzujeme vaše potřeby a navrhneme optimální řešení včetně výběru nejvhodnějších svítidel a technologií.',
      details: ['Technická konzultace zdarma', 'Návrh optimálního řešení', 'Výpočet úspor energie']
    },
    {
      icon: Shovel,
      title: 'Zemní práce & NN sítě',
      description: 'Pomocí vlastní techniky připravíme terén a profesionálně položíme kabeláž nízkého napětí.',
      details: ['Vlastní bagr a technika', 'Příprava výkopů', 'Pokládka elektrických sítí']
    },
    {
      icon: Lightbulb,
      title: 'Montáž osvětlení',
      description: 'Nainstalujeme stožáry, výložníky a moderní úsporná LED svítidla podle projektové dokumentace.',
      details: ['Montáž stožárů a výložníků', 'Instalace LED svítidel', 'Připojení rozvodů']
    },
    {
      icon: CheckCircle,
      title: 'Revize & Předání',
      description: 'Vše odborně zapojíme, provedeme povinné revize a předáme vám kompletně funkční osvětlení.',
      details: ['Odborné zapojení', 'Elektrické revize', 'Předání dokumentace']
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Jak vypadá spolupráce od A do Z?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Náš unikátní přístup spočívá v tom, že nemusíte koordinovat více dodavatelů. 
            Vše zajistíme vlastními silami a technikou.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-citysound-green-200 via-citysound-green-400 to-citysound-green-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Step Card */}
                <div className="bg-white border-2 border-gray-100 hover:border-citysound-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-citysound-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-citysound-green-100 group-hover:bg-citysound-green-200 rounded-full flex items-center justify-center mb-4 transition-colors">
                    <step.icon className="w-8 h-8 text-citysound-green-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <CheckCircle size={16} className="text-citysound-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <ArrowRight className="w-6 h-6 text-citysound-green-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-citysound-green-50 to-citysound-green-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Proč je náš přístup unikátní?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Zatímco jiné firmy pouze část prací zadávají subdodavatelům, my máme vše pod kontrolou. 
              <strong> Výsledek? Rychlejší realizace, lepší kvalita a žádné prostoje.</strong>
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Chci konzultaci zdarma
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;