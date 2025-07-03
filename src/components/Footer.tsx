import React from 'react';
import { Phone, Mail, MapPin, Lightbulb, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Veřejné osvětlení',
    'Práce s montážní plošinou',
    'Zemní práce minibagrem',
    'Autodoprava a kontejnerizace',
    'Montáž radarů'
  ];

  const quickLinks = [
    { label: 'Domů', href: '/' },
    { label: 'Veřejné osvětlení', href: '/public-lighting' },
    { label: 'Reference', href: '/references' },
    { label: 'Kontakt', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-citysound-green-600 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Citysound</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Komplexní realizace veřejného osvětlení od A do Z. Spolehlivý partner 
              pro stavební firmy i obce po celé České republice.
            </p>
            <div className="flex items-center space-x-2 text-citysound-green-400">
              <span className="text-2xl font-bold">15+</span>
              <span className="text-sm">let zkušeností</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Naše služby</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service === 'Veřejné osvětlení' ? '/public-lighting' : '#services'}
                    className="text-gray-300 hover:text-citysound-green-400 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Rychlé odkazy</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-citysound-green-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Certifikovaní elektrikáři s oprávněním pro revize
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-citysound-green-400 mt-0.5" />
                <div>
                  <a
                    href="tel:+420774456960"
                    className="text-gray-300 hover:text-citysound-green-400 transition-colors"
                  >
                    +420 774 456 960
                  </a>
                  <p className="text-xs text-gray-400">Po-Pá: 7:00-16:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-citysound-green-400 mt-0.5" />
                <div>
                  <a
                    href="mailto:info@citysound.cz"
                    className="text-gray-300 hover:text-citysound-green-400 transition-colors"
                  >
                    info@citysound.cz
                  </a>
                  <p className="text-xs text-gray-400">Odpovídáme do 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-citysound-green-400 mt-0.5" />
                <div>
                  <span className="text-gray-300">
                    Oznice 101<br />
                    756 24 Bystřička
                  </span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.facebook.com/citysoundsro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-citysound-green-400 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/_citysound_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-citysound-green-400 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Citysound.cz - Všechna práva vyhrazena
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-citysound-green-400 transition-colors">
                Ochrana osobních údajů
              </a>
              <a href="#" className="text-gray-400 hover:text-citysound-green-400 transition-colors">
                Obchodní podmínky
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
