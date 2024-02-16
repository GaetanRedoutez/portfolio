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
    id: '1',
    base: 'Student',
    type: 'Programmation',
    name: 'Booki',
    image: 'projectimage.png',
    demo: true,
    link: 'https://booki-gredoutez.vercel.app/',
    skills: [skill.HTML, skill.CSS],
    description:
      "Créez la page d'accueil d'une agence de voyage avec HTML & CSS"
  },
  {
    id: '2',
    base: 'Student',
    type: 'Programmation',
    name: 'Porfolio Sophie Bluel',
    image: 'projectimage.png',
    demo: true,
    link: '',
    skills: [skill.JS],
    description: 'Créez une page web dynamique avec JavaScript'
  },
  {
    id: '3',
    base: 'Student',
    type: 'Gestion de projet',
    name: 'Menu Maker by Qwenta',
    image: 'projectimage.png',
    demo: true,
    link: 'https://gredoutez.notion.site/P4-Menu-Maker-by-Qwenta-1d1e1673f1214638a7b81d868b6f5271',
    skills: [],
    description: 'Planifiez le développement du site de votre client'
  },
  {
    id: '4',
    base: 'Student',
    type: 'Optimisation',
    name: 'Nina Carducci',
    image: 'projectimage.png',
    demo: true,
    link: 'https://nina-carducci-gredoutez.vercel.app/',
    skills: [skill.HTML, skill.CSS, skill.JS],
    description: 'Débuggez et optimisez un site de photographe'
  },
  {
    id: '5',
    base: 'Student',
    type: 'Programmation',
    name: 'Kasa',
    image: 'projectimage.png',
    demo: true,
    link: 'https://kasa-gredoutez.vercel.app/',
    skills: [skill.REACT],
    description: 'Créez une application web de location immobilière avec React'
  },
  {
    id: '6',
    base: 'Student',
    type: 'Programmation',
    name: 'Mon Vieux Grimoire',
    image: 'projectimage.png',
    demo: false,
    link: '',
    skills: [skill.NODE, skill.EXPRESS, skill.MONGODB, skill.SWAGGER],
    description: "Développez le back-end d'un site de notation de livres"
  },
  {
    id: '7',
    base: 'Student',
    type: 'Programmation',
    name: 'Portfolio',
    image: 'projectimage.png',
    demo: true,
    link: '/',
    skills: [skill.REACT, skill.NODE, skill.EXPRESS, skill.MONGODB, skill.BS],
    description: 'Vous y êtes !'
  },
  {
    id: '8',
    base: 'Perso',
    type: 'Programmation',
    name: 'Pizza Hub',
    image: 'projectimage.png',
    demo: false,
    link: '',
    skills: [skill.REACT, skill.NODE, skill.EXPRESS, skill.MONGODB, skill.BS],
    description: 'Site de vente de pizza | FullStack JS'
  },
  {
    id: '9',
    base: 'Perso',
    type: 'Programmation',
    name: 'Site Test PHP',
    image: 'projectimage.png',
    demo: false,
    link: '',
    skills: [skill.PHP, skill.SQL],
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
    { name: 'Outil de gestion de version', details: 'Git, Github' },
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
        'Ma formation web a couvert HTML, CSS, JavaScript, React, Git/GitHub, NodeJS, Express, MongoDB et  les API REST      '
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
