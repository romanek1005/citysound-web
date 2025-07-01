import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Facebook, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Veřejné osvětlení', href: '#hero' },
    { label: 'Další služby', href: '#services' },
    { label: 'Dotace', href: '#grants' },
    { label: 'Reference', href: '#references' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-citysound-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CS</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Citysound</span>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-citysound-green-600 font-medium transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Right Side - Contact, Social, CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Phone */}
            <a
              href="tel:+420722113729"
              className="flex items-center space-x-2 text-gray-700 hover:text-citysound-green-600 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">+420 722 113 729</span>
            </a>
            
            {/* Social Media */}
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-citysound-green-600 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-citysound-green-600 transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
            
            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="bg-citysound-red-600 hover:bg-citysound-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105"
            >
              Nezávazně poptat
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-citysound-green-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <a
                  href="tel:+420722113729"
                  className="flex items-center space-x-2 text-gray-700 py-2"
                >
                  <Phone size={16} />
                  <span>+420 722 113 729</span>
                </a>
                <div className="flex items-center space-x-4 py-2">
                  <a href="#" className="flex items-center space-x-2 text-gray-700">
                    <Facebook size={16} />
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-gray-700">
                    <Instagram size={16} />
                    <span>Instagram</span>
                  </a>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToContact();
                  }}
                  className="bg-citysound-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm mt-2"
                >
                  Nezávazně poptat
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
