import { routes, socialRoutes } from "../routes";
import { GitHubIcon, LinkedInIcon, Logo, TwitterXIcon } from "@/components/icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link
              href="/"
              className="font-serif text-3xl font-bold tracking-tight flex gap-x-4 items-center"
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
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href={socialRoutes.email.url}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={socialRoutes.email.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href={socialRoutes.linkedIn.url}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={socialRoutes.linkedIn.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={socialRoutes.github.url}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={socialRoutes.github.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={socialRoutes.x.url}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={socialRoutes.x.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterXIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Bismit Panda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
