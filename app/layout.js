import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HashScroll from "@/components/HashScroll";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://netvly.com";

const SITE_DESCRIPTION =
  "Netvly Technologies is a product studio for teams who need a real web app and mobile app — designed, engineered, and launched by one team, start to finish.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Netvly Technologies | Web & Mobile App Development Studio",
    template: "%s | Netvly Technologies",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Web App Development",
    "Mobile App Development",
    "Product Design Studio",
    "Next.js Development",
    "Software Engineering Studio",
  ],
  verification: {
    google: "E4kuZv4PXsWy4YhqRgtgJXULfI00tHQso1amWsGYvG8E",
  },
  other: {
    'msvalidate.01': 'DD917B49CA709EC1FCDB4EBE98C410DC',
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Netvly Technologies — Web & Mobile App Development",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Netvly Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Netvly Technologies — Web & Mobile App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@netvly",
    creator: "@netvly",
    title: "Netvly Technologies — Web & Mobile App Development",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Netvly Technologies",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  email: "contact@netvly.com", // Updated from dummy email
  logo: `${SITE_URL}/favicon-512.png`,
  sameAs: [
    "https://www.linkedin.com/company/netvly/",
    "https://x.com/netvly"
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Netvly Technologies",
  url: SITE_URL,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <div className="orb orb1" />
        <div className="orb orb2" />
        <Header />
        <ErrorBoundary>{children}</ErrorBoundary>
        <Footer />
        <ScrollReveal />
        <HashScroll />
        <GoogleAnalytics gaId="G-4B4D1H6N6R" />
      </body>
    </html>
  );
}