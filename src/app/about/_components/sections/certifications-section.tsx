import { addMonths, formatDate } from "date-fns";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { allCertificationsByDate } from "@/lib/content";

export function CertificationsSection() {
  return (
    <section className="container-custom section-spacing">
      <div>
        <h2 className="mb-16 font-medium text-4xl md:text-5xl">
          Certifications
        </h2>
      </div>
      <div className="md:col-span-2">
        <div className="grid gap-6 md:grid-cols-2">
          {allCertificationsByDate.map((certification) => (
            <div className="group" key={certification.title}>
              <div className="flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="flex justify-between">
                  <div>
                    <h3 className="mb-2 font-bold text-xl transition-colors group-hover:text-primary">
                      {certification.title}
                    </h3>
                    <p className="mb-2 text-muted-foreground text-sm">
                      {certification.provider}
                    </p>
                  </div>
                  <p className="mb-4 text-muted-foreground text-sm">
                    {formatDate(certification.date, "MMM yyyy")}
                    {certification.validity &&
                      ` - ${formatDate(addMonths(certification.date, certification.validity), "MMM yyyy")}`}
                  </p>
                </div>
                <p className="mb-2 text-muted-foreground text-sm">
                  {certification.description.join(" ")}
                </p>
                <div className="flex flex-row justify-between gap-2">
                  <Link
                    className="flex items-center gap-1.5 text-primary text-sm transition-all hover:gap-2"
                    href={certification.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Certificate{" "}
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  {certification.verificationLink && (
                    <Link
                      className="text-muted-foreground text-sm transition-colors hover:text-primary"
                      href={certification.verificationLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Verify Certification
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
