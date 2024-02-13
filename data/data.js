export const skill = {
  HTML: { name: 'HTML', state: 'Acquis' },
  CSS: { name: 'CSS', state: 'Acquis' },
  SASS: { name: 'SASS', state: 'Acquis' },
  JS: { name: 'JavaScript', state: 'Acquis' },
  REACT: { name: 'React', state: 'Acquis' },
  NODE: { name: 'NodeJS', state: 'Acquis' },
  EXPRESS: { name: 'Express', state: 'Acquis' },
  MONGODB: { name: 'MongoDB', state: 'Acquis' },
  SWAGGER: { name: 'Swagger', state: 'Acquis' },
  BS: { name: 'Bootstrap', state: 'En cours' },
  PHP: { name: 'PHP', state: 'En cours' },
  SQL: { name: 'SQL', state: 'En cours' },
  ANGULAR: { name: 'Angular', state: 'Prévu' },
  SYMFONY: { name: 'Symfony', state: 'Prévu' }
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
