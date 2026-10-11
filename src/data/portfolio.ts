export const siteIdentity = {
  name: 'Rudra Pratap Singh Rathore',
  role: 'Software Engineer · Full-Stack Developer · ML Engineer',
  location: 'Jaipur, India',
  phone: '+91 63750 33394',
  email: 'rudra.psr8@gmail.com',
  github: 'https://github.com/RudraPratapSingh2008',
  linkedin: 'https://www.linkedin.com/in/-rudrapratapsinghrathore',
};

export const navLinks = [
  { href: '#hero', label: 'home' },
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'timeline' },
  { href: '#contact', label: 'contact' },
];

export const heroContent = {
  subtitle: 'software engineer · full-stack systems · machine learning',
  titleLine1: 'I build software',
  titleAccent: 'that ships',
  description:
    'B.Tech CSE student building production-minded full-stack applications and data-driven ML systems, from model training through deployment.',
  imageUrl: '/projects/hero-photo.png',
  ctas: [
    { href: '#contact', label: "Let's talk" },
    { href: '#projects', label: 'See my work' },
  ],
};

export const videoContent = {
  label: 'how I work',
  headingLine1: 'Ideas into',
  headingAccent: 'useful products',
  description:
    'I enjoy the space between a rough idea and a polished experience: exploring the problem, shaping the interface, and shipping a dependable solution.',
  bullets: [
    'Start with the user and make the problem concrete',
    'Prototype quickly, then make the details feel intentional',
    'Measure what matters and keep improving after launch',
  ],
  imageUrl: '/projects/co2watch-india.jpeg',
  imageAlt: 'Abstract product workspace illustration',
};

export const aboutChapters = [
  {
    num: 'chapter 01',
    paragraphs: [
        'I am a software engineer who enjoys turning complex problems into reliable, useful products.',
        'My work moves between full-stack development, machine learning, and the systems that connect the two.',
        'I care about clear communication, readable code, and following a project through to deployment.',
    ],
  },
  {
    num: 'chapter 02',
    paragraphs: [
      'At AllsWeb, I contributed to software engineering and AI/ML projects, building scalable applications, REST APIs, and data-driven solutions.',
      'I am consistent, adaptable, and quick to pick up new tools in collaborative, fast-paced teams.',
      'The goal is always the same: ship production-ready software that solves a real problem.',
    ],
  },
];

export const aboutNotes = [
  { text: 'I sketch UI ideas before I open Figma.', bg: 'hsl(var(--yellow-dim))', border: 'hsla(40,100%,68%,0.5)', pin: 'hsla(40,100%,68%,0.9)', rot: '-1deg' },
  { text: 'I still collect paper notebooks.', bg: '#d4f5e2', border: 'rgba(107,203,119,0.4)', pin: 'rgba(107,203,119,0.8)', rot: '1.5deg' },
  { text: 'I obsess over timing curves.', bg: '#fde8f0', border: 'rgba(255,107,157,0.4)', pin: 'rgba(255,107,157,0.7)', rot: '-0.5deg' },
  { text: 'I name animation timelines like movie scenes.', bg: '#e8eafb', border: 'rgba(100,110,240,0.3)', pin: 'rgba(100,110,240,0.5)', rot: '2deg' },
];

export const marqueeSkills = [
  'PYTHON', 'C++', 'JAVA', 'JAVASCRIPT', 'REACT', 'NODE.JS',
  'MACHINE LEARNING', 'MONGODB', 'DOCKER', 'REST APIs', 'SQL', 'DSA',
];

export const skillGroups = [
  { title: 'Languages', tags: ['Python', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'] },
  { title: 'Full-stack', tags: ['React', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Socket.io', 'Redux Toolkit'] },
  { title: 'ML & AI', tags: ['scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'BiLSTM', 'PPO', 'NumPy', 'Pandas'] },
  { title: 'Tools', tags: ['Docker', 'Git', 'GitHub', 'VS Code', 'Vercel', 'Linux'] },
];

export const projects = [
  {
    title: 'NEST Prediction System',
    desc: 'A five-model stacking ensemble that predicts high-frequency NEST exam topics across five subjects and 80 questions per paper.',
    stack: ['Python', 'XGBoost', 'LightGBM', 'CatBoost', 'scikit-learn'],
    screenColor: '#1b3e68',
    screenAccent: '#6bcb77',
    imageUrl: '/projects/nest.jpeg',
    live: 'https://nest-prediction.vercel.app/',
    code: 'https://github.com/RudraPratapSingh2008/NEST-prediction',
  },
  {
    title: 'Autozentic',
    desc: 'An AI automation agency concept presented at Idea Spark 2.0, where I contributed as the team programmer.',
    stack: ['AI', 'Automation', 'Product Engineering'],
    screenColor: '#0a192f',
    screenAccent: '#48b8d0',
    imageUrl: '/projects/autozentic.jpeg',
    live: 'https://autozentic.com/',
    code: 'https://github.com/RudraPratapSingh2008',
  },
  {
    title: 'Freiwilliger',
    desc: 'A full-stack MERN platform connecting volunteers with community opportunities across India through discovery, profiles, and messaging.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
    screenColor: '#3b2a1a',
    screenAccent: '#ffd15c',
    imageUrl: '/projects/freiwilliger.jpeg',
    live: '',
    code: 'https://github.com/RudraPratapSingh2008/Freiwilliger-v1',
  },
  {
    title: 'Crypto Trade Bot',
    desc: 'A deep reinforcement learning trading agent pairing a BiLSTM encoder for price-sequence modelling with a PPO policy network.',
    stack: ['Python', 'BiLSTM', 'PPO', 'Reinforcement Learning'],
    screenColor: '#2d1b4e',
    screenAccent: '#ff6b9d',
    imageUrl: '/projects/crypto-trade-bot.jpeg',
    live: '',
    code: 'https://github.com/RudraPratapSingh2008/Crypto-trade-bot',
  },
  {
    title: 'CO2Watch India',
    desc: 'A satellite CO2 monitoring project for 10 power plants built during the OpenAI Academy x NxtWave Buildathon.',
    stack: ['Python', 'Satellite Data', 'Machine Learning', 'Backend'],
    screenColor: '#1c1e21',
    screenAccent: '#60a5fa',
    imageUrl: '/projects/co2watch-india.jpeg',
    live: '',
    code: 'https://github.com/shreyash1234566/gasCV',
  },
];

export const timelineItems = [
  { year: '2023–27', title: 'B.Tech CSE · JECRC University', desc: 'Computer Science and Engineering student building a foundation across software engineering, data, and machine learning.' },
  { year: '2025', title: 'Software Engineering Intern · AllsWeb', desc: 'Contributed to full-stack development, REST APIs, machine learning models, data processing, and deployment.' },
  { year: '2024', title: 'SIH Round 2 Qualifier', desc: 'Ranked 7th among 200+ college teams as ML Pipeline Developer for Project EDNA.' },
  { year: '2026', title: 'OpenAI Academy × NxtWave Buildathon', desc: 'Built CO2Watch India, a satellite CO2 monitor for 10 power plants as Backend Developer.' },
];

export const testimonials = [
  {
    text: 'I build from model training to deployment, keeping the whole system in view instead of treating software as isolated pieces.',
    name: 'Engineering approach',
    role: 'End-to-end ownership',
  },
  {
    text: 'I value honest communication, consistency, and the ability to adapt quickly when a project changes direction.',
    name: 'Working style',
    role: 'Clear and adaptable',
  },
  {
    text: 'The best software is production-ready: useful to people, measurable in practice, and maintainable by the team.',
    name: 'Product principle',
    role: 'Useful and reliable',
  },
];

export const contactMeta = {
  heading: 'Let\'s build something useful',
  subheading:
    'Open to software engineering, full-stack development, machine learning opportunities, and interesting collaborations.',
  links: [
    { label: 'email', value: 'rudra.psr8@gmail.com', href: 'mailto:rudra.psr8@gmail.com' },
    { label: 'linkedin', value: 'linkedin.com/in/-rudrapratapsinghrathore', href: 'https://www.linkedin.com/in/-rudrapratapsinghrathore' },
    { label: 'github', value: 'github.com/RudraPratapSingh2008', href: 'https://github.com/RudraPratapSingh2008' },
    { label: 'phone', value: '+91 63750 33394', href: 'tel:+916375033394' },
  ],
};

export const footerMeta = {
  brand: 'Rudra Pratap Singh Rathore',
  copyright: '© 2026 — Software engineering, full-stack systems, and ML',
  links: [
    { label: 'GitHub', href: 'https://github.com/RudraPratapSingh2008' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/-rudrapratapsinghrathore' },
    { label: 'Email', href: 'mailto:rudra.psr8@gmail.com' },
  ],
};
