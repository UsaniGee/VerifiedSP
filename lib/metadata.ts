import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://verifiedsp.co.uk";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Verified Sp Ltd — Strategic, Secure & Scalable IT Solutions (UK)",
    template: "%s | Verified Sp Ltd",
  },
  description:
    "Verified Sp Ltd empowers businesses with secure, data-driven IT strategies: cybersecurity, DevSecOps, AI & analytics. Trusted partners in digital transformation.",
  keywords: [
    "cybersecurity UK",
    "DevSecOps consultancy",
    "AI-powered security",
    "penetration testing UK",
    "MLOps engineer services",
    "data analytics",
    "secure IT solutions",
  ],
  authors: [{ name: "Verified Sp Ltd" }],
  creator: "Verified Sp Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    siteName: "Verified Sp Ltd",
    title: "Verified Sp Ltd — Strategic, Secure & Scalable IT Solutions",
    description:
      "Empowering businesses with secure, data-driven IT strategies: cybersecurity, DevSecOps, AI & analytics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verified Sp Ltd — Strategic, Secure & Scalable IT Solutions",
    description:
      "Empowering businesses with secure, data-driven IT strategies: cybersecurity, DevSecOps, AI & analytics.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function createPageMetadata(
  title: string,
  description: string,
  path?: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url: path ? `${baseUrl}${path}` : baseUrl,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Verified Sp Ltd",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description:
    "Verified Sp Ltd empowers businesses with secure, data-driven IT strategies: cybersecurity, DevSecOps, AI & analytics.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  sameAs: [],
};

