import {
  SiGo,
  SiRust,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiRabbitmq,
  SiSolana,
  SiGrafana,
  SiAppwrite,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";

import { FaGitAlt, FaServer, FaCubes, FaLink, FaCogs, FaDatabase } from "react-icons/fa";
import { JSX } from "react";

export interface ISkill {
  name: string;
  icon: {
    normal: JSX.Element;
    large: JSX.Element;
  };
  type:
    | "language"
    | "frontend"
    | "backend"
    | "database"
    | "messaging"
    | "devops"
    | "blockchain";
}

export const SKILLS: Record<string, ISkill> = {
  // ===== Languages =====
  golang: {
    name: "Golang",
    icon: {
      normal: <SiGo size="1.1vw" color="#00ADD8" />,
      large: <SiGo size="2vw" color="#00ADD8" />,
    },
    type: "language",
  },
  rust: {
    name: "Rust",
    icon: {
      normal: <SiRust size="1.1vw" color="#DEA584" />,
      large: <SiRust size="2vw" color="#DEA584" />,
    },
    type: "language",
  },
  typescript: {
    name: "TypeScript",
    icon: {
      normal: <SiTypescript size="1.1vw" color="#3178C6" />,
      large: <SiTypescript size="2vw" color="#3178C6" />,
    },
    type: "language",
  },
  javascript: {
    name: "JavaScript",
    icon: {
      normal: <SiJavascript size="1.1vw" color="#F7DF1E" />,
      large: <SiJavascript size="2vw" color="#F7DF1E" />,
    },
    type: "language",
  },

  // ===== Frontend =====
  react: {
    name: "React",
    icon: {
      normal: <SiReact size="1.1vw" color="#61DAFB" />,
      large: <SiReact size="2vw" color="#61DAFB" />,
    },
    type: "frontend",
  },
  nextjs: {
    name: "Next.js",
    icon: {
      normal: <SiNextdotjs size="1.1vw" color="#000000" />,
      large: <SiNextdotjs size="2vw" color="#000000" />,
    },
    type: "frontend",
  },

  // ===== Backend Frameworks & Tools =====
  goChi: {
    name: "Chi (Go)",
    icon: {
      normal: <FaCogs size="1.1vw" color="#00ADD8" />,
      large: <FaCogs size="2vw" color="#00ADD8" />,
    },
    type: "backend",
  },
  gin: {
    name: "Gin (Go)",
    icon: {
      normal: <FaCogs size="1.1vw" color="#00ADD8" />,
      large: <FaCogs size="2vw" color="#00ADD8" />,
    },
    type: "backend",
  },
  fiber: {
    name: "Fiber (Go)",
    icon: {
      normal: <FaCogs size="1.1vw" color="#00ADD8" />,
      large: <FaCogs size="2vw" color="#00ADD8" />,
    },
    type: "backend",
  },
  gorm: {
    name: "GORM",
    icon: {
      normal: <FaDatabase size="1.1vw" color="#4DBA87" />,
      large: <FaDatabase size="2vw" color="#4DBA87" />,
    },
    type: "backend",
  },
  restApi: {
    name: "REST APIs",
    icon: {
      normal: <FaServer size="1.1vw" color="#607D8B" />,
      large: <FaServer size="2vw" color="#607D8B" />,
    },
    type: "backend",
  },
  microservices: {
    name: "Microservices",
    icon: {
      normal: <FaCubes size="1.1vw" color="#4CAF50" />,
      large: <FaCubes size="2vw" color="#4CAF50" />,
    },
    type: "backend",
  },
  appwrite: {
    name: "Appwrite",
    icon: {
      normal: <SiAppwrite size="1.1vw" color="#FD366E" />,
      large: <SiAppwrite size="2vw" color="#FD366E" />,
    },
    type: "backend",
  },

  // ===== Messaging =====
  rabbitmq: {
    name: "RabbitMQ",
    icon: {
      normal: <SiRabbitmq size="1.1vw" color="#FF6600" />,
      large: <SiRabbitmq size="2vw" color="#FF6600" />,
    },
    type: "messaging",
  },

  // ===== Databases =====
  postgresql: {
    name: "PostgreSQL",
    icon: {
      normal: <SiPostgresql size="1.1vw" color="#336791" />,
      large: <SiPostgresql size="2vw" color="#336791" />,
    },
    type: "database",
  },
  mongodb: {
    name: "MongoDB",
    icon: {
      normal: <SiMongodb size="1.1vw" color="#47A248" />,
      large: <SiMongodb size="2vw" color="#47A248" />,
    },
    type: "database",
  },
  redis: {
    name: "Redis",
    icon: {
      normal: <SiRedis size="1.1vw" color="#DC382D" />,
      large: <SiRedis size="2vw" color="#DC382D" />,
    },
    type: "database",
  },

  // ===== DevOps & Cloud =====
  docker: {
    name: "Docker",
    icon: {
      normal: <SiDocker size="1.1vw" color="#2496ED" />,
      large: <SiDocker size="2vw" color="#2496ED" />,
    },
    type: "devops",
  },
  kubernetes: {
    name: "Kubernetes",
    icon: {
      normal: <SiKubernetes size="1.1vw" color="#326CE5" />,
      large: <SiKubernetes size="2vw" color="#326CE5" />,
    },
    type: "devops",
  },
  aws: {
    name: "AWS",
    icon: {
      normal: <SiAmazon size="1.1vw" color="#FF9900" />,
      large: <SiAmazon size="2vw" color="#FF9900" />,
    },
    type: "devops",
  },
  git: {
    name: "Git",
    icon: {
      normal: <FaGitAlt size="1.1vw" color="#F05032" />,
      large: <FaGitAlt size="2vw" color="#F05032" />,
    },
    type: "devops",
  },
  observability: {
    name: "Observability (Grafana/Prometheus)",
    icon: {
      normal: <SiGrafana size="1.1vw" color="#F46800" />,
      large: <SiGrafana size="2vw" color="#F46800" />,
    },
    type: "devops",
  },

  // ===== Blockchain =====
  solana: {
    name: "Solana",
    icon: {
      normal: <SiSolana size="1.1vw" color="#9945FF" />,
      large: <SiSolana size="2vw" color="#9945FF" />,
    },
    type: "blockchain",
  },
  smartContracts: {
    name: "Smart Contracts",
    icon: {
      normal: <FaLink size="1.1vw" color="#8E44AD" />,
      large: <FaLink size="2vw" color="#8E44AD" />,
    },
    type: "blockchain",
  },
};