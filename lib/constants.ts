export const services = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
    icon: "shield",
  },
  {
    id: "devsecops",
    title: "DevSecOps",
    description: "Integrate security into your development lifecycle for faster, safer deployments.",
    icon: "code",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description: "Leverage AI and ML to drive innovation and automate complex processes.",
    icon: "brain",
  },
  {
    id: "data",
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics solutions.",
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

