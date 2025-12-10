import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-8 pb-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Calendar className="w-16 h-16 text-lime-500 mx-auto mb-6" />

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Prêt à automatiser votre croissance ?
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Réservez un appel gratuit de 30 minutes pour discuter de vos besoins
            et découvrir comment l'IA peut transformer votre entreprise.
          </p>

          <motion.a
            href="https://calendly.com/votre-lien" // Remplacer par votre lien Calendly
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-lime-500 text-black font-bold text-lg rounded-full px-10 py-4 hover:bg-lime-400 transition-colors duration-300"
          >
            Réserver un appel gratuit
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
