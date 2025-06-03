import { socialRoutes } from "../routes";
import { GitHubIcon, LinkedInIcon, TwitterXIcon } from "@/components/icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export function GetInTouchSection() {
  return (
    <section id="contact" className="container-custom section-spacing">
      <h2 className="heading-lg mb-16">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl leading-relaxed mb-10">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
        <div className="flex flex-col gap-6 items-start">
          <Link
            href={socialRoutes.email.url}
            className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
            aria-label={socialRoutes.email.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="link-underline">{socialRoutes.email.label}</span>
          </Link>
          <Link
            href={socialRoutes.linkedIn.url}
            className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
            aria-label={socialRoutes.linkedIn.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="link-underline">{socialRoutes.linkedIn.label}</span>
          </Link>
          <Link
            href={socialRoutes.github.url}
            className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
            aria-label={socialRoutes.github.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="link-underline">{socialRoutes.github.label}</span>
          </Link>
          <Link
            href={socialRoutes.x.url}
            className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
            aria-label={socialRoutes.x.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterXIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="link-underline">{socialRoutes.x.label}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
