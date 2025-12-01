"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
         <Image src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1763379629/VerifiedLogo_rrau3n.svg" alt="Verified Sp " width={150} height={150} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors relative pb-1",
                isActive(item.href)
                  ? "text-secondary"
                  : "text-primary-foreground hover:text-secondary"
              )}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-secondary"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          ))}
          <Button asChild variant="default" size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
            <Link href="/contact">Request a Consultation</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mounted && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t"
            >
              <div className="container py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild variant="default" size="sm" className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Request a Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  )
}

