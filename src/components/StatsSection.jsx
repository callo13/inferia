import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { value: 6, suffix: '+', label: 'Années d\'expérience' },
  { value: 50, suffix: '+', label: 'Projets automatisés' },
  { value: 80, suffix: '%', label: 'Gain de temps moyen' },
  { value: 100, suffix: '%', label: 'Satisfaction client' }
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Cercle avec effet glow */}
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-lime-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-lime-500/10 to-transparent border border-lime-500/30 rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center mx-auto group-hover:border-lime-500/60 group-hover:scale-110 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-lime-500">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                </div>
              </div>

              {/* Label */}
              <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
