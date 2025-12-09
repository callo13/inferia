import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-zinc-950 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Logo & Tagline */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">INFERIA</h3>
            <p className="text-gray-500">Automatisez votre croissance</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liens rapides</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('footer')}
                className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Column 3: Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-lime-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lime-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lime-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 mt-8 pt-8 border-t border-zinc-800">
          <p>© 2024 INFERIA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
