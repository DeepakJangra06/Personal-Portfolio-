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
    slug: "face-recognition-system",
    title: "Face Recognition System",
    subtitle: "Real-time Machine Learning System",
    image: reforge,
    github: "https://github.com/DeepakJangra06",

    overview:
      "In this project, we implement a face recognition system with real-time data tracking.",

    problem: [
      "Manual attendance systems are slow and prone to error"
    ],

    solution: [
      "Implemented real-time facial tracking",
    ],

    architecture: [
      "Python + OpenCV + cvzone frontend",
      "Firebase database for data storage and management in real-time."
    ],

    impact: [
      "Automated recognition."
    ],

    tech: "Python · OpenCV · Firebase",
  }
];
