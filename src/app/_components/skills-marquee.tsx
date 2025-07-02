import { Marquee } from "@/components/magicui/marquee";
import { skills } from "@/lib/constants";

export function SkillsMarquee() {
  return (
    <div className="relative">
      <Marquee className="mt-18 gap-12 [--gap:3rem]" pauseOnHover>
        {skills.map((skill) => (
          <div key={skill.label}>
            <skill.icon className="size-5 grayscale" />
            <span className="sr-only">{skill.label}</span>
          </div>
        ))}
      </Marquee>
      <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent to-50%" />
      <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent to-50%" />
    </div>
  );
}
