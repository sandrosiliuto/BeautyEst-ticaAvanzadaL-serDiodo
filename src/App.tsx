import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Tratamientos', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-serif text-nude-900 tracking-wide">
              BEAUTY
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-widest text-gray-600 hover:text-nude-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/34608037243" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-nude-800 text-white px-6 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-nude-900 transition-colors"
            >
              Agendar Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 hover:text-nude-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-nude-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-800 hover:text-nude-800 hover:bg-nude-50 rounded-md uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="https://wa.me/34608037243" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-nude-800 text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-nude-900 transition-colors"
                >
                  Agendar Cita
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-nude-900 text-nude-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif mb-6 text-white">Beauty Estética Avanzada</h3>
            <p className="text-nude-300 font-light leading-relaxed max-w-sm">
              Clínica de medicina estética y belleza integral. Resultados naturales y tecnología de vanguardia para realzar tu mejor versión.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest text-nude-400 mb-6 font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#nosotros" className="text-nude-200 hover:text-white transition-colors">Nuestra Filosofía</a></li>
              <li><a href="#servicios" className="text-nude-200 hover:text-white transition-colors">Tratamientos Faciales</a></li>
              <li><a href="#servicios" className="text-nude-200 hover:text-white transition-colors">Tratamientos Corporales</a></li>
              <li><a href="#servicios" className="text-nude-200 hover:text-white transition-colors">Depilación Láser</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-nude-400 mb-6 font-semibold">Contacto</h4>
            <ul className="space-y-4 text-nude-200 font-light">
              <li>Av. Santa Cruz, 117, oficina 4</li>
              <li>38611 San Isidro, Santa Cruz de Tenerife</li>
              <li>
                <a href="https://wa.me/34608037243" className="flex items-center gap-2 hover:text-white transition-colors mt-4">
                  <Phone size={16} /> +34 608 03 72 43
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/beautyesteticaavanzada" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors mt-2">
                  <Instagram size={16} /> @beautyesteticaavanzada
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-nude-800 mt-16 pt-8 text-center text-nude-400 text-sm font-light flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Beauty Estética Avanzada. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-nude-200 selection:text-nude-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
