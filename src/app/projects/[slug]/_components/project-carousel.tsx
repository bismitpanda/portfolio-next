"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
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
      <h2 className="text-4xl font-bold mb-8">Project Gallery</h2>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {gallery.map((image, index) => (
            <CarouselItem key={index}>
              <div key={index} className="aspect-video rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center gap-3 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border border-white ${current === index + 1 ? "bg-white" : ""} cursor-pointer hover:bg-white/50 transition-colors duration-300`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
