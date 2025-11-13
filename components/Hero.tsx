"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/FadeIn"
import { SlideIn } from "@/components/SlideIn"
import AnimatedBackground from "@/components/AnimatedBackground"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <SlideIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Secure. Strategic.{" "}
              <span className="text-secondary">Scalable.</span>
            </h1>
          </SlideIn>
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Verified Sp Ltd empowers businesses with secure, data-driven IT
              strategies: cybersecurity, DevSecOps, AI & analytics. Trusted
              partners in digital transformation.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

