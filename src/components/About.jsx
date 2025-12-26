import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="pt-8 pb-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Titre centré */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white mb-12 text-center"
        >
          À propos
        </motion.h2>

        {/* Contenu avec photo à gauche et texte à droite */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Photo de profil à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-lime-500/30 bg-zinc-900">
              <img
                src="/moi.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Texte à droite */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1"
          >
            <p className="text-lg text-gray-400 leading-relaxed text-left">
              Après plus de six ans à automatiser, optimiser et résoudre des problèmes pour des sociétés exigeantes comme <b>Naval Group, Airbus et la DGA</b>, j'ai voulu mettre cette expertise au service des PME et TPE là où l'impact est immédiat.<br/><br/>
              Sur ces projets, j'ai appris une chose : les entreprises ne manquent pas d'outils, elles manquent de solutions simples qui font vraiment gagner du temps.<br/><br/>
              Aujourd'hui, avec Inferia, j'aide les petites et moyennes structures à utiliser l'IA de façon pragmatique, rapide et rentable.<br/><br/>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
