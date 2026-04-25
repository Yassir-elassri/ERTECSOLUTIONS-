import React from 'react';
import {motion} from 'framer-motion';
import {ArrowRight, ChevronRight, Cpu, Shield, Zap} from 'lucide-react';

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {staggerChildren: 0.08, delayChildren: 0.05},
  },
};

const fadeUp = {
  hidden: {opacity: 0, y: 18},
  show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}},
};

function UnderlineLink({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#ff6a00] to-[#ff8c00] transition-transform duration-300 group-hover:scale-x-100" />
      </span>
      <ChevronRight className="h-4 w-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5" />
    </button>
  );
}

function FloatingModule({
  index,
  title,
  icon: Icon,
  className,
  delay = 0,
}: {
  index: string;
  title: string;
  icon: React.ComponentType<{className?: string}>;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 18, scale: 0.96}}
      animate={{opacity: 1, y: 0, scale: 1}}
      transition={{duration: 0.7, delay, ease: [0.22, 1, 0.36, 1]}}
      className={[
        'relative rounded-3xl border border-white/10 bg-black/35 backdrop-blur-2xl',
        'shadow-[0_18px_60px_rgba(0,0,0,0.55)]',
        'before:absolute before:inset-0 before:rounded-3xl before:p-px',
        'before:bg-gradient-to-br before:from-[#ff6a00]/40 before:via-white/10 before:to-[#3aa6ff]/30',
        'before:[-webkit-mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]',
        className ?? '',
      ].join(' ')}
      style={{transformStyle: 'preserve-3d'}}
      whileHover={{
        y: -8,
        rotateX: 4,
        rotateY: -6,
        scale: 1.02,
        boxShadow: '0 26px 90px rgba(0,0,0,0.65), 0 0 30px rgba(255,122,26,0.18)',
      }}
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-bold tracking-[0.32em] text-white/40">{index}</div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#3aa6ff] shadow-[0_0_18px_rgba(58,166,255,0.7)]" />
            <div className="h-2 w-2 rounded-full bg-[#ff8c00] shadow-[0_0_18px_rgba(255,140,0,0.55)]" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            <Icon className="h-5 w-5 text-[#ff8c00]" />
          </div>
          <div className="text-sm font-black tracking-tight text-white">{title}</div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-white/55">
          <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <span className="uppercase tracking-[0.22em]">Voir plus</span>
          <span className="text-base leading-none text-[#ff8c00]">→</span>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-[85%] -translate-x-1/2 rounded-full bg-[#ff8c00]/10 blur-3xl" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-grid opacity-[0.08] pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-[0.12] pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.16)_0,rgba(2,6,23,0)_60%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-48 right-[-10%] h-[520px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(58,166,255,0.14)_0,rgba(2,6,23,0)_62%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-6"
          >
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff8c00] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#ff8c00] shadow-[0_0_18px_rgba(255,140,0,0.6)]" />
                Ingénierie • Énergie • Technologies
              </div>
              <div className="hidden h-px w-10 bg-white/10 sm:block" />
              <div className="hidden text-[10px] font-mono uppercase tracking-[0.24em] text-white/30 sm:block">
                REF: ER-2026
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-balance text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              Bâtir l’Avenir
              <br />
              <span className="bg-gradient-to-r from-[#ff6a00] via-[#ff8c00] to-[#3aa6ff] bg-clip-text text-transparent">
                de l’Ingénierie
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/65"
            >
              Solutions premium en construction, énergie et systèmes intelligents — conçues pour la performance,
              l’intégration et la fiabilité.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.button
                type="button"
                whileHover={{scale: 1.03}}
                whileTap={{scale: 0.98}}
                className={[
                  'group relative inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-5',
                  'text-sm font-black uppercase tracking-[0.18em] text-white',
                  'bg-gradient-to-r from-[#ff6a00] to-[#ff8c00]',
                  'shadow-[0_18px_60px_rgba(255,122,26,0.22)]',
                  'hover:shadow-[0_22px_80px_rgba(255,122,26,0.32)]',
                  'transition-shadow',
                ].join(' ')}
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_40%,rgba(255,140,0,0.55),rgba(255,140,0,0)_62%)]" />
                <span className="relative">Démarrer un projet</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                className={[
                  'inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-5',
                  'text-sm font-black uppercase tracking-[0.18em] text-white',
                  'bg-white/5 backdrop-blur-2xl',
                  'border border-white/12 hover:border-white/20',
                  'shadow-[0_18px_60px_rgba(0,0,0,0.45)]',
                  'transition-colors',
                ].join(' ')}
                onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
              >
                Découvrir nos services
                <ChevronRight className="h-4 w-4 opacity-60 rtl:rotate-180" />
              </motion.button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-6">
              <UnderlineLink onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
                Voir nos projets
              </UnderlineLink>
              <UnderlineLink onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
                À propos
              </UnderlineLink>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[720px]">
              <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.6)]" />
              <div className="absolute inset-0 rounded-[40px] [mask-image:radial-gradient(circle_at_center,black_38%,transparent_70%)]">
                <motion.div
                  aria-hidden="true"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-grid opacity-[0.13]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,140,0,0.14),transparent_55%),radial-gradient(circle_at_80%_35%,rgba(58,166,255,0.14),transparent_50%),radial-gradient(circle_at_40%_85%,rgba(255,140,0,0.12),transparent_58%)]" />
                </motion.div>
              </div>

              <div className="absolute inset-0 p-6 sm:p-8" style={{perspective: 1100}}>
                <motion.div
                  aria-hidden="true"
                  animate={{y: [0, -10, 0]}}
                  transition={{duration: 6, repeat: Infinity, ease: 'easeInOut'}}
                  className="pointer-events-none absolute left-8 top-8 h-24 w-24 rounded-3xl bg-[#3aa6ff]/10 blur-2xl"
                />

                <div className="absolute left-6 top-10 w-[70%] sm:left-10 sm:w-[60%]">
                  <FloatingModule index="01" title="Électricité & Réseaux" icon={Zap} delay={0.15} />
                </div>
                <div className="absolute right-6 top-28 w-[66%] sm:right-10 sm:w-[56%]">
                  <FloatingModule index="02" title="Domotique & Smart" icon={Cpu} delay={0.25} />
                </div>
                <div className="absolute left-10 bottom-10 w-[64%] sm:left-16 sm:w-[54%]">
                  <FloatingModule index="03" title="Sécurité & Accès" icon={Shield} delay={0.35} />
                </div>

                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-8 left-1/2 h-24 w-[85%] -translate-x-1/2 rounded-full bg-[#ff8c00]/10 blur-3xl"
                  animate={{opacity: [0.55, 0.85, 0.55]}}
                  transition={{duration: 5.5, repeat: Infinity, ease: 'easeInOut'}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

