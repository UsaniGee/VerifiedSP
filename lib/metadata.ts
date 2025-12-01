import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://verifiedsp.co.uk";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Verified Sp  — Strategic, Secure & Scalable IT Solutions (UK)",
    template: "%s | Verified Sp ",
  },
  description:
    "Verified Sp  empowers businesses with secure, data-driven IT strategies: cybersecurity, DevSecOps, AI & analytics. Trusted partners in digital transformation.",
  keywords: [
    "cybersecurity UK",
    "DevSecOps consultancy",
    "AI-powered security",
    "penetration testing UK",
    "MLOps engineer services",
    "data analytics",
    "secure IT solutions",
  ],
  authors: [{ name: "Verified Sp " }],
  creator: "Verified Sp ",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    siteName: "Verified Sp ",
    title: "Verified Sp  — Strategic, Secure & Scalable IT Solutions",
    description:
      "Empowering businesses with secure, data-driven IT strategies: cybersecurity, DevSecOps, AI & analytics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verified Sp  — Strategic, Secure & Scalable IT Solutions",
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
  name: "Verified Sp ",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description:
    "Verified Sp  empowers businesses with secure, data-driven IT strategies: cybersecurity, DevSecOps, AI & analytics.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  sameAs: [],
};

