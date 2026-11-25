import { Button } from "@/components/ui/button";
import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div className="page">
      <StoryblokStory story={data.story} />
      <Button>Click Me</Button>
    </div>
  );
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(
    `cdn/stories/home`,
    { version: "draft" },
  );
}
