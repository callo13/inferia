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
    <>
      {/* Desktop Modern Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 hidden md:block"
      >
        <div className="max-w-4xl mx-auto backdrop-blur-xl bg-black/60 border border-zinc-800/50 rounded-full shadow-2xl shadow-lime-500/5">
          <div className="px-6 py-3.5 flex items-center justify-between">
            {/* Logo */}
            <div className="text-lg font-bold text-white">
              INFERIA
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-sm text-gray-300 hover:text-lime-500 transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm text-gray-300 hover:text-lime-500 transition-colors duration-300"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm text-gray-300 hover:text-lime-500 transition-colors duration-300"
              >
                Services
              </button>
            </nav>

            {/* Desktop CTA Button */}
            <button
              onClick={() => scrollToSection('footer')}
              className="bg-lime-500 text-black font-semibold text-sm rounded-full px-6 py-2 hover:bg-lime-400 transition-all duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navbar - Full Width */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-zinc-800 md:hidden"
      >
        <div className="px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-bold text-white">
            INFERIA
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[72px] left-0 right-0 md:hidden bg-black/95 border-t border-zinc-800 z-40"
        >
          <nav className="px-4 py-6 flex flex-col gap-4">
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
    </>
  );
};

export default Header;
