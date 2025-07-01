import React from 'react';
import { Shield, Clock, Wrench, Users, CheckCircle, Star } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Wrench,
      title: 'Vlastní technika',
      description: 'Žádné prostoje kvůli čekání na subdodavatele. Máme vlastní bagr, plošinu i specializované nástroje.',
      details: 'Kompletní technické vybavení pro realizaci projektů bez závislosti na třetích stranách.'
    },
    {
      icon: Users,
      title: 'Zkušený tým',
      description: 'Desítky let praxe v oboru elektroinstalací a veřejného osvětlení. Certifikovaní elektrikáři s oprávněním pro revize.',
      details: 'Náš tým tvoří odborníci s dlouholetou praxí a průběžnými školeními.'
    },
    {
      icon: Shield,
      title: 'Komplexní řešení',
      description: 'Jeden partner pro celý projekt od přípravy až po předání. Nemusíte koordinovat více dodavatelů.',
      details: 'Zajistíme projektovou přípravu, realizaci i následný servis z jedné ruky.'
    },
    {
      icon: Clock,
      title: 'Spolehlivost a termíny',
      description: 'Zakládáme si na dodržování dohod a termínů. Naše reference hovoří za nás.',
      details: 'Pečlivé plánování a koordinace zajišťuje dodržení stanovených termínů.'
    }
  ];

  const testimonials = [
    {
      name: 'Ing. Pavel Novák',
      position: 'Projektový manažer, STRABAG',
      text: 'Citysound je náš dlouhodobý partner pro veřejné osvětlení. Oceňujeme jejich komplexní přístup a dodržování termínů.',
      rating: 5
    },
    {
      name: 'Marie Svobodová',
      position: 'Místostarostka, Město Brno-Kohoutovice',
      text: 'Profesionální přístup a kvalitní práce. Modernizace našeho osvětlení proběhla bez problémů a ve stanovených termínech.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Proč si vybrat Citysound?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Co nás odlišuje od konkurence a proč nám klienti důvěřují svoje projekty.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-citysound-green-100 group-hover:bg-citysound-green-200 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <benefit.icon className="w-10 h-10 text-citysound-green-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-citysound-green-700 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <p className="text-sm text-gray-500 italic">
                {benefit.details}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Co říkají naši klienti
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-citysound-green-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-citysound-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-citysound-green-600" />
              <span className="text-gray-700 font-medium">Pojištění odpovědnosti</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-citysound-green-600" />
              <span className="text-gray-700 font-medium">Certifikovaní elektrikáři</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-citysound-green-600" />
              <span className="text-gray-700 font-medium">Záruka na všechny práce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;