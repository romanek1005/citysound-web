import React from 'react';
import { Truck, Construction, Radar, Package, ArrowRight, CheckCircle, Wrench, Users } from 'lucide-react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Construction,
      title: 'Montážní plošina',
      description: 'Pronájem montážní plošiny Renault Maxity pro práce ve výškách až 16 metrů.',
      image: '/work/20241115_112046.jpg'
    },
    {
      icon: Wrench,
      title: 'Zemní práce',
      description: 'Výkopy, terénní úpravy a pokládka kabelů pomocí minibagru Kubota KX-019.',
      image: '/work/20250511_212135.jpg'
    },
    {
      icon: Truck,
      title: 'Autodoprava',
      description: 'Přeprava materiálu a poskytování kontejnerů pro stavební práce.',
      image: '/work/20220530_143714.jpg'
    },
    {
      icon: Radar,
      title: 'Montáž radarů',
      description: 'Instalace měřičů rychlosti a dopravních systémů.',
      image: '/work/20250511_211440.jpg'
    }
  ];

  const maxitySpecs = [
    { label: 'Maximální pracovní výška', value: '16 m' },
    { label: 'Nosnost košíku', value: '230 kg' },
    { label: 'Boční dosah', value: '9,5 m' },
    { label: 'Rozměry vozidla', value: '5,99 x 2,13 x 2,85 m' }
  ];

  const kubotaSpecs = [
    { label: 'Provozní hmotnost', value: '1 920 kg' },
    { label: 'Maximální hloubka kopání', value: '2 390 mm' },
    { label: 'Maximální dosah', value: '4 140 mm' },
    { label: 'Šířka podvozku', value: '990 mm' }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-citysound-green-50 to-citysound-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Naše další <span className="text-citysound-green-600">služby a technika</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Kromě veřejného osvětlení nabízíme komplexní služby včetně pronájmu specializované techniky 
              a provádění různých stavebních prací.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-citysound-green-600 rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renault Maxity Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="h-full flex flex-col justify-between">
              <img
                src="/work/20241115_112046.jpg"
                alt="Montážní plošina Renault Maxity"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img
                  src="/work/20250511_212135.jpg"
                  alt="Práce s montážní plošinou"
                  className="rounded-lg shadow-md h-32 w-full object-cover"
                />
                <img
                  src="/work/20220530_143714.jpg"
                  alt="Montážní plošina detail"
                  className="rounded-lg shadow-md h-32 w-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Práce s montážní plošinou <span className="text-citysound-green-600">Renault Maxity</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Naša montážní plošina umožňuje bezpečné práce ve výškách až 16 metrů. 
                Ideální pro údržbu osvětlení, instalace nebo opravy.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Maximální pracovní výška</span>
                  <span className="font-bold text-citysound-green-600">16 m</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Nosnost košíku</span>
                  <span className="font-bold text-citysound-green-600">230 kg</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Boční dosah</span>
                  <span className="font-bold text-citysound-green-600">9,5 m</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Rozměry vozidla</span>
                  <span className="font-bold text-citysound-green-600">5,99 x 2,13 x 2,85 m</span>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Nezávazně poptat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kubota Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Zemní práce minibagrem <span className="text-citysound-green-600">Kubota KX-019</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Kompaktní minibagr ideální pro práce v omezeném prostoru. 
                Provádíme výkopy pro kabelové vedení, terénní úpravy a další zemní práce.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Provozní hmotnost</span>
                  <span className="font-bold text-citysound-green-600">1 920 kg</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Maximální hloubka kopání</span>
                  <span className="font-bold text-citysound-green-600">2 390 mm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Maximální dosah</span>
                  <span className="font-bold text-citysound-green-600">4 140 mm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Šířka podvozku</span>
                  <span className="font-bold text-citysound-green-600">990 mm</span>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Nezávazně poptat
              </button>
            </div>
            
            <div className="order-1 lg:order-2 h-full flex flex-col justify-between">
              <img
                src="/work/20250511_211440.jpg"
                alt="Minibagr Kubota KX-019"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img
                  src="/work/20250226_091248.jpg"
                  alt="Zemní práce"
                  className="rounded-lg shadow-md h-32 w-full object-cover"
                />
                <img
                  src="/work/20250412_091130.jpg"
                  alt="Výkopové práce"
                  className="rounded-lg shadow-md h-32 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="h-full flex items-center">
              <img
                src="/work/20210107_150459.jpg"
                alt="Autodoprava a kontejnery"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                <span className="text-citysound-green-600">Autodoprava</span> a kontejnery
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Zajišťujeme dopravu materiálu a poskytujeme kontejnery pro odvoz stavebního odpadu. 
                Komplexní logistická podpora pro vaše projekty.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-citysound-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Přeprava materiálu a nářadí</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-citysound-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Poskytnutí kontejnerů různých velikostí</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-citysound-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Odvoz stavebního odpadu</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-citysound-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexibilní termíny a rychlé vyřízení</span>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Nezávazně poptat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Radar Installation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Montáž měřičů rychlosti <span className="text-citysound-green-600">(radary)</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specializujeme se na instalaci moderních měřičů rychlosti a dopravních systémů 
              pro zvýšení bezpečnosti na silnicích.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img
                src="/work/20250511_205703.jpg"
                alt="Instalace měřiče rychlosti"
                className="w-full h-64 object-cover rounded-xl mb-8"
              />
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <img
                  src="/work/20241115_112046.jpg"
                  alt="Radar installation 1"
                  className="rounded-lg shadow-md h-32 w-full object-cover"
                />
                <img
                  src="/work/20250511_212135.jpg"
                  alt="Radar installation 2"
                  className="rounded-lg shadow-md h-32 w-full object-cover"
                />
                <img
                  src="/work/20220530_143714.jpg"
                  alt="Radar installation 3"
                  className="rounded-lg shadow-md h-32 w-full object-cover"
                />
              </div>
              
              <div className="text-center">
                <button
                  onClick={scrollToContact}
                  className="bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-block"
                >
                  Nezávazně poptat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection 
        customTitle="Máte zájem o některou z našich služeb?"
        customSubtitle="Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku."
      />
      
      <Footer />
    </div>
  );
};

export default ServicesPage;