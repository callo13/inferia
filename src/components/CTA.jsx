import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Mail, Phone } from 'lucide-react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="py-16 relative overflow-hidden">
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
            href="https://calendly.com/inferia-contact/30min" // Remplacer par votre lien Calendly
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-lime-500 text-black font-bold text-lg rounded-full px-10 py-4 hover:bg-lime-400 transition-colors duration-300"
          >
            Réserver un appel gratuit
          </motion.a>

          {/* Section de contact alternatif */}
          <div className="mt-12 pt-12 border-t border-zinc-800">
            <p className="text-gray-400 text-lg mb-6">
              Une question ? Besoin d'une info avant de réserver votre appel ?
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* Email */}
              <a
                href="mailto:inferia.contact@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-lime-500 transition-colors duration-300 group"
              >
                <div className="p-3 rounded-full bg-zinc-900 group-hover:bg-lime-500/10 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-base md:text-lg">inferia.contact@gmail.com</span>
              </a>

              {/* Téléphone */}
              <a
                href="tel:+33123456789"
                className="flex items-center gap-3 text-gray-300 hover:text-lime-500 transition-colors duration-300 group"
              >
                <div className="p-3 rounded-full bg-zinc-900 group-hover:bg-lime-500/10 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-base md:text-lg">+33 6 99 06 12 41</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
