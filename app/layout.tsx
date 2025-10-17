import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "BODHON - Empowering Youth Society Since 2008 | Social Organization",
    template: "%s | BODHON",
  },
  description:
    "Bodhon is a social organization established in 2008 dedicated to youth development through sports, technical skills, crafts, language education, and library services. Join us in transforming village communities.",
  keywords: [
    "Bodhon",
    "youth development",
    "village education",
    "social organization",
    "sports club",
    "technical training",
    "crafts program",
    "language learning",
    "community library",
    "village empowerment",
    "rural development",
    "youth sports",
    "digital literacy",
    "traditional crafts",
    "English speaking",
  ],
  authors: [{ name: "Bodhon Organization" }],
  creator: "Bodhon Organization",
  publisher: "Bodhon Organization",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bodhon.org"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bodhon.org",
    siteName: "BODHON",
    title: "BODHON - Empowering Village Youth Since 2008",
    description:
      "Transforming village youth through sports, education, and community development programs. Join our movement for social change.",
    images: [
      {
        url: "/og-image.jpg", // Add your actual OG image
        width: 1200,
        height: 630,
        alt: "Bodhon - Youth Empowerment Organization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BODHON - Empowering Village Youth Since 2008",
    description:
      "Join Bodhon in transforming village communities through youth development programs.",
    images: ["/twitter-image.jpg"], // Add your actual Twitter image
    creator: "@bodhon_org", // Add your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code
    // google: 'your-verification-code',
  },
  category: "nonprofit organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Bodhon",
              alternateName: "Bodhon Organization",
              url: "https://bodhon.org",
              logo: "https://bodhon.org/logo.png",
              description:
                "A social organization dedicated to youth development and community transformation in villages",
              foundingDate: "2008",
              founder: {
                "@type": "Person",
                name: "Rajesh Kumar",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Our Village",
                addressRegion: "State",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-12345-67890",
                contactType: "customer service",
                email: "contact@bodhon.org",
              },
              sameAs: [
                "https://www.facebook.com/bodhon",
                "https://www.instagram.com/bodhon",
                "https://twitter.com/bodhon",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
