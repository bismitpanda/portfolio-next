import { allCertificationsByDate } from "@/lib/content";
import { addMonths, formatDate } from "date-fns";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CertificationsSection() {
  return (
    <section className="container-custom section-spacing">
      <div>
        <h2 className="text-4xl font-medium md:text-5xl mb-16">Certifications</h2>
      </div>
      <div className="md:col-span-2">
        <div className="grid md:grid-cols-2 gap-6">
          {allCertificationsByDate.map((certification) => (
            <div className="group" key={certification.title}>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {certification.title}
                    </h3>
                    <p className="text-muted-foreground mb-2 text-sm">{certification.provider}</p>
                    <p className="text-muted-foreground mb-2 text-sm">
                      {certification.description.join(" ")}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {formatDate(certification.date, "MMM yyyy")}
                    {certification.validity &&
                      ` - ${formatDate(addMonths(certification.date, certification.validity), "MMM yyyy")}`}
                  </p>
                </div>
                <div className="flex flex-row justify-between gap-2">
                  <Link
                    href={certification.link}
                    className="text-sm text-primary flex items-center gap-1.5 transition-all hover:gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </Link>
                  {certification.verificationLink && (
                    <Link
                      href={certification.verificationLink}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
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
