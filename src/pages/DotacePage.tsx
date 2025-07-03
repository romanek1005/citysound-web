import React, { useState, useEffect } from 'react';
import { CheckCircle, Euro, FileText, Users, Award, MapPin, Phone, Mail, Send, ChevronRight, Lightbulb, Shield, Leaf } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCounter } from '../hooks/useCounter';

const DotacePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    municipality: '',
    email: '',
    phone: '',
    project: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        municipality: '',
        email: '',
        phone: '',
        project: ''
      });
    }, 3000);
  };

  const processSteps = [
    {
      number: 1,
      title: 'Dotační analýza a poradenství',
      description: 'Zanalyzujeme váš záměr a ověříme možnosti v aktuálních dotačních výzvách.',
      icon: FileText
    },
    {
      number: 2,
      title: 'Projektová a světelná studie',
      description: 'Připravíme veškeré technické podklady potřebné pro žádost (pasport, světelně-technický výpočet).',
      icon: Lightbulb
    },
    {
      number: 3,
      title: 'Zpracování a podání žádosti',
      description: 'Zkompletujeme a podáme žádost o dotaci vaším jménem.',
      icon: Send
    },
    {
      number: 4,
      title: 'Kompletní realizace projektu',
      description: 'Po schválení dotace provedeme veškeré práce – od výkopů po montáž a zapojení. Vše vlastní technikou a lidmi.',
      icon: Users
    },
    {
      number: 5,
      title: 'Administrace a vyúčtování',
      description: 'Pomůžeme s doložením všech potřebných dokumentů pro finální proplacení dotace.',
      icon: CheckCircle
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Jeden partner na vše',
      description: 'Nemusíte koordinovat projektanta, realizační firmu a dotačního poradce.'
    },
    {
      icon: Award,
      title: 'Zkušenosti a reference',
      description: 'Máme za sebou 150+ projektů pro obce a města. Víme, co funguje.'
    },
    {
      icon: Shield,
      title: 'Vlastní technika = Garance termínů',
      description: 'Realizaci neohrozí zpoždění subdodavatelů, což je pro dodržení dotačních podmínek klíčové.'
    },
    {
      icon: CheckCircle,
      title: 'Maximální úspěšnost',
      description: 'Naše odbornost zvyšuje šanci na schválení vaší žádosti.'
    }
  ];

  const savingsCounter = useCounter({ end: 70, suffix: '%' });
  const projectsCounter = useCounter({ end: 150, suffix: '+' });

  const faqs = [
    {
      question: 'Kdo může o dotaci žádat?',
      answer: 'Obce, města, svazky obcí, krajské úřady a další subjekty veřejné správy podle konkrétní dotační výzvy.'
    },
    {
      question: 'Na co přesně lze dotaci získat?',
      answer: 'Na výměnu svítidel za LED, doplnění světelných bodů, instalaci řídicích systémů, výměnu rozvaděčů a další modernizaci veřejného osvětlení.'
    },
    {
      question: 'Jaká je výše možné podpory?',
      answer: 'Obvykle 50-70% z celkových nákladů, záleží na konkrétní výzvě a typu žadatele.'
    },
    {
      question: 'Jak dlouho celý proces trvá?',
      answer: 'Od podání žádosti po realizaci obvykle 8-12 měsíců, záleží na složitosti projektu a době vyřizování dotace.'
    }
  ];

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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Získejte dotaci na <span className="text-citysound-green-600">moderní veřejné osvětlení</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Pomůžeme vám s celým procesem. Ušetřete až <span ref={savingsCounter.elementRef} className="font-bold text-citysound-green-600">{savingsCounter.displayValue}</span> nákladů na energie a zvyšte bezpečnost ve vaší obci.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#konzultace"
                className="bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Chci konzultaci k dotacím zdarma</span>
              </a>
              <a
                href="#proces"
                className="border-2 border-citysound-green-600 text-citysound-green-600 hover:bg-citysound-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <ChevronRight className="w-5 h-5" />
                <span>Jak to funguje</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solve Lighting with Grants Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Proč řešit osvětlení s dotací?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Moderní LED osvětlení přináší výrazné úspory energií, zvýšenou bezpečnost a lepší životní prostředí. 
              Dotace činí tuto investici dostupnou i pro obce s napjatým rozpočtem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-citysound-green-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-citysound-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Euro className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Úspora nákladů</h3>
              <p className="text-gray-600">
                LED osvětlení ušetří až 70% nákladů na elektřinu a výrazně sníží potřebu údržby.
              </p>
            </div>

            <div className="bg-citysound-blue-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-citysound-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Zvýšená bezpečnost</h3>
              <p className="text-gray-600">
                Kvalitní osvětlení zvyšuje bezpečnost občanů a snižuje kriminalitu ve veřejném prostoru.
              </p>
            </div>

            <div className="bg-citysound-red-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-citysound-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ekologický přínos</h3>
              <p className="text-gray-600">
                Snížení spotřeby energie a CO2 emisí přispívá k ochraně životního prostředí.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-citysound-green-600 to-citysound-blue-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Administrativa spojená s dotacemi může být složitá. My ji vyřešíme za vás.
            </h3>
            <p className="text-lg opacity-90">
              Jsme váš partner od žádosti o dotaci až po finální revizi.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proces" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Náš proces od A do Z
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompletní služba od analýzy dotačních možností až po finální vyúčtování.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-citysound-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <step.icon className="w-6 h-6 text-citysound-green-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="flex justify-center mt-6 mb-6">
                      <ChevronRight className="w-6 h-6 text-citysound-green-600 transform rotate-90" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Citysound Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Proč si pro vyřízení dotace vybrat Citysound?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Více než <span ref={projectsCounter.elementRef} className="font-bold text-citysound-green-600">{projectsCounter.displayValue}</span> úspěšných projektů pro obce a města.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-citysound-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-citysound-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference Project Section */}
      <section className="py-20 bg-gradient-to-br from-citysound-green-50 to-citysound-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Referenční projekt
              </h2>
              <p className="text-xl text-gray-600">
                Modernizace osvětlení v Obci Oznice s podporou dotace
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/work/20241115_112046.jpg" 
                    alt="Modernizace osvětlení Oznice" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Kompletní rekonstrukce veřejného osvětlení
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-citysound-green-600 mr-3" />
                      <span className="text-gray-600">Oznice, okr. Vsetín</span>
                    </div>
                    <div className="flex items-center">
                      <Lightbulb className="w-5 h-5 text-citysound-green-600 mr-3" />
                      <span className="text-gray-600">45 úsporných LED svítidel</span>
                    </div>
                    <div className="flex items-center">
                      <Euro className="w-5 h-5 text-citysound-green-600 mr-3" />
                      <span className="text-gray-600">Úspora 65% nákladů na energie</span>
                    </div>
                  </div>
                  <div className="bg-citysound-green-50 rounded-xl p-6 border-l-4 border-citysound-green-600">
                    <p className="text-gray-700 italic">
                      "Díky Citysound jsme nejen zmodernizovali osvětlení, ale celý proces získání dotace byl nečekaně hladký. Jejich komplexní přístup nám ušetřil spoustu času a starostí."
                    </p>
                    <p className="text-sm text-gray-600 mt-2 font-semibold">
                      - Starosta obce Oznice
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Často kladené dotazy
              </h2>
              <p className="text-xl text-gray-600">
                Odpovědi na nejčastější otázky o dotacích na veřejné osvětlení
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="konzultace" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Máte zájem o dotaci? Pojďme se nezávazně pobavit.
              </h2>
              <p className="text-xl text-gray-600">
                První konzultace je zdarma. Probereme váš záměr a navrhneme nejlepší postup.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Nezávazná konzultace
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-citysound-green-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Děkujeme za vaši poptávku!</h4>
                    <p className="text-gray-600">Ozveme se vám do 24 hodin.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Jméno a příjmení *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
                        placeholder="Jan Novák"
                      />
                    </div>

                    <div>
                      <label htmlFor="municipality" className="block text-sm font-semibold text-gray-700 mb-2">
                        Obec / Město *
                      </label>
                      <input
                        type="text"
                        id="municipality"
                        name="municipality"
                        value={formData.municipality}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
                        placeholder="Název obce nebo města"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
                          placeholder="jan@obec.cz"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
                          placeholder="+420 123 456 789"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="project" className="block text-sm font-semibold text-gray-700 mb-2">
                        Stručný popis záměru *
                      </label>
                      <textarea
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
                        placeholder="Popište stručně váš záměr ohledně veřejného osvětlení..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Odeslat nezávaznou poptávku</span>
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      * Povinné údaje. Vaše data zpracováváme v souladu s GDPR.
                    </p>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Nebo nás kontaktujte přímo
                </h3>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-citysound-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-citysound-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Telefon</h4>
                      <a
                        href="tel:+420774456960"
                        className="text-lg font-medium text-citysound-green-600 hover:text-citysound-green-700 transition-colors"
                      >
                        +420 774 456 960
                      </a>
                      <p className="text-sm text-gray-600">Volejte kdykoliv během pracovní doby</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-citysound-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-citysound-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">E-mail</h4>
                      <a
                        href="mailto:info@citysound.cz"
                        className="text-lg font-medium text-citysound-green-600 hover:text-citysound-green-700 transition-colors"
                      >
                        info@citysound.cz
                      </a>
                      <p className="text-sm text-gray-600">Odpovídáme do 24 hodin</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-citysound-green-600 to-citysound-blue-600 rounded-xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-2">💡 Tip pro úspěch</h4>
                  <p className="text-sm opacity-90">
                    Čím dříve začneme plánovat, tím lepší šance máte na získání dotace. 
                    Dotační výzvy mají omezené termíny!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DotacePage;