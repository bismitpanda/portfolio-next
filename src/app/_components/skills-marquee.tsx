import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skills } from "@/lib/constants";

export function SkillsMarquee() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-background to-50% to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-l from-background to-50% to-transparent" />
      <Marquee className="mt-18 gap-12 [--gap:3rem]" pauseOnHover={true}>
        {skills.map((skill) => (
          <Tooltip key={skill.label}>
            <TooltipTrigger asChild className="hover:scale-140 transition-all">
              <Link
                href={skill.url}
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <skill.icon className="size-5 grayscale-50" />
                <span className="sr-only">{skill.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-medium font-mono text-xs">{skill.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </Marquee>
    </div>
  );
}
