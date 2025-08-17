import { footerRoutes, socialRoutes } from "../routes";
import { Logo } from "@/components/icons/logo";
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
                    rel={route.external ? "nofollow noopener noreferrer" : undefined}
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
              {socialRoutes.map(({ title, url, icon: Icon }) => (
                <Link
                  aria-label={title}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  href={url}
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  key={title}
                >
                  <Icon className="size-6" />
                  <span className="sr-only">{title}</span>
                </Link>
              ))}
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
