import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Twitter, MessageSquare } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 bg-brand-blue relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 rtl:space-x-reverse mb-6"
            >
              <div className="w-8 h-px bg-brand-orange" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-orange">Contact Rapide</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.9]"
            >
              Prêt pour la <br/><span className="text-gradient">Prochaine Étape ?</span>
            </motion.h2>
            <p className="text-slate-400 text-lg mb-16 max-w-lg leading-relaxed">
              Nos experts sont prêts à analyser vos besoins et vous proposer des solutions sur-mesure. Parlons de votre vision.
            </p>

            <div className="space-y-10">
              {[
                { icon: MapPin, title: 'Siège Social', content: '123 Avenue de l\'Ingénierie, Tech City' },
                { icon: Phone, title: 'Téléphone', content: '+212 5XX XX XX XX' },
                { icon: Mail, title: 'Email', content: 'contact@ertecsolutions.com' }
              ].map((item, i) => (
                <div key={i} className="flex space-x-8 rtl:space-x-reverse items-center group">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-brand-orange/20">
                    <item.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-sm uppercase tracking-widest mb-1 group-hover:text-brand-orange transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 flex space-x-6 rtl:space-x-reverse">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: 'rgba(249, 115, 22, 0.1)', borderColor: 'rgba(249, 115, 22, 0.3)' }}
                  className="w-14 h-14 rounded-2xl border border-white/5 bg-white/20 flex items-center justify-center text-white/40 transition-all backdrop-blur-md"
                >
                  <Icon className="w-5 h-5 text-brand-orange" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-12 glass-dark rounded-[50px] border border-white/5 relative"
          >
            {/* Form decorative header */}
            <div className="flex items-center justify-between mb-12">
               <div className="flex items-center space-x-3">
                 <div className="w-3 h-3 rounded-full bg-brand-orange" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Formulaire de Mission</span>
               </div>
               <MessageSquare className="w-5 h-5 text-slate-700" />
            </div>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 ml-1">Nom Complet</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-5 focus:border-brand-orange outline-none transition-all placeholder:text-slate-800 focus:bg-white/5 text-white font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 ml-1">Email Professionnel</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-5 focus:border-brand-orange outline-none transition-all placeholder:text-slate-800 focus:bg-white/5 text-white font-medium"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 ml-1">Votre Message</label>
                <textarea 
                  rows={4}
                  placeholder="Expliquez-nous votre besoin technique..."
                  className="w-full bg-black/20 border border-white/5 rounded-2xl px-6 py-5 focus:border-brand-orange outline-none transition-all resize-none placeholder:text-slate-800 focus:bg-white/5 text-white font-medium"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(249,115,22,0.2)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-brand-orange hover:bg-brand-orange-hover text-white font-black rounded-3xl flex items-center justify-center space-x-3 rtl:space-x-reverse transition-all uppercase tracking-[0.2em] text-xs shadow-xl shadow-brand-orange/30 overflow-hidden group relative"
              >
                <span className="relative z-10">{t('contact.send')}</span>
                <Send className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
