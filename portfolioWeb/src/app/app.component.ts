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
export class AppComponent {
  isMobileMenuOpen = false;

  readonly name = 'Giuseppe Sabia';
  readonly subtitle = 'Full Stack Developer | UI/UX Designer | Tech Enthusiast | Problem Solver';

  showCorsi = false;

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
    }
  ];


  esperienze: Esperienza[] = [
    {
      periodo: 'Febbraio 2025 - Presente',
      titolo: 'Full Stack Developer',
      descrizione: 'Ho lavorato su progetti Angular, realizzando interfacce moderne e responsive. Sviluppato e gestito il backend in Python utilizzando il framework Flask, integrando query SQL a un database PostgreSQL. ',
      luogo: 'Cassa Edile di Torino'
    },
    {
      periodo: 'Luglio 2023 - Settembre 2023',
      titolo: 'Stage - Full Stack Dev',
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
    { name: 'Angular', logo: 'https://angular.io/assets/images/logos/angular/angular.svg', category: 'frontend' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'frontend' },
    { name: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg', category: 'backend' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', category: 'backend' },
    { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg', category: 'backend' },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', category: 'backend' },
    { name: 'cURL', logo: 'https://curl.se/logo/curl-transparent.png', category: 'backend' },
    { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png', category: 'database' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'database' },
    { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg', category: 'lower level' },
    { name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', category: 'tools' },
    { name: 'Linux', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png', category: 'tools' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'tools' },
    { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', category: 'tools' }
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
