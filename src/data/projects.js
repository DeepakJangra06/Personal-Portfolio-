import infostack from "../assets/projects/CI-CD-1024x576.jpg";
import mediroute from "../assets/projects/web-development1.jpg";
import reforge from "../assets/projects/IMG_20241111_144910.png";

export const projects = [
  {
    slug: "ci-cd-pipeline",
    title: "CI/CD Pipeline",
    subtitle: "Infrastructure Automation",
    image: infostack,
    github: "https://github.com/DeepakJangra06",

    overview:
      "Infrastructure Automation & Configuration Management, CI/CD Pipeline Design & Implementation.",

    problem: [
      "Manual deployment processes lead to errors and downtime.",
      "Lack of consistent infrastructure setup."
    ],

    solution: [
      "Implemented automated deployment pipelines.",
      "Ensured environment consistency."
    ],

    architecture: [
      "Cloud Services (AWS/Azure/GCP)",
      "Containerization & Orchestration (Docker, Kubernetes)",
    ],

    impact: [
      "Reliability & Performance Optimization.",
    ],

    tech: "Jenkins · Docker · Kubernetes",
  },

  {
    slug: "web-development",
    title: "Web Development",
    subtitle: "Responsive Website",
    image: mediroute,
    github: "https://github.com/DeepakJangra06",
    demo: "#",

    overview:
      "A complete web development project with full-stack implementation and responsive design.",

    problem: [
      "Websites lack modern UI/UX design.",
      "Poor SEO structure."
    ],

    solution: [
      "Built responsive design for all devices.",
      "Optimized SEO for better visibility."
    ],

    architecture: [
      "Frontend HTML/CSS/JavaScript",
      "Backend Integration",
    ],

    impact: [
      "Improved Accessibility & UX",
    ],

    tech: "HTML · CSS · JavaScript",
  },

  {
    slug: "taskflow",
    title: "TaskFlow",
    subtitle: "Cloud-Native Task Management System",
    image: reforge,
    github: "https://github.com/DeepakJangra06",

    overview:
      "TaskFlow is a high-performance, full-stack task management application designed for modern cloud environments. It demonstrates a complete 'Cloud-Native' lifecycle—from containerized local development to automated CI/CD and Kubernetes orchestration.",

    problem: [
      "Traditional setups often lack robust, production-ready DevOps practices."
    ],

    solution: [
      "Containerized the frontend and backend microservices via Docker.",
      "Automated testing and container image builds with GitHub Actions.",
      "Orchestrated local and cloud deployments with Kubernetes."
    ],

    architecture: [
      "Frontend: React.js, Vite, Framer Motion",
      "Backend: Node.js, Express, MongoDB Atlas, JWT Auth",
      "DevOps: Docker, Kubernetes, GitHub Actions CI/CD"
    ],

    impact: [
      "Highly scalable application ready for AWS EKS deployment."
    ],

    tech: "React · Node.js · Docker · Kubernetes",
  }
];
