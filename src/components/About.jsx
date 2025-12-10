import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="pt-8 pb-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white mb-8"
        >
          Qui sommes-nous ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 leading-relaxed"
        >
          Après plus de six ans à automatiser, optimiser et résoudre des problèmes pour des environnements exigeants comme Naval Group, Airbus et la DGA, j’ai voulu mettre cette expertise au service des PME et TPE là où l’impact est immédiat.<br></br>
          Sur ces projets, j’ai appris une chose : les entreprises ne manquent pas d’outils, elles manquent de solutions simples qui font vraiment gagner du temps.<br></br>
          Aujourd’hui, avec Inferia, j’aide les petites et moyennes structures à utiliser l’IA de façon pragmatique, rapide et rentable.<br></br>
          Mon approche est directe :<br></br>
          Je repère ce qui vous ralentit, j’automatise ce qui peut l’être, et je construis des solutions qui vous économisent du temps, réduisent vos coûts et améliorent vos performances .<br></br>
          Pas de jargon.<br></br>
          Pas de complexité inutile.<br></br>
          Juste de l’efficacité concrète et des résultats visibles.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
