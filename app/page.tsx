import { Hero } from "@/components/Hero"
import { ServicesGrid } from "@/components/ServicesGrid"
import { FadeIn } from "@/components/FadeIn"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      
      <section className="py-20 bg-muted/30">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Driving Innovation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visualizing the future of secure and scalable technology.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <FadeIn delay={0.1} className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="Cybersecurity Monitoring" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Data Analytics" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
            </FadeIn>

            <FadeIn delay={0.3} className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
                alt="DevSecOps Integration" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
            </FadeIn>

            <FadeIn delay={0.4} className="relative h-64 md:h-80 overflow-hidden rounded-lg">
              <Image 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" 
                alt="AI & Future Tech" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
            </FadeIn>
          </div>
        </div>
      </section>

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
                At Verified Sp , we combine cutting-edge technology with
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
                Let&apos;s discuss how we can help secure and scale your business.
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
