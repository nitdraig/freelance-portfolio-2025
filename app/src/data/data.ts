import {
  CheckCircle,
  Heart,
  Layers,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
export const projects = [
  {
    slug: "sigii-app",
    title: {
      en: "Sigii App | Transforming the learning experience",
      es: "Sigii App | Transformando la experiencia de aprendizaje",
    },
    shortDescription: {
      en: "Transforming the learning experience into your institution with our personalized educational platform.",
      es: "Transformando la experiencia de aprendizaje en su institución con nuestra plataforma educativa personalizada.",
    },
    description: {
      en: "Web platform developed for management of institutions, teachers, and students focused on public schools, private and university education. It is part of a larger ecosystem that seeks to facilitate the integration of talents into modernity.",
      es: "Plataforma web desarrollada para gestión de instituciones, profesores, y alumnos enfocado en escuelas públicas, privadas de educación secundaria y universitaria. Forma parte de un ecosistema más grande que busca facilitar la integración de los talentos a la modernidad. ",
    },
    icon: Layers,
    color: "from-blue-700 to-gray-600",
    tags: ["Next.js", "Tailwind", "TypeScript", "Express"],
    image:
      "https://res.cloudinary.com/draig/image/upload/v1751938412/excelso/sigii/imagen_2025-07-07_223330718_ikhfnm.png",
    demoUrl: "https://sigii.tips",

    featured: false,
    year: 2024,
    status: "active",
  },
  {
    slug: "mining-talent-net",
    title: {
      en: "Mining Talent Net",
      es: "Mining Talent Net",
    },
    shortDescription: {
      en: "Platform for mining professionals",
      es: "Plataforma para profesionales mineros",
    },
    description: {
      en: "Connects mining companies with talent. Uses AI to match profiles with job offers.",
      es: "Conecta empresas mineras con talento. Usa IA para emparejar perfiles con ofertas laborales.",
    },
    year: 2025,
    icon: Zap,
    color: "from-yellow-600 to-yellow-800",
    tags: ["Next.js", "Express.js", "TypeScript", "Cloudinary"],
    image:
      "https://res.cloudinary.com/draig/image/upload/v1748037652/excelso/mtn/wj0t0hauytbtocgno4bx.png",
    demoUrl: "https://miningtalent.net",
    githubUrl: "https://github.com/excelso-tech",
    featured: true,
    status: "active",
  },
  {
    slug: "excelso-tech-group",
    title: {
      en: "Excelso | A Tech Group",
      es: "Excelso | Grupo Tecnológico",
    },
    shortDescription: {
      en: "Driving innovation and sustainability",
      es: "Impulsando innovación y sostenibilidad",
    },
    description: {
      en: "Tech collective focused on digital solutions, sustainability and innovation.",
      es: "Colectivo tecnológico enfocado en soluciones digitales, sostenibilidad e innovación.",
    },
    icon: TrendingUp,
    color: "from-sky-600 to-sky-800",
    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    image:
      "https://res.cloudinary.com/draig/image/upload/v1751938633/excelso/imagen_2025-07-07_223712650_zyyjq9.png",
    demoUrl: "https://excelso.xyz",
    githubUrl: "https://github.com/excelso-tech",
    featured: true,
    year: 2025,
    status: "active",
  },
  {
    slug: "jema-ai-impact",
    title: {
      en: "JEMA | AI for Impact",
      es: "JEMA | IA para el Impacto",
    },
    shortDescription: {
      en: "AI for environmental transparency",
      es: "IA para transparencia ambiental",
    },
    description: {
      en: "AI agent for promoting sustainability and transparency in extractive industries.",
      es: "Agente IA que promueve sostenibilidad y transparencia en industrias extractivas.",
    },
    icon: CheckCircle,
    color: "from-green-600 to-green-800",
    tags: ["Next.js", "TypeScript", "IA", "Cloudinary"],
    image:
      "https://res.cloudinary.com/draig/image/upload/v1743035227/portolio-personal/u7huy9ubnibs978b6pl3.png",
    demoUrl: "https://jema.excelso.xyz",
    // githubUrl: "https://github.com/nitraig/jema",
    featured: true,
    year: 2025,
    status: "active",
  },
  {
    slug: "huellitasctg-webapp",
    title: {
      en: "HuellitasCTG WebApp",
      es: "HuellitasCTG WebApp",
    },
    shortDescription: {
      en: "Animal rescue NGO platform",
      es: "Plataforma ONG de rescate animal",
    },
    description: {
      en: "Website for an NGO rescuing street animals. Led product and project management.",
      es: "Sitio web para ONG de rescate animal. Lideré gestión de producto y proyecto.",
    },
    icon: Heart,
    color: "from-pink-600 to-pink-800",
    tags: ["Next.js", "Strapi", "Tailwind", "TypeScript"],
    image:
      "https://res.cloudinary.com/draig/image/upload/v1732390002/portolio-personal/vtk7r8pk8dt3sxozdz9s.png",
    demoUrl: "https://www.huellitasctgna.com",
    githubUrl: "https://github.com/inkua/Huellitas",
    featured: false,
    year: 2024,
    status: "active",
  },
  {
    slug: "dc-landing-page",
    title: {
      en: "DC Consultura | Exclusive web",
      es: "DC Consultura | Web exclusiva",
    },
    shortDescription: {
      en: "A exclusive website to DC consultora",
      es: "Una web exclusiva para DC consultora",
    },
    description: {
      en: "A personalized website and with an exclusive design, focused on the consultant, their needs and along with the client's criteria. It is a freelance job. In addition to programming and design, I collaborated in the creation of social networks, logos, online presence, page maintenance, domain and optimization of SEO.",
      es: "Una web personalizada y con un diseño exclusivo, enfocado en la consultora, sus necesidades y a la par de los criterios del cliente. Es un trabajo freelance. Además de la programación y diseño, colaboré en la creación de las redes sociales, logos, presencia en línea, mantenimiento de la página, dominio y optimización de SEO.",
    },
    icon: Target,
    color: "from-indigo-600 to-indigo-800",
    tags: ["Nextjs", "Tailwind", "Typescript"],
    image:
      "https://res.cloudinary.com/draig/image/upload/v1709857812/freelance/dc-consultora/jeyhi2cocajc7ouv4cnx.png",
    demoUrl: "https://roger.agustin.top",
    githubUrl: "https://github.com/nitdraig/roger",
    featured: false,
    year: 2024,
    status: "active",
  },
  {
    slug: "fuddy-app",
    title: {
      en: "Fuddy App | Economic and accessible recipes",
      es: "Fuddy App | Recetas económicas y accesibles",
    },
    shortDescription: {
      en: "Economic recipes with AI",
      es: "Recetas de económicas con IA",
    },
    description: {
      en: "Web and Mobile application that makes use of artificial intelligence, designed to offer personalized recommendations of healthy and accessible recipes, ask you to enter your ingredients you have at home. Based on these criteria, the website analyzes the user's needs and suggests recipe options, taking into account factors such as diseases, allergies, and food preferences.",
      es: "Aplicación web y mobile que hace uso de inteligencia artificial, diseñada para ofrecer recomendaciones personalizadas de recetas saludables y accesibles, te solicita ingresar tus ingredientes que tengas en casa. Basado en esos criterios, la web analiza las necesidades del usuario y sugiere opciones de recetas, teniendo en cuenta factores como enfermedades, alergias, y preferencias alimenticias.",
    },
    icon: Layers,
    color: "from-gray-600 to-gray-800",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    image:
      "https://res.cloudinary.com/draig/image/upload/v1702086792/fuddy/fpxgbfolktuj2le7u4sf.png",
    demoUrl: "https://fuddy.click",

    featured: false,
    year: 2024,
    status: "active",
  },
];
