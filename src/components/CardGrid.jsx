import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

export default function CardGrid({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="container mx-auto px-4 py-12"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {blok.cards?.map((nestedBlok) => (
          <StoryblokServerComponent
            blok={nestedBlok}
            key={nestedBlok._uid}
          />
        ))}
      </div>
    </section>
  );
}
