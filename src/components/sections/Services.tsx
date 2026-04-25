import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { 
  Building2, 
  Wind, 
  Sun, 
  Network, 
  Zap, 
  Lightbulb, 
  ShoppingBag,
  Shield,
  Cpu
} from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { icon: Building2, id: 'construction' },
    { icon: Zap, id: 'electrical' },
    { icon: Cpu, id: 'automation' },
    { icon: Shield, id: 'security' },
    { icon: Network, id: 'telecom' },
    { icon: Sun, id: 'energy' },
    { icon: Wind, id: 'hvac' },
    { icon: Lightbulb, id: 'lighting' },
    { icon: ShoppingBag, id: 'commerce' },
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-brand-blue-light/30">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 rtl:space-x-reverse mb-4"
            >
              <div className="w-8 h-px bg-brand-orange" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-orange">Expertise Globale</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
            >
              Solutions <br/><span className="text-gradient">Multisectorielles</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-start md:items-end"
          >
             <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">Ref: CATALOGUE-2024</p>
             <p className="text-slate-400 text-lg leading-relaxed text-left md:text-right max-w-sm">
                Des solutions dimensionnées pour répondre aux enjeux de demain.
             </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                rotateX: 5,
                rotateY: -2,
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(249,115,22,0.1)'
              }}
              className="group p-12 rounded-[40px] glass-dark border border-white/5 transition-all duration-500 flex flex-col h-full relative overflow-hidden preserve-3d"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="absolute top-8 right-8 text-[8px] font-mono text-slate-700 tracking-[0.2em] group-hover:text-white/20 transition-colors uppercase">
                [ {service.id}_MOD ]
              </div>
              
              <motion.div 
                whileHover={{ translateZ: 20 }}
                className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-brand-orange/40"
              >
                <service.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
              </motion.div>

              <div style={{ transform: 'translateZ(10px)' }}>
                <h3 className="text-2xl font-black mb-6 tracking-tight text-white">
                  {t(`services.${service.id}.title`)}
                </h3>
                
                <p className="text-slate-500 leading-relaxed mb-12 grow group-hover:text-slate-300 transition-colors text-sm font-medium">
                  {t(`services.${service.id}.desc`)}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-auto" style={{ transform: 'translateZ(15px)' }}>
                <div className="flex items-center space-x-3 text-brand-orange hover:text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-colors cursor-pointer group/link">
                  <span>Détails Techniques</span>
                  <div className="w-8 h-8 rounded-xl border border-white/10 flex items-center justify-center transition-all group-hover/link:bg-brand-orange group-hover/link:border-brand-orange">
                    <span className="text-base transform rtl:rotate-180">→</span>
                  </div>
                </div>
              </div>

              {/* Glowing platform base effect on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-[1px]" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-orange/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
