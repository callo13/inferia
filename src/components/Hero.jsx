import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToFooter = () => {
    const element = document.getElementById('footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-24 pb-8 sm:pt-32 md:min-h-screen">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-lime-500/10 via-transparent to-transparent"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1]"
        >
          <span className="text-white block">L'IA qui construit votre</span>
          <span className="text-lime-500 block">produit, de A à Z</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          Plateforme tout-en-un pour concevoir, développer et lancer vos produits avec l'intelligence artificielle
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToFooter}
          className="mt-6 sm:mt-8 bg-lime-500 text-black font-semibold text-base sm:text-lg rounded-full px-8 sm:px-10 py-3 sm:py-4 hover:scale-105 transition-transform duration-300 inline-block"
        >
          Démarrer maintenant
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
