import { allExperiencesByDate } from "@/lib/content";
import { format, formatDistance } from "date-fns";

export function ExperienceSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="heading-lg mb-6 relative">
            Experience
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">
              04
            </span>
          </h2>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-12">
            {allExperiencesByDate.map((exp) => {
              const start = exp.startDate;
              const end = exp.endDate ? exp.endDate : new Date();
              const isCurrent = !exp.endDate;
              const duration = formatDistance(start, end, { includeSeconds: false });
              return (
                <div
                  key={exp.title + exp.company}
                  className={`group${!isCurrent ? " border-l-2 border-border pl-6" : ""}`}
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
                        {isCurrent ? "Present" : format(end, "MMM yyyy")}
                      </p>
                      <p className={isCurrent ? "text-primary" : undefined}>{duration}</p>
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
