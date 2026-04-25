import React, {useEffect, useMemo, useRef, useState} from 'react';
import {motion, useInView} from 'framer-motion';
import {Award, Globe, Timer, Users} from 'lucide-react';

function useAnimatedCount(to: number, durationMs: number, start: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const startAt = performance.now();
    const from = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startAt) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [to, durationMs, start]);

  return value;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {once: true, margin: '-20% 0px -20% 0px'});

  const items = useMemo(
    () => [
      {icon: Users, to: 120, suffix: '+', label: 'Projets réalisés'},
      {icon: Award, to: 98, suffix: '%', label: 'Clients satisfaits'},
      {icon: Timer, to: 15, suffix: '+', label: "Années d'expertise"},
      {icon: Globe, to: 10, suffix: '+', label: "Pays d'intervention"},
    ],
    [],
  );

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.12)_0,rgba(2,6,23,0)_64%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.38em] text-white/40">Impact</div>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Résultats mesurables. <span className="text-white/50">Exécution premium.</span>
            </h3>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            const count = useAnimatedCount(it.to, 1400 + i * 160, inView);
            return (
              <motion.div
                key={it.label}
                initial={{opacity: 0, y: 18}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-20% 0px -20% 0px'}}
                transition={{duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1]}}
                whileHover={{
                  y: -6,
                  boxShadow: '0 26px 80px rgba(0,0,0,0.65), 0 0 28px rgba(255,122,26,0.14)',
                }}
                className={[
                  'group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl',
                  'p-7 shadow-[0_18px_60px_rgba(0,0,0,0.55)]',
                  'transition-[transform,box-shadow] duration-300',
                ].join(' ')}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,140,0,0.18),transparent_55%),radial-gradient(circle_at_80%_55%,rgba(58,166,255,0.14),transparent_52%)]"
                />

                <div className="relative flex items-start justify-between gap-6">
                  <div>
                    <div className="text-4xl font-black tracking-tight text-white">
                      {count}
                      <span className="text-white/80">{it.suffix}</span>
                    </div>
                    <div className="mt-2 text-[11px] font-black uppercase tracking-[0.28em] text-white/45">
                      {it.label}
                    </div>
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-[#ff8c00]/25 group-hover:bg-[#ff8c00]/10">
                    <Icon className="h-6 w-6 text-[#ff8c00] drop-shadow-[0_0_18px_rgba(255,140,0,0.22)]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

