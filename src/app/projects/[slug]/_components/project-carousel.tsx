"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProjectCarousel({ gallery }: { gallery: Project["gallery"] }) {
  const plugin = useRef(Autoplay({ delay: 4000 }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mb-16">
      <h2 className="mb-8 font-bold text-4xl">Project Gallery</h2>
      <Carousel
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[plugin.current]}
        setApi={setApi}
      >
        <CarouselContent>
          {gallery.map((image, index) => (
            <CarouselItem key={`${index}-${image.imageUrl}`}>
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  height={600}
                  width={800}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 flex justify-center gap-3">
        {Array.from({ length: count }).map((_, index) => (
          // biome-ignore lint/a11y: This is a carousel
          <div
            className={cn(
              "size-3 rounded-full border border-white",
              current === index + 1 && "bg-white",
              "cursor-pointer transition-colors duration-300 hover:bg-white/50",
            )}
            // biome-ignore lint/suspicious/noArrayIndexKey: Index never changes as is a valid key
            key={index}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
