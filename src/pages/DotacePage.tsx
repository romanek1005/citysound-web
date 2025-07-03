import React, { useEffect } from 'react';
import { ChevronRight, Euro, FileText, Users, Award, MapPin, Phone, Mail, Lightbulb, Shield, CheckCircle, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCounter } from '../hooks/useCounter';

const DotacePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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

  const faqItems = [
    {
      question: 'Kdo může o dotaci žádat?',
      answer: 'O dotace na veřejné osvětlení mohou žádat obce, města, městské části, svazky obcí a další subjekty veřejné správy. Podmínky se liší podle konkrétní dotační výzvy.'
    },
    {
      question: 'Na co přesně lze dotaci získat?',
      answer: 'Dotace lze využít na výměnu svítidel za úsporná LED, doplnění nových světelných bodů, instalaci řídicích systémů, rekonstrukci rozvodů a další modernizační opatření veřejného osvětlení.'
    },
    {
      question: 'Jaká je výše možné podpory?',
      answer: 'Výše dotace se obvykle pohybuje mezi 50-85% z celkových nákladů projektu, záleží na konkrétní výzvě a typu žadatele. U některých programů může být podpora až 100%.'
    },
    {
      question: 'Jak dlouho celý proces trvá?',
      answer: 'Od podání žádosti po realizaci obvykle 8-18 měsíců. Záleží na složitosti projektu, rychlosti schvalování a dostupnosti dotačních prostředků.'
    },
    {
      question: 'Jaké jsou náklady na vaše služby?',
      answer: 'První konzultace je vždycky zdarma. Náklady na zpracování žádosti a administraci jsou součástí celkové nabídky projektu. Platíte až při úspěšném získání dotace.'
    },
    {
      question: 'Co když dotaci nezískáme?',
      answer: 'V případě neúspěchu dotační žádosti vám nabídneme alternativní řešení financování nebo možnost čekat na další vhodnou výzvu. Naše zkusenosti však zajišťují vysokou úspěšnost.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-citysound-green-50 via-white to-citysound-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-citysound-green-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-citysound-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-citysound-green-100 border border-citysound-green-200 rounded-full px-4 py-2 mb-6">
              <Euro size={16} className="text-citysound-green-600" />
              <span className="text-sm font-medium text-citysound-green-800">Ušetřete až 85% nákladů s dotací</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 animate-fade-in">
              Získejte dotaci na <span className="text-citysound-green-600">moderní veřejné osvětlení</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in animation-delay-200">
              Ušetřete až 70% nákladů na energie a zvyšte bezpečnost ve vaší obci. 
              <strong className="text-citysound-green-700"> Jsme váš partner od žádosti o dotaci až po finální revizi.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400">
              <a
                href="#konzultace"
                className="bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Euro className="w-5 h-5" />
                <span>Chci konzultaci k dotacím zdarma</span>
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+420774456960"
                className="border-2 border-citysound-green-600 text-citysound-green-600 hover:bg-citysound-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Zavolat +420 774 456 960</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Proč řešit osvětlení s dotací?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moderní LED osvětlení přináší obcím významné úspory a zvyšuje bezpečnost občanů. 
              Dotace činí tuto investici dostupnou i pro obce s napjatým rozpočtem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0s' }}>
              <div className="w-16 h-16 bg-citysound-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="w-8 h-8 text-citysound-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Úspora až 70%</h3>
              <p className="text-gray-600">LED technologie snižuje náklady na elektřinu a údržbu oproti tradičnímu osvětlení.</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-citysound-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-citysound-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Vyšší bezpečnost</h3>
              <p className="text-gray-600">Kvalitní osvětlení zvyšuje bezpečnost občanů a snižuje kriminalitu v nočních hodinách.</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-citysound-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-citysound-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Moderní technologie</h3>
              <p className="text-gray-600">Inteligentní řízení, dálkový monitoring a možnost regulace intenzity osvětlení.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-citysound-green-50 to-citysound-green-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-citysound-green-800 mb-4">
              Problém s administrativou?
            </h3>
            <p className="text-lg text-citysound-green-700 mb-6 max-w-2xl mx-auto">
              Administrativa spojená s dotacemi může být složitá a časově náročná. 
              <strong> My ji vyřešíme za vás a postaráme se o celý proces od začátku do konce.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Náš proces od A do Z
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompletní služba, která vám ušetří čas, starosti a maximalizuje šanci na úspěch. 
              Nemusíte koordinovat více dodavatelů - vše vyřešíme z jedné ruky.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-citysound-green-100 text-citysound-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-citysound-green-600 mb-1">
                      Krok {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
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

          <div className="text-center">
            <div className="inline-block bg-citysound-green-100 text-citysound-green-800 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-citysound-green-200">
              ✓ Výsledek: Moderní osvětlení s minimálními náklady pro vaši obec
            </div>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Často kladené dotazy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odpovědi na nejčastější otázky ohledně dotací na veřejné osvětlení.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
                  <span className="w-6 h-6 bg-citysound-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-citysound-green-600 text-sm font-bold">?</span>
                  </span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-9">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Máte zájem o dotaci? <span className="text-citysound-green-600">Pojďme se nezávazně pobavit.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                První konzultace je zdarma. Probereme váš záměr a navrhneme nejlepší postup 
                pro získání dotace na modernizaci vašeho veřejného osvětlení.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-citysound-green-50 rounded-xl p-6 border border-citysound-green-200 text-center">
                <Phone className="w-8 h-8 text-citysound-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Zavolejte nám</h3>
                <a
                  href="tel:+420774456960"
                  className="text-xl font-bold text-citysound-green-600 hover:text-citysound-green-700 transition-colors block"
                >
                  +420 774 456 960
                </a>
                <p className="text-sm text-gray-600 mt-2">Po-Pá: 7:00-16:00</p>
              </div>
              
              <div className="bg-citysound-blue-50 rounded-xl p-6 border border-citysound-blue-200 text-center">
                <Mail className="w-8 h-8 text-citysound-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Napište nám</h3>
                <a
                  href="mailto:info@citysound.cz"
                  className="text-xl font-bold text-citysound-blue-600 hover:text-citysound-blue-700 transition-colors block"
                >
                  info@citysound.cz
                </a>
                <p className="text-sm text-gray-600 mt-2">Odpovídáme do 24 hodin</p>
              </div>
            </div>

            <a
              href="tel:+420774456960"
              className="bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 w-full max-w-lg mx-auto"
            >
              <Euro className="w-5 h-5" />
              <span>Chci nezávaznou konzultaci k dotacím</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DotacePage;