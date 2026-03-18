export const NAVIGATION = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS = [
  { name: "TypeScript", level: 90, icon: "💻" },
  { name: "React", level: 85, icon: "⚛️" },
  { name: "Next.js", level: 80, icon: "▲" },
  { name: "Node.js", level: 75, icon: "🟢" },
  { name: "Python", level: 70, icon: "🐍" },
  { name: "Tailwind CSS", level: 85, icon: "🎨" },
  { name: "PostgreSQL", level: 65, icon: "🐘" },
  { name: "Docker", level: 60, icon: "🐳" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce-demo.com",
    image: "/projects/ecommerce.jpg",
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses and sentiment analysis.",
    tech: ["React", "Node.js", "Socket.io", "OpenAI API"],
    github: "https://github.com/username/ai-chat",
    demo: "https://ai-chat-demo.com",
    image: "/projects/ai-chat.jpg",
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with drag-and-drop functionality and team analytics.",
    tech: ["Vue.js", "Express", "MongoDB", "Chart.js"],
    github: "https://github.com/username/task-manager",
    demo: "https://task-manager-demo.com",
    image: "/projects/task-manager.jpg",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts and interactive maps.",
    tech: ["React Native", "Weather API", "Redux", "Maps"],
    github: "https://github.com/username/weather-app",
    demo: "https://weather-app-demo.com",
    image: "/projects/weather.jpg",
  },
  {
    id: 5,
    title: "Social Media Analytics",
    description: "Comprehensive analytics dashboard for social media performance tracking.",
    tech: ["Next.js", "GraphQL", "D3.js", "Redis"],
    github: "https://github.com/username/analytics",
    demo: "https://analytics-demo.com",
    image: "/projects/analytics.jpg",
  },
  {
    id: 6,
    title: "Video Streaming Platform",
    description: "Scalable video streaming service with adaptive bitrate and CDN integration.",
    tech: ["React", "AWS", "FFmpeg", "WebRTC"],
    github: "https://github.com/username/streaming",
    demo: "https://streaming-demo.com",
    image: "/projects/streaming.jpg",
  },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com", icon: "🐙" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
  { name: "Twitter", href: "https://twitter.com", icon: "🐦" },
  { name: "Email", href: "mailto:contact@example.com", icon: "✉️" },
];
