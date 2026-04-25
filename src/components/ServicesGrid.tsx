import React from 'react';
import {motion} from 'framer-motion';
import {
  Building2,
  Cpu,
  Factory,
  Lightbulb,
  Network,
  Server,
  Shield,
  ShoppingBag,
  Snowflake,
  Sun,
  Wrench,
  Zap,
} from 'lucide-react';
import ServiceCard, {type Service} from './ServiceCard';

const container = {
  hidden: {},
  show: {
    transition: {staggerChildren: 0.06, delayChildren: 0.02},
  },
};

export default function ServicesGrid() {
  const services: Service[] = [
    {
      id: 'construction',
      index: '01',
      title: 'Construction & Bâtiment',
      description: 'Études, conception et exécution avec rigueur industrielle et finitions premium.',
      icon: Building2,
    },
    {
      id: 'electrical',
      index: '02',
      title: 'Électricité & Réseaux',
      description: 'Architecture électrique, distribution, protection et réseaux pour sites critiques.',
      icon: Zap,
    },
    {
      id: 'automation',
      index: '03',
      title: 'Domotique & Smart',
      description: 'Automatisation, supervision et scénarios intelligents pour efficacité et confort.',
      icon: Cpu,
    },
    {
      id: 'security',
      index: '04',
      title: 'Sécurité & Contrôle d’accès',
      description: 'Vidéo, détection, contrôle et traçabilité — intégration fiable et évolutive.',
      icon: Shield,
    },
    {
      id: 'industrial',
      index: '05',
      title: 'Automatisme Industriel',
      description: 'Pilotage process, capteurs, supervision et intégration terrain pour production fiable.',
      icon: Factory,
    },
    {
      id: 'telecom',
      index: '06',
      title: 'Télécoms & Réseaux',
      description: 'Infrastructure, câblage structuré et connectivité robuste pour opérations 24/7.',
      icon: Network,
    },
    {
      id: 'datacenter',
      index: '07',
      title: 'Infrastructures IT',
      description: 'Locaux techniques, baie/rack, câblage et continuité de service pour environnements critiques.',
      icon: Server,
    },
    {
      id: 'energy',
      index: '08',
      title: 'Énergie & Bornes',
      description: 'Solutions renouvelables, stockage et recharge — dimensionnement orienté ROI.',
      icon: Sun,
    },
    {
      id: 'hvac',
      index: '09',
      title: 'Climatisation & HVAC',
      description: 'Confort, performance thermique et optimisation énergétique avec pilotage fin.',
      icon: Snowflake,
    },
    {
      id: 'lighting',
      index: '10',
      title: 'Éclairage Public',
      description: 'Éclairage intelligent, durabilité et maintenance — design + conformité.',
      icon: Lightbulb,
    },
    {
      id: 'commerce',
      index: '11',
      title: 'Commerce & Services',
      description: 'Déploiement multi-sites, intégrations et standardisation pour croissance rapide.',
      icon: ShoppingBag,
    },
    {
      id: 'maintenance',
      index: '12',
      title: 'Maintenance & Exploitation',
      description: 'Préventif, curatif, optimisation et amélioration continue avec KPI clairs.',
      icon: Wrench,
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-[0.06] pointer-events-none" />
      <div className="pointer-events-none absolute -top-44 left-[-10%] h-[520px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.16)_0,rgba(2,6,23,0)_64%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-44 right-[-10%] h-[520px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(58,166,255,0.14)_0,rgba(2,6,23,0)_64%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.div
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-10% 0px -10% 0px'}}
              transition={{duration: 0.55, ease: [0.22, 1, 0.36, 1]}}
              className="mb-5 inline-flex items-center gap-3"
            >
              <div className="h-px w-10 bg-gradient-to-r from-[#ff6a00] to-[#ff8c00]" />
              <span className="text-[10px] font-black uppercase tracking-[0.38em] text-[#ff8c00]">
                Nos services
              </span>
            </motion.div>

            <motion.h2
              initial={{opacity: 0, y: 18}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-10% 0px -10% 0px'}}
              transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
              className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Des plateformes 3D pour des
              <br />
              <span className="bg-gradient-to-r from-[#ff6a00] via-[#ff8c00] to-[#3aa6ff] bg-clip-text text-transparent">
                solutions intégrées
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-10% 0px -10% 0px'}}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
            className="max-w-md text-pretty text-base leading-relaxed text-white/60 md:text-right"
          >
            Conception, intégration, déploiement. Une exécution premium, du plan à la mise en service.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, margin: '-8% 0px -8% 0px'}}
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

