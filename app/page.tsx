import { Hero } from "@/components/Hero"
import { ServicesGrid } from "@/components/ServicesGrid"
import { FadeIn } from "@/components/FadeIn"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      
      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold">
                Trusted Partners in Digital Transformation
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground">
                At Verified Sp Ltd, we combine cutting-edge technology with
                strategic expertise to help businesses navigate the complexities
                of modern IT. Our team of specialists delivers secure, scalable
                solutions that drive growth and innovation.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Get Started</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Transform Your IT Infrastructure?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg opacity-90">
                Let's discuss how we can help secure and scale your business.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Button asChild variant="secondary" size="lg" className="text-lg px-8">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}

