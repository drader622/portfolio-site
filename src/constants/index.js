import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  tailwind,
  nodejs,
  git,
  java,
  csharp,
  mysql,
  aws,
  azure,
  springboot,
  mongodb,
  mealList,
  nhlrosters,
  matching,
  simpleworx,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: '',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'tech',
    title: 'Skills'
  },
  {
    id: 'work',
    title: 'Experience'
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [

];

const technologies = [
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Spring Boot',
    icon: springboot,
  },
  {
    name: 'CSharp',
    icon: csharp,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'mongodb',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'aws',
    icon: aws,
  },
  {
    name: 'azure',
    icon: azure,
  },
];

const experiences = [
  {
    title: 'CompTIA Project+',
    company_name: 'Cover Hunt',
    icon: microverse,
    iconBg: '#333333',
    date: 'November 2025',
  },
  {
    title: 'AWS Cloud Practitioner',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'March 2025',
  },
  {
    title: 'ITIL Foundation',
    icon: microverse,
    iconBg: '#333333',
    date: 'February 2025',
  },
  {
    title: 'Back End Developer',
    company_name: 'Diversity Cyber Council',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2025',
  },
  {
    title: 'Front End Developer',
    company_name: 'Diversity Cyber Council',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2025',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Meal List App',
    description: 'A full stack web app to help make ordering meal ingredients easier.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: mealList,
    repo: 'https://github.com/drader622/recipeList',
    demo: 'http://www.meal-list-app.com',
  },
  {
    id: 'project-2',
    name: 'NHL Rosters',
    description: 'An app using an API to display current roster for the team/mascot the user enters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: nhlrosters,
    repo: 'https://github.com/drader622/nhl-rosters',
    demo: 'https://nhl-rosters.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'SimpleWorkX',
    description: 'Industrial Maintenance web application for workers to stay updated and aware of all the work orders in the system.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: simpleworx,
    repo: 'https://github.com/drader622/SimpleWorX',
    demo: 'https://simpleworx-4b92af93fce6.herokuapp.com/',
  },
  {
    id: 'project-4',
    name: 'Matching Game',
    description: `Click to play a memory game with NFL logos. Try to find all
                  the matches!`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: matching,
    repo: 'https://github.com/drader622/matching-game',
    demo: 'https://matching-game-dr.netlify.app/',
  },
];

export { services, technologies, experiences, projects };
