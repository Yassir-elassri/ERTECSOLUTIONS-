import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ExternalLink, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const projects = [
  {
    title: "Centrale Solaire Industrielle",
    category: "Énergie Renouvelable",
    image: "https://picsum.photos/seed/solar8/600/600",
    size: "large"
  },
  {
    title: "Eco-District résidentiel",
    category: "Construction",
    image: "https://picsum.photos/seed/build12/600/400"
  },
  {
    title: "Data Center Maintenance",
    category: "IT & Réseaux",
    image: "https://picsum.photos/seed/server3/600/400"
  },
  {
    title: "Infrastructure Télécom 5G",
    category: "Telecommunications",
    image: "https://picsum.photos/seed/tower5/600/600",
    size: "large"
  },
  {
    title: "Hôpital Universitaire HVAC",
    category: "Fluides & HVAC",
    image: "https://picsum.photos/seed/hvac1/600/400"
  },
  {
    title: "Smart Lighting Project",
    category: "Éclairage Public",
    image: "https://picsum.photos/seed/light2/600/400"
  }
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-6 inline-block"
          >
            Réalisations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-8"
          >
            Bâtir des <br/><span className="text-gradient">Reliques Modernes</span>
          </motion.h2>
          <p className="text-slate-400 text-lg">
            Découvrez comment ERTEC SOLUTIONS transforme les défis complexes en solutions d'ingénierie concrètes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative rounded-3xl overflow-hidden cursor-pointer",
                project.size === 'large' ? "md:row-span-2" : ""
              )}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-brand-orange text-[10px] font-bold uppercase tracking-widest pl-2 border-l border-brand-orange rtl:pl-0 rtl:pr-2 rtl:border-l-0 rtl:border-r">
                      {project.category}
                    </span>
                    <span className="text-white/20 text-[8px] font-mono">[ 2024_QPE ]</span>
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3 rtl:space-x-reverse">
                      <button className="w-12 h-12 rounded-xl glass-dark text-white flex items-center justify-center hover:bg-brand-orange transition-all duration-300">
                        <Search className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 rounded-xl border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-brand-blue transition-all duration-300">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                       Alger • Dubai
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-white/10 hover:bg-white hover:text-brand-blue rounded-full font-bold transition-all"
          >
            Voir tous les projets
          </motion.button>
        </div>
      </div>
    </section>
  );
}
