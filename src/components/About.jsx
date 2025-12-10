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
          INFERIA est une agence spécialisée dans l'automatisation intelligente pour les PME.
          Nous transformons vos processus métier en workflows automatisés performants, vous
          permettant de gagner en efficacité et de vous concentrer sur l'essentiel : la croissance
          de votre entreprise.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
