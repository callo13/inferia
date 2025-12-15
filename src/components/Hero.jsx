import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToFooter = () => {
    const element = document.getElementById('footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 md:min-h-screen">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-lime-500/10 via-transparent to-transparent"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1]"
        >
          <span className="text-white block">L'agence pragmatique qui fait gagner du temps</span>
          <span className="text-lime-500 block">aux PME grâce à l’IA et l'automatisation</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          INFERIA construit votre besoin de A a Z
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToFooter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 sm:mt-8 bg-lime-500 text-black font-semibold text-base sm:text-lg rounded-full px-8 sm:px-10 py-3 sm:py-4 transition-all duration-300 inline-block relative overflow-hidden group"
        >
          {/* Effet shimmer au hover */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          <span className="relative z-10">Démarrer maintenant</span>

          {/* Glow effect */}
          <span className="absolute inset-0 rounded-full bg-lime-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
