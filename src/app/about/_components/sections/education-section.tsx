import { allEducationsByDate } from "@/lib/content";
import { cn } from "@/lib/utils";
import { formatDate } from "date-fns";

export function EducationSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-4xl font-medium md:text-5xl mb-6">Education</h2>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-12">
            {allEducationsByDate.map((education) => (
              <div
                className={cn("group", education.isOnGoing ? "" : "border-l-2 border-border pl-6")}
                key={education.title}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {education.title}
                    </h3>
                    <p className="text-xl text-muted-foreground mb-2">{education.institution}</p>
                  </div>
                  <div className="text-sm text-muted-foreground md:text-right">
                    <p className="font-medium">
                      {formatDate(education.startDate, "MMM yyyy")} -{" "}
                      {education.isOnGoing ? "Present" : formatDate(education.endDate!, "MMM yyyy")}
                    </p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  {education.description}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {education.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
