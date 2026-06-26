// Centralized portfolio content. Edit values here to customize the site.

export const profile = {
  name: 'Hari Balaji V.',
  firstName: 'Hari',
  title: 'An Aspiring AI Engineer',
  status: 'Open to Jobs & Internships',
  rotatingTags: [
    'AI & Data Science Student',
    'Generative AI Enthusiast',
    'Machine Learning Practitioner',
  ],
  heroDescription:
    "Building intelligent systems with AI, ML & Generative AI. B.Tech AI & Data Science (2027) — exploring LLMs, RAG, AI agents and applied deep learning.",
  resumeUrl: '/Hari_Balaji_Resume.pdf',
  email: 'haribalajiv20@gmail.com',
  phone: '+91 90437 98630',
  github: 'https://github.com/haribalajiv',
  githubHandle: '@haribalajiv',
  linkedin: 'https://www.linkedin.com/in/hari-balaji-v-579629307',
  linkedinHandle: 'Hari Balaji V',
};

export const about = {
  headline: 'An AI student turning curiosity into intelligent systems.',
  paragraphs: [
    'Passionate AI and development enthusiast with strong interest in Artificial Intelligence, Generative AI, LLMs, Machine Learning and Deep Learning. Skilled in developing AI-based solutions for image, text, and data-driven applications. Quick learner, adaptable, and eager to contribute to both AI and development roles while building impactful real-world solutions and growing technical expertise.',
    "I love turning ideas into working AI prototypes — from sign-language translation with CNN + LSTM, to wildfire prediction from satellite data, to LLM-powered document QA. Right now I'm going deeper into LangChain, RAG, and building production-ready AI agents.",
  ],
  interests: [
    'AI Engineer',
    'Generative AI Engineer',
    'Data Scientist',
    'Data Analyst',
  ],
  facts: [
    { label: 'Degree', value: 'B.Tech AI & DS' },
    { label: 'Graduating', value: '2027' },
    { label: 'CGPA', value: '8.22 / 10' },
    { label: 'Focus', value: 'Generative AI' },
  ],
};

export const skillGroups = [
  { title: 'Programming', items: ['Python', 'SQL'] },
  { title: 'Machine Learning', items: ['ML Algorithms', 'Model Training', 'Evaluation'] },
  { title: 'Deep Learning', items: ['CNN', 'LSTM', 'Neural Networks'] },
  { title: 'Generative AI', items: ['Transformers', 'LangChain', 'Hugging Face', 'LLMs'] },
  { title: 'Computer Vision', items: ['OpenCV', 'Image Processing'] },
  { title: 'Tools & Platforms', items: ['Power BI', 'Git', 'GitHub', 'Copilot', 'Canva AI'] },
];

export type TechItem = { name: string; slug?: string; color?: string };

export const techStack: TechItem[] = [
  { name: 'Python', slug: 'python', color: '3776AB' },
  { name: 'SQL' },
  { name: 'Machine Learning' },
  { name: 'Deep Learning' },
  { name: 'Generative AI' },
  { name: 'LangChain', slug: 'langchain', color: '1C3C3C' },
  { name: 'Hugging Face', slug: 'huggingface', color: 'FFD21E' },
  { name: 'Transformers' },
  { name: 'OpenCV', slug: 'opencv', color: '5C3EE8' },
  { name: 'Power BI', slug: 'powerbi', color: 'F2C811' },
  { name: 'Git', slug: 'git', color: 'F05032' },
  { name: 'GitHub', slug: 'github', color: 'ffffff' },
  { name: 'ChatGPT', slug: 'openai', color: '10A37F' },
  { name: 'Claude AI', slug: 'anthropic', color: 'D97757' },
  { name: 'Perplexity', slug: 'perplexity', color: '20B8CD' },
  { name: 'Midjourney' }, // no icon in Simple Icons library
  { name: 'Copilot', slug: 'githubcopilot', color: 'ffffff' },
];

export const projects = [
  {
    index: '01',
    title: 'Sign Language Translator using Gen AI',
    image:
      'https://images.unsplash.com/photo-1585577028863-35a3349c60db?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxzaWduJTIwbGFuZ3VhZ2UlMjBoYW5kc3xlbnwwfHx8fDE3ODI0OTcwOTB8MA&ixlib=rb-4.1.0&q=85',
    problem:
      'Bridging the communication gap for the hearing-impaired community by translating sign-language gestures into natural text in real time.',
    features: [
      'Real-time gesture capture & detection',
      'CNN-based spatial feature extraction',
      'LSTM-based temporal sequence modeling',
      'LLM-powered natural-language output',
    ],
    learnings: [
      'Hands-on experience combining vision models with LLMs',
      'Understanding of CNN + LSTM hybrid pipelines',
      'Real-world Gen AI integration workflow',
    ],
    stack: ['Python', 'CNN', 'LSTM', 'Google LLMs', 'OpenCV', 'Deep Learning'],
  },
  {
    index: '02',
    title: 'Wildfire Disaster Management using CNN',
    image:
      'https://images.unsplash.com/photo-1641667838410-b257ca266e38?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHx3aWxkZmlyZSUyMGZvcmVzdCUyMGRhcmt8ZW58MHx8fHwxNzgyNDk3MDkxfDA&ixlib=rb-4.1.0&q=85',
    problem:
      'Predicting wildfire risk early to support disaster response teams in mitigating large-scale forest damage.',
    features: [
      'Satellite image classification',
      'Weather time-series fusion',
      'Risk-zone heat-map output',
      'Multi-modal CNN + LSTM pipeline',
    ],
    learnings: [
      'Working with geospatial & weather data',
      'Multi-modal deep-learning architectures',
      'Building socially impactful AI',
    ],
    stack: ['Python', 'CNN', 'LSTM', 'Satellite Imagery', 'Deep Learning'],
  },
  {
    index: '03',
    title: 'AI-Based Document Question Answering System',
    image:
      'https://images.unsplash.com/photo-1580628119872-27a3716cfa9c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGF0YSUyMGdyaWQlMjBkYXJrfGVufDB8fHx8MTc4MjQ5NzA5MHww&ixlib=rb-4.1.0&q=85',
    problem:
      'Helping users extract precise answers from long documents without manually reading through every page.',
    features: [
      'Document upload & parsing',
      'Context-aware question answering',
      'LLM-powered semantic search',
      'Clean, interactive interface',
    ],
    learnings: [
      'Practical RAG-style architecture exposure',
      'LLM integration for real document workflows',
      'End-to-end NLP application design',
    ],
    stack: ['Python', 'NLP', 'LLMs', 'LangChain', 'Hugging Face'],
  },
];

export const experiences = [
  {
    role: 'AI / Computer Vision Intern',
    company: 'Edge Matrix',
    location: 'Madurai',
    points: [
      'Learned the basics of computer vision using OpenCV.',
      'Gained knowledge of core Machine Learning algorithms.',
    ],
  },
  {
    role: 'AI & ML Intern',
    company: 'Global Knowledge & Technologies',
    location: 'Bangalore',
    points: [
      'Learned about Transformers and their inner workings.',
      'Explored 15 AI tools and their practical applications.',
      'Learned about the end-to-end ML pipeline and workflow.',
    ],
  },
];

export const certifications = [
  { title: 'Gen AI — Using Transformers, LangChain, Hugging Face', issuer: 'Udemy' },
  { title: 'Complete Data Science Course', issuer: 'Apollo Institute' },
  { title: 'Data Analyst Course and Tools', issuer: 'Udemy' },
];

export const learning = [
  'Generative AI',
  'Large Language Models',
  'LangChain',
  'Hugging Face',
  'RAG',
  'AI Agents',
  'Prompt Engineering',
  'Streamlit',
  'Git & GitHub',
];

export const education = [
  {
    period: '2023 – 2027 (Expected)',
    degree: 'B.Tech — Artificial Intelligence and Data Science',
    institution: 'Velammal College of Engineering and Technology, Madurai',
    score: 'CGPA: 8.22 (up to 6th semester)',
  },
  {
    period: '2022 – 2023',
    degree: '12th Grade (ISC)',
    institution: 'Vikaasa Schools Heritage Campus, Madurai',
    score: 'Percentage: 81.6%',
  },
  {
    period: '2020 – 2021',
    degree: '10th Grade (ICSE)',
    institution: 'Vikaasa Schools Heritage Campus, Madurai',
    score: 'Percentage: 90%',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
