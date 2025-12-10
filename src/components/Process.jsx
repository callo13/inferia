import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Lightbulb, Code, Rocket, LineChart } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    number: "01",
    title: "Audit & Diagnostic",
    description: "Analyse approfondie de vos processus actuels pour identifier les points de friction et les opportunités d'automatisation.",
    duration: "1-2 jours"
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Conception & Stratégie",
    description: "Élaboration d'une solution sur-mesure adaptée à vos besoins spécifiques et votre budget.",
    duration: "2-3 jours"
  },
  {
    icon: Code,
    number: "03",
    title: "Développement",
    description: "Mise en place de l'automatisation, des workflows et des intégrations avec vos outils existants.",
    duration: "1-3 semaines"
  },
  {
    icon: Rocket,
    number: "04",
    title: "Déploiement",
    description: "Mise en production progressive avec accompagnement et formation de vos équipes.",
    duration: "2-3 jours"
  },
  {
    icon: LineChart,
    number: "05",
    title: "Suivi & Optimisation",
    description: "Monitoring des performances, ajustements et améliorations continues pour maximiser l'impact.",
    duration: "En continu"
  }
];

const ProcessStep = ({ step, index, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Numéro et ligne pour desktop */}
        <div className="flex-shrink-0 relative">
          {/* Icône avec cercle */}
          <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-lime-500/20 to-lime-500/5 border-2 border-lime-500/30 flex items-center justify-center group hover:border-lime-500 hover:scale-110 transition-all duration-300">
            <Icon className="w-10 h-10 text-lime-500" />
          </div>

          {/* Ligne verticale de connexion */}
          {!isLast && (
            <div className="hidden md:block absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-lime-500/50 to-lime-500/10" />
          )}
        </div>

        {/* Contenu */}
        <div className="flex-1 bg-gradient-to-br from-zinc-900/50 to-black/50 border border-lime-500/10 rounded-2xl p-6 md:p-8 hover:border-lime-500/30 transition-all duration-300 group">
          {/* Badge numéro */}
          <div className="inline-block px-3 py-1 bg-lime-500/10 border border-lime-500/20 rounded-full text-lime-500 text-xs font-semibold mb-4">
            ÉTAPE {step.number}
          </div>

          {/* Titre */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-lime-500 transition-colors duration-300">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-4">
            {step.description}
          </p>

          {/* Durée */}
          <div className="flex items-center gap-2 text-sm text-lime-500/80">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{step.duration}</span>
          </div>

          {/* Effet de glow au survol */}
          <div className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-lime-500/5 to-lime-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* En-tête */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Notre Processus
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour transformer vos processus en quelques semaines
          </p>
        </motion.div>

        {/* Timeline des étapes */}
        <div className="space-y-8 md:space-y-12">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>

        {/* CTA en bas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Prêt à démarrer votre transformation ?
          </p>
          <button className="bg-lime-500 text-black font-bold text-lg rounded-full px-10 py-4 hover:bg-lime-400 hover:scale-105 transition-all duration-300 inline-block">
            Lancer votre projet
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
