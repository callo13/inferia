import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg sm:text-xl font-bold text-white">
          INFERIA
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm lg:text-base text-white hover:text-lime-500 transition-colors duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm lg:text-base text-white hover:text-lime-500 transition-colors duration-300"
          >
            À propos
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm lg:text-base text-white hover:text-lime-500 transition-colors duration-300"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('footer')}
            className="text-sm lg:text-base text-white hover:text-lime-500 transition-colors duration-300"
          >
            Contact
          </button>
        </nav>

        {/* Desktop CTA Button */}
        <button
          onClick={() => scrollToSection('footer')}
          className="hidden md:block bg-lime-500 text-black font-semibold text-sm lg:text-base rounded-full px-6 lg:px-8 py-2.5 lg:py-3 hover:scale-105 transition-transform duration-300"
        >
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 border-t border-zinc-800"
        >
          <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-lime-500 transition-colors duration-300 py-2 text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-lime-500 transition-colors duration-300 py-2 text-left"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-lime-500 transition-colors duration-300 py-2 text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="text-white hover:text-lime-500 transition-colors duration-300 py-2 text-left"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('footer')}
              className="mt-2 bg-lime-500 text-black font-semibold rounded-full px-8 py-3 hover:scale-105 transition-transform duration-300 text-center"
            >
              Contact
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
