import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="heading-md mb-6">Interested in working together?</h2>
        <p className="body-lg text-muted-foreground mb-8">
          I&apos;m currently available for freelance projects and full-time opportunities.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/#contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View My Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
