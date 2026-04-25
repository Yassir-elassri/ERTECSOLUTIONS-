import React, {useEffect, useState} from 'react';
import {motion, useScroll, useSpring} from 'framer-motion';
import {ArrowUp} from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import About from './components/sections/About';
import ServicesGrid from './components/ServicesGrid';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Stats from './components/Stats';
import './lib/i18n'; // Initialize i18n
import {useTranslation} from 'react-i18next';

export default function App() {
  const {i18n} = useTranslation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initial dir setup
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className="min-h-screen relative selection:bg-brand-orange/30 selection:text-white">
      {/* Background Mesh Gradients */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Custom Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-orange z-[60] origin-left rtl:origin-right"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <ServicesGrid />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 z-50 w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform hidden md:flex"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
