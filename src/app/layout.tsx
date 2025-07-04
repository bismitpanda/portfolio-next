import { Footer } from "./_components/layout/footer";
import { Navigation } from "./_components/layout/navigation";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Fustat, JetBrains_Mono, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "katex/dist/katex.css";
import "@/styles/globals.css";
import "@/styles/shiki.css";
import "@/styles/mdx.css";

const fustat = Fustat({
  subsets: ["latin"],
  variable: "--font-fustat",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bismitpanda.com"),
  title: "Bismit Panda | Developer",
  description:
    "Portfolio of Bismit Panda, a Full Stack Developer specializing in React, Next.js, and Node.js",
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className="dark scroll-smooth" lang="en" suppressHydrationWarning>
      <body
        className={`${fustat.variable} ${playfairDisplay.variable} ${jetBrainsMono.variable} font-sans antialiased`}
      >
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
