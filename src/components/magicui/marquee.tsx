import {
  Children,
  type ComponentPropsWithoutRef,
  cloneElement,
  isValidElement,
  type ReactElement,
} from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] gap-(--gap)",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            className={cn("flex shrink-0 justify-around gap-(--gap)", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:paused": pauseOnHover,
              "direction-[reverse]": reverse,
            })}
            // biome-ignore lint/suspicious/noArrayIndexKey: This is intentional
            key={i}
          >
            {Children.map(children, (child, childIndex) => {
              if (!isValidElement(child)) return child;

              return cloneElement(
                child as ReactElement<{ key?: string | number }>,
                {
                  // biome-ignore lint/suspicious/noArrayIndexKey: repeat index is stable for marquee tracks
                  key: `${i}-${String(child.key ?? childIndex)}`,
                },
              );
            })}
          </div>
        ))}
    </div>
  );
}
