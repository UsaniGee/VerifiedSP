"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Code, Brain, Database } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/constants"
import { FadeIn } from "@/components/FadeIn"

const iconMap = {
  shield: Shield,
  code: Code,
  brain: Brain,
  database: Database,
}

export function ServicesGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0,4).map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Shield
            return (
              <FadeIn key={service.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Icon className="h-10 w-10 text-secondary mb-4" />
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href="/services"
                        className="text-sm font-medium text-secondary hover:underline"
                      >
                        Learn more →
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

