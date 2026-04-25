import React from 'react';
import {motion} from 'framer-motion';
import type {LucideIcon} from 'lucide-react';

export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const ServiceCard: React.FC<{service: Service}> = ({service}) => {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-15% 0px -15% 0px'}}
      transition={{duration: 0.55, ease: [0.22, 1, 0.36, 1]}}
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: '0 28px 90px rgba(0,0,0,0.65), 0 0 34px rgba(255,122,26,0.18)',
      }}
      className={[
        'group relative rounded-[34px]',
        'transition-[transform,box-shadow] duration-300 will-change-transform',
        '[transform-style:preserve-3d]',
      ].join(' ')}
      style={{perspective: 1200}}
    >
      {/* gradient border glow */}
      <div
        aria-hidden="true"
        className={[
          'absolute inset-0 rounded-[34px] p-px',
          'bg-gradient-to-br from-[#ff6a00]/70 via-white/10 to-[#3aa6ff]/60',
          'opacity-70 blur-[0.2px] transition-opacity duration-300 group-hover:opacity-100',
          '[mask-image:linear-gradient(#000,#000)]',
        ].join(' ')}
      />

      {/* inner surface */}
      <div
        className={[
          'relative rounded-[34px] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(0,0,0,0.35))]',
          'backdrop-blur-2xl',
          'border border-white/10',
          'shadow-[0_20px_70px_rgba(0,0,0,0.55)]',
          'overflow-hidden',
        ].join(' ')}
      >
        {/* platform base */}
        <div
          aria-hidden="true"
          className={[
            'pointer-events-none absolute -bottom-10 left-1/2 h-28 w-[85%] -translate-x-1/2 rounded-full',
            'bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.25),rgba(255,140,0,0)_62%)]',
            'blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-95',
          ].join(' ')}
        />

        {/* subtle corner glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#3aa6ff]/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-80"
        />

        <div className="relative p-8 sm:p-9" style={{transform: 'translateZ(18px)'}}>
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.34em] text-white/40">
                {service.index}
              </div>
              <h3 className="mt-3 text-xl font-black tracking-tight text-white sm:text-2xl">
                {service.title}
              </h3>
            </div>

            <div
              className={[
                'grid h-12 w-12 place-items-center rounded-2xl',
                'bg-white/5 ring-1 ring-white/10',
                'shadow-[0_16px_40px_rgba(0,0,0,0.45)]',
                'transition-all duration-300 group-hover:bg-[#ff8c00]/15 group-hover:ring-[#ff8c00]/25',
              ].join(' ')}
            >
              <Icon className="h-6 w-6 text-[#ff8c00] transition-colors duration-300 group-hover:text-[#ff8c00]" />
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-white/60">{service.description}</p>

          <div className="mt-8 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#ff8c00]">
            <span className="relative">
              Voir plus
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#ff6a00] to-[#ff8c00] transition-transform duration-300 group-hover:scale-x-100" />
            </span>
            <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:group-hover:translate-x-0">
              →
            </span>
          </div>
        </div>

        {/* depth edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent)]"
        />
      </div>
    </motion.article>
  );
};

export default ServiceCard;

