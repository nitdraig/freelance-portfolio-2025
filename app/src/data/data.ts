import {
  CheckCircle,
  Heart,
  Layers,
  Target,
  TrendingUp,
  Users,
  Award,
  Clock,
  ExternalLink,
  Github,
  Zap,
} from "lucide-react";
export const projects = [
  {
    slug: "around-notes-app",
    title: {
      en: "Around Notes app",
      es: "Around Notes app",
    },
    shortDescription: {
      en: "AI-powered HIPAA-safe platform for inpatient medicine",
      es: "Plataforma IA segura HIPAA para medicina hospitalaria",
    },
    description: {
      en: "Around Notes is a HIPAA-safe, browser-based AI platform built by physicians for inpatient medicine. It generates quality medical notes, provides access to PHI secure AI models, and streamlines clinical workflows. As part of the development team, I contributed to frontend development focusing on UX/UI, performance optimization, and key integrations including dashboard, note modules, EKG and radiology modules, and user management systems.",
      es: "Around Notes es una plataforma de IA segura HIPAA, basada en navegador, construida por médicos para medicina hospitalaria. Genera notas médicas de calidad, proporciona acceso a modelos de IA seguros para PHI, y optimiza los flujos de trabajo clínicos. Como parte del equipo de desarrollo, contribuí al desarrollo frontend enfocándome en UX/UI, optimización de rendimiento, e integraciones clave incluyendo dashboard, módulos de notas, módulos de EKG y radiología, y sistemas de gestión de usuarios.",
    },
    year: 2025,
    icon: Award,
    color: "from-purple-800 to-purple-900",
    tags: ["React", "TypeScript", "UX/UI", "Performance", "Healthcare", "AI"],
    image:
      "https://res.cloudinary.com/draig/image/upload/v1758833734/portolio-personal/imagen_2025-09-25_175532322_kh8pth.png",
    demoUrl: "https://app.aroundnotes.ai",

    challenge: {
      es: "Como parte del equipo, contribuir al desarrollo de una plataforma médica compleja que cumpla con HIPAA, integrando múltiples módulos especializados (notas clínicas, EKG, radiología) mientras mantenemos una experiencia de usuario intuitiva para profesionales médicos en entornos de alta presión. Mi desafío específico incluía optimizar el rendimiento para datos médicos sensibles y crear interfaces que aceleren los flujos de trabajo clínicos.",
      en: "As part of the team, contribute to developing a complex HIPAA-compliant medical platform integrating multiple specialized modules (clinical notes, EKG, radiology) while maintaining an intuitive user experience for medical professionals in high-pressure environments. My specific challenge included optimizing performance for sensitive medical data and creating interfaces that accelerate clinical workflows.",
    },
    solution: {
      es: "Contribuí al desarrollo de una arquitectura frontend modular usando React y TypeScript, trabajando en interfaces especializadas para cada módulo médico. Participé en el desarrollo del dashboard central, colaboré en la optimización del rendimiento para manejo de datos PHI, contribuí a los sistemas de gestión de usuarios, y creé componentes reutilizables que aceleran el desarrollo del equipo. Ocasionalmente colaboré en backend para integraciones clave de funcionalidades críticas.",
      en: "Contributed to developing a modular frontend architecture using React and TypeScript, working on specialized interfaces for each medical module. Participated in central dashboard development, collaborated on performance optimization for PHI data handling, contributed to user management systems, and created reusable components that accelerate team development. Occasionally collaborated on backend for key integrations of critical functionalities.",
    },
    results: {
      es: [
        "Dashboard médico intuitivo y funcional",
        "Módulos especializados (notas, EKG, radiología)",
        "Cumplimiento HIPAA y seguridad PHI",
        "Performance optimizado para datos médicos",
        "Sistema de gestión de usuarios robusto",
        "Arquitectura modular y escalable",
      ],
      en: [
        "Intuitive and functional medical dashboard",
        "Specialized modules (notes, EKG, radiology)",
        "HIPAA compliance and PHI security",
        "Optimized performance for medical data",
        "Robust user management system",
        "Modular and scalable architecture",
      ],
    },
    featured: true,
    status: "active",
  },
  {
    slug: "around-notes-landing",
    title: {
      en: "Around Notes Landing Page",
      es: "Around Notes Landing Page",
    },
    shortDescription: {
      en: "A landing page for Around Notes App",
      es: "Una Landing page para Around Notes App",
    },
    description: {
      en: "A landing page for the app 'Around Notes', provides a platform for users to create and manage medical notes. The application features a modern design and utilizes various technologies to provide a seamless user experience.",
      es: "Una Landing page para la aplicación 'Around Notes', a una plataforma para que usuarios médicos creen y administren notas médicas. La aplicación presenta un diseño moderno y utiliza varias tecnologías para proporcionar una experiencia de usuario perfecta.",
    },
    year: 2025,
    icon: Award,
    color: "from-purple-300 to-purple-500",
    tags: ["Astro", "Tailwind", "SEO", "Performance"],
    image:
      "https://res.cloudinary.com/draig/image/upload/v1756146189/portolio-personal/around-notes_dziady.webp",
    demoUrl: "https://aroundnotes.ai",

    challenge: {
      es: "Desarrollar una landing page atractiva y funcional para Around Notes, que comunique efectivamente las características y beneficios de la aplicación. Además, la página debe estar optimizada para SEO y rendimiento. El proyecto debe completarse en un plazo de 2 semanas.",
      en: "Develop an attractive and functional landing page for Around Notes, which effectively communicates the characteristics and benefits of the application. In addition, the page must be optimized for SEO and performance. The project must be completed within 2 weeks.",
    },
    solution: {
      es: "Una landing page funcional, escalable, optimizada para SEO y rendimiento, que presenta de manera clara y atractiva las características y beneficios de Around Notes. La página está diseñada para ser responsiva y accesible en todos los dispositivos.",
      en: "A functional landing page, scalable, optimized for SEO and performance, which clearly and attractively presents the characteristics and benefits of Around Notes. The page is designed to be responsive and accessible on all devices.",
    },
    results: {
      es: [
        "Landing page funcional",
        "SEO optimizado",
        "Perfomance optimizado",
        "Responsive",
      ],
      en: [
        "Landing Page Functional",
        "SEO optimized",
        "Optimized perfomance",
        "Responsive",
      ],
    },
    featured: true,
    status: "active",
  },
  {
    slug: "sigii-app",
    title: {
      en: "Sigii App | Transforming the learning experience",
      es: "Sigii App | Transformando la experiencia de aprendizaje",
    },
    shortDescription: {
      en: "Comprehensive system for the management of smart institutions",
      es: "Sistema Integral para la Gestion de Instituciones Inteligentes",
    },
    description: {
      en: "Web platform developed for management of institutions, teachers, and students focused on public schools, private and university education. It is part of a larger ecosystem that seeks to facilitate the integration of talents into modernity.",
      es: "Plataforma web desarrollada para gestión de instituciones, profesores, y alumnos enfocado en escuelas públicas, privadas de educación secundaria y universitaria. Forma parte de un ecosistema más grande que busca facilitar la integración de los talentos a la modernidad. ",
    },
    icon: Layers,
    color: "from-blue-700 to-gray-600",
    tags: ["Next.js", "Tailwind", "TypeScript", "Express", "MongoDB"],
    image:
      "https://res.cloudinary.com/draig/image/upload/v1751938412/excelso/sigii/imagen_2025-07-07_223330718_ikhfnm.png",
    demoUrl: "https://sigii.tips",
    challenge: {
      es: "Construir en un mes una plataforma de gestión institucional completa que contenga herramientas interconectadas formando un ecosistema integral que permita abordar cada etapa del desarrollo humano.",
      en: "Build in a month a complete institutional management platform containing interconnected tools forming an integral ecosystem that allows each stage of human development to be addressed.",
    },
    solution: {
      es: "MVP completo funcionando en 4 semanas, con estructura modular que permite escalar a futuro a múltiples dependencias e integrar nuevas herramientas revolucionarias.",
      en: "Complete MVP running in 4 weeks, with modular structure that allows you to climb to multiple units and integrate new revolutionary tools.",
    },
    results: {
      es: [
        "MVP funcional en 4 semanas",
        "Chatbots funcionales",
        "Integración de herramientas IA",
        "Modularidad",
        "Escalabilidad",
      ],
      en: [
        "MVP functional in 4 weeks",
        "Functional chatbots",
        "INTEGRATION OF TOOLS IA",
        "Modularity",
        "Scalability",
      ],
    },
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
    challenge: {
      es: "Conectar talento con empresas potenciadoras de talento, facilitando transacción, interacción y colaboración.",
      en: "Connect talent with talent enhancement companies, facilitating transaction, interaction and collaboration.",
    },
    solution: {
      es: "MVP funcional, escalable, que integra IA para análisis de CV, recomendación de certificaciones, preparación para entrevistas, completado de inputs de formularios de búsqueda de talento.",
      en: "MVP functional, scalable, which integrates for CV analysis, certifications recommendation, preparation for interviews, completed in inputs of talent search forms.",
    },
    results: {
      es: [
        "MVP funcional",
        "Correcta integración de IA",
        "Plataforma adaptable",
        "Constante aparición en buscadores",
      ],
      en: [
        "Functional mvp",
        "Correct integration of AI",
        "Adaptable Platform",
        "Constant appearance in search engines",
      ],
    },
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
    challenge: {
      es: "Crear una plataforma de dos lados, una para usuarios simples otra para entidades y/o profesionales que busquen una herramienta para la gestión de informes de impacto ambiental.",
      en: "Create a two-sides platform, one for simple users for entities and/or professionals looking for a tool for the management of environmental impact reports.",
    },
    solution: {
      es: "Plataforma completa, donde se pueden revisar diversos proyectos de extracción de recursos naturales que esten generando impacto ambiental. Y con jema IA poder generar un resumen simplificado con puntos de mejora y puntos criticos del proyecto.",
      en: "Complete platform, where you can review various projects for the extraction of natural resources that are generating environmental impact. And with chiefs to generate a simplified summary with improvement points and critical points of the project.",
    },
    results: {
      es: [
        "MVP en menos de 8 semanas",
        "Agente de IA integrado en el lado del cliente",
        "Plataforma escalable",
      ],
      en: [
        "MVP in less than 8 weeks",
        "Agent of the integrated on the client's side",
        "Scalable platform",
      ],
    },

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
    challenge: {
      es: "Huellitas-CTGNA necesitaba una web para mostrar sus avances, recaudar fondos y facilitar la adopción de mascotas en la zona donde están actualmente funcionando.",
      en: "Huellitas-CTGNA needed a website to show their progress, raise funds and facilitate the adoption of pets in the area where they are currently working.",
    },
    solution: {
      es: "Se creo para Huellitas una plataforma web completa que permite mediante un CMS crear, modificar y eliminar información clave de la misma web. Mediante un diseño aprobado por el equipo de Huellitas se logro avanzar y finalizar la creación, despliegue y constante mantenimiento de la plataforma.",
      en: "Strikes were created for Hueltes a complete web platform that allows through a CMS to create, modify and eliminate key information from the same website. Through a design approved by the Huellitas team, the creation, deployment and constant maintenance of the platform was made.",
    },
    results: {
      es: [
        "Incremento de la presencia web",
        "Facilitación de adopción",
        "Recaudación de fondos simplificada",
        "Mantenimiento constante de la página",
      ],
      en: [
        "Increase in web presence",
        "Adoption facilitation",
        "Collection of simplified funds",
        "Constant maintenance of the page",
      ],
    },
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
    demoUrl: "https://dcconsultora.com.ar",

    challenge: {
      es: "DC consultora necesitaba un sitio exclusivo, presencia en google y un diseño adaptable a múltiples dispositivos.",
      en: "DC consultora needed an exclusive site, presence on Google and a design adaptable to multiple devices.",
    },
    solution: {
      es: "Después de reuniones con el cliente se llegó a la conclusión de que una landing page simple con un diseño único podría facilitar la presencia de la marca en la web, además de generar una impresión única.",
      en: "After meetings with the client, it was concluded that a simple landing page with a unique design could facilitate the presence of the brand on the web, in addition to generating a unique impression.",
    },
    results: {
      es: [
        "Página web adaptable a todos los dispositivos",
        "Incremento de la presencia de la marca en Google",
        "Diseño exclusivo",
        "Mantenimiento constante de la página",
      ],
      en: [
        "Website adaptable to all devices",
        "Increase in the presence of the brand in Google",
        "Exclusive design",
        "Page maintenance constant",
      ],
    },
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
    challenge: {
      es: "La creciente falta de información clara, económica y accesible sobre nutrición, alimentación y creación de recetas hacia necesaria la creación de una herramienta que usara tecnología moderna.",
      en: "The growing lack of clear, economical and accessible information on nutrition, food and creation of recipes towards the creation of a tool that will use modern technology.",
    },
    solution: {
      es: "Una webapp completa que usando IA permite a un usuario consultar recetas con ingredientes que tenga en casa, ofreciéndole un paso a paso, información nutricional y permitiéndole guardar las recetas para verlas a posterior.",
      en: "A complete webpp that using AI allows a user to consult recipes with ingredients you have at home, offering a step by step, nutritional information and allowing you to save the recipes to see them later.",
    },
    results: {
      es: [
        "Newsletter con más de 100 suscriptores",
        "Lanzamiento en tiempo",
        "Escalado sin recursos de 3eros",
        "Aplicación de acceso libre",
      ],
      en: [
        "Newsletter with more than 100 subscribers",
        "Time launch",
        "Scaling without resources",
        "Free access application",
      ],
    },
    featured: false,
    year: 2024,
    status: "active",
  },
  {
    slug: "mailprex",
    title: {
      en: "Mailprex WebApp",
      es: "Mailprex WebApp",
    },
    shortDescription: {
      en: "A SAAS for sending emails",
      es: "Un SAAS para enviar correos",
    },
    description: {
      en: "Mailprex is a web platform designed to simplify the process of sending forms from websites to emails. You can easily integrate a React Hook into your project, to which you pass the minimum data that allow the shipping and content of the form to reach your chosen email without major inconveniences.",
      es: "Mailprex es una plataforma web diseñada para simplificar el proceso de envío de formularios desde sitios web a correos electrónicos. Puedes integrar fácilmente un React Hook a tu proyecto, al cual le pasas los datos mínimos que permiten el envío y el contenido del formulario llega a tu correo elegido sin mayores inconvenientes.",
    },
    icon: Heart,
    color: "from-blue-600 to-blue-800",
    tags: ["Next.js", "Express.js", "Node.js", "Tailwind", "TypeScript"],
    image:
      "https://res.cloudinary.com/draig/image/upload/v1718564493/mailprex/ecqm348liaxh626yzscs.png",
    demoUrl: "https://mailprex.excelso.xyz",
    githubUrl: "https://github.com/nitdraig/mailprex",
    challenge: {
      es: "Entre múltiples landing pages que administraba tenia siempre el inconveniente de crear desde 0 una sección de contacto, donde se enviasen emails de forma simple a través de un formulario de contacto.",
      en: "Among multiple landing pages that he administered always had the inconvenience of creating from 0 a contact section, where emails were sent simply through a contact form.",
    },
    solution: {
      es: "Se construyó una solución de SAAS, que esta deployada en vercel, posee un paquete de NPM, una pagina de documentación y una API propia.",
      en: "A SAAS solution was built, which is deployed in Vercel, has an NPM package, a documentation page and its own API.",
    },
    results: {
      es: [
        "Envio simplificado de emails",
        "Fácil implementación",
        "Capa gratuita extendida",
        "Seguridad web",
      ],
      en: [
        "Simplified emails",
        "Easy implementation",
        "Extended free layer",
        "Web security",
      ],
    },
    featured: false,
    year: 2024,
    status: "active",
  },
];
