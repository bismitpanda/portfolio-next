import { Footer } from "./_components/layout/footer";
import { Navigation } from "./_components/layout/navigation";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Fustat, Playfair_Display, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "katex/dist/katex.css";
import "@/styles/globals.css";
import "@/styles/shiki.css";
import "@/styles/mdx.css";

const inter = Fustat({
  subsets: ["latin"],
  variable: "--font-fustat",
  display: "swap",
});

const playfair = Playfair_Display({
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
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetBrainsMono.variable} font-sans antialiased`}
      >
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
