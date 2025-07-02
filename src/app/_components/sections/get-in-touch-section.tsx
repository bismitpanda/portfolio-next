import { socialRoutes } from "../routes";
import { GithubDark, Linkedin, XDark } from "@/components/icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export function GetInTouchSection() {
  return (
    <section className="container-custom section-spacing" id="contact">
      <h2 className="heading-lg mb-16">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto max-w-2xl">
          <p className="mb-10 text-2xl leading-relaxed">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
        <div className="flex flex-col items-start gap-6">
          <Link
            aria-label={socialRoutes.email.label}
            className="group flex items-center gap-4 text-muted-foreground text-xl hover:text-foreground"
            href={socialRoutes.email.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Mail className="h-6 w-6 transition-transform group-hover:scale-110" />
            <span className="link-underline">{socialRoutes.email.label}</span>
          </Link>
          <Link
            aria-label={socialRoutes.linkedIn.label}
            className="group flex items-center gap-4 text-muted-foreground text-xl hover:text-foreground"
            href={socialRoutes.linkedIn.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin className="h-6 w-6 transition-transform group-hover:scale-110" />
            <span className="link-underline">{socialRoutes.linkedIn.label}</span>
          </Link>
          <Link
            aria-label={socialRoutes.github.label}
            className="group flex items-center gap-4 text-muted-foreground text-xl hover:text-foreground"
            href={socialRoutes.github.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubDark className="h-6 w-6 transition-transform group-hover:scale-110" />
            <span className="link-underline">{socialRoutes.github.label}</span>
          </Link>
          <Link
            aria-label={socialRoutes.x.label}
            className="group flex items-center gap-4 text-muted-foreground text-xl hover:text-foreground"
            href={socialRoutes.x.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <XDark className="h-6 w-6 transition-transform group-hover:scale-110" />
            <span className="link-underline">{socialRoutes.x.label}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
