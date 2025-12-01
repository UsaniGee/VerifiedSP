import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
          <Image src="https://res.cloudinary.com/dnu4lxiie/image/upload/v1762972893/logo_jo3xr9.svg" alt="Verified Sp " width={150} height={150} />
            <p className="text-sm text-muted-foreground">
              Strategic, Secure & Scalable IT Solutions for businesses globally.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-foreground">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground">
                  DevSecOps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-foreground">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Verified Sp . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

