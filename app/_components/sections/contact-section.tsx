import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
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
            href="mailto:contact@bismitpanda.com"
            className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
          >
            <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="link-underline">contact@bismitpanda.com</span>
          </Link>
          <Link
            href="https://linkedin.com/in/bismit-panda-5432a824a"
            className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
          >
            <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="link-underline">linkedin.com/in/bismit-panda-5432a824a</span>
          </Link>
          <Link
            href="https://github.com/bismitpanda"
            className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
          >
            <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="link-underline">github.com/bismitpanda</span>
          </Link>
          <Link
            href="https://x.com/bismitpanda"
            className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group"
          >
            <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="link-underline">x.com/bismitpanda</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
