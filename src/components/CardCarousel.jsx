"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import FeatureCard from "@/components/FeatureCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CardCarousel({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="container mx-auto px-14 py-12"
    >
      <h2 className="text-black">{blok.title}</h2>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {blok.cards?.map((nestedBlok) => (
            <CarouselItem
              key={nestedBlok._uid}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <FeatureCard blok={nestedBlok} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
