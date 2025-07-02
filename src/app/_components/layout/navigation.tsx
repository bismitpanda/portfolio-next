"use client";

import { routes } from "../routes";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, MoveUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-border border-b bg-background/80 backdrop-blur-md">
      <div className="container-custom flex h-20 items-center justify-between">
        <Link
          className="flex items-center gap-x-4 font-bold font-serif text-2xl tracking-tight"
          href="/"
        >
          <Logo className="size-[42px]" />
          Bismit Panda
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          {routes.map((route) => (
            <Link
              className={cn(
                "link-underline text-lg transition-colors",
                pathname === route.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
                route.external ? "group flex flex-row items-center justify-between gap-x-1" : "",
              )}
              href={route.path}
              key={route.path}
              rel={route.external ? "noopener noreferrer" : undefined}
              target={route.external ? "_blank" : undefined}
            >
              {route.name}
              {route.external && (
                <MoveUpRight className="size-4 w-0 opacity-0 transition-all group-hover:w-4 group-hover:opacity-100" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} size="icon" variant="ghost">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className="fixed inset-0 top-20 z-40 bg-background py-6 md:hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-6 bg-background/90 text-center">
              {routes.map((route) => (
                <Link
                  className={cn(
                    "py-2 text-2xl transition-colors",
                    pathname === route.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  href={route.path}
                  key={route.path}
                  onClick={() => setIsMenuOpen(false)}
                  rel={route.external ? "noopener noreferrer" : undefined}
                  target={route.external ? "_blank" : undefined}
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
