import { Marquee } from "@/components/magicui/marquee";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { skills } from "@/lib/constants";
import Link from "next/link";

export function SkillsMarquee() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent to-50% z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent to-50% z-20 pointer-events-none" />
      <Marquee className="mt-18 gap-12 [--gap:3rem]" pauseOnHover={true}>
        {skills.map((skill) => (
          <Tooltip key={skill.label}>
            <TooltipTrigger asChild>
              <Link href={skill.url}>
                <skill.icon className="size-5 grayscale-50" />
                <span className="sr-only">{skill.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs font-mono font-medium">{skill.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </Marquee>
    </div>
  );
}
