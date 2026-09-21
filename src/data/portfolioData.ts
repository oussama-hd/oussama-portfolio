export interface ProjectItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
  category: "All" | "Insurance SaaS" | "E-Commerce" | "Full Stack" | "Frontend";
  technologies: string[];
  metrics: string;
  client: string;
  year: string;
  liveDemoUrl: string;
  codeUrl?: string;
  fullOverview?: string;
}

export interface ExperienceDetail {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const PERSONAL_INFO = {
  name: "MOHAMMADI OUSSAMA",
  shortName: "Oussama",
  title: "Senior Frontend & Full Stack Developer",
  location: "Setif, Algeria",
  email: "oussama.mohammadi19@gmail.com",
  phone: "+213 775 25 53 18",
  github: "https://github.com/oussama-hd",
  linkedin: "https://linkedin.com",
  summary:
    "Senior Frontend/Full Stack Developer with more than 6 years of experience in creating and deploying reliable web apps. Highly skilled in turning requirements into efficient solutions that ensure future maintainability and reliability.",
  availability: "Available for Senior / Lead Roles",
  education: {
    degree: "Master’s Degree (Professional) in Information & Communication Sciences and Technologies",
    institution: "Abdelhamid Mehri University of Constantine 2",
    location: "Constantine, Algeria",
    period: "09/2017 - 09/2019",
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Fluent" },
    { name: "English", level: "Professional Working Proficiency" },
  ],
};

export const HERO_STATS = [
  { id: "1", value: "7+ Years", label: "Professional Experience", position: "top-center" },
  { id: "2", value: "30k+", label: "E-Commerce Users Served", position: "top-right" },
  { id: "3", value: "90%", label: "Unit Test Coverage", position: "bottom-left" },
  { id: "4", value: "100%", label: "Production Delivery Rate", position: "bottom-right" },
];

export const BAR_STATS = [
  { id: "years", value: "7+ Years", label: "Engineering Experience" },
  { id: "users", value: "30k+", label: "Active Platform Users" },
  { id: "coverage", value: "90%", label: "Test Coverage Achieved" },
  { id: "clients", value: "Enterprise", label: "Alliance, MacirVie & B-Link" },
];

export const TRUSTED_COMPANIES = [
  { name: "Alliance Assurances", key: "alliance" },
  { name: "MacirVie", key: "macirvie" },
  { name: "B-link Solutions", key: "blink" },
  { name: "Wissal Store", key: "wissal" },
  { name: "Tekkeys", key: "tekkeys" },
  { name: "G.K Promoteur", key: "gk" },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-alliance-ec",
    badge: "Dedicated Client Portal",
    title: "Client Portal — Alliance Assurances",
    description:
      "Digital client portal for Alliance Assurances: contract management, online quotes in 2 minutes, claims declaration, and secure payment processing.",
    imageUrl: "/images/alliance-client.png",
    category: "Insurance SaaS",
    technologies: ["Angular", "TypeScript", "Angular Material", "REST APIs", "OAuth 2.0"],
    metrics: "Online Quotes in 2 Minutes",
    client: "Alliance Assurances / B-link Solutions",
    year: "2025",
    liveDemoUrl: "https://uat.allianceassurances.com.dz/ec/#/connexion",
    codeUrl: "https://github.com/oussama-hd",
    fullOverview:
      "Design and development of Alliance Assurances' online client portal. The application enables policyholders to view quotes, manage active contracts, file claims with supporting documents, and pay premiums through secure banking gateways.",
  },
  {
    id: "proj-alliance-portal",
    badge: "Insurance Company Portal",
    title: "Alliance Assurances — Your Trusted Insurer",
    description:
      "Corporate website and subscription portal for individuals and businesses with instant quotes in 2 minutes and 24/7 virtual ALIA assistance.",
    imageUrl: "/images/alliance-home.png",
    category: "Insurance SaaS",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Chatbot"],
    metrics: "24/7 Support & 2-Minute Quotes",
    client: "Alliance Assurances",
    year: "2025",
    liveDemoUrl: "https://allianceassurances.com.dz/",
    codeUrl: "https://github.com/oussama-hd",
    fullOverview:
      "Official portal of a licensed private insurance company in Algeria. Features auto, home, health, travel, and fleet insurance offerings with integrated intelligent conversational assistant.",
  },
  {
    id: "proj-macirvie",
    badge: "Life Insurance Portal",
    title: "Macir Vie — Leader in Life Insurance",
    description:
      "Modern web platform for life insurance subscriptions and offerings: travel, health, accident, and long-term protection in Algeria.",
    imageUrl: "/images/macirvie.png",
    category: "Insurance SaaS",
    technologies: ["Angular", "TypeScript", "Angular Material", "REST APIs", "RxJS"],
    metrics: "76K+ Subscriptions & 300+ Agencies",
    client: "MacirVie / B-link Solutions",
    year: "2025",
    liveDemoUrl: "https://www.macirvie.com/",
    codeUrl: "https://github.com/oussama-hd",
    fullOverview:
      "Development of Macir Vie's official platform. Responsive and smooth interface with optimized user journey for immediate online subscription, partner agency geolocation, and coverage simulator.",
  },
  {
    id: "proj-macirvie-dash",
    badge: "Backoffice Dashboard",
    title: "Dash MacirVie — Premium & Contract Management",
    description:
      "Backoffice application for insurance file management, premium calculations in dinars (DA), administrative validation, and certificate generation.",
    imageUrl: "/images/macirvie-dash.png",
    category: "Insurance SaaS",
    technologies: ["Angular", "TypeScript", "NgRx", "Angular Material", "CI/CD"],
    metrics: "Real-Time Management",
    client: "MacirVie / B-link Solutions",
    year: "2025",
    liveDemoUrl: "https://www.macirvie.com/my",
    codeUrl: "https://github.com/oussama-hd",
    fullOverview:
      "Internal business interface enabling managers and agents to validate contracts, track policy issuance and effective dates, manage expirations, and export accounting summaries instantly with NgRx for predictable state management.",
  },
  {
    id: "proj-blink",
    badge: "Insurtech & ERP / CRM",
    title: "B-LINK — Insurance & Insurtech Solutions",
    description:
      "Innovative insurance software publisher: ERP, CRM, AI agents, and web & mobile health and property damage applications for insurers.",
    imageUrl: "/images/b-link.png",
    category: "Insurance SaaS",
    technologies: ["Angular", "TypeScript", "Flex Layout", "SCSS", "CI/CD"],
    metrics: "Multi-Company Deployments",
    client: "B-link Solutions",
    year: "2025",
    liveDemoUrl: "https://b-link.io/home",
    codeUrl: "https://github.com/oussama-hd",
    fullOverview:
      "Development of B-link Solutions' technology showcase and application modules, facilitating insurance workflow integration (underwriting, claims management, AI assistance agents, and API interconnections).",
  },
  {
    id: "proj-tekkeys",
    badge: "High Tech E-Commerce",
    title: "Tekkeys — Tech Solutions & IT Hardware",
    description:
      "International e-commerce store offering laptops, portable ASUS monitors, printers, and high-performance computer accessories.",
    imageUrl: "/images/tekkeys.png",
    category: "E-Commerce",
    technologies: ["Next.js", "React", "TypeScript", "GraphQL", "Sass/SCSS", "Stripe"],
    metrics: "International Catalog & Multi-Language",
    client: "Tekkeys / Wissal Group",
    year: "2024",
    liveDemoUrl: "https://tekkeys.net/en_GB",
    codeUrl: "https://github.com/oussama-hd",
    fullOverview:
      "High-performance frontend architecture using Next.js and React with GraphQL integration, smooth cart management, multilingual support (English, French), and secure credit card payment processing.",
  },
  // {
  //   id: "proj-tekkeys-adm",
  //   badge: "ERP Administration Portal",
  //   title: "Tekkeys Admin Portal — Management & Supervision",
  //   description:
  //     "Centralized administration platform for order supervision, multi-warehouse inventory management, permissions, and reporting.",
  //   imageUrl: "/images/tekkeys-admin.png",
  //   category: "Full Stack",
  //   technologies: ["Angular", "Spring Boot", "PostgreSQL", "NgRx", "AWS Deployment"],
  //   metrics: "24/7 Central Supervision",
  //   client: "Wissal Group / Tekkeys",
  //   year: "2023",
  //   liveDemoUrl: "https://devadm.tekkeys.wissal-group.com/",
  //   codeUrl: "https://github.com/oussama-hd",
  //   fullOverview:
  //     "Full-stack administration system developed with Spring Boot backend and Angular with Metronic Template frontend. Implements user role management, inventory auditing, and automated invoice generation.",
  // },
  {
    id: "proj-wissalstore",
    badge: "E-Commerce Platform",
    title: "Wissal Store — IT, Supplies & Office Equipment",
    description:
      "E-commerce marketplace for WIPRINT printers, toners, gaming computers, Norton 360 antivirus subscriptions, and appliances.",
    imageUrl: "/images/wissal-store.png",
    category: "E-Commerce",
    technologies: ["Angular", "TypeScript", "REST APIs", "PostgreSQL", "SCSS"],
    metrics: "30,000+ Active Users",
    client: "Wissal System",
    year: "2023",
    liveDemoUrl: "https://www.wissalstore.com/",
    codeUrl: "https://github.com/oussama-hd",
    fullOverview:
      "Development of Wissal Store e-commerce platform with dynamic catalog, advanced filtering for ink and consumables, customer account management, and real-time shipment tracking.",
  },
  {
    id: "proj-methodeplus",
    badge: "Education & Training Platform",
    title: "Méthode Plus — Language Center & Courses",
    description:
      "Educational web platform for discovering courses, online registration for school courses and modern languages.",
    imageUrl: "/images/method-plus.png",
    category: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "CSS3 / SCSS", "Responsive Design"],
    metrics: "100% Paperless Online Registration",
    client: "Méthode Plus",
    year: "2024",
    liveDemoUrl: "https://methodeplus.net/",
    codeUrl: "https://github.com/oussama-hd",
    fullOverview:
      "Corporate website and pre-registration portal for Méthode Plus language center. Clear and welcoming interface for families and students, with detailed presentation of language programs and interactive admission form.",
  },
  {
    id: "proj-guezzout",
    badge: "Luxury Real Estate Portal",
    title: "G.K Promoteur Immobilier — Residences & Villas",
    description:
      "Showcase website for collective housing, subdivisions, individual homes, and luxury villas with 360° virtual tours.",
    imageUrl: "/images/guezzout.png",
    category: "Frontend",
    technologies: ["WordPress", "JavaScript", "HTML5", "CSS3", "Virtual Tour 360"],
    metrics: "Integrated 360° Interactive Tour",
    client: "G.K Promoteur Immobilier",
    year: "2023",
    liveDemoUrl: "https://www.guezzout-immobilier.com/",
    codeUrl: "https://github.com/oussama-hd",
    fullOverview:
      "Creation of G.K Promoteur Immobilier official portal with project gallery, construction progress tracking, financing simulator, and 360° tour modules for prospective buyers.",
  },
];

export const SERVICES_DATA = [
  {
    id: "frontend-arch",
    title: "Frontend Engineering & Design Systems",
    description:
      "Architect fast, accessible, and maintainable web applications using React, Next.js, Angular, and modular SCSS.",
    iconType: "code",
    features: [
      "Modern React / Next.js & Angular Architectures",
      "Predictable State with NgRx, Redux & Zustand",
      "Modular SCSS, Tailwind & Material-UI Design Systems",
      "High Test Coverage (Jest, Jasmine, Cypress, Storybook)",
    ],
  },
  {
    id: "fullstack-api",
    title: "Full Stack & Microservices Development",
    description:
      "Build secure, robust backend APIs and distributed systems in Spring Boot, Node.js, and PostgreSQL.",
    iconType: "devices",
    features: [
      "Spring Boot RESTful APIs & OAuth 2.0 Security",
      "GraphQL & REST API Integration with Next.js",
      "PostgreSQL, MySQL, JPA & Hibernate Data Modeling",
      "Hibernate Search & Scalable Query Optimization",
    ],
  },
  {
    id: "devops-integrations",
    title: "DevOps, CI/CD & Third-Party Integrations",
    description:
      "Deploy scalable cloud infrastructure on AWS and seamlessly integrate Stripe, Auth0, and payment gateways.",
    iconType: "design",
    features: [
      "CI/CD Pipelines (Jenkins, AWS CodePipeline)",
      "Docker, Swarm & Kubernetes Containerization",
      "Payment Gateway Integration (Stripe, Banking APIs)",
      "Authentication via Auth0 SDK & Spring Security",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Analyze & Architect",
    description:
      "Analyze business requirements, map system architecture, design data models, and align UX/UI with Figma specs.",
  },
  {
    step: "02",
    title: "Build & Test",
    description:
      "Write clean, modular code across frontend and backend, with 90% unit test coverage, NgRx/Redux, and robust APIs.",
  },
  {
    step: "03",
    title: "Deploy & Optimize",
    description:
      "Automate CI/CD pipelines, containerize with Docker, deploy on AWS, and monitor high-availability performance.",
  },
];

export const EXPERIENCES_DATA: ExperienceDetail[] = [
  {
    id: "exp-1",
    role: "Senior Frontend Developer",
    company: "B-link Solutions",
    location: "Ouled Fayet, Algeria",
    period: "01/2025 - Present",
    description:
      "Spearheading accessible frontend architectures for insurance systems, delivering major client applications (Alliance, CIAR, MacirVie).",
    highlights: [
      "Created user-friendly interfaces to streamline contract management, claims processing, and online policy subscription workflows in the insurance domain.",
      "Implemented scalable modules for quote calculation, policy issuance, contract management, and claims tracking.",
      "Engineered responsive Angular apps with Angular Material, Flex Layout, and secure authentication.",
      "Managed application state with NgRx and simplified CI/CD automated deployment pipelines.",
    ],
    skills: ["Angular", "TypeScript", "NgRx", "Angular Material", "CI/CD", "Insurance Tech"],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Glitzup Algérie",
    location: "Setif, Algeria",
    period: "02/2022 - 11/2024",
    description:
      "Built multi-vendor e-commerce dashboards and conversion-optimized web applications serving 30,000+ users.",
    highlights: [
      "Built and consumed GraphQL and REST APIs in Next.js to connect React + TypeScript frontends with backend microservices.",
      "Created dashboards and interfaces for multi-vendor e-commerce serving 30,000+ users, boosting customer satisfaction by 20%.",
      "Integrated Stripe for seamless payment processing and Auth0 SDK for secure authentication.",
      "Maintained unit test coverage up to 90% and documented reusable UI components in Storybook with Figma collaboration.",
      "Utilized Sass/SCSS preprocessors and managed state with Redux and Zustand.",
    ],
    skills: ["Next.js", "React", "TypeScript", "GraphQL", "Sass/SCSS", "Stripe", "Auth0", "Jest"],
  },
  {
    id: "exp-3",
    role: "Full Stack Developer",
    company: "Wissal System",
    location: "Setif, Algeria",
    period: "06/2020 - 12/2021",
    description:
      "Designed and delivered full-stack microservices and administration platforms in an Agile/Scrum environment.",
    highlights: [
      "Designed and documented RESTful APIs with Spring Boot, Swagger, JUnit, and Mockito.",
      "Implemented business data models with Spring Data JPA, Hibernate, and PostgreSQL, and integrated Hibernate Search.",
      "Secured endpoints using OAuth 2.0 and Spring Security.",
      "Built interactive Angular administration dashboards using Metronic Template and NgRx state management.",
      "Configured CI/CD pipelines to automate deployment of microservices on AWS.",
    ],
    skills: ["Spring Boot", "Angular", "PostgreSQL", "OAuth 2.0", "AWS", "Docker", "NgRx"],
  },
  {
    id: "exp-4",
    role: "Full Stack Developer Intern",
    company: "Wissal System",
    location: "Setif, Algeria",
    period: "12/2019 - 05/2020",
    description:
      "Built dynamic, responsive web interfaces and integrated Java/Spring microservices with automated testing.",
    highlights: [
      "Developed dynamic and responsive UI components using HTML, CSS, JavaScript, and Angular.",
      "Integrated REST APIs into Angular frontend applications for seamless data flow.",
      "Developed microservices with Java and Spring Framework, writing unit and integration tests.",
    ],
    skills: ["Java", "Spring Framework", "Angular", "HTML5", "CSS3", "REST APIs"],
  },
];

export const SKILLS_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: ["TypeScript", "JavaScript (ES2015+)", "Java", "Python", "SQL", "HTML5", "Modern CSS3 / SCSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Angular", "Node.js", "Spring Boot", "RxJS", "NgRx", "Redux", "Zustand", "Tailwind CSS"],
  },
  {
    title: "DevOps & Cloud Services",
    skills: ["AWS (EC2, S3, ECS, IAM, API Gateway)", "Docker", "Docker Swarm", "Kubernetes", "CI/CD Pipelines", "Jenkins"],
  },
  {
    title: "Databases & Architecture",
    skills: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "RESTful APIs", "GraphQL", "Microservices", "TDD", "OAuth 2.0"],
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is your primary tech stack and specialization?",
    answer:
      "I specialize in Senior Frontend and Full Stack Engineering. My core strengths are modern JavaScript/TypeScript (React, Next.js, Angular, Node.js) paired with robust backend services in Spring Boot and PostgreSQL, supported by comprehensive testing (90% coverage), NgRx/Redux state architecture, and AWS cloud deployments.",
  },
  {
    id: "faq-2",
    question: "What industry domains do you have extensive experience in?",
    answer:
      "I have substantial domain experience in Insurance SaaS (contract management, quote calculation, policy issuance, online claims for Alliance, CIAR, MacirVie), high-volume E-Commerce (multi-vendor platforms serving 30,000+ users with Stripe integrations), and FinTech/Admin enterprise workflows.",
  },
  {
    id: "faq-3",
    question: "How do you ensure software quality and maintainability?",
    answer:
      "I apply automated testing (achieving up to 90% unit test coverage using Jest, Jasmine, JUnit, Mockito, Cypress), modular SCSS and Storybook component documentation, strict TypeScript typing, clean Git review workflows, and automated CI/CD deployment pipelines.",
  },
  {
    id: "faq-4",
    question: "Are you available for remote, hybrid, or full-time opportunities?",
    answer:
      "Yes, I am open to senior frontend or full stack developer roles, technical consultations, and high-impact enterprise projects, collaborating remotely or on-site with teams globally.",
  },
  {
    id: "faq-5",
    question: "How can we discuss an opportunity or project?",
    answer:
      "You can reach out directly via email at oussama.mohammadi19@gmail.com, call +213 775 25 53 18, connect on GitHub/LinkedIn, or click 'Get In Touch' to submit your requirements.",
  },
];
