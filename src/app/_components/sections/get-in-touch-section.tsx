import { socialRoutes } from "../routes";
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
          {socialRoutes.map(({ title, url, icon: Icon, label }) => (
            <Link
              aria-label={title}
              className="group flex items-center gap-4 text-muted-foreground text-xl hover:text-foreground"
              href={url}
              rel="nofollow noopener noreferrer"
              target="_blank"
              key={title}
            >
              <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span className="link-underline">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
