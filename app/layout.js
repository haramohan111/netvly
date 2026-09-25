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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Netvly — Web & Mobile App Development",
    template: "%s",
  },
  description:
    "Netvly is a product studio for teams who need a real web app and mobile app — designed, engineered, and launched by one team, start to finish.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
