import { JSX } from "react";
import { SKILLS, ISkill } from "./skills";

export interface IProject {
  id: string;
  name: string;
  description: string;
  images: string[];
  functionality: string[];
  technologies: ISkill[];
  livePreview?: string;
  github?: string;
  primaryColor?: string;
}

export interface ILanguageTexts {
  aboutMe: {
    name: string;
    title: string;
    description: string;
    downloadResume: string;
  };
  education: {
    title: string;
    viewCertification: string;
    accomplishment: string;
    viewFullEducationHistory: string;
    educationHistory: {
      date: string;
      program: string;
      school: string;
      description: string;
      workload: string[];
    }[];
  };
  workHistory: {
    title: string;
    viewWorkHistory: string;
    workHistoryList: {
      companyName: string;
      companyLogo: JSX.Element | string;
      jobTitle: string;
      startDate: string;
      endDate: string;
      companyDescription: string;
      responsibilities: string[];
      technologies: ISkill[];
    }[];
  };
  skills: {
    title: string;
    viewSkills: string;
    skillCategories: {
      name: string;
      id: string;
      description: string;
    }[];
  };
  projects: {
    title: string;
    viewProjects: string;
    viewLivePreview: string;
    description: string;
    functionalities: string;
    technologies: string;
    projectList: IProject[];
  };
  ai: {
    chatWithAi: string;
    textPlaceholder: string;
  };
  notFound: {
    pageNotFound: string;
    returnHome: string;
  };
}

export const englishTexts: ILanguageTexts = {
  aboutMe: {
    name: "Everest Paudel",
    title: "Backend Engineer (Go & Node.js)",
    description:
      "Backend-focused engineer specializing in Go, Node.js, distributed systems, and cloud-native architecture. I build scalable APIs, event-driven systems, microservices, and reliable infrastructure using PostgreSQL, Redis, RabbitMQ, Docker, Kubernetes, and AWS.",
    downloadResume: "Download Resume",
  },

  education: {
    title: "Education",
    viewCertification: "View Certification",
    accomplishment: "Highlights",
    viewFullEducationHistory: "View Full Education History",

    educationHistory: [
      {
        date: "2023 – 2027",
        program: "B.Sc. Computer Science & Information Technology",
        school: "Institute of Science and Technology, Tribhuvan University",
        description:
          "Undergraduate program focused on computer science, software engineering, databases, operating systems, and modern computing systems.",
        workload: [
          "Data Structures & Algorithms",
          "Database Systems",
          "Operating Systems",
          "Software Engineering",
        ],
      },
      {
        date: "2020 – 2022",
        program: "+2 Science",
        school: "Bluebird College, Kathmandu",
        description:
          "Higher secondary education with a strong foundation in science, mathematics, and computer science.",
        workload: [
          "Physics",
          "Mathematics",
          "Computer Science",
        ],
      },
    ],
  },

  workHistory: {
    title: "Experience",
    viewWorkHistory: "View Experience",

    workHistoryList: [
      {
        companyName: "Independent Projects & Open Source",
        companyLogo: "⚙️",
        jobTitle: "Backend Engineer",
        startDate: "2024",
        endDate: "Present",
        companyDescription:
          "Hands-on backend engineering through production-oriented projects spanning distributed systems, payment infrastructure, identity systems, IoT, Web3, and cloud-native technologies.",
        responsibilities: [
          "Designed scalable REST and gRPC APIs using Go",
          "Built event-driven and distributed systems using RabbitMQ and Redis",
          "Developed backend services with PostgreSQL and MongoDB",
          "Containerized and orchestrated services using Docker and Kubernetes",
          "Implemented authentication, cryptography, replay protection, and secure API flows",
          "Integrated blockchain infrastructure and Solana smart contracts into backend systems",
        ],
        technologies: [
          SKILLS.golang,
          SKILLS.typescript,
          SKILLS.postgresql,
          SKILLS.redis,
          SKILLS.rabbitmq,
          SKILLS.docker,
          SKILLS.kubernetes,
        ],
      },
    ],
  },

  skills: {
    title: "Skills",
    viewSkills: "View Skills",

    skillCategories: [
      {
        name: "Backend & Distributed Systems",
        id: "backend",
        description:
          "Building scalable backend systems with Go and Node.js, including REST APIs, gRPC services, WebSockets, microservices, event-driven architectures, RabbitMQ, Redis, and PostgreSQL.",
      },
      {
        name: "DevOps & Cloud",
        id: "devops",
        description:
          "Containerized and cloud-native infrastructure using Docker, Kubernetes, Jenkins, Git, and AWS with a focus on reliable deployments and scalable services.",
      },
      {
        name: "Frontend Development",
        id: "frontend",
        description:
          "Modern web interfaces using React and Next.js with TypeScript, Tailwind CSS, responsive design, and component-driven architecture.",
      },
      {
        name: "Web3 & Blockchain",
        id: "web3",
        description:
          "Building decentralized applications and blockchain infrastructure using Solana, Rust, Anchor, wallets, smart contracts, and SPL tokens.",
      },
      {
        name: "Security & Testing",
        id: "security",
        description:
          "Applying secure authentication, cryptography, JWT, replay protection, OWASP security principles, and application testing with Burp Suite.",
      },
    ],
  },

  projects: {
    title: "Projects",
    viewProjects: "View All Projects",
    viewLivePreview: "Live Preview",
    description: "Description",
    functionalities: "Key Features",
    technologies: "Technologies",

    projectList: [
      {
        id: "deping",
        name: "DePing.xyz",
        description:
          "Decentralized uptime monitoring infrastructure combining Go backend services, Rust edge workers, distributed messaging, real-time telemetry, and Solana-based rewards.",
        images: [
          "/images/deping/1.png",
          "/images/deping/2.png",
          "/images/deping/3.png",
          "/images/deping/4.png",
        ],
        functionality: [
          "Distributed uptime monitoring across Rust edge worker nodes",
          "High-throughput job scheduling using Redis and RabbitMQ",
          "Bidirectional gRPC telemetry streams",
          "Two-Packet state machine for reliable uptime detection",
          "Anti-cheat engine for validating node reports",
          "Real-time Telegram monitoring alerts",
          "Solana Anchor integration for SPL token rewards",
        ],
        technologies: [
          SKILLS.golang,
          SKILLS.rust,
          SKILLS.grpc,
          SKILLS.rabbitmq,
          SKILLS.redis,
          SKILLS.postgresql,
          SKILLS.solana,
        ],
        livePreview: "https://deping.xyz",
        primaryColor: "#6366f1",
      },

      {
        id: "kipay",
        name: "Kipay.xyz",
        description:
          "Non-custodial crypto payment gateway designed for secure merchant payments, transaction verification, settlement, and hosted checkout experiences.",
        images: [
          "/images/kipay/1.png",
          "/images/kipay/2.png",
          "/images/kipay/3.png",
          "/images/kipay/4.png",
        ],
        functionality: [
          "High-performance Go payment gateway backend",
          "Modular monolith architecture using native net/http",
          "Rust multi-currency transaction verification engine",
          "Bidirectional gRPC communication",
          "Merchant authentication and administration",
          "Payment link generation",
          "Hosted client checkout",
          "PostgreSQL transaction and settlement tracking",
          "Signed webhook infrastructure",
        ],
        technologies: [
          SKILLS.golang,
          SKILLS.rust,
          SKILLS.grpc,
          SKILLS.react,
          SKILLS.postgresql,
        ],
        livePreview: "https://kipay.xyz",
        primaryColor: "#14b8a6",
      },

      {
        id: "breezo",
        name: "BREEZO Network",
        description:
          "Decentralized air-quality monitoring network connecting ESP32 IoT sensors with real-time telemetry infrastructure and Solana-based node management and rewards.",
        images: [
          "/images/breezo/1.png",
          "/images/breezo/2.png",
          "/images/breezo/3.png",
          "/images/breezo/4.png",
        ],
        functionality: [
          "Real-time AQI telemetry ingestion from ESP32 sensors",
          "Low-latency Socket.IO sensor streaming",
          "Sub-second dashboard updates",
          "NaCl-secured IoT communication",
          "Replay protection against unauthorized telemetry",
          "Solana-based decentralized node registration",
          "Automated SPL token rewards",
          "On-chain access control",
        ],
        technologies: [
          SKILLS.typescript,
          SKILLS.nodejs,
          SKILLS.mongodb,
          SKILLS.solana,
        ],
        livePreview: "https://breezo.network",
        primaryColor: "#22c55e",
      },

      {
        id: "nid",
        name: "NID.xyz",
        description:
          "Decentralized identity infrastructure providing handle-based authentication, OAuth 2.0, OpenID Connect, PKCE, wallet ownership verification, and centralized session management.",
        images: [
          "/images/nid/1.png",
          "/images/nid/2.png",
          "/images/nid/3.png",
          "/images/nid/4.png",
        ],
        functionality: [
          "Handle-based identity and authentication",
          "OAuth 2.0 authorization flows",
          "OpenID Connect identity provider",
          "PKCE-secured authentication",
          ".nid handle claiming and resolution",
          "EVM and Solana wallet ownership verification",
          "Centralized session management",
          "Connected application management",
          "Active session revocation",
        ],
        technologies: [
          SKILLS.golang,
          SKILLS.typescript,
          SKILLS.react,
          SKILLS.postgresql,
          SKILLS.solana,
        ],
        livePreview: "https://nid.xyz",
        primaryColor: "#8b5cf6",
      },

      {
        id: "exampaper",
        name: "ExamPaper.org",
        description:
          "Educational platform providing academic resources, exam preparation materials, mock tests, and structured learning content.",
        images: [
          "/images/exampaper/1.png",
          "/images/exampaper/2.png",
          "/images/exampaper/3.png",
          "/images/exampaper/4.png",
          "/images/exampaper/5.png",
        ],
        functionality: [
          "Authentication and role-based access",
          "Mock tests and exam library",
          "Search and filtering",
          "Academic resource management",
        ],
        technologies: [
          SKILLS.appwrite,
          SKILLS.typescript,
          SKILLS.react,
        ],
        livePreview: "https://www.exampaper.org",
        primaryColor: "#4a6cf7",
      },

      {
        id: "codenumber",
        name: "CodeNumber.net",
        description:
          "Coding education platform aligned with the Tribhuvan University syllabus, providing structured learning resources and browser-based coding.",
        images: [
          "/images/codenumber/1.png",
          "/images/codenumber/2.png",
          "/images/codenumber/3.png",
          "/images/codenumber/4.png",
        ],
        functionality: [
          "Monaco editor for in-browser coding",
          "Structured syllabus-based learning",
          "Authentication and storage",
          "Interactive programming resources",
        ],
        technologies: [
          SKILLS.appwrite,
          SKILLS.typescript,
          SKILLS.react,
        ],
        livePreview: "https://www.codenumber.net",
        primaryColor: "#00c2b3",
      },

      {
        id: "godec",
        name: "Godec.xyz",
        description:
          "Decentralized Web3 platform built on Solana featuring on-chain applications and wallet-based ownership.",
        images: [
          "/images/godec/1.png",
          "/images/godec/2.png",
          "/images/godec/3.png",
          "/images/godec/4.png",
        ],
        functionality: [
          "Wallet-based authentication",
          "On-chain Todo application",
          "On-chain Notes",
          "On-chain Voting",
          "Censorship-resistant data ownership",
        ],
        technologies: [
          SKILLS.rust,
          SKILLS.solana,
          SKILLS.react,
        ],
        livePreview: "https://www.godec.xyz",
        primaryColor: "#a855f7",
      },
    ],
  },

  ai: {
    chatWithAi: "Ask Assistant",
    textPlaceholder: "Ask about my skills, experience, or projects",
  },

  notFound: {
    pageNotFound: "The page you requested was not found",
    returnHome: "Return Home",
  },
};

export const LANGUAGE = {
  en: englishTexts,
};
