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
  primaryColor?: string; // Now properly defined
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
    projectList: IProject[]; // Explicitly typed
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
    title: "Backend Engineer (Golang) :: DevOps",
    description:
      "Backend-focused engineer specializing in Golang, distributed systems, and cloud-native architecture. I build scalable APIs, event-driven microservices, and reliable infrastructure using Docker, Kubernetes, and AWS.",
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
          "Undergraduate program focused on computer science fundamentals and software engineering.",
        workload: [
          "Data Structures & Algorithms",
          "Database Systems",
          "Operating Systems",
          "Software Engineering",
        ],
      },
      {
        date: "2020 – 2021",
        program: "+2 Science",
        school: "Bluebird College, Kathmandu",
        description:
          "Higher secondary education with focus on science and mathematics.",
        workload: ["Physics", "Mathematics", "Computer Science"],
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
        jobTitle: "Backend Engineer (Golang)",
        startDate: "2024",
        endDate: "Present",
        companyDescription:
          "Hands-on backend development through real-world projects and open-source work.",
        responsibilities: [
          "Designed REST and gRPC APIs in Go",
          "Built event-driven systems using RabbitMQ",
          "Containerized services with Docker and Kubernetes",
          "Worked with PostgreSQL, MongoDB, and Redis",
        ],
        technologies: [
          SKILLS.golang,
          SKILLS.rabbitmq,
          SKILLS.postgresql,
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
          "Designing scalable backend systems using Golang, microservices, messaging queues, and APIs.",
      },
      {
        name: "DevOps & Cloud",
        id: "devops",
        description:
          "Docker, Kubernetes, CI/CD pipelines, cloud-native deployments, and observability.",
      },
      {
        name: "Blockchain & Web3",
        id: "blockchain",
        description:
          "Solana smart contracts in Rust, wallet authentication, and decentralized apps.",
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
        id: "exampaper",
        name: "ExamPaper.org",
        description:
          "Educational platform providing academic resources and mock exams.",
        images: [
          "/images/exampaper/1.png",
          "/images/exampaper/2.png",
          "/images/exampaper/3.png",
          "/images/exampaper/4.png",
          "/images/exampaper/5.png",
        ],
        functionality: [
          "Authentication & role-based access",
          "Mock tests & exam library",
          "Search and filtering",
        ],
        technologies: [SKILLS.appwrite, SKILLS.typescript, SKILLS.react],
        livePreview: "https://www.exampaper.org",
        primaryColor: "#4a6cf7", // Appwrite-inspired blue
      },
      {
        id: "codenumber",
        name: "CodeNumber.net",
        description:
          "Coding education platform aligned with Tribhuvan University syllabus.",
        images: [
          "/images/codenumber/1.png",
          "/images/codenumber/2.png",
          "/images/codenumber/3.png",
          "/images/codenumber/4.png",
        ],
        functionality: [
          "Monaco editor for in-browser coding",
          "Structured syllabus-based learning",
          "Authentication & storage",
        ],
        technologies: [SKILLS.appwrite, SKILLS.typescript, SKILLS.react],
        livePreview: "https://www.codenumber.net",
        primaryColor: "#00c2b3", // Fresh teal/cyan
      },
      {
        id: "godec",
        name: "Godec.xyz",
        description:
          "Decentralized Web3 platform built on Solana with on-chain applications.",
        images: [
          "/images/godec/1.png",
          "/images/godec/2.png",
          "/images/godec/3.png",
          "/images/godec/4.png",
        ],
        functionality: [
          "Wallet-based authentication",
          "On-chain Todo, Notes, Voting",
          "Censorship-resistant data ownership",
        ],
        technologies: [SKILLS.rust, SKILLS.solana, SKILLS.react],
        livePreview: "https://www.godec.xyz",
        primaryColor: "#a855f7", // Solana purple
      },
    ],
  },

  ai: {
    chatWithAi: "Ask Assistant",
    textPlaceholder: "Ask about skills or projects",
  },

  notFound: {
    pageNotFound: "The page you requested was not found",
    returnHome: "Return Home",
  },
};

export const LANGUAGE = {
  en: englishTexts,
};