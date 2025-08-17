import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="heading-md mb-6">Interested in working together?</h2>
        <p className="body-lg mb-8 text-muted-foreground">
          I&apos;m currently available for freelance projects and full-time
          opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/#contact">Get In Touch</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View My Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
