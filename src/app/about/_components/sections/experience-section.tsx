import { allExperiencesByDate } from "@/lib/content";
import { format, formatDistance } from "date-fns";

export function ExperienceSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-4xl font-medium md:text-5xl mb-6">Experience</h2>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-12">
            {allExperiencesByDate.map((exp) => {
              const start = exp.startDate;
              const end = exp.endDate ?? new Date();
              const duration = formatDistance(start, end, { includeSeconds: false });
              return (
                <div
                  key={exp.title + exp.company}
                  className={`group${!exp.isOnGoing ? " border-l-2 border-border pl-6" : ""}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-2">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground md:text-right">
                      <p className="font-medium">
                        {format(start, "MMM yyyy")} -{" "}
                        {exp.isOnGoing ? "Present" : format(end, "MMM yyyy")}
                      </p>
                      <p className={exp.isOnGoing ? "text-primary" : undefined}>{duration}</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
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
