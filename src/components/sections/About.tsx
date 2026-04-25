import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, animate } from 'motion/react';
import { cn } from '@/src/lib/utils';

function AnimatedCounter({ value, duration = 2 }: { value: string, duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const controls = animate(0, numericValue, {
      duration: duration,
      onUpdate: (value) => setDisplayValue(Math.floor(value)),
    });
    return () => controls.stop();
  }, [numericValue, duration]);

  return <>{displayValue}{suffix}</>;
}

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { value: '15+', label: 'Années d\'expérience' },
    { value: '250+', label: 'Projets livrés' },
    { value: '50+', label: 'Experts qualifiés' },
    { value: '100%', label: 'Satisfaction client' }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-brand-blue">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/[0.03] blur-[120px] -z-10" />
      
      <div className="container mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-[50px] overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                alt="Engineering Excellence"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent opacity-80" />
              
              {/* Overlay technical markers */}
              <div className="absolute top-10 left-10 w-24 h-24 border-l-2 border-t-2 border-brand-orange/40 rounded-tl-3xl" />
              <div className="absolute bottom-10 right-10 w-24 h-24 border-r-2 border-b-2 border-brand-orange/40 rounded-br-3xl" />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-10 -right-5 glass-dark p-12 rounded-[40px] shadow-2xl hidden md:block border border-white/10 backdrop-blur-3xl group">
              <div className="text-6xl font-black text-brand-orange mb-1">
                <AnimatedCounter value="15+" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 group-hover:text-white transition-colors">Ans d'Expertise</div>
              
              {/* Pulse effect */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-orange rounded-full animate-ping" />
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
                <div className="w-8 h-px bg-brand-orange" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-orange">Notre Vision</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
                L'Excellence comme <br/><span className="text-gradient">Standard</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">
                {t('about.p1')}
              </p>
              <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                {t('about.p2')}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-12 mt-16 border-t border-white/10 pt-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col group"
                >
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-brand-orange transition-colors">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[10px] text-slate-600 uppercase tracking-widest font-bold group-hover:text-slate-400 transition-colors">{stat.label}</div>
                  
                  {/* Underline grow on hover */}
                  <div className="w-0 h-px bg-brand-orange group-hover:w-12 transition-all mt-3" />
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-16 px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:bg-brand-orange hover:border-brand-orange transition-all shadow-xl"
            >
              Plus sur ERTEC
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
