import { Inter } from "next/font/google";
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
  "Netvly is a product studio for teams who need a real web app and mobile app — designed, engineered, and launched by one team, start to finish.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Netvly — Web & Mobile App Development",
    template: "%s",
  },
    verification: {
    google: "E4kuZv4PXsWy4YhqRgtgJXULfI00tHQso1amWsGYvG8E",
  },
  other: {
    // Microsoft / Bing Webmaster Tools verification code
    'msvalidate.01': 'DD917B49CA709EC1FCDB4EBE98C410DC',
  },
  description: SITE_DESCRIPTION,
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
    title: "Netvly — Web & Mobile App Development",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Netvly",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Netvly — Web & Mobile App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netvly — Web & Mobile App Development",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Netvly",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  email: "abc@gmail.com",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Netvly",
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
      </body>
    </html>
  );
}
