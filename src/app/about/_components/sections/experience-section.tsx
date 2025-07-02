import { allExperiencesByDate } from "@/lib/content";
import { format, formatDistance } from "date-fns";

export function ExperienceSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <h2 className="mb-6 font-medium text-4xl md:text-5xl">Experience</h2>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-12">
            {allExperiencesByDate.map((exp) => {
              const start = exp.startDate;
              const end = exp.endDate ?? new Date();
              const duration = formatDistance(start, end, {
                includeSeconds: false,
              });
              return (
                <div
                  className={`group${exp.isOnGoing ? "" : " border-border border-l-2 pl-6"}`}
                  key={exp.title + exp.company}
                >
                  <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="mb-1 font-bold text-2xl transition-colors group-hover:text-primary">
                        {exp.title}
                      </h3>
                      <p className="mb-2 text-muted-foreground text-xl">{exp.company}</p>
                    </div>
                    <div className="text-muted-foreground text-sm md:text-right">
                      <p className="font-medium">
                        {format(start, "MMM yyyy")} -{" "}
                        {exp.isOnGoing ? "Present" : format(end, "MMM yyyy")}
                      </p>
                      <p className={exp.isOnGoing ? "text-primary" : undefined}>{duration}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
