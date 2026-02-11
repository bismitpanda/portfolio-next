"use client";

import { Menu, MoveUpRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CommandMenu } from "@/components/command-menu";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { footerRoutes, navigationRoutes } from "../routes";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-border border-b bg-background/80 backdrop-blur-md">
      <div className="container-custom flex h-20 items-center justify-between">
        <Link
          className="tap-target flex items-center gap-x-4 font-bold font-serif text-2xl tracking-tight transition-opacity duration-200 hover:opacity-90 active:opacity-80"
          href="/"
        >
          <Logo className="size-[42px]" />
          Bismit Panda
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          {navigationRoutes.map((route) => (
            <Link
              className={cn(
                "tap-target text-lg transition-colors duration-200 active:opacity-80",
                route.type !== "icon" ? "link-underline" : "mr-4!",
                pathname === route.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
                route.external &&
                  "group flex flex-row items-center justify-between gap-x-1",
              )}
              href={route.path as Route}
              key={route.path}
              rel={route.external ? "noopener noreferrer" : undefined}
              target={route.external ? "_blank" : undefined}
              aria-label={route.ariaLabel}
            >
              {route.name}
              {route.external && route.type !== "icon" && (
                <MoveUpRight className="size-4 w-0 opacity-0 transition-[width,opacity] duration-200 group-hover:w-4 group-hover:opacity-100" />
              )}
            </Link>
          ))}
          <CommandMenu />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size="icon"
            variant="ghost"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { height: "auto", opacity: 1 }
            }
            className="fixed inset-0 top-20 z-50 bg-background py-6 md:hidden"
            exit={
              shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
            }
            initial={
              shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
            }
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.3 }}
          >
            <nav className="flex flex-col space-y-6 bg-background/90 text-center">
              {footerRoutes.map((route) => (
                <Link
                  className={cn(
                    "tap-target block py-2 text-2xl transition-colors duration-200 active:bg-muted rounded-md",
                    pathname === route.path
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  href={route.path as Route}
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
