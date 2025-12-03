import type { Route } from "next";
import Link from "next/link";
import { skills } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section className="container-custom section-spacing">
      <div className="grid gap-12 md:grid-cols-3">
        <div>
          <h2 className="mb-6 font-medium text-4xl md:text-5xl">Skills</h2>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            {skills.map((skill, index) => (
              <div
                className="group border-border border-b pb-2"
                key={skill.label}
              >
                <div className="flex items-baseline">
                  <span className="mr-4 text-muted-foreground text-sm transition-colors group-hover:text-foreground">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <Link
                    href={skill.url as Route}
                    className="flex items-center gap-3 text-xl transition-transform group-hover:translate-x-2"
                  >
                    <skill.icon className="size-5" />
                    {skill.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
