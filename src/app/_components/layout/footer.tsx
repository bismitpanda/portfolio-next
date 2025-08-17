import { footerRoutes, socialRoutes } from "../routes";
import { GithubDark, Linkedin, XDark } from "@/components/icons";
import { Logo } from "@/components/icons/logo";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-border border-t py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Link
              className="flex items-center gap-x-4 font-bold font-serif text-3xl tracking-tight"
              href="/"
            >
              <Logo className="size-[42px]" />
              Bismit Panda
            </Link>
            <p className="mt-4 text-muted-foreground">
              Full Stack Developer specializing in creating beautiful, functional websites and
              applications.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-medium text-xl">Quick Links</h3>
            <ul className="space-y-2">
              {footerRoutes.map((route) => (
                <li key={route.path}>
                  <Link
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    href={route.path}
                    rel={route.external ? "noopener noreferrer" : undefined}
                    target={route.external ? "_blank" : undefined}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium text-xl">Connect</h3>
            <div className="flex space-x-4">
              <Link
                aria-label={socialRoutes.email.label}
                className="text-muted-foreground transition-colors hover:text-foreground"
                href={socialRoutes.email.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                aria-label={socialRoutes.linkedIn.label}
                className="text-muted-foreground transition-colors hover:text-foreground"
                href={socialRoutes.linkedIn.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                aria-label={socialRoutes.github.label}
                className="text-muted-foreground transition-colors hover:text-foreground"
                href={socialRoutes.github.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubDark className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                aria-label={socialRoutes.x.label}
                className="text-muted-foreground transition-colors hover:text-foreground"
                href={socialRoutes.x.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <XDark className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-border border-t pt-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Bismit Panda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
