import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        projects: 'Solutions',
        contact: 'Contact'
      },
      hero: {
        title: 'Solutions d\'Ingénierie pour un Avenir Durable',
        subtitle: 'ERTEC SOLUTIONS – Votre partenaire expert en construction, énergie et technologies.',
        cta: 'Démarrer un Projet'
      },
      services: {
        title: 'Nos Domaines d\'Expertise',
        construction: {
          title: 'Construction & Bâtiment',
          desc: 'Travaux de gros œuvre et finitions architecturales de haute précision.'
        },
        electrical: {
          title: 'Électricité & Réseaux',
          desc: 'Solutions électriques complètes, sécurité et domotique.'
        },
        automation: {
          title: 'Domotique & Smart Solutions',
          desc: 'Intelligence embarquée pour bâtiments connectés.'
        },
        security: {
          title: 'Sécurité & Contrôle d’accès',
          desc: 'Protection périmétrique et surveillance par IA.'
        },
        telecom: {
          title: 'Télécommunications',
          desc: 'Infrastructures réseau et transmission de données.'
        },
        energy: {
          title: 'Énergie Renouvelable',
          desc: 'Solutions solaires photovoltaïques et bornes de recharge.'
        },
        hvac: {
          title: 'Climatisation (HVAC)',
          desc: 'Systèmes de renouvellement d\'air et contrôle thermique.'
        },
        lighting: {
          title: 'Éclairage Public',
          desc: 'Éclairage urbain intelligent et durable.'
        },
        commerce: {
          title: 'Commerce & Services',
          desc: 'Logistique internationale et import/export.'
        }
      },
      about: {
        title: 'À propos d\'ERTEC',
        p1: 'ERTEC SOLUTIONS est une entreprise leader dans le secteur de l\'ingénierie multidisciplinaire.',
        p2: 'Nous combinons innovation technologique et excellence opérationnelle pour livrer des projets complexes.'
      },
      contact: {
        title: 'Contactez-nous',
        name: 'Nom complet',
        email: 'Email',
        message: 'Message',
        send: 'Envoyer le message',
        success: 'Message envoyé avec succès !'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        projects: 'Solutions',
        contact: 'Contact'
      },
      hero: {
        title: 'Engineering Solutions for a Sustainable Future',
        subtitle: 'ERTEC SOLUTIONS – Your expert partner in construction, energy, and technologies.',
        cta: 'Start a Project'
      },
      services: {
        title: 'Our Areas of Expertise',
        construction: {
          title: 'Construction & Building',
          desc: 'High-precision structural and architectural finishing works.'
        },
        electrical: {
          title: 'Electricity & Networks',
          desc: 'Complete electrical solutions, security, and home automation.'
        },
        automation: {
          title: 'Smart Solutions',
          desc: 'Embedded intelligence for connected buildings.'
        },
        security: {
          title: 'Security & Access Control',
          desc: 'Perimeters protection and AI-powered surveillance.'
        },
        telecom: {
          title: 'Telecommunications',
          desc: 'Network infrastructure and data transmission.'
        },
        energy: {
          title: 'Renewable Energy',
          desc: 'Solar photovoltaic solutions and charging stations.'
        },
        hvac: {
          title: 'Air Conditioning (HVAC)',
          desc: 'Air renewal and thermal control systems.'
        },
        lighting: {
          title: 'Public Lighting',
          desc: 'Intelligent and sustainable urban lighting.'
        },
        commerce: {
          title: 'Commerce & Services',
          desc: 'International logistics and import/export.'
        }
      },
      about: {
        title: 'About ERTEC',
        p1: 'ERTEC SOLUTIONS is a leading company in the multidisciplinary engineering sector.',
        p2: 'We combine technological innovation and operational excellence to deliver complex projects.'
      },
      contact: {
        title: 'Contact Us',
        name: 'Full Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        success: 'Message sent successfully!'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        projects: 'حلولنا',
        contact: 'اتصل بنا'
      },
      hero: {
        title: 'حلول هندسية لمستقبل مستدام',
        subtitle: 'أرتك حلول – شريككم الخبير في مجالات البناء والطاقة والتقنيات الحديثة.',
        cta: 'ابدأ مشروعاً'
      },
      services: {
        title: 'مجالات خبرتنا',
        construction: {
          title: 'البناء والتشييد',
          desc: 'أعمال الهيكل والتشطيبات المعمارية بدقة عالية.'
        },
        electrical: {
          title: 'الكهرباء والشبكات',
          desc: 'حلول كهربائية متكاملة وأنظمة الأمن والأتمتة.'
        },
        automation: {
          title: 'الحلول الذكية والأنظمة المنزلية',
          desc: 'ذكاء مدمج للمباني المتصلة.'
        },
        security: {
          title: 'الأمن والتحكم بالدخول',
          desc: 'حماية المحيط والمراقبة المدعومة بالذكاء الاصطناعي.'
        },
        telecom: {
          title: 'الاتصالات',
          desc: 'البنية التحتية للشبكات ونقل البيانات.'
        },
        energy: {
          title: 'الطاقة المتجددة',
          desc: 'حلول الطاقة الشمسية ومحطات الشحن.'
        },
        hvac: {
          title: 'التكييف والتهوية (HVAC)',
          desc: 'أنظمة تجديد الهواء والتحكم الحراري.'
        },
        lighting: {
          title: 'الإضاءة العامة',
          desc: 'إضاءة حضرية ذكية ومستدامة.'
        },
        commerce: {
          title: 'التجارة والخدمات',
          desc: 'الخدمات اللوجستية الدولية والاستيراد والتصدير.'
        }
      },
      about: {
        title: 'لمحة عن أرتك',
        p1: 'أرتك حلول هي شركة رائدة في قطاع الهندسة متعددة التخصصات.',
        p2: 'نحن نجمع بين الابتكار التكنولوجي والتميز التشغيلي لتقديم مشاريع معقدة.'
      },
      contact: {
        title: 'اتصل بنا',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        success: 'تم إرسال الرسالة بنجاح!'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
