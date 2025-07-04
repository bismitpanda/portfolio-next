"use client";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ProjectCarousel({ gallery, title }: { gallery: string[]; title: string }) {
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
            <CarouselItem key={index}>
              <div className="aspect-video overflow-hidden rounded-lg" key={index}>
                <Image
                  alt={`${title} - Image ${index + 1}`}
                  className="h-full w-full object-cover"
                  height={600}
                  src={image}
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
          <div
            className={`h-3 w-3 rounded-full border border-white ${current === index + 1 ? "bg-white" : ""} cursor-pointer transition-colors duration-300 hover:bg-white/50`}
            key={index}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
