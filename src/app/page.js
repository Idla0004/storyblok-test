import { Suspense } from "react";
import { connection } from "next/server";
import { Button } from "@/components/ui/button";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

async function StoryblokContent() {
  await connection();
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(
    `cdn/stories/home`,
    {
      version: "draft",
    },
  );

  return <StoryblokStory story={data.story} />;
}

export default function Home() {
  return (
    <div className="page">
      <Suspense
        fallback={<p>loading content...</p>}
      >
        <StoryblokContent />
      </Suspense>
      <Button>Click Me</Button>
    </div>
  );
}
