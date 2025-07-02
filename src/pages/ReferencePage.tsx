import React, { useState, useEffect } from 'react';
import { X, MapPin, Calendar, Building, User, Filter } from 'lucide-react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: string;
  image: string;
  description: string;
  projectType: string;
}

const ReferencePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('Všechny');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Rekonstrukce veřejného osvětlení',
      client: 'Obec Oznice',
      location: 'Oznice, okr. Vsetín',
      year: '2024',
      category: 'Veřejné osvětlení',
      image: '/work/20241115_112046.jpg',
      description: 'Pro obec Oznice jsme zajistili kompletní rekonstrukci veřejného osvětlení a povýstavbu výkopové práce pro nové chodníky. Projekt zahrnoval instalaci 45 úsporných LED svítidel a pokládku 900 metrů kabeláže.',
      projectType: 'Veřejné osvětlení, zemní práce'
    },
    {
      id: '2',
      title: 'Osvětlení průmyslového areálu',
      client: 'STRAMAG s.r.o.',
      location: 'Strážnice',
      year: '2024',
      category: 'Veřejné osvětlení',
      image: '/work/20250511_212135.jpg',
      description: 'Komplexní dodávka osvětlení pro průmyslový areál včetně vysokých stožárů a LED reflektorů s možností dálkového ovládání.',
      projectType: 'Průmyslové osvětlení'
    },
    {
      id: '3',
      title: 'Zemní práce a infrastruktura',
      client: 'Město Rožnov pod Radhoštěm',
      location: 'Rožnov pod Radhoštěm',
      year: '2023',
      category: 'Zemní práce',
      image: '/work/20220530_143714.jpg',
      description: 'Rozsáhlé zemní práce pro novou výstavbu včetně pokládky kabeláže nízkého napětí a přípravy základů pro osvětlení.',
      projectType: 'Zemní práce, pokládka kabelů'
    },
    {
      id: '4',
      title: 'Práce s montážní plošinou',
      client: 'PORR s.r.o.',
      location: 'Praha',
      year: '2024',
      category: 'Práce s plošinou',
      image: '/work/20250511_211440.jpg',
      description: 'Montážní práce ve výškách s využitím naší montážní plošiny pro instalaci osvětlení a technických zařízení.',
      projectType: 'Montážní práce'
    },
    {
      id: '5',
      title: 'Kontejnerová doprava',
      client: 'Eurovia CS',
      location: 'Brno',
      year: '2023',
      category: 'Kontejnery',
      image: '/work/20250226_091248.jpg',
      description: 'Zajištění kontejnerové dopravy a likvidace odpadu během rekonstrukce městského osvětlení.',
      projectType: 'Autodoprava, kontejnery'
    },
    {
      id: '6',
      title: 'Instalace měřičů rychlosti',
      client: 'Město Ostrava',
      location: 'Ostrava',
      year: '2024',
      category: 'Montáž radarů',
      image: '/work/20250412_091130.jpg',
      description: 'Profesionální instalace systémů měření rychlosti na frekventovaných úsecích městských komunikací.',
      projectType: 'Montáž radarů'
    },
    {
      id: '7',
      title: 'Parkové osvětlení',
      client: 'Město Zlín',
      location: 'Zlín',
      year: '2023',
      category: 'Veřejné osvětlení',
      image: '/work/20210107_150459.jpg',
      description: 'Designové osvětlení městského parku s důrazem na estetiku a úsporu energie.',
      projectType: 'Parkové osvětlení'
    },
    {
      id: '8',
      title: 'Komplexní infrastruktura',
      client: 'SMP CZ',
      location: 'Hradec Králové',
      year: '2024',
      category: 'Veřejné osvětlení',
      image: '/work/20250511_205703.jpg',
      description: 'Kompletní dodávka infrastruktury včetně osvětlení, zemních prací a dopravních značení.',
      projectType: 'Komplexní projekt'
    }
  ];

  const categories = ['Všechny', 'Veřejné osvětlení', 'Zemní práce', 'Práce s plošinou', 'Kontejnery', 'Montáž radarů'];

  const filteredProjects = activeFilter === 'Všechny' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const statistics = [
    { number: '150+', label: 'realizovaných projektů' },
    { number: '80+', label: 'spokojených měst a obcí' },
    { number: '20+', label: 'let zkušeností v oboru' }
  ];

  const cities = [
    'Ostrava', 'Brno', 'Zlín', 'Olomouc', 'Plzeň', 'Hradec Králové',
    'Praha', 'Pardubice', 'Jihlava', 'Havířov', 'Mladá Boleslav', 'Černá Hora',
    'Opava', 'Frýdek-Místek', 'Rožnov pod Radhoštěm', 'Vsetín', 'Ostravice'
  ];

  const companyLogos = {
    municipalities: ['Praha', 'Brno', 'Ostrava', 'Plzeň', 'České Budějovice', 'Hradec Králové'],
    companies: ['PORR', 'STRAMAG', 'METROSTAV', 'SKANSKA', 'HOCHTIEF', 'Eurovia CS', 'SMP CZ', 'SWIETELSKY', 'Subterra']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-citysound-green-50 via-white to-citysound-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-citysound-green-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-citysound-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Naše práce <span className="text-citysound-green-600">mluví za nás</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Za více než dvě dekády v oboru jsme úspěšně realizovali stovky projektů pro města, společnosti, 
              zákazníky i řad stavebních firem, měst a obcí. Podívejte se na výběr z naší práce.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-citysound-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Naše realizované projekty
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-citysound-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">Zobrazit projekt</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 font-medium mb-2">{project.client}</p>
                  <p className="text-gray-500 text-sm mb-3">{project.location} • {project.year}</p>
                  <span className="inline-block bg-citysound-green-100 text-citysound-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Coverage Section */}
      <section className="py-20 bg-gradient-to-r from-citysound-green-600 to-citysound-blue-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Působíme po celém regionu
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Naše realizace najdete v desítkách měst a obcí po celé České republice. Podívejte se, 
              kde všude jsme již úspěšně dokončili projekty.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city, index) => (
              <span
                key={index}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full font-medium transition-colors duration-300 cursor-pointer"
              >
                {city}
              </span>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30">
              Máte projekt v jiném regionu? Kontaktujte nás a domluvme se!
            </div>
          </div>
        </div>
      </section>

      {/* Client Collaboration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Spolupracují s námi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naše zkušenosti a spolehlivost oceňují jak přední stavební firmy, tak desítky měst a 
              obcí po celé České republice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Municipalities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Města a obce</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {companyLogos.municipalities.map((city, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                  >
                    <span className="font-medium text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Companies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Stavební a průmyslové firmy</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {companyLogos.companies.map((company, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                  >
                    <span className="font-medium text-gray-700">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{selectedProject.title}</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-citysound-green-600 mr-3" />
                    <div>
                      <span className="font-medium text-gray-700">Klient: </span>
                      <span className="text-gray-600">{selectedProject.client}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-citysound-green-600 mr-3" />
                    <div>
                      <span className="font-medium text-gray-700">Lokalita: </span>
                      <span className="text-gray-600">{selectedProject.location}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-citysound-green-600 mr-3" />
                    <div>
                      <span className="font-medium text-gray-700">Rok: </span>
                      <span className="text-gray-600">{selectedProject.year}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Filter className="w-5 h-5 text-citysound-green-600 mr-3" />
                    <div>
                      <span className="font-medium text-gray-700">Typ projektu: </span>
                      <span className="text-gray-600">{selectedProject.projectType}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <ContactSection 
        customTitle="Přesvědčila vás naše práce?"
        customSubtitle="Staňte se našim dalším spokojným zákazníkem."
      />
      
      <Footer />
    </div>
  );
};

export default ReferencePage;