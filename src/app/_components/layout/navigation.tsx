"use client";

import { routes } from "../routes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, MoveUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xs border-b border-border">
      <div className="container-custom flex items-center justify-between h-20">
        <Link
          href="/"
          className="font-serif text-2xl font-bold tracking-tight flex gap-x-4 items-center"
        >
          <Image src="/logo.svg" alt="Logo" width={42} height={42} />
          Bismit Panda
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "link-underline text-lg transition-colors",
                pathname === route.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
                route.external ? "group flex flex-row gap-x-1 items-center justify-between" : "",
              )}
              target={route.external ? "_blank" : undefined}
              rel={route.external ? "noopener noreferrer" : undefined}
            >
              {route.name}
              {route.external && (
                <MoveUpRight className="group-hover:opacity-100 group-hover:w-4 w-0 opacity-0 transition-all size-4" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-20 bg-background z-40 py-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-6 text-center bg-background/90">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "text-2xl py-2 transition-colors",
                    pathname === route.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                  target={route.external ? "_blank" : undefined}
                  rel={route.external ? "noopener noreferrer" : undefined}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
