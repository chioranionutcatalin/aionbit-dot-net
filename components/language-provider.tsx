"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "en" | "it" | "es" | "fr";

export const languageOptions: Array<{
  code: Language;
  label: string;
}> = [
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" },
  { code: "es", label: "Espanol" },
  { code: "fr", label: "Francais" },
];

const COOKIE_KEY = "aionbit_lang";

const en = {
  navHome: "Home",
  navServices: "Services",
  navPortfolio: "Portfolio",
  navCareers: "Careers",
  navContact: "Contact",
  navContactNow: "Contact Now",

  heroTitle: "Hello. We Are Aionbit, Your Digital Transformation and Empowerment Partner",
  heroDescription:
    "We design and build modern websites, web platforms, and online products for startups and growing companies. From senior frontend delivery to automation and technical leadership, we help teams ship faster with less risk.",
  heroLetsTalk: "Let's Talk",
  heroExploreServices: "Explore Services",
  videoBadgeText: "From plan to product delivery",

  servicesBadge: "Services",
  servicesTitle: "Services We Offer",
  servicesDescription:
    "We help startups and enterprises transform, manage, and digitalize their solutions under one trusted delivery umbrella, combining strong engineering execution with product thinking across long-term outsourcing and project-based collaboration.",
  serviceDesignTitle: "Solution Orchestration",
  serviceDesignDescription:
    "We map business goals into a clear execution architecture, align teams, and orchestrate product streams so delivery moves from fragmented tasks to one coordinated system.",
  serviceDevTitle: "Monitoring and Optimization",
  serviceDevDescription:
    "We continuously monitor delivery health, release velocity, and technical quality, then optimize flows through measurable improvements that keep your product performing at scale.",
  serviceQaTitle: "Prioritization and Delivery Control",
  serviceQaDescription:
    "We establish clear priority tiers, decision ownership, and execution cadence so your team focuses on the right outcomes and ships predictable business value.",
  executionFlowTitle: "From Plan to Product Delivery",
  executionFlowDescription:
    "We manage every step of the delivery lifecycle, from planning and prioritization to execution and release, so your idea becomes a production-ready digital product.",

  skill1Title: "Frontend Engineering",
  skill1Description:
    "Senior delivery with React, Next.js, Angular, TypeScript, and modern component architecture focused on maintainability.",
  skill2Title: "Full-Stack Development",
  skill2Description:
    "End-to-end product implementation with Node.js APIs, integrations, data flows, and clean handoff for long-term scaling.",
  skill3Title: "Bug-Fixing and Rescue",
  skill3Description:
    "We stabilize legacy codebases, remove bottlenecks, and modernize outdated stacks so your team can regain delivery speed.",
  skill4Title: "Automation and QA",
  skill4Description:
    "Test strategy, unit tests, and Cypress automation frameworks that reduce regression risk across releases and teams.",
  skill5Title: "Mobile Development",
  skill5Description:
    "Cross-platform and native-ready mobile solutions with React Native and modern mobile architecture for fast, reliable releases.",
  skill6Title: "Performance and SEO",
  skill6Description:
    "Better Core Web Vitals, technical SEO improvements, and conversion-focused optimization to maximize visibility and growth.",

  projectsTitle: "Latest Projects",
  projectsDescription:
    "Besides outsourcing, we also deliver full projects. A couple of projects delivered by Aionbit. Open each project to view the live result.",
  projectBottegaDescription:
    "Presentation website for a local store, focused on clear structure, mobile responsiveness, and clean browsing.",
  projectHero4JobDescription:
    "CV generator web app designed to create modern resumes quickly through a guided, user-friendly flow.",

  careersTitle: "Build Your Career with Aionbit",
  careersDescription:
    "Join a delivery-first team working on modern digital products for international clients. We value ownership, clarity, and continuous growth.",
  careersRole1Title: "Senior Frontend Engineer",
  careersRole1Description:
    "Lead frontend delivery using React and Next.js, shape architecture decisions, and mentor teammates in production-grade practices.",
  careersRole2Title: "Full-Stack Engineer",
  careersRole2Description:
    "Develop end-to-end product features across frontend and backend, integrating APIs and business workflows at scale.",
  careersRole3Title: "QA Automation Engineer",
  careersRole3Description:
    "Design and maintain automated test suites, improve release confidence, and support quality gates across delivery teams.",
  careersApply: "Apply Now",
  careersOpenToTalent:
    "Open to strong profiles in frontend, full-stack, QA automation, and technical delivery.",

  contactTitle: "Let's Discuss Your Project",
  contactDescription:
    "Tell us your goals and timeline. We can start with a focused discovery call and propose a delivery plan that fits your team.",
  contactFirstName: "First Name",
  contactEmail: "Email",
  contactCompany: "Company",
  contactSubject: "Subject",
  contactMessage: "Message",
  contactSend: "Send Message",
  contactCall: "Call +40 757 214 095",
  contactDefaultSubject: "Project Inquiry",

  footerBrand: "Aionbit",
  footerContactLabel: "Contact",
  footerLegalLabel: "Legal",
  footerLocation: "Cluj-Napoca, Romania",
  footerRights: "© 2026 Aionbit. All rights reserved.",
  footerCookieNote: "Language cookie key: aionbit_lang.",
} as const;

type TranslationKey = keyof typeof en;
type TranslationDictionary = Record<TranslationKey, string>;

const translations: Record<Language, Partial<TranslationDictionary>> = {
  en,
  it: {
    navHome: "Home",
    navServices: "Servizi",
    navPortfolio: "Portfolio",
    navCareers: "Carriere",
    navContact: "Contatti",
    navContactNow: "Contattaci Ora",
    heroTitle: "Ciao. Siamo Aionbit, il tuo partner per trasformazione digitale ed empowerment",
    heroDescription:
      "Progettiamo e sviluppiamo siti web moderni, piattaforme web e prodotti digitali per startup e aziende in crescita. Dalla delivery frontend senior all'automazione e alla leadership tecnica, aiutiamo i team a rilasciare piu velocemente con meno rischi.",
    heroLetsTalk: "Parliamone",
    heroExploreServices: "Scopri i Servizi",
    videoBadgeText: "Dal piano alla consegna del prodotto",
    servicesBadge: "Servizi",
    servicesTitle: "Cosa Offriamo",
    servicesDescription:
      "Aiutiamo startup e aziende a trasformare, gestire e digitalizzare le loro soluzioni sotto un'unica struttura di delivery affidabile, combinando forte esecuzione ingegneristica e product thinking in collaborazioni di outsourcing a lungo termine e su progetto.",
    serviceDesignTitle: "Orchestrazione della Soluzione",
    serviceDesignDescription:
      "Traduciamo gli obiettivi di business in un'architettura di esecuzione chiara, allineiamo i team e coordiniamo i flussi di prodotto per passare da task frammentati a un sistema unificato.",
    serviceDevTitle: "Monitoraggio e Ottimizzazione",
    serviceDevDescription:
      "Monitoriamo costantemente lo stato della delivery, la velocita di rilascio e la qualita tecnica, poi ottimizziamo i flussi con miglioramenti misurabili che mantengono il prodotto performante su scala.",
    serviceQaTitle: "Prioritizzazione e Controllo Delivery",
    serviceQaDescription:
      "Definiamo livelli di priorita chiari, ownership decisionale e cadenza esecutiva, cosi il team si concentra sui risultati giusti e rilascia valore in modo prevedibile.",
    executionFlowTitle: "Dal piano alla consegna del prodotto",
    executionFlowDescription:
      "Gestiamo ogni fase del ciclo di delivery, dalla pianificazione e prioritizzazione fino a esecuzione e rilascio, per trasformare la tua idea in un prodotto digitale pronto per la produzione.",
    skill1Title: "Ingegneria Frontend",
    skill1Description:
      "Delivery senior con React, Next.js, Angular, TypeScript e architetture a componenti moderne, orientate alla manutenibilita.",
    skill2Title: "Sviluppo Full-Stack",
    skill2Description:
      "Implementazione end-to-end del prodotto con API Node.js, integrazioni, data flow e handoff pulito per una crescita sostenibile.",
    skill3Title: "Bug-Fixing e Rescue",
    skill3Description:
      "Stabilizziamo codebase legacy, rimuoviamo colli di bottiglia e modernizziamo stack obsoleti per ripristinare la velocita di delivery del team.",
    skill4Title: "Automazione e QA",
    skill4Description:
      "Strategia di test, unit test e framework di automazione Cypress che riducono il rischio di regressioni tra release e team.",
    skill5Title: "Sviluppo Mobile",
    skill5Description:
      "Soluzioni mobile cross-platform e pronte al nativo con React Native e architetture moderne per rilasci rapidi e affidabili.",
    skill6Title: "Performance e SEO",
    skill6Description:
      "Miglioramento Core Web Vitals, SEO tecnica e ottimizzazioni orientate alla conversione per massimizzare visibilita e crescita.",
    projectsTitle: "Ultimi Progetti",
    projectsDescription:
      "Oltre all'outsourcing, realizziamo anche progetti completi. Alcuni progetti consegnati da Aionbit. Apri ogni progetto per vedere il risultato live.",
    projectBottegaDescription:
      "Sito di presentazione per un negozio locale, progettato con struttura chiara, responsive mobile e navigazione pulita.",
    projectHero4JobDescription:
      "Web app per generare CV moderni in modo rapido, attraverso un flusso guidato e intuitivo.",
    careersTitle: "Costruisci la tua carriera con Aionbit",
    careersDescription:
      "Unisciti a un team orientato alla delivery che sviluppa prodotti digitali moderni per clienti internazionali.",
    careersRole1Title: "Senior Frontend Engineer",
    careersRole1Description:
      "Guida la delivery frontend con React e Next.js, definendo decisioni architetturali e buone pratiche.",
    careersRole2Title: "Full-Stack Engineer",
    careersRole2Description:
      "Sviluppa funzionalita end-to-end tra frontend e backend, integrando API e workflow di business su scala.",
    careersRole3Title: "QA Automation Engineer",
    careersRole3Description:
      "Progetta e mantieni suite di test automatizzati per aumentare l'affidabilita delle release.",
    careersApply: "Candidati Ora",
    careersOpenToTalent:
      "Aperti a profili forti in frontend, full-stack, QA automation e technical delivery.",
    contactTitle: "Parliamo del tuo progetto",
    contactDescription:
      "Raccontaci obiettivi e tempistiche. Possiamo iniziare con una discovery call mirata e proporti un piano di delivery adatto al tuo team.",
    contactFirstName: "Nome",
    contactEmail: "Email",
    contactCompany: "Azienda",
    contactSubject: "Oggetto",
    contactMessage: "Messaggio",
    contactSend: "Invia Messaggio",
    contactCall: "Chiama +40 757 214 095",
    contactDefaultSubject: "Richiesta Progetto",
    footerBrand: "Aionbit",
    footerContactLabel: "Contatto",
    footerLegalLabel: "Legale",
    footerLocation: "Cluj-Napoca, Romania",
    footerRights: "© 2026 Aionbit. Tutti i diritti riservati.",
    footerCookieNote: "Chiave cookie lingua: aionbit_lang.",
  },
  es: {
    navHome: "Inicio",
    navServices: "Servicios",
    navPortfolio: "Portafolio",
    navCareers: "Carreras",
    navContact: "Contacto",
    navContactNow: "Contactar Ahora",
    heroTitle: "Hola. Somos Aionbit, tu partner de transformacion digital y empowerment",
    heroDescription:
      "Disenamos y desarrollamos sitios web modernos, plataformas web y productos digitales para startups y empresas en crecimiento. Desde delivery frontend senior hasta automatizacion y liderazgo tecnico, ayudamos a los equipos a lanzar mas rapido con menos riesgo.",
    heroLetsTalk: "Hablemos",
    heroExploreServices: "Ver Servicios",
    videoBadgeText: "Del plan a la entrega del producto",
    servicesBadge: "Servicios",
    servicesTitle: "Servicios que Ofrecemos",
    servicesDescription:
      "Ayudamos a startups y empresas a transformar, gestionar y digitalizar sus soluciones bajo un unico paraguas de delivery confiable, combinando una ejecucion de ingenieria solida con vision de producto en colaboraciones de outsourcing a largo plazo y por proyecto.",
    serviceDesignTitle: "Orquestacion de Soluciones",
    serviceDesignDescription:
      "Convertimos objetivos de negocio en una arquitectura de ejecucion clara, alineamos equipos y orquestamos flujos de producto para pasar de tareas fragmentadas a un sistema coordinado.",
    serviceDevTitle: "Monitoreo y Optimizacion",
    serviceDevDescription:
      "Monitoreamos continuamente la salud de la delivery, la velocidad de release y la calidad tecnica, y optimizamos flujos con mejoras medibles para mantener tu producto rindiendo a escala.",
    serviceQaTitle: "Priorizacion y Control de Delivery",
    serviceQaDescription:
      "Definimos niveles de prioridad claros, ownership de decisiones y cadencia de ejecucion para que tu equipo se enfoque en los resultados correctos y entregue valor de forma predecible.",
    executionFlowTitle: "Del plan a la entrega del producto",
    executionFlowDescription:
      "Gestionamos cada paso del ciclo de entrega, desde planificacion y priorizacion hasta ejecucion y release, para convertir tu idea en un producto digital listo para produccion.",
    skill1Title: "Ingenieria Frontend",
    skill1Description:
      "Delivery senior con React, Next.js, Angular, TypeScript y arquitectura moderna de componentes enfocada en mantenibilidad.",
    skill2Title: "Desarrollo Full-Stack",
    skill2Description:
      "Implementacion end-to-end de producto con APIs Node.js, integraciones, flujos de datos y handoff limpio para escalar a largo plazo.",
    skill3Title: "Correccion de Bugs y Rescate",
    skill3Description:
      "Estabilizamos codebases legacy, eliminamos cuellos de botella y modernizamos stacks desactualizados para recuperar velocidad de delivery.",
    skill4Title: "Automatizacion y QA",
    skill4Description:
      "Estrategia de testing, pruebas unitarias y automatizacion con Cypress para reducir riesgo de regresiones entre releases y equipos.",
    skill5Title: "Desarrollo Mobile",
    skill5Description:
      "Soluciones mobile cross-platform y preparadas para nativo con React Native y arquitectura moderna para lanzamientos rapidos y confiables.",
    skill6Title: "Rendimiento y SEO",
    skill6Description:
      "Mejoras de Core Web Vitals, SEO tecnico y optimizacion orientada a conversion para maximizar visibilidad y crecimiento.",
    projectsTitle: "Ultimos Proyectos",
    projectsDescription:
      "Ademas del outsourcing, tambien entregamos proyectos completos. Abre cada proyecto para ver el resultado en vivo.",
    projectBottegaDescription:
      "Sitio de presentacion para una tienda local, enfocado en estructura clara, respuesta mobile y navegacion limpia.",
    projectHero4JobDescription:
      "Aplicacion web generadora de CV para crear curriculums modernos rapidamente mediante un flujo guiado y facil de usar.",
    careersTitle: "Construye tu carrera con Aionbit",
    careersDescription:
      "Unete a un equipo enfocado en delivery que desarrolla productos digitales modernos para clientes internacionales.",
    careersRole1Title: "Senior Frontend Engineer",
    careersRole1Description:
      "Lidera la delivery frontend con React y Next.js, definiendo decisiones de arquitectura y buenas practicas.",
    careersRole2Title: "Full-Stack Engineer",
    careersRole2Description:
      "Desarrolla funcionalidades end-to-end entre frontend y backend, integrando APIs y flujos de negocio a escala.",
    careersRole3Title: "QA Automation Engineer",
    careersRole3Description:
      "Disena y mantiene suites de pruebas automatizadas para aumentar la confianza en cada release.",
    careersApply: "Aplica Ahora",
    careersOpenToTalent:
      "Abiertos a perfiles fuertes en frontend, full-stack, QA automation y technical delivery.",
    contactTitle: "Hablemos de tu proyecto",
    contactDescription:
      "Cuentanos tus objetivos y plazos. Podemos empezar con una discovery call enfocada y proponerte un plan de delivery alineado a tu equipo.",
    contactFirstName: "Nombre",
    contactEmail: "Email",
    contactCompany: "Empresa",
    contactSubject: "Asunto",
    contactMessage: "Mensaje",
    contactSend: "Enviar Mensaje",
    contactCall: "Llamar +40 757 214 095",
    contactDefaultSubject: "Consulta de Proyecto",
    footerBrand: "Aionbit",
    footerContactLabel: "Contacto",
    footerLegalLabel: "Legal",
    footerLocation: "Cluj-Napoca, Rumania",
    footerRights: "© 2026 Aionbit. Todos los derechos reservados.",
    footerCookieNote: "Clave cookie de idioma: aionbit_lang.",
  },
  fr: {
    navHome: "Accueil",
    navServices: "Services",
    navPortfolio: "Projets",
    navCareers: "Carrieres",
    navContact: "Contact",
    navContactNow: "Nous Contacter",
    heroTitle: "Bonjour. Nous sommes Aionbit, votre partenaire en transformation digitale et empowerment",
    heroDescription:
      "Nous concevons et developpons des sites web modernes, des plateformes web et des produits digitaux pour les startups et les entreprises en croissance. De la delivery frontend senior a l'automatisation et au leadership technique, nous aidons les equipes a livrer plus vite avec moins de risque.",
    heroLetsTalk: "Parlons-en",
    heroExploreServices: "Voir les Services",
    videoBadgeText: "Du plan a la livraison du produit",
    servicesBadge: "Services",
    servicesTitle: "Services que Nous Proposons",
    servicesDescription:
      "Nous aidons startups et entreprises a transformer, gerer et digitaliser leurs solutions sous un meme cadre de delivery fiable, en combinant une execution d'ingenierie solide et une vision produit sur des collaborations d'outsourcing long terme et au projet.",
    serviceDesignTitle: "Orchestration de Solution",
    serviceDesignDescription:
      "Nous traduisons les objectifs business en architecture d'execution claire, alignons les equipes et orchestrons les flux produit pour passer de taches fragmentees a un systeme coordonne.",
    serviceDevTitle: "Monitoring et Optimisation",
    serviceDevDescription:
      "Nous monitorons en continu la sante de delivery, la velocite de release et la qualite technique, puis optimisons les flux avec des ameliorations mesurables pour maintenir la performance a l'echelle.",
    serviceQaTitle: "Priorisation et Controle de Delivery",
    serviceQaDescription:
      "Nous definissons des niveaux de priorite clairs, l'ownership des decisions et une cadence d'execution pour que votre equipe se concentre sur les bons resultats et livre une valeur previsible.",
    executionFlowTitle: "Du plan a la livraison du produit",
    executionFlowDescription:
      "Nous pilotons chaque etape du cycle de delivery, de la planification et priorisation a l'execution et la mise en production, pour transformer votre idee en produit digital final.",
    skill1Title: "Ingenierie Frontend",
    skill1Description:
      "Delivery senior avec React, Next.js, Angular, TypeScript et architecture composants moderne orientee maintenabilite.",
    skill2Title: "Developpement Full-Stack",
    skill2Description:
      "Implementation produit de bout en bout avec APIs Node.js, integrations, flux de donnees et handoff propre pour un scaling durable.",
    skill3Title: "Bug-Fixing et Rescue",
    skill3Description:
      "Nous stabilisons les codebases legacy, supprimons les goulots d'etranglement et modernisons les stacks obsoletes pour restaurer la vitesse de delivery.",
    skill4Title: "Automatisation et QA",
    skill4Description:
      "Strategie de test, tests unitaires et automatisation Cypress pour reduire les risques de regression entre releases et equipes.",
    skill5Title: "Developpement Mobile",
    skill5Description:
      "Solutions mobile cross-platform et pretes pour le natif avec React Native et architecture moderne pour des releases rapides et fiables.",
    skill6Title: "Performance et SEO",
    skill6Description:
      "Amelioration Core Web Vitals, SEO technique et optimisations orientees conversion pour maximiser visibilite et croissance.",
    projectsTitle: "Derniers Projets",
    projectsDescription:
      "En plus de l'outsourcing, nous livrons aussi des projets complets. Ouvrez chaque projet pour voir le resultat en ligne.",
    projectBottegaDescription:
      "Site de presentation pour un commerce local, centre sur une structure claire, la reactivite mobile et une navigation propre.",
    projectHero4JobDescription:
      "Application web de generation de CV pour creer rapidement des resumes modernes via un parcours guide et intuitif.",
    careersTitle: "Developpez votre carriere avec Aionbit",
    careersDescription:
      "Rejoignez une equipe orientee delivery qui construit des produits digitaux modernes pour des clients internationaux.",
    careersRole1Title: "Senior Frontend Engineer",
    careersRole1Description:
      "Pilotez la delivery frontend avec React et Next.js, en guidant les choix d'architecture et les bonnes pratiques.",
    careersRole2Title: "Full-Stack Engineer",
    careersRole2Description:
      "Developpez des fonctionnalites end-to-end entre frontend et backend, avec integrations API et workflows metier.",
    careersRole3Title: "QA Automation Engineer",
    careersRole3Description:
      "Concevez et maintenez des suites de tests automatisees pour renforcer la fiabilite des releases.",
    careersApply: "Postuler",
    careersOpenToTalent:
      "Ouverts aux profils solides en frontend, full-stack, QA automation et technical delivery.",
    contactTitle: "Discutons de votre projet",
    contactDescription:
      "Partagez vos objectifs et delais. Nous pouvons commencer par un discovery call cible et proposer un plan de delivery adapte a votre equipe.",
    contactFirstName: "Prenom",
    contactEmail: "Email",
    contactCompany: "Societe",
    contactSubject: "Sujet",
    contactMessage: "Message",
    contactSend: "Envoyer le Message",
    contactCall: "Appeler +40 757 214 095",
    contactDefaultSubject: "Demande de Projet",
    footerBrand: "Aionbit",
    footerContactLabel: "Contact",
    footerLegalLabel: "Mentions legales",
    footerLocation: "Cluj-Napoca, Roumanie",
    footerRights: "© 2026 Aionbit. Tous droits reserves.",
    footerCookieNote: "Cle cookie langue : aionbit_lang.",
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "it" || value === "es" || value === "fr";
}

function getCookieLanguage(): Language | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|; )aionbit_lang=(en|it|es|fr)/);
  return match && isLanguage(match[1]) ? match[1] : null;
}

function persistLanguage(language: Language) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(COOKIE_KEY, language);
  }
  if (typeof document !== "undefined") {
    document.cookie = `${COOKIE_KEY}=${language}; path=/; max-age=31536000; SameSite=Lax`;
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const cookieLanguage = getCookieLanguage();
    const localStorageLanguage =
      typeof window !== "undefined"
        ? window.localStorage.getItem(COOKIE_KEY)
        : null;

    const initialLanguage =
      cookieLanguage ??
      (isLanguage(localStorageLanguage) ? localStorageLanguage : "en");

    setLanguageState(initialLanguage);
    persistLanguage(initialLanguage);
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    persistLanguage(nextLanguage);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translations[language][key] ?? en[key],
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
