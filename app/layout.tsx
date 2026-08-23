import type { Metadata } from "next";
import { Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The CAPIS Project",
    template: "%s | The CAPIS Project",
  },
  description:
    "The CAPIS project: Core Athletic Performance-based Intervention Set for Athletes. An international five-phase research project to develop a core outcome set for plyometric training interventions in Tier 3, 4, or 5 football players.",
  metadataBase: new URL("https://capis-project-website.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "The CAPIS Project",
    title: "The CAPIS Project",
    description:
      "Core Athletic Performance-based Intervention Set for Athletes. Developing a core outcome set for plyometric training in elite football.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "The CAPIS Project — Core Athletic Performance-based Intervention Set",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The CAPIS Project",
    description:
      "Developing a core outcome set for plyometric training in elite football. An international 5-phase research initiative.",
    images: ["/images/og-default.png"],
  },
  other: {
    "theme-color": "#2A3F5F",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif4.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
