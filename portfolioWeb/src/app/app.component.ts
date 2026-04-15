import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCard } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

type Language = 'it' | 'en';

interface Technology {
  name: string;
  logo: string;
  category: string;
}

interface Esperienza {
  periodo: string; // es: '2023 - 2024'
  titolo: string;
  descrizione: string;
  luogo: string; // nome azienda o ente
}

interface Progetto {
  titolo: string;
  descrizione: string;
  tecnologie: string;
  githubLink: string;
}

interface Translations {
  navbar: {
    chiSono: string;
    tecnologie: string;
    esperienza: string;
    istruzione: string;
    progetti: string;
    altro: string;
  };
  hero: {
    contattami: string;
    scaricaCV: string;
  };
  tecnologie: {
    title: string;
    filtro: string;
    tutte: string;
    frontend: string;
    backend: string;
    database: string;
    tools: string;
  };
  esperienza: {
    title: string;
    altreEsperienze: string;
    exp1_titolo: string;
    exp1_desc: string;
    exp2_titolo: string;
    exp2_desc: string;
    exp3_titolo: string;
    exp3_desc: string;
    exp4_titolo: string;
    exp4_desc: string;
    altreExp1_titolo: string;
    altreExp1_desc: string;
    altreExp2_titolo: string;
    altreExp2_desc: string;
  };
  istruzione: {
    title: string;
    corsiPrincipali: string;
    nascondiCorsi: string;
    tesi: string;
  };
  progetti: {
    title: string;
    proj1_titolo: string;
    proj1_desc: string;
    proj2_titolo: string;
    proj2_desc: string;
    proj3_titolo: string;
    proj3_desc: string;
    proj4_titolo: string;
    proj4_desc: string;
    proj5_titolo: string;
    proj5_desc: string;
    proj6_titolo: string;
    proj6_desc: string;
    proj7_titolo: string;
    proj7_desc: string;
    proj8_titolo: string;
    proj8_desc: string;
    proj9_titolo: string;
    proj9_desc: string;
  };
  altro: {
    title: string;
    volontariato: string;
    donatoreSangue: string;
    altreEsperienze: string;
    interessi: string;
    interessi_p1: string;
    interessi_p2: string;
    interessi_p3: string;
  };
  contatti: {
    title: string;
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatDividerModule, 
    MatCard, 
    MatCardModule, 
    NgFor, 
    MatTooltipModule, 
    NgIf,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMobileMenuOpen = false;
  currentLanguage: Language = 'it';

  readonly name = 'Giuseppe Sabia';
  readonly subtitle = 'Software Developer | Tech Enthusiast | Problem Solver';
  readonly subtitleEn = 'Software Developer | Tech Enthusiast | Problem Solver';

  showCorsi = false;

  private translations: Record<Language, Translations> = {
    it: {
      navbar: {
        chiSono: 'Chi sono',
        tecnologie: 'Tecnologie',
        esperienza: 'Esperienza',
        istruzione: 'Istruzione',
        progetti: 'Progetti',
        altro: 'Altro'
      },
      hero: {
        contattami: 'Contattami',
        scaricaCV: 'Scarica il CV'
      },
      tecnologie: {
        title: 'Tecnologie',
        filtro: 'Filtra per categoria',
        tutte: '🌐 Tutte le tecnologie',
        frontend: '🎨 Frontend',
        backend: '🖥️ Backend',
        database: '🗄️ Database',
        tools: '🛠️ Tools'
      },
      esperienza: {
        title: 'Esperienze',
        altreEsperienze: 'Altre esperienze di lavoro:',
        exp1_titolo: 'Full Stack Developer',
        exp1_desc: 'Sviluppo di applicazioni web full stack con Next.js per il frontend e Python per il backend, integrando modelli di intelligenza artificiale per funzionalità avanzate. Gestione e deploy dell\'infrastruttura cloud su AWS (EC2, S3, Lambda), con attenzione a scalabilità, sicurezza e performance.',
        exp2_titolo: 'Software Developer',
        exp2_desc: 'Ho lavorato su progetti Angular, realizzando interfacce moderne e responsive. Sviluppato e gestito il backend in Python utilizzando il framework Flask, integrando query SQL a un database PostgreSQL.',
        exp3_titolo: 'Web Developer',
        exp3_desc: 'Ho sviluppato un sistema di self check-in per strutture ricettive. Utilizzando come principali tecnologie PHP, cURL, HTML, JavaScript e Bootstrap.',
        exp4_titolo: 'Gestione pagina web',
        exp4_desc: 'Ho gestito la pagina web, implementando nuove funzionalità e migliorando l\'usabilità.',
        altreExp1_titolo: 'Segretario',
        altreExp1_desc: 'Ho collaborato come segretario in tre diverse elezioni, gestendo le operazioni di voto e assistendo gli elettori.',
        altreExp2_titolo: 'Addetto vendite',
        altreExp2_desc: 'Ho lavorato come addetto alle vendite in un negozio di famiglia, gestendo le vendite e assistendo i clienti.'
      },
      istruzione: {
        title: 'Istruzione',
        corsiPrincipali: 'Corsi principali',
        nascondiCorsi: 'Nascondi corsi',
        tesi: 'Tesi'
      },
      progetti: {
        title: 'Progetti personali e universitari',
        proj1_titolo: 'Progetto Basi di Dati',
        proj1_desc: 'Gestione di una piattaforma online (concessionaria online), sulla quale è possibile acquistare un veicolo.',
        proj2_titolo: 'Progetto Tecnologie Web',
        proj2_desc: 'Servizio di e-commerce per la vendita di auto e moto.',
        proj3_titolo: 'Progetto Interazione Uomo Macchina',
        proj3_desc: 'Piattaforma progettata per supportare l\'integrazione lavorativa e la tutela dei diritti umani.',
        proj4_titolo: 'Progetto Ingegneria del Software',
        proj4_desc: 'Servizio e-commerce per la vendita di auto e moto.',
        proj5_titolo: 'Progetto Self Check-in',
        proj5_desc: 'Progettazione e sviluppo di un sistema di self check-in per strutture ricettive, con controllo automatizzato degli accessi, database centralizzato per la gestione degli ospiti e focus sull\'usabilità dell\'interfaccia.',
        proj6_titolo: 'Sito di registrazione per APP',
        proj6_desc: 'Realizzazione del sito di registrazione, con interfaccia moderna e gestione sicura dei dati.',
        proj7_titolo: 'Progetto gestionale interno',
        proj7_desc: 'Applicativo gestionale interno per la gestione di processi aziendali, sviluppato con stack full stack moderno.',
        proj8_titolo: 'E-commerce negozio di elettronica',
        proj8_desc: 'Sito web per un negozio di elettronica con catalogo prodotti dinamico, gestione categorie e interfaccia moderna. Sviluppato con Next.js e Supabase come database backend, deployato su Vercel.',
        proj9_titolo: 'ShopIt — Piattaforma E-commerce',
        proj9_desc: 'Piattaforma e-commerce completa con autenticazione utenti, carrello acquisti, gestione prodotti e pannello admin. Stack full stack containerizzato con Docker: React frontend, Node.js/Express API, MySQL database.'
      },
      altro: {
        title: 'Altro',
        volontariato: 'Esperienze di volontariato',
        donatoreSangue: 'Donatore di sangue volontario',
        altreEsperienze: 'Altre esperienze e interessi',
        interessi: 'Altre esperienze e interessi',
        interessi_p1: 'Da sempre un appassionato di tech e di molti altri argomenti, ho iniziato a esplorare il mondo digitale fin da piccolo tramite forum e community online.',
        interessi_p2: 'Ho creato e gestito canali e pagine su YouTube, Telegram e Instagram, sviluppando competenze nella comunicazione digitale e nella gestione dei contenuti.',
        interessi_p3: 'Durante l\'università ho svolto lavori occasionali in settori diversi dall\'informatica, che mi hanno aiutato a migliorare soft skills come adattabilità, lavoro in team e gestione del tempo.'
      },
      contatti: {
        title: 'Contatti'
      }
    },
    en: {
      navbar: {
        chiSono: 'About me',
        tecnologie: 'Technologies',
        esperienza: 'Experience',
        istruzione: 'Education',
        progetti: 'Projects',
        altro: 'More'
      },
      hero: {
        contattami: 'Contact me',
        scaricaCV: 'Download CV'
      },
      tecnologie: {
        title: 'Technologies',
        filtro: 'Filter by category',
        tutte: '🌐 All technologies',
        frontend: '🎨 Frontend',
        backend: '🖥️ Backend',
        database: '🗄️ Database',
        tools: '🛠️ Tools'
      },
      esperienza: {
        title: 'Experience',
        altreEsperienze: 'Other work experiences:',
        exp1_titolo: 'Full Stack Developer',
        exp1_desc: 'Full stack web application development using Next.js for the frontend and Python for the backend, integrating AI models for advanced features. Management and deployment of cloud infrastructure on AWS (EC2, S3, Lambda), with a focus on scalability, security and performance.',
        exp2_titolo: 'Software Developer',
        exp2_desc: 'I worked on Angular projects, creating modern and responsive interfaces. Developed and managed the backend in Python using the Flask framework, integrating SQL queries with a PostgreSQL database.',
        exp3_titolo: 'Web Developer',
        exp3_desc: 'I developed a self check-in system for hospitality facilities. Using PHP, cURL, HTML, JavaScript and Bootstrap as main technologies.',
        exp4_titolo: 'Web page management',
        exp4_desc: 'I managed the web page, implementing new features and improving usability.',
        altreExp1_titolo: 'Secretary',
        altreExp1_desc: 'I collaborated as a secretary in three different elections, managing voting operations and assisting voters.',
        altreExp2_titolo: 'Sales Assistant',
        altreExp2_desc: 'I worked as a sales assistant in a family store, managing sales and assisting customers.'
      },
      istruzione: {
        title: 'Education',
        corsiPrincipali: 'Main courses',
        nascondiCorsi: 'Hide courses',
        tesi: 'Thesis'
      },
      progetti: {
        title: 'Personal and academic projects',
        proj1_titolo: 'Database Project',
        proj1_desc: 'Management of an online platform (online car dealership), where it is possible to purchase a vehicle.',
        proj2_titolo: 'Web Technologies Project',
        proj2_desc: 'E-commerce service for the sale of cars and motorcycles.',
        proj3_titolo: 'Human-Computer Interaction Project',
        proj3_desc: 'Platform designed to support labor integration and protection of human rights.',
        proj4_titolo: 'Software Engineering Project',
        proj4_desc: 'E-commerce service for the sale of cars and motorcycles.',
        proj5_titolo: 'Self Check-in Project',
        proj5_desc: 'Design and development of a self check-in system for hospitality facilities, with automated access control, centralized database for guest management and focus on interface usability.',
        proj6_titolo: 'App Registration Website',
        proj6_desc: 'Realization of the registration website, with modern interface and secure data management.',
        proj7_titolo: 'Internal management project',
        proj7_desc: 'Internal management application for the management of business processes, developed with a modern full stack.',
        proj8_titolo: 'Electronics store website',
        proj8_desc: 'Website for an electronics store with dynamic product catalog, category management and modern interface. Built with Next.js and Supabase as the backend database, deployed on Vercel.',
        proj9_titolo: 'ShopIt — E-commerce Platform',
        proj9_desc: 'Complete e-commerce platform with user authentication, shopping cart, product management and admin panel. Full stack containerized with Docker: React frontend, Node.js/Express API, MySQL database.'
      },
      altro: {
        title: 'More',
        volontariato: 'Volunteer experiences',
        donatoreSangue: 'Volunteer blood donor',
        altreEsperienze: 'Other experiences and interests',
        interessi: 'Other experiences and interests',
        interessi_p1: 'I have always been passionate about tech and many other topics. I started exploring the digital world from a young age through forums and online communities.',
        interessi_p2: 'I created and managed channels and pages on YouTube, Telegram and Instagram, developing skills in digital communication and content management.',
        interessi_p3: 'During university I did occasional work in sectors outside of IT, which helped me improve soft skills such as adaptability, teamwork and time management.'
      },
      contatti: {
        title: 'Contacts'
      }
    }
  };

  get t(): Translations {
    return this.translations[this.currentLanguage];
  }

  get progettiTradotti() {
    return this.progetti.map((proj, index) => ({
      ...proj,
      titolo: this.t.progetti[`proj${index + 1}_titolo` as keyof typeof this.t.progetti],
      descrizione: this.t.progetti[`proj${index + 1}_desc` as keyof typeof this.t.progetti]
    }));
  }

  get esperienzeTradotte() {
    return this.esperienze.map((exp, index) => ({
      ...exp,
      titolo: this.t.esperienza[`exp${index + 1}_titolo` as keyof typeof this.t.esperienza],
      descrizione: this.t.esperienza[`exp${index + 1}_desc` as keyof typeof this.t.esperienza]
    }));
  }

  get altreEsperienzeTradotte() {
    return this.altreEsperienze.map((exp, index) => ({
      ...exp,
      titolo: this.t.esperienza[`altreExp${index + 1}_titolo` as keyof typeof this.t.esperienza],
      descrizione: this.t.esperienza[`altreExp${index + 1}_desc` as keyof typeof this.t.esperienza]
    }));
  }

  get interessiTradotto() {
    return {
      p1: this.t.altro.interessi_p1,
      p2: this.t.altro.interessi_p2,
      p3: this.t.altro.interessi_p3
    };
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'it' ? 'en' : 'it';
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('language', this.currentLanguage);
    }
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLanguage = localStorage.getItem('language') as Language | null;
      if (savedLanguage && (savedLanguage === 'it' || savedLanguage === 'en')) {
        this.currentLanguage = savedLanguage;
      }
    }
  }

  progetti = [
    {
      titolo: 'Progetto Basi di Dati',
      descrizione: 'Gestione di una piattaforma online (concessionaria online), sulla quale è possibile acquistare un veicolo.',
      tecnologie: [
        { nome: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { nome: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ],
      githubLink: 'https://github.com/kuraito/Progetto_BD_VeicHome'
    },
    {
      titolo: 'Progetto Tecnologie Web',
      descrizione: 'Servizio di e-commerce per la vendita di auto e moto.',
      tecnologie: [
        { nome: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { nome: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nome: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ],
      githubLink: 'https://github.com/kuraito/Progetto_TSW'
    },
    {
      titolo: 'Progetto Interazione Uomo Macchina',
      descrizione: 'Piattaforma progettata per supportare l’integrazione lavorativa e la tutela dei diritti umani.',
      tecnologie: [
        { nome: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { nome: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nome: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ],
      githubLink: 'https://github.com/kuraito/Gruppo-n-10'
    },
    {
      titolo: 'Progetto Ingegneria del Software',
      descrizione: 'Servizio e-commerce per la vendita di auto e moto.',
      tecnologie: [
        { nome: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { nome: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { nome: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ],
      githubLink: 'https://github.com/kuraito/Armando9889-Progetto_Ingegneria_del_software'
    },
    {
      titolo: 'Progetto Self Check-in',
      descrizione: 'Progettazione e sviluppo di un sistema di self check-in per strutture ricettive, con controllo automatizzato degli accessi, database centralizzato per la gestione degli ospiti e focus sull\'usabilità dell’interfaccia.',
      tecnologie: [
        { nome: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
        { nome: 'cURL', logo: 'https://curl.se/logo/curl-transparent.png' },
        { nome: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { nome: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' }
      ],
    },
    {
      titolo: 'Sito di registrazione per APP',
      descrizione: 'Realizzazione del sito di registrazione, con interfaccia moderna e gestione sicura dei dati.',
      tecnologie: [
        { nome: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
        { nome: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
        { nome: 'TypeScript', logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
        { nome: 'Angular', logo: 'https://angular.io/assets/images/logos/angular/angular.svg' },
        { nome: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
      ],
    },
    {
      titolo: 'Progetto gestionale interno',
      descrizione: 'Applicativo gestionale interno per la gestione di processi aziendali, sviluppato con stack full stack moderno.',
      tecnologie: [
        { nome: 'Angular', logo: 'https://angular.io/assets/images/logos/angular/angular.svg' },
        { nome: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
        { nome: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
        { nome: 'TypeScript', logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
        { nome: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { nome: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { nome: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' }
      ],
      githubLink: ''
    },
    {
      titolo: 'E-commerce negozio di elettronica',
      descrizione: 'Sito web per un negozio di elettronica con catalogo prodotti dinamico, gestione categorie e interfaccia moderna. Sviluppato con Next.js e Supabase, deployato su Vercel.',
      tecnologie: [
        { nome: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { nome: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
        { nome: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' }
      ],
      githubLink: 'https://electronics-rizzo.vercel.app/'
    },
    {
      titolo: 'ShopIt — Piattaforma E-commerce',
      descrizione: 'Piattaforma e-commerce completa con autenticazione, carrello, gestione prodotti e pannello admin. Stack full stack containerizzato con Docker.',
      tecnologie: [
        { nome: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { nome: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { nome: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
        { nome: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { nome: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ],
      githubLink: 'https://github.com/kuraito/shopit'
    }
  ];


  esperienze: Esperienza[] = [
    {
      periodo: '2024 - Presente',
      titolo: 'Full Stack Developer',
      descrizione: 'Sviluppo di applicazioni web full stack con Next.js, Python e integrazione di modelli AI. Deploy su AWS.',
      luogo: 'BSG'
    },
    {
      periodo: 'Febbraio 2025 - Presente',
      titolo: 'Software Developer',
      descrizione: 'Ho lavorato su progetti Angular, realizzando interfacce moderne e responsive. Sviluppato e gestito il backend in Python utilizzando il framework Flask, integrando query SQL a un database PostgreSQL.',
      luogo: 'Cassa Edile di Torino'
    },
    {
      periodo: 'Luglio 2023 - Settembre 2023',
      titolo: 'Web Developer',
      descrizione: 'Ho siluppato un sistema di self check-in per strutture ricettive. Utilizzando come principali tecnologie PHP, cURL, Html, JavaScript e Bootstrap.',
      luogo: 'InReception Srl'
    },
    {
      periodo: 'Febbraio 2023 - Giugno 2023',
      titolo: 'Gestione pagina web',
      descrizione: 'Ho gestito la pagina web, implementando nuove funzionalità e migliorando l\'usabilità.',
      luogo: 'Tenuta Colline di Zenone'
    }
  ];

  altreEsperienze: Esperienza[] = [
    {
      periodo: '3 esperienze lavorative',
      titolo: 'Segretario',
      descrizione: 'Ho collaborato come segretario in tre diverse elezioni, gestendo le operazioni di voto e assistendo gli elettori.',
      luogo: 'Seggio elettorale'
    },
    {
      periodo: '2018 - 2024',
      titolo: 'Addetto vendite',
      descrizione: 'Ho lavorato come addetto alle vendite in un negozio di famiglia, gestendo le vendite e assistendo i clienti.',
      luogo: 'Negozio di famiglia'
    }
  ];

  selectedCategory: string = 'all';
  
  technologies: Technology[] = [
    { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', category: 'frontend' },
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', category: 'frontend' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', category: 'frontend' },
    { name: 'TypeScript', logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', category: 'frontend' },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', category: 'frontend' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'frontend' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
  { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', category: 'frontend' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'frontend' },
    { name: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg', category: 'backend' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', category: 'backend' },
    { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg', category: 'backend' },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', category: 'backend' },
    { name: 'cURL', logo: 'https://curl.se/logo/curl-transparent.png', category: 'backend' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg', category: 'backend' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend' },
    { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png', category: 'database' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'database' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database' },
    { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg', category: 'lower level' },
    { name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', category: 'tools' },
    { name: 'Linux', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png', category: 'tools' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'tools' },
    { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', category: 'tools' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'tools' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', category: 'tools' }
  ];

  filteredTechnologies: Technology[] = this.technologies;

  filterTechnologies() {
    if (this.selectedCategory === 'all') {
      this.filteredTechnologies = this.technologies;
    } else {
      this.filteredTechnologies = this.technologies.filter(tech => 
        tech.category === this.selectedCategory
      );
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToMobile(sectionId: string) {
    this.toggleMobileMenu(); // Chiude il menu dopo la selezione
    this.scrollTo(sectionId);
  }

}
