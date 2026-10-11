export const profile = {
  fullName: 'Venkaiah Swamy Kalikaya',
  aka: 'Venky',
  title: 'Software Developer & AI Enthusiast',
  tagline:
    'B.Tech CSE student who loves solving DSA problems and building fast, clean web experiences — now exploring AI.',
  email: 'venkaiahkalikaya123@gmail.com',
}

export const about = {
  bio: [
    "I'm a B.Tech Computer Science student at QIS College of Engineering and Technology who loves solving DSA problems and building for the web. I work across Java, Python, and JavaScript — turning ideas into fast, clean digital experiences.",
    "Currently exploring AI while sharpening my problem-solving on LeetCode, CodeChef, and HackerRank. If you've got an interesting problem or project, let's talk.",
  ],
}

export const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'QIS College of Engineering and Technology',
    years: '2023 – 2027',
  },
  {
    degree: 'Intermediate (MPC)',
    school: 'AKVK Junior College, Ongole',
    years: '2021 – 2023',
  },
  {
    degree: 'SSC',
    school: 'AKZPHS, Valluru',
    years: '2021',
  },
]

export const skills = [
  {
    title: 'Languages',
    icon: '💻',
    items: ['Java', 'Python', 'C', 'JavaScript'],
  },
  {
    title: 'Web Development',
    icon: '🌐',
    items: ['HTML', 'CSS', 'JavaScript', 'React (learning)'],
  },
  {
    title: 'Problem Solving (DSA)',
    icon: '🧠',
    items: ['LeetCode', 'CodeChef', 'HackerRank'],
  },
  {
    title: 'CS Core',
    icon: '🖥️',
    items: ['DBMS', 'Operating Systems', 'Computer Networks (learning)'],
  },
]

export const codingProfiles = [
  {
    name: 'LeetCode',
    icon: '⚡',
    username: 'venkaiahkalikaya123',
    url: 'https://leetcode.com/u/venkaiahkalikaya123/',
    stats: { headline: '260', label: 'Problems Solved' },
    sub: ['196 Easy', '63 Medium', '1 Hard'],
  },
  {
    name: 'CodeChef',
    icon: '🍽️',
    username: 'venkey30',
    url: 'https://www.codechef.com/users/venkey30',
    stats: { headline: '512', label: 'Problems Solved' },
    sub: ['1031 Rating', 'Gold Problem Solver', 'Div 4'],
  },
  {
    name: 'HackerRank',
    icon: '🏆',
    username: 'venkaiahkalikay1',
    url: 'https://www.hackerrank.com/profile/venkaiahkalikay1',
    stats: { headline: '5★', label: 'Python Rating' },
    sub: ['Problem Solving', 'C++', 'Java', 'C'],
  },
]

export const projects = [
  {
    slug: 'docent-ai',
    title: 'Docent — AI Document Q&A',
    year: '2026',
    emoji: '📄',
    description:
      'Chat with any PDF and get cited answers. RAG pipeline (LangChain + FAISS + MiniLM embeddings) with streamed LLM responses, page-level citations, OCR for scanned pages, and multi-provider support (Groq, Gemini, Grok).',
    github: 'https://github.com/Venky656/docent-ai',
    live: null,
    linkType: 'github',
    image: null,
    tags: ['Python', 'Flask', 'LangChain', 'FAISS', 'Groq', 'RAG'],
    gradient: 'from-blue-500/25 via-primary/20 to-background',
  },
  {
    slug: 'nature-web',
    title: 'Nature Web',
    year: '2026',
    emoji: '🌿',
    description:
      'A responsive static website built with HTML5 and CSS3 — my early learning project, demonstrating semantic markup, styling and mobile-friendly responsive design.',
    github: 'https://github.com/Venky656/nature-web',
    live: 'https://nature-responsive-web.vercel.app/',
    image: '/assets/nature.webp',
    linkType: 'website',
    tags: ['HTML5', 'CSS3', 'Responsive Design'],
    gradient: 'from-green-500/25 via-primary/20 to-background',
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    year: '2025',
    emoji: '🖥️',
    description:
      "My first-ever project — a responsive portfolio with dark/light theme and multiple accent colors, built from scratch with React, Tailwind CSS and Framer Motion.",
    github: 'https://github.com/Venky656',
    live: null,
    linkType: 'github',
    image: '/assets/portfolio.webp',
    tags: ['React', 'TailwindCSS', 'JavaScript', 'Framer Motion'],
    gradient: 'from-primary/40 via-accent-2/25 to-background',
  },
  {
    slug: 'yoga-loading',
    title: 'Yoga Loading Page',
    year: '2026',
    emoji: '🧘',
    description:
      'A calm, animated yoga-themed landing & loading experience built with pure frontend — smooth animations and a serene visual style.',
    github: 'https://github.com/Venky656/Yoga--Loading-page',
    live: 'https://yoga-loading-page.vercel.app/',
    image: '/assets/yoga.webp',
    linkType: 'website',
    tags: ['HTML', 'CSS', 'JavaScript', 'Animations'],
    gradient: 'from-accent-2/30 via-primary/20 to-background',
  },
  {
    slug: 'travel',
    title: 'Travel',
    year: '2026',
    emoji: '✈️',
    description:
      'A modern travel landing page with a clean layout and smooth, responsive design — built with pure frontend to showcase destinations in style.',
    image: '/assets/travel.webp',
    github: 'https://github.com/Venky656/travel',
    live: 'https://travel-pi-ashy.vercel.app/',
    linkType: 'website',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    gradient: 'from-cyan-500/25 via-primary/20 to-background',
  },
]
