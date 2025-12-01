import { Metadata } from "next"
import { createPageMetadata } from "@/lib/metadata"
import { CaseCard } from "@/components/CaseCard"
import { FadeIn } from "@/components/FadeIn"

export const metadata: Metadata = createPageMetadata(
  "Case Studies — Verified Sp ",
  "Explore our successful cybersecurity and IT transformation projects. Real results from real businesses."
)

const caseStudies = [
  {
    title: "SME Penetration Testing Pilot",
    description:
      "Comprehensive security assessment for a UK-based SME, identifying critical vulnerabilities and implementing remediation strategies.",
    category: "Cybersecurity",
    href: "#",
  },
  {
    title: "DevSecOps Implementation",
    description:
      "Integrated security into the development lifecycle, reducing deployment time by 40% while improving security posture.",
    category: "DevSecOps",
    href: "#",
  },
  {
    title: "AI-Powered Threat Detection",
    description:
      "Deployed machine learning models for real-time threat detection, reducing false positives by 60%.",
    category: "AI & Machine Learning",
    href: "#",
  },
  {
    title: "Data Analytics Transformation",
    description:
      "Built a comprehensive data analytics platform enabling data-driven decision making across the organization.",
    category: "Data Analytics",
    href: "#",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="py-20">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses. See how we&apos;ve helped companies
              transform their IT infrastructure.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseCard
              key={index}
              title={study.title}
              description={study.description}
              category={study.category}
              href={study.href}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

