import React, { useEffect, useState } from 'react';
import { ChevronRight, Euro, FileText, Users, Award, MapPin, Phone, Mail, Lightbulb, Shield, CheckCircle, Send, Clock, Target, Zap, Building2, TrendingUp, Calculator, Wrench, ClipboardCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCounter } from '../hooks/useCounter';

const DotacePage: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    municipality: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for step animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => {
              if (!prev.includes(stepIndex)) {
                return [...prev, stepIndex].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    {
      number: 1,
      title: 'Projektová a dotační příprava',
      description: 'Zanalyzujeme váš záměr a připravíme veškeré podklady. Zajistíme pasportizaci veřejného osvětlení, energetický posudek a světelně-technický projekt. Ověříme způsobilost a maximalizujeme vaše šance.',
      icon: FileText,
      illustration: '📋'
    },
    {
      number: 2,
      title: 'Žádost a dotační management',
      description: 'Zkompletujeme a podáme žádost o dotaci vaším jménem. Postaráme se o veškerou administrativu a komunikaci s poskytovatelem dotace v průběhu schvalovacího procesu.',
      icon: Send,
      illustration: '📄'
    },
    {
      number: 3,
      title: 'Kompletní realizace',
      description: 'Po schválení dotace převezmeme kompletní realizaci. Díky vlastní technice a zkušenému týmu provedeme zemní práce, pokládku kabeláže, montáž sloupů i moderních LED svítidel.',
      icon: Wrench,
      illustration: '🚧'
    },
    {
      number: 4,
      title: 'Administrace a podotační servis',
      description: 'Zajistíme finální vyúčtování, doložení všech dokumentů pro proplacení dotace a kompletní podotační management. Jsme váš partner po celou dobu udržitelnosti projektu.',
      icon: ClipboardCheck,
      illustration: '✅'
    }
  ];

  const projectsCounter = useCounter({ end: 150, suffix: '+' });

  const faqItems = [
    {
      question: 'Kdo může o dotaci z výzvy SMARTNET a PUBGRID žádat?',
      answer: 'Oprávněnými žadateli jsou především obce, města, městské části a svazky obcí. Rádi s vámi zdarma ověříme, zda splňujete podmínky.'
    },
    {
      question: 'Jaká je přesně výše podpory a co zbylých 25 %?',
      answer: 'Dotace pokrývá 75 % tzv. způsobilých výdajů. Zbylou část lze financovat z rozpočtu obce, případně vám pomůžeme najít možnosti výhodného úvěrování.'
    },
    {
      question: 'Proč je spojení Citysound a Sunritek pro nás výhodou?',
      answer: 'Nemusíte koordinovat 3-4 různé firmy (projektanta, dotačního specialistu, realizační firmu...). My jsme jeden partner, jeden kontakt a neseme plnou zodpovědnost za výsledek od začátku do konce. Tím eliminujeme chyby, zpoždění a nedorozumění.'
    },
    {
      question: 'Co když žádost o dotaci nebude úspěšná?',
      answer: 'Díky naší expertíze a detailní přípravě dosahujeme maximální možné úspěšnosti. Pokud by přesto žádost nebyla schválena, zpracování žádosti vás nic nestojí. Navrhneme vám další postup, například vyčkání na další výzvu nebo alternativní řešení.'
    },
    {
      question: 'Kolik stojí vaše služby?',
      answer: 'Úvodní konzultace a analýza vašeho záměru je vždy zdarma. Náklady na kompletní přípravu a administraci projektu jsou způsobilým výdajem, na který se z velké části vztahuje samotná dotace. Vše transparentně naceníme předem.'
    }
  ];

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
        message: ''
      });
    }, 3000);
  };

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-citysound-red-100 border border-citysound-red-200 rounded-full px-6 py-3 mb-8">
              <Zap size={20} className="text-citysound-red-600" />
              <span className="text-lg font-bold text-citysound-red-800">NOVÁ DOTAČNÍ VÝZVA 2025</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 animate-fade-in leading-tight">
              Získejte <span className="text-citysound-green-600">75% dotaci</span> na modernizaci veřejného osvětlení
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in animation-delay-200">
              Připravte svou obec na dotační programy <strong className="text-citysound-blue-600">SMARTNET a PUBGRID</strong>. 
              Zajistíme pro vás vše od projektu a žádosti až po kompletní realizaci. <strong>Bez starostí a na klíč.</strong>
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 bg-citysound-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="w-8 h-8 text-citysound-green-600" />
                </div>
                <div className="text-3xl font-bold text-citysound-green-600 mb-2">75%</div>
                <div className="text-gray-700 font-medium">míra dotace</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-citysound-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-citysound-blue-600" />
                </div>
                <div className="text-3xl font-bold text-citysound-blue-600 mb-2">Q3</div>
                <div className="text-gray-700 font-medium">vyhlášení 2025</div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <div className="w-16 h-16 bg-citysound-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-citysound-red-600" />
                </div>
                <div className="text-3xl font-bold text-citysound-red-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">kompletní servis</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-600">
              <button
                onClick={scrollToContact}
                className="bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-citysound-red-500/25 flex items-center space-x-3"
              >
                <Euro className="w-6 h-6" />
                <span>Chci konzultaci k dotaci zdarma</span>
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <p className="text-lg text-gray-600 mt-6">
              Nebo nám zavolejte: <a href="tel:+420774456960" className="font-bold text-citysound-green-600 hover:text-citysound-green-700">+420 774 456 960</a>
            </p>
          </div>
        </div>
      </section>

      {/* Animated Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Od prvotní myšlenky k <span className="text-citysound-green-600">rozsvícené obci</span> ve 4 krocích
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Náš proces je navržen tak, aby pro vás byl celý průběh získání dotace a realizace projektu co nejjednodušší.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                data-step={index}
                className={`flex flex-col lg:flex-row items-center gap-12 mb-20 transition-all duration-1000 ${
                  visibleSteps.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                } ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                style={{ 
                  transitionDelay: visibleSteps.includes(index) ? `${index * 200}ms` : '0ms' 
                }}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-citysound-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Illustration */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 bg-gradient-to-br from-citysound-green-50 to-citysound-blue-50 rounded-3xl flex items-center justify-center shadow-2xl border border-white/50">
                      <div className="text-8xl mb-4">
                        {step.illustration}
                      </div>
                    </div>
                    {/* Floating icon */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-citysound-green-600 rounded-full flex items-center justify-center shadow-xl">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grant Details Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-citysound-green-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Vše, co potřebujete vědět o dotaci na rok 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailní informace o dotačních programech SMARTNET a PUBGRID
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Timeline and Support */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-citysound-blue-600 mr-3" />
                Časový harmonogram a výše podpory
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Míra dotace</span>
                  <span className="font-bold text-2xl text-citysound-green-600">75%</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Oficiální vyhlášení</span>
                  <span className="font-bold text-citysound-blue-600">Q3 2025</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Příjem žádostí</span>
                  <span className="font-bold text-citysound-blue-600">Q4 2025</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="font-medium text-gray-700">Možnost realizace</span>
                  <span className="font-bold text-gray-800">Až 5 let</span>
                </div>
              </div>
            </div>

            {/* Eligible Expenses */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Target className="w-6 h-6 text-citysound-green-600 mr-3" />
                Na co lze dotaci využít?
              </h3>
              
              <div className="space-y-4">
                {[
                  'Výměna a doplnění úsporných LED svítidel',
                  'Rekonstrukce a modernizace rozvaděčů a vedení',
                  'Instalace inteligentního řídicího systému',
                  'Nezbytné stavební práce (včetně zemních prací)',
                  'Projektová dokumentace (všechny stupně)',
                  'Energetický posudek a pasportizace',
                  'Administrace výběrového řízení a dotační management'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-citysound-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Jeden partner, kompletní expertiza. <span className="text-citysound-red-600">Žádní subdodavatelé.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Spojili jsme síly, abychom vám nabídli službu, která na trhu nemá obdoby. 
              My v Citysound projekt fyzicky zrealizujeme vlastní technikou. 
              Experti ze Sunritek zajistí bezchybnou projektovou a administrativní přípravu.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Citysound Block */}
            <div className="bg-gradient-to-br from-citysound-green-50 to-citysound-green-100 rounded-2xl p-8 border-2 border-citysound-green-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-citysound-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-citysound-green-800">Citysound.cz</h3>
                  <p className="text-citysound-green-700 font-semibold">Síla v realizaci</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  'Vlastní montážní plošiny a minibagry',
                  'Zkušení elektrikáři a montážní týmy',
                  'Kompletní zemní práce a pokládka sítí',
                  'Garance termínů a kvality provedení'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-citysound-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-citysound-green-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sunritek Block */}
            <div className="bg-gradient-to-br from-citysound-blue-50 to-citysound-blue-100 rounded-2xl p-8 border-2 border-citysound-blue-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-citysound-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ST</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-citysound-blue-800">Sunritek s.r.o.</h3>
                  <p className="text-citysound-blue-700 font-semibold">Jistota v přípravě</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Projekce a DSP:', desc: 'Kompletní projektová dokumentace VO včetně stavebního povolení.' },
                  { title: 'Energetika (ENEP):', desc: 'Energetické posudky, pasporty a analýzy.' },
                  { title: 'Dotace (Consulting):', desc: 'Zpracování a kompletní vyřízení dotačních žádostí.' },
                  { title: 'Optimalizace (KEPS):', desc: 'Analýza sazeb a poradenství od energetického specialisty.' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-citysound-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-citysound-blue-800">
                      <span className="font-bold">{item.title}</span> {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Project Section */}
      <section className="py-20 bg-gradient-to-br from-citysound-green-50 to-citysound-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Přes <span ref={projectsCounter.elementRef} className="text-citysound-green-600">{projectsCounter.displayValue}</span> úspěšných projektů mluví za nás
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="/work/20241115_112046.jpg" 
                    alt="Kompletní rekonstrukce VO v obci Oznice" 
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    Kompletní rekonstrukce VO v obci Oznice
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Lightbulb className="w-6 h-6 text-citysound-green-600 mr-4" />
                      <span className="text-lg text-gray-700"><strong>Rozsah:</strong> 45 nových úsporných LED svítidel</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-6 h-6 text-citysound-green-600 mr-4" />
                      <span className="text-lg text-gray-700"><strong>Výsledek:</strong> Úspora 65% nákladů na energie a výrazně vyšší bezpečnost</span>
                    </div>
                  </div>
                  <div className="bg-citysound-green-50 rounded-xl p-6 border-l-4 border-citysound-green-600">
                    <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
                      "Díky komplexnímu přístupu Citysound byl celý proces získání dotace a následné realizace nečekaně hladký. 
                      Ušetřili nám obrovské množství času a starostí a výsledek je perfektní."
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
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
              Odpovědi na vaše otázky
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nejčastější dotazy ohledně dotačních programů SMARTNET a PUBGRID
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-start">
                  <span className="w-8 h-8 bg-citysound-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-citysound-green-600 text-lg font-bold">?</span>
                  </span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg ml-12">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nenechte si ujít příležitost pro rok 2025. <span className="text-citysound-green-600">Ozvěte se ještě dnes.</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Čas na přípravu projektu je teď. Vyplňte formulář a my se vám co nejdříve ozveme na bezplatnou a nezávaznou konzultaci.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Nezávazná konzultace
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-citysound-green-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Děkujeme za váš zájem!</h4>
                    <p className="text-gray-600">Ozveme se vám co nejdříve s nezávaznou konzultací.</p>
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
                        Obec/Město *
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
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Krátká zpráva
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
                        placeholder="Stručně popište váš záměr nebo dotaz..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Odeslat nezávaznou poptávku</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Kontaktní informace
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-citysound-green-50 rounded-xl p-6 border border-citysound-green-200">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-citysound-green-600 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">Zavolejte nám</h4>
                          <a
                            href="tel:+420774456960"
                            className="text-2xl font-bold text-citysound-green-600 hover:text-citysound-green-700 transition-colors"
                          >
                            +420 774 456 960
                          </a>
                          <p className="text-sm text-gray-600">Po-Pá: 7:00-16:00</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-citysound-blue-50 rounded-xl p-6 border border-citysound-blue-200">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-citysound-blue-600 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">Napište nám</h4>
                          <a
                            href="mailto:dotace@citysound.cz"
                            className="text-2xl font-bold text-citysound-blue-600 hover:text-citysound-blue-700 transition-colors"
                          >
                            dotace@citysound.cz
                          </a>
                          <p className="text-sm text-gray-600">Odpovídáme do 24 hodin</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-gradient-to-r from-citysound-green-100 to-citysound-blue-100 rounded-xl p-6 border border-citysound-green-200">
                  <h4 className="font-bold text-gray-800 mb-4">Proč nám důvěřovat?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-citysound-green-600" />
                      <span className="text-gray-700">Přes 150 úspěšných projektů</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-citysound-green-600" />
                      <span className="text-gray-700">20+ let zkušeností v oboru</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-citysound-green-600" />
                      <span className="text-gray-700">Komplexní servis na klíč</span>
                    </div>
                  </div>
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