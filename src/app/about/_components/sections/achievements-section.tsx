import { formatDate } from "date-fns";
import { allAchievementsByDate } from "@/lib/content";

export function AchievementsSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <h2 className="mb-6 font-medium text-4xl md:text-5xl">
            Achievements
          </h2>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-12">
            {allAchievementsByDate.map((achievement) => {
              return (
                <div
                  className="group"
                  key={achievement.title + achievement.organization}
                >
                  <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="mb-1 font-bold text-2xl transition-colors group-hover:text-primary">
                        {achievement.title}
                      </h3>
                      <p className="mb-2 text-muted-foreground text-xl">
                        {achievement.organization}
                      </p>
                    </div>
                    <div className="text-muted-foreground text-sm md:text-right">
                      <p className="font-medium">
                        {formatDate(achievement.date, "MMM yyyy")}
                      </p>
                    </div>
                  </div>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {achievement.description.map((item, i) => (
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
