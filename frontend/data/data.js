export const skill = {
  HTML: { name: 'HTML', state: 'Acquis', showFilter: true },
  CSS: { name: 'CSS', state: 'Acquis', showFilter: false },
  SASS: { name: 'SASS', state: 'Acquis', showFilter: true },
  JS: { name: 'JavaScript', state: 'Acquis', showFilter: true },
  REACT: { name: 'React', state: 'Acquis', showFilter: true },
  NODE: { name: 'NodeJS', state: 'Acquis', showFilter: true },
  EXPRESS: { name: 'Express', state: 'Acquis', showFilter: false },
  MONGODB: { name: 'MongoDB', state: 'Acquis', showFilter: true },
  SWAGGER: { name: 'Swagger', state: 'Acquis', showFilter: true },
  BS: { name: 'Bootstrap', state: 'En cours', showFilter: true },
  PHP: { name: 'PHP', state: 'En cours', showFilter: true },
  SQL: { name: 'SQL', state: 'En cours', showFilter: true },
  ANGULAR: { name: 'Angular', state: 'Prévu', showFilter: false },
  SYMFONY: { name: 'Symfony', state: 'Prévu', showFilter: false }
}

export const projectData = [
  {
    base: 'Student',
    type: 'Programmation',
    name: 'Booki',
    image: 'booki.webp',
    demo: true,
    link: 'https://booki-gredoutez.vercel.app/',
    github: 'https://github.com/GaetanRedoutez/P2-HTML-CSS-OPC',
    skills: ['HTML', 'CSS'],
    description:
      "Créez la page d'accueil d'une agence de voyage avec HTML & CSS"
  },
  {
    base: 'Student',
    type: 'Programmation',
    name: 'Porfolio Sophie Bluel',
    image: 'sophiebluel.webp',
    demo: false,
    link: '',
    github:
      'https://github.com/GaetanRedoutez/Portfolio-architecte-sophie-bluel',
    skills: ['JavaScript'],
    description: 'Créez une page web dynamique avec JavaScript'
  },
  {
    base: 'Student',
    type: 'Gestion de projet',
    name: 'Menu Maker by Qwenta',
    image: 'menumaker.webp',
    demo: true,
    link: 'https://gredoutez.notion.site/P4-Menu-Maker-by-Qwenta-1d1e1673f1214638a7b81d868b6f5271',
    github: '',
    skills: ['Gestion de projet'],
    description: 'Planifiez le développement du site de votre client'
  },
  {
    base: 'Student',
    type: 'Optimisation',
    name: 'Nina Carducci',
    image: 'ninacarducci.webp',
    demo: true,
    link: 'https://nina-carducci-gredoutez.vercel.app/',
    github: 'https://github.com/GaetanRedoutez/P5-OPC-Nina-Carducci',
    skills: ['HTML', 'CSS', 'JavaScript'],
    description: 'Débuggez et optimisez un site de photographe'
  },
  {
    base: 'Student',
    type: 'Programmation',
    name: 'Kasa',
    image: 'kasa.webp',
    demo: true,
    link: 'https://kasa-gredoutez.vercel.app/',
    github: 'https://github.com/GaetanRedoutez/kasa',
    skills: ['REACT', 'SASS'],
    description: 'Créez une application web de location immobilière avec React'
  },
  {
    base: 'Student',
    type: 'Programmation',
    name: 'Mon Vieux Grimoire',
    image: 'monvieuxgrimoire.webp',
    demo: false,
    link: '',
    github: 'https://github.com/GaetanRedoutez/mon-vieux-grimoire',
    skills: ['NodeJS', 'Express', 'MongoDB', 'Swagger', 'SASS'],
    description: "Développez le back-end d'un site de notation de livres"
  },
  {
    base: 'Student',
    type: 'Programmation',
    name: 'Portfolio',
    image: 'portfolio.webp',
    demo: true,
    link: '/',
    github: 'https://github.com/GaetanRedoutez/portfolio',
    skills: ['REACT', 'NodeJS', 'Express', 'MongoDB', 'Bootstrap', 'SASS'],
    description: 'Vous y êtes !'
  },
  {
    base: 'Perso',
    type: 'Programmation',
    name: 'Pizza Hub',
    image: 'wip.webp',
    demo: false,
    link: '',
    github: 'https://github.com/GaetanRedoutez/portfolio',
    skills: ['REACT', 'NodeJS', 'Express', 'MongoDB', 'Bootstrap'],
    description: 'Site de vente de pizza | FullStack JS'
  },
  {
    base: 'Perso',
    type: 'Programmation',
    name: 'Site Test PHP',
    image: 'wip.webp',
    demo: false,
    link: '',
    github: 'https://github.com/GaetanRedoutez/training-php',
    skills: ['PHP', 'SQL'],
    description: 'Site achat/vente objet en PHP | V1 : MVC | V2 : POO en cours'
  }
]

export const resumeData = {
  Hard_Skill: [
    { name: 'Construire un site web responsive', details: 'HTML, CSS, Sass' },
    { name: 'Créer une interface dynamique', details: 'Javascript, React' },
    {
      name: 'Concevoir, créer et interroger une base de données',
      details: 'MongoDB, Mongoose, MySQL'
    },
    { name: 'Créer et utiliser une API Rest', details: 'Node.JS (Express)' },
    { name: 'Échanger avec une base de données', details: 'Node.JS, PHP' },
    { name: 'Documenter un code', details: 'JSDocs, Swagger' },
    { name: 'Outil de gestion de version', details: 'Git, github' },
    { name: 'Gestion de projet', details: 'Notion, Asana' }
  ],
  Experience: [
    {
      name: 'Automaticien',
      society: 'Itesya',
      start: '10/2019',
      end: '09/2023',
      mission:
        'Codage et programmation des systèmes (langages industriels), conduite des essais et correction des anomalies, modification de programmes existants selon les nouveaux besoins clients.'
    },
    {
      name: 'Apprenti Automaticien',
      society: 'Vermot Automation',
      start: '07/2018',
      end: '09/2019',
      mission:
        'Codage et programmation des systèmes (langages industriels), conduite des essais et correction des anomalies, modification de programmes existants selon les nouveaux besoins clients.'
    }
  ],
  Formation: [
    {
      name: 'Formation Développeur Web',
      grade: 'RNCP 5 (Bac +2)',
      school: 'OpenClassrooms',
      start: '09/2023',
      end: '03/2024',
      city: 'Besançon',
      cover:
        'Ma formation web a couvert HTML, CSS, JavaScript, React, Git/Github, NodeJS, Express, MongoDB et  les API REST      '
    },
    {
      name: 'Licence Professionnelle Automatique et Robotique Industrielle',
      grade: 'Bac +3',
      school: 'UFR Sciences et Techniques de Franche-Comté',
      start: '07/2018',
      end: '09/2019',
      city: 'Besançon',
      cover: ''
    },
    {
      name: 'DUT Génie Electrique et Informatique Industrielle',
      grade: 'Bac +2',
      school: 'IUT Nord Franche-Comté',
      start: '09/2017',
      end: '07/2018',
      city: 'Belfort',
      cover: ''
    }
  ],
  Soft_Skill: [
    'Patience',
    'Esprit d’équipe',
    'Organisation',
    'Esprit logique',
    'Autonomie'
  ],
  Langue: [
    { name: 'Français', level: 'Native' },
    { name: 'Anglais', level: 'B2' }
  ],
  Hobbies: ['Informatique', 'Lecture', 'Jeux vidéos', 'Sport']
}
