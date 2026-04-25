import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-blue border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-brand-orange rounded flex items-center justify-center font-bold text-white text-xl">E</div>
              <span className="text-2xl font-bold tracking-tight text-white uppercase">ERTEC <span className="text-brand-orange">SOLUTIONS</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Partenaire de confiance pour l'ingénierie globale. Nous bâtissons l'avenir avec précision et excellence technologique.
            </p>
            <div className="flex space-x-5 rtl:space-x-reverse">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-brand-orange transition-colors text-slate-600">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-widest text-[10px]">Navigation</h4>
            <ul className="space-y-5">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-white text-sm flex items-center group transition-colors">
                    <span>{t(`nav.${item.toLowerCase()}`)}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all ml-2 rtl:mr-2 rtl:rotate-[-90deg]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-widest text-[10px]">Expertise</h4>
            <ul className="space-y-5">
              {['Génie Civil', 'CVC & HVAC', 'Énergie Solaire', 'IT & Télécoms', 'Bornes de Recharge'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-500 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-10 uppercase tracking-widest text-[10px]">Contact Direct</h4>
            <ul className="space-y-8">
              <li className="flex items-start space-x-4 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-slate-500 text-sm leading-relaxed">Paris • Dubai • Alger<br/>123 Avenue Tech, Engineering Dist.</span>
              </li>
              <li className="flex items-center space-x-4 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-slate-500 text-sm">contact@ertecsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div> ISO 9001 Certified</span>
            <span>Premium Partner</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-6 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            </div>
            <p className="text-slate-700 text-[10px] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} ERTEC SOLUTIONS S.A.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
