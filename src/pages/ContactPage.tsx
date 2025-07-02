import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const subjectOptions = [
    'Nezávazná poptávka - veřejné osvětlení',
    'Pronájem montážní plošiny',
    'Zemní práce minibagrem',
    'Autodoprava a kontejnery',
    'Montáž radarů',
    'Obecný dotaz'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+420 774 456 960',
      href: 'tel:+420774456960',
      description: 'Volejte kdykoliv během pracovní doby'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'info@citysound.cz',
      href: 'mailto:info@citysound.cz',
      description: 'Odpovídáme do 24 hodin'
    },
    {
      icon: MapPin,
      title: 'Adresa sídla',
      value: 'CitySound s.r.o., Oznice 101, 756 24 Bystřička',
      href: '#',
      description: 'Možnost osobní konzultace'
    },
    {
      icon: Clock,
      title: 'Pracovní doba',
      value: 'Po-Pá: 7:00-16:00',
      href: '#',
      description: 'Pro urgentní případy volejte kdykoliv'
    },
    {
      icon: Building,
      title: 'Identifikační údaje',
      value: 'IČO: 06689108',
      href: '#',
      description: 'DIČ: CZ06689108'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center bg-gradient-to-br from-citysound-green-50 via-white to-citysound-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-citysound-green-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-citysound-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Máte projekt? <span className="text-citysound-green-600">Pojďme se bavit!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Ozvěte se nám kdykoliv. První konzultace je zdarma a bez závazků. 
              Rádi si s vámi promluvíme o vašich potřebách.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+420774456960"
                className="bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Zavolat +420 774 456 960</span>
              </a>
              <a
                href="mailto:info@citysound.cz"
                className="border-2 border-citysound-green-600 text-citysound-green-600 hover:bg-citysound-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>info@citysound.cz</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Napište nám
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vyplňte formulář níže a my se vám ozveme do 24 hodin.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Nezávazná poptávka
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-citysound-green-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Děkujeme za vaši poptávku!</h4>
                    <p className="text-gray-600">Ozveme se vám do 24 hodin.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
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
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Firma / Obec
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
                          placeholder="Název firmy nebo obce"
                        />
                      </div>
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
                          placeholder="jan@firma.cz"
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
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Předmět dotazu *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Vyberte předmět dotazu</option>
                        {subjectOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Stručný popis poptávky *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-citysound-green-500 focus:border-transparent transition-colors"
                        placeholder="Popište stručně váš projekt nebo požadavky..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Odeslat poptávku</span>
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      * Povinné údaje. Vaše data zpracováváme v souladu s GDPR.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Kontaktní informace
                </h3>

                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-citysound-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-citysound-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                        {info.href !== '#' ? (
                          <a
                            href={info.href}
                            className="text-lg font-medium text-citysound-green-600 hover:text-citysound-green-700 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-lg font-medium text-gray-700">{info.value}</span>
                        )}
                        <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kde nás najdete
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naše firma sídlí v obci Bystřička, odkud pokrýváme celou Moravskoslezskou oblast.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-citysound-green-600" />
                  <p className="text-xl font-semibold mb-2">Mapa bude brzy k dispozici</p>
                  <p className="text-lg text-gray-700 font-medium">Oznice 101, 756 24 Bystřička</p>
                  <p className="text-sm text-gray-500 mt-2">Možnost osobní konzultace po předchozí domluvě</p>
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

export default ContactPage;
