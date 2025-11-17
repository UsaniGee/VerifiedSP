import { Metadata } from "next"
import { services } from "@/lib/constants"
import { createPageMetadata } from "@/lib/metadata"
import { ServicesGrid } from "@/components/ServicesGrid"
import { FadeIn } from "@/components/FadeIn"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Code, Brain, Database } from "lucide-react"

export const metadata: Metadata = createPageMetadata(
  "Cybersecurity & DevSecOps — Verified Sp Ltd",
  "Comprehensive IT security and development services: penetration testing, vulnerability assessment, DevSecOps integration, AI/ML solutions, and data analytics."
)

const iconMap = {
  shield: Shield,
  code: Code,
  brain: Brain,
  database: Database,
}

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions designed to secure, optimize, and scale
              your business operations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Shield
            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-secondary mb-4" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {service.features.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in learning more about our services?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

