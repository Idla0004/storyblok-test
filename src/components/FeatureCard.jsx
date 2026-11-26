"use client";

import { motion } from "motion/react";
import { storyblokEditable } from "@storyblok/react/rsc";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeatureCard({ blok }) {
  const href =
    blok.button_link?.cached_url ||
    blok.button_link?.url ||
    "#";

  return (
    <motion.div
      {...storyblokEditable(blok)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col overflow-hidden">
        {blok.image?.filename && (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={blok.image.filename}
              alt={
                blok.image.alt ||
                blok.title ||
                "Card billede"
              }
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        <CardHeader>
          <CardTitle>{blok.title}</CardTitle>
          <CardDescription>
            {blok.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="mt-auto">
          {blok.button_text && (
            <Button asChild className="w-full">
              <Link href={href}>
                {blok.button_text}
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
