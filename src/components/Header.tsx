import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

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
    { label: 'Domů', href: '#hero' },
    { label: 'Služby', href: '#services' },
    { label: 'Reference', href: '#references' },
    { label: 'O nás', href: '#about' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-citysound-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Citysound</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-citysound-green-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+420123456789"
              className="flex items-center space-x-2 text-gray-700 hover:text-citysound-green-600 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">+420 123 456 789</span>
            </a>
            <a
              href="mailto:info@citysound.cz"
              className="flex items-center space-x-2 text-gray-700 hover:text-citysound-green-600 transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm font-medium">info@citysound.cz</span>
            </a>
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
                  href="tel:+420123456789"
                  className="flex items-center space-x-2 text-gray-700 py-2"
                >
                  <Phone size={16} />
                  <span>+420 123 456 789</span>
                </a>
                <a
                  href="mailto:info@citysound.cz"
                  className="flex items-center space-x-2 text-gray-700 py-2"
                >
                  <Mail size={16} />
                  <span>info@citysound.cz</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;