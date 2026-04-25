import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useSpring, useTransform, animate } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  Users, 
  Award, 
  Clock, 
  Globe,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Zap
} from 'lucide-react';
import HeroCanvas from '@/src/components/3d/HeroCanvas';

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const controls = animate(0, numericValue, {
      duration: 2,
      onUpdate: (value) => setDisplayValue(Math.floor(value)),
    });
    return () => controls.stop();
  }, [numericValue]);

  return <>{displayValue}{suffix}</>;
}

export default function Hero() {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState<string | null>(null);

  const stats = [
    { icon: Users, value: '120+', label: 'Projets réalisés' },
    { icon: Award, value: '98%', label: 'Clients satisfaits' },
    { icon: Clock, value: '15+', label: "Années d'expertise" },
    { icon: Globe, value: '10+', label: "Pays d'intervention" },
  ];

  const valueProps = [
    { icon: CheckCircle2, title: 'Qualité', desc: 'Des standards élevés' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Solutions modernes' },
    { icon: ShieldCheck, title: 'Fiabilité', desc: 'Engagement & transparence' },
    { icon: Zap, title: 'Performance', desc: 'Résultats durables' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col bg-brand-blue overflow-hidden pt-20">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      
      <HeroCanvas onServiceHover={setActiveService} />
      
      {/* Main Content Grid */}
      <div className="container mx-auto px-12 flex-grow flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-5 z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge Area */}
              <div className="mb-6 flex items-center space-x-3 rtl:space-x-reverse">
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  Ingénierie de Précision • Énergie Renouvelable
                </div>
                <div className="h-[1px] w-12 bg-white/10" />
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Ref: ER-2024-X</div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-white">
                Bâtir l'Avenir <br/>
                <span className="text-gradient">de l'Ingénierie</span>
              </h1>
              
              <p className="text-xl text-slate-400 leading-relaxed max-w-lg mb-10 border-l-2 border-brand-orange/30 pl-6 rtl:pl-0 rtl:pr-6 rtl:border-l-0 rtl:border-r-2">
                ERTEC SOLUTIONS – Votre partenaire expert en construction, énergie et technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-brand-orange hover:bg-brand-orange-hover rounded-2xl font-bold text-white transition-all shadow-xl shadow-brand-orange/20 flex items-center justify-center space-x-2 rtl:space-x-reverse uppercase tracking-widest text-sm"
                >
                  <span>Démarrer un Projet</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold text-white glass-dark transition-all uppercase tracking-widest text-sm flex items-center justify-center space-x-2"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Découvrez nos Services</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </motion.button>
              </div>

              {/* Sidebar-style Stats Section from Mockup */}
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/5">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start space-x-4 rtl:space-x-reverse"
                  >
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                      <stat.icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white leading-none mb-1">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Interaction & Floating UI */}
          <div className="lg:col-span-7 relative h-[600px] flex items-center justify-center">
            {/* Contextual Service Info Over 3D Scene */}
            <div className="absolute top-0 right-0 z-20">
               <div className="flex items-center space-x-2 rtl:space-x-reverse">
                 <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Nos Services</span>
               </div>
               <h2 className="text-4xl font-bold text-white mt-4 text-right rtl:text-left leading-tight">
                 Des solutions complètes,<br/>
                 <span className="text-slate-500">intégrées et innovantes.</span>
               </h2>
            </div>

            <AnimatePresence mode="wait">
              {activeService && (
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: 20 }}
                  className="absolute bottom-10 right-0 z-20 glass-dark p-10 rounded-[40px] border border-brand-orange/30 w-96 shadow-2xl backdrop-blur-3xl"
                >
                  <p className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                    <Activity className="w-4 h-4" />
                    Interactivité 3D
                  </p>
                  <h3 className="text-3xl font-black text-white mb-4 leading-tight tracking-tighter">
                    {t(`services.${activeService}.title`)}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {t(`services.${activeService}.desc`)}
                  </p>
                  <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-orange hover:bg-brand-orange hover:text-white transition-all group">
                    <span>Détails Techniques</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
            {!activeService && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-10 right-0 p-8 text-right rtl:text-left z-20"
              >
                <div className="flex flex-col items-end rtl:items-start space-y-2">
                   <div className="w-12 h-px bg-white/20" />
                   <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest leading-relaxed">
                    Survolez les modules 3D<br/>pour explorer nos expertises
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Values & Contact CTA */}
      <div className="mt-auto border-t border-white/5 bg-black/40 backdrop-blur-3xl py-10 relative z-30">
        <div className="container mx-auto px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full lg:w-auto">
              {valueProps.map((prop, i) => (
                <div key={i} className="flex items-center space-x-6 rtl:space-x-reverse group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-brand-orange group-hover:border-brand-orange shadow-lg shadow-black/20">
                    <prop.icon className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-white uppercase tracking-tighter mb-0.5">{prop.title}</div>
                    <div className="text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-none">{prop.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA in Bottom Bar */}
            <div className="flex flex-col md:flex-row items-center gap-8 lg:border-l border-white/10 lg:pl-12 rtl:lg:pl-0 rtl:lg:pr-12 rtl:lg:border-l-0 rtl:lg:border-r">
              <div className="text-right rtl:text-left">
                <p className="text-white font-bold text-lg leading-tight uppercase tracking-tighter">Un projet en tête ?</p>
                <p className="text-slate-500 text-xs font-medium">Parlons-en dès aujourd'hui.</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249,115,22,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-brand-orange text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center space-x-3 shadow-xl shadow-brand-orange/20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
