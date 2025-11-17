export const services = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
    features: [
      "Security posture assessment & gap analysis",
      "SOC setup and threat monitoring (SIEM, SOAR, 24/7 alerting)",
      "Incident response & digital forensics",
      "Cloud security hardening (AWS, Azure, GCP)",
      "Penetration testing & vulnerability management",
      "Compliance readiness (ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS)",
      "Security awareness training & policy development",
    ],
    icon: "shield",
  },
  {
    id: "devsecops",
    title: "DevSecOps",
    description: "Integrate security into your development lifecycle for faster, safer deployments.",
    features: [
      "DevSecOps framework implementation (DevSecOps, DevOps, SecOps)",
      "Security automation & orchestration (CI/CD pipeline security, GitOps)",
      "Cloud native security (Container security, Kubernetes security)",
      "API security & authentication (OAuth, JWT, API key management)",
      "Microservices security & monitoring",
      "DevSecOps toolchain integration (SonarQube, Checkmarx, Veracode)",
    ],
    icon: "code",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description: "Leverage AI and ML to drive innovation and automate complex processes.",
    features: [
      "AI strategy & roadmap development",
      "Machine learning model development & deployment",
      "MLOps pipeline setup & automation",
      "Natural language processing (NLP) solutions",
      "Computer vision & image recognition",
      "AI-powered automation & chatbots",
      "Model monitoring & performance optimization",
    ],
    icon: "brain",
  },
  {
    id: "data",
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics solutions.",
    features: [
      "Data strategy & architecture design",
      "Data pipeline development (ETL/ELT)",
      "Business intelligence & reporting dashboards",
      "Data warehousing & data lakes",
      "Real-time analytics & streaming",
      "Predictive analytics & forecasting",
      "Data governance & quality management",
    ],
    icon: "database",
  },
] as const;

export const interestOptions = [
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "devsecops", label: "DevSecOps" },
  { value: "ai", label: "AI & Machine Learning" },
  { value: "data", label: "Data Analytics" },
] as const;

export const brandColors = {
  primary: "#0a0f28",
  secondary: "#1abc9c",
  neutral: "#bdc3c7",
} as const;

