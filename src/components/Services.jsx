import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Phone, Workflow, Plug, MessageSquare, Sparkles } from 'lucide-react';
import TiltedCard from './TiltedCard';

const services = [
  {
    icon: Bot,
    number: "01",
    title: "Automatisation de taches répétitives",
    subtitle: "Processus intelligents & sans friction",
    description: "Automatisation sur-mesure des processus métier afin d’éliminer les tâches répétitives et améliorer la performance opérationnelle",
    features: [
      "Workflows n8n personnalisés",
      "Intégrations illimitées",
      "Exécution fiable & scalable"
    ]
  },
  {
    icon: Phone,
    number: "02",
    title: "Chatbots & Agents conversationnels",
    subtitle: "Support intelligent, formé à votre business",
    description: "Mise en place de chatbots et agents IA entraînés sur vos documents, process, FAQ et connaissances internes, offrant des réponses naturelles 24/7",
    features: [
      "Réponses naturelles 24/7",
      "Traitement multilingue",
      "Intégration complète"
    ]
  },
  {
    icon: Workflow,
    number: "03",
    title: "Génération de contenu assistée par IA",
    subtitle: "Contenu automatisé & cohérent",
    description: "Automatisation de la création de posts LinkedIn, newsletters, scripts, descriptions produits ou emails afin de maintenir une communication régulière et impactante.",
    features: [
      "Workflows sur-mesure",
      "Connecteurs illimités",
      "Support technique dédié"
    ]
  },
  {
    icon: Plug,
    number: "04",
    title: "Extraction & analyse de données",
    subtitle: "Data utile, exploitable & automatisée",
    description: "Extraction de données, traitement intelligent de documents et réalisation de dashboards automatisés permettant une prise de décision rapide et éclairée ",
    features: [
      "APIs sécurisées",
      "Synchronisation en temps réel",
      "Tableaux de bord automatisés"
    ]
  },
  {
    icon: MessageSquare,
    number: "05",
    title: "Assistants IA métier personnalisés",
    subtitle: "L’IA qui connaît votre métier",
    description: "Conception d’assistants IA spécialisés (RAG, base de connaissances, outils internes) capables d’exécuter des tâches métier complexes et adaptées à votre organisation",
    features: [
      "Architecture adaptée",
      "Compréhension métier approfondie",
      "Évolution continue"
    ]
  },
  {
    icon: Sparkles,
    number: "06",
    title: "Solutions Custom",
    subtitle: "DÉVELOPPEMENT SUR-MESURE",
    description: "Développement d'outils IA personnalisés selon vos besoins",
    features: [
      "Architecture adaptée",
      "Technologies avancées",
      "Maintenance incluse"
    ]
  }
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <TiltedCard scaleOnHover={1.05} rotateAmplitude={8}>
        <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-lime-500/20 rounded-3xl p-8 hover:border-lime-500/50 hover:shadow-lg hover:shadow-lime-500/10 transition-all duration-300 overflow-hidden group h-full">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Content */}
          <div className="relative z-10">
        {/* Icon container with background */}
        <div className="w-16 h-16 bg-lime-500/10 rounded-xl flex items-center justify-center mb-6 border border-lime-500/20">
          <Icon className="text-lime-500 w-8 h-8" />
        </div>

        {/* Number badge */}
        <div className="absolute top-6 right-6 text-6xl font-black text-lime-500/10">
          {service.number}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>

        {/* Subtitle */}
        <p className="text-xs font-semibold text-lime-500 tracking-wider mb-4 uppercase">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-300">
              <span className="text-lime-500 mr-2 mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
          </div>
        </div>
      </TiltedCard>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-white text-center mb-16"
        >
          Nos Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
