import React from 'react';
import { Building2, MapPin, Users, Award } from 'lucide-react';

const ReferencesSection: React.FC = () => {
  const constructionCompanies = [
    { name: 'Continental Frenštát', logoPath: '/src/assets/logos/companies/continental_frenstat.png' },
    { name: 'IDS VM', logoPath: '/src/assets/logos/companies/ids_vm.png' },
    { name: 'Lars MK', logoPath: '/src/assets/logos/companies/lars_mk.jpg' },
    { name: 'SIVAP', logoPath: '/src/assets/logos/companies/sivap.png' },
    { name: 'TJ Jurinka', logoPath: '/src/assets/logos/companies/tj_jurinka.png' },
    { name: 'Zenit spol. s r.o.', logoPath: '/src/assets/logos/companies/zenit_spol_s_r_o.jpg' }
  ];

  const municipalities = [
    { name: 'Choryně', logoPath: '/src/assets/logos/municipalities/choryne.png' },
    { name: 'Hrachovek', logoPath: '/src/assets/logos/municipalities/hrachovec.png' },
    { name: 'Kateřinice', logoPath: '/src/assets/logos/municipalities/katerinice.png' },
    { name: 'Morkov', logoPath: '/src/assets/logos/municipalities/morkov.jpg' },
    { name: 'Nový Hrozenkov', logoPath: '/src/assets/logos/municipalities/novy_hrozenkov.png' },
    { name: 'Valašské Meziříčí', logoPath: '/src/assets/logos/municipalities/valasske_mezirici.jpg' },
    { name: 'Vsetín', logoPath: '/src/assets/logos/municipalities/vsetin.png' }
  ];

  const stats = [
    { icon: Building2, value: '150+', label: 'Realizovaných projektů' },
    { icon: MapPin, value: '80+', label: 'Spokojených obcí' },
    { icon: Users, value: '15', label: 'Let zkušeností' },
    { icon: Award, value: '100%', label: 'Spokojenost klientů' },
  ];

  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Spolupracujeme s lídry v oboru i veřejné správě
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naše reference hovoří za nás. Důvěřují nám přední stavební firmy i desítky měst a obcí po celé České republice.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-citysound-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-citysound-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Construction Companies */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Building2 className="w-6 h-6 text-citysound-green-600 mr-3" />
              Stavební firmy
            </h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {constructionCompanies.map((company, index) => (
                  <div
                    key={company.name}
                    className="group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-citysound-green-50 transition-colors duration-300 p-4">
                      <div className="logo-container">
                        <img
                          src={company.logoPath}
                          alt={`${company.name} logo`}
                          className="logo-image"
                        />
                        <div className="tooltip">
                          {company.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Municipalities */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <MapPin className="w-6 h-6 text-citysound-green-600 mr-3" />
              Města a obce
            </h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {municipalities.map((municipality, index) => (
                  <div
                    key={municipality.name}
                    className="group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-citysound-green-50 transition-colors duration-300 p-4">
                      <div className="logo-container">
                        <img
                          src={municipality.logoPath}
                          alt={`${municipality.name} logo`}
                          className="logo-image"
                        />
                        <div className="tooltip">
                          {municipality.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 bg-citysound-green-100 rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-citysound-green-600" />
            <span className="text-citysound-green-800 font-semibold">
              Certifikovaní elektrikáři s oprávněním pro revize
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;