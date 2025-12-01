import { Metadata } from "next"
import { createPageMetadata } from "@/lib/metadata"
import { FadeIn } from "@/components/FadeIn"
import { SlideIn } from "@/components/SlideIn"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Code, Database, Brain, Target, Users } from "lucide-react"

export const metadata: Metadata = createPageMetadata(
  "About Us — Verified Sp ",
  "Verified Sp  is a dynamic IT consultancy specializing in cybersecurity, DevSecOps, data analysis, and AI implementation. We help businesses thrive through secure, innovative technology solutions."
)

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize security in every solution, ensuring your digital infrastructure is protected against evolving threats.",
  },
  {
    icon: Target,
    title: "Cost-Effective",
    description: "Delivering innovative solutions that reduce operational risk while maintaining profitability and efficiency.",
  },
  {
    icon: Code,
    title: "Agile Delivery",
    description: "Expert project management and Agile methodologies to streamline operations and accelerate time-to-market.",
  },
  {
    icon: Brain,
    title: "Innovation",
    description: "Enabling data-driven decision-making through cutting-edge AI and analytics technologies.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Working closely with organizations to understand their unique challenges and deliver tailored solutions.",
  },
  {
    icon: Database,
    title: "Data-Driven",
    description: "Transforming data into actionable insights that drive business growth and competitive advantage.",
  },
]

const services = [
  {
    title: "Cybersecurity",
    items: [
      "Penetration Testing",
      "Vulnerability Detection",
      "Security Analysis",
      "Infrastructure Hardening",
    ],
  },
  {
    title: "DevSecOps",
    items: [
      "CI/CD Integration",
      "Security Automation",
      "Compliance Management",
      "Infrastructure as Code",
    ],
  },
  {
    title: "Data & AI",
    items: [
      "Data Analysis",
      "AI Implementation",
      "Machine Learning",
      "Business Intelligence",
    ],
  },
  {
    title: "Strategy & Delivery",
    items: [
      "Project Management",
      "Agile Delivery",
      "Technology Strategy",
      "Digital Transformation",
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Hero Section */}
        <FadeIn>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Verified Sp 
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A dynamic IT consultancy and contracting company dedicated to
              helping businesses thrive through secure, innovative, and
              cost-effective technology solutions.
            </p>
          </div>
        </FadeIn>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          <FadeIn delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Verified Sp  is a dynamic IT consultancy and contracting
                company dedicated to helping businesses thrive through secure,
                innovative, and cost-effective technology solutions. We
                specialize in delivering expert services across{" "}
                <strong>cybersecurity</strong>—including penetration testing,
                vulnerability detection, and security analysis—as well as{" "}
                <strong>DevSecOps integration</strong>,{" "}
                <strong>data analysis</strong>, and{" "}
                <strong>AI implementation</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our team works closely with organizations to strengthen their
                digital infrastructure, streamline operations, and enable
                data-driven decision-making. From project management and Agile
                delivery to end-to-end technology strategy, we support
                businesses in adapting to rapidly evolving technologies while
                reducing operational risk and maintaining profitability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong focus on security, efficiency, and innovation,
                Verified Sp  empowers companies to grow confidently in the
                digital age.
              </p>
            </div>
          </FadeIn>

          {/* Our Values */}
          <FadeIn delay={0.2}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <SlideIn
                      key={value.title}
                      delay={index * 0.1}
                      direction="up"
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <Icon className="h-10 w-10 text-secondary mb-4" />
                          <CardTitle>{value.title}</CardTitle>
                          <CardDescription className="text-base">
                            {value.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </SlideIn>
                  )
                })}
              </div>
            </div>
          </FadeIn>

          {/* Our Services */}
          <FadeIn delay={0.3}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What We Do
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <SlideIn
                    key={service.title}
                    delay={index * 0.1}
                    direction="up"
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-center text-muted-foreground"
                            >
                              <span className="text-secondary mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </SlideIn>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn delay={0.4}>
            <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Let&apos;s work together to strengthen your digital infrastructure,
                streamline operations, and enable data-driven decision-making.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/80 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}

