import { allAchievementsByDate } from "@/lib/content";
import { formatDate } from "date-fns";

export function AchievementsSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-4xl font-medium md:text-5xl mb-6">Achievements</h2>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-12">
            {allAchievementsByDate.map((achievement) => {
              return (
                <div key={achievement.title + achievement.organization} className="group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-2">
                        {achievement.organization}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground md:text-right">
                      <p className="font-medium">{formatDate(achievement.date, "MMM yyyy")}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
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
