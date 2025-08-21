import { formatDate } from "date-fns";
import { allEducationsByDate } from "@/lib/content";
import { cn } from "@/lib/utils";

export function EducationSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <h2 className="mb-6 font-medium text-4xl md:text-5xl">Education</h2>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-12">
            {allEducationsByDate.map((education) => (
              <div
                className={cn(
                  "group",
                  education.isOnGoing ? "" : "border-border border-l-2 pl-6",
                )}
                key={education.title}
              >
                <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="mb-1 font-bold text-2xl transition-colors group-hover:text-primary">
                      {education.title}
                    </h3>
                    <p className="mb-2 text-muted-foreground text-xl">
                      {education.institution}
                    </p>
                  </div>
                  <div className="text-muted-foreground text-sm md:text-right">
                    <p className="font-medium">
                      {formatDate(education.startDate, "MMM yyyy")} -{" "}
                      {education.isOnGoing
                        ? "Present"
                        : // biome-ignore lint/style/noNonNullAssertion: If it is not ongoing, then it has an end date
                          formatDate(education.endDate!, "MMM yyyy")}
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                  {education.description}
                </p>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
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
