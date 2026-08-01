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
    default: "PhD Research Project — Advancing Clinical Research",
    template: "%s | PhD Research Project",
  },
  description:
    "A PhD research project advancing evidence-based clinical practice through systematic review, Delphi consensus, and implementation science.",
  metadataBase: new URL("https://phdresearchproject.edu"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "PhD Research Project",
    title: "PhD Research Project — Advancing Clinical Research",
    description:
      "Advancing evidence-based clinical practice through systematic review, Delphi consensus, and implementation science.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSerif4.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}